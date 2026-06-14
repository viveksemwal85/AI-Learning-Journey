import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "article";
}

export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </Tag>
  );
}

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  alt?: boolean;
}

export function Section({ children, className, id, alt }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20", alt && "bg-slate-50", className)}
    >
      {children}
    </section>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10", centered && "text-center")}>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-3 text-base leading-relaxed text-slate-600", centered && "mx-auto max-w-2xl")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
