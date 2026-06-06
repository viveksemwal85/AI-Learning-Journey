import type { TopicContent } from "@/types/topic";
import { component, defaultArchitecture, defaultProjectUsage, interview, quiz, workflow } from "./helpers";

export const mlops: TopicContent = {
  slug: "mlops",
  title: "MLOps",
  subtitle: "Operationalize machine learning and AI systems",
  icon: "Activity",
  category: "ML",
  estimatedTime: "50 min",
  difficulty: "advanced",
  tags: ["experiment tracking", "model registry", "monitoring", "retraining"],
  overview: {
    what: "MLOps applies DevOps principles to ML/AI systems — managing the full lifecycle from experimentation to production deployment and monitoring.",
    why: "Without MLOps, AI projects stay in notebooks. MLOps enables reproducible experiments, reliable deployments, and continuous improvement.",
    where: "Model training pipelines, A/B testing LLM versions, prompt version control, embedding pipeline monitoring.",
  },
  analogy: "MLOps is like quality control in a factory — every product (model) is tracked, tested, versioned, and monitored, with automatic recalls (retraining) when quality drops.",
  mermaidDiagram: `flowchart LR
    A[Data] --> B[Experiment]
    B --> C[Model Registry]
    C --> D[Deploy]
    D --> E[Monitor]
    E -->|Drift Detected| F[Retrain]
    F --> C`,
  components: [
    component("Experiment Tracking", "Log parameters, metrics, and artifacts for every run", {
      inputs: ["Training config", "Metrics", "Model artifacts"],
      outputs: ["Experiment records", "Comparison dashboards"],
      benefits: ["Reproducibility", "Team collaboration"],
      bestPractices: ["Use MLflow or W&B", "Log everything"],
    }),
    component("Model Registry", "Version and stage models for deployment", {
      inputs: ["Trained models", "Metadata"],
      outputs: ["Versioned model artifacts"],
      benefits: ["Rollback capability", "Audit trail"],
    }),
    component("Monitoring", "Track model performance in production", {
      inputs: ["Predictions", "Ground truth", "Latency metrics"],
      outputs: ["Alerts", "Performance dashboards"],
      benefits: ["Early drift detection"],
      bestPractices: ["Monitor input/output distributions", "Track business metrics"],
    }),
    component("Retraining Pipeline", "Automated model refresh on drift or schedule", {
      inputs: ["New data", "Current model", "Trigger conditions"],
      outputs: ["Updated model in registry"],
      benefits: ["Continuous improvement"],
    }),
  ],
  workflow: workflow([
    { title: "Experiment", description: "Train and evaluate with tracked parameters" },
    { title: "Register", description: "Version best model in registry" },
    { title: "Deploy", description: "Promote to staging then production" },
    { title: "Monitor", description: "Track latency, quality, and drift" },
    { title: "Retrain", description: "Trigger retraining when metrics degrade" },
  ]),
  realExample: {
    question: "How to manage prompt versions for the mentor platform?",
    steps: [
      { label: "Version Control", content: "Prompts stored in Git with semantic versioning" },
      { label: "A/B Testing", content: "Route 10% traffic to new prompt version" },
      { label: "Evaluation", content: "Compare response quality scores between versions" },
    ],
    response: "Prompt v2.1 deployed after A/B test showed 15% improvement in user satisfaction scores.",
  },
  codeExamples: [
    {
      title: "MLflow Experiment Tracking",
      language: "python",
      code: `import mlflow

with mlflow.start_run(run_name="rag-eval-v3"):
    mlflow.log_param("chunk_size", 512)
    mlflow.log_param("top_k", 5)
    mlflow.log_metric("accuracy", 0.87)
    mlflow.log_metric("latency_ms", 245)
    mlflow.set_tag("model", "gpt-4o")`,
    },
  ],
  architectureDeepDive: defaultArchitecture(),
  interviewQuestions: [
    interview("What is MLOps?", "Applying DevOps practices to ML — experiment tracking, model versioning, automated deployment, and production monitoring.", "basic"),
    interview("How do you detect model drift?", "Monitor input feature distributions, output quality metrics, and business KPIs. Alert when statistical tests detect significant distribution shifts.", "intermediate"),
  ],
  quiz: [
    quiz("mo1", "Model registry provides:", ["GPU allocation", "Version control for models", "Frontend styling", "Email sending"], 1, "Registry versions and stages models for deployment."),
  ],
  projectUsage: defaultProjectUsage("MLOps ensures the mentor platform's AI features are reliable and improving.", [
    { feature: "Prompt Management", usage: "Version and A/B test prompts" },
    { feature: "Quality Monitoring", usage: "Track response quality over time" },
  ]),
};

