import type { TopicContent } from "@/types/topic";
import { component, defaultArchitecture, defaultProjectUsage, interview, quiz, workflow } from "./helpers";

export const ragSystems: TopicContent = {
  slug: "rag-systems",
  title: "RAG Systems",
  subtitle: "Retrieval-Augmented Generation for grounded AI responses",
  icon: "Database",
  category: "Core AI",
  estimatedTime: "60 min",
  difficulty: "intermediate",
  tags: ["chunking", "embeddings", "retrieval", "re-ranking", "hybrid search"],
  overview: {
    what: "RAG (Retrieval-Augmented Generation) combines information retrieval with LLM generation to produce answers grounded in your own data.",
    why: "LLMs hallucinate and lack private/recent data. RAG connects models to your documents, databases, and knowledge bases.",
    where: "Enterprise chatbots, document Q&A, customer support, legal research, medical knowledge systems, and the Student AI Mentor.",
  },
  analogy: "Like an open-book exam — instead of relying on memory alone, the student (LLM) first looks up relevant pages (retrieval) and then writes the answer using those references.",
  mermaidDiagram: `flowchart TD
    A[User Query] --> B[Query Embedding]
    B --> C[Vector Database]
    C --> D[Top-K Retrieval]
    D --> E[Re-ranker]
    E --> F[Context Assembly]
    F --> G[Prompt Builder]
    G --> H[LLM]
    H --> I[Grounded Response]
    
    J[Documents] --> K[Chunking]
    K --> L[Embedding Model]
    L --> C`,
  flowNodes: [
    { id: "query", label: "User Query", type: "input" },
    { id: "embed", label: "Embedding Model" },
    { id: "vectordb", label: "Vector Database" },
    { id: "retriever", label: "Retriever" },
    { id: "rerank", label: "Re-ranker" },
    { id: "llm", label: "LLM" },
    { id: "response", label: "Response", type: "output" },
  ],
  flowEdges: [
    { source: "query", target: "embed", label: "embed query" },
    { source: "embed", target: "vectordb", label: "similarity search" },
    { source: "vectordb", target: "retriever" },
    { source: "retriever", target: "rerank" },
    { source: "rerank", target: "llm", label: "context + query" },
    { source: "llm", target: "response" },
  ],
  components: [
    component("Document Loader", "Ingests documents from various sources", {
      inputs: ["PDFs, web pages, databases, APIs"],
      outputs: ["Raw text documents"],
      benefits: ["Unified ingestion pipeline"],
      bestPractices: ["Preserve metadata", "Handle encoding issues"],
    }),
    component("Chunking", "Splits documents into searchable segments", {
      inputs: ["Full documents", "Chunk size config"],
      outputs: ["Text chunks with metadata"],
      benefits: ["Fits context window", "Precise retrieval"],
      challenges: ["Context loss at boundaries", "Wrong chunk size"],
      bestPractices: ["Use 512-1024 tokens", "Overlap 10-20%", "Semantic chunking for complex docs"],
    }),
    component("Embeddings", "Converts chunks to vector representations", {
      inputs: ["Text chunks"],
      outputs: ["Dense vectors"],
      benefits: ["Semantic search capability"],
      bestPractices: ["Same model for index and query", "Batch for efficiency"],
    }),
    component("Vector Store", "Stores and indexes embeddings for fast search", {
      inputs: ["Vectors + metadata"],
      outputs: ["Similarity search results"],
      benefits: ["Millisecond retrieval at scale"],
      bestPractices: ["Choose store based on scale", "Index metadata fields"],
    }),
    component("Retriever", "Finds most relevant chunks for a query", {
      inputs: ["Query embedding", "Vector store"],
      outputs: ["Top-K relevant chunks"],
      benefits: ["Grounds LLM in facts"],
      bestPractices: ["Start with top-5, tune based on eval", "Use hybrid search"],
    }),
    component("Re-ranker", "Re-scores retrieved chunks for better relevance", {
      inputs: ["Query", "Retrieved chunks"],
      outputs: ["Re-ranked top chunks"],
      benefits: ["Significantly improves precision"],
      bestPractices: ["Use cross-encoder models", "Re-rank top-20 to top-5"],
    }),
    component("Prompt Builder", "Assembles context and query into LLM prompt", {
      inputs: ["Retrieved chunks", "User query", "System instructions"],
      outputs: ["Complete prompt"],
      benefits: ["Structured, consistent prompts"],
      bestPractices: ["Include source citations", "Set answer-only-from-context rule"],
    }),
  ],
  workflow: workflow([
    { title: "Index Phase", description: "Load documents → chunk → embed → store in vector DB" },
    { title: "Query Processing", description: "User question embedded using same model" },
    { title: "Retrieval", description: "Similarity search finds top-K relevant chunks" },
    { title: "Re-ranking", description: "Cross-encoder re-scores for precision" },
    { title: "Generation", description: "LLM generates answer using retrieved context" },
    { title: "Citation", description: "Attach source references to the response" },
  ]),
  realExample: {
    question: "What is Newton's First Law?",
    steps: [
      { label: "Retrieval", content: "Query embedded → Vector DB returns physics textbook chunks about inertia" },
      { label: "Context", content: "Top chunk: 'An object at rest stays at rest unless acted upon by an external force...'" },
      { label: "LLM Response", content: "Model generates answer strictly from retrieved context with citation" },
    ],
    response: "Newton's First Law (Law of Inertia) states that an object remains at rest or in uniform motion unless acted upon by an external force. [Source: Physics Textbook, Ch. 3]",
  },
  codeExamples: [
    {
      title: "RAG Pipeline with LangChain",
      language: "python",
      code: `from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_community.vectorstores import Chroma
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.chains import RetrievalQA

# Chunk documents
splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
chunks = splitter.split_documents(documents)

# Create vector store
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
vectorstore = Chroma.from_documents(chunks, embeddings)

# RAG chain
qa = RetrievalQA.from_chain_type(
    llm=ChatOpenAI(model="gpt-4o"),
    retriever=vectorstore.as_retriever(search_kwargs={"k": 5}),
    return_source_documents=True
)

result = qa.invoke("What is Newton's First Law?")
print(result["result"])`,
    },
    {
      title: "Hybrid Search (Vector + Keyword)",
      language: "python",
      code: `from langchain.retrievers import EnsembleRetriever
from langchain_community.retrievers import BM25Retriever

# Vector retriever
vector_retriever = vectorstore.as_retriever(search_kwargs={"k": 10})

# Keyword retriever
bm25 = BM25Retriever.from_documents(chunks)
bm25.k = 10

# Combine with weights
hybrid = EnsembleRetriever(
    retrievers=[bm25, vector_retriever],
    weights=[0.4, 0.6]
)`,
    },
    {
      title: "FastAPI RAG Endpoint",
      language: "python",
      code: `from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Query(BaseModel):
    question: str

@app.post("/ask")
async def ask(query: Query):
    docs = retriever.invoke(query.question)
    context = "\\n".join(d.page_content for d in docs)
    response = llm.invoke(f"Context:\\n{context}\\n\\nQ: {query.question}")
    return {"answer": response, "sources": [d.metadata for d in docs]}`,
    },
  ],
  architectureDeepDive: {
    scalability: ["Shard vector DB by tenant", "Async indexing pipeline", "Cache frequent queries"],
    security: ["Tenant isolation in vector store", "PII filtering before indexing", "Access control on documents"],
    costOptimization: ["Cache embeddings for static docs", "Use smaller embedding models", "Re-rank only top candidates"],
    monitoring: ["Track retrieval precision/recall", "Monitor chunk relevance scores", "Log failed retrievals"],
  },
  interviewQuestions: [
    interview("What problem does RAG solve?", "RAG grounds LLM responses in external data, reducing hallucinations and enabling answers about private/recent information.", "basic"),
    interview("How do you choose chunk size?", "Balance context preservation vs precision. 512-1024 tokens with 10-20% overlap. Evaluate with your specific documents.", "intermediate"),
    interview("Explain hybrid search and when to use it.", "Combines vector (semantic) and BM25 (keyword) search. Use when exact term matching matters alongside semantic similarity.", "advanced"),
  ],
  quiz: [
    quiz("rag1", "RAG primarily reduces:", ["Latency", "Hallucinations", "Storage costs", "Training time"], 1, "RAG grounds responses in retrieved facts, reducing hallucinations."),
    quiz("rag2", "Re-ranking improves:", ["Embedding speed", "Retrieval precision", "Token count", "Model size"], 1, "Cross-encoder re-ranking re-scores candidates for better relevance."),
    quiz("rag3", "Best chunk overlap percentage:", ["0%", "10-20%", "50%", "100%"], 1, "10-20% overlap preserves context across chunk boundaries.", "architecture"),
  ],
  projectUsage: defaultProjectUsage("RAG powers document Q&A across study materials in the Student AI Mentor.", [
    { feature: "Document Q&A", usage: "Search textbooks and notes by meaning" },
    { feature: "Interview Prep", usage: "Retrieve relevant interview questions and answers" },
    { feature: "Career Guidance", usage: "Ground advice in career resource documents" },
  ]),
};

