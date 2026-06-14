import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { RoadmapPhaseCard } from "@/components/content/content-cards";
import { Badge } from "@/components/ui/badge";
import { roadmapPhases } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "AI Journey",
  description:
    "Follow Vivek Semwal's phased learning roadmap from GitHub and Python to production AI applications.",
  path: "/ai-journey",
});

const journeyNotes = [
  {
    phase: 1,
    reflection:
      "I started here because everything in AI builds on version control, Python, and understanding APIs. Coming from Java and PeopleSoft, Python felt unfamiliar at first — but its readability grew on me quickly.",
  },
  {
    phase: 2,
    reflection:
      "This is where AI started to click. Prompt engineering is not magic — it is clear communication. Learning how LLMs like GPT and Claude work changed how I think about software.",
  },
  {
    phase: 3,
    reflection:
      "RAG, agents, and MCP are the practical building blocks. This is where I move from 'using AI' to 'building with AI'. I am not here yet, but I can see the path.",
  },
  {
    phase: 4,
    reflection:
      "The goal: build AI applications that work reliably in the real world — with proper deployment, monitoring, and security. Enterprise experience will actually help here.",
  },
];

export default function AIJourneyPage() {
  return (
    <>
      <PageHeader
        title="My AI Learning Journey"
        description="This is not a perfect plan — it is my real roadmap. I update it as I learn. If you are starting from enterprise tech like me, this might give you a clearer path."
      />

      <Section>
        <Container>
          <SectionHeading
            title="The Roadmap"
            subtitle="Four phases, taken one at a time. No skipping fundamentals."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {roadmapPhases.map((phase) => (
              <RoadmapPhaseCard
                key={phase.phase}
                phase={phase.phase}
                title={phase.title}
                topics={phase.topics}
                status={phase.status}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section alt>
        <Container>
          <SectionHeading title="Reflections Along the Way" />
          <div className="space-y-8">
            {journeyNotes.map((note) => {
              const phase = roadmapPhases.find((p) => p.phase === note.phase);
              return (
                <article key={note.phase} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <Badge variant="blue">Phase {note.phase}</Badge>
                    <h3 className="font-semibold text-slate-900">{phase?.title}</h3>
                  </div>
                  <p className="text-base leading-relaxed text-slate-600">{note.reflection}</p>
                  <p className="mt-4 text-sm text-slate-400 italic">
                    Blog posts for this phase coming soon.
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
            <h3 className="font-semibold text-slate-900">Blog Coming Soon</h3>
            <p className="mt-2 text-sm text-slate-600">
              I will publish weekly learning notes here — what I studied, built, and learned.
            </p>
            <Link href="/projects" className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline">
              See what I am building →
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
