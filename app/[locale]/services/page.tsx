import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DecorImage } from "@/components/DecorImage";
import { ProjectBriefForm } from "@/components/ProjectBriefForm";
import { localizedMetadata } from "@/lib/metadata";
import { isLocale, services } from "@/lib/site-data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return localizedMetadata(locale, locale === "ru" ? "Услуги" : "Services", locale === "ru" ? "Декор частных и деловых событий, детских праздников и собственное производство." : "Decor for private, business and children’s events with in-house production.", "/services");
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <main>
      <section className="editorial-hero editorial-hero-services">
        <div className="editorial-hero-copy">
          <span className="page-number">01 / {locale === "ru" ? "Услуги" : "Services"}</span>
          <h1>{locale === "ru" ? "Оформляем события" : "We design events"}<em>{locale === "ru" ? "от идеи до монтажа" : "from idea to installation"}</em></h1>
          <p>{locale === "ru" ? "Разрабатываем концепцию, создаём декорации в собственном производстве и собираем готовое пространство на площадке." : "We develop the concept, build the decor in-house and assemble the finished environment on site."}</p>
          <div className="hero-service-notes" aria-label={locale === "ru" ? "Что входит в работу" : "What is included"}>
            <span>{locale === "ru" ? "Концепция" : "Concept"}</span>
            <span>{locale === "ru" ? "Производство" : "Production"}</span>
            <span>{locale === "ru" ? "Монтаж" : "Installation"}</span>
          </div>
          <a className="hero-primary-link" href={`/${locale}/contacts#project-brief`}>{locale === "ru" ? "Обсудить событие" : "Discuss your event"}<b>↗</b></a>
        </div>
        <div className="editorial-hero-media">
          <DecorImage src="/img/services-hero-2026.png" alt={locale === "ru" ? "Современная событийная декорация со сценой, текстилем и светом" : "Contemporary event setting with stage, textiles and light"} priority sizes="(max-width: 760px) 100vw, 58vw" />
          <span className="media-caption">DECOPROART / {locale === "ru" ? "ПОЛНЫЙ ЦИКЛ" : "FULL SERVICE"}</span>
        </div>
      </section>

      <section className="services-intro section-pad">
        <span className="section-index">{locale === "ru" ? "Направления" : "Directions"}</span>
        <div>
          <h2>{locale === "ru" ? "Что мы можем создать" : "What we can create"}</h2>
          <p>{locale === "ru" ? "Подбираем состав работ под формат события: от одного выразительного объекта до комплексного оформления всей площадки." : "We tailor the scope to the event: from one expressive object to the complete design of an entire venue."}</p>
        </div>
      </section>

      <section className="services-editorial" aria-label={locale === "ru" ? "Наши услуги" : "Our services"}>
        {services.map((service, index) => (
          <article className="service-editorial" id={service.slug} key={service.slug}>
            <div className="service-picture"><DecorImage src={service.image} alt={service.title[locale]} priority={index < 2} /></div>
            <div className="service-content">
              <span className="service-number">{service.number} / {locale === "ru" ? "Услуга" : "Service"}</span>
              <h2>{service.title[locale]}</h2>
              <p>{service.description[locale]}</p>
              <ul>
                {service.features[locale].map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a className="solid-link" href={`/${locale}/contacts#project-brief`}>{locale === "ru" ? "Обсудить задачу" : "Discuss the brief"} ↗</a>
            </div>
          </article>
        ))}
      </section>

      <section className="process-detail section-pad">
        <div><span className="section-index">{locale === "ru" ? "Как строится работа" : "How it works"}</span><h2>{locale === "ru" ? "Один процесс. Одна ответственная команда." : "One process. One accountable team."}</h2></div>
        <ol>
          {(locale === "ru"
            ? ["Знакомимся и изучаем площадку", "Формируем концепцию и техническое решение", "Производим и готовим логистику", "Монтируем и сдаём готовое пространство"]
            : ["Meet and study the venue", "Develop concept and technical solution", "Produce and prepare logistics", "Install and hand over the finished space"]
          ).map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}
        </ol>
      </section>

      <ProjectBriefForm locale={locale} source="services" />
    </main>
  );
}