export const vectorDatabases: TopicContent = {
  slug: "vector-databases",
  title: "Vector Databases",
  subtitle: "Store and search embeddings at scale",
  icon: "Layers",
  category: "Core AI",
  estimatedTime: "45 min",
  difficulty: "intermediate",
  tags: ["embeddings", "similarity search", "indexing", "metadata filtering"],
  overview: {
    what: "Vector databases are specialized stores optimized for storing high-dimensional vectors and performing fast similarity searches.",
    why: "Traditional databases cannot efficiently search by meaning. Vector DBs enable semantic search — finding similar content by concept, not keywords.",
    where: "RAG systems, recommendation engines, image search, anomaly detection, and any application needing similarity matching.",
  },
  analogy: "Like a librarian who finds books by meaning rather than exact words — ask for 'stories about overcoming adversity' and get relevant books even if those exact words aren't in the title.",
  mermaidDiagram: `flowchart LR
    A[Documents] --> B[Embedding Model]
    B --> C[Vectors + Metadata]
    C --> D[Vector Database]
    D --> E[HNSW/IVF Index]
    
    F[Query] --> G[Query Embedding]
    G --> D
    D --> H[Similarity Search]
    H --> I[Top-K Results]
    
    J[Metadata Filters] --> D`,
  components: [
    component("Embedding Storage", "Stores high-dimensional vectors efficiently", {
      inputs: ["Float vectors (768-3072 dims)"],
      outputs: ["Indexed vector entries"],
      benefits: ["Optimized memory layout", "Compression options"],
    }),
    component("Similarity Index", "Data structure for fast nearest-neighbor search", {
      inputs: ["Vectors", "Index algorithm (HNSW, IVF)"],
      outputs: ["Searchable index"],
      benefits: ["Sub-millisecond search at millions of vectors"],
      challenges: ["Recall vs speed tradeoff"],
      bestPractices: ["HNSW for most cases", "Tune ef_search parameter"],
    }),
    component("Metadata Filtering", "Filter results by attributes before/after search", {
      inputs: ["Filter conditions (tenant, date, category)"],
      outputs: ["Filtered result set"],
      benefits: ["Multi-tenant isolation", "Precise scoping"],
      bestPractices: ["Index frequently filtered fields", "Pre-filter for large datasets"],
    }),
  ],
  workflow: workflow([
    { title: "Embed", description: "Convert documents to vectors using embedding model" },
    { title: "Upsert", description: "Store vectors with metadata in the database" },
    { title: "Index", description: "Build HNSW or IVF index for fast search" },
    { title: "Query", description: "Embed query and perform similarity search" },
    { title: "Filter", description: "Apply metadata filters to narrow results" },
    { title: "Return", description: "Return top-K matches with scores and metadata" },
  ]),
  realExample: {
    question: "Find study materials about machine learning",
    steps: [
      { label: "Query Embedding", content: "'machine learning' → [0.23, -0.15, 0.87, ...] (1536 dims)" },
      { label: "Similarity Search", content: "Cosine similarity finds nearest vectors in index" },
      { label: "Metadata Filter", content: "Filter: subject='CS', type='textbook'" },
    ],
    response: "Top 3 results: ML Textbook Ch.1 (score: 0.92), Study Notes on Neural Nets (0.87), Lecture Slides Week 3 (0.84)",
  },
  codeExamples: [
    {
      title: "Pinecone Vector Store",
      language: "python",
      code: `from pinecone import Pinecone

pc = Pinecone(api_key="your-key")
index = pc.Index("study-materials")

# Upsert vectors
index.upsert(vectors=[
    {"id": "doc1", "values": embedding, "metadata": {"subject": "CS", "chapter": 1}}
])

# Query with metadata filter
results = index.query(
    vector=query_embedding,
    top_k=5,
    filter={"subject": {"$eq": "CS"}},
    include_metadata=True
)`,
    },
    {
      title: "ChromaDB Local Setup",
      language: "python",
      code: `import chromadb

client = chromadb.PersistentClient(path="./chroma_db")
collection = client.get_or_create_collection("documents")

collection.add(
    documents=["Machine learning basics", "Deep learning intro"],
    ids=["doc1", "doc2"],
    metadatas=[{"topic": "ML"}, {"topic": "DL"}]
)

results = collection.query(
    query_texts=["What is ML?"],
    n_results=3,
    where={"topic": "ML"}
)`,
    },
  ],
  architectureDeepDive: defaultArchitecture(),
  interviewQuestions: [
    interview("Cosine vs Euclidean distance?", "Cosine measures angle between vectors (direction/meaning). Euclidean measures absolute distance. Cosine is standard for text embeddings.", "basic"),
    interview("What is HNSW?", "Hierarchical Navigable Small World — a graph-based index providing fast approximate nearest neighbor search with high recall.", "intermediate"),
    interview("How to scale vector DB to billions of vectors?", "Sharding, product quantization for compression, distributed indexes, and tiered storage (hot/warm/cold).", "advanced"),
  ],
  quiz: [
    quiz("vdb1", "Vector databases search by:", ["Exact keyword match", "Semantic similarity", "Alphabetical order", "File size"], 1, "Vector DBs find semantically similar content using embedding vectors."),
    quiz("vdb2", "Metadata filtering allows:", ["Faster embedding", "Scoped search by attributes", "Model training", "Token counting"], 1, "Filters narrow results by tenant, category, date, etc."),
  ],
  projectUsage: defaultProjectUsage("Vector DB stores all study material embeddings for the mentor platform.", [
    { feature: "Document Q&A", usage: "Semantic search across uploaded textbooks" },
    { feature: "Learning Tracker", usage: "Find related topics based on study history" },
  ]),
};

