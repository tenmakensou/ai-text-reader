import { c as createLucideIcon, j as jsxRuntimeExports, S as Slot, a as cn, h as cva } from "./index-B5_ixe7b.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode);
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
const SUPPORTED_LANGUAGES = [
  { code: "ta", label: "Tamil", nativeLabel: "தமிழ்", bcp47: "ta-IN" },
  { code: "en", label: "English", nativeLabel: "English", bcp47: "en-US" },
  { code: "hi", label: "Hindi", nativeLabel: "हिन्दी", bcp47: "hi-IN" },
  { code: "te", label: "Telugu", nativeLabel: "తెలుగు", bcp47: "te-IN" },
  { code: "kn", label: "Kannada", nativeLabel: "ಕನ್ನಡ", bcp47: "kn-IN" },
  { code: "ml", label: "Malayalam", nativeLabel: "മലയാളം", bcp47: "ml-IN" },
  { code: "fr", label: "French", nativeLabel: "Français", bcp47: "fr-FR" },
  { code: "de", label: "German", nativeLabel: "Deutsch", bcp47: "de-DE" }
];
const DEFAULT_SETTINGS = {
  languageCode: "ta",
  voiceName: "",
  rate: 1,
  pitch: 1
};
export {
  Badge as B,
  Download as D,
  SUPPORTED_LANGUAGES as S,
  DEFAULT_SETTINGS as a
};
