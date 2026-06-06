"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { TopicContent } from "@/types/topic";
import { MermaidDiagram } from "@/components/diagrams/mermaid-diagram";
import { FlowDiagram } from "@/components/diagrams/flow-diagram";
import { CodeBlock } from "@/components/topic/code-block";
import { QuizSection } from "@/components/topic/quiz-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLearning } from "@/lib/learning-context";
import {
  Lightbulb, Layers, GitBranch, Play, Code2, Building2,
  MessageCircleQuestion, CheckSquare, Rocket, BookOpen,
} from "lucide-react";

const sections = [
  { id: "overview", title: "Overview", icon: BookOpen },
  { id: "analogy", title: "Real World Analogy", icon: Lightbulb },
  { id: "diagram", title: "Architecture Diagram", icon: Layers },
  { id: "components", title: "Internal Components", icon: GitBranch },
  { id: "workflow", title: "Step-by-Step Workflow", icon: Play },
  { id: "example", title: "Real Example", icon: Code2 },
  { id: "code", title: "Code Examples", icon: Code2 },
  { id: "deep-dive", title: "Architecture Deep Dive", icon: Building2 },
  { id: "interview", title: "Interview Questions", icon: MessageCircleQuestion },
  { id: "quiz", title: "Knowledge Check", icon: CheckSquare },
  { id: "project", title: "Project Usage", icon: Rocket },
];

interface TopicPageContentProps {
  topic: TopicContent;
}

