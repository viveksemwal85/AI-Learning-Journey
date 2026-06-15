import type { NavItem, RoadmapPhase, Project, InterviewCategory, ResourceCategory, SiteConfig } from "@/types/content";

export const siteConfig: SiteConfig = {
  name: "AI Learning Journey",
  tagline: "From Enterprise Applications to AI",
  author: {
    name: "Vivek Semwal",
    role: "Project Manager",
    experience: "18+ years in enterprise applications and PeopleSoft HCM",
    focus: "Learning AI, Python automation, and modern software engineering practices",
    bio: "I have spent over 18 years building and managing enterprise applications — PeopleSoft, MSSQL, Oracle databases, Java, and .NET systems. Now I am learning AI the same way I learned everything else: step by step, by building real projects and sharing what I learn along the way.",
  },
  links: {
    github: "https://github.com/viveksemwal85",
    portfolio: "https://vivek-semwal.vercel.app",
  },
  footer: "Learning in public. Building in public. Growing every day.",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "AI Journey", href: "/ai-journey" },
  { label: "Projects", href: "/projects" },
  { label: "Interview Notes", href: "/interview-notes" },
  { label: "Concepts", href: "/concepts" },
  { label: "Resources", href: "/resources" },
  { label: "About Me", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const roadmapPhases: RoadmapPhase[] = [
  {
    phase: 1,
    title: "Foundations",
    topics: ["GitHub", "Python", "APIs"],
    status: "in-progress",
  },
  {
    phase: 2,
    title: "AI Basics",
    topics: ["Prompt Engineering", "LLMs", "OpenAI", "Claude"],
    status: "upcoming",
  },
  {
    phase: 3,
    title: "Applied AI",
    topics: ["RAG", "AI Agents", "MCP"],
    status: "upcoming",
  },
  {
    phase: 4,
    title: "Production",
    topics: ["Production AI Applications"],
    status: "upcoming",
  },
];

export const projects: Project[] = [
  {
    slug: "ai-portfolio-website",
    title: "AI Portfolio Website",
    description: "This website — documenting my learning journey and sharing resources with others making the same transition.",
    status: "in-progress",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    slug: "ai-chatbot",
    title: "AI Chatbot",
    description: "A simple chatbot that answers questions about AI concepts in plain English — my first hands-on LLM project.",
    status: "planned",
    tags: ["Python", "OpenAI", "FastAPI"],
  },
  {
    slug: "resume-analyzer",
    title: "Resume Analyzer",
    description: "Upload a resume and get feedback on skills, gaps, and suggestions — useful for career transitioners like me.",
    status: "planned",
    tags: ["LLM", "Structured Output", "RAG"],
  },
  {
    slug: "interview-prep-assistant",
    title: "Interview Preparation Assistant",
    description: "Practice Python, SQL, and AI interview questions with explanations — built from my own prep notes.",
    status: "planned",
    tags: ["Agents", "Quiz", "Learning"],
  },
  {
    slug: "enterprise-automation-assistant",
    title: "Enterprise Automation Assistant",
    description: "Automate repetitive tasks from my enterprise background using Python and AI — bridging old and new skills.",
    status: "planned",
    tags: ["Python", "Automation", "N8N"],
  },
];

export const interviewCategories: InterviewCategory[] = [
  {
    slug: "python",
    title: "Python",
    description: "Core Python concepts frequently asked in AI and data engineering interviews.",
    icon: "Code",
  },
  {
    slug: "sql",
    title: "SQL",
    description: "Database queries, joins, and data manipulation — essential even in AI roles.",
    icon: "Database",
  },
  {
    slug: "ai-fundamentals",
    title: "AI Fundamentals",
    description: "Tokens, embeddings, context windows, and other basics explained simply.",
    icon: "Brain",
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Engineering",
    description: "How to communicate effectively with LLMs — zero-shot, few-shot, and chain-of-thought.",
    icon: "MessageSquare",
  },
  {
    slug: "generative-ai",
    title: "Generative AI",
    description: "How generative models work, their limits, and real-world use cases.",
    icon: "Sparkles",
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    description: "Autonomous AI systems, tool use, and multi-agent patterns for interviews.",
    icon: "Bot",
  },
];

export const resourceCategories: ResourceCategory[] = [
  {
    title: "Beginner AI Resources",
    description: "Start here if you are new to AI and coming from a non-AI background.",
    items: [
      { name: "OpenAI Documentation", url: "https://platform.openai.com/docs", note: "Clear guides for beginners" },
      { name: "Anthropic Claude Docs", url: "https://docs.anthropic.com", note: "Well-written AI concepts" },
      { name: "Google AI Essentials (Coursera)", note: "Free course for absolute beginners" },
      { name: "fast.ai Practical Deep Learning", url: "https://course.fast.ai", note: "Top-down, hands-on approach" },
    ],
  },
  {
    title: "Python Resources",
    description: "Python is the language of AI — these helped me get started.",
    items: [
      { name: "Python Official Tutorial", url: "https://docs.python.org/3/tutorial/", note: "Solid foundation" },
      { name: "Automate the Boring Stuff", url: "https://automatetheboringstuff.com", note: "Practical for enterprise folks" },
      { name: "Real Python", url: "https://realpython.com", note: "In-depth articles" },
      { name: "freeCodeCamp Python", url: "https://www.freecodecamp.org", note: "Free video courses" },
    ],
  },
  {
    title: "GitHub Resources",
    description: "Version control and collaboration — essential for learning in public.",
    items: [
      { name: "GitHub Skills", url: "https://skills.github.com", note: "Interactive tutorials" },
      { name: "GitHub Docs — Getting Started", url: "https://docs.github.com/en/get-started", note: "Official guide" },
      { name: "Oh My Git! (Game)", url: "https://ohmygit.org", note: "Learn Git through a game" },
    ],
  },
  {
    title: "AI Tools",
    description: "Tools I use or plan to use while learning.",
    items: [
      { name: "ChatGPT", url: "https://chat.openai.com", note: "Daily learning companion" },
      { name: "Claude", url: "https://claude.ai", note: "Great for long documents" },
      { name: "Cursor", url: "https://cursor.com", note: "AI-powered code editor" },
      { name: "LangChain", url: "https://python.langchain.com", note: "Building AI applications" },
      { name: "Hugging Face", url: "https://huggingface.co", note: "Models and datasets" },
    ],
  },
  {
    title: "Recommended YouTube Channels",
    description: "Video learning that fits a busy professional schedule.",
    items: [
      { name: "Andrej Karpathy", url: "https://www.youtube.com/@AndrejKarpathy", note: "Deep but accessible AI explanations" },
      { name: "freeCodeCamp", url: "https://www.youtube.com/@freecodecamp", note: "Full courses for free" },
      { name: "Tech With Tim", url: "https://www.youtube.com/@TechWithTim", note: "Python and AI projects" },
      { name: "Sam Witteveen", url: "https://www.youtube.com/@SamuelWitteveen", note: "LangChain and agents" },
      { name: "Fireship", url: "https://www.youtube.com/@Fireship", note: "Quick concept overviews" },
    ],
  },
];

export const whyWebsiteExists = {
  title: "Why This Website Exists",
  paragraphs: [
    "When I began exploring AI, I found that most learning resources were designed for software engineers and data scientists who already had strong backgrounds in Python, machine learning, and modern development frameworks. Coming from an enterprise applications and PeopleSoft background, I struggled to find practical guidance tailored to professionals making a similar transition. This website is my way of documenting that journey—sharing what I learn, the projects I build, the challenges I face, and the lessons I discover along the way. If my experiences help even one person navigate their own path into AI with greater clarity and confidence, then this effort is worthwhile."
  ],
};

export function getInterviewCategory(slug: string) {
  return interviewCategories.find((c) => c.slug === slug);
}
