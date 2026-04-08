export interface Language {
  code: string;
  label: string;
  nativeLabel: string;
  bcp47: string;
}

export interface VoiceOption {
  voice: SpeechSynthesisVoice | null;
  label: string;
  isDefault?: boolean;
}

export type SpeechStatus = "idle" | "playing" | "paused" | "error";

export interface TTSSettings {
  languageCode: string;
  voiceName: string;
  rate: number;
  pitch: number;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: "ta", label: "Tamil", nativeLabel: "தமிழ்", bcp47: "ta-IN" },
  { code: "en", label: "English", nativeLabel: "English", bcp47: "en-US" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी", bcp47: "hi-IN" },
  { code: "te", label: "Telugu", nativeLabel: "తెలుగు", bcp47: "te-IN" },
  { code: "kn", label: "Kannada", nativeLabel: "ಕನ್ನಡ", bcp47: "kn-IN" },
  { code: "ml", label: "Malayalam", nativeLabel: "മലയാളം", bcp47: "ml-IN" },
  { code: "fr", label: "French", nativeLabel: "Français", bcp47: "fr-FR" },
  { code: "de", label: "German", nativeLabel: "Deutsch", bcp47: "de-DE" },
];

export const DEFAULT_SETTINGS: TTSSettings = {
  languageCode: "ta",
  voiceName: "",
  rate: 1.0,
  pitch: 1.0,
};
