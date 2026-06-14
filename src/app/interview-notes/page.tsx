import {
  Brain,
  Code,
  Database,
  MessageSquare,
  Sparkles,
  Bot,
} from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { CategoryCard } from "@/components/content/content-cards";
import { interviewCategories } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Interview Notes",
  description:
    "Interview preparation notes for Python, SQL, AI fundamentals, prompt engineering, generative AI, and AI agents.",
  path: "/interview-notes",
});

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="h-6 w-6" />,
  Code: <Code className="h-6 w-6" />,
  Database: <Database className="h-6 w-6" />,
  MessageSquare: <MessageSquare className="h-6 w-6" />,
  Sparkles: <Sparkles className="h-6 w-6" />,
  Bot: <Bot className="h-6 w-6" />,
};

export default function InterviewNotesPage() {
  return (
    <>
      <PageHeader
        title="Interview Preparation Notes"
        description="I am collecting interview questions and answers as I prepare for AI-related roles. Each category has its own page — content will grow over time."
      />

      <Section>
        <Container>
          <SectionHeading
            title="Categories"
            subtitle="Pick a topic to start reviewing. Pages are ready for notes — I will add content as I study."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {interviewCategories.map((cat) => (
              <CategoryCard
                key={cat.slug}
                title={cat.title}
                description={cat.description}
                href={`/interview-notes/${cat.slug}`}
                icon={iconMap[cat.icon]}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
