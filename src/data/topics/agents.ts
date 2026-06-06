import type { TopicContent } from "@/types/topic";
import { component, defaultArchitecture, defaultProjectUsage, interview, quiz, workflow } from "./helpers";

export const agenticAI: TopicContent = {
  slug: "agentic-ai",
  title: "Agentic AI",
  subtitle: "Build AI systems that plan, reason, and act autonomously",
  icon: "Bot",
  category: "Agents",
  estimatedTime: "55 min",
  difficulty: "intermediate",
  tags: ["planning", "reasoning", "tool use", "memory", "reflection"],
  overview: {
    what: "Agentic AI refers to systems where LLMs autonomously plan tasks, use tools, maintain memory, and iterate toward goals.",
    why: "Simple prompt-response isn't enough for complex workflows. Agents break tasks into steps, use external tools, and self-correct.",
    where: "Customer support automation, code generation, research assistants, personal AI assistants, and the Student AI Mentor.",
  },
  analogy: "An agent is like a human employee who can think, decide, and perform actions — they don't just answer questions, they execute multi-step workflows using available tools.",
  mermaidDiagram: `flowchart TD
    A[User Goal] --> B[Agent Planner]
    B --> C{Need Tool?}
    C -->|Yes| D[Tool Selection]
    D --> E[Execute Tool]
    E --> F[Observe Result]
    F --> G[Memory Update]
    G --> H{Goal Met?}
    H -->|No| I[Reflection]
    I --> B
    H -->|Yes| J[Final Response]
    C -->|No| K[Direct LLM Response]
    K --> J`,
  flowNodes: [
    { id: "goal", label: "User Goal", type: "input" },
    { id: "plan", label: "Planner" },
    { id: "tools", label: "Tool Use" },
    { id: "memory", label: "Memory" },
    { id: "reflect", label: "Reflection" },
    { id: "output", label: "Response", type: "output" },
  ],
  flowEdges: [
    { source: "goal", target: "plan" },
    { source: "plan", target: "tools" },
    { source: "tools", target: "memory" },
    { source: "memory", target: "reflect" },
    { source: "reflect", target: "plan", label: "iterate" },
    { source: "reflect", target: "output" },
  ],
  components: [
    component("Planning", "Decomposes goals into actionable steps", {
      inputs: ["User goal", "Available tools", "Context"],
      outputs: ["Step-by-step plan"],
      benefits: ["Handles complex multi-step tasks"],
      bestPractices: ["Re-plan on failure", "Limit max iterations"],
    }),
    component("Reasoning", "Chain-of-thought analysis before action", {
      inputs: ["Current state", "Plan step"],
      outputs: ["Reasoning trace", "Action decision"],
      benefits: ["Better decision quality", "Debuggable behavior"],
    }),
    component("Tool Use", "Invokes external APIs, databases, and services", {
      inputs: ["Tool name", "Parameters"],
      outputs: ["Tool execution results"],
      benefits: ["Extends beyond LLM knowledge"],
      bestPractices: ["Validate tool inputs", "Handle errors gracefully"],
    }),
    component("Memory", "Stores conversation history and learned facts", {
      inputs: ["Interactions", "Tool results"],
      outputs: ["Context for future steps"],
      benefits: ["Continuity across sessions"],
      bestPractices: ["Summarize long histories", "Use vector memory for retrieval"],
    }),
    component("Reflection", "Evaluates progress and adjusts strategy", {
      inputs: ["Current results", "Original goal"],
      outputs: ["Continue/replan/complete decision"],
      benefits: ["Self-correction capability"],
      bestPractices: ["Set max reflection loops", "Log reasoning for debugging"],
    }),
  ],
  workflow: workflow([
    { title: "Receive Goal", description: "User provides task or question" },
    { title: "Plan", description: "Agent decomposes into sub-tasks" },
    { title: "Execute", description: "Run next step — LLM call or tool use" },
    { title: "Observe", description: "Process tool results or LLM output" },
    { title: "Reflect", description: "Check if goal is met, replan if needed" },
    { title: "Respond", description: "Deliver final result to user" },
  ]),
  realExample: {
    question: "Help me prepare for a Google SWE interview next week",
    steps: [
      { label: "Planning", content: "Agent creates plan: research company → identify topics → create study schedule → find practice questions" },
      { label: "Tool Use", content: "Web search tool finds Google interview patterns; Calendar tool schedules study blocks" },
      { label: "Memory", content: "Stores user's skill level and weak areas from resume analysis" },
      { label: "Reflection", content: "Checks if plan covers all areas, adds system design prep" },
    ],
    response: "Created a 7-day study plan covering algorithms (Mon-Wed), system design (Thu), and behavioral prep (Fri). Scheduled 2hr daily blocks in your calendar.",
  },
  codeExamples: [
    {
      title: "LangGraph Agent",
      language: "python",
      code: `from langgraph.prebuilt import create_react_agent
from langchain_openai import ChatOpenAI
from langchain.tools import tool

@tool
def search_jobs(company: str) -> str:
    """Search for job openings at a company."""
    return f"Found 5 SWE roles at {company}"

@tool
def schedule_study(topic: str, hours: int) -> str:
    """Schedule study time for a topic."""
    return f"Scheduled {hours}h for {topic}"

agent = create_react_agent(
    ChatOpenAI(model="gpt-4o"),
    tools=[search_jobs, schedule_study]
)

result = agent.invoke({
    "messages": [("user", "Prepare me for Google SWE interview")]
})`,
    },
    {
      title: "Agent with Memory",
      language: "python",
      code: `from langgraph.checkpoint.memory import MemorySaver

memory = MemorySaver()
agent = create_react_agent(
    llm, tools, checkpointer=memory
)

config = {"configurable": {"thread_id": "student-123"}}
# Conversation persists across invocations
agent.invoke({"messages": [("user", "I studied algorithms yesterday")]}, config)
agent.invoke({"messages": [("user", "What should I study today?")]}, config)`,
    },
  ],
  architectureDeepDive: defaultArchitecture(),
  interviewQuestions: [
    interview("What makes an AI system 'agentic'?", "Autonomy in planning, tool use, memory, and iteration — the system acts toward goals rather than single-shot responses.", "basic"),
    interview("How do you prevent infinite agent loops?", "Set max iterations, implement reflection with termination criteria, use timeouts, and monitor token usage.", "intermediate"),
    interview("Compare ReAct vs Plan-and-Execute patterns.", "ReAct interleaves reasoning and action step-by-step. Plan-and-Execute creates full plan first, then executes. Plan-and-Execute is better for predictable workflows.", "advanced"),
  ],
  quiz: [
    quiz("ag1", "Agent reflection enables:", ["Faster inference", "Self-correction and replanning", "Lower token cost", "Image processing"], 1, "Reflection lets agents evaluate progress and adjust strategy."),
    quiz("ag2", "Tool use allows agents to:", ["Train new models", "Access external data and APIs", "Replace vector databases", "Skip embedding"], 1, "Tools extend agent capabilities beyond LLM knowledge."),
  ],
  projectUsage: defaultProjectUsage("Agents orchestrate all intelligent workflows in the Student AI Mentor.", [
    { feature: "Career Guidance", usage: "Agent researches jobs and creates action plans" },
    { feature: "Study Planner", usage: "Agent schedules and adapts study plans" },
    { feature: "Interview Prep", usage: "Agent conducts mock interviews with feedback" },
  ]),
};

