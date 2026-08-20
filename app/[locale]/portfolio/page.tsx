import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { ProjectBriefForm } from "@/components/ProjectBriefForm";
import { localizedMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/site-data";

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
      <section className="page-hero page-hero-coral portfolio-hero">
        <span className="page-number">02 / {locale === "ru" ? "Портфолио" : "Portfolio"}</span>
        <h1>{locale === "ru" ? "События, которые" : "Events people"}<em>{locale === "ru" ? "помнят" : "remember"}</em></h1>
        <p>{locale === "ru" ? "Каждый проект — отдельная визуальная история, созданная для конкретного пространства и людей." : "Each project is a distinct visual story created for a specific place and people."}</p>
      </section>
      <section className="portfolio-section section-pad"><PortfolioGrid locale={locale} /></section>
      <ProjectBriefForm locale={locale} source="portfolio" />
    </main>
  );
}
