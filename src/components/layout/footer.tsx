import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { NewsletterForm } from "@/components/sections/newsletter-form";
import { avenues, mainNav, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-gradient text-white">
      <div className="absolute inset-0 bg-dotgrid opacity-40" aria-hidden />
      <div className="container relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Logo tone="white" href="/" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              {siteConfig.tagline} Movement-focused care for individuals and
              employers in {siteConfig.location}.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 hover:text-sage-300">
                <Mail className="h-4 w-4 text-sage-400" /> {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 hover:text-sage-300">
                <Phone className="h-4 w-4 text-sage-400" /> {siteConfig.phone}
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-sage-400" /> {siteConfig.location}
              </p>
            </div>
          </div>

          <FooterCol title="Programs">
            {avenues.map((a) => (
              <FooterLink key={a.slug} href={a.href}>
                {a.name}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Company">
            {mainNav.map((n) => (
              <FooterLink key={n.href} href={n.href}>
                {n.label}
              </FooterLink>
            ))}
          </FooterCol>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Stay in the loop
            </h4>
            <p className="mt-3 text-sm text-white/60">
              Occasional movement tips and workplace-wellness insights. No spam.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-sage-300">Privacy</Link>
            <Link href="/terms" className="hover:text-sage-300">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h4>
      <ul className="mt-4 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-white/65 transition-colors hover:text-sage-300">
        {children}
      </Link>
    </li>
  );
}
