import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DecorImage } from "@/components/DecorImage";
import { ProjectBriefForm } from "@/components/ProjectBriefForm";
import { localizedMetadata } from "@/lib/metadata";
import { isLocale, locales, posts } from "@/lib/site-data";

export function generateStaticParams() {
  return locales.flatMap((locale) => posts.map((post) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const post = posts.find((item) => item.slug === slug);
  if (!post) return {};
  return localizedMetadata(locale, post.title[locale], post.excerpt[locale], `/blog/${slug}`, post.image);
}

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  return (
    <main>
      <article className="article">
        <header className="article-header">
          <a href={`/${locale}/blog`}>← {locale === "ru" ? "Журнал" : "Journal"}</a>
          <div><span>{post.date}</span><span>DECOPROART / {locale === "ru" ? "Практика" : "Practice"}</span></div>
          <h1>{post.title[locale]}</h1>
          <p>{post.excerpt[locale]}</p>
        </header>
        <div className="article-cover"><DecorImage src={post.image} alt={post.title[locale]} priority sizes="100vw" /></div>
        <div className="article-body">
          <aside>{locale === "ru" ? "Сильное пространство начинается с идеи, которую можно почувствовать без объяснений." : "A powerful space begins with an idea that can be felt without explanation."}</aside>
          <div>{post.paragraphs[locale].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </article>
      <ProjectBriefForm locale={locale} source={`article:${post.slug}`} />
    </main>
  );
}
