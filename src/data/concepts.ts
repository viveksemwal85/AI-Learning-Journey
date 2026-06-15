import type { ConceptCategory } from "@/types/content";

export const conceptsIntro =
  "A collection of commonly used technology, cloud, DevOps, system design, and AI concepts explained in simple language.";

export const conceptCategories: ConceptCategory[] = [
  {
    title: "Authentication & Security",
    concepts: [
      {
        name: "User Management",
        fullForm: "Not applicable — common industry term",
        explanation:
          "User management is how an application creates, updates, and controls user accounts. It covers sign-up, login, password reset, roles, and permissions — who can access what in a system.",
        example:
          "In a banking app, user management lets you create an account, reset your password if you forget it, and ensures only you can see your account balance — not other customers.",
      },
      {
        name: "Session Management",
        fullForm: "Not applicable — common industry term",
        explanation:
          "Session management keeps track of a logged-in user while they use an application. After you log in, the system remembers you for a period of time so you don't have to enter your password on every page.",
        example:
          "When you log into Gmail and browse emails for 30 minutes without re-entering your password, that is session management working in the background.",
      },
      {
        name: "OAuth",
        fullForm: "Open Authorization",
        explanation:
          "OAuth lets you log into one website using another trusted service (like Google or GitHub) without sharing your password with that website. You grant limited access instead of giving full credentials.",
        example:
          "When a new app says 'Sign in with Google' and you approve it, OAuth handles the login securely without the app ever seeing your Google password.",
      },
      {
        name: "JWT",
        fullForm: "JSON Web Token",
        explanation:
          "A JWT is a secure, compact way to pass identity information between systems. After login, the server gives the user a token that proves who they are on future requests.",
        example:
          "After logging into a food delivery app, your phone sends a JWT with each order request so the server knows it is really you placing the order.",
      },
      {
        name: "Encryption",
        fullForm: "Not applicable — common industry term",
        explanation:
          "Encryption scrambles data so only authorized parties can read it. It protects information when stored (at rest) or when sent over the internet (in transit).",
        example:
          "When you see a padlock icon in your browser during online shopping, your credit card details are encrypted before they travel over the internet.",
      },
    ],
  },
  {
    title: "Cloud Computing",
    concepts: [
      {
        name: "IaaS",
        fullForm: "Infrastructure as a Service",
        explanation:
          "IaaS provides basic computing resources over the internet — servers, storage, and networking. You manage the software; the cloud provider manages the hardware.",
        example:
          "Renting a virtual server on AWS EC2 to host your website is using IaaS. You choose the server size and install your own applications on it.",
      },
      {
        name: "PaaS",
        fullForm: "Platform as a Service",
        explanation:
          "PaaS gives you a ready-made platform to build and deploy applications without managing servers. You focus on your code; the provider handles infrastructure.",
        example:
          "Deploying a web app on Vercel or Heroku is PaaS — you push your code and the platform handles servers, scaling, and deployment.",
      },
      {
        name: "SaaS",
        fullForm: "Software as a Service",
        explanation:
          "SaaS delivers software over the internet as a subscription. Users access it through a browser without installing or maintaining anything locally.",
        example:
          "Gmail, Salesforce, and Microsoft 365 are SaaS products — you log in through a browser and the provider handles everything behind the scenes.",
      },
      {
        name: "Serverless",
        fullForm: "Not applicable — common industry term",
        explanation:
          "Serverless means you run code without managing servers. The cloud provider automatically runs your code when triggered and charges only for actual usage.",
        example:
          "A function that resizes uploaded photos only runs when someone uploads an image. You pay for those few seconds of processing, not for an idle server running 24/7.",
      },
    ],
  },
  {
    title: "DevOps & CI/CD",
    concepts: [
      {
        name: "CI",
        fullForm: "Continuous Integration",
        explanation:
          "CI is the practice of automatically building and testing code every time a developer makes a change. It catches problems early before they reach production.",
        example:
          "When a developer pushes code to GitHub, CI automatically runs tests. If a test fails, the team is notified immediately before the bug reaches users.",
      },
      {
        name: "CD",
        fullForm: "Continuous Deployment / Continuous Delivery",
        explanation:
          "CD automatically deploys tested code to production (deployment) or keeps it ready to release at any time (delivery). It reduces manual steps and human error during releases.",
        example:
          "After all tests pass, CD automatically publishes the new version of a mobile app to the app store without a developer manually uploading files.",
      },
      {
        name: "Docker",
        fullForm: "Not applicable — product name",
        explanation:
          "Docker packages an application and everything it needs into a container — a lightweight, portable box that runs the same way on any machine.",
        example:
          "A developer builds an app on their laptop inside a Docker container. The same container runs identically on a test server and in production without 'it works on my machine' problems.",
      },
      {
        name: "Kubernetes",
        fullForm: "Not applicable — product name (Greek for 'helmsman')",
        explanation:
          "Kubernetes (K8s) manages many containers across multiple servers. It handles scaling, restarts failed containers, and distributes traffic automatically.",
        example:
          "During a flash sale, Kubernetes detects high traffic on an e-commerce site and automatically starts more copies of the application to handle the load.",
      },
    ],
  },
  {
    title: "APIs & Integration",
    concepts: [
      {
        name: "API",
        fullForm: "Application Programming Interface",
        explanation:
          "An API is a set of rules that lets different software systems talk to each other. One application sends a request; the other sends back a response.",
        example:
          "A weather app on your phone uses an API to ask a weather service for today's temperature. The app does not store weather data itself — it fetches it through the API.",
      },
      {
        name: "REST",
        fullForm: "Representational State Transfer",
        explanation:
          "REST is a common style for building APIs using standard web methods (GET, POST, PUT, DELETE). It is simple, widely used, and easy to understand.",
        example:
          "GET /users/123 retrieves user details. POST /orders creates a new order. DELETE /users/123 removes a user. Each URL represents a resource.",
      },
      {
        name: "Webhook",
        fullForm: "Not applicable — common industry term",
        explanation:
          "A webhook is an automatic notification sent from one system to another when an event happens. Instead of constantly checking for updates, the system tells you when something changes.",
        example:
          "When a customer pays on Stripe, Stripe sends a webhook to your app saying 'payment received' — your app then automatically sends a confirmation email.",
      },
      {
        name: "Middleware",
        fullForm: "Not applicable — common industry term",
        explanation:
          "Middleware sits between different systems or layers and handles shared tasks like authentication, logging, or data transformation so each part does not have to do it alone.",
        example:
          "In an enterprise app, middleware checks if a user is logged in before every request reaches the business logic — developers write this check once, not in every feature.",
      },
    ],
  },
  {
    title: "Databases",
    concepts: [
      {
        name: "SQL",
        fullForm: "Structured Query Language",
        explanation:
          "SQL is the standard language for storing, retrieving, and managing data in relational databases. Data is organized in tables with rows and columns.",
        example:
          "SELECT name, salary FROM employees WHERE department = 'HR' — this SQL query fetches names and salaries of all HR employees from a database.",
      },
      {
        name: "NoSQL",
        fullForm: "Not Only SQL",
        explanation:
          "NoSQL databases store data in flexible formats (documents, key-value pairs, graphs) instead of rigid tables. They suit large-scale or rapidly changing data needs.",
        example:
          "A social media app stores each user's profile as a flexible document in MongoDB — adding new fields like 'bio' or 'profile video' does not require changing the entire database structure.",
      },
      {
        name: "CRUD",
        fullForm: "Create, Read, Update, Delete",
        explanation:
          "CRUD describes the four basic operations every application performs on data. Almost every feature you use involves one or more of these actions.",
        example:
          "In a to-do app: Create a new task, Read your task list, Update a task's status to 'done', Delete a completed task.",
      },
      {
        name: "Index",
        fullForm: "Not applicable — database term",
        explanation:
          "A database index is like a book's index — it helps the database find data quickly without scanning every row. It speeds up searches but uses extra storage.",
        example:
          "Searching 10 million customer records by email without an index takes minutes. With an index on the email column, the same search takes milliseconds.",
      },
    ],
  },
  {
    title: "System Design",
    concepts: [
      {
        name: "Load Balancer",
        fullForm: "Not applicable — common industry term",
        explanation:
          "A load balancer distributes incoming traffic across multiple servers so no single server gets overwhelmed. It improves performance and reliability.",
        example:
          "During a concert ticket sale, a load balancer spreads millions of visitors across 20 servers instead of crashing one server with all the traffic.",
      },
      {
        name: "Caching",
        fullForm: "Not applicable — common industry term",
        explanation:
          "Caching stores frequently accessed data in fast temporary storage so the system does not have to fetch it from a slow source every time.",
        example:
          "A news website caches today's headlines in memory. The first visitor triggers a database fetch; the next million visitors get the cached version instantly.",
      },
      {
        name: "Microservices",
        fullForm: "Not applicable — architecture pattern",
        explanation:
          "Microservices break a large application into small, independent services that each handle one business function. Teams can develop, deploy, and scale them separately.",
        example:
          "An e-commerce platform has separate services for payments, inventory, and shipping. If the shipping service fails, customers can still browse and pay for products.",
      },
      {
        name: "Monolith",
        fullForm: "Not applicable — architecture pattern",
        explanation:
          "A monolith is a single, unified application where all features are built and deployed together. It is simpler to start with but harder to scale as it grows.",
        example:
          "An early-stage startup builds everything — login, payments, and reporting — in one codebase. This is faster to build initially but becomes complex as the team grows.",
      },
    ],
  },
  {
    title: "Artificial Intelligence",
    concepts: [
      {
        name: "LLM",
        fullForm: "Large Language Model",
        explanation:
          "An LLM is an AI model trained on vast amounts of text to understand and generate human language. It can answer questions, write content, and assist with coding.",
        example:
          "ChatGPT and Claude are LLMs. When you ask 'Explain photosynthesis simply,' the model generates a clear answer based on patterns learned from training data.",
      },
      {
        name: "Prompt",
        fullForm: "Not applicable — AI term",
        explanation:
          "A prompt is the instruction or question you give to an AI model. Better prompts lead to better, more accurate responses.",
        example:
          "Instead of writing 'fix this,' a good prompt says: 'Review this Python function for bugs and suggest improvements. Keep the explanation simple.'",
      },
      {
        name: "RAG",
        fullForm: "Retrieval-Augmented Generation",
        explanation:
          "RAG combines AI with a search step. The system first finds relevant documents, then uses that information to generate accurate, grounded answers instead of guessing.",
        example:
          "A company chatbot uses RAG to search internal policy documents before answering employee questions — reducing wrong answers and citing actual company policies.",
      },
      {
        name: "AI Agent",
        fullForm: "Not applicable — AI term",
        explanation:
          "An AI agent is a system that can plan steps, use tools, and take actions to complete a goal — not just answer a single question. It can search, calculate, and execute tasks.",
        example:
          "You ask an agent: 'Find three Python tutorials and email me a summary.' It searches the web, reads the pages, writes a summary, and sends the email — all autonomously.",
      },
      {
        name: "Token",
        fullForm: "Not applicable — AI term",
        explanation:
          "A token is a small piece of text that AI models process. Words are split into tokens. AI pricing and usage limits are often based on token count.",
        example:
          "'Hello world' might be 2 tokens. A 10-page document might be 5,000 tokens. Knowing this helps estimate AI API costs before building a feature.",
      },
      {
        name: "Embedding",
        fullForm: "Not applicable — AI term",
        explanation:
          "An embedding converts text into a list of numbers that capture its meaning. Similar meanings produce similar numbers, enabling semantic search.",
        example:
          "'Dog' and 'puppy' have similar embeddings. A search for 'cute pets' can find documents about puppies even if the word 'pets' is not in the document.",
      },
      {
        name: "Fine-Tuning",
        fullForm: "Not applicable — AI term",
        explanation:
          "Fine-tuning takes a pre-trained AI model and trains it further on specific data to specialize it for a particular task, tone, or domain.",
        example:
          "A hospital fine-tunes a general AI model on medical records (anonymized) so it gives more accurate answers to clinical questions in the hospital's terminology.",
      },
      {
        name: "MCP",
        fullForm: "Model Context Protocol",
        explanation:
          "MCP is a standard way for AI applications to connect to external tools and data sources. It lets AI models discover and use tools through a common interface.",
        example:
          "An AI coding assistant uses MCP to connect to your file system, database, and calendar — so it can read your project files and schedule meetings through one standard protocol.",
      },
    ],
  },
];
