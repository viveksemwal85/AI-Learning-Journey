"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { roadmapPhases } from "@/data/special-pages";
import { useLearning } from "@/lib/learning-context";
import { topics } from "@/data/topics";

const slugMap: Record<string, string> = {
  "AI Fundamentals": "ai-fundamentals",
  "LLMs": "llms",
  "Prompt Engineering": "prompt-engineering",
  "RAG Systems": "rag-systems",
  "Vector Databases": "vector-databases",
  "MCP": "mcp",
  "Agentic AI": "agentic-ai",
  "Multi-Agent Systems": "multi-agent-systems",
  "N8N Automation": "n8n-automation",
  "Backend Development": "backend-development",
  "API Integrations": "api-integrations",
  "Fine Tuning": "fine-tuning",
  "MLOps": "mlops",
  "Docker": "docker",
  "Cloud Deployment": "cloud-deployment",
  "CI/CD": "cicd",
  "Scaling": "scaling-load-balancing",
  "Monitoring": "monitoring-logging",
  "AI SaaS Architecture": "ai-saas-architecture",
  "Student AI Mentor Project": "student-ai-mentor",
  "Interview Prep": "interview-preparation",
};

export default function RoadmapPage() {
  const { progress } = useLearning();

  return (
    <>
      <Header title="Interactive Roadmap" />
      <main className="px-4 py-8 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
            <h1 className="text-3xl font-bold">Learning Roadmap</h1>
            <p className="mt-2 text-muted-foreground">
              Your structured path from AI fundamentals to production systems
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden md:block" />

            <div className="space-y-8">
              {roadmapPhases.map((phase, phaseIndex) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: phaseIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="relative md:pl-16"
                >
                  <div className="absolute left-4 top-6 hidden h-4 w-4 rounded-full bg-primary ring-4 ring-background md:block" />
                  <Card className="glass overflow-hidden">
                    <div className={`h-1 bg-gradient-to-r ${phase.color}`} />
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge>Phase {phase.phase}</Badge>
                        <CardTitle>{phase.title}</CardTitle>
                        <span className="text-sm text-muted-foreground">{phase.duration}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {phase.topics.map((topicName) => {
                          const slug = slugMap[topicName] ?? topicName.toLowerCase().replace(/\s+/g, "-");
                          const topic = topics.find((t) => t.slug === slug);
                          const pct = progress[slug] ?? 0;
                          const done = pct >= 80;
                          const href =
                            slug === "student-ai-mentor"
                              ? "/project/student-ai-mentor"
                              : slug === "interview-preparation"
                                ? "/interview-prep"
                                : `/topics/${slug}`;

                          return (
                            <Link
                              key={topicName}
                              href={href}
                              className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-accent/50"
                            >
                              {done ? (
                                <CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" />
                              ) : pct > 0 ? (
                                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-primary text-[10px] font-bold text-primary">
                                  {pct}
                                </div>
                              ) : (
                                <Circle className="h-5 w-5 shrink-0 text-muted-foreground" />
                              )}
                              <span className="flex-1 text-sm">{topicName}</span>
                              {topic && (
                                <Badge variant="outline" className="text-[10px]">
                                  {topic.difficulty}
                                </Badge>
                              )}
                              <ArrowRight className="h-4 w-4 text-muted-foreground" />
                            </Link>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="gradient" asChild>
              <Link href="/topics/ai-fundamentals">Start Phase 1 <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
