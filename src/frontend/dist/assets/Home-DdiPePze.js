import { c as createLucideIcon, j as jsxRuntimeExports, a as cn, L as Link, B as Button, M as Moon } from "./index-B5_ixe7b.js";
import { B as Badge, D as Download, S as SUPPORTED_LANGUAGES } from "./tts-DZfIWhMZ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M2 10v3", key: "1fnikh" }],
  ["path", { d: "M6 6v11", key: "11sgs0" }],
  ["path", { d: "M10 3v18", key: "yhl04a" }],
  ["path", { d: "M14 8v7", key: "3a1oy3" }],
  ["path", { d: "M18 5v13", key: "123xd1" }],
  ["path", { d: "M22 10v3", key: "154ddg" }]
];
const AudioLines = createLucideIcon("audio-lines", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
];
const Languages = createLucideIcon("languages", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
const FEATURES = [
  {
    icon: Languages,
    title: "Tamil & 7+ Languages",
    description: "First-class support for Tamil (தமிழ்) with natural pronunciation, plus Hindi, Telugu, English and more.",
    accent: "text-primary",
    bg: "bg-primary/10"
  },
  {
    icon: Download,
    title: "Download Audio",
    description: "Save your speech as an audio file directly from the browser. No accounts, no uploads.",
    accent: "text-accent",
    bg: "bg-accent/10"
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description: "Powered by your browser's built-in speech engine — zero latency, no server round-trips.",
    accent: "text-primary",
    bg: "bg-primary/10"
  },
  {
    icon: SlidersHorizontal,
    title: "Speed & Pitch Control",
    description: "Fine-tune playback speed (0.5×–2×) and pitch to match your preferred listening style.",
    accent: "text-accent",
    bg: "bg-accent/10"
  },
  {
    icon: Moon,
    title: "Dark Mode First",
    description: "Designed for low-light reading sessions with a premium dark-mode interface.",
    accent: "text-primary",
    bg: "bg-primary/10"
  },
  {
    icon: AudioLines,
    title: "Natural AI Voice",
    description: "Uses advanced speech synthesis voices available on your device for the most natural output.",
    accent: "text-accent",
    bg: "bg-accent/10"
  }
];
const HIGHLIGHTS = [
  "No sign-up required",
  "Works offline after first load",
  "Mobile-friendly design",
  "Privacy-first — text never leaves your device"
];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex flex-col items-center justify-center bg-background overflow-hidden px-4 pt-10 pb-12 md:pt-16 md:pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "absolute inset-0 pointer-events-none",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/8 blur-3xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 right-0 w-64 h-64 rounded-full bg-accent/6 blur-3xl" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-2xl mx-auto text-center animate-slide-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Badge,
          {
            variant: "secondary",
            className: "mb-4 px-3 py-1 text-xs font-medium border border-border/70 bg-muted/60",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AudioLines, { className: "w-3 h-3 mr-1.5 text-primary" }),
              "Powered by Browser Speech AI"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-foreground mb-4", children: "AI Text Reader" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg md:text-xl text-muted-foreground text-balance mb-3 leading-relaxed", children: [
          "Convert any text into natural, human-like speech — with",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-semibold", children: "first-class Tamil support" }),
          " ",
          "and 7+ languages built-in."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-8", children: "வணக்கம்! இந்த செயலி உங்கள் உரையை இயற்கையான குரலாக மாற்றும்." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/reader", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "lg",
              className: "btn-accent w-full sm:w-auto text-base px-8 py-3 h-auto",
              "data-ocid": "hero-cta-reader",
              children: [
                "Start Reading",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#features", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "lg",
              className: "text-muted-foreground hover:text-foreground transition-colors w-full sm:w-auto",
              children: "See Features"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mt-10 w-full max-w-2xl mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden border border-border/60 shadow-2xl shadow-black/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/assets/generated/hero-tts-waves.dim_800x480.png",
          alt: "AI Text Reader — sound waves and Tamil script visualization",
          className: "w-full h-auto object-cover",
          loading: "eager"
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 border-y border-border/50 py-5 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: HIGHLIGHTS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "li",
      {
        className: "flex items-center gap-2 text-xs md:text-sm text-muted-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
        ]
      },
      item
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "features", className: "bg-background px-4 py-14 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-3", children: "Everything You Need" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm md:text-base max-w-md mx-auto", children: "A focused, powerful tool with all the controls you need — nothing you don't." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: FEATURES.map((feature) => {
        const Icon = feature.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: "card-elevated p-5 hover:border-border transition-smooth hover:shadow-md group",
            "data-ocid": `feature-card-${feature.title.toLowerCase().replace(/\s+/g, "-")}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-9 h-9 rounded-lg ${feature.bg} flex items-center justify-center mb-3`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-5 h-5 ${feature.accent}` })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm font-semibold text-foreground mb-1.5", children: feature.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: feature.description })
            ]
          },
          feature.title
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/20 border-t border-border/50 px-4 py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-3", children: "Supported Languages" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-8", children: "Tamil is our primary focus — but we speak your language too." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-3", children: SUPPORTED_LANGUAGES.map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `flex flex-col items-center gap-1 px-4 py-3 rounded-xl border transition-smooth cursor-default ${lang.code === "ta" ? "bg-primary/15 border-primary/40 text-primary" : "bg-card border-border/60 text-foreground hover:border-border"}`,
          "data-ocid": `lang-badge-${lang.code}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: lang.nativeLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: lang.label }),
            lang.code === "ta" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium text-primary bg-primary/10 px-1.5 py-0.5 rounded-full", children: "Primary" })
          ]
        },
        lang.code
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background border-t border-border/50 px-4 py-14 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AudioLines, { className: "w-7 h-7 text-accent" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance", children: "Ready to Listen?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm md:text-base mb-8 max-w-sm mx-auto", children: "Paste your text, pick a language, and hit play. It takes less than 5 seconds." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/reader", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "lg",
          className: "btn-accent px-10 py-3 h-auto text-base",
          "data-ocid": "bottom-cta-reader",
          children: [
            "Open Reader",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
          ]
        }
      ) })
    ] }) })
  ] });
}
export {
  Home as default
};
