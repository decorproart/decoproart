import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DecorImage } from "@/components/DecorImage";
import { ProjectBriefForm } from "@/components/ProjectBriefForm";
import { localizedMetadata } from "@/lib/metadata";
import { isLocale, locales, projects } from "@/lib/site-data";

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((project) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return localizedMetadata(locale, project.title[locale], project.intro[locale], `/portfolio/${slug}`, project.cover);
}

export default async function ProjectPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <main>
      <section className="project-hero">
        <div className="project-hero-copy">
          <a href={`/${locale}/portfolio`}>← {locale === "ru" ? "Портфолио" : "Portfolio"}</a>
          <span>{project.format[locale]}</span>
          <h1>{project.title[locale]}</h1>
          <p>{project.intro[locale]}</p>
          <a className="solid-link" href="#project-brief">{locale === "ru" ? "Хочу обсудить похожий проект" : "Discuss a similar project"} ↘</a>
        </div>
        <div className="project-hero-image"><DecorImage src={project.cover} alt={project.title[locale]} priority /></div>
      </section>
      <section className="project-gallery section-pad" aria-label={locale === "ru" ? "Галерея проекта" : "Project gallery"}>
        {project.images.map((image, index) => (
          <figure key={image} className={`gallery-item gallery-item-${(index % 4) + 1}`}>
            <DecorImage src={image} alt={`${project.title[locale]} — ${index + 1}`} sizes="(max-width: 760px) 100vw, 58vw" priority={index < 2} />
            <figcaption>0{index + 1} / {project.title[locale]}</figcaption>
          </figure>
        ))}
      </section>
      <ProjectBriefForm locale={locale} source={`project:${project.slug}`} />
    </main>
  );
}