export const docker: TopicContent = {
  slug: "docker",
  title: "Docker",
  subtitle: "Containerize AI applications for consistent deployment",
  icon: "Container",
  category: "DevOps",
  estimatedTime: "45 min",
  difficulty: "intermediate",
  tags: ["containers", "images", "volumes", "networking"],
  overview: {
    what: "Docker packages applications and dependencies into portable containers that run consistently across any environment.",
    why: "AI apps have complex dependencies (Python, CUDA, model files). Docker ensures 'works on my machine' becomes 'works everywhere'.",
    where: "Deploying RAG pipelines, serving ML models, local development, CI/CD builds, and Kubernetes deployments.",
  },
  analogy: "Docker containers are like shipping containers — standard boxes that hold anything and work on any ship (server), regardless of what's inside.",
  mermaidDiagram: `flowchart TD
    A[Dockerfile] --> B[Docker Image]
    B --> C[Container Runtime]
    C --> D[Running Container]
    D --> E[Volume Mount]
    D --> F[Network]
    D --> G[Port Mapping]`,
  flowNodes: [
    { id: "dockerfile", label: "Dockerfile", type: "input" },
    { id: "image", label: "Image" },
    { id: "container", label: "Container" },
    { id: "volume", label: "Volumes" },
    { id: "network", label: "Network" },
    { id: "app", label: "AI App", type: "output" },
  ],
  flowEdges: [
    { source: "dockerfile", target: "image" },
    { source: "image", target: "container" },
    { source: "container", target: "volume" },
    { source: "container", target: "network" },
    { source: "container", target: "app" },
  ],
  components: [
    component("Dockerfile", "Blueprint defining how to build the container image", {
      inputs: ["Base image", "Dependencies", "Application code"],
      outputs: ["Docker image"],
      bestPractices: ["Multi-stage builds", "Minimize layers", "Non-root user"],
    }),
    component("Images", "Read-only templates containing app and dependencies", {
      benefits: ["Reproducible builds", "Version control"],
    }),
    component("Containers", "Running instances of images", {
      benefits: ["Isolation", "Portability"],
    }),
    component("Volumes", "Persistent storage outside container lifecycle", {
      benefits: ["Data persistence", "Shared data between containers"],
    }),
    component("Networking", "Communication between containers and external world", {
      benefits: ["Service discovery", "Load balancing"],
    }),
  ],
  workflow: workflow([
    { title: "Write Dockerfile", description: "Define base image, dependencies, and app" },
    { title: "Build Image", description: "docker build creates the image" },
    { title: "Run Container", description: "docker run starts an instance" },
    { title: "Configure", description: "Set volumes, networks, environment variables" },
    { title: "Deploy", description: "Push to registry and deploy to production" },
  ]),
  realExample: {
    question: "Deploy the Student AI Mentor backend",
    steps: [
      { label: "Build", content: "docker build -t ai-mentor-api ." },
      { label: "Configure", content: "Mount .env, connect to PostgreSQL network" },
      { label: "Run", content: "docker run -p 8000:8000 ai-mentor-api" },
    ],
    response: "Backend running at localhost:8000 with all dependencies containerized.",
  },
  codeExamples: [
    {
      title: "AI App Dockerfile",
      language: "dockerfile",
      code: `FROM python:3.12-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`,
    },
    {
      title: "Docker Compose for AI Stack",
      language: "yaml",
      code: `services:
  api:
    build: .
    ports: ["8000:8000"]
    environment:
      - OPENAI_API_KEY=\${OPENAI_API_KEY}
    depends_on: [postgres, chroma]

  postgres:
    image: postgres:16
    volumes: ["pgdata:/var/lib/postgresql/data"]

  chroma:
    image: chromadb/chroma:latest
    ports: ["8001:8000"]

volumes:
  pgdata:`,
    },
  ],
  architectureDeepDive: defaultArchitecture(),
  interviewQuestions: [
    interview("Container vs VM?", "Containers share the host OS kernel (lighter, faster). VMs include full OS (heavier, more isolated). Containers start in seconds.", "basic"),
    interview("Multi-stage Docker builds?", "Use multiple FROM statements to keep final image small — build dependencies in one stage, copy artifacts to minimal runtime stage.", "intermediate"),
  ],
  quiz: [
    quiz("dk1", "Docker volumes provide:", ["Faster CPU", "Persistent storage", "Network routing", "Image building"], 1, "Volumes persist data beyond container lifecycle."),
  ],
  projectUsage: defaultProjectUsage("Docker containerizes all mentor platform services.", [
    { feature: "Backend API", usage: "FastAPI service in Docker container" },
    { feature: "Vector DB", usage: "ChromaDB container with persistent volume" },
  ]),
};

