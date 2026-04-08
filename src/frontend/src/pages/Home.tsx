import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SUPPORTED_LANGUAGES } from "@/types/tts";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  AudioLines,
  CheckCircle2,
  Download,
  Languages,
  Moon,
  SlidersHorizontal,
  Zap,
} from "lucide-react";

const FEATURES = [
  {
    icon: Languages,
    title: "Tamil & 7+ Languages",
    description:
      "First-class support for Tamil (தமிழ்) with natural pronunciation, plus Hindi, Telugu, English and more.",
    accent: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Download,
    title: "Download Audio",
    description:
      "Save your speech as an audio file directly from the browser. No accounts, no uploads.",
    accent: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description:
      "Powered by your browser's built-in speech engine — zero latency, no server round-trips.",
    accent: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: SlidersHorizontal,
    title: "Speed & Pitch Control",
    description:
      "Fine-tune playback speed (0.5×–2×) and pitch to match your preferred listening style.",
    accent: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Moon,
    title: "Dark Mode First",
    description:
      "Designed for low-light reading sessions with a premium dark-mode interface.",
    accent: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: AudioLines,
    title: "Natural AI Voice",
    description:
      "Uses advanced speech synthesis voices available on your device for the most natural output.",
    accent: "text-accent",
    bg: "bg-accent/10",
  },
];

const HIGHLIGHTS = [
  "No sign-up required",
  "Works offline after first load",
  "Mobile-friendly design",
  "Privacy-first — text never leaves your device",
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center bg-background overflow-hidden px-4 pt-10 pb-12 md:pt-16 md:pb-20">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-accent/6 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center animate-slide-up">
          <Badge
            variant="secondary"
            className="mb-4 px-3 py-1 text-xs font-medium border border-border/70 bg-muted/60"
          >
            <AudioLines className="w-3 h-3 mr-1.5 text-primary" />
            Powered by Browser Speech AI
          </Badge>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-foreground mb-4">
            AI Text Reader
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-balance mb-3 leading-relaxed">
            Convert any text into natural, human-like speech — with{" "}
            <span className="text-primary font-semibold">
              first-class Tamil support
            </span>{" "}
            and 7+ languages built-in.
          </p>

          <p className="text-sm text-muted-foreground mb-8">
            வணக்கம்! இந்த செயலி உங்கள் உரையை இயற்கையான குரலாக மாற்றும்.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link to="/reader">
              <Button
                size="lg"
                className="btn-accent w-full sm:w-auto text-base px-8 py-3 h-auto"
                data-ocid="hero-cta-reader"
              >
                Start Reading
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <a href="#features">
              <Button
                variant="ghost"
                size="lg"
                className="text-muted-foreground hover:text-foreground transition-colors w-full sm:w-auto"
              >
                See Features
              </Button>
            </a>
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative z-10 mt-10 w-full max-w-2xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden border border-border/60 shadow-2xl shadow-black/40">
            <img
              src="/assets/generated/hero-tts-waves.dim_800x480.png"
              alt="AI Text Reader — sound waves and Tamil script visualization"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="bg-muted/30 border-y border-border/50 py-5 px-4">
        <div className="max-w-3xl mx-auto">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground"
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-background px-4 py-14 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Everything You Need
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
              A focused, powerful tool with all the controls you need — nothing
              you don't.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="card-elevated p-5 hover:border-border transition-smooth hover:shadow-md group"
                  data-ocid={`feature-card-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg ${feature.bg} flex items-center justify-center mb-3`}
                  >
                    <Icon className={`w-5 h-5 ${feature.accent}`} />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-foreground mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="bg-muted/20 border-t border-border/50 px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Supported Languages
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            Tamil is our primary focus — but we speak your language too.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <div
                key={lang.code}
                className={`flex flex-col items-center gap-1 px-4 py-3 rounded-xl border transition-smooth cursor-default ${
                  lang.code === "ta"
                    ? "bg-primary/15 border-primary/40 text-primary"
                    : "bg-card border-border/60 text-foreground hover:border-border"
                }`}
                data-ocid={`lang-badge-${lang.code}`}
              >
                <span className="text-sm font-semibold">
                  {lang.nativeLabel}
                </span>
                <span className="text-xs text-muted-foreground">
                  {lang.label}
                </span>
                {lang.code === "ta" && (
                  <span className="text-[10px] font-medium text-primary bg-primary/10 px-1.5 py-0.5 rounded-full">
                    Primary
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background border-t border-border/50 px-4 py-14 md:py-20">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-5">
            <AudioLines className="w-7 h-7 text-accent" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
            Ready to Listen?
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-sm mx-auto">
            Paste your text, pick a language, and hit play. It takes less than 5
            seconds.
          </p>
          <Link to="/reader">
            <Button
              size="lg"
              className="btn-accent px-10 py-3 h-auto text-base"
              data-ocid="bottom-cta-reader"
            >
              Open Reader
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
