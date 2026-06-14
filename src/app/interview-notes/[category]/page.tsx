import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { interviewCategories, getInterviewCategory } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return interviewCategories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { category: slug } = await params;
  const category = getInterviewCategory(slug);
  if (!category) return { title: "Not Found" };

  return createMetadata({
    title: `${category.title} Interview Notes`,
    description: category.description,
    path: `/interview-notes/${slug}`,
  });
}

const placeholderQuestions: Record<string, { q: string; hint: string }[]> = {
  python: [
    { q: "What is the difference between a list and a tuple?", hint: "Mutability — lists can change, tuples cannot." },
    { q: "Explain list comprehension with an example.", hint: "A concise way to create lists: [x*2 for x in range(5)]" },
    { q: "What are *args and **kwargs?", hint: "Ways to pass variable numbers of arguments to a function." },
  ],
  sql: [
    { q: "Explain INNER JOIN vs LEFT JOIN.", hint: "INNER returns matching rows only; LEFT keeps all left table rows." },
    { q: "What is the difference between WHERE and HAVING?", hint: "WHERE filters rows; HAVING filters groups after GROUP BY." },
    { q: "How would you find duplicate records?", hint: "GROUP BY column HAVING COUNT(*) > 1" },
  ],
  "ai-fundamentals": [
    { q: "What is a token in the context of LLMs?", hint: "The smallest unit of text a model processes — affects cost and limits." },
    { q: "What is an embedding?", hint: "A numerical vector that captures the meaning of text." },
    { q: "What is a hallucination?", hint: "When an AI generates confident but incorrect information." },
  ],
  "prompt-engineering": [
    { q: "What is zero-shot prompting?", hint: "Giving instructions without examples." },
    { q: "What is few-shot prompting?", hint: "Including example input-output pairs in the prompt." },
    { q: "What is chain-of-thought prompting?", hint: "Asking the model to think step-by-step before answering." },
  ],
  "generative-ai": [
    { q: "How does a generative AI model create text?", hint: "Predicts the next token repeatedly based on patterns learned from data." },
    { q: "What is the context window?", hint: "Maximum amount of text (tokens) the model can process at once." },
    { q: "What is temperature in LLM settings?", hint: "Controls randomness — lower is more focused, higher is more creative." },
  ],
  "ai-agents": [
    { q: "What makes an AI system 'agentic'?", hint: "It can plan, use tools, and take actions autonomously toward a goal." },
    { q: "What is tool use in AI agents?", hint: "The agent calls external APIs or functions to get data or perform actions." },
    { q: "What is RAG and why do agents use it?", hint: "Retrieval-Augmented Generation — grounds responses in external data." },
  ],
};

export default async function InterviewCategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = getInterviewCategory(slug);
  if (!category) notFound();

  const questions = placeholderQuestions[slug] ?? [];

  return (
    <>
      <div className="border-b border-slate-200 bg-slate-50">
        <Container className="py-10 sm:py-12">
          <Link
            href="/interview-notes"
            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Interview Notes
          </Link>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900">{category.title}</h1>
          <p className="mt-3 max-w-2xl text-slate-600">{category.description}</p>
          <Badge variant="amber" className="mt-4">Content growing — check back soon</Badge>
        </Container>
      </div>

      <Section>
        <Container>
          <h2 className="mb-6 text-xl font-semibold text-slate-900">Starter Questions</h2>
          <div className="space-y-4">
            {questions.map((item, i) => (
              <article
                key={item.q}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-medium text-blue-600">Question {i + 1}</p>
                <h3 className="mt-1 text-base font-semibold text-slate-900">{item.q}</h3>
                <details className="mt-4 group">
                  <summary className="cursor-pointer text-sm font-medium text-slate-700 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm">
                    Show hint
                  </summary>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.hint}</p>
                </details>
                <p className="mt-4 text-xs text-slate-400 italic">
                  Full answer coming soon — I will expand this as I study.
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
