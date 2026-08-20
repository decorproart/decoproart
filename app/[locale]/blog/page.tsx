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
      <section className="editorial-hero editorial-hero-journal">
        <div className="editorial-hero-copy journal-showcase-copy">
          <span className="page-number">03 / {locale === "ru" ? "Журнал" : "Journal"}</span>
          <h1>{locale === "ru" ? "Идеи, материалы" : "Ideas, materials"}<em>{locale === "ru" ? "и пространство" : "and space"}</em></h1>
          <p>{locale === "ru" ? "Коротко и по делу рассказываем о событийном дизайне: как появляется концепция, выбираются материалы и решаются сложные площадки." : "Clear notes on event design: how concepts emerge, materials are chosen and challenging venues are solved."}</p>
          <div className="journal-feature">
            <span>{locale === "ru" ? "Свежий материал" : "Latest story"}</span>
            <strong>{posts[0].title[locale]}</strong>
            <a className="hero-primary-link" href={`/${locale}/blog/${posts[0].slug}`}>
              {locale === "ru" ? "Читать" : "Read"}<b>↗</b>
            </a>
          </div>
        </div>
        <a className="editorial-hero-media journal-showcase-image" href={`/${locale}/blog/${posts[0].slug}`}>
          <DecorImage src="/img/journal-hero-beige-2026.png" alt={locale === "ru" ? "Материалы и макеты для разработки событийной концепции" : "Materials and models for an event design concept"} priority sizes="(max-width: 760px) 100vw, 58vw" />
          <span>{locale === "ru" ? "Новый материал" : "New story"} / {posts[0].date}</span>
        </a>
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
