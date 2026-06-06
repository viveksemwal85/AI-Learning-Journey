"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MermaidDiagram } from "@/components/diagrams/mermaid-diagram";
import { FlowDiagram } from "@/components/diagrams/flow-diagram";
import { architectureDiagrams } from "@/data/architecture-gallery";
import { cn } from "@/lib/utils";

export default function ArchitectureGalleryPage() {
  const [active, setActive] = useState(architectureDiagrams[0].slug);
  const diagram = architectureDiagrams.find((d) => d.slug === active)!;

  return (
    <>
      <Header title="Architecture Gallery" />
      <main className="px-4 py-8 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="text-3xl font-bold">Architecture Gallery</h1>
            <p className="mt-2 text-muted-foreground">
              Visually rich architecture diagrams for every major AI system pattern
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-2">
              {architectureDiagrams.map((d) => (
                <button
                  key={d.slug}
                  onClick={() => setActive(d.slug)}
                  className={cn(
                    "w-full rounded-lg border p-3 text-left text-sm transition-all",
                    active === d.slug
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-border/50 hover:border-border hover:bg-accent/50"
                  )}
                >
                  {d.title}
                </button>
              ))}
            </div>

            <div className="lg:col-span-3 space-y-6">
              <Card className="glass">
                <CardHeader>
                  <CardTitle>{diagram.title}</CardTitle>
                  <CardDescription>{diagram.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <MermaidDiagram chart={diagram.mermaid} />
                  <div>
                    <p className="mb-3 text-sm text-muted-foreground">Interactive view</p>
                    <FlowDiagram nodes={diagram.nodes} edges={diagram.edges} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
