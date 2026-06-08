import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().optional(),
  company: z.string().optional(),
  inquiryType: z.enum(["Individual", "Corporate"], {
    required_error: "Please choose an inquiry type.",
  }),
  message: z.string().min(10, "Please tell us a little more (10+ characters)."),
});

export type ContactValues = z.infer<typeof contactSchema>;

export const proposalSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  company: z.string().min(2, "Please enter your company."),
  email: z.string().email("Please enter a valid work email."),
  phone: z.string().optional(),
  teamSize: z.string().min(1, "Please select an approximate team size."),
  interest: z.string().min(2, "Please choose an area of interest."),
  message: z.string().min(10, "Please tell us a little more (10+ characters)."),
});

export type ProposalValues = z.infer<typeof proposalSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email."),
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;

export type ActionResult = { ok: boolean; message: string };
