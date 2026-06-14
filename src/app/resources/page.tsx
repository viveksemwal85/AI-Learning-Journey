import { ExternalLink } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { resourceCategories } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Resources",
  description:
    "Curated AI, Python, GitHub, and YouTube resources for professionals learning AI from scratch.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Learning Resources"
        description="These are the resources I use or recommend. I will keep updating this list as I discover more helpful content."
      />

      <Section>
        <Container>
          <div className="space-y-12">
            {resourceCategories.map((category) => (
              <section key={category.title}>
                <SectionHeading title={category.title} subtitle={category.description} />
                <ul className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <div>
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-medium text-slate-900 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
                          >
                            {item.name}
                            <ExternalLink className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                          </a>
                        ) : (
                          <span className="font-medium text-slate-900">{item.name}</span>
                        )}
                        {item.note && (
                          <p className="mt-0.5 text-sm text-slate-500">{item.note}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
