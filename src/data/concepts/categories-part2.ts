import type { ConceptCategory } from "@/types/content";
import { c, NA } from "./helpers";

export const databasesStorage: ConceptCategory = {
  title: "Databases & Storage",
  concepts: [
    c(
      "SQL Database",
      "Structured Query Language Database",
      "A SQL database stores data in tables with rows and columns. It is reliable for structured data and supports complex queries with relationships.",
      "Oracle and PostgreSQL store employee records in tables — you can join employee, department, and salary tables to produce an HR report."
    ),
    c(
      "NoSQL Database",
      "Not Only SQL Database",
      "NoSQL databases store data in flexible formats like documents or key-value pairs. They suit large-scale apps with changing data structures.",
      "MongoDB stores a user's profile as a flexible JSON document — adding new fields like 'profile photo' does not require redesigning the whole database."
    ),
    c(
      "Vector Database",
      NA,
      "A vector database stores numerical representations (embeddings) of text or data and finds similar items by meaning, not exact keywords.",
      "An AI study assistant stores textbook paragraphs as vectors. When you ask a question, it finds the most relevant paragraphs by meaning."
    ),
    c(
      "Cache",
      NA,
      "A cache stores frequently used data in fast memory so the system does not fetch it from a slow database every time.",
      "A news homepage caches today's headlines. The first visitor triggers a database read; the next million visitors get instant cached results."
    ),
    c(
      "CDN",
      "Content Delivery Network",
      "A CDN stores copies of website content (images, videos, files) on servers around the world so users download from a nearby location.",
      "A user in Mumbai loads images from a Mumbai CDN server instead of a US server — the page loads much faster."
    ),
    c(
      "Object Storage",
      NA,
      "Object storage saves files as objects with metadata. It is designed for large amounts of unstructured data like images, videos, and backups.",
      "AWS S3 stores millions of uploaded profile photos. Each photo is an 'object' you retrieve by its unique name or URL."
    ),
    c(
      "File Storage",
      NA,
      "File storage organizes data in a traditional folder and file structure, similar to how files work on your computer.",
      "A shared team drive where project documents live in folders like /HR/Policies/2024/ — familiar and easy to browse."
    ),
    c(
      "Blob Storage",
      "Binary Large Object Storage",
      "Blob storage is designed for large binary files — images, videos, PDFs, backups — stored as single units without a folder hierarchy.",
      "A learning platform stores lecture video files as blobs. Students stream them directly without the system treating them as database rows."
    ),
    c(
      "Search Engine",
      NA,
      "A search engine indexes large amounts of text and returns relevant results quickly, often with ranking and filtering.",
      "Elasticsearch powers the search bar on an e-commerce site — type 'running shoes' and it finds matching products across millions of listings in milliseconds."
    ),
  ],
};

export const messagingEvents: ConceptCategory = {
  title: "Messaging, Queues & Events",
  concepts: [
    c(
      "Queue in Messaging",
      NA,
      "A message queue holds tasks or messages in order until a consumer processes them. It decouples senders from receivers and handles traffic spikes.",
      "When 1,000 employees submit timesheets at once, requests go into a queue and are processed one by one — the system does not crash."
    ),
    c(
      "Message Broker",
      NA,
      "A message broker is middleware that routes messages between applications. Producers send messages; the broker delivers them to the right consumers.",
      "RabbitMQ or Kafka act as message brokers — an order service sends 'order placed' and both inventory and shipping services receive it."
    ),
    c(
      "Event Streaming",
      NA,
      "Event streaming continuously captures and processes a stream of events as they happen in real time, storing them for replay or analysis.",
      "A bank streams every transaction event in real time. Fraud detection systems analyze the stream instantly to flag suspicious activity."
    ),
    c(
      "Pub/Sub",
      "Publish/Subscribe",
      "In pub/sub, publishers send messages to a topic without knowing who receives them. Subscribers listen to topics they care about.",
      "A 'New Job Posted' event is published. The email service, mobile app, and analytics system all subscribe and react independently."
    ),
    c(
      "Scheduler",
      NA,
      "A scheduler runs tasks automatically at specified times or intervals without manual intervention.",
      "A scheduler runs the payroll process every Friday at 6 PM and sends reminder emails to managers every Monday morning."
    ),
    c(
      "Cron Job",
      NA,
      "A cron job is a scheduled task that runs automatically based on a time pattern, like daily at midnight or every hour.",
      "A cron job runs every night at 2 AM to back up the database while users are not active."
    ),
    c(
      "Worker in Distributed Systems",
      NA,
      "A worker is a background process that picks up tasks from a queue and executes them — often on a separate server from the main application.",
      "When you upload a video, a worker process converts it to different formats in the background while you continue using the app."
    ),
  ],
};

export const notifications: ConceptCategory = {
  title: "Notifications & Communication",
  concepts: [
    c(
      "Notification Services",
      NA,
      "Notification services send alerts to users through one or more channels — in-app, email, SMS, or push — based on events in the system.",
      "When your leave request is approved, a notification service sends an in-app alert and an email at the same time."
    ),
    c(
      "Email Services",
      NA,
      "Email services handle sending, delivering, and tracking emails at scale — templates, delivery, and bounce handling.",
      "SendGrid or AWS SES sends password reset emails, newsletters, and order confirmations without you running your own mail server."
    ),
    c(
      "Push Notification",
      NA,
      "Push notifications are messages sent directly to a user's phone or browser even when the app is not open.",
      "Your food delivery app sends a push notification: 'Your order is 5 minutes away' — you see it on your phone lock screen."
    ),
  ],
};