export function TopicPageContent({ topic }: TopicPageContentProps) {
  const { setTopicProgress, setNote, getNote } = useLearning();
  const [activeSection, setActiveSection] = useState("overview");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const el = contentRef.current;
      const scrollPercent = Math.round(
        (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      );
      if (!isNaN(scrollPercent)) setTopicProgress(topic.slug, scrollPercent);
    };

    const el = contentRef.current;
    el?.addEventListener("scroll", handleScroll);
    return () => el?.removeEventListener("scroll", handleScroll);
  }, [topic.slug, setTopicProgress]);

  return (
    <div className="flex gap-8">
      <nav className="hidden w-48 shrink-0 xl:block">
        <div className="sticky top-20 space-y-1">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">On this page</p>
          {sections.map(({ id, title }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
                activeSection === id
                  ? "bg-primary/15 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {title}
            </a>
          ))}
        </div>
      </nav>

      <div ref={contentRef} className="min-w-0 flex-1 space-y-12 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge>{topic.category}</Badge>
            <Badge variant="outline">{topic.difficulty}</Badge>
            <Badge variant="secondary">{topic.estimatedTime}</Badge>
            {topic.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{topic.title}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{topic.subtitle}</p>
        </motion.div>

        {topic.keyConcepts && (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {topic.keyConcepts.map((kc) => (
              <Card key={kc.term} className="border-border/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-primary">{kc.term}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{kc.definition}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <section id="overview" className="scroll-mt-24">
          <SectionHeader icon={BookOpen} title="Topic Overview" />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { q: "What is it?", a: topic.overview.what },
              { q: "Why do we need it?", a: topic.overview.why },
              { q: "Where is it used?", a: topic.overview.where },
            ].map((item) => (
              <Card key={item.q} className="border-border/30">
                <CardHeader>
                  <CardTitle className="text-sm text-primary">{item.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="analogy" className="scroll-mt-24">
          <SectionHeader icon={Lightbulb} title="Real World Analogy" />
          <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-6">
            <p className="text-lg italic leading-relaxed">&ldquo;{topic.analogy}&rdquo;</p>
          </div>
        </section>

        <section id="diagram" className="scroll-mt-24">
          <SectionHeader icon={Layers} title="Visual Architecture Diagram" />
          <MermaidDiagram chart={topic.mermaidDiagram} className="mb-6" />
          {topic.flowNodes && topic.flowEdges && (
            <>
              <p className="mb-3 text-sm text-muted-foreground">Interactive diagram — drag nodes to explore</p>
              <FlowDiagram nodes={topic.flowNodes} edges={topic.flowEdges} />
            </>
          )}
        </section>

        <section id="components" className="scroll-mt-24">
          <SectionHeader icon={GitBranch} title="Internal Components" />
          <div className="space-y-4">
            {topic.components.map((comp) => (
              <Card key={comp.name} className="border-border/30">
                <CardHeader>
                  <CardTitle className="text-lg">{comp.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{comp.purpose}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <DetailList title="Inputs" items={comp.inputs} />
                    <DetailList title="Outputs" items={comp.outputs} />
                    <DetailList title="Benefits" items={comp.benefits} color="text-green-400" />
                    <DetailList title="Challenges" items={comp.challenges} color="text-yellow-400" />
                    <DetailList title="Best Practices" items={comp.bestPractices} color="text-blue-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="workflow" className="scroll-mt-24">
          <SectionHeader icon={Play} title="Step-by-Step Workflow" />
          <div className="relative space-y-0">
            {topic.workflow.map((step, i) => (
              <div key={step.title} className="relative flex gap-4 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                    {i + 1}
                  </div>
                  {i < topic.workflow.length - 1 && (
                    <div className="mt-1 w-0.5 flex-1 bg-gradient-to-b from-primary/50 to-transparent" />
                  )}
                </div>
                <div className="flex-1 pb-2">
                  <h4 className="font-semibold">{step.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  {step.details && (
                    <p className="mt-1 text-xs text-muted-foreground/70">{step.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="example" className="scroll-mt-24">
          <SectionHeader icon={Code2} title="Real Example" />
          <Card className="border-border/30">
            <CardHeader>
              <CardTitle className="text-base">Question: {topic.realExample.question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topic.realExample.steps.map((step) => (
                <div key={step.label} className="rounded-lg bg-muted/30 p-4">
                  <p className="text-sm font-medium text-primary">{step.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{step.content}</p>
                </div>
              ))}
              <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4">
                <p className="text-sm font-medium text-green-400">Response</p>
                <p className="mt-1 text-sm">{topic.realExample.response}</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="code" className="scroll-mt-24">
          <SectionHeader icon={Code2} title="Code Examples" />
          <div className="space-y-6">
            {topic.codeExamples.map((ex) => (
              <CodeBlock
                key={ex.title}
                title={ex.title}
                description={ex.description}
                language={ex.language}
                code={ex.code}
              />
            ))}
          </div>
        </section>

        <section id="deep-dive" className="scroll-mt-24">
          <SectionHeader icon={Building2} title="Architecture Deep Dive" />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Scalability", items: topic.architectureDeepDive.scalability },
              { title: "Security", items: topic.architectureDeepDive.security },
              { title: "Cost Optimization", items: topic.architectureDeepDive.costOptimization },
              { title: "Monitoring", items: topic.architectureDeepDive.monitoring },
            ].map((block) => (
              <Card key={block.title} className="border-border/30">
                <CardHeader>
                  <CardTitle className="text-base">{block.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="interview" className="scroll-mt-24">
          <SectionHeader icon={MessageCircleQuestion} title="Common Interview Questions" />
          <div className="space-y-4">
            {(["basic", "intermediate", "advanced"] as const).map((level) => {
              const qs = topic.interviewQuestions.filter((q) => q.difficulty === level);
              if (qs.length === 0) return null;
              return (
                <div key={level}>
                  <Badge className="mb-3 capitalize">{level}</Badge>
                  <div className="space-y-3">
                    {qs.map((q) => (
                      <Card key={q.question} className="border-border/30">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">{q.question}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{q.answer}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="quiz" className="scroll-mt-24">
          <SectionHeader icon={CheckSquare} title="Knowledge Check" />
          <QuizSection
            questions={topic.quiz}
            onComplete={(score) => {
              const pct = Math.round((score / topic.quiz.length) * 100);
              setTopicProgress(topic.slug, Math.max(pct, 80));
            }}
          />
        </section>

        <section id="project" className="scroll-mt-24">
          <SectionHeader icon={Rocket} title="Project Usage" />
          <p className="mb-4 text-muted-foreground">{topic.projectUsage.description}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {topic.projectUsage.useCases.map((uc) => (
              <Card key={uc.feature} className="border-border/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-primary">{uc.feature}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{uc.usage}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="scroll-mt-24">
          <SectionHeader icon={BookOpen} title="My Notes" />
          <textarea
            className="w-full rounded-xl border border-border/50 bg-card/30 p-4 text-sm outline-none focus:border-primary/50 min-h-[120px] resize-y"
            placeholder="Write your personal notes about this topic..."
            defaultValue={getNote(topic.slug)}
            onChange={(e) => setNote(topic.slug, e.target.value)}
          />
        </section>
      </div>
    </div>
  );
}

function SectionHeader({ icon: Icon, title }: { icon: React.ComponentType<{ className?: string }>; title: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}

function DetailList({ title, items, color }: { title: string; items: string[]; color?: string }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className={`text-sm ${color ?? "text-muted-foreground"}`}>
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
