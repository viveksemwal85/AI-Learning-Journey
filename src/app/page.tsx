import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ProjectCard, CategoryCard, RoadmapPhaseCard } from "@/components/content/content-cards";
import {
  siteConfig,
  whyWebsiteExists,
  roadmapPhases,
  projects,
  interviewCategories,
  resourceCategories,
} from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import {
  Brain,
  Code,
  Database,
  MessageSquare,
  Sparkles,
  Bot,
} from "lucide-react";

export const metadata = createMetadata({
  title: siteConfig.name,
  description:
    "From Enterprise Applications to AI — Vivek Semwal documents his learning journey for professionals transitioning into AI.",
  path: "/",
});

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="h-6 w-6" />,
  Code: <Code className="h-6 w-6" />,
  Database: <Database className="h-6 w-6" />,
  MessageSquare: <MessageSquare className="h-6 w-6" />,
  Sparkles: <Sparkles className="h-6 w-6" />,
  Bot: <Bot className="h-6 w-6" />,
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-blue-50/50 to-white">
        <Container className="py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-blue-600">Learning in Public</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
              I am <strong className="font-semibold text-slate-900">{siteConfig.author.name}</strong>, a{" "}
              {siteConfig.author.role} documenting my journey of learning AI, automation, Python, and modern
              software development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/ai-journey">
                  Start Learning
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Why This Website Exists */}
      <Section id="why">
        <Container>
          <SectionHeading title={whyWebsiteExists.title} />
          <div className="max-w-3xl space-y-4">
            {whyWebsiteExists.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {/* Roadmap Preview */}
      <Section alt id="roadmap">
        <Container>
          <SectionHeading
            title="My AI Learning Roadmap"
            subtitle="A simple, phased approach — no rush, no overwhelm. One step at a time."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {roadmapPhases.map((phase) => (
              <RoadmapPhaseCard
                key={phase.phase}
                phase={phase.phase}
                title={phase.title}
                topics={phase.topics}
                status={phase.status}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="secondary">
              <Link href="/ai-journey">See Full Journey</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Projects Preview */}
      <Section id="projects">
        <Container>
          <SectionHeading
            title="Projects"
            subtitle="I learn by building. These are the projects I am working on or planning — shared openly, wins and struggles included."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="secondary">
              <Link href="/projects">All Projects</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Interview Prep Preview */}
      <Section alt id="interview">
        <Container>
          <SectionHeading
            title="Interview Preparation"
            subtitle="Notes I am collecting while preparing for AI-related roles — organized by topic, explained simply."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {interviewCategories.map((cat) => (
              <CategoryCard
                key={cat.slug}
                title={cat.title}
                description={cat.description}
                href={`/interview-notes/${cat.slug}`}
                icon={iconMap[cat.icon]}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="secondary">
              <Link href="/interview-notes">All Interview Notes</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Resources Preview */}
      <Section id="resources">
        <Container>
          <SectionHeading
            title="Learning Resources"
            subtitle="Books, courses, tools, and channels that have helped me — or that I plan to explore next."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {resourceCategories.slice(0, 4).map((cat) => (
              <div key={cat.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900">{cat.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{cat.description}</p>
                <ul className="mt-4 space-y-2">
                  {cat.items.slice(0, 3).map((item) => (
                    <li key={item.name} className="text-sm text-slate-600">
                      • {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="secondary">
              <Link href="/resources">All Resources</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* About Preview */}
      <Section alt id="about">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              title="About Me"
              subtitle={siteConfig.author.bio}
              centered
            />
            <dl className="mt-8 grid gap-4 text-left sm:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <dt className="text-sm font-medium text-slate-500">Name</dt>
                <dd className="mt-1 font-semibold text-slate-900">{siteConfig.author.name}</dd>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <dt className="text-sm font-medium text-slate-500">Role</dt>
                <dd className="mt-1 font-semibold text-slate-900">{siteConfig.author.role}</dd>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4 sm:col-span-2">
                <dt className="text-sm font-medium text-slate-500">Experience</dt>
                <dd className="mt-1 text-slate-900">{siteConfig.author.experience}</dd>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4 sm:col-span-2">
                <dt className="text-sm font-medium text-slate-500">Current Focus</dt>
                <dd className="mt-1 text-slate-900">{siteConfig.author.focus}</dd>
              </div>
            </dl>
            <Button asChild className="mt-8">
              <Link href="/about">Read More About Me</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Contact CTA */}
      <Section id="contact">
        <Container>
          <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-semibold text-slate-900">Let&apos;s Connect</h2>
            <p className="mx-auto mt-3 max-w-lg text-slate-600">
              Learning AI is better together. Connect with me on GitHub or visit my portfolio.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild>
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                  GitHub Profile
                </a>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/contact">Contact Page</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
