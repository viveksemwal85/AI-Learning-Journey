export const glossaryTerms = [
  { term: "Agent", definition: "An AI system that autonomously plans, uses tools, and iterates toward goals.", category: "Agents" },
  { term: "Attention", definition: "Mechanism in transformers that weighs relationships between all tokens in a sequence.", category: "LLMs" },
  { term: "Chunking", definition: "Splitting documents into smaller segments for embedding and retrieval.", category: "RAG" },
  { term: "Context Window", definition: "Maximum number of tokens an LLM can process in a single request.", category: "LLMs" },
  { term: "Cosine Similarity", definition: "Measure of similarity between two vectors based on the angle between them.", category: "Vector DB" },
  { term: "Embedding", definition: "Dense vector representation of text that captures semantic meaning.", category: "Fundamentals" },
  { term: "Fine-tuning", definition: "Training a pre-trained model on custom data for specialized tasks.", category: "ML" },
  { term: "Hallucination", definition: "When an LLM generates plausible but factually incorrect information.", category: "LLMs" },
  { term: "HNSW", definition: "Hierarchical Navigable Small World — graph-based algorithm for fast vector search.", category: "Vector DB" },
  { term: "Inference", definition: "Running a trained model to generate predictions or text.", category: "Fundamentals" },
  { term: "LangChain", definition: "Framework for building LLM applications with chains, agents, and tools.", category: "Tools" },
  { term: "LangGraph", definition: "Library for building stateful, multi-agent workflows as graphs.", category: "Tools" },
  { term: "LLM", definition: "Large Language Model — neural network trained on vast text data.", category: "LLMs" },
  { term: "MCP", definition: "Model Context Protocol — standard for AI tool and context integration.", category: "Tools" },
  { term: "MLOps", definition: "Practices for deploying and maintaining ML/AI systems in production.", category: "DevOps" },
  { term: "Prompt Engineering", definition: "Designing inputs to LLMs for optimal, consistent outputs.", category: "Fundamentals" },
  { term: "RAG", definition: "Retrieval-Augmented Generation — grounding LLM responses in external data.", category: "RAG" },
  { term: "Re-ranking", definition: "Re-scoring retrieved documents for improved relevance.", category: "RAG" },
  { term: "RLHF", definition: "Reinforcement Learning from Human Feedback for model alignment.", category: "LLMs" },
  { term: "Temperature", definition: "Parameter controlling randomness in LLM output generation.", category: "LLMs" },
  { term: "Token", definition: "Smallest unit of text processed by an LLM.", category: "Fundamentals" },
  { term: "Transformer", definition: "Neural network architecture using self-attention for sequence processing.", category: "LLMs" },
  { term: "Vector Database", definition: "Database optimized for storing and searching high-dimensional vectors.", category: "Vector DB" },
];

export const interviewCategories = [
  {
    category: "Fundamentals",
    questions: [
      { q: "Explain the difference between AI, ML, and Deep Learning.", a: "AI is the broad field of machine intelligence. ML is a subset using data-driven algorithms. Deep Learning uses neural networks with many layers.", difficulty: "basic" },
      { q: "What are tokens and why do they matter?", a: "Tokens are text units for LLM processing. They determine API cost, context limits, and how languages are handled.", difficulty: "basic" },
      { q: "How do transformers work?", a: "Transformers use self-attention to process all tokens in parallel, computing relationships between every pair via query, key, and value matrices.", difficulty: "intermediate" },
    ],
  },
  {
    category: "RAG & Retrieval",
    questions: [
      { q: "Design a RAG system for enterprise documents.", a: "Ingest docs → chunk (512 tokens, 20% overlap) → embed with consistent model → store in vector DB with metadata → hybrid search → re-rank → prompt LLM with context → cite sources.", difficulty: "advanced" },
      { q: "How do you evaluate RAG quality?", a: "Metrics: retrieval precision/recall, answer faithfulness, answer relevance. Use RAGAS framework. A/B test chunk sizes and retrieval strategies.", difficulty: "intermediate" },
    ],
  },
  {
    category: "Agents",
    questions: [
      { q: "When would you use agents vs simple LLM calls?", a: "Agents for multi-step tasks requiring tool use, planning, and iteration. Simple calls for single-turn Q&A or generation.", difficulty: "intermediate" },
      { q: "Design a multi-agent system for content creation.", a: "Supervisor agent coordinates: Research Agent (gather info) → Writer Agent (create draft) → Editor Agent (review/improve) → shared memory for context.", difficulty: "advanced" },
    ],
  },
  {
    category: "System Design",
    questions: [
      { q: "Design an AI SaaS platform.", a: "Frontend (Next.js) → API Gateway → Auth/Billing → AI Orchestrator → LLM/RAG/Agent layers → Vector DB + PostgreSQL. Multi-tenant isolation, usage metering, caching.", difficulty: "advanced" },
      { q: "How do you handle LLM rate limits?", a: "Request queuing, exponential backoff, multiple API keys, model fallbacks, caching frequent queries, and user-facing rate limiting.", difficulty: "intermediate" },
    ],
  },
];