export const multiAgentSystems: TopicContent = {
  slug: "multi-agent-systems",
  title: "Multi-Agent Systems",
  subtitle: "Orchestrate teams of specialized AI agents",
  icon: "Users",
  category: "Agents",
  estimatedTime: "55 min",
  difficulty: "advanced",
  tags: ["supervisor", "crewai", "langgraph", "agent communication"],
  overview: {
    what: "Multi-agent systems coordinate multiple specialized AI agents that collaborate, delegate, and communicate to solve complex tasks.",
    why: "Single agents struggle with complex workflows. Specialized agents (researcher, writer, reviewer) produce better results through division of labor.",
    where: "Software development teams, research automation, content pipelines, enterprise workflows, and complex AI platforms.",
  },
  analogy: "Like a hospital with specialists — the general physician (supervisor) coordinates cardiologist, radiologist, and surgeon (specialized agents) rather than one doctor doing everything.",
  mermaidDiagram: `flowchart TD
    A[User Request] --> B[Supervisor Agent]
    B --> C[Research Agent]
    B --> D[Writer Agent]
    B --> E[Reviewer Agent]
    C --> F[Shared Memory]
    D --> F
    E --> F
    F --> G[Supervisor Decision]
    G -->|More work| B
    G -->|Complete| H[Final Output]`,
  components: [
    component("Supervisor Agent", "Orchestrates and delegates tasks to worker agents", {
      inputs: ["User request", "Agent capabilities"],
      outputs: ["Task assignments", "Final synthesized result"],
      benefits: ["Centralized coordination"],
      bestPractices: ["Clear delegation criteria", "Limit delegation depth"],
    }),
    component("Worker Agents", "Specialized agents for specific sub-tasks", {
      inputs: ["Assigned task", "Shared context"],
      outputs: ["Specialized results"],
      benefits: ["Expert-level sub-task quality"],
      bestPractices: ["Single responsibility per agent", "Clear input/output contracts"],
    }),
    component("Shared Memory", "Communication channel between agents", {
      inputs: ["Agent outputs"],
      outputs: ["Shared context for all agents"],
      benefits: ["Consistent information", "Avoid redundant work"],
    }),
    component("Agent Communication", "Message passing between agents", {
      inputs: ["Messages", "Agent IDs"],
      outputs: ["Routed communications"],
      benefits: ["Flexible collaboration patterns"],
      bestPractices: ["Structured message formats", "Audit trail logging"],
    }),
  ],
  workflow: workflow([
    { title: "Task Reception", description: "Supervisor receives complex user request" },
    { title: "Decomposition", description: "Break into sub-tasks for specialized agents" },
    { title: "Delegation", description: "Assign sub-tasks to appropriate agents" },
    { title: "Execution", description: "Agents work in parallel or sequence" },
    { title: "Synthesis", description: "Supervisor combines agent outputs" },
    { title: "Quality Check", description: "Reviewer agent validates final output" },
  ]),
  realExample: {
    question: "Create a comprehensive study guide for AWS Solutions Architect exam",
    steps: [
      { label: "Supervisor", content: "Delegates: Research Agent → gather exam topics; Content Agent → write guide; Quiz Agent → create practice questions" },
      { label: "Research Agent", content: "Scrapes AWS docs, finds exam blueprint, identifies key services" },
      { label: "Content Agent", content: "Writes structured guide with diagrams for each domain" },
      { label: "Quiz Agent", content: "Generates 50 practice questions with explanations" },
    ],
    response: "Complete 45-page study guide with 6 domain sections, architecture diagrams, and 50 practice questions — produced by 3 specialized agents in 3 minutes.",
  },
  codeExamples: [
    {
      title: "CrewAI Multi-Agent",
      language: "python",
      code: `from crewai import Agent, Task, Crew

researcher = Agent(
    role="Research Analyst",
    goal="Find comprehensive exam topics",
    backstory="Expert at analyzing certification requirements",
    tools=[search_tool]
)

writer = Agent(
    role="Content Writer",
    goal="Create clear study materials",
    backstory="Technical writer specializing in cloud certifications"
)

crew = Crew(
    agents=[researcher, writer],
    tasks=[
        Task(description="Research AWS SAA exam topics", agent=researcher),
        Task(description="Write study guide from research", agent=writer)
    ],
    process="sequential"
)

result = crew.kickoff()`,
    },
    {
      title: "LangGraph Supervisor Pattern",
      language: "python",
      code: `from langgraph_supervisor import create_supervisor

supervisor = create_supervisor(
    agents=[research_agent, writer_agent, reviewer_agent],
    model=ChatOpenAI(model="gpt-4o"),
    prompt="Coordinate agents to create study materials"
)

app = supervisor.compile()
result = app.invoke({"messages": [("user", "Create ML study guide")]})`,
    },
  ],
  architectureDeepDive: defaultArchitecture(),
  interviewQuestions: [
    interview("When to use multi-agent vs single agent?", "Multi-agent when tasks need distinct expertise, parallel execution, or quality checks. Single agent for simpler, linear workflows.", "basic"),
    interview("Explain the supervisor pattern.", "A coordinator agent decomposes tasks, assigns to workers, monitors progress, and synthesizes results. Workers are specialized for sub-tasks.", "intermediate"),
    interview("How do you handle agent conflicts?", "Supervisor mediates, define clear ownership boundaries, use shared memory with versioning, implement voting/consensus for disagreements.", "advanced"),
  ],
  quiz: [
    quiz("ma1", "Supervisor pattern uses:", ["One agent for everything", "Coordinator + specialized workers", "No communication", "Only vector search"], 1, "Supervisor delegates to specialized worker agents."),
    quiz("ma2", "CrewAI agents collaborate via:", ["Direct model training", "Task assignment and shared context", "Database migrations", "Image processing"], 1, "CrewAI assigns tasks to agents with defined roles and goals."),
  ],
  projectUsage: defaultProjectUsage("Multi-agent architecture powers the Student AI Mentor's complex workflows.", [
    { feature: "Resume Analysis", usage: "Analyzer + Advisor + Formatter agents collaborate" },
    { feature: "Interview Prep", usage: "Interviewer + Evaluator + Feedback agents work together" },
    { feature: "Study Guide Generation", usage: "Research + Write + Quiz agents produce materials" },
  ]),
};
