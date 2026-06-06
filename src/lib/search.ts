import Fuse from "fuse.js";
import type { TopicContent } from "@/types/topic";
import { topics } from "@/data/topics";

export interface SearchResult {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  match: string;
}

const searchableItems = topics.flatMap((topic) => {
  const items: { slug: string; title: string; subtitle: string; category: string; text: string }[] = [
    {
      slug: topic.slug,
      title: topic.title,
      subtitle: topic.subtitle,
      category: topic.category,
      text: [
        topic.title,
        topic.subtitle,
        topic.overview.what,
        topic.overview.why,
        topic.overview.where,
        topic.analogy,
        ...topic.tags,
        ...topic.components.map((c) => c.name + " " + c.purpose),
      ].join(" "),
    },
  ];
  if (topic.keyConcepts) {
    topic.keyConcepts.forEach((kc) => {
      items.push({
        slug: topic.slug,
        title: `${topic.title}: ${kc.term}`,
        subtitle: kc.definition,
        category: topic.category,
        text: kc.term + " " + kc.definition,
      });
    });
  }
  return items;
});

const fuse = new Fuse(searchableItems, {
  keys: ["title", "subtitle", "text", "category"],
  threshold: 0.4,
  includeScore: true,
});

export function searchTopics(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const results = fuse.search(query, { limit: 12 });
  const seen = new Set<string>();
  return results
    .filter((r) => {
      const key = r.item.slug + r.item.title;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .map((r) => ({
      slug: r.item.slug,
      title: r.item.title,
      subtitle: r.item.subtitle,
      category: r.item.category,
      match: r.item.text.slice(0, 120),
    }));
}

export function getAllTopicsForSearch(): TopicContent[] {
  return topics;
}
