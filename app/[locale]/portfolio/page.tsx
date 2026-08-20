import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DecorImage } from "@/components/DecorImage";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { ProjectBriefForm } from "@/components/ProjectBriefForm";
import { localizedMetadata } from "@/lib/metadata";
import { isLocale, projects } from "@/lib/site-data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return localizedMetadata(locale, locale === "ru" ? "Портфолио" : "Portfolio", locale === "ru" ? "Избранные проекты DECOPROART: частные, корпоративные и детские события." : "Selected DECOPROART projects for private, business and children’s events.", "/portfolio", "/img/c31dcd30-1376-4ab9-a167-ed27d5d74e96.jpg");
}

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <main>
      <section className="editorial-hero editorial-hero-portfolio">
        <div className="editorial-hero-copy">
          <span className="page-number">02 / {locale === "ru" ? "Портфолио" : "Portfolio"}</span>
          <h1>{locale === "ru" ? "События с" : "Events with"}<em>{locale === "ru" ? "характером" : "character"}</em></h1>
          <p>{locale === "ru" ? "Подборка пространств, в которых концепция, декор и свет работают как единая история — для бренда, семьи или большого сообщества." : "A selection of spaces where concept, decor and light work as one story — for a brand, a family or a large community."}</p>
          <div className="hero-service-notes">
            <span>{locale === "ru" ? "Бизнес" : "Business"}</span>
            <span>{locale === "ru" ? "Частные" : "Private"}</span>
            <span>{locale === "ru" ? "Детские" : "Children"}</span>
          </div>
          <a className="hero-primary-link" href="#selected-projects">{locale === "ru" ? "Смотреть проекты" : "View projects"}<b>↓</b></a>
        </div>
        <div className="editorial-hero-media portfolio-collage" aria-label={locale === "ru" ? "Избранные проекты" : "Selected projects"}>
          {projects.slice(0, 3).map((project, index) => (
            <a className={`portfolio-collage-item collage-item-${index + 1}`} href={`/${locale}/portfolio/${project.slug}`} key={project.slug}>
              <DecorImage src={project.cover} alt={project.title[locale]} priority={index < 2} sizes="(max-width: 760px) 100vw, 55vw" />
              <span><b>0{index + 1}</b>{project.title[locale]}</span>
            </a>
          ))}
          <div className="media-caption">DECOPROART / {locale === "ru" ? "ИЗБРАННЫЕ ПРОЕКТЫ" : "SELECTED WORK"}</div>
        </div>
      </section>
      <section className="portfolio-section section-pad" id="selected-projects"><PortfolioGrid locale={locale} /></section>
      <ProjectBriefForm locale={locale} source="portfolio" />
    </main>
  );
}
