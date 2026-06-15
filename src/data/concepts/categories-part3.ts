import type { ConceptCategory } from "@/types/content";
import { c, NA } from "./helpers";

export const observability: ConceptCategory = {
  title: "Observability & Monitoring",
  concepts: [
    c(
      "Logging",
      NA,
      "Logging records what happens in an application — errors, user actions, system events — so teams can troubleshoot problems later.",
      "When a payment fails, logs show the exact error, user ID, and timestamp — helping support find and fix the issue quickly."
    ),
    c(
      "Monitoring",
      NA,
      "Monitoring continuously watches system health — CPU usage, response times, error rates — and shows dashboards for operations teams.",
      "A dashboard shows the HR portal response time spiked to 5 seconds. The team investigates before users flood the help desk."
    ),
    c(
      "Observability",
      NA,
      "Observability is the ability to understand what is happening inside a system by examining logs, metrics, and traces together — especially in complex distributed systems.",
      "When checkout is slow, observability tools combine logs, metrics, and traces to pinpoint that the payment service — not the website — is the bottleneck."
    ),
    c(
      "Tracing",
      NA,
      "Tracing follows a single request as it travels through multiple services, showing each step and how long it took.",
      "A 'Submit Order' request is traced through the web server, inventory service, payment service, and email service — revealing which step is slowest."
    ),
    c(
      "Metrics",
      NA,
      "Metrics are numerical measurements collected over time — request count, error rate, memory usage — used for graphs and alerts.",
      "Metrics show API errors jumped from 0.1% to 5% after a deployment — triggering an immediate rollback decision."
    ),
    c(
      "Alerting",
      NA,
      "Alerting automatically notifies the team when metrics cross dangerous thresholds — by email, SMS, or Slack.",
      "An alert fires at 3 AM: 'Database disk 95% full.' The on-call engineer fixes it before the system goes down."
    ),
    c(
      "Health Check",
      NA,
      "A health check is a simple endpoint or test that confirms a service is running and ready to handle requests.",
      "A load balancer pings /health every 30 seconds. If the server stops responding, traffic is routed to healthy servers automatically."
    ),
    c(
      "Audit Log",
      NA,
      "An audit log records who did what and when — especially important for security, compliance, and investigations.",
      "An audit log shows that User ID 4521 viewed employee salary data on March 3 at 2:15 PM — required for compliance audits."
    ),
  ],
};

export const infrastructure: ConceptCategory = {
  title: "Infrastructure & System Design",
  concepts: [
    c(
      "Rate Limiting",
      NA,
      "Rate limiting restricts how many requests a user or system can make in a given time period. It prevents abuse and protects servers from overload.",
      "An API allows 100 requests per minute per user. Beyond that, requests are blocked — preventing one user from crashing the system."
    ),
    c(
      "Load Balancer",
      NA,
      "A load balancer distributes incoming traffic across multiple servers so no single server gets overwhelmed.",
      "During a flash sale, a load balancer spreads 1 million visitors across 20 web servers instead of crashing one server."
    ),
    c(
      "Reverse Proxy",
      NA,
      "A reverse proxy sits in front of servers and forwards client requests to the right backend server. It can also handle SSL, caching, and security.",
      "Nginx acts as a reverse proxy — users connect to Nginx, which forwards requests to the actual application servers behind it."
    ),
    c(
      "API Gateway",
      NA,
      "An API gateway is a single entry point for all API requests. It handles authentication, rate limiting, routing, and logging in one place.",
      "All mobile app requests go through one API gateway that checks login tokens before forwarding to payment, user, or order services."
    ),
    c(
      "Service Discovery",
      NA,
      "Service discovery helps services find each other automatically in dynamic environments where server addresses change frequently.",
      "In Kubernetes, when a new payment service instance starts, service discovery registers it so other services can find it without hardcoded IP addresses."
    ),
    c(
      "Microservices",
      NA,
      "Microservices split a large application into small, independent services — each handling one business function and deployable separately.",
      "An e-commerce platform has separate services for payments, inventory, and shipping. If shipping fails, customers can still browse and pay."
    ),
    c(
      "Monolith",
      NA,
      "A monolith is a single application where all features are built, deployed, and scaled together as one unit.",
      "An early PeopleSoft implementation runs as a monolith — HR, payroll, and benefits all in one deployable application."
    ),
    c(
      "Serverless",
      NA,
      "Serverless runs code without managing servers. The cloud provider starts your code when triggered and charges only for actual execution time.",
      "A function resizes uploaded images only when someone uploads — you pay for those few seconds, not for a server running 24/7."
    ),
    c(
      "High Availability",
      "HA — High Availability",
      "High availability means a system is designed to stay running with minimal downtime, usually through redundancy and failover.",
      "A banking app runs on two data centers. If one fails, the other takes over — customers barely notice an interruption."
    ),
    c(
      "Auto Scaling",
      NA,
      "Auto scaling automatically adds or removes servers based on traffic or load — more during peak hours, fewer when quiet.",
      "During exam result day, auto scaling adds 10 more servers. At night, it scales back down to save cost."
    ),
    c(
      "Failover",
      NA,
      "Failover automatically switches to a backup system when the primary system fails, keeping the service available.",
      "The primary database crashes. Failover switches to the backup database within seconds — users experience minimal disruption."
    ),
    c(
      "Distributed Cache",
      NA,
      "A distributed cache shares cached data across multiple servers so all instances of an application see the same fast data.",
      "Three web servers share a Redis distributed cache. When one server caches user session data, all servers can access it instantly."
    ),
  ],
};