export const cloudDeployment: TopicContent = {
  slug: "cloud-deployment",
  title: "Cloud Deployment",
  subtitle: "Deploy AI applications on AWS, Azure, and GCP",
  icon: "Cloud",
  category: "DevOps",
  estimatedTime: "50 min",
  difficulty: "advanced",
  tags: ["aws", "azure", "gcp", "serverless", "kubernetes"],
  overview: {
    what: "Cloud deployment hosts AI applications on scalable cloud infrastructure — compute, storage, and managed AI services.",
    why: "Cloud provides elastic scaling, managed services, global availability, and pay-per-use pricing essential for AI workloads.",
    where: "Production AI apps, model serving, vector database hosting, serverless AI functions.",
  },
  analogy: "Cloud deployment is like renting a fully-equipped office instead of building your own — you get infrastructure, utilities, and scaling without upfront investment.",
  mermaidDiagram: `flowchart TD
    subgraph AWS
      A1[ECS/EKS] --> A2[SageMaker]
      A3[Lambda] --> A4[Bedrock]
    end
    subgraph Azure
      B1[AKS] --> B2[Azure ML]
      B3[Functions] --> B4[OpenAI Service]
    end
    subgraph GCP
      C1[GKE] --> C2[Vertex AI]
      C3[Cloud Run] --> C4[Gemini API]
    end`,
  components: [
    component("Compute Services", "Run containers and applications", {
      inputs: ["Docker images", "Configuration"],
      outputs: ["Running services"],
      benefits: ["Auto-scaling", "Load balancing"],
    }),
    component("Managed AI Services", "Cloud-native LLM and ML APIs", {
      benefits: ["No infrastructure management", "Enterprise SLAs"],
    }),
    component("Storage & Database", "Persistent data and vector stores", {
      benefits: ["Managed backups", "High availability"],
    }),
  ],
  workflow: workflow([
    { title: "Choose Cloud", description: "Select provider based on requirements and existing stack" },
    { title: "Provision", description: "Set up compute, storage, networking" },
    { title: "Deploy", description: "Push containers or deploy serverless functions" },
    { title: "Configure", description: "Set up DNS, SSL, environment variables" },
    { title: "Monitor", description: "CloudWatch/Azure Monitor/Cloud Monitoring" },
  ]),
  realExample: {
    question: "Deploy Student AI Mentor on AWS",
    steps: [
      { label: "ECS Fargate", content: "Run FastAPI backend as container service" },
      { label: "RDS PostgreSQL", content: "Managed database for user data" },
      { label: "Pinecone/Bedrock", content: "Vector search and LLM inference" },
    ],
    response: "Full stack deployed on AWS with auto-scaling, managed DB, and CDN for frontend.",
  },
  codeExamples: [
    {
      title: "AWS ECS Task Definition",
      language: "json",
      code: `{
  "family": "ai-mentor-api",
  "containerDefinitions": [{
    "name": "api",
    "image": "your-repo/ai-mentor-api:latest",
    "portMappings": [{"containerPort": 8000}],
    "environment": [
      {"name": "ENV", "value": "production"}
    ],
    "memory": 1024,
    "cpu": 512
  }]
}`,
    },
  ],
  architectureDeepDive: defaultArchitecture(),
  interviewQuestions: [
    interview("Compare serverless vs containers for AI?", "Serverless (Lambda) for sporadic, short tasks. Containers (ECS/K8s) for long-running, GPU-needed, or consistent workloads.", "intermediate"),
  ],
  quiz: [
    quiz("cd1", "Cloud deployment benefits include:", ["Fixed hardware costs", "Elastic scaling", "No internet needed", "Single server only"], 1, "Cloud enables elastic scaling based on demand."),
  ],
  projectUsage: defaultProjectUsage("Cloud hosts the production Student AI Mentor platform.", [
    { feature: "Production API", usage: "ECS/Cloud Run hosts backend" },
    { feature: "Global Access", usage: "CDN serves frontend worldwide" },
  ]),
};

