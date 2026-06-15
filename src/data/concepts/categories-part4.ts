import type { ConceptCategory } from "@/types/content";
import { c, NA } from "./helpers";

export const devopsCloud: ConceptCategory = {
  title: "DevOps & Cloud",
  concepts: [
    c(
      "Containerization",
      NA,
      "Containerization packages an application with everything it needs into a portable container that runs the same way on any machine.",
      "Docker containers let developers run the HR app identically on their laptop, test server, and production — avoiding 'works on my machine' issues."
    ),
    c(
      "CI/CD",
      "Continuous Integration / Continuous Deployment",
      "CI/CD automates building, testing, and deploying code. Every code change goes through automated checks before reaching production.",
      "A developer pushes code to GitHub. CI runs tests automatically. If they pass, CD deploys the new version to production within minutes."
    ),
    c(
      "IaC",
      "Infrastructure as Code",
      "IaC manages servers, networks, and cloud resources using code files instead of manual clicking in consoles. Changes are version-controlled and repeatable.",
      "A Terraform file defines 'create 3 servers and a database.' Running it builds the exact infrastructure every time — no manual setup errors."
    ),
    c(
      "DevOps",
      NA,
      "DevOps is a culture and practice that brings development and operations together — automating delivery, improving collaboration, and shipping software faster and more reliably.",
      "Instead of developers throwing code over the wall to operations, a DevOps team automates testing and deployment so releases happen weekly instead of quarterly."
    ),
    c(
      "Git",
      NA,
      "Git is a version control system that tracks changes to code over time. Teams can collaborate, review changes, and roll back if needed.",
      "Multiple developers work on the same project. Git tracks who changed what, merges their work, and lets you revert to yesterday's version if a bug appears."
    ),
    c(
      "Branching",
      NA,
      "Branching creates separate lines of development in Git so teams can work on features without affecting the main production code.",
      "A developer creates a branch called 'feature-leave-approval', builds the feature, then merges it into main after code review and testing."
    ),
    c(
      "Secret Management",
      NA,
      "Secret management securely stores sensitive values like passwords, API keys, and certificates — never hardcoded in source code.",
      "Database passwords are stored in AWS Secrets Manager. The application fetches them at runtime — developers never put passwords in code files."
    ),
    c(
      "Environment Variable",
      NA,
      "Environment variables are configuration values set outside the application code — database URLs, API keys, feature flags — that change per environment.",
      "The same app uses environment variable DATABASE_URL=prod-db in production and DATABASE_URL=test-db in testing — no code changes needed."
    ),
  ],
};

export const webProtocols: ConceptCategory = {
  title: "Web Protocols & Security",
  concepts: [
    c(
      "SSL/TLS",
      "Secure Sockets Layer / Transport Layer Security",
      "SSL/TLS encrypts data sent between a browser and a server, protecting it from being read or tampered with in transit.",
      "When you see a padlock icon in your browser, SSL/TLS is encrypting your login credentials as they travel to the server."
    ),
    c(
      "HTTPS",
      "HyperText Transfer Protocol Secure",
      "HTTPS is HTTP combined with SSL/TLS encryption. It is the secure standard for all websites handling sensitive data.",
      "Your bank website uses https:// — all pages, not just login — so every interaction is encrypted."
    ),
    c(
      "CORS",
      "Cross-Origin Resource Sharing",
      "CORS controls which websites are allowed to call your API from a browser. It is a security rule that prevents unauthorized sites from accessing your data.",
      "Your app at myapp.com can call your API. A malicious site at evil.com is blocked by CORS from making the same API calls from a user's browser."
    ),
  ],
};

export const dataProcessing: ConceptCategory = {
  title: "Data Processing",
  concepts: [
    c(
      "ETL",
      "Extract, Transform, Load",
      "ETL pulls data from source systems, cleans and reshapes it, then loads it into a destination like a data warehouse for reporting.",
      "Every night, ETL extracts employee data from PeopleSoft, transforms it into a standard format, and loads it into a reporting database for management dashboards."
    ),
  ],
};

