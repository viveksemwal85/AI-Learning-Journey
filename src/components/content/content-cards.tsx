import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/content";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { StatusBadge, Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <div className="mb-2 flex items-start justify-between gap-2">
          <CardTitle>{project.title}</CardTitle>
          <StatusBadge status={project.status} />
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="blue">{tag}</Badge>
        ))}
      </div>
    </Card>
  );
}

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export function CategoryCard({ title, description, href, icon }: CategoryCardProps) {
  return (
    <Link href={href} className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-xl">
      <Card className="h-full group-hover:border-blue-200 group-hover:shadow-md">
        <CardHeader>
          {icon && <div className="mb-3 text-blue-600">{icon}</div>}
          <CardTitle className="flex items-center justify-between gap-2">
            {title}
            <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-blue-600" aria-hidden="true" />
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

interface RoadmapPhaseCardProps {
  phase: number;
  title: string;
  topics: string[];
  status: "completed" | "in-progress" | "upcoming";
}

export function RoadmapPhaseCard({ phase, title, topics, status }: RoadmapPhaseCardProps) {
  return (
    <div className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
          {phase}
        </span>
        <StatusBadge status={status === "completed" ? "completed" : status} />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <ul className="mt-4 space-y-2">
        {topics.map((topic) => (
          <li key={topic} className="flex items-center gap-2 text-sm text-slate-600">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" aria-hidden="true" />
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}
