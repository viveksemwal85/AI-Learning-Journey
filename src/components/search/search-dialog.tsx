"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { searchTopics, type SearchResult } from "@/lib/search";
import { cn } from "@/lib/utils";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const router = useRouter();

  useEffect(() => {
    setResults(searchTopics(query));
  }, [query]);

  const navigate = useCallback(
    (slug: string) => {
      const special: Record<string, string> = {
        glossary: "/glossary",
        "architecture-gallery": "/architecture",
        "student-ai-mentor": "/project/student-ai-mentor",
        "interview-preparation": "/interview-prep",
      };
      router.push(special[slug] ?? `/topics/${slug}`);
      onClose();
      setQuery("");
    },
    [router, onClose]
  );

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 pt-[15vh] backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3 border-b border-border px-4">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search topics, concepts, components..."
              className="flex-1 bg-transparent py-4 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button onClick={onClose} className="rounded p-1 hover:bg-accent">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="max-h-80 overflow-y-auto p-2">
            {query && results.length === 0 && (
              <p className="p-4 text-center text-sm text-muted-foreground">No results found</p>
            )}
            {results.map((r, i) => (
              <button
                key={`${r.slug}-${i}`}
                onClick={() => navigate(r.slug)}
                className={cn(
                  "flex w-full flex-col gap-0.5 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-accent"
                )}
              >
                <span className="text-sm font-medium">{r.title}</span>
                <span className="text-xs text-muted-foreground line-clamp-1">{r.subtitle}</span>
                <span className="text-[10px] text-primary">{r.category}</span>
              </button>
            ))}
            {!query && (
              <p className="p-4 text-center text-sm text-muted-foreground">
                Type to search across all topics and concepts
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function useSearchShortcut(onOpen: () => void) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpen();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onOpen]);
}
