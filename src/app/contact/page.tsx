import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Upward Physio and Performance in Denver — book an individual visit or start a conversation about a corporate program.",
};

const details = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { icon: MapPin, label: "Location", value: siteConfig.location },
  { icon: Clock, label: "Hours", value: "Mon–Fri · By appointment" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's get you moving upward"
        description="Whether you're an individual ready to get out of pain or an employer exploring a workplace program, we'd love to hear from you."
      />

      <section className="container py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          {/* Info + map */}
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy dark:text-white">
                Get in touch
              </h2>
              <p className="mt-3 text-muted-foreground">
                We typically respond within one business day.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {details.map((d, i) => {
                const Icon = d.icon;
                const inner = (
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition-colors hover:border-sage-300">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sage-50 text-sage-700 dark:bg-sage-900/30 dark:text-sage-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {d.label}
                      </div>
                      <div className="font-medium text-navy dark:text-white">{d.value}</div>
                    </div>
                  </div>
                );
                return (
                  <Reveal key={d.label} delayIndex={i}>
                    {d.href ? <a href={d.href}>{inner}</a> : inner}
                  </Reveal>
                );
              })}
            </div>

            {/* Map placeholder */}
            <Reveal delayIndex={4}>
              <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-soft">
                <iframe
                  title="Upward Physio and Performance location — Denver"
                  src="https://www.google.com/maps?q=Denver,Colorado&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delayIndex={1}>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
              <h2 className="font-display text-2xl font-bold text-navy dark:text-white">
                Send a message
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form and we&apos;ll be in touch.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
