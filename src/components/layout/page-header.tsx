import { ArrowMotif } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="relative overflow-hidden bg-navy-gradient pb-16 pt-36 text-white">
      <div className="absolute inset-0 bg-dotgrid opacity-25" />
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sage-gradient opacity-20 blur-3xl"
        aria-hidden
      />
      <div className="container relative">
        <div className="max-w-2xl">
          {eyebrow && (
            <Reveal>
              <span className="eyebrow text-sage-300">
                <ArrowMotif className="h-3.5 w-3.5" />
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal delayIndex={1}>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delayIndex={2}>
              <p className="mt-5 text-lg leading-relaxed text-white/75">
                {description}
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </header>
  );
}
