import { PageHeader } from "@/components/layout/page-header";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} description={`Last updated ${updated}`} />
      <section className="container py-20">
        <div className="prose-upward mx-auto max-w-3xl space-y-6 text-muted-foreground [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-navy dark:[&_h2]:text-white [&_p]:leading-relaxed">
          {children}
        </div>
      </section>
    </>
  );
}
