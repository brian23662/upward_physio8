import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { avenues } from "@/lib/site";

export function generateStaticParams() {
  return avenues.map((a) => ({ avenue: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ avenue: string }>;
}): Promise<Metadata> {
  const { avenue } = await params;
  const a = avenues.find((x) => x.slug === avenue);
  if (!a) return {};
  return {
    title: a.name,
    description: a.blurb,
    openGraph: { title: a.name, description: a.blurb, images: [{ url: a.image }] },
  };
}

/** Per-avenue "how it works" steps. */
const PROCESS: Record<string, { step: string; body: string }[]> = {
  physio: [
    { step: "Evaluate", body: "A full movement assessment to find the real driver of your pain — not just the symptom." },
    { step: "Treat", body: "Targeted exercise and education, with hands-on techniques layered in when they speed things up." },
    { step: "Build", body: "A home program that fits your life so progress sticks long after you leave the clinic." },
  ],
  performance: [
    { step: "Screen", body: "Movement screens and performance testing to find your limiting factors." },
    { step: "Program", body: "CSCS-designed strength work matched to your goals and training history." },
    { step: "Progress", body: "Progressive loading that keeps you durable and confident under the bar." },
  ],
  work: [
    { step: "Assess", body: "Job-task and ergonomic assessments to map the real musculoskeletal risks in your workplace." },
    { step: "Intervene", body: "On-site early intervention and triage that catch strains before they become claims." },
    { step: "Sustain", body: "Recurring on-site programming and reporting that proves the impact over time." },
  ],
  wellness: [
    { step: "Educate", body: "Workshops and lunch-and-learns that teach the why behind better movement." },
    { step: "Coach", body: "Posture, mobility, and desk-setup coaching tailored to your team or your life." },
    { step: "Habituate", body: "Simple, repeatable habits that lower injury risk and help people feel better daily." },
  ],
};

export default async function AvenuePage({
  params,
}: {
  params: Promise<{ avenue: string }>;
}) {
  const { avenue: slug } = await params;
  const avenue = avenues.find((a) => a.slug === slug);
  if (!avenue) notFound();

  const Icon = avenue.icon;
  const isCorporate = avenue.slug === "work" || avenue.slug === "wellness";
  const process = PROCESS[avenue.slug] ?? [];
  const others = avenues.filter((a) => a.slug !== avenue.slug);

  return (
    <>
      <PageHeader eyebrow={avenue.kicker} title={avenue.name} description={avenue.title} />

      {/* Overview */}
      <section className="container py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-sage-gradient opacity-15 blur-2xl" />
              <div className="overflow-hidden rounded-[1.75rem] shadow-lift">
                <Image
                  src={avenue.image}
                  alt={avenue.imageAlt}
                  width={1500}
                  height={1000}
                  className="aspect-[3/2] w-full object-cover"
                  priority
                />
              </div>
            </div>
          </Reveal>
          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-sage-400">
              <Icon className="h-6 w-6" />
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold text-navy dark:text-white">
              {avenue.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{avenue.blurb}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {avenue.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-gradient text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-navy dark:text-white/90">{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="sage" size="lg">
                <Link href={isCorporate ? "/for-businesses" : "/contact"}>
                  {isCorporate ? "Request a proposal" : "Book a visit"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      {process.length > 0 && (
        <section className="bg-muted py-24">
          <div className="container">
            <SectionHeading
              eyebrow="How it works"
              title={`The ${avenue.name} approach`}
            />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {process.map((p, i) => (
                <Reveal key={p.step} delayIndex={i}>
                  <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                    <span className="font-display text-4xl font-bold text-gradient-sage">
                      0{i + 1}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-semibold text-navy dark:text-white">
                      {p.step}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Explore the rest of the family */}
      <section className="container py-24">
        <SectionHeading eyebrow="The Upward family" title="Explore other programs" />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {others.map((o, i) => {
            const OIcon = o.icon;
            return (
              <Reveal key={o.slug} delayIndex={i}>
                <Link
                  href={o.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-sage-300 hover:shadow-card"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sage-50 text-sage-700 dark:bg-sage-900/30 dark:text-sage-400">
                    <OIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display font-semibold text-navy dark:text-white">
                    {o.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{o.kicker}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sage-700 dark:text-sage-400">
                    Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
