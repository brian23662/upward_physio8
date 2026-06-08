"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { contactSchema, type ContactValues } from "@/lib/schemas";
import { submitContact } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactForm({
  defaultType = "Individual",
}: {
  defaultType?: "Individual" | "Corporate";
}) {
  const [result, setResult] = React.useState<{ ok: boolean; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { inquiryType: defaultType },
  });

  const inquiryType = watch("inquiryType");

  async function onSubmit(values: ContactValues) {
    const res = await submitContact(values);
    setResult(res);
    if (res.ok) reset({ inquiryType: defaultType });
  }

  if (result?.ok) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-sage-200 bg-sage-50 p-10 text-center dark:border-sage-800 dark:bg-sage-900/20">
        <CheckCircle2 className="h-12 w-12 text-sage-600" />
        <h3 className="font-display text-xl font-semibold text-navy dark:text-white">
          Message sent!
        </h3>
        <p className="max-w-sm text-muted-foreground">{result.message}</p>
        <Button variant="outline" onClick={() => setResult(null)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Inquiry type toggle */}
      <div className="space-y-2">
        <Label>I&apos;m reaching out as</Label>
        <div className="grid grid-cols-2 gap-2">
          {(["Individual", "Corporate"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setValue("inquiryType", t, { shouldValidate: true })}
              className={cn(
                "rounded-xl border px-4 py-3 text-sm font-semibold transition-all",
                inquiryType === t
                  ? "border-sage-500 bg-sage-50 text-sage-700 dark:bg-sage-900/30 dark:text-sage-300"
                  : "border-input text-muted-foreground hover:border-sage-300"
              )}
            >
              {t === "Individual" ? "An individual" : "A business / employer"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <Input placeholder="Jane Smith" {...register("name")} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <Input type="email" placeholder="jane@email.com" {...register("email")} />
        </Field>
        <Field label="Phone (optional)" error={errors.phone?.message}>
          <Input placeholder="(720) 555-0123" {...register("phone")} />
        </Field>
        <Field
          label={inquiryType === "Corporate" ? "Company" : "Company (optional)"}
          error={errors.company?.message}
        >
          <Input placeholder="Acme Co." {...register("company")} />
        </Field>
      </div>

      <Field label="How can we help?" error={errors.message?.message}>
        <Textarea
          placeholder="Tell us a bit about what's going on or what your team needs…"
          {...register("message")}
        />
      </Field>

      {result && !result.ok && (
        <p className="text-sm font-medium text-red-600">{result.message}</p>
      )}

      <Button type="submit" variant="sage" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
      {error && <p className="text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}
