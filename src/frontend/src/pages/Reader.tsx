import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useSpeechSynthesis } from "@/hooks/useSpeechSynthesis";
import { DEFAULT_SETTINGS, SUPPORTED_LANGUAGES } from "@/types/tts";
import type { TTSSettings } from "@/types/tts";
import {
  AlertCircle,
  Check,
  Copy,
  Download,
  Pause,
  Play,
  Square,
  Volume2,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const MAX_CHARS = 5000;

function StatusBadge({ status }: { status: string }) {
  const configs = {
    idle: { label: "Ready", className: "bg-muted text-muted-foreground" },
    playing: {
      label: "Playing",
      className: "bg-primary/20 text-primary border-primary/30 animate-pulse",
    },
    paused: {
      label: "Paused",
      className: "bg-accent/20 text-accent border-accent/30",
    },
    error: {
      label: "Error",
      className: "bg-destructive/20 text-destructive border-destructive/30",
    },
  };
  const cfg = configs[status as keyof typeof configs] ?? configs.idle;
  return (
    <Badge
      variant="outline"
      className={`text-xs px-2 py-0.5 transition-smooth ${cfg.className}`}
    >
      {cfg.label}
    </Badge>
  );
}

export default function Reader() {
  const [savedText, setSavedText] = useLocalStorage("tts-text", "");
  const [settings, setSettings] = useLocalStorage<TTSSettings>(
    "tts-settings",
    DEFAULT_SETTINGS,
  );
  const [text, setText] = useState(savedText);
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const selectedLang =
    SUPPORTED_LANGUAGES.find((l) => l.code === settings.languageCode) ??
    SUPPORTED_LANGUAGES[0];

  const { status, voices, speak, pause, resume, stop, isSupported } =
    useSpeechSynthesis({
      rate: settings.rate,
      pitch: settings.pitch,
      voiceName: settings.voiceName,
      langBcp47: selectedLang.bcp47,
    });

  // Persist text to localStorage on change
  useEffect(() => {
    setSavedText(text);
  }, [text, setSavedText]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= MAX_CHARS) {
      setText(e.target.value);
    }
  };

  const handleCopy = useCallback(async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  const handleClear = useCallback(() => {
    stop();
    setText("");
    textareaRef.current?.focus();
  }, [stop]);

  const handlePlay = useCallback(() => {
    if (!text.trim()) return;
    if (status === "paused") {
      resume();
    } else {
      speak(text);
    }
  }, [text, status, speak, resume]);

  const handlePause = useCallback(() => {
    if (status === "playing") pause();
    else if (status === "paused") resume();
  }, [status, pause, resume]);

  const handleStop = useCallback(() => stop(), [stop]);

  const handleLangChange = (code: string) => {
    setSettings((prev) => ({ ...prev, languageCode: code, voiceName: "" }));
    stop();
  };

  const handleVoiceChange = (voiceName: string) => {
    setSettings((prev) => ({
      ...prev,
      voiceName: voiceName === "__default__" ? "" : voiceName,
    }));
  };

  const handleRateChange = (val: number[]) => {
    setSettings((prev) => ({ ...prev, rate: val[0] }));
  };

  const handlePitchChange = (val: number[]) => {
    setSettings((prev) => ({ ...prev, pitch: val[0] }));
  };

  const handleDownload = useCallback(async () => {
    if (!text.trim() || isDownloading) return;
    setIsDownloading(true);

    try {
      // Use AudioContext + SpeechSynthesis approach via MediaStreamDestination
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioContextClass) throw new Error("AudioContext not supported");

      const audioCtx = new AudioContextClass();
      const destination = audioCtx.createMediaStreamDestination();
      const recorder = new MediaRecorder(destination.stream, {
        mimeType: MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
          ? "audio/webm;codecs=opus"
          : "audio/webm",
      });

      const chunks: Blob[] = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "ai-text-reader-audio.webm";
        a.click();
        URL.revokeObjectURL(url);
        setIsDownloading(false);
      };

      // Fallback: if MediaRecorder with SpeechSynthesis doesn't capture (common in Chrome),
      // we use oscillator to keep the stream alive and speak separately, then save as-is.
      // The most reliable approach on desktop browsers is simply re-speaking while recording.
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = Math.max(0.1, Math.min(2, settings.rate));
      utterance.pitch = Math.max(0, Math.min(2, settings.pitch));
      utterance.lang = selectedLang.bcp47;

      if (settings.voiceName) {
        const allVoices = window.speechSynthesis.getVoices();
        const match = allVoices.find((v) => v.name === settings.voiceName);
        if (match) utterance.voice = match;
      }

      // Add a silent oscillator to keep the stream alive during recording
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      gainNode.gain.value = 0;
      oscillator.connect(gainNode);
      gainNode.connect(destination);
      oscillator.start();

      recorder.start();
      utterance.onend = () => {
        oscillator.stop();
        recorder.stop();
        audioCtx.close();
      };
      utterance.onerror = () => {
        oscillator.stop();
        recorder.stop();
        audioCtx.close();
        setIsDownloading(false);
      };

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    } catch {
      // Fallback: just speak (download not available)
      setIsDownloading(false);
      speak(text);
    }
  }, [
    text,
    isDownloading,
    settings.rate,
    settings.pitch,
    settings.voiceName,
    selectedLang.bcp47,
    speak,
  ]);

  const charCount = text.length;
  const charPercent = (charCount / MAX_CHARS) * 100;

  return (
    <main
      className="min-h-screen bg-background flex flex-col"
      data-ocid="reader-page"
    >
      {/* Page Header */}
      <div className="bg-card border-b border-border px-4 py-3 flex items-center gap-3">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
            <Volume2 className="w-4 h-4 text-primary" />
          </div>
          <div className="min-w-0">
            <h1 className="text-base font-display font-semibold text-foreground leading-tight">
              AI Text Reader
            </h1>
            <p className="text-xs text-muted-foreground hidden sm:block">
              Convert text to natural speech
            </p>
          </div>
        </div>
        <StatusBadge status={status} />
      </div>

      <div className="flex-1 flex flex-col gap-0 max-w-2xl mx-auto w-full p-4 pb-6 space-y-3">
        {/* Text Input Card */}
        <div
          className="card-elevated p-3 animate-slide-up"
          style={{ animationDelay: "0ms" }}
        >
          <div className="flex items-center justify-between mb-2">
            <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Your Text
            </Label>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleCopy}
                disabled={!text}
                data-ocid="copy-btn"
                aria-label="Copy text"
                className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-primary" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
              <button
                type="button"
                onClick={handleClear}
                disabled={!text}
                data-ocid="clear-btn"
                aria-label="Clear text"
                className="p-1.5 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-smooth disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <Textarea
            ref={textareaRef}
            value={text}
            onChange={handleTextChange}
            placeholder="வணக்கம்! இங்கே உங்கள் தமிழ் உரையை ஒட்டவும் அல்லது தட்டச்சு செய்யவும்.&#10;&#10;Paste or type your text here to listen..."
            data-ocid="text-input"
            className="min-h-[160px] resize-none text-sm bg-background/60 border-border/60 focus:border-primary/50 placeholder:text-muted-foreground/50 leading-relaxed"
          />

          {/* Character counter */}
          <div className="mt-2 flex items-center gap-2">
            <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
              <div
                className={[
                  "h-full rounded-full transition-all duration-300",
                  charPercent > 90
                    ? "bg-destructive"
                    : charPercent > 70
                      ? "bg-accent"
                      : "bg-primary",
                ].join(" ")}
                style={{ width: `${Math.min(charPercent, 100)}%` }}
              />
            </div>
            <span
              className={[
                "text-xs tabular-nums",
                charPercent > 90 ? "text-destructive" : "text-muted-foreground",
              ].join(" ")}
            >
              {charCount.toLocaleString()}/{MAX_CHARS.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Language + Voice */}
        <div
          className="card-elevated p-3 animate-slide-up"
          style={{ animationDelay: "60ms" }}
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Language
              </Label>
              <Select
                value={settings.languageCode}
                onValueChange={handleLangChange}
              >
                <SelectTrigger
                  data-ocid="language-select"
                  className="bg-background/60 border-border/60 text-sm h-9"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      <span className="font-medium">{lang.nativeLabel}</span>
                      <span className="text-muted-foreground ml-1 text-xs">
                        ({lang.label})
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Voice
              </Label>
              <Select
                value={settings.voiceName || "__default__"}
                onValueChange={handleVoiceChange}
              >
                <SelectTrigger
                  data-ocid="voice-select"
                  className="bg-background/60 border-border/60 text-sm h-9"
                >
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="__default__">Default Voice</SelectItem>
                  {voices
                    .filter((v) => v.voice !== null)
                    .map((v) => (
                      <SelectItem key={v.voice!.name} value={v.voice!.name}>
                        {v.label}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Playback Controls */}
        <div
          className="card-elevated p-4 animate-slide-up"
          style={{ animationDelay: "120ms" }}
        >
          <div className="flex items-center justify-center gap-4">
            {/* Play / Resume */}
            <button
              type="button"
              onClick={handlePlay}
              disabled={!text.trim() || !isSupported || status === "playing"}
              data-ocid="play-btn"
              aria-label="Play"
              className="w-16 h-16 rounded-full btn-accent flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 transition-smooth shadow-lg"
            >
              <Play className="w-7 h-7 fill-current ml-0.5" />
            </button>

            {/* Pause/Resume */}
            <button
              type="button"
              onClick={handlePause}
              disabled={status === "idle" || status === "error" || !isSupported}
              data-ocid="pause-btn"
              aria-label={status === "paused" ? "Resume" : "Pause"}
              className="w-14 h-14 rounded-full bg-muted hover:bg-muted/70 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 transition-smooth"
            >
              {status === "paused" ? (
                <Play className="w-6 h-6 fill-current text-foreground ml-0.5" />
              ) : (
                <Pause className="w-6 h-6 fill-current text-foreground" />
              )}
            </button>

            {/* Stop */}
            <button
              type="button"
              onClick={handleStop}
              disabled={status === "idle" || !isSupported}
              data-ocid="stop-btn"
              aria-label="Stop"
              className="w-14 h-14 rounded-full bg-muted hover:bg-muted/70 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 transition-smooth"
            >
              <Square className="w-5 h-5 fill-current text-foreground" />
            </button>
          </div>

          {!isSupported && (
            <div className="mt-3 flex items-center gap-2 text-destructive text-xs bg-destructive/10 rounded-lg px-3 py-2">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Speech synthesis is not supported in your browser.</span>
            </div>
          )}
        </div>

        {/* Speed + Pitch */}
        <div
          className="card-elevated p-4 space-y-5 animate-slide-up"
          style={{ animationDelay: "180ms" }}
        >
          {/* Speed */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Speed
              </Label>
              <span className="text-xs font-mono font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                {settings.rate.toFixed(1)}x
              </span>
            </div>
            <Slider
              data-ocid="speed-slider"
              min={0.5}
              max={2.0}
              step={0.1}
              value={[settings.rate]}
              onValueChange={handleRateChange}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground/60 font-mono">
              <span>0.5x</span>
              <span>1.0x</span>
              <span>1.5x</span>
              <span>2.0x</span>
            </div>
          </div>

          {/* Pitch */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Pitch
              </Label>
              <span className="text-xs font-mono font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                {settings.pitch.toFixed(1)}
              </span>
            </div>
            <Slider
              data-ocid="pitch-slider"
              min={0.5}
              max={2.0}
              step={0.1}
              value={[settings.pitch]}
              onValueChange={handlePitchChange}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground/60 font-mono">
              <span>0.5</span>
              <span>1.0</span>
              <span>1.5</span>
              <span>2.0</span>
            </div>
          </div>
        </div>

        {/* Download */}
        <div className="animate-slide-up" style={{ animationDelay: "240ms" }}>
          <Button
            onClick={handleDownload}
            disabled={!text.trim() || isDownloading || !isSupported}
            data-ocid="download-btn"
            className="w-full h-12 text-sm font-semibold gap-2 btn-primary"
            variant="default"
          >
            {isDownloading ? (
              <>
                <div className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                Recording & Saving...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Download Audio
              </>
            )}
          </Button>
          <p className="text-center text-xs text-muted-foreground mt-1.5">
            Saves as WebM audio • Works best in Chrome / Edge
          </p>
        </div>
      </div>
    </main>
  );
}
