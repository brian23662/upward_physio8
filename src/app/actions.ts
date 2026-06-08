"use server";

import { Resend } from "resend";
import {
  contactSchema,
  proposalSchema,
  newsletterSchema,
  type ActionResult,
} from "@/lib/schemas";
import { contactEmail, proposalEmail } from "@/lib/emails";

const FROM = process.env.CONTACT_FROM_EMAIL || "website@upwardphysio.com";
const TO = process.env.CONTACT_TO_EMAIL || "dj@upwardphysio.com";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export async function submitContact(raw: unknown): Promise<ActionResult> {
  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, message: "Please check the form and try again." };
  }
  const resend = getResend();
  if (!resend) {
    console.warn("RESEND_API_KEY missing — logging submission instead.", parsed.data);
    return {
      ok: true,
      message: "Thanks! Your message was received. (Email delivery isn't configured yet.)",
    };
  }
  try {
    await resend.emails.send({
      from: `Upward Website <${FROM}>`,
      to: [TO],
      replyTo: parsed.data.email,
      subject: `New ${parsed.data.inquiryType} inquiry — ${parsed.data.name}`,
      html: contactEmail(parsed.data),
    });
    return { ok: true, message: "Thanks for reaching out! We'll be in touch within one business day." };
  } catch (err) {
    console.error("Resend error (contact):", err);
    return { ok: false, message: "Something went wrong sending your message. Please email us directly." };
  }
}

export async function submitProposal(raw: unknown): Promise<ActionResult> {
  const parsed = proposalSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, message: "Please check the form and try again." };
  }
  const resend = getResend();
  if (!resend) {
    console.warn("RESEND_API_KEY missing — logging proposal instead.", parsed.data);
    return {
      ok: true,
      message: "Thanks! Your request was received. (Email delivery isn't configured yet.)",
    };
  }
  try {
    await resend.emails.send({
      from: `Upward Website <${FROM}>`,
      to: [TO],
      replyTo: parsed.data.email,
      subject: `Corporate proposal request — ${parsed.data.company}`,
      html: proposalEmail(parsed.data),
    });
    return { ok: true, message: "Proposal request received! We'll reach out to scope a program for your team." };
  } catch (err) {
    console.error("Resend error (proposal):", err);
    return { ok: false, message: "Something went wrong. Please email us directly." };
  }
}

export async function submitNewsletter(raw: unknown): Promise<ActionResult> {
  const parsed = newsletterSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, message: "Please enter a valid email." };
  }
  const resend = getResend();
  if (!resend) {
    console.warn("RESEND_API_KEY missing — logging newsletter signup.", parsed.data);
    return { ok: true, message: "You're on the list!" };
  }
  try {
    await resend.emails.send({
      from: `Upward Website <${FROM}>`,
      to: [TO],
      subject: "New newsletter signup",
      html: `<p>New newsletter signup: <strong>${parsed.data.email}</strong></p>`,
    });
    return { ok: true, message: "You're on the list — thanks!" };
  } catch (err) {
    console.error("Resend error (newsletter):", err);
    return { ok: false, message: "Something went wrong. Please try again." };
  }
}
