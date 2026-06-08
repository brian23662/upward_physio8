import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of the Upward Physio and Performance website.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="June 2026">
      <p>
        This is placeholder copy. Replace it with your finalized terms of service
        before launch.
      </p>
      <h2>Use of this site</h2>
      <p>
        Content on this website is provided for general informational purposes and
        does not constitute medical advice. Always consult a qualified professional
        for guidance specific to your situation.
      </p>
      <h2>No medical relationship</h2>
      <p>
        Visiting this site or submitting a form does not by itself create a
        patient–provider relationship.
      </p>
      <h2>Changes</h2>
      <p>We may update these terms from time to time. Continued use constitutes acceptance.</p>
    </LegalLayout>
  );
}
