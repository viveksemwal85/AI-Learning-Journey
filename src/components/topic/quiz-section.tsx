"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import type { QuizQuestion } from "@/types/topic";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface QuizSectionProps {
  questions: QuizQuestion[];
  onComplete?: (score: number) => void;
}

export function QuizSection({ questions, onComplete }: QuizSectionProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];

  const handleSelect = (index: number) => {
    if (showExplanation) return;
    setSelected(index);
    setShowExplanation(true);
    if (index === q.correctIndex) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowExplanation(false);
    } else {
      setFinished(true);
      onComplete?.(score);
    }
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-xl border border-border/50 bg-card/50 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-green-400" />
        <h3 className="text-2xl font-bold">Quiz Complete!</h3>
        <p className="mt-2 text-muted-foreground">
          You scored {score}/{questions.length} ({pct}%)
        </p>
        <Button
          className="mt-4"
          variant="outline"
          onClick={() => {
            setCurrent(0);
            setSelected(null);
            setShowExplanation(false);
            setScore(0);
            setFinished(false);
          }}
        >
          Retry Quiz
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Question {current + 1} of {questions.length}
        </span>
        <span className="capitalize">{q.type.replace("-", " ")}</span>
      </div>
      <h4 className="text-lg font-medium">{q.question}</h4>
      <div className="space-y-2">
        {q.options.map((option, i) => {
          const isCorrect = i === q.correctIndex;
          const isSelected = i === selected;
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={showExplanation}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg border p-4 text-left transition-all",
                !showExplanation && "hover:border-primary/50 hover:bg-accent/50 cursor-pointer",
                showExplanation && isCorrect && "border-green-500/50 bg-green-500/10",
                showExplanation && isSelected && !isCorrect && "border-red-500/50 bg-red-500/10",
                !showExplanation && "border-border/50 bg-card/30"
              )}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-sm font-medium">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{option}</span>
              {showExplanation && isCorrect && <CheckCircle2 className="h-5 w-5 text-green-400" />}
              {showExplanation && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-400" />}
            </button>
          );
        })}
      </div>
      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="flex gap-3 rounded-lg border border-blue-500/30 bg-blue-500/10 p-4"
          >
            <HelpCircle className="h-5 w-5 shrink-0 text-blue-400" />
            <p className="text-sm">{q.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
      {showExplanation && (
        <Button onClick={handleNext}>
          {current < questions.length - 1 ? "Next Question" : "See Results"}
        </Button>
      )}
    </div>
  );
}
