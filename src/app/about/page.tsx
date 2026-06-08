import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Coffee, GraduationCap, MapPin, Plane, Dumbbell, Train } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About DJ Keim, DPT, CSCS",
  description:
    "Meet DJ Keim — Doctor of Physical Therapy and Certified Strength & Conditioning Specialist, founder of Upward Physio and Performance in Denver.",
};

const journey = [
  {
    icon: MapPin,
    title: "Southeast Missouri roots",
    body: "Grew up in southeast Missouri before heading to St. Louis for graduate school.",
  },
  {
    icon: GraduationCap,
    title: "Doctorate from WashU",
    body: "Earned a Doctorate of Physical Therapy from Washington University in St. Louis.",
  },
  {
    icon: Dumbbell,
    title: "Outpatient ortho & sports in DC",
    body: "Four years in Washington, DC outpatient orthopedics and sports medicine, plus a night-and-weekend in-home caseload.",
  },
  {
    icon: Train,
    title: "Launched WMATA's first prevention program",
    body: "Spent a year building and launching the first preventative therapy program for Metro (WMATA) employees across DC, Maryland, and Virginia.",
  },
  {
    icon: MapPin,
    title: "Now leading in Denver",
    body: "Moved to Denver, where he now directs an occupational health clinic and founded Upward.",
  },
];

const hobbies = [
  { icon: Plane, label: "Traveling" },
  { icon: Coffee, label: "Coffee shops & breweries" },
  { icon: Dumbbell, label: "Weightlifting" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Meet the practitioner behind Upward"
        description="Upward is built around one belief: the right movement, taught the right way, changes how you live."
      />

      {/* Intro: headshot + bio */}
      <section className="container py-24">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-sage-gradient opacity-15 blur-2xl" />
              <div className="overflow-hidden rounded-[1.75rem] shadow-lift">
                <Image
                  src={siteConfig.founder.headshot}
                  alt={`${siteConfig.founder.name}, ${siteConfig.founder.credentials}`}
                  width={1000}
                  height={1250}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 left-5 rounded-2xl bg-card px-6 py-4 shadow-card">
                <div className="font-display text-lg font-bold text-navy dark:text-white">
                  {siteConfig.founder.name}
                </div>
                <div className="text-sm text-sage-700 dark:text-sage-400">
                  {siteConfig.founder.role}
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Hi, I'm DJ"
              title="Doctor of Physical Therapy & Strength Coach"
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I&apos;m DJ Keim, founder of Upward Physio and Performance. My
                approach is movement-focused: I use targeted exercise and
                education to teach you the strategies, exercises, and habits that
                get you out of pain and prevent recurring injury. When it helps, I
                layer in hands-on techniques and modalities to restore pain-free
                movement.
              </p>
              <p>
                I&apos;m also a Certified Strength and Conditioning Specialist
                (CSCS), which shapes how I think about both rehab and performance
                — getting you out of pain is only half the job; building a body
                that stays resilient is the other half.
              </p>
              <p>
                A year spent launching the first preventative therapy program for
                Metro (WMATA) employees sparked a real passion for occupational
                health and injury prevention. It&apos;s why Upward serves both
                individuals and employers.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {hobbies.map((h) => {
                const Icon = h.icon;
                return (
                  <span
                    key={h.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-navy dark:text-white"
                  >
                    <Icon className="h-4 w-4 text-sage-600" /> {h.label}
                  </span>
                );
              })}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="sage" size="lg">
                <Link href="/contact">Work with DJ</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Explore services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="bg-muted py-24">
        <div className="container">
          <SectionHeading
            eyebrow="The path here"
            title="From Missouri to Denver"
            description="A career built across outpatient ortho, sports medicine, in-home care, and large-scale workplace prevention."
          />
          <div className="mx-auto mt-14 max-w-3xl">
            <ol className="relative space-y-8 border-l-2 border-sage-200 pl-8 dark:border-sage-800">
              {journey.map((step, i) => {
                const Icon = step.icon;
                return (
                  <Reveal key={step.title} delayIndex={i} as="li">
                    <div className="relative">
                      <span className="absolute -left-[2.85rem] flex h-9 w-9 items-center justify-center rounded-full bg-sage-gradient text-white shadow-soft">
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-navy dark:text-white">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-muted-foreground">{step.body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
