"use client";

import { Bookmark, Download } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useLearning } from "@/lib/learning-context";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title?: string;
  slug?: string;
  progress?: number;
}

export function Header({ title, slug, progress = 0 }: HeaderProps) {
  const { toggleBookmark, isBookmarked } = useLearning();
  const bookmarked = slug ? isBookmarked(slug) : false;

  const handlePrint = () => window.print();

  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="flex h-14 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-4 pl-10 lg:pl-0">
          {title && <h1 className="truncate text-lg font-semibold">{title}</h1>}
        </div>
        <div className="flex items-center gap-2">
          {progress > 0 && (
            <div className="hidden items-center gap-2 sm:flex">
              <div className="h-1.5 w-24 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground">{progress}%</span>
            </div>
          )}
          {slug && (
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
              onClick={() => toggleBookmark(slug)}
              aria-label="Bookmark"
            >
              <Bookmark className={cn("h-4 w-4", bookmarked && "fill-primary text-primary")} />
            </Button>
          )}
          <Button variant="ghost" size="icon" className="h-9 w-9 hidden sm:flex" onClick={handlePrint} aria-label="Download PDF">
            <Download className="h-4 w-4" />
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
