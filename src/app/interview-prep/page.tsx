"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { interviewCategories } from "@/data/special-pages";

export default function InterviewPrepPage() {
  return (
    <>
      <Header title="Interview Preparation" slug="interview-preparation" />
      <main className="px-4 py-8 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="text-3xl font-bold">Interview Preparation</h1>
            <p className="mt-2 text-muted-foreground">
              Common AI engineering interview questions with detailed answers
            </p>
          </motion.div>

          <div className="space-y-10">
            {interviewCategories.map((cat) => (
              <div key={cat.category}>
                <h2 className="mb-4 text-xl font-semibold">{cat.category}</h2>
                <div className="space-y-4">
                  {cat.questions.map((q) => (
                    <Card key={q.q} className="glass">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <CardTitle className="text-base leading-relaxed">{q.q}</CardTitle>
                          <Badge variant="outline" className="shrink-0 capitalize">
                            {q.difficulty}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm leading-relaxed text-muted-foreground">{q.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
