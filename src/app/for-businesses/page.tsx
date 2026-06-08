import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Building2, TrendingDown, Activity, ClipboardCheck } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProposalForm } from "@/components/sections/proposal-form";
import { corporateBenefits } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Businesses — Occupational Health & Workplace Wellness",
  description:
    "On-site occupational health and injury-prevention programs that reduce workers' comp costs, lower absenteeism, and keep your workforce moving. Built from the first preventative therapy program for WMATA transit employees.",
};

const outcomes = [
  { icon: TrendingDown, stat: "Fewer", label: "workers' comp claims through early intervention" },
  { icon: Activity, stat: "Lower", label: "absenteeism and lost workdays" },
  { icon: ClipboardCheck, stat: "On-site", label: "ergonomic & job-task assessments" },
  { icon: Building2, stat: "Tailored", label: "programs for your workforce's real demands" },
];

const caseStudies = [
  {
    tag: "Transit · WMATA",
    title: "First preventative therapy program for a major transit agency",
    body: "DJ developed and launched the first preventative therapy program for Metro (WMATA) employees across DC, Maryland, and Virginia — bringing early intervention directly to operators and maintenance crews.",
    metric: "Region-wide rollout",
  },
  {
    tag: "Results placeholder",
    title: "Your team could be next",
    body: "We're gathering detailed outcome numbers from recent programs. Request a proposal and we'll walk you through the model and projected impact for a workforce your size.",
    metric: "Numbers coming soon",
  },
];

const faqs = [
  {
    q: "How does an on-site program actually work?",
    a: "We schedule recurring on-site time where DJ provides early-intervention care, movement screens, and ergonomic guidance right where your people work — no scheduling friction, no lost shifts driving to appointments.",
  },
  {
    q: "What size companies do you work with?",
    a: "Everything from small teams to large workforces of 1,000+. The program scales — we scope frequency, on-site hours, and services to your headcount and physical demands.",
  },
  {
    q: "How is this different from our EAP or insurance?",
    a: "This is preventative and proactive. Instead of waiting for an injury and a claim, we catch the early warning signs and address them on-site, which is where the real cost savings come from.",
  },
  {
    q: "What does it cost?",
    a: "Programs are scoped per workforce, so pricing depends on size and on-site frequency. Request a proposal and we'll put together a clear, no-obligation outline.",
  },
];

export default function ForBusinessesPage() {
  return (
    <>
      <PageHeader
        eyebrow="For Businesses"
        title="Occupational health that pays for itself"
        description="Preventative, on-site physical therapy that keeps your workforce healthy, productive, and on the job — built from real experience launching a transit-agency program from scratch."
      />

      {/* Outcomes strip */}
      <section className="container -mt-10 relative z-10">
        <div className="grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-card sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((o, i) => {
            const Icon = o.icon;
            return (
              <Reveal key={o.label} delayIndex={i}>
                <div className="flex items-start gap-4 rounded-2xl p-3">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-gradient text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-display text-lg font-bold text-navy dark:text-white">
                      {o.stat}
                    </div>
                    <p className="text-sm text-muted-foreground">{o.label}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="container py-24">
        <SectionHeading
          eyebrow="The business case"
          title="Why employers bring in Upward"
          description="Musculoskeletal injuries are one of the largest drivers of workplace cost. A movement-first, preventative program attacks that cost at the source."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {corporateBenefits.map((b, i) => (
            <Reveal key={b.title} delayIndex={i % 3}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                <h3 className="font-display text-lg font-semibold text-navy dark:text-white">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-muted py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Proof"
            title="Built on real workplace programs"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {caseStudies.map((c, i) => (
              <Reveal key={c.title} delayIndex={i}>
                <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft">
                  <span className="eyebrow">{c.tag}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-navy dark:text-white">
                    {c.title}
                  </h3>
                  <p className="mt-3 flex-1 text-muted-foreground">{c.body}</p>
                  <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-sage-50 px-4 py-2 text-sm font-semibold text-sage-700 dark:bg-sage-900/30 dark:text-sage-400">
                    <TrendingDown className="h-4 w-4" /> {c.metric}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visual + intro to proposal */}
      <section className="container py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[1.75rem] shadow-lift">
              <Image
                src="/images/dj-presenting.webp"
                alt="DJ Keim presenting a workplace physical therapy program to a corporate audience"
                width={1400}
                height={1050}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get started"
              title="Request a corporate proposal"
              description="Tell us about your workforce and we'll put together a tailored occupational health program — scope, on-site cadence, and projected impact. No obligation."
            />
            <ul className="mt-6 space-y-2 text-muted-foreground">
              <li>• Response within one business day</li>
              <li>• Programs scoped to your headcount and physical demands</li>
              <li>• Led directly by a Doctor of Physical Therapy</li>
            </ul>
          </div>
        </div>

        <div id="proposal" className="mx-auto mt-12 max-w-3xl scroll-mt-28">
          <ProposalForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-24">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Common employer questions" />
          <div className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="sage" size="lg">
              <Link href="#proposal">
                Request your proposal <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
