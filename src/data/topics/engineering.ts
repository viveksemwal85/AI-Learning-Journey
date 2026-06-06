import type { TopicContent } from "@/types/topic";
import { component, defaultArchitecture, defaultProjectUsage, interview, quiz, workflow } from "./helpers";

const engTopic = (
  slug: string,
  title: string,
  subtitle: string,
  icon: string,
  overview: { what: string; why: string; where: string },
  analogy: string,
  mermaid: string,
  tags: string[]
): TopicContent => ({
  slug,
  title,
  subtitle,
  icon,
  category: "Engineering",
  estimatedTime: "40 min",
  difficulty: "intermediate",
  tags,
  overview,
  analogy,
  mermaidDiagram: mermaid,
  components: [
    component("Core Service", `Primary ${title.toLowerCase()} functionality`, {
      benefits: ["Production-ready patterns", "Scalable design"],
    }),
  ],
  workflow: workflow([
    { title: "Design", description: "Define requirements and architecture" },
    { title: "Implement", description: "Build core functionality" },
    { title: "Test", description: "Validate with unit and integration tests" },
    { title: "Deploy", description: "Ship to production environment" },
    { title: "Monitor", description: "Track performance and errors" },
  ]),
  realExample: {
    question: `How does ${title} work in the Student AI Mentor?`,
    steps: [
      { label: "Integration", content: `Connects ${title.toLowerCase()} with the platform backend` },
      { label: "Processing", content: "Handles requests with proper validation and error handling" },
      { label: "Response", content: "Returns structured data to the frontend" },
    ],
    response: `${title} enables reliable, scalable functionality for the mentor platform.`,
  },
  codeExamples: [
    {
      title: "FastAPI Backend Example",
      language: "python",
      code: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="AI Mentor API")

class Request(BaseModel):
    data: str

@app.post("/process")
async def process(req: Request):
    try:
        result = await process_data(req.data)
        return {"status": "success", "result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))`,
    },
  ],
  architectureDeepDive: defaultArchitecture(),
  interviewQuestions: [
    interview(`What is ${title}?`, overview.what, "basic"),
    interview(`Why is ${title} important for AI systems?`, overview.why, "intermediate"),
  ],
  quiz: [
    quiz(`${slug}-1`, `What is the primary purpose of ${title}?`, [overview.what.slice(0, 40), "Random option", "Unrelated concept", "None of the above"], 0, overview.what),
  ],
  projectUsage: defaultProjectUsage(`${title} is integrated into the Student AI Mentor Platform.`, [
    { feature: "Platform Backend", usage: `Powers ${title.toLowerCase()} features` },
  ]),
});

export const backendDevelopment = engTopic(
  "backend-development",
  "Backend Development",
  "Build robust APIs and services for AI applications",
  "Server",
  {
    what: "Backend development for AI involves building APIs, services, and data pipelines that connect frontend applications to AI models and databases.",
    why: "Every AI application needs a backend to handle authentication, data processing, model orchestration, and business logic.",
    where: "FastAPI/Python backends, Node.js services, microservices architectures, and serverless functions.",
  },
  "The backend is like the kitchen of a restaurant — customers (frontend) place orders, but the kitchen prepares everything using recipes (AI models) and ingredients (data).",
  `flowchart LR
    A[Frontend] --> B[API Gateway]
    B --> C[Auth Service]
    B --> D[AI Service]
    B --> E[Database]
    D --> F[LLM APIs]
    D --> G[Vector DB]`,
  ["fastapi", "python", "rest", "microservices"]
);

export const apiIntegrations = engTopic(
  "api-integrations",
  "API Integrations",
  "Connect AI systems with external services and APIs",
  "Link",
  {
    what: "API integrations connect your AI application to external services — LLM providers, payment gateways, email services, and third-party data sources.",
    why: "AI apps rarely work in isolation. Integrations enable tool use, data enrichment, and real-world actions.",
    where: "OpenAI/Anthropic APIs, Stripe payments, SendGrid email, Google Calendar, job board APIs.",
  },
  "API integrations are like phone lines connecting departments — the AI agent picks up the phone (API call) to get information or perform actions in other systems.",
  `flowchart TD
    A[AI Application] --> B[Integration Layer]
    B --> C[OpenAI API]
    B --> D[Stripe API]
    B --> E[Email Service]
    B --> F[Calendar API]`,
  ["openai", "webhooks", "oauth", "rate limiting"]
);

export const n8nAutomation = engTopic(
  "n8n-automation",
  "N8N Automation",
  "Visual workflow automation for AI pipelines",
  "Workflow",
  {
    what: "N8N is a workflow automation tool that connects apps and services through visual, node-based workflows — perfect for AI pipeline orchestration.",
    why: "Not everything needs code. N8N enables non-developers to build automations and developers to rapidly prototype AI workflows.",
    where: "Email notifications, data sync, scheduled AI tasks, webhook processing, and reminder systems.",
  },
  "N8N is like Zapier for developers — visual blocks that connect services, but with full code flexibility and self-hosting options.",
  `flowchart LR
    A[Webhook Trigger] --> B[Process Data]
    B --> C[Call LLM API]
    C --> D[Format Response]
    D --> E[Send Email/Slack]`,
  ["n8n", "automation", "webhooks", "workflows"]
);

export const fineTuning = engTopic(
  "fine-tuning",
  "Fine Tuning",
  "Customize LLMs for domain-specific tasks",
  "Sliders",
  {
    what: "Fine-tuning adapts a pre-trained LLM to specific tasks or domains by training on custom datasets, improving performance on specialized use cases.",
    why: "When prompting isn't enough — fine-tuning embeds domain knowledge, style, and behavior directly into the model weights.",
    where: "Custom customer support tone, medical/legal domain models, code generation for specific frameworks, classification tasks.",
  },
  "Fine-tuning is like specialized training for a generalist — a doctor (general LLM) becomes a cardiologist (fine-tuned model) through focused education.",
  `flowchart TD
    A[Base Model] --> B[Prepare Dataset]
    B --> C[Fine-tuning Job]
    C --> D[Custom Model]
    D --> E[Evaluation]
    E -->|Pass| F[Deploy]
    E -->|Fail| B`,
  ["fine-tuning", "lora", "training data", "evaluation"]
);

fineTuning.codeExamples = [
  {
    title: "OpenAI Fine-tuning",
    language: "python",
    code: `from openai import OpenAI
client = OpenAI()

# Upload training data
file = client.files.create(
    file=open("training.jsonl", "rb"),
    purpose="fine-tune"
)

# Create fine-tuning job
job = client.fine_tuning.jobs.create(
    training_file=file.id,
    model="gpt-4o-mini-2024-07-18"
)

print(f"Job ID: {job.id}")`,
  },
];

fineTuning.projectUsage = defaultProjectUsage("Fine-tuning customizes the mentor's tone and domain knowledge.", [
  { feature: "Career Guidance", usage: "Fine-tuned for empathetic career counseling tone" },
  { feature: "Interview Prep", usage: "Fine-tuned on technical interview patterns" },
]);
