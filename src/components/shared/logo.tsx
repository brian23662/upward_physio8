import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Inline U-arrow icon mark. Recolors via `currentColor` so it's always crisp
 * and high-contrast in any context (no file fetch, no optimizer issues).
 * Geometry extracted from the original Upward logo artwork.
 */
const ICON_PATH =
  "M 247.33 83.03 A 0.32 0.31 -21.3 0 0 246.77 82.79 C 229.08 105.86 207.69 127.46 181.29 140.04 Q 166.23 147.22 147.77 148.09 A 0.15 0.13 -20.8 0 1 147.67 148.05 L 147.21 147.61 A 0.27 0.27 0.0 0 1 147.36 147.14 C 168.71 143.92 186.60 129.85 201.14 114.88 Q 228.54 86.68 246.11 50.73 A 0.26 0.25 -75.3 0 0 245.90 50.36 L 231.10 49.35 A 0.21 0.21 0.0 0 1 230.98 48.97 L 271.56 15.63 A 0.22 0.22 0.0 0 1 271.92 15.78 L 277.30 65.13 A 0.48 0.48 0.0 0 1 276.54 65.57 L 265.03 57.13 A 0.43 0.43 0.0 0 0 264.34 57.48 Q 264.46 111.49 264.48 113.06 Q 264.68 130.62 263.11 138.07 C 257.30 165.58 236.55 187.60 208.02 190.99 Q 192.83 192.79 177.53 190.47 Q 151.39 186.49 136.65 166.38 Q 124.04 149.18 124.05 126.73 Q 124.06 96.09 123.95 83.33 C 123.90 77.80 123.61 74.21 127.97 71.51 C 134.66 67.36 142.18 71.98 142.16 79.78 Q 142.07 119.90 142.21 131.98 Q 142.32 141.22 147.65 151.14 C 153.36 161.76 163.41 169.74 175.76 171.87 Q 196.68 175.49 213.42 171.89 C 229.60 168.41 241.67 153.29 245.80 137.80 Q 247.32 132.09 247.28 118.63 Q 247.19 89.44 247.18 86.50 Q 247.18 83.88 247.33 83.03 Z";

export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="118 12 184 184"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-auto", className)}
      role="img"
      aria-label="Upward"
    >
      <path d={ICON_PATH} fill="currentColor" />
    </svg>
  );
}

/**
 * Full logo lockup: icon + "UPWARD" wordmark + tagline strip.
 * `tone` controls color. Always links home unless href is null.
 */
export function Logo({
  tone = "navy",
  href = "/",
  className,
  showTagline = true,
}: {
  tone?: "navy" | "white";
  href?: string | null;
  className?: string;
  showTagline?: boolean;
}) {
  const color = tone === "white" ? "text-white" : "text-navy dark:text-white";

  const lockup = (
    <span className={cn("inline-flex items-center gap-2.5", color, className)}>
      <LogoIcon className="h-9 w-9 shrink-0 text-sage-500" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl font-extrabold tracking-[0.04em]">
          UPWARD
        </span>
        {showTagline && (
          <span
            className={cn(
              "mt-0.5 text-[0.5rem] font-semibold uppercase tracking-[0.28em]",
              tone === "white" ? "text-white/70" : "text-sage-600 dark:text-white/70"
            )}
          >
            Physio &amp; Performance
          </span>
        )}
      </span>
    </span>
  );

  if (href === null) return lockup;

  return (
    <Link
      href={href}
      aria-label="Upward Physio and Performance — home"
      className="inline-flex"
    >
      {lockup}
    </Link>
  );
}

/** Circular submark — just the U-arrow icon on a tinted disc. */
export function Submark({
  tone = "teal",
  className,
}: {
  tone?: "teal" | "navy" | "white";
  className?: string;
}) {
  const colors = {
    teal: "bg-navy text-sage-400",
    navy: "bg-sage-50 text-navy",
    white: "bg-white/10 text-white",
  }[tone];
  return (
    <span
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full",
        colors,
        className
      )}
    >
      <LogoIcon className="h-6 w-6" />
    </span>
  );
}
