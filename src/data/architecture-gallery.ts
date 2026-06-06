export const architectureDiagrams = [
  {
    slug: "basic-llm-app",
    title: "Basic LLM Application",
    description: "Simple chat application with direct LLM API calls",
    mermaid: `flowchart LR
    A[User] --> B[Frontend]
    B --> C[Backend API]
    C --> D[LLM API]
    D --> C
    C --> B
    B --> A`,
    nodes: [
      { id: "user", label: "User", type: "input" },
      { id: "frontend", label: "React Frontend" },
      { id: "api", label: "FastAPI Backend" },
      { id: "llm", label: "OpenAI/Claude", type: "output" },
    ],
    edges: [
      { source: "user", target: "frontend" },
      { source: "frontend", target: "api" },
      { source: "api", target: "llm" },
    ],
  },
  {
    slug: "rag-system",
    title: "RAG System Architecture",
    description: "Retrieval-Augmented Generation with vector search",
    mermaid: `flowchart TD
    A[User Query] --> B[Embedding]
    B --> C[Vector DB]
    C --> D[Retriever]
    D --> E[Prompt Builder]
    E --> F[LLM]
    F --> G[Response]
    H[Documents] --> I[Chunker]
    I --> J[Embedder]
    J --> C`,
    nodes: [
      { id: "query", label: "User Query", type: "input" },
      { id: "embed", label: "Embedding Model" },
      { id: "vectordb", label: "Vector Database" },
      { id: "llm", label: "LLM" },
      { id: "response", label: "Grounded Response", type: "output" },
    ],
    edges: [
      { source: "query", target: "embed" },
      { source: "embed", target: "vectordb" },
      { source: "vectordb", target: "llm" },
      { source: "llm", target: "response" },
    ],
  },
  {
    slug: "agent-architecture",
    title: "Agent Architecture",
    description: "Autonomous agent with planning, tools, and memory",
    mermaid: `flowchart TD
    A[Goal] --> B[Planner]
    B --> C[Reasoner]
    C --> D{Tool Needed?}
    D -->|Yes| E[Tool Executor]
    D -->|No| F[LLM]
    E --> G[Memory]
    F --> G
    G --> H{Done?}
    H -->|No| B
    H -->|Yes| I[Response]`,
    nodes: [
      { id: "goal", label: "User Goal", type: "input" },
      { id: "plan", label: "Planner" },
      { id: "tools", label: "Tools" },
      { id: "memory", label: "Memory" },
      { id: "output", label: "Response", type: "output" },
    ],
    edges: [
      { source: "goal", target: "plan" },
      { source: "plan", target: "tools" },
      { source: "tools", target: "memory" },
      { source: "memory", target: "output" },
    ],
  },
  {
    slug: "multi-agent",
    title: "Multi-Agent Architecture",
    description: "Supervisor coordinating specialized agents",
    mermaid: `flowchart TD
    A[Request] --> B[Supervisor]
    B --> C[Research Agent]
    B --> D[Writer Agent]
    B --> E[Reviewer Agent]
    C --> F[Shared State]
    D --> F
    E --> F
    F --> G[Final Output]`,
    nodes: [
      { id: "request", label: "Request", type: "input" },
      { id: "supervisor", label: "Supervisor" },
      { id: "research", label: "Research Agent" },
      { id: "writer", label: "Writer Agent" },
      { id: "output", label: "Output", type: "output" },
    ],
    edges: [
      { source: "request", target: "supervisor" },
      { source: "supervisor", target: "research" },
      { source: "supervisor", target: "writer" },
      { source: "writer", target: "output" },
    ],
  },
  {
    slug: "ai-saas-platform",
    title: "AI SaaS Platform",
    description: "Multi-tenant SaaS with billing and usage metering",
    mermaid: `flowchart TD
    A[Users] --> B[CDN]
    B --> C[API Gateway]
    C --> D[Auth & Billing]
    C --> E[AI Orchestrator]
    E --> F[LLM Service]
    E --> G[RAG Service]
    E --> H[Agent Service]
    D --> I[PostgreSQL]
    G --> J[Vector DB]`,
    nodes: [
      { id: "users", label: "Users", type: "input" },
      { id: "gateway", label: "API Gateway" },
      { id: "orchestrator", label: "AI Orchestrator" },
      { id: "services", label: "AI Services" },
      { id: "data", label: "Data Layer", type: "output" },
    ],
    edges: [
      { source: "users", target: "gateway" },
      { source: "gateway", target: "orchestrator" },
      { source: "orchestrator", target: "services" },
      { source: "services", target: "data" },
    ],
  },
  {
    slug: "enterprise-ai",
    title: "Enterprise AI Platform",
    description: "Large-scale enterprise AI with governance and compliance",
    mermaid: `flowchart TD
    A[Enterprise Users] --> B[WAF/CDN]
    B --> C[API Gateway]
    C --> D[Identity Provider]
    C --> E[AI Gateway]
    E --> F[Model Router]
    F --> G[Internal Models]
    F --> H[External APIs]
    E --> I[RAG Pipeline]
    E --> J[Agent Framework]
    I --> K[Enterprise Vector DB]
    L[Audit Log] --> M[Compliance Dashboard]`,
    nodes: [
      { id: "users", label: "Enterprise Users", type: "input" },
      { id: "gateway", label: "AI Gateway" },
      { id: "router", label: "Model Router" },
      { id: "pipeline", label: "AI Pipelines" },
      { id: "compliance", label: "Compliance", type: "output" },
    ],
    edges: [
      { source: "users", target: "gateway" },
      { source: "gateway", target: "router" },
      { source: "router", target: "pipeline" },
      { source: "pipeline", target: "compliance" },
    ],
  },
  {
    slug: "student-ai-mentor",
    title: "Student AI Mentor Platform",
    description: "Complete capstone project architecture",
    mermaid: `flowchart TD
    A[Student] --> B[Next.js Frontend]
    B --> C[FastAPI Backend]
    C --> D[Auth Service]
    C --> E[Agent Orchestrator]
    E --> F[Career Agent]
    E --> G[Study Agent]
    E --> H[Interview Agent]
    E --> I[RAG Pipeline]
    I --> J[ChromaDB]
    F --> K[OpenAI/Claude]
    G --> K
    H --> K
    C --> L[PostgreSQL]
    M[N8N] --> N[Notifications]`,
    nodes: [
      { id: "student", label: "Student", type: "input" },
      { id: "frontend", label: "Next.js UI" },
      { id: "backend", label: "FastAPI" },
      { id: "agents", label: "AI Agents" },
      { id: "rag", label: "RAG + Vector DB" },
      { id: "db", label: "PostgreSQL", type: "output" },
    ],
    edges: [
      { source: "student", target: "frontend" },
      { source: "frontend", target: "backend" },
      { source: "backend", target: "agents" },
      { source: "backend", target: "rag" },
      { source: "agents", target: "db" },
    ],
  },
];
