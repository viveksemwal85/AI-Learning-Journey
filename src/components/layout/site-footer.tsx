import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/github";
import { siteConfig, navigation } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-slate-900">{siteConfig.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {siteConfig.footer}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Quick Links</p>
            <ul className="mt-3 space-y-2">
              {navigation.slice(1, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Connect</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:underline"
                >
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:underline"
                >
                  Portfolio
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {siteConfig.author.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