export const cicd: TopicContent = {
  slug: "cicd",
  title: "CI/CD",
  subtitle: "Automate build, test, and deployment pipelines",
  icon: "GitBranch",
  category: "DevOps",
  estimatedTime: "40 min",
  difficulty: "intermediate",
  tags: ["github actions", "pipeline", "automated testing", "deployment"],
  overview: {
    what: "CI/CD automates the software delivery pipeline — from code commit through build, test, and deployment to production.",
    why: "Manual deployments are error-prone and slow. CI/CD ensures every change is tested and deployed consistently.",
    where: "Every production AI application — automating Docker builds, running tests, deploying to cloud.",
  },
  analogy: "CI/CD is like an assembly line — each station (build, test, deploy) automatically processes the product, catching defects early and ensuring consistent quality.",
  mermaidDiagram: `flowchart LR
    A[Developer] --> B[Git Push]
    B --> C[GitHub]
    C --> D[Build]
    D --> E[Test]
    E --> F{Pass?}
    F -->|Yes| G[Deploy Staging]
    G --> H[Deploy Production]
    F -->|No| I[Notify Developer]`,
  flowNodes: [
    { id: "dev", label: "Developer", type: "input" },
    { id: "git", label: "GitHub" },
    { id: "build", label: "Build" },
    { id: "test", label: "Test" },
    { id: "deploy", label: "Deploy", type: "output" },
  ],
  flowEdges: [
    { source: "dev", target: "git" },
    { source: "git", target: "build" },
    { source: "build", target: "test" },
    { source: "test", target: "deploy" },
  ],
  components: [
    component("Source Control", "Git repository with branch protection", {
      benefits: ["Version history", "Code review via PRs"],
    }),
    component("Build Pipeline", "Compile, install dependencies, create artifacts", {
      benefits: ["Reproducible builds"],
    }),
    component("Test Suite", "Automated unit, integration, and E2E tests", {
      benefits: ["Catch bugs before production"],
    }),
    component("Deployment", "Automated rollout to staging and production", {
      benefits: ["Consistent deployments", "Rollback capability"],
    }),
  ],
  workflow: workflow([
    { title: "Commit", description: "Developer pushes code to feature branch" },
    { title: "Pull Request", description: "Code review and automated checks" },
    { title: "Build", description: "Install dependencies, build Docker image" },
    { title: "Test", description: "Run unit tests, linting, security scans" },
    { title: "Deploy", description: "Push to staging, then production on merge" },
  ]),
  realExample: {
    question: "Deploy a prompt update to the mentor platform",
    steps: [
      { label: "PR Created", content: "Developer updates prompt templates, creates PR" },
      { label: "CI Runs", content: "Tests pass, prompt evaluation scores checked" },
      { label: "Deploy", content: "Merge triggers deployment to production" },
    ],
    response: "Prompt update live in production within 15 minutes of merge, with full audit trail.",
  },
  codeExamples: [
    {
      title: "GitHub Actions CI/CD",
      language: "yaml",
      code: `name: CI/CD Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'
      - run: pip install -r requirements.txt
      - run: pytest tests/

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - run: docker build -t ai-mentor-api .
      - run: docker push your-registry/ai-mentor-api
      - run: kubectl rollout restart deployment/ai-mentor-api`,
    },
  ],
  architectureDeepDive: defaultArchitecture(),
  interviewQuestions: [
    interview("CI vs CD?", "CI (Continuous Integration) automatically builds and tests on every commit. CD (Continuous Deployment) automatically deploys passing builds to production.", "basic"),
  ],
  quiz: [
    quiz("ci1", "CI/CD pipeline stages include:", ["Only deployment", "Build, test, and deploy", "Only coding", "Manual steps only"], 1, "Full pipeline automates build, test, and deployment."),
  ],
  projectUsage: defaultProjectUsage("CI/CD automates mentor platform deployments.", [
    { feature: "Automated Testing", usage: "Every PR runs test suite" },
    { feature: "Zero-Downtime Deploy", usage: "Rolling updates to production" },
  ]),
};

