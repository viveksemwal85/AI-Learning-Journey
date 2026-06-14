import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "blue" | "green" | "amber" | "slate";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-slate-100 text-slate-700",
    blue: "bg-blue-50 text-blue-700",
    green: "bg-green-50 text-green-700",
    amber: "bg-amber-50 text-amber-700",
    slate: "bg-slate-100 text-slate-600",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export function StatusBadge({ status }: { status: "planned" | "in-progress" | "completed" | "upcoming" }) {
  const map = {
    planned: { label: "Planned", variant: "slate" as const },
    "in-progress": { label: "In Progress", variant: "blue" as const },
    completed: { label: "Completed", variant: "green" as const },
    upcoming: { label: "Upcoming", variant: "slate" as const },
  };
  const { label, variant } = map[status] ?? map.planned;
  return <Badge variant={variant}>{label}</Badge>;
}
