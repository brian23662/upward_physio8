import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowMotif } from "@/components/shared/section-heading";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-gradient text-center text-white">
      <div className="absolute inset-0 bg-dotgrid opacity-20" />
      <div className="container relative">
        <ArrowMotif className="mx-auto h-12 w-12 text-sage-400" />
        <h1 className="mt-6 font-display text-6xl font-bold">404</h1>
        <p className="mt-4 text-lg text-white/75">
          This page took a wrong turn. Let&apos;s get you back on the upward path.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="sage" size="lg">
            <Link href="/">Back home</Link>
          </Button>
          <Button asChild variant="white" size="lg">
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
