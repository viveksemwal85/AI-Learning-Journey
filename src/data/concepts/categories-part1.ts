import type { ConceptCategory } from "@/types/content";
import { c, NA } from "./helpers";

export const authenticationSecurity: ConceptCategory = {
  title: "Authentication & Security",
  concepts: [
    c(
      "User Management in Application",
      NA,
      "User management covers how an application creates, stores, updates, and removes user accounts. It includes registration, login, profile updates, password reset, and assigning roles.",
      "An HR portal lets employees sign up, update their contact details, and reset forgotten passwords — all handled by user management behind the scenes."
    ),
    c(
      "Session Management",
      NA,
      "Session management remembers that you are logged in while you use an application. It creates a session after login and expires it after a timeout or logout.",
      "You log into your company's timesheet system at 9 AM and work until lunch without re-entering your password — session management keeps you signed in safely.",
      {
        summary:
          "When you log in, the server creates a session — a temporary record that says 'this user is authenticated.' Your browser stores a session ID (usually in a cookie) and sends it back with every request so the server knows who you are without asking for your password again.",
        steps: [
          {
            step: 1,
            title: "User logs in",
            description:
              "You enter your username and password on the login page and submit the form.",
          },
          {
            step: 2,
            title: "Server validates credentials",
            description:
              "The server checks your username and password against the database. If they are correct, login is approved.",
          },
          {
            step: 3,
            title: "Server creates a session",
            description:
              "The server creates a unique session ID and stores it in server memory or a database, linked to your user account and login time.",
          },
          {
            step: 4,
            title: "Session ID sent to browser",
            description:
              "The server sends the session ID to your browser, usually as a cookie (a small file the browser saves and sends automatically).",
          },
          {
            step: 5,
            title: "Browser sends session ID on each request",
            description:
              "Every time you click a page or button, your browser automatically includes the session ID. You do not re-enter your password.",
          },
          {
            step: 6,
            title: "Server validates the session",
            description:
              "The server looks up the session ID. If it is valid and not expired, your request is allowed. If not, you are redirected to login.",
          },
          {
            step: 7,
            title: "Session ends",
            description:
              "The session ends when you log out, after a timeout (e.g. 30 minutes of inactivity), or when the server invalidates it for security.",
          },
        ],
      }
    ),
    c(
      "Identity Provider",
      "IdP — Identity Provider",
      "An identity provider is a trusted service that manages user identities and login. Applications delegate authentication to the IdP instead of building their own login system.",
      "Your company uses Microsoft Entra ID (Azure AD) as the identity provider. All internal apps use 'Sign in with Microsoft' instead of separate usernames and passwords."
    ),
    c(
      "OAuth",
      "Open Authorization",
      "OAuth lets you grant one application limited access to your account on another service without sharing your password.",
      "You click 'Login with Google' on a new app. Google asks 'Allow this app to see your email?' — OAuth handles this securely."
    ),
    c(
      "JWT",
      "JSON Web Token",
      "A JWT is a secure token that carries identity information. After login, the server issues a JWT that the client sends with each request to prove who they are.",
      "A mobile banking app stores a JWT after login. Every transfer request includes this token so the server knows the request is from you."
    ),
    c(
      "RBAC",
      "Role-Based Access Control",
      "RBAC assigns permissions based on job roles. Instead of setting permissions for each person individually, you assign roles like Admin, Manager, or Employee.",
      "In PeopleSoft, an HR Admin role can edit employee records, while an Employee role can only view their own payslip — permissions follow the role."
    ),
    c(
      "ABAC",
      "Attribute-Based Access Control",
      "ABAC grants access based on attributes — user department, location, time of day, or data sensitivity — not just roles.",
      "A doctor can view patient records only in their hospital, during work hours, and only for patients assigned to their department — rules based on multiple attributes."
    ),
  ],
};

export const apisCommunication: ConceptCategory = {
  title: "APIs & Communication",
  concepts: [
    c(
      "API",
      "Application Programming Interface",
      "An API is a set of rules that lets two software systems communicate. One system sends a request; the other returns a response.",
      "A weather app calls a weather service API to get today's temperature instead of storing weather data itself."
    ),
    c(
      "REST API",
      "Representational State Transfer API",
      "REST is a popular API style using standard web URLs and methods (GET, POST, PUT, DELETE) to work with data resources.",
      "GET /employees/101 fetches employee 101. POST /leave-requests creates a new leave request. Simple and widely used."
    ),
    c(
      "GraphQL",
      NA,
      "GraphQL lets clients request exactly the data they need in a single call. Unlike REST, you specify fields in the query instead of getting fixed responses.",
      "A mobile app requests only employee name and department in one GraphQL query — avoiding multiple REST calls and extra data."
    ),
    c(
      "gRPC",
      "Google Remote Procedure Call",
      "gRPC is a fast, efficient way for services to call each other, often used between internal microservices. It uses binary format instead of text.",
      "A payment service calls a fraud-check service via gRPC in milliseconds — faster than REST for high-volume internal communication."
    ),
    c(
      "WebSocket",
      NA,
      "WebSocket keeps an open, two-way connection between browser and server. Both sides can send messages anytime without reopening the connection.",
      "A live stock trading app uses WebSocket to push price updates to your screen instantly as they change — no need to refresh the page."
    ),
  ],
};

export const applicationFrameworks: ConceptCategory = {
  title: "Application Frameworks",
  concepts: [
    c(
      "Backend Framework",
      NA,
      "A backend framework provides ready-made structure for building server-side applications — routing, database access, security, and APIs — so developers don't start from scratch.",
      "FastAPI (Python), Spring Boot (Java), and .NET are backend frameworks used to build APIs and business logic for enterprise applications."
    ),
    c(
      "Frontend Framework",
      NA,
      "A frontend framework helps build the user interface of web applications with reusable components, state management, and efficient page updates.",
      "React and Next.js are frontend frameworks. They help build interactive pages like dashboards where data updates without full page reloads."
    ),
    c(
      "Mobile Framework",
      NA,
      "A mobile framework lets developers build phone apps for iOS and Android, often from a single codebase.",
      "React Native and Flutter let teams build one app that runs on both iPhone and Android — saving time compared to building two separate apps."
    ),
  ],
};
