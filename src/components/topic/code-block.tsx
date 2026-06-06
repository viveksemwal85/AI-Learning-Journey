"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
  description?: string;
  className?: string;
}

export function CodeBlock({ code, language, title, description, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("overflow-hidden rounded-xl border border-border/50", className)}>
      {(title || description) && (
        <div className="flex items-center justify-between border-b border-border/50 bg-card/50 px-4 py-3">
          <div>
            {title && <p className="text-sm font-medium">{title}</p>}
            {description && <p className="text-xs text-muted-foreground">{description}</p>}
          </div>
          <button
            onClick={copy}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Copy code"
          >
            {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      )}
      <SyntaxHighlighter
        language={language === "dockerfile" ? "docker" : language === "yaml" ? "yaml" : language}
        style={oneDark}
        customStyle={{
          margin: 0,
          borderRadius: title ? "0 0 12px 12px" : "12px",
          background: "#0d1117",
          fontSize: "13px",
          padding: "16px",
        }}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
