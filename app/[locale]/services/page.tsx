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
      <section className="page-hero page-hero-petrol">
        <span className="page-number">01 / {locale === "ru" ? "Услуги" : "Services"}</span>
        <h1>{locale === "ru" ? "Создаём пространство" : "We create the space"}<em>{locale === "ru" ? "целиком" : "as a whole"}</em></h1>
        <p>{locale === "ru" ? "От камерной фотозоны до оформления большой площадки. Одна команда отвечает за идею, производство и монтаж." : "From an intimate photo setting to a large venue. One team owns the idea, production and installation."}</p>
      </section>

      <section className="services-editorial">
        {services.map((service, index) => (
          <article className="service-editorial" id={service.slug} key={service.slug}>
            <div className="service-number">{service.number}</div>
            <div className="service-picture"><DecorImage src={service.image} alt={service.title[locale]} priority={index === 0} /></div>
            <div className="service-content">
              <h2>{service.title[locale]}</h2>
              <p>{service.description[locale]}</p>
              <ul>
                {(locale === "ru"
                  ? ["Концепция и визуальное направление", "Конструкции и авторские объекты", "Свет, текстиль, графика и флористика", "Доставка, монтаж и демонтаж"]
                  : ["Concept and visual direction", "Structures and bespoke objects", "Lighting, textiles, graphics and florals", "Delivery, installation and dismantling"]
                ).map((item) => <li key={item}>{item}</li>)}
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
