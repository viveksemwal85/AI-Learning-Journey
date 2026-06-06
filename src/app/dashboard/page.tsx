"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BarChart3, Bookmark, TrendingUp, Clock, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLearning } from "@/lib/learning-context";
import { topics } from "@/data/topics";
import { NAV_ITEMS } from "@/data/navigation";

export default function DashboardPage() {
  const { progress, bookmarks, getOverallProgress, notes } = useLearning();
  const overall = getOverallProgress();
  const inProgress = topics.filter((t) => (progress[t.slug] ?? 0) > 0 && (progress[t.slug] ?? 0) < 100);
  const completed = topics.filter((t) => (progress[t.slug] ?? 0) >= 80);
  const bookmarkedTopics = NAV_ITEMS.filter((n) => bookmarks.has(n.slug));

  return (
    <>
      <Header title="Learning Dashboard" />
      <main className="px-4 py-8 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold">Learning Dashboard</h1>
            <p className="mt-2 text-muted-foreground">Track your AI engineering learning journey</p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Overall Progress", value: `${overall}%`, icon: TrendingUp, color: "text-blue-400" },
              { label: "Topics Started", value: inProgress.length + completed.length, icon: Clock, color: "text-purple-400" },
              { label: "Completed", value: completed.length, icon: BarChart3, color: "text-green-400" },
              { label: "Bookmarks", value: bookmarks.size, icon: Bookmark, color: "text-cyan-400" },
            ].map((stat) => (
              <Card key={stat.label} className="glass">
                <CardContent className="flex items-center gap-4 pt-6">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="glass">
              <CardHeader>
                <CardTitle>Topic Progress</CardTitle>
                <CardDescription>Your progress across all topics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 max-h-96 overflow-y-auto">
                {topics.map((topic) => {
                  const pct = progress[topic.slug] ?? 0;
                  return (
                    <Link key={topic.slug} href={`/topics/${topic.slug}`} className="block group">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm group-hover:text-primary transition-colors">{topic.title}</span>
                        <span className="text-xs text-muted-foreground">{pct}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </Link>
                  );
                })}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Bookmarks</CardTitle>
                </CardHeader>
                <CardContent>
                  {bookmarkedTopics.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No bookmarks yet. Bookmark topics while reading!</p>
                  ) : (
                    <div className="space-y-2">
                      {bookmarkedTopics.map((item) => {
                        const href =
                          item.slug === "glossary" ? "/glossary"
                          : item.slug === "architecture-gallery" ? "/architecture"
                          : item.slug === "student-ai-mentor" ? "/project/student-ai-mentor"
                          : item.slug === "interview-preparation" ? "/interview-prep"
                          : `/topics/${item.slug}`;
                        return (
                        <Link
                          key={item.slug}
                          href={href}
                          className="flex items-center justify-between rounded-lg p-2 hover:bg-accent"
                        >
                          <span className="text-sm">{item.title}</span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </Link>
                      );})}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="glass">
                <CardHeader>
                  <CardTitle>Notes</CardTitle>
                  <CardDescription>{Object.keys(notes).filter((k) => notes[k]).length} topics with notes</CardDescription>
                </CardHeader>
                <CardContent>
                  {Object.entries(notes).filter(([, v]) => v).length === 0 ? (
                    <p className="text-sm text-muted-foreground">Take notes on any topic page to see them here.</p>
                  ) : (
                    <div className="space-y-3 max-h-48 overflow-y-auto">
                      {Object.entries(notes)
                        .filter(([, v]) => v)
                        .map(([slug, note]) => {
                          const topic = topics.find((t) => t.slug === slug);
                          return (
                            <div key={slug} className="rounded-lg bg-muted/30 p-3">
                              <p className="text-sm font-medium">{topic?.title ?? slug}</p>
                              <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{note}</p>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {inProgress.length > 0 && (
            <Card className="glass">
              <CardHeader>
                <CardTitle>Continue Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {inProgress.slice(0, 6).map((topic) => (
                    <Link key={topic.slug} href={`/topics/${topic.slug}`}>
                      <Card className="transition-colors hover:border-primary/50">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm">{topic.title}</CardTitle>
                          <Badge variant="outline">{progress[topic.slug]}% complete</Badge>
                        </CardHeader>
                      </Card>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <div className="text-center">
            <Button variant="gradient" asChild>
              <Link href="/topics/ai-fundamentals">Continue Learning <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
