import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DecorImage } from "@/components/DecorImage";
import { ProjectBriefForm } from "@/components/ProjectBriefForm";
import { localizedMetadata } from "@/lib/metadata";
import { dictionary, isLocale, posts } from "@/lib/site-data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return localizedMetadata(locale, locale === "ru" ? "Журнал" : "Journal", locale === "ru" ? "Идеи, процессы и наблюдения команды DECOPROART о современном событийном дизайне." : "Ideas, process and observations from DECOPROART on contemporary event design.", "/blog");
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = dictionary[locale];
  return (
    <main>
      <section className="page-hero page-hero-paper journal-hero">
        <span className="page-number">03 / {locale === "ru" ? "Журнал" : "Journal"}</span>
        <h1>{locale === "ru" ? "Идеи и" : "Ideas and"}<em>{locale === "ru" ? "пространство" : "space"}</em></h1>
        <p>{locale === "ru" ? "Рассказываем, как рождаются концепции, работают материалы и строится атмосфера события." : "Stories about how concepts emerge, materials perform and event atmosphere is built."}</p>
      </section>
      <section className="journal-list section-pad">
        {posts.map((post, index) => (
          <article className="journal-card" key={post.slug}>
            <div className="journal-index">0{index + 1}<span>{post.date}</span></div>
            <a className="journal-image" href={`/${locale}/blog/${post.slug}`}><DecorImage src={post.image} alt={post.title[locale]} priority={index === 0} /></a>
            <div className="journal-copy">
              <h2><a href={`/${locale}/blog/${post.slug}`}>{post.title[locale]}</a></h2>
              <p>{post.excerpt[locale]}</p>
              <a className="text-link" href={`/${locale}/blog/${post.slug}`}>{t.read} ↗</a>
            </div>
          </article>
        ))}
      </section>
      <ProjectBriefForm locale={locale} source="journal" />
    </main>
  );
}