export const scalingLoadBalancing: TopicContent = {
  slug: "scaling-load-balancing",
  title: "Scaling & Load Balancing",
  subtitle: "Handle growing traffic and ensure high availability",
  icon: "Scale",
  category: "DevOps",
  estimatedTime: "40 min",
  difficulty: "advanced",
  tags: ["horizontal scaling", "load balancer", "auto-scaling", "caching"],
  overview: {
    what: "Scaling and load balancing distribute traffic across multiple servers to handle increased load and ensure system availability.",
    why: "AI applications can experience traffic spikes. Scaling ensures performance under load; load balancing prevents single points of failure.",
    where: "High-traffic AI APIs, multi-user chat applications, batch inference pipelines.",
  },
  analogy: "Like adding more checkout counters at a supermarket during rush hour — load balancing directs customers to the shortest queue.",
  mermaidDiagram: `flowchart TD
    A[Users] --> B[Load Balancer]
    B --> C[API Server 1]
    B --> D[API Server 2]
    B --> E[API Server 3]
    C --> F[Shared Cache]
    D --> F
    E --> F
    F --> G[Database]`,
  components: [component("Load Balancer", "Distributes requests across servers")],
  workflow: workflow([
    { title: "Monitor", description: "Track CPU, memory, request latency" },
    { title: "Scale", description: "Add/remove instances based on metrics" },
    { title: "Balance", description: "Distribute traffic evenly" },
    { title: "Cache", description: "Reduce load with Redis/CDN caching" },
  ]),
  realExample: { question: "Handle 10x traffic during exam season", steps: [{ label: "Auto-scale", content: "ECS scales from 2 to 20 instances" }], response: "System handles 10x load with <200ms latency." },
  codeExamples: [{ title: "Nginx Load Balancer", language: "nginx", code: `upstream ai_backend {\n    least_conn;\n    server api1:8000;\n    server api2:8000;\n    server api3:8000;\n}` }],
  architectureDeepDive: defaultArchitecture(),
  interviewQuestions: [interview("Horizontal vs vertical scaling?", "Horizontal adds more servers (scale out). Vertical adds more power to one server (scale up). Horizontal is preferred for cloud AI apps.", "basic")],
  quiz: [quiz("sl1", "Load balancers distribute:", ["Database queries only", "Incoming traffic across servers", "Email messages", "Training data"], 1, "Load balancers spread requests across multiple servers.")],
  projectUsage: defaultProjectUsage("Scaling ensures the mentor platform handles peak usage.", [{ feature: "Exam Season", usage: "Auto-scale during high traffic periods" }]),
};

export const monitoringLogging: TopicContent = {
  slug: "monitoring-logging",
  title: "Monitoring & Logging",
  subtitle: "Observe, debug, and optimize AI systems in production",
  icon: "BarChart",
  category: "DevOps",
  estimatedTime: "40 min",
  difficulty: "intermediate",
  tags: ["observability", "metrics", "logging", "alerting"],
  overview: {
    what: "Monitoring and logging provide visibility into AI system health — tracking performance, errors, costs, and user experience.",
    why: "AI systems fail silently (bad responses look like good ones). Monitoring catches quality degradation, latency spikes, and cost overruns.",
    where: "Production LLM apps, agent systems, RAG pipelines, API services.",
  },
  analogy: "Monitoring is like a car dashboard — speedometer (latency), fuel gauge (token budget), check engine light (errors) — you need all gauges to drive safely.",
  mermaidDiagram: `flowchart LR
    A[AI Application] --> B[Metrics]
    A --> C[Logs]
    A --> D[Traces]
    B --> E[Dashboard]
    C --> E
    D --> E
    E --> F[Alerts]`,
  components: [component("Metrics Collection", "Track latency, token usage, error rates")],
  workflow: workflow([
    { title: "Instrument", description: "Add logging and metrics to code" },
    { title: "Collect", description: "Aggregate in monitoring platform" },
    { title: "Visualize", description: "Dashboards for key metrics" },
    { title: "Alert", description: "Notify on anomalies" },
  ]),
  realExample: { question: "Debug slow RAG responses", steps: [{ label: "Trace", content: "Distributed trace shows embedding took 2s" }], response: "Fixed by caching frequent query embeddings." },
  codeExamples: [{ title: "Structured Logging", language: "python", code: `import structlog\nlogger = structlog.get_logger()\nlogger.info("rag_query", query=query, latency_ms=245, tokens=150)` }],
  architectureDeepDive: defaultArchitecture(),
  interviewQuestions: [interview("What metrics to track for LLM apps?", "Latency (p50/p95), token usage/cost, error rate, retrieval precision, user satisfaction scores.", "intermediate")],
  quiz: [quiz("ml1", "Observability includes:", ["Only error logs", "Metrics, logs, and traces", "User passwords", "Source code"], 1, "Full observability combines metrics, logs, and distributed traces.")],
  projectUsage: defaultProjectUsage("Monitoring ensures mentor platform reliability.", [{ feature: "Cost Tracking", usage: "Monitor token usage per feature" }]),
};

