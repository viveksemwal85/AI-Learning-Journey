"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MermaidDiagram } from "@/components/diagrams/mermaid-diagram";
import { FlowDiagram } from "@/components/diagrams/flow-diagram";
import { studentAiMentor } from "@/data/special-pages";
import { architectureDiagrams } from "@/data/architecture-gallery";

const mentorDiagram = architectureDiagrams.find((d) => d.slug === "student-ai-mentor")!;

export default function StudentAiMentorPage() {
  return (
    <>
      <Header title="Student AI Mentor Project" slug="student-ai-mentor" />
      <main className="px-4 py-8 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge className="mb-4">Capstone Project</Badge>
            <h1 className="text-3xl font-bold md:text-4xl">{studentAiMentor.title}</h1>
            <p className="mt-3 text-lg text-muted-foreground">{studentAiMentor.subtitle}</p>
          </motion.div>

          <section>
            <h2 className="mb-6 text-2xl font-bold">Features</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {studentAiMentor.features.map((feature, i) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{feature.name}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1">
                        {feature.tech.map((t) => (
                          <Badge key={t} variant="outline" className="text-[10px]">{t}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold">System Architecture</h2>
            <MermaidDiagram chart={mentorDiagram.mermaid} className="mb-6" />
            <FlowDiagram nodes={mentorDiagram.nodes} edges={mentorDiagram.edges} />
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold">Architecture Layers</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {Object.entries(studentAiMentor.architectures).map(([key, value]) => (
                <Card key={key} className="glass">
                  <CardHeader>
                    <CardTitle className="capitalize text-base">{key.replace(/([A-Z])/g, " $1")} Architecture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold">Concepts Applied</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { concept: "RAG Systems", usage: "Document Q&A across study materials", href: "/topics/rag-systems" },
                { concept: "Agentic AI", usage: "Career guidance and study planning agents", href: "/topics/agentic-ai" },
                { concept: "Multi-Agent Systems", usage: "Interview prep with specialized agents", href: "/topics/multi-agent-systems" },
                { concept: "Vector Databases", usage: "Semantic search for textbooks", href: "/topics/vector-databases" },
                { concept: "N8N Automation", usage: "Study reminders and notifications", href: "/topics/n8n-automation" },
                { concept: "Docker & CI/CD", usage: "Containerized deployment pipeline", href: "/topics/docker" },
              ].map((item) => (
                <Link key={item.concept} href={item.href}>
                  <Card className="transition-colors hover:border-primary/50">
                    <CardContent className="flex items-center gap-3 pt-6">
                      <CheckCircle className="h-5 w-5 shrink-0 text-green-400" />
                      <div>
                        <p className="font-medium text-sm">{item.concept}</p>
                        <p className="text-xs text-muted-foreground">{item.usage}</p>
                      </div>
                      <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          <div className="text-center pb-8">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/topics/rag-systems">Start Building — Learn RAG First <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
