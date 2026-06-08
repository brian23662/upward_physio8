import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Service } from "@/lib/site";
import { Reveal } from "@/components/shared/reveal";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = service.icon;
  return (
    <Reveal delayIndex={index} as="article">
      <Link
        href={service.href}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-sage-300 hover:shadow-card"
      >
        {/* corner accent */}
        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-sage-50 transition-transform duration-500 group-hover:scale-150 dark:bg-sage-900/30" />
        <div className="relative">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-sage-400 transition-colors group-hover:bg-sage-gradient group-hover:text-white">
            <Icon className="h-7 w-7" />
          </div>
          <h3 className="mt-5 font-display text-xl font-semibold text-navy dark:text-white">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {service.description}
          </p>
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-sage-700 dark:text-sage-400">
            Learn more
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