export const aiSaasArchitecture: TopicContent = {
  slug: "ai-saas-architecture",
  title: "AI SaaS Architecture",
  subtitle: "Design scalable multi-tenant AI platforms",
  icon: "Building",
  category: "Architecture",
  estimatedTime: "55 min",
  difficulty: "advanced",
  tags: ["multi-tenant", "saas", "subscription", "api gateway"],
  overview: {
    what: "AI SaaS architecture designs multi-tenant platforms that deliver AI capabilities as a subscription service to multiple customers.",
    why: "Building AI as SaaS enables recurring revenue, scalable delivery, and centralized model management across customers.",
    where: "ChatGPT, Jasper, Copy.ai, custom enterprise AI platforms, and the Student AI Mentor as a SaaS product.",
  },
  analogy: "AI SaaS is like an apartment building — one infrastructure serves many tenants, each with their own space (data isolation) but shared utilities (AI models, compute).",
  mermaidDiagram: `flowchart TD
    A[Users] --> B[CDN/Frontend]
    B --> C[API Gateway]
    C --> D[Auth/Billing]
    C --> E[AI Orchestrator]
    E --> F[LLM Layer]
    E --> G[RAG Layer]
    E --> H[Agent Layer]
    F --> I[Model APIs]
    G --> J[Vector DB]
    H --> K[Tool Services]
    D --> L[PostgreSQL]
    J --> L`,
  components: [
    component("Multi-Tenant Auth", "Isolate customer data and access", { benefits: ["Data security", "Per-tenant billing"] }),
    component("AI Orchestrator", "Route requests to appropriate AI pipeline", { benefits: ["Unified API", "Model routing"] }),
    component("Usage Metering", "Track and bill per API call/token", { benefits: ["Revenue tracking", "Fair pricing"] }),
  ],
  workflow: workflow([
    { title: "User Auth", description: "Authenticate and identify tenant" },
    { title: "Rate Limit", description: "Check subscription limits" },
    { title: "Process", description: "Route to AI pipeline" },
    { title: "Meter", description: "Track usage for billing" },
    { title: "Respond", description: "Return result with usage stats" },
  ]),
  realExample: {
    question: "Student AI Mentor as SaaS product",
    steps: [
      { label: "Free Tier", content: "10 queries/day, basic features" },
      { label: "Pro Tier", content: "Unlimited queries, all agents, priority support" },
      { label: "Enterprise", content: "Custom models, SSO, dedicated infrastructure" },
    ],
    response: "Three-tier SaaS with Stripe billing, usage metering, and tenant isolation.",
  },
  codeExamples: [
    {
      title: "Multi-Tenant Middleware",
      language: "python",
      code: `@app.middleware("http")
async def tenant_middleware(request, call_next):
    tenant_id = request.headers.get("X-Tenant-ID")
    request.state.tenant = await get_tenant(tenant_id)
    response = await call_next(request)
    await track_usage(tenant_id, request.url.path)
    return response`,
    },
  ],
  architectureDeepDive: {
    scalability: ["Tenant-sharded vector stores", "Queue-based async processing", "CDN for static assets"],
    security: ["Tenant data isolation", "SOC2 compliance", "Encryption at rest"],
    costOptimization: ["Shared model inference", "Tiered resource allocation"],
    monitoring: ["Per-tenant usage dashboards", "Cost allocation tracking"],
  },
  interviewQuestions: [
    interview("How to isolate tenant data in AI SaaS?", "Separate vector store namespaces, row-level security in DB, tenant-scoped API keys, encrypted storage per tenant.", "advanced"),
  ],
  quiz: [
    quiz("saas1", "Multi-tenancy means:", ["One user per server", "Multiple customers share infrastructure", "No authentication", "Single database row"], 1, "Multi-tenant SaaS serves many customers on shared infrastructure."),
  ],
  projectUsage: defaultProjectUsage("The Student AI Mentor is designed as a SaaS product.", [
    { feature: "Subscription Tiers", usage: "Free, Pro, Enterprise plans" },
    { feature: "Usage Tracking", usage: "Meter AI queries per user" },
  ]),
};
