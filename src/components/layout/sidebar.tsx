"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain, MessageSquare, PenTool, Database, Layers, Plug, Bot, Users, Workflow,
  Server, Link as LinkIcon, Sliders, Activity, Container, Cloud, GitBranch,
  Scale, BarChart, Building, GraduationCap, Briefcase, BookOpen, LayoutGrid,
  ChevronRight, Menu, X, Home, Map, LayoutDashboard, Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/data/navigation";
import { useLearning } from "@/lib/learning-context";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain, MessageSquare, PenTool, Database, Layers, Plug, Bot, Users, Workflow,
  Server, Link: LinkIcon, Sliders, Activity, Container, Cloud, GitBranch,
  Scale, BarChart, Building, GraduationCap, Briefcase, BookOpen, LayoutGrid,
};

const extraNav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/roadmap", label: "Roadmap", icon: Map },
];

interface SidebarProps {
  onSearchOpen?: () => void;
}

export function Sidebar({ onSearchOpen }: SidebarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { progress } = useLearning();

  const categories = [...new Set(NAV_ITEMS.map((i) => i.category).filter(Boolean))];

  const isActive = (slug: string) => {
    if (slug === "glossary") return pathname === "/glossary";
    if (slug === "architecture-gallery") return pathname.startsWith("/architecture");
    if (slug === "student-ai-mentor") return pathname === "/project/student-ai-mentor";
    if (slug === "interview-preparation") return pathname === "/interview-prep";
    return pathname === `/topics/${slug}`;
  };

  const getHref = (slug: string) => {
    if (slug === "glossary") return "/glossary";
    if (slug === "architecture-gallery") return "/architecture";
    if (slug === "student-ai-mentor") return "/project/student-ai-mentor";
    if (slug === "interview-preparation") return "/interview-prep";
    return `/topics/${slug}`;
  };

  const NavContent = () => (
    <div className="flex h-full flex-col">
      <div className="border-b border-border/50 p-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
            <Brain className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold leading-tight">AI Engineering</p>
            <p className="text-[10px] text-muted-foreground">Mastery Hub</p>
          </div>
        </Link>
      </div>

      <div className="p-3">
        <button
          onClick={onSearchOpen}
          className="flex w-full items-center gap-2 rounded-lg border border-border/50 bg-card/30 px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-border hover:text-foreground"
        >
          <Search className="h-4 w-4" />
          <span>Search topics...</span>
          <kbd className="ml-auto rounded border border-border px-1.5 text-[10px]">⌘K</kbd>
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 pb-4">
        <div className="mb-4 space-y-1">
          {extraNav.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                  active ? "bg-primary/15 text-primary font-medium" : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </div>

        {categories.map((cat) => (
          <div key={cat} className="mb-4">
            <p className="mb-1 px-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              {cat}
            </p>
            <div className="space-y-0.5">
              {NAV_ITEMS.filter((i) => i.category === cat).map((item) => {
                const Icon = iconMap[item.icon] || Brain;
                const active = isActive(item.slug);
                const prog = progress[item.slug] ?? 0;
                return (
                  <Link
                    key={item.slug}
                    href={getHref(item.slug)}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "group flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                      active ? "bg-primary/15 text-primary font-medium" : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="flex-1 truncate">{item.title}</span>
                    {prog > 0 && (
                      <span className="text-[10px] text-primary">{prog}%</span>
                    )}
                    <ChevronRight className={cn("h-3 w-3 opacity-0 transition-opacity", active && "opacity-100")} />
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      <button
        className="fixed left-4 top-4 z-50 rounded-lg border border-border bg-card p-2 lg:hidden"
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <aside className="hidden w-64 shrink-0 border-r border-border/50 bg-card/30 backdrop-blur-xl lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:flex-col">
        <NavContent />
      </aside>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed inset-y-0 left-0 z-50 w-72 border-r border-border bg-card lg:hidden"
            >
              <button
                className="absolute right-3 top-3 rounded-lg p-2 hover:bg-accent"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
              <NavContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
