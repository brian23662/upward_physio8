import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Coffee,
  GraduationCap,
  MapPin,
  Plane,
  Dumbbell,
  Train,
  Bike,
  Activity,
  Award,
  Users,
  Briefcase,
} from "lucide-react";
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
    icon: GraduationCap,
    title: "Exercise science at Southeast Missouri State",
    body: "Earned a B.S. in Exercise Science with a minor in Nutrition, graduating Magna Cum Laude.",
  },
  {
    icon: GraduationCap,
    title: "Doctorate from WashU in St. Louis",
    body: "Completed a Doctor of Physical Therapy degree at Washington University in St. Louis in 2020.",
  },
  {
    icon: Dumbbell,
    title: "Outpatient ortho & sports in DC",
    body: "Began his career in Washington, DC helping people of all ages recover from injury, navigate post-op rehab, and return to sport — alongside an in-home, one-on-one caseload.",
  },
  {
    icon: Train,
    title: "Launched WMATA's first prevention program",
    body: "Developed the first preventative physical therapy program for DC's Metro (WMATA), reducing workplace injuries and improving long-term musculoskeletal health for hundreds of employees.",
  },
  {
    icon: MapPin,
    title: "Relocated to Denver",
    body: "Moved to Denver in 2025 with his wife Emily, and founded Upward to provide one-on-one physical therapy and performance services.",
  },
  {
    icon: Briefcase,
    title: "Center Therapy Director, occupational health",
    body: "Serves as Center Therapy Director at Medicine for Business and Industry in Englewood, CO — leading clinical operations and on-site rehabilitation focused on occupational health, injury prevention, and safe return-to-work outcomes.",
  },
];

const hobbies = [
  { icon: Plane, label: "Traveling" },
  { icon: Coffee, label: "Restaurants & coffee shops" },
  { icon: Dumbbell, label: "Weightlifting" },
  { icon: Activity, label: "Basketball" },
  { icon: Bike, label: "Cycling & running" },
];

const certifications = [
  "Doctor of Physical Therapy (DPT), Washington University in St. Louis",
  "Certified Strength & Conditioning Specialist (CSCS), NSCA",
  "USA Weightlifting Level 1 Coach (USAW)",
  "Colorado & Washington, DC Physical Therapy Licenses (compact privileges in MD & VA)",
  "American Heart Association BLS for Healthcare Providers (CPR & AED)",
];

const memberships = [
  "American Physical Therapy Association — Colorado chapter (orthopedic & sports sections)",
  "National Strength and Conditioning Association",
  "USA Weightlifting Coaches Association",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Meet the practitioner behind Upward"
        description="Upward is built around one belief: the right movement, taught the right way, changes how you live."
      />

      {/* Intro: personal Colorado headshot + bio */}
      <section className="container py-24">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-sage-gradient opacity-15 blur-2xl" />
              <div className="overflow-hidden rounded-[1.75rem] shadow-lift">
                <Image
                  src={siteConfig.founder.coloradoPortrait}
                  alt={`${siteConfig.founder.name} in the Colorado mountains`}
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
              eyebrow="Who is DJ"
              title="Doctor of Physical Therapy & Strength Coach"
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                DJ earned his Bachelor of Science in Exercise Science with a minor
                in Nutrition from Southeast Missouri State University before
                completing his Doctor of Physical Therapy degree at Washington
                University in St. Louis in 2020.
              </p>
              <p>
                With over six years of experience as a physical therapist, DJ
                enjoys helping individuals stay strong, active, and healthy
                throughout every stage of life. He began his career in Washington,
                DC, at Orthopedic Medicine and Surgery, where he helped people of
                all ages recover from injuries, navigate post-operative
                rehabilitation, return to sport, and regain confidence in the
                activities they love.
              </p>
              <p>
                He later developed the first preventative physical therapy program
                for the Washington Metropolitan Area Transit Authority (WMATA),
                DC&apos;s metro system, focusing on reducing workplace injuries and
                improving long-term musculoskeletal health for hundreds of
                employees.
              </p>
              <p>
                After relocating to Denver in 2025 with his wife Emily, DJ
                continues to serve the Denver community through personalized, one
                on one physical therapy and performance services at Momenta and in
                the comfort of clients&apos; homes.
              </p>
              <p>
                DJ is passionate about helping people move better and live without
                limitations. He believes physical therapy should go beyond
                addressing pain and injury by equipping individuals with the
                strength, knowledge, and confidence to remain active throughout
                every stage of life. His approach blends evidence-based physical
                therapy, strength and conditioning principles, and individualized
                coaching to help clients recover, prevent future injuries, improve
                performance and continue doing what they love.
              </p>
              <p>
                Outside of the clinic and gym, DJ enjoys exploring Colorado with
                his wife Emily and their dog Minnie. Together they enjoy traveling,
                discovering new restaurants and coffee shops, and spending time
                with family and friends. DJ stays active through weightlifting,
                basketball, cycling, and running.
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

      {/* Intro video */}
      <section className="bg-muted py-24">
        <div className="container">
          <SectionHeading
            eyebrow="A quick hello"
            title="Meet DJ in his own words"
            description="A short introduction to who DJ is, how he works, and what makes Upward different."
          />
          <Reveal>
            <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-[1.75rem] shadow-lift">
              <video
                className="aspect-video h-full w-full bg-navy-900 object-cover"
                controls
                playsInline
                preload="metadata"
                poster={siteConfig.founder.portrait}
              >
                <source src="/video/dj-intro.mp4" type="video/mp4" />
                Your browser doesn&apos;t support embedded video.
              </video>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="py-24">
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

      {/* Credentials & memberships */}
      <section className="bg-muted py-24">
        <div className="container">
          <SectionHeading
            eyebrow="Credentials"
            title="Education, certifications & memberships"
            description="The training and professional standards behind every Upward session."
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-10 md:grid-cols-2">
            <Reveal>
              <div className="rounded-[1.5rem] border border-border bg-card p-8 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-gradient text-white">
                    <Award className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl font-bold text-navy dark:text-white">
                    Licensure & certifications
                  </h3>
                </div>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  {certifications.map((c) => (
                    <li key={c} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-500" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delayIndex={1}>
              <div className="rounded-[1.5rem] border border-border bg-card p-8 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-gradient text-white">
                    <Users className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl font-bold text-navy dark:text-white">
                    Organizational memberships
                  </h3>
                </div>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  {memberships.map((m) => (
                    <li key={m} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-500" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
