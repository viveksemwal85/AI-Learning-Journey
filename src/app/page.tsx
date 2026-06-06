"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Brain, Layers, Map, BarChart3, Compass, FolderKanban,
  Sparkles, Bot, Database, GitBranch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FlowDiagram } from "@/components/diagrams/flow-diagram";
import { useLearning } from "@/lib/learning-context";
import { topics } from "@/data/topics";
import { roadmapPhases } from "@/data/special-pages";

const heroFlow = {
  nodes: [
    { id: "input", label: "User Query", type: "input" },
    { id: "router", label: "AI Router" },
    { id: "rag", label: "RAG Pipeline" },
    { id: "agent", label: "Agent System" },
    { id: "output", label: "Smart Response", type: "output" },
  ],
  edges: [
    { source: "input", target: "router" },
    { source: "router", target: "rag", label: "knowledge" },
    { source: "router", target: "agent", label: "action" },
    { source: "rag", target: "output" },
    { source: "agent", target: "output" },
  ],
};

const features = [
  { icon: Layers, title: "Interactive Diagrams", desc: "Mermaid & React Flow architecture visualizations" },
  { icon: Map, title: "Learning Roadmap", desc: "Structured path from beginner to advanced" },
  { icon: BarChart3, title: "Progress Tracking", desc: "Track reading progress and quiz scores" },
  { icon: Compass, title: "Concept Explorer", desc: "23 topics with deep-dive content" },
  { icon: FolderKanban, title: "Project Showcase", desc: "Student AI Mentor capstone project" },
  { icon: Sparkles, title: "Knowledge Checks", desc: "Quizzes with detailed explanations" },
];

export default function HomePage() {
  const { getOverallProgress, progress } = useLearning();
  const overall = getOverallProgress();
  const completedCount = Object.values(progress).filter((p) => p >= 80).length;

  return (
    <div className="gradient-mesh min-h-screen">
      <section className="relative overflow-hidden px-4 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge className="mb-6">AI Engineering Encyclopedia</Badge>
            <h1 className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl">
              AI Engineering Mastery Hub
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Learn, Build and Master Agentic AI Systems
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="gradient" size="lg" asChild>
                <Link href="/topics/ai-fundamentals">
                  Start Learning <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/roadmap">View Roadmap</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href="/architecture">Architecture Gallery</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16"
          >
            <FlowDiagram nodes={heroFlow.nodes} edges={heroFlow.edges} className="h-[350px]" />
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Topics", value: topics.length, icon: Brain },
              { label: "Your Progress", value: `${overall}%`, icon: BarChart3 },
              { label: "Completed", value: completedCount, icon: Sparkles },
            ].map((stat) => (
              <Card key={stat.label} className="glass text-center">
                <CardContent className="pt-6">
                  <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="mb-8 text-2xl font-bold">Platform Features</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass h-full transition-transform hover:scale-[1.02]">
                  <CardHeader>
                    <f.icon className="mb-2 h-8 w-8 text-primary" />
                    <CardTitle className="text-lg">{f.title}</CardTitle>
                    <CardDescription>{f.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-2xl font-bold">Learning Roadmap Preview</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {roadmapPhases.map((phase) => (
              <Card key={phase.phase} className="glass overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${phase.color}`} />
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">Phase {phase.phase}</Badge>
                    <span className="text-xs text-muted-foreground">{phase.duration}</span>
                  </div>
                  <CardTitle>{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {phase.topics.map((t) => (
                      <li key={t} className="text-sm text-muted-foreground">• {t}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" asChild>
              <Link href="/roadmap">Full Interactive Roadmap <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-2xl font-bold">Popular Topics</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topics.slice(0, 8).map((topic) => (
              <Link key={topic.slug} href={`/topics/${topic.slug}`}>
                <Card className="glass h-full transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <CardTitle className="text-base">{topic.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{topic.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Badge variant="outline">{topic.difficulty}</Badge>
                      <Badge variant="secondary">{topic.estimatedTime}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="glass overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 p-8 text-center md:p-12">
              <Bot className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h2 className="text-2xl font-bold md:text-3xl">Student AI Mentor Project</h2>
              <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
                Capstone project integrating RAG, Agents, Multi-Agent Systems, and full-stack deployment.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {[Database, GitBranch, Bot].map((Icon, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-full border border-border/50 px-3 py-1 text-xs">
                    <Icon className="h-3 w-3 text-primary" />
                    {["RAG Pipeline", "Agent Architecture", "Multi-Agent"][i]}
                  </div>
                ))}
              </div>
              <Button variant="gradient" className="mt-8" asChild>
                <Link href="/project/student-ai-mentor">Explore Capstone Project</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