export const artificialIntelligence: ConceptCategory = {
  title: "Artificial Intelligence",
  concepts: [
    c(
      "RAG",
      "Retrieval-Augmented Generation",
      "RAG combines search with AI generation. The system first finds relevant documents, then uses them to produce accurate, grounded answers.",
      "A company chatbot searches internal policy documents before answering HR questions — reducing wrong answers and citing real policies."
    ),
    c(
      "AI Agents",
      NA,
      "AI agents are systems that plan steps, use tools, and take actions to complete goals — not just answer one question at a time.",
      "You ask an agent: 'Research Python courses and email me a summary.' It searches the web, reads pages, writes a summary, and sends the email."
    ),
    c(
      "Vector Embeddings",
      NA,
      "Vector embeddings convert text into lists of numbers that capture meaning. Similar content produces similar numbers, enabling semantic search.",
      "'Dog' and 'puppy' have similar embeddings. Searching for 'cute pets' can find documents about puppies even without the exact word 'pets'."
    ),
    c(
      "Prompting",
      NA,
      "Prompting is how you instruct an AI model — the words, examples, and format you provide to get useful, accurate responses.",
      "Instead of 'write email,' a good prompt says: 'Write a polite follow-up email to a client about a delayed project. Keep it under 100 words.'"
    ),
    c(
      "Memory",
      NA,
      "In AI agents, memory stores past conversations and learned facts so the system remembers context across interactions.",
      "A study assistant remembers you struggled with SQL last week and suggests SQL practice before your upcoming interview."
    ),
    c(
      "Tokenization",
      NA,
      "Tokenization splits text into small pieces (tokens) that AI models process. Word count, cost, and limits are based on tokens.",
      "'Hello world' might be 2 tokens. A 50-page document might be 30,000 tokens. Knowing this helps estimate AI API costs."
    ),
    c(
      "LLM Inferencing",
      "Large Language Model Inferencing",
      "LLM inferencing is running a trained model to generate responses. It is the step where the model actually produces output from your input.",
      "When you type a question in ChatGPT and wait for the answer, inferencing is happening — the model processing your input and generating text."
    ),
    c(
      "Embedding Model",
      NA,
      "An embedding model converts text into vector embeddings. It is specialized for capturing meaning, not for generating chat responses.",
      "OpenAI's text-embedding model converts thousands of company documents into vectors stored in a vector database for semantic search."
    ),
    c(
      "MCP",
      "Model Context Protocol",
      "MCP is a standard way for AI applications to connect to external tools and data sources through a unified interface.",
      "An AI assistant uses MCP to access your files, calendar, and database — discovering and using tools through one common protocol."
    ),
    c(
      "Multi-Agent Systems",
      NA,
      "Multi-agent systems use multiple specialized AI agents that collaborate — each handling a different sub-task toward a common goal.",
      "One agent researches interview questions, another writes practice answers, and a third reviews quality — coordinated by a supervisor agent."
    ),
  ],
};

export const webDesign: ConceptCategory = {
  title: "Web & Application Design",
  concepts: [
    c(
      "SEO",
      "Search Engine Optimization",
      "SEO improves how easily people find your website through search engines like Google — through relevant content, structure, and technical setup.",
      "A blog post titled 'Python for Beginners' with clear headings ranks higher on Google when someone searches 'learn Python'."
    ),
    c(
      "Responsive Design",
      NA,
      "Responsive design makes websites look and work well on all screen sizes — desktop, tablet, and mobile — without separate versions.",
      "This website adjusts its layout automatically — sidebar on desktop, hamburger menu on phone — giving a good experience on any device."
    ),
    c(
      "Internationalization",
      "i18n — Internationalization",
      "Internationalization prepares an application to support multiple languages and regional formats (dates, currencies) without rebuilding the app.",
      "An HR app built with i18n can later add Hindi and French translations — the structure is ready even if only English is shown initially."
    ),
  ],
};
