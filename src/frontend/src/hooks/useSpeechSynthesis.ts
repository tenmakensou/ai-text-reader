import type { SpeechStatus, VoiceOption } from "@/types/tts";
import { useCallback, useEffect, useRef, useState } from "react";

interface UseSpeechSynthesisOptions {
  rate?: number;
  pitch?: number;
  voiceName?: string;
  langBcp47?: string;
}

interface UseSpeechSynthesisReturn {
  status: SpeechStatus;
  voices: VoiceOption[];
  speak: (text: string) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  isSupported: boolean;
  currentText: string;
}

export function useSpeechSynthesis(
  options: UseSpeechSynthesisOptions = {},
): UseSpeechSynthesisReturn {
  const {
    rate = 1.0,
    pitch = 1.0,
    voiceName = "",
    langBcp47 = "ta-IN",
  } = options;

  const [status, setStatus] = useState<SpeechStatus>("idle");
  const [voices, setVoices] = useState<VoiceOption[]>([]);
  const [currentText, setCurrentText] = useState("");
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const isSupported =
    typeof window !== "undefined" && "speechSynthesis" in window;

  const loadVoices = useCallback(() => {
    if (!isSupported) return;
    const allVoices = window.speechSynthesis.getVoices();
    const filtered = allVoices.filter((v) =>
      v.lang.toLowerCase().startsWith(langBcp47.split("-")[0].toLowerCase()),
    );

    const options: VoiceOption[] =
      filtered.length > 0
        ? filtered.map((v, i) => ({
            voice: v,
            label: v.name,
            isDefault: i === 0,
          }))
        : [{ voice: null, label: "Default System Voice", isDefault: true }];

    setVoices(options);
  }, [isSupported, langBcp47]);

  useEffect(() => {
    if (!isSupported) return;
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, [isSupported, loadVoices]);

  const speak = useCallback(
    (text: string) => {
      if (!isSupported || !text.trim()) return;
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = Math.max(0.1, Math.min(2, rate));
      utterance.pitch = Math.max(0, Math.min(2, pitch));
      utterance.lang = langBcp47;

      if (voiceName) {
        const allVoices = window.speechSynthesis.getVoices();
        const match = allVoices.find((v) => v.name === voiceName);
        if (match) utterance.voice = match;
      } else if (voices.length > 0 && voices[0].voice) {
        utterance.voice = voices[0].voice;
      }

      utterance.onstart = () => setStatus("playing");
      utterance.onpause = () => setStatus("paused");
      utterance.onresume = () => setStatus("playing");
      utterance.onend = () => setStatus("idle");
      utterance.onerror = () => setStatus("error");

      utteranceRef.current = utterance;
      setCurrentText(text);
      setStatus("playing");
      window.speechSynthesis.speak(utterance);
    },
    [isSupported, rate, pitch, langBcp47, voiceName, voices],
  );

  const pause = useCallback(() => {
    if (isSupported && window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      setStatus("paused");
    }
  }, [isSupported]);

  const resume = useCallback(() => {
    if (isSupported && window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setStatus("playing");
    }
  }, [isSupported]);

  const stop = useCallback(() => {
    if (isSupported) {
      window.speechSynthesis.cancel();
      setStatus("idle");
      setCurrentText("");
    }
  }, [isSupported]);

  useEffect(() => {
    return () => {
      if (isSupported) window.speechSynthesis.cancel();
    };
  }, [isSupported]);

  return {
    status,
    voices,
    speak,
    pause,
    resume,
    stop,
    isSupported,
    currentText,
  };
}
