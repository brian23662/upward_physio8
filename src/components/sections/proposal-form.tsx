"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { proposalSchema, type ProposalValues } from "@/lib/schemas";
import { submitProposal } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const TEAM_SIZES = ["1–25", "26–100", "101–500", "501–1,000", "1,000+"];
const INTERESTS = [
  "On-site injury prevention",
  "Ergonomic assessments",
  "Early intervention / triage",
  "Workplace wellness workshops",
  "Full occupational health program",
];

export function ProposalForm() {
  const [result, setResult] = React.useState<{ ok: boolean; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProposalValues>({ resolver: zodResolver(proposalSchema) });

  async function onSubmit(values: ProposalValues) {
    const res = await submitProposal(values);
    setResult(res);
    if (res.ok) reset();
  }

  if (result?.ok) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-sage-200 bg-white p-10 text-center shadow-soft">
        <CheckCircle2 className="h-12 w-12 text-sage-600" />
        <h3 className="font-display text-xl font-semibold text-navy">Request received!</h3>
        <p className="max-w-sm text-muted-foreground">{result.message}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-3xl border border-border bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" error={errors.name?.message}>
          <Input placeholder="Jane Smith" {...register("name")} />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <Input placeholder="Acme Logistics" {...register("company")} />
        </Field>
        <Field label="Work email" error={errors.email?.message}>
          <Input type="email" placeholder="jane@acme.com" {...register("email")} />
        </Field>
        <Field label="Phone (optional)" error={errors.phone?.message}>
          <Input placeholder="(720) 555-0123" {...register("phone")} />
        </Field>
        <Field label="Approx. team size" error={errors.teamSize?.message}>
          <select
            className="flex h-12 w-full rounded-xl border border-input bg-card px-4 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            defaultValue=""
            {...register("teamSize")}
          >
            <option value="" disabled>Select…</option>
            {TEAM_SIZES.map((s) => (
              <option key={s} value={s}>{s} employees</option>
            ))}
          </select>
        </Field>
        <Field label="Primary interest" error={errors.interest?.message}>
          <select
            className="flex h-12 w-full rounded-xl border border-input bg-card px-4 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            defaultValue=""
            {...register("interest")}
          >
            <option value="" disabled>Select…</option>
            {INTERESTS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Tell us about your workforce & goals" error={errors.message?.message}>
        <Textarea
          placeholder="What kind of physical demands does your team face? What are you hoping to improve?"
          {...register("message")}
        />
      </Field>

      {result && !result.ok && (
        <p className="text-sm font-medium text-red-600">{result.message}</p>
      )}

      <Button type="submit" variant="sage" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          "Request corporate proposal"
        )}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        We typically respond within one business day. No obligation.
      </p>
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
