"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { glossaryTerms } from "@/data/special-pages";

export default function GlossaryPage() {
  const [query, setQuery] = useState("");
  const categories = [...new Set(glossaryTerms.map((t) => t.category))];

  const filtered = glossaryTerms.filter(
    (t) =>
      t.term.toLowerCase().includes(query.toLowerCase()) ||
      t.definition.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Header title="Glossary" slug="glossary" />
      <main className="px-4 py-8 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="text-3xl font-bold">AI Engineering Glossary</h1>
            <p className="mt-2 text-muted-foreground">Quick reference for key terms and concepts</p>
            <div className="relative mt-6">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search terms..."
                className="w-full rounded-lg border border-border bg-card/50 py-3 pl-10 pr-4 text-sm outline-none focus:border-primary/50"
              />
            </div>
          </motion.div>

          {categories.map((cat) => {
            const terms = filtered.filter((t) => t.category === cat);
            if (terms.length === 0) return null;
            return (
              <div key={cat} className="mb-8">
                <Badge className="mb-4">{cat}</Badge>
                <div className="grid gap-3 sm:grid-cols-2">
                  {terms.map((term) => (
                    <Card key={term.term} className="glass">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base text-primary">{term.term}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{term.definition}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
