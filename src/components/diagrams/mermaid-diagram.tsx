"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export function MermaidDiagram({ chart, className }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function render() {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          themeVariables: {
            primaryColor: "#6366f1",
            primaryTextColor: "#e2e8f0",
            primaryBorderColor: "#818cf8",
            lineColor: "#64748b",
            secondaryColor: "#1e293b",
            tertiaryColor: "#0f172a",
            background: "#0a0a0f",
            mainBkg: "#1e1e2e",
            nodeBorder: "#6366f1",
            clusterBkg: "#1e1e2e",
            titleColor: "#e2e8f0",
            edgeLabelBackground: "#1e1e2e",
          },
        });
        const id = `mermaid-${Math.random().toString(36).slice(2)}`;
        const { svg: rendered } = await mermaid.render(id, chart);
        if (!cancelled) setSvg(rendered);
      } catch {
        if (!cancelled) setError(true);
      }
    }
    render();
    return () => {
      cancelled = true;
    };
  }, [chart]);

  if (error) {
    return (
      <pre className={cn("overflow-x-auto rounded-lg bg-muted/50 p-4 text-xs text-muted-foreground", className)}>
        {chart}
      </pre>
    );
  }

  return (
    <div
      ref={ref}
      className={cn("flex justify-center overflow-x-auto rounded-xl border border-border/50 bg-card/30 p-6", className)}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
