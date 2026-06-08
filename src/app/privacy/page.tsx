import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Upward Physio and Performance collects and uses your information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="June 2026">
      <p>
        This is placeholder copy. Replace it with your finalized privacy policy
        before launch. It should describe what personal information Upward Physio
        and Performance collects, how it is used, and the choices visitors have.
      </p>
      <h2>Information we collect</h2>
      <p>
        When you submit a contact or proposal form, we collect the details you
        provide — such as your name, email, phone, company, and message — solely
        to respond to your inquiry.
      </p>
      <h2>How we use it</h2>
      <p>
        Submissions are delivered to us by email via Resend. We do not sell your
        information. We use it only to communicate with you about your request.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy? Email us and we&apos;ll be happy to help.
      </p>
    </LegalLayout>
  );
}
