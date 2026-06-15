import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { conceptCategories, conceptsIntro } from "@/data/concepts";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Technology & AI Concepts",
  description:
    "Quick reference guide for technology, cloud, DevOps, system design, and AI concepts — explained in simple language.",
  path: "/concepts",
});

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function ConceptsPage() {
  return (
    <>
      <PageHeader
        title="Technology & AI Concepts"
        description={conceptsIntro}
      />

      <div className="border-b border-slate-200 bg-white">
        <Container className="py-6">
          <p className="text-sm font-medium text-slate-700">
            {conceptCategories.length} categories ·{" "}
            {conceptCategories.reduce((n, cat) => n + cat.concepts.length, 0)} concepts
          </p>
          <nav
            aria-label="Concept categories"
            className="mt-3 max-h-32 overflow-y-auto flex flex-wrap gap-2"
          >
            {conceptCategories.map((category) => (
              <Link
                key={category.title}
                href={`#${slugify(category.title)}`}
                className="rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {category.title}
              </Link>
            ))}
          </nav>
        </Container>
      </div>

      <Container as="article" className="py-12 sm:py-16">
        <div className="space-y-16">
          {conceptCategories.map((category) => (
            <section key={category.title} id={slugify(category.title)} className="scroll-mt-24">
              <h2 className="border-b border-slate-200 pb-3 text-xl font-semibold text-slate-900 sm:text-2xl">
                {category.title}
              </h2>

              <div className="mt-6 space-y-6">
                {category.concepts.map((concept) => (
                  <div
                    key={concept.name}
                    className="rounded-lg border border-slate-200 bg-white p-5 sm:p-6"
                  >
                    <h3 className="text-lg font-semibold text-slate-900">{concept.name}</h3>

                    <dl className="mt-4 space-y-4">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Full Form
                        </dt>
                        <dd className="mt-1 text-sm text-slate-700">{concept.fullForm}</dd>
                      </div>

                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Simple Explanation
                        </dt>
                        <dd className="mt-1 text-sm leading-relaxed text-slate-700">
                          {concept.explanation}
                        </dd>
                      </div>

                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          Real-Life Example
                        </dt>
                        <dd className="mt-1 text-sm leading-relaxed text-slate-600">
                          {concept.example}
                        </dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
