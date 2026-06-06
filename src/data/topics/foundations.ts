import type { TopicContent } from "@/types/topic";
import {
  component,
  defaultArchitecture,
  defaultProjectUsage,
  interview,
  quiz,
  workflow,
} from "./helpers";

export const aiFundamentals: TopicContent = {
  slug: "ai-fundamentals",
  title: "Generative AI Fundamentals",
  subtitle: "Core concepts every AI engineer must understand",
  icon: "Brain",
  category: "Foundations",
  estimatedTime: "45 min",
  difficulty: "beginner",
  tags: ["tokens", "embeddings", "inference", "hallucinations", "context window"],
  overview: {
    what: "Generative AI fundamentals cover the building blocks of modern AI systems — how models process text, generate responses, and understand meaning through numbers.",
    why: "Without understanding tokens, context windows, and embeddings, you cannot debug AI apps, optimize costs, or design reliable systems.",
    where: "Every LLM application — chatbots, RAG systems, agents, code assistants, and content generators — relies on these fundamentals.",
  },
  analogy:
    "Think of an LLM like a brilliant student who reads in chunks (tokens), has limited working memory (context window), gets creative when excited (temperature), and sometimes confidently makes things up (hallucinations).",
  mermaidDiagram: `flowchart TD
    A[User Input Text] --> B[Tokenizer]
    B --> C[Token IDs]
    C --> D[Embedding Layer]
    D --> E[Transformer Layers]
    E --> F[Output Probabilities]
    F --> G[Sampling with Temperature]
    G --> H[Generated Tokens]
    H --> I[Detokenizer]
    I --> J[Response Text]`,
  flowNodes: [
    { id: "1", label: "User Input", type: "input" },
    { id: "2", label: "Tokenizer" },
    { id: "3", label: "Transformer" },
    { id: "4", label: "Sampling" },
    { id: "5", label: "Response", type: "output" },
  ],
  flowEdges: [
    { source: "1", target: "2" },
    { source: "2", target: "3" },
    { source: "3", target: "4" },
    { source: "4", target: "5" },
  ],
  keyConcepts: [
    { term: "Tokens", definition: "The smallest units of text a model processes. 'Hello world' might be 2 tokens. Pricing and limits are token-based." },
    { term: "Context Window", definition: "Maximum tokens the model can consider at once — input + output combined. GPT-4o supports 128K tokens." },
    { term: "Temperature", definition: "Controls randomness. Low (0-0.3) = deterministic. High (0.7-1.0) = creative but less predictable." },
    { term: "Embeddings", definition: "Dense vector representations of text that capture semantic meaning for similarity search." },
    { term: "Hallucinations", definition: "When models generate plausible but false information. Mitigated by RAG, grounding, and validation." },
    { term: "Inference", definition: "The process of running a trained model to generate predictions or text from input data." },
  ],
  components: [
    component("Tokenizer", "Breaks text into tokens the model understands", {
      inputs: ["Raw text string", "Tokenizer vocabulary"],
      outputs: ["Token IDs", "Token count"],
      benefits: ["Enables model to process any text", "Determines cost calculation"],
      challenges: ["Different languages tokenize differently", "Special characters may split unexpectedly"],
      bestPractices: ["Count tokens before API calls", "Use tiktoken library", "Account for system prompt tokens"],
    }),
    component("Embedding Model", "Converts text into numerical vectors capturing meaning", {
      inputs: ["Text chunks", "Model weights"],
      outputs: ["Vector embeddings (e.g., 1536 dimensions)"],
      benefits: ["Enables semantic search", "Foundation for RAG"],
      challenges: ["Quality varies by model", "Dimension size affects storage"],
      bestPractices: ["Use same model for indexing and querying", "Normalize vectors if required"],
    }),
    component("Inference Engine", "Runs the model forward pass to generate output", {
      inputs: ["Token sequence", "Model parameters", "Generation config"],
      outputs: ["Next token probabilities", "Generated text"],
      benefits: ["Core of all LLM applications"],
      challenges: ["GPU memory limits", "Latency at scale"],
      bestPractices: ["Use streaming for UX", "Set max_tokens appropriately"],
    }),
  ],
  workflow: workflow([
    { title: "Input Processing", description: "User text is tokenized into numerical IDs", details: "Special tokens mark system/user/assistant roles" },
    { title: "Embedding Lookup", description: "Each token ID maps to a dense vector", details: "Positional encodings added for sequence order" },
    { title: "Attention Computation", description: "Model weighs relationships between all tokens", details: "Self-attention enables context understanding" },
    { title: "Layer Processing", description: "Multiple transformer layers refine representations", details: "Typically 32-128 layers in modern LLMs" },
    { title: "Output Generation", description: "Final layer predicts next token probabilities", details: "Temperature and top-p sampling select the token" },
    { title: "Autoregressive Loop", description: "Generated token fed back until stop condition", details: "Stops at max tokens or end-of-sequence token" },
  ]),
  realExample: {
    question: "Explain photosynthesis in simple terms",
    steps: [
      { label: "Tokenization", content: "Input → ['Explain', ' photo', 'synthesis', ' in', ' simple', ' terms'] = 6 tokens" },
      { label: "Context Processing", content: "Model attends to all tokens, understanding the request for a simplified explanation" },
      { label: "Generation", content: "Autoregressively generates: 'Photosynthesis is how plants...'" },
    ],
    response: "Photosynthesis is how plants use sunlight, water, and CO₂ to make food (glucose) and release oxygen. It happens mainly in leaf cells containing chlorophyll.",
  },
  codeExamples: [
    {
      title: "Count Tokens with tiktoken",
      language: "python",
      description: "Always count tokens before API calls to manage costs",
      code: `import tiktoken

encoding = tiktoken.encoding_for_model("gpt-4o")
text = "Explain generative AI fundamentals"
tokens = encoding.encode(text)

print(f"Token count: {len(tokens)}")
print(f"Token IDs: {tokens[:10]}...")`,
    },
    {
      title: "Generate Embeddings",
      language: "python",
      code: `from openai import OpenAI

client = OpenAI()
response = client.embeddings.create(
    model="text-embedding-3-small",
    input="Generative AI creates new content from learned patterns"
)
embedding = response.data[0].embedding
print(f"Dimensions: {len(embedding)}")  # 1536`,
    },
    {
      title: "Control Temperature",
      language: "python",
      code: `response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Write a creative tagline"}],
    temperature=0.9,  # Creative
    max_tokens=100
)

# For factual tasks, use temperature=0.1`,
    },
  ],
  architectureDeepDive: defaultArchitecture(),
  interviewQuestions: [
    interview("What is a token and why does it matter?", "A token is the basic unit of text processing in LLMs. It affects cost (API pricing is per token), context limits, and how different languages are handled.", "basic"),
    interview("Explain the context window limitation and its impact on RAG.", "Context window limits how much text a model can process at once. RAG solves this by retrieving only relevant chunks instead of sending entire documents.", "intermediate"),
    interview("How do you reduce hallucinations in production?", "Use RAG for grounding, implement output validation, set low temperature for factual tasks, add citation requirements, and use human-in-the-loop for critical decisions.", "advanced"),
  ],
  quiz: [
    quiz("af1", "What primarily determines API cost for LLM calls?", ["Number of API calls", "Token count", "Response time", "Model name"], 1, "LLM APIs charge based on input and output tokens processed."),
    quiz("af2", "Temperature of 0 produces:", ["Random creative output", "Deterministic, focused output", "No output", "Embeddings only"], 1, "Temperature 0 makes the model always pick the highest probability token."),
    quiz("af3", "Embeddings are used for:", ["Generating images", "Semantic similarity search", "Training from scratch", "Deleting data"], 1, "Embeddings convert text to vectors for meaning-based search.", "architecture"),
  ],
  projectUsage: defaultProjectUsage(
    "Fundamentals power every feature of the Student AI Mentor Platform.",
    [
      { feature: "Document Q&A", usage: "Embeddings enable semantic search across study materials" },
      { feature: "Study Planner", usage: "Token limits determine how much context fits in planning prompts" },
      { feature: "Interview Prep", usage: "Temperature tuning balances creative vs. structured interview responses" },
    ]
  ),
};

