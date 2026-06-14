import { Container, Section } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog",
  description: "Weekly AI learning notes — coming soon.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        description="Weekly notes on what I learned, built, and struggled with — coming soon."
      />
      <Section>
        <Container>
          <div className="mx-auto max-w-xl rounded-xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
            <p className="text-lg font-medium text-slate-900">Blog posts coming soon</p>
            <p className="mt-2 text-sm text-slate-600">
              This section is ready for future blog integration using MDX or a CMS.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