export const studentAiMentor = {
  title: "Student AI Mentor Platform",
  subtitle: "Capstone project integrating all AI engineering concepts",
  features: [
    { name: "Resume Analysis", description: "AI-powered resume parsing, skill extraction, and improvement suggestions", tech: ["GPT-4o", "Structured Output", "PDF Parsing"] },
    { name: "Career Guidance", description: "Personalized career path recommendations based on skills and interests", tech: ["Agentic AI", "Web Search Tools", "Memory"] },
    { name: "Study Planner", description: "Adaptive study schedules with spaced repetition and progress tracking", tech: ["LangGraph", "Calendar API", "N8N Automation"] },
    { name: "Interview Preparation", description: "Mock interviews with real-time feedback and question banks", tech: ["Multi-Agent", "RAG", "Speech-to-Text"] },
    { name: "Learning Tracker", description: "Track progress across topics with analytics and recommendations", tech: ["PostgreSQL", "Analytics", "Recommendations"] },
    { name: "Document Q&A", description: "Upload and query study materials with grounded answers", tech: ["RAG", "ChromaDB", "Hybrid Search"] },
  ],
  architectures: {
    business: "B2C SaaS targeting students and early-career professionals. Freemium model with Pro ($9.99/mo) and Enterprise tiers.",
    application: "Next.js frontend + FastAPI backend + Agent orchestrator + RAG pipeline + PostgreSQL + ChromaDB + N8N for automation.",
    database: "PostgreSQL for users, progress, notes. ChromaDB for document embeddings. Redis for caching and sessions.",
    agent: "Supervisor agent delegates to Career, Study, Interview, and Q&A specialist agents via LangGraph.",
    deployment: "Docker containers on AWS ECS, CloudFront CDN, RDS PostgreSQL, CI/CD via GitHub Actions.",
  },
};

export const roadmapPhases = [
  {
    phase: 1,
    title: "Foundations",
    duration: "2-3 weeks",
    topics: ["AI Fundamentals", "LLMs", "Prompt Engineering"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    phase: 2,
    title: "Core AI Systems",
    duration: "3-4 weeks",
    topics: ["RAG Systems", "Vector Databases", "MCP"],
    color: "from-purple-500 to-pink-500",
  },
  {
    phase: 3,
    title: "Agentic AI",
    duration: "3-4 weeks",
    topics: ["Agentic AI", "Multi-Agent Systems", "N8N Automation"],
    color: "from-cyan-500 to-teal-500",
  },
  {
    phase: 4,
    title: "Engineering & ML",
    duration: "2-3 weeks",
    topics: ["Backend Development", "API Integrations", "Fine Tuning", "MLOps"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    phase: 5,
    title: "DevOps & Deployment",
    duration: "3-4 weeks",
    topics: ["Docker", "Cloud Deployment", "CI/CD", "Scaling", "Monitoring"],
    color: "from-orange-500 to-red-500",
  },
  {
    phase: 6,
    title: "Architecture & Projects",
    duration: "4-6 weeks",
    topics: ["AI SaaS Architecture", "Student AI Mentor Project", "Interview Prep"],
    color: "from-green-500 to-emerald-500",
  },
];
