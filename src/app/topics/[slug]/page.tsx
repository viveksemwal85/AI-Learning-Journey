import { notFound } from "next/navigation";
import { getTopicBySlug, getAllTopicSlugs } from "@/data/topics";
import { Header } from "@/components/layout/header";
import { TopicPageContent } from "@/components/topic/topic-page-content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllTopicSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) return { title: "Topic Not Found" };
  return {
    title: `${topic.title} | AI Engineering Hub`,
    description: topic.subtitle,
  };
}

export default async function TopicPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) notFound();

  return (
    <>
      <Header title={topic.title} slug={topic.slug} />
      <main className="px-4 py-8 lg:px-8">
        <TopicPageContent topic={topic} />
      </main>
    </>
  );
}