export const llms: TopicContent = {
  slug: "llms",
  title: "Large Language Models",
  subtitle: "Architecture, capabilities, and practical usage of LLMs",
  icon: "MessageSquare",
  category: "Foundations",
  estimatedTime: "50 min",
  difficulty: "beginner",
  tags: ["transformer", "gpt", "claude", "open source", "model selection"],
  overview: {
    what: "Large Language Models (LLMs) are neural networks trained on vast text data to understand and generate human language.",
    why: "LLMs are the intelligence layer of modern AI applications — choosing the right model affects cost, quality, and latency.",
    where: "ChatGPT, Claude, GitHub Copilot, customer support bots, code generation, and every agentic system.",
  },
  analogy: "An LLM is like a library that has read every book in the world but cannot browse the internet — it answers from memory, which is vast but not always current or accurate.",
  mermaidDiagram: `flowchart LR
    subgraph Training
      A[Massive Text Corpus] --> B[Pre-training]
      B --> C[Base Model]
      C --> D[Fine-tuning / RLHF]
      D --> E[Aligned LLM]
    end
    subgraph Inference
      F[User Prompt] --> E
      E --> G[Generated Response]
    end`,
  components: [
    component("Transformer Architecture", "Self-attention mechanism enabling parallel processing of sequences", {
      inputs: ["Token embeddings", "Attention masks"],
      outputs: ["Contextualized representations"],
      benefits: ["Captures long-range dependencies", "Highly parallelizable"],
      challenges: ["Quadratic memory with sequence length"],
      bestPractices: ["Use models with efficient attention for long context"],
    }),
    component("Pre-training", "Learning language patterns from unlabeled text at scale", {
      inputs: ["Internet-scale text corpus"],
      outputs: ["Base model with language understanding"],
      benefits: ["Broad world knowledge", "Strong generalization"],
      challenges: ["Expensive ($millions)", "May learn biases"],
      bestPractices: ["Use pre-trained models rather than training from scratch"],
    }),
    component("RLHF", "Reinforcement Learning from Human Feedback for alignment", {
      inputs: ["Base model", "Human preference data"],
      outputs: ["Helpful, harmless, honest model"],
      benefits: ["Better instruction following", "Safer outputs"],
      challenges: ["Complex training pipeline"],
      bestPractices: ["Choose models with strong alignment for user-facing apps"],
    }),
  ],
  workflow: workflow([
    { title: "Model Selection", description: "Choose model based on task, cost, latency, and privacy needs" },
    { title: "Prompt Construction", description: "Build system + user messages with clear instructions" },
    { title: "API Call", description: "Send request to provider (OpenAI, Anthropic, local)" },
    { title: "Response Processing", description: "Parse, validate, and display or chain to next step" },
    { title: "Evaluation", description: "Measure quality, latency, and cost metrics" },
  ]),
  realExample: {
    question: "Summarize this 500-word article",
    steps: [
      { label: "Model Choice", content: "GPT-4o-mini selected for cost-effective summarization" },
      { label: "Prompt", content: "System: You are a concise summarizer. User: [article text]" },
      { label: "Output", content: "3-sentence summary generated in 2 seconds" },
    ],
    response: "The article discusses climate policy changes in 2024, highlighting renewable energy investments and international agreements targeting 2030 carbon reduction goals.",
  },
  codeExamples: [
    {
      title: "OpenAI Chat Completion",
      language: "python",
      code: `from openai import OpenAI

client = OpenAI()
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "You are a helpful AI tutor."},
        {"role": "user", "content": "Explain transformers simply"}
    ],
    stream=True
)

for chunk in response:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="")`,
    },
    {
      title: "Model Comparison with LangChain",
      language: "python",
      code: `from langchain_openai import ChatOpenAI
from langchain_anthropic import ChatAnthropic

models = {
    "gpt-4o": ChatOpenAI(model="gpt-4o"),
    "claude": ChatAnthropic(model="claude-3-5-sonnet-20241022"),
}

prompt = "Explain RAG in one paragraph"
for name, model in models.items():
    print(f"{name}: {model.invoke(prompt).content[:100]}...")`,
    },
  ],
  architectureDeepDive: {
    ...defaultArchitecture(),
    costOptimization: [
      "Route simple queries to smaller models (GPT-4o-mini, Haiku)",
      "Cache identical prompts",
      "Use prompt compression for long contexts",
    ],
  },
  interviewQuestions: [
    interview("What is the transformer architecture?", "Transformers use self-attention to process all tokens in parallel, computing relationships between every pair. This replaced RNNs for NLP.", "basic"),
    interview("Compare open-source vs proprietary LLMs.", "Proprietary (GPT-4, Claude) offer best quality and ease of use. Open-source (Llama, Mistral) offer privacy, customization, and no per-token cost but require infrastructure.", "intermediate"),
    interview("How would you implement model routing?", "Classify query complexity, route simple tasks to cheap models, complex reasoning to premium models. Use a classifier or rule-based routing with fallback.", "advanced"),
  ],
  quiz: [
    quiz("llm1", "Self-attention allows the model to:", ["Process tokens sequentially only", "Weigh relationships between all tokens", "Skip embedding layer", "Train without data"], 1, "Attention computes relevance between every token pair in the sequence."),
    quiz("llm2", "RLHF stands for:", ["Random Language Hash Function", "Reinforcement Learning from Human Feedback", "Recursive Layer Hidden Features", "Real-time Language Flow Handler"], 1, "RLHF aligns models with human preferences for better responses."),
  ],
  projectUsage: defaultProjectUsage("LLMs are the brain of the Student AI Mentor Platform.", [
    { feature: "Career Guidance", usage: "GPT-4o provides personalized career advice" },
    { feature: "Resume Analysis", usage: "Claude analyzes resume structure and content" },
    { feature: "Interview Simulation", usage: "LLM acts as interviewer with adaptive questions" },
  ]),
};

