"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-lg shadow-soft"
          : "bg-transparent"
      )}
    >
      <nav className="container flex h-18 items-center justify-between py-3">
        {/* Logo: white over the dark hero/header at top, navy once scrolled (light bg) */}
        <div className="flex items-center">
          {scrolled ? (
            <Logo tone="navy" />
          ) : (
            <Logo tone="white" />
          )}
        </div>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? scrolled
                      ? "text-sage-700 dark:text-sage-400"
                      : "text-sage-300"
                    : scrolled
                      ? "text-navy/70 hover:text-navy dark:text-white/70 dark:hover:text-white"
                      : "text-white/80 hover:text-white"
                )}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-sage-gradient"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle
            className={cn(!scrolled && "text-white hover:bg-white/10 hover:text-white")}
          />
          <Button asChild variant="sage" size="sm" className="hidden sm:inline-flex">
            <Link href="/for-businesses">For Employers</Link>
          </Button>
          <button
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
              scrolled ? "text-navy dark:text-white" : "text-white"
            )}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-lg lg:hidden"
          >
            <div className="container flex flex-col gap-1 py-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-base font-medium text-navy hover:bg-sage-50 dark:text-white dark:hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild variant="sage" className="mt-2">
                <Link href="/for-businesses">Request a Corporate Proposal</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
