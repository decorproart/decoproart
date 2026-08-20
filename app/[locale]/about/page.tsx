import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DecorImage } from "@/components/DecorImage";
import { ProjectBriefForm } from "@/components/ProjectBriefForm";
import { localizedMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/site-data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return localizedMetadata(locale, locale === "ru" ? "О студии" : "About the studio", locale === "ru" ? "DECOPROART — команда концепции, производства и монтажа событийных декораций." : "DECOPROART is one team for event concept, production and installation.", "/about", "/img/e92ac341-27e1-448d-84b3-801b3fd36974.jpg");
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <main>
      <section className="about-hero">
        <div className="about-title"><span className="page-number">04 / {locale === "ru" ? "О нас" : "About"}</span><h1>{locale === "ru" ? "Идея должна" : "An idea must"}<em>{locale === "ru" ? "стать реальностью" : "become real"}</em></h1></div>
        <div className="about-image"><DecorImage src="/img/e92ac341-27e1-448d-84b3-801b3fd36974.jpg" alt={locale === "ru" ? "Команда на монтаже большой площадки" : "Team installing a large venue"} priority /></div>
      </section>
      <section className="about-manifesto section-pad">
        <span className="section-index">DECOPROART / {locale === "ru" ? "Подход" : "Approach"}</span>
        <h2>{locale === "ru" ? "Мы соединяем художественную идею и точную производственную работу." : "We bring artistic vision and precise production together."}</h2>
        <div className="manifesto-columns">
          <p>{locale === "ru" ? "Студия ведет проект целиком: понимает задачу, разрабатывает визуальный сценарий, проектирует конструкции и собирает пространство на площадке." : "The studio carries the whole project: understanding the brief, creating a visual scenario, engineering structures and assembling the space on site."}</p>
          <p>{locale === "ru" ? "Нам важна не сумма отдельных украшений, а единое впечатление — от первого взгляда до маленькой детали рядом с гостем." : "We care not about the sum of decorations, but about one coherent impression — from the first view to the smallest detail near a guest."}</p>
        </div>
      </section>
      <section className="capability-grid">
        {[
          ["01", locale === "ru" ? "Арт-дирекция" : "Art direction", locale === "ru" ? "Концепция, палитра, графика и сценарий пространства." : "Concept, palette, graphics and spatial narrative."],
          ["02", locale === "ru" ? "Конструкторская работа" : "Engineering", locale === "ru" ? "Точные решения для объектов, подвесов и сложных площадок." : "Precise solutions for objects, suspensions and complex venues."],
          ["03", locale === "ru" ? "Производство" : "Production", locale === "ru" ? "Декорации, текстиль, печать, свет и сборка в одном процессе." : "Decor, textiles, print, light and assembly in one process."],
          ["04", locale === "ru" ? "Монтаж" : "Installation", locale === "ru" ? "Логистика, техническая координация и работа на площадке." : "Logistics, technical coordination and on-site work."],
        ].map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
      </section>
      <section className="about-duo section-pad"><DecorImage src="/img/82c53442-dd63-4be1-bf1b-0fe2e11d915f.jpg" alt={locale === "ru" ? "Монтаж площадки" : "Venue installation"} /><DecorImage src="/img/69791555-18b3-483b-9acf-aad1beeab35a.jpg" alt={locale === "ru" ? "Текстильная потолочная инсталляция" : "Textile ceiling installation"} /></section>
      <ProjectBriefForm locale={locale} source="about" />
    </main>
  );
}
