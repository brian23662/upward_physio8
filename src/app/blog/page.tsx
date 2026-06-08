import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Movement tips, injury-prevention guides, and workplace-wellness insights from Upward Physio and Performance.",
};

const posts = [
  {
    title: "Why early intervention beats waiting it out",
    excerpt:
      "The science behind catching musculoskeletal issues before they become claims — and what it means for your team.",
    tag: "Occupational Health",
    date: "Coming soon",
  },
  {
    title: "Rehab to performance: closing the gap",
    excerpt:
      "Getting out of pain is step one. Here's how strength programming keeps you there for good.",
    tag: "Performance",
    date: "Coming soon",
  },
  {
    title: "Desk setup essentials that actually matter",
    excerpt:
      "A no-nonsense guide to the ergonomic changes worth making — and the ones that don't move the needle.",
    tag: "Workplace Wellness",
    date: "Coming soon",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Insights to keep you moving upward"
        description="Practical, movement-first guidance for individuals and employers. New articles are on the way."
      />

      <section className="container py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delayIndex={i} as="article">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-sage-50 px-3 py-1 text-xs font-semibold text-sage-700 dark:bg-sage-900/30 dark:text-sage-400">
                  <Newspaper className="h-3.5 w-3.5" /> {p.tag}
                </span>
                <h2 className="mt-4 font-display text-xl font-semibold text-navy dark:text-white">
                  {p.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-sm">
                  <span className="text-muted-foreground">{p.date}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-sage-700 dark:text-sage-400">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-navy-sage p-10 text-center text-white shadow-card">
          <h2 className="font-display text-2xl font-bold">Want these in your inbox?</h2>
          <p className="mx-auto mt-2 max-w-md text-white/75">
            Subscribe from the footer below, or reach out directly to talk about
            your goals.
          </p>
          <Button asChild variant="white" size="lg" className="mt-6">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