export const mcp: TopicContent = {
  slug: "mcp",
  title: "Model Context Protocol (MCP)",
  subtitle: "Standardized protocol for AI tool and context integration",
  icon: "Plug",
  category: "Core AI",
  estimatedTime: "50 min",
  difficulty: "intermediate",
  tags: ["mcp servers", "tool discovery", "context sharing", "clients"],
  overview: {
    what: "MCP (Model Context Protocol) is an open standard that enables AI applications to connect to external data sources and tools through a unified interface.",
    why: "Before MCP, every AI app built custom integrations. MCP provides a standard way for models to discover and use tools, reducing integration complexity.",
    where: "Cursor IDE, Claude Desktop, custom AI agents, and any application needing standardized tool access.",
  },
  analogy: "MCP is like USB-C for AI — one standard port that connects any device (tool/data source) to any host (AI application), instead of custom cables for every combination.",
  mermaidDiagram: `sequenceDiagram
    participant Client as MCP Client
    participant Server as MCP Server
    participant Tool as External Tool/Data
    
    Client->>Server: Initialize Connection
    Server->>Client: Capabilities + Tools List
    Client->>Server: tools/list
    Server->>Client: Available Tools
    Client->>Server: tools/call (name, args)
    Server->>Tool: Execute Action
    Tool->>Server: Result
    Server->>Client: Tool Response
    
    Client->>Server: resources/read
    Server->>Client: Context Data`,
  flowNodes: [
    { id: "client", label: "MCP Client", type: "input" },
    { id: "protocol", label: "MCP Protocol" },
    { id: "server", label: "MCP Server" },
    { id: "tools", label: "Tools & Resources" },
    { id: "response", label: "Response", type: "output" },
  ],
  flowEdges: [
    { source: "client", target: "protocol", label: "JSON-RPC" },
    { source: "protocol", target: "server" },
    { source: "server", target: "tools" },
    { source: "tools", target: "response" },
  ],
  components: [
    component("MCP Client", "AI application that consumes tools and resources", {
      inputs: ["User requests", "Server configurations"],
      outputs: ["Tool invocations", "Context-enriched responses"],
      benefits: ["Plug-and-play tool integration"],
    }),
    component("MCP Server", "Exposes tools, resources, and prompts to clients", {
      inputs: ["Tool implementations", "Data sources"],
      outputs: ["Standardized tool interface"],
      benefits: ["Reusable across any MCP client"],
      bestPractices: ["Clear tool descriptions", "Input validation", "Error handling"],
    }),
    component("Tool Discovery", "Dynamic listing of available server capabilities", {
      inputs: ["Server connection"],
      outputs: ["Tool schemas and descriptions"],
      benefits: ["No hardcoded integrations"],
      bestPractices: ["Descriptive tool names", "JSON Schema for inputs"],
    }),
    component("Context Sharing", "Resources provide read-only context to the model", {
      inputs: ["Files, databases, APIs"],
      outputs: ["Structured context data"],
      benefits: ["Real-time data access", "Reduced hallucination"],
    }),
  ],
  workflow: workflow([
    { title: "Server Setup", description: "Implement MCP server with tools and resources" },
    { title: "Client Connection", description: "Client discovers and connects to server" },
    { title: "Tool Discovery", description: "Client lists available tools via tools/list" },
    { title: "Tool Invocation", description: "Model decides to call tool → client sends tools/call" },
    { title: "Result Processing", description: "Server executes tool and returns structured result" },
    { title: "Response Generation", description: "Model incorporates tool result into final answer" },
  ]),
  realExample: {
    question: "What's the weather in Mumbai and schedule a reminder?",
    steps: [
      { label: "Tool Discovery", content: "MCP client finds weather_api and calendar tools on connected servers" },
      { label: "Weather Call", content: "tools/call weather_api {city: 'Mumbai'} → 32°C, Humid" },
      { label: "Calendar Call", content: "tools/call calendar {action: 'remind', message: 'Carry umbrella'}" },
    ],
    response: "It's 32°C and humid in Mumbai. I've set a reminder to carry an umbrella.",
  },
  codeExamples: [
    {
      title: "MCP Server (Python SDK)",
      language: "python",
      code: `from mcp.server import Server
from mcp.types import Tool, TextContent

app = Server("study-tools")

@app.list_tools()
async def list_tools():
    return [
        Tool(
            name="search_notes",
            description="Search student study notes",
            inputSchema={
                "type": "object",
                "properties": {
                    "query": {"type": "string"}
                },
                "required": ["query"]
            }
        )
    ]

@app.call_tool()
async def call_tool(name: str, arguments: dict):
    if name == "search_notes":
        results = search_vector_db(arguments["query"])
        return [TextContent(type="text", text=str(results))]`,
    },
    {
      title: "MCP Client Configuration",
      language: "json",
      code: `{
  "mcpServers": {
    "study-tools": {
      "command": "python",
      "args": ["-m", "study_tools_server"],
      "env": {
        "DATABASE_URL": "postgresql://..."
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/docs"]
    }
  }
}`,
    },
  ],
  architectureDeepDive: defaultArchitecture(),
  interviewQuestions: [
    interview("What problem does MCP solve?", "Standardizes how AI apps connect to tools and data, replacing N×M custom integrations with a single protocol.", "basic"),
    interview("Difference between MCP tools and resources?", "Tools are actions the model can invoke (write operations). Resources are read-only context the model can access.", "intermediate"),
    interview("How does MCP compare to function calling?", "Function calling is model-specific. MCP is a transport/protocol layer that works across models and applications with standardized discovery.", "advanced"),
  ],
  quiz: [
    quiz("mcp1", "MCP stands for:", ["Machine Compute Process", "Model Context Protocol", "Multi-Channel Pipeline", "Model Control Panel"], 1, "Model Context Protocol standardizes AI tool integration."),
    quiz("mcp2", "Tool discovery allows:", ["Training models", "Dynamic listing of server capabilities", "Image generation", "Database migration"], 1, "Clients discover available tools at runtime via the protocol."),
  ],
  projectUsage: defaultProjectUsage("MCP connects the Student AI Mentor to external tools and data sources.", [
    { feature: "Document Q&A", usage: "MCP server exposes vector search as a tool" },
    { feature: "Study Planner", usage: "Calendar MCP server for scheduling" },
    { feature: "Career Guidance", usage: "Job API MCP server for market data" },
  ]),
};
