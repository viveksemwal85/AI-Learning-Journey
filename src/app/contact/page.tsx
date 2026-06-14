import { ExternalLink, Mail } from "lucide-react";
import { GitHubIcon } from "@/components/icons/github";
import { Container, Section } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description: "Connect with Vivek Semwal — GitHub, portfolio, and social links.",
  path: "/contact",
});

const links = [
  {
    label: "GitHub",
    description: "See my code, projects, and open-source contributions.",
    url: siteConfig.links.github,
    icon: GitHubIcon,
  },
  {
    label: "Portfolio",
    description: "My professional portfolio and background.",
    url: siteConfig.links.portfolio,
    icon: ExternalLink,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="I am learning in public and happy to connect with others on the same journey — especially fellow enterprise professionals moving into AI."
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-2xl space-y-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <link.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{link.label}</p>
                  <p className="mt-1 text-sm text-slate-600">{link.description}</p>
                  <p className="mt-2 text-sm font-medium text-blue-600">{link.url.replace("https://", "")}</p>
                </div>
              </a>
            ))}

            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <Mail className="mx-auto h-8 w-8 text-slate-400" aria-hidden="true" />
              <p className="mt-3 font-medium text-slate-900">Email coming soon</p>
              <p className="mt-1 text-sm text-slate-600">
                For now, connect via GitHub. I read messages and issues there.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
