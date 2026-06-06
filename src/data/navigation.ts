import type { NavItem } from "@/types/topic";

export const NAV_ITEMS: NavItem[] = [
  { slug: "ai-fundamentals", title: "AI Fundamentals", icon: "Brain", category: "Foundations" },
  { slug: "llms", title: "LLMs", icon: "MessageSquare", category: "Foundations" },
  { slug: "prompt-engineering", title: "Prompt Engineering", icon: "PenTool", category: "Foundations" },
  { slug: "rag-systems", title: "RAG Systems", icon: "Database", category: "Core AI" },
  { slug: "vector-databases", title: "Vector Databases", icon: "Layers", category: "Core AI" },
  { slug: "mcp", title: "MCP", icon: "Plug", category: "Core AI" },
  { slug: "agentic-ai", title: "Agentic AI", icon: "Bot", category: "Agents" },
  { slug: "multi-agent-systems", title: "Multi-Agent Systems", icon: "Users", category: "Agents" },
  { slug: "n8n-automation", title: "N8N Automation", icon: "Workflow", category: "Automation" },
  { slug: "backend-development", title: "Backend Development", icon: "Server", category: "Engineering" },
  { slug: "api-integrations", title: "API Integrations", icon: "Link", category: "Engineering" },
  { slug: "fine-tuning", title: "Fine Tuning", icon: "Sliders", category: "ML" },
  { slug: "mlops", title: "MLOps", icon: "Activity", category: "ML" },
  { slug: "docker", title: "Docker", icon: "Container", category: "DevOps" },
  { slug: "cloud-deployment", title: "Cloud Deployment", icon: "Cloud", category: "DevOps" },
  { slug: "cicd", title: "CI/CD", icon: "GitBranch", category: "DevOps" },
  { slug: "scaling-load-balancing", title: "Scaling & Load Balancing", icon: "Scale", category: "DevOps" },
  { slug: "monitoring-logging", title: "Monitoring & Logging", icon: "BarChart", category: "DevOps" },
  { slug: "ai-saas-architecture", title: "AI SaaS Architecture", icon: "Building", category: "Architecture" },
  { slug: "student-ai-mentor", title: "Student AI Mentor Project", icon: "GraduationCap", category: "Projects" },
  { slug: "interview-preparation", title: "Interview Preparation", icon: "Briefcase", category: "Career" },
  { slug: "glossary", title: "Glossary", icon: "BookOpen", category: "Reference" },
  { slug: "architecture-gallery", title: "Architecture Gallery", icon: "LayoutGrid", category: "Reference" },
];

export const SPECIAL_PAGES = ["glossary", "architecture-gallery", "student-ai-mentor", "interview-preparation"];

export const TOPIC_SLUGS = NAV_ITEMS.filter((item) => !SPECIAL_PAGES.includes(item.slug)).map(
  (item) => item.slug
);
