"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      {/* Background video + poster */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.webp"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Navy gradient scrim for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-800/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-navy-900/30" />
      <div className="absolute inset-0 bg-dotgrid opacity-20" />

      <div className="container relative z-10 py-32">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-sage-400/30 bg-sage-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sage-300"
          >
            Physio · Performance · Occupational Health
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Move better.
            <br />
            Feel stronger.
            <br />
            <span className="text-gradient-sage">Live higher.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
          >
            Movement-focused physical therapy and strength coaching for
            individuals — and preventative occupational health programs that keep
            entire teams healthy. Led by {siteConfig.founder.name},{" "}
            {siteConfig.founder.credentials}, in {siteConfig.location}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild variant="sage" size="lg">
              <Link href="/for-businesses">
                Explore corporate programs <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="white" size="lg">
              <Link href="/contact">
                <PlayCircle className="h-4 w-4" /> Book an individual visit
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
