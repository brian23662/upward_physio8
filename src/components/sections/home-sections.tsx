import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  HandHeart,
  Quote,
  Stethoscope,
  TrendingDown,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading, ArrowMotif } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ServiceCard } from "@/components/sections/service-card";
import {
  avenues,
  corporateBenefits,
  services,
  siteConfig,
  stats,
  testimonials,
} from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Stats strip                                                         */
/* ------------------------------------------------------------------ */
export function StatsStrip() {
  return (
    <section className="border-y border-border bg-card">
      <div className="container grid grid-cols-2 gap-8 py-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delayIndex={i} className="text-center">
            <div className="font-display text-3xl font-bold text-gradient-sage sm:text-4xl">
              {s.value}
            </div>
            <p className="mt-2 text-xs leading-snug text-muted-foreground sm:text-sm">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services overview                                                   */
/* ------------------------------------------------------------------ */
export function ServicesOverview() {
  return (
    <section className="container py-24">
      <SectionHeading
        eyebrow="What we do"
        title="One practice. Every stage of your movement."
        description="From acute injury to peak performance to keeping a whole workforce healthy — all under one roof, all movement-first."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <ServiceCard key={s.title} service={s} index={i} />
        ))}
        {/* CTA card to round out the grid */}
        <Reveal delayIndex={services.length} as="article">
          <Link
            href="/services"
            className="group flex h-full flex-col justify-between rounded-2xl bg-navy-sage p-7 text-white shadow-card transition-transform hover:-translate-y-1.5"
          >
            <ArrowMotif className="h-8 w-8 text-sage-300" />
            <div>
              <h3 className="font-display text-xl font-semibold">
                See all services in detail
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Explore each Upward program and find the right fit.
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-sage-300">
                View services <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* The four "Upward" avenues — separate pages, one brand               */
/* ------------------------------------------------------------------ */
export function AvenuesSection() {
  return (
    <section className="bg-muted py-24">
      <div className="container">
        <SectionHeading
          eyebrow="The Upward family"
          title="Four programs, one philosophy"
          description="Each avenue has its own home, but they share the same movement-focused approach and the same practitioner behind every plan."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {avenues.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.slug} delayIndex={i % 2} as="article">
                <Link
                  href={a.href}
                  className="group relative block h-full overflow-hidden rounded-3xl shadow-card"
                >
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={a.image}
                      alt={a.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/55 to-navy-900/10" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sage-gradient">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-300">
                        {a.kicker}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-bold">{a.name}</h3>
                    <p className="mt-1.5 max-w-md text-sm text-white/75">{a.blurb}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white">
                      Explore {a.name}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why Upward (trust signals)                                          */
/* ------------------------------------------------------------------ */
const whyPoints = [
  {
    icon: Stethoscope,
    title: "Doctor-level, one-on-one care",
    body: "You work directly with DJ — a Doctor of Physical Therapy — for the full visit. No hand-offs to aides.",
  },
  {
    icon: HandHeart,
    title: "Movement-first, hands-on when it helps",
    body: "Targeted exercise and education lead the way; manual techniques are layered in to restore pain-free movement.",
  },
  {
    icon: BadgeCheck,
    title: "Rehab meets performance",
    body: "As a CSCS, DJ doesn't just get you out of pain — he builds the strength that keeps you there.",
  },
  {
    icon: Users,
    title: "Built for workplaces, too",
    body: "Real experience launching preventative programs for large employers, not theory.",
  },
];

export function WhyUpward() {
  return (
    <section className="container py-24">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Why Upward"
            title="Care that actually moves you forward"
            description="The upward arrow isn't just a logo — it's the goal of every plan. Less pain, more capability, lasting results."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {whyPoints.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delayIndex={i}>
                  <div className="flex gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-50 text-sage-700 dark:bg-sage-900/30 dark:text-sage-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-navy dark:text-white">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delayIndex={1}>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-sage-gradient opacity-15 blur-2xl" />
            <div className="overflow-hidden rounded-[1.75rem] shadow-lift">
              <Image
                src={siteConfig.founder.portrait}
                alt={`${siteConfig.founder.name}, ${siteConfig.founder.credentials} — founder of Upward Physio and Performance`}
                width={1000}
                height={1250}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Corporate highlight                                                 */
/* ------------------------------------------------------------------ */
export function CorporateHighlight() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient py-24 text-white">
      <div className="absolute inset-0 bg-dotgrid opacity-30" />
      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[1.75rem] shadow-lift">
                <Image
                  src="/images/dj-presenting.webp"
                  alt="DJ Keim presenting a workplace physical therapy program to a corporate audience"
                  width={1400}
                  height={1050}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-3 rounded-2xl bg-sage-gradient p-5 shadow-lift sm:-right-5">
                <TrendingDown className="h-6 w-6 text-white" />
                <p className="mt-2 max-w-[10rem] text-sm font-semibold leading-snug text-white">
                  Fewer claims. Less lost time.
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              light
              align="left"
              eyebrow="For employers"
              title="Occupational health that pays for itself"
              description="DJ built the first preventative therapy program for Metro (WMATA) transit employees across the DC region. Now he brings that early-intervention model to your workforce."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {corporateBenefits.slice(0, 4).map((b, i) => (
                <Reveal key={b.title} delayIndex={i} as="li">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <h3 className="font-display text-sm font-semibold text-white">
                      {b.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/65">{b.description}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <div className="mt-9">
              <Button asChild variant="sage" size="lg">
                <Link href="/for-businesses">
                  See corporate solutions <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */
export function Testimonials() {
  return (
    <section className="container py-24">
      <SectionHeading
        eyebrow="Results"
        title="Trusted by individuals and employers alike"
        description="A movement-first approach that works whether you're recovering from surgery or protecting a 500-person crew."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={i} delayIndex={i} as="article">
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft">
              <Quote className="h-8 w-8 text-sage-300" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-navy dark:text-white/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-display font-semibold text-navy dark:text-white">
                  {t.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t.detail} ·{" "}
                  <span className="font-medium text-sage-700 dark:text-sage-400">
                    {t.type}
                  </span>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Closing CTA banner                                                  */
/* ------------------------------------------------------------------ */
export function CtaBanner() {
  return (
    <section className="container pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-sage-gradient px-8 py-16 text-center shadow-lift sm:px-16">
          <div className="absolute inset-0 bg-dotgrid opacity-25" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to bring Upward to your team?
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Request a corporate proposal and we&apos;ll scope an occupational
              health program around your workforce — or book your own visit today.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="white" size="lg">
                <Link href="/for-businesses">Request corporate proposal</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-navy text-white hover:bg-navy-700"
              >
                <Link href="/contact">Book an individual visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
