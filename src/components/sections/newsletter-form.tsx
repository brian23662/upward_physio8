"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { newsletterSchema, type NewsletterValues } from "@/lib/schemas";
import { submitNewsletter } from "@/app/actions";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const [done, setDone] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema) });

  async function onSubmit(values: NewsletterValues) {
    const res = await submitNewsletter(values);
    if (res.ok) {
      setDone(true);
      reset();
      setTimeout(() => setDone(false), 4000);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="you@email.com"
          aria-label="Email address"
          className="border-white/15 bg-white/5 text-white placeholder:text-white/40"
          {...register("email")}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          aria-label="Subscribe"
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sage-gradient text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {isSubmitting ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : done ? (
            <Check className="h-5 w-5" />
          ) : (
            <ArrowRight className="h-5 w-5" />
          )}
        </button>
      </div>
      {errors.email && <p className="text-xs text-sage-300">{errors.email.message}</p>}
      {done && <p className="text-xs text-sage-300">You&apos;re on the list — thanks!</p>}
    </form>
  );
}
