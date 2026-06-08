import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { avenues } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Physical therapy, strength & conditioning, occupational health, injury prevention, and workplace wellness — all under the Upward brand.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Four programs, one movement-first philosophy"
        description="Each Upward program lives on its own page, but they all share the same practitioner and the same goal: less pain, more capability."
      />

      <section className="container py-24">
        <Tabs defaultValue={avenues[2].slug} className="w-full">
          <div className="flex justify-center">
            <TabsList>
              {avenues.map((a) => (
                <TabsTrigger key={a.slug} value={a.slug}>
                  {a.name.replace("Upward ", "")}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {avenues.map((a) => {
            const Icon = a.icon;
            return (
              <TabsContent key={a.slug} value={a.slug}>
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <Reveal>
                    <div className="overflow-hidden rounded-[1.75rem] shadow-lift">
                      <Image
                        src={a.image}
                        alt={a.imageAlt}
                        width={1500}
                        height={900}
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </div>
                  </Reveal>
                  <div>
                    <span className="eyebrow">
                      <Icon className="h-4 w-4" /> {a.kicker}
                    </span>
                    <h2 className="mt-3 font-display text-3xl font-bold text-navy dark:text-white">
                      {a.name}
                    </h2>
                    <p className="mt-2 text-lg font-medium text-sage-700 dark:text-sage-400">
                      {a.title}
                    </p>
                    <p className="mt-4 text-muted-foreground">{a.blurb}</p>
                    <ul className="mt-6 space-y-3">
                      {a.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-gradient text-white">
                            <Check className="h-3 w-3" />
                          </span>
                          <span className="text-navy dark:text-white/90">{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button asChild variant="sage">
                        <Link href={a.href}>
                          Visit {a.name} <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </section>
    </>
  );
}
