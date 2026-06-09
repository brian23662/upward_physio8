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

/** Small diamond accent used as the eyebrow marker above section headings. */
export function ArrowMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("text-sage-600", className)}
      aria-hidden="true"
    >
      <rect
        x="7"
        y="7"
        width="10"
        height="10"
        transform="rotate(45 12 12)"
        fill="currentColor"
      />
    </svg>
  );
}
