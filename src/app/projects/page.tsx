import { Container, Section, SectionHeading } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { ProjectCard } from "@/components/content/content-cards";
import { projects } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "AI projects built while learning — portfolio website, chatbot, resume analyzer, and more.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        description="I believe the best way to learn AI is to build things — even small, imperfect projects. Here is what I am working on and planning."
      />

      <Section>
        <Container>
          <SectionHeading
            title="All Projects"
            subtitle="Each project teaches something new. Status updates will be added as I progress."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      <Section alt>
        <Container>
          <div className="mx-auto max-w-2xl rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Want to follow along?</h3>
            <p className="mt-2 text-sm text-slate-600">
              Project code and progress will be shared on my GitHub as each one takes shape.
            </p>
            <a
              href="https://github.com/viveksemwal85"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-sm"
            >
              github.com/viveksemwal85
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
