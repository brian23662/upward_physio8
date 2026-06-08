import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  light = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className={cn("eyebrow", light && "text-sage-300")}>
            <ArrowMotif className="h-3.5 w-3.5" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delayIndex={1}>
        <h2
          className={cn(
            "mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl",
            light ? "text-white" : "text-navy dark:text-white"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delayIndex={2}>
          <p
            className={cn(
              "mt-4 text-lg leading-relaxed",
              light ? "text-white/70" : "text-muted-foreground"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** The upward-arrow motif from the logo, reusable as a small accent. */
export function ArrowMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-sage-600", className)}
      aria-hidden="true"
    >
      <path
        d="M5 19c0-7 4-11 10-12m0 0-4.5 1.2M15 7l1.4 4.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