export const promptEngineering: TopicContent = {
  slug: "prompt-engineering",
  title: "Prompt Engineering",
  subtitle: "Master the art of communicating with AI models",
  icon: "PenTool",
  category: "Foundations",
  estimatedTime: "40 min",
  difficulty: "beginner",
  tags: ["zero-shot", "few-shot", "chain-of-thought", "structured output"],
  overview: {
    what: "Prompt engineering is the practice of designing inputs to LLMs to get accurate, useful, and consistent outputs.",
    why: "Better prompts dramatically improve output quality without changing models or retraining — it's the highest-ROI skill in AI engineering.",
    where: "Every LLM application — from simple chatbots to complex multi-agent systems relies on well-crafted prompts.",
  },
  analogy: "Prompt engineering is like giving instructions to a new employee — vague instructions get vague results, but clear role, context, examples, and format expectations produce excellent work.",
  mermaidDiagram: `flowchart TD
    A[Task Definition] --> B{Prompting Strategy}
    B --> C[Zero-Shot]
    B --> D[Few-Shot]
    B --> E[Chain of Thought]
    B --> F[Structured Output]
    C --> G[LLM Response]
    D --> G
    E --> G
    F --> G
    G --> H{Quality OK?}
    H -->|No| I[Refine Prompt]
    I --> B
    H -->|Yes| J[Deploy]`,
  components: [
    component("System Prompt", "Sets the AI's role, behavior, and constraints", {
      inputs: ["Role definition", "Rules", "Output format"],
      outputs: ["Behavioral context for the model"],
      benefits: ["Consistent personality", "Safety guardrails"],
      bestPractices: ["Be specific about role", "Include do/don't rules", "Specify output format"],
    }),
    component("Few-Shot Examples", "Demonstrate desired input-output patterns", {
      inputs: ["2-5 example pairs"],
      outputs: ["Pattern the model follows"],
      benefits: ["No fine-tuning needed", "Quick style adaptation"],
      bestPractices: ["Use diverse, representative examples", "Keep examples concise"],
    }),
    component("Chain of Thought", "Ask model to reason step-by-step before answering", {
      inputs: ["Complex question", "Let's think step by step instruction"],
      outputs: ["Reasoning trace + final answer"],
      benefits: ["Better accuracy on math/logic", "Debuggable reasoning"],
      bestPractices: ["Use for multi-step problems", "Parse reasoning separately from answer"],
    }),
  ],
  workflow: workflow([
    { title: "Define Task", description: "Clearly specify what the model should do" },
    { title: "Choose Strategy", description: "Zero-shot, few-shot, CoT, or structured output" },
    { title: "Write & Test", description: "Draft prompt and test with edge cases" },
    { title: "Evaluate", description: "Measure accuracy, consistency, and cost" },
    { title: "Iterate", description: "Refine based on failure patterns" },
  ]),
  realExample: {
    question: "Classify this customer email sentiment",
    steps: [
      { label: "Few-Shot Setup", content: "Provide 3 examples: positive, negative, neutral emails with labels" },
      { label: "New Input", content: "Customer email: 'Product arrived late but support was excellent'" },
      { label: "CoT Reasoning", content: "Model reasons: late delivery = negative, great support = positive → mixed/positive" },
    ],
    response: "Sentiment: Positive (mixed). Reasoning: Despite delivery delay, customer highlights excellent support experience.",
  },
  codeExamples: [
    {
      title: "Few-Shot Prompting",
      language: "python",
      code: `messages = [
    {"role": "system", "content": "Classify sentiment as positive, negative, or neutral."},
    {"role": "user", "content": "I love this product! → positive"},
    {"role": "assistant", "content": "positive"},
    {"role": "user", "content": "Terrible experience → negative"},
    {"role": "assistant", "content": "negative"},
    {"role": "user", "content": "It's okay, nothing special → neutral"},
    {"role": "assistant", "content": "neutral"},
    {"role": "user", "content": "Best purchase ever! → "},
]`,
    },
    {
      title: "Structured Output with JSON Schema",
      language: "python",
      code: `response = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Extract: John is 30, lives in NYC"}],
    response_format={
        "type": "json_schema",
        "json_schema": {
            "name": "person",
            "schema": {
                "type": "object",
                "properties": {
                    "name": {"type": "string"},
                    "age": {"type": "integer"},
                    "city": {"type": "string"}
                },
                "required": ["name", "age", "city"]
            }
        }
    }
)`,
    },
    {
      title: "Prompt Chaining",
      language: "python",
      code: `# Step 1: Extract entities
entities = llm.invoke("Extract key entities from: " + text)

# Step 2: Generate summary using entities
summary = llm.invoke(f"Summarize using these entities: {entities}")

# Step 3: Format output
final = llm.invoke(f"Format as bullet points: {summary}")`,
    },
  ],
  architectureDeepDive: defaultArchitecture(),
  interviewQuestions: [
    interview("Difference between zero-shot and few-shot?", "Zero-shot gives instructions only. Few-shot adds examples demonstrating the desired pattern, improving accuracy without training.", "basic"),
    interview("When to use Chain of Thought?", "For multi-step reasoning: math, logic, planning. Adds latency but significantly improves accuracy on complex tasks.", "intermediate"),
    interview("How do you prevent prompt injection?", "Separate system/user content, validate inputs, use output schemas, implement guardrails, and never execute model-generated code blindly.", "advanced"),
  ],
  quiz: [
    quiz("pe1", "Few-shot prompting provides:", ["Model weights", "Example input-output pairs", "GPU access", "Database connection"], 1, "Examples teach the model the desired pattern without fine-tuning."),
    quiz("pe2", "Chain of Thought is best for:", ["Simple greetings", "Multi-step math problems", "Image generation", "Database queries"], 1, "CoT improves reasoning by having the model think step-by-step."),
    quiz("pe3", "Structured outputs ensure:", ["Faster inference", "Predictable JSON/format responses", "Lower cost", "No hallucinations"], 1, "JSON schema constrains output to expected structure.", "scenario"),
  ],
  projectUsage: defaultProjectUsage("Prompt engineering shapes every AI interaction in the mentor platform.", [
    { feature: "Resume Analysis", usage: "Structured output extracts skills, experience, gaps" },
    { feature: "Study Planner", usage: "Chain-of-thought creates logical study schedules" },
    { feature: "Career Guidance", usage: "Few-shot examples ensure consistent advice tone" },
  ]),
};
