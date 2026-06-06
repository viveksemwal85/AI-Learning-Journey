"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type ProgressMap = Record<string, number>;
type BookmarksSet = Set<string>;
type NotesMap = Record<string, string>;

interface LearningContextType {
  progress: ProgressMap;
  bookmarks: BookmarksSet;
  notes: NotesMap;
  setTopicProgress: (slug: string, percent: number) => void;
  toggleBookmark: (slug: string) => void;
  isBookmarked: (slug: string) => boolean;
  setNote: (slug: string, note: string) => void;
  getNote: (slug: string) => string;
  getOverallProgress: () => number;
}

const LearningContext = createContext<LearningContextType | null>(null);

const STORAGE_KEYS = {
  progress: "ai-hub-progress",
  bookmarks: "ai-hub-bookmarks",
  notes: "ai-hub-notes",
};

export function LearningProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [bookmarks, setBookmarks] = useState<BookmarksSet>(new Set());
  const [notes, setNotes] = useState<NotesMap>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedProgress = localStorage.getItem(STORAGE_KEYS.progress);
      const storedBookmarks = localStorage.getItem(STORAGE_KEYS.bookmarks);
      const storedNotes = localStorage.getItem(STORAGE_KEYS.notes);
      if (storedProgress) setProgress(JSON.parse(storedProgress));
      if (storedBookmarks) setBookmarks(new Set(JSON.parse(storedBookmarks)));
      if (storedNotes) setNotes(JSON.parse(storedNotes));
    } catch {
      /* ignore parse errors */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(progress));
  }, [progress, loaded]);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(STORAGE_KEYS.bookmarks, JSON.stringify([...bookmarks]));
  }, [bookmarks, loaded]);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(STORAGE_KEYS.notes, JSON.stringify(notes));
  }, [notes, loaded]);

  const setTopicProgress = useCallback((slug: string, percent: number) => {
    setProgress((prev) => ({ ...prev, [slug]: Math.min(100, Math.max(0, percent)) }));
  }, []);

  const toggleBookmark = useCallback((slug: string) => {
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }, []);

  const isBookmarked = useCallback((slug: string) => bookmarks.has(slug), [bookmarks]);

  const setNote = useCallback((slug: string, note: string) => {
    setNotes((prev) => ({ ...prev, [slug]: note }));
  }, []);

  const getNote = useCallback((slug: string) => notes[slug] ?? "", [notes]);

  const getOverallProgress = useCallback(() => {
    const values = Object.values(progress);
    if (values.length === 0) return 0;
    return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
  }, [progress]);

  return (
    <LearningContext.Provider
      value={{
        progress,
        bookmarks,
        notes,
        setTopicProgress,
        toggleBookmark,
        isBookmarked,
        setNote,
        getNote,
        getOverallProgress,
      }}
    >
      {children}
    </LearningContext.Provider>
  );
}

export function useLearning() {
  const ctx = useContext(LearningContext);
  if (!ctx) throw new Error("useLearning must be used within LearningProvider");
  return ctx;
}
