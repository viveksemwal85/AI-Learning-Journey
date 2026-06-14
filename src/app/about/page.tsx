import Link from "next/link";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Me",
  description:
    "Vivek Semwal — Development Manager with 15+ years in enterprise applications, now learning AI in public.",
  path: "/about",
});

const background = [
  "PeopleSoft HCM implementations and upgrades",
  "Enterprise integration (SAP, Oracle, Java, .NET)",
  "Leading development teams and delivery",
  "Requirements gathering and solution design",
  "Production support and incident management",
];

const learningNow = [
  "Python for automation and AI development",
  "Large Language Models (GPT, Claude) and prompt engineering",
  "RAG systems and vector databases",
  "AI agents and the Model Context Protocol (MCP)",
  "Modern deployment with Docker and cloud platforms",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={`Hi, I'm ${siteConfig.author.name}`}
        description={siteConfig.author.bio}
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl space-y-12">
            <div>
              <SectionHeading title="Who I Am" />
              <dl className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-200 p-4">
                  <dt className="text-sm text-slate-500">Role</dt>
                  <dd className="mt-1 font-semibold">{siteConfig.author.role}</dd>
                </div>
                <div className="rounded-lg border border-slate-200 p-4">
                  <dt className="text-sm text-slate-500">Experience</dt>
                  <dd className="mt-1 font-semibold">{siteConfig.author.experience}</dd>
                </div>
              </dl>
            </div>

            <div>
              <SectionHeading title="My Background" subtitle="What I bring from 15+ years in enterprise tech" />
              <ul className="space-y-2">
                {background.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading title="What I Am Learning Now" subtitle="My current focus areas in AI" />
              <ul className="space-y-2">
                {learningNow.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading title="Why I Built This Website" />
              <p className="text-base leading-relaxed text-slate-600">
                I could not find a learning resource that spoke to someone coming from PeopleSoft and enterprise
                Java — everything assumed I already knew Python and machine learning. So I decided to document
                my journey openly. If it helps even one person feel less lost, it is worth it.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/ai-journey">Follow My Journey</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
