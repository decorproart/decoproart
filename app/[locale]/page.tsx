import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DecorImage } from "@/components/DecorImage";
import { ProjectBriefForm } from "@/components/ProjectBriefForm";
import { localizedMetadata } from "@/lib/metadata";
import { dictionary, isLocale, projects, services } from "@/lib/site-data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return localizedMetadata(
    locale,
    locale === "ru" ? "Авторские декорации и архитектура событий" : "Bespoke decor and event architecture",
    locale === "ru"
      ? "Создаем декорации и пространства для событий: концепция, собственное производство и монтаж."
      : "We create event environments from concept through in-house production and installation.",
  );
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = dictionary[locale];

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow">
            {locale === "ru" ? "Декор · Производство · Монтаж" : "Decor · Production · Installation"}
          </div>
          <h1 id="hero-title">
            {locale === "ru" ? "Архитектура" : "Architecture"}
            <em>{locale === "ru" ? "событий" : "of events"}</em>
          </h1>
          <div className="hero-lead">
            <p>
              {locale === "ru"
                ? "Создаём авторские декорации и пространства, которые становятся главным впечатлением вашего события."
                : "We create bespoke decor and spaces that become the defining impression of your event."}
            </p>
            <a className="arrow-link" href={`/${locale}/contacts#project-brief`} aria-label={t.discuss}>↗</a>
          </div>
        </div>
        <div className="hero-visual">
          <DecorImage src="/img/c31dcd30-1376-4ab9-a167-ed27d5d74e96.jpg" alt={locale === "ru" ? "Авторская фотозона в красно-черной палитре" : "Bespoke red and black photo setting"} priority />
          <div className="image-index">
            {locale === "ru" ? "Проект / 01" : "Project / 01"}
            <strong>Cruella Night</strong>
          </div>
        </div>
      </section>

      <section className="intro-grid section-pad">
        <div className="section-index">01 / {locale === "ru" ? "Направления" : "What we do"}</div>
        <div>
          <h2 className="display-title">
            {locale === "ru" ? "Декор — это не фон." : "Decor is not a backdrop."}
            <span>{locale === "ru" ? "Это драматургия пространства." : "It is spatial storytelling."}</span>
          </h2>
        </div>
      </section>

      <section className="service-list-home">
        {services.map((service) => (
          <article key={service.slug} className="service-line">
            <span>{service.number}</span>
            <h3>{service.title[locale]}</h3>
            <p>{service.description[locale]}</p>
            <a href={`/${locale}/services#${service.slug}`} aria-label={`${service.title[locale]} — ${t.discuss}`}>↗</a>
          </article>
        ))}
      </section>

      <section className="production-statement">
        <div className="production-image">
          <DecorImage src="/img/e92ac341-27e1-448d-84b3-801b3fd36974.jpg" alt={locale === "ru" ? "Монтаж масштабного пространства" : "Large-scale venue installation"} />
        </div>
        <div className="production-copy">
          <span className="section-index">02 / {locale === "ru" ? "Собственное производство" : "In-house production"}</span>
          <h2>{locale === "ru" ? "От эскиза до последнего луча света" : "From first sketch to the final beam of light"}</h2>
          <p>
            {locale === "ru"
              ? "Мы проектируем, производим и монтируем сами. Поэтому идея не теряется между подрядчиками, а каждая деталь работает на общий образ."
              : "We design, build and install with one team. The idea stays intact, and every detail serves the complete image."}
          </p>
          <a className="text-link" href={`/${locale}/about`}>{locale === "ru" ? "Как мы работаем" : "How we work"} ↗</a>
        </div>
      </section>

      <section className="featured section-pad">
        <div className="section-heading-row">
          <span className="section-index">03 / {locale === "ru" ? "Избранное" : "Selected work"}</span>
          <a className="text-link" href={`/${locale}/portfolio`}>{t.viewAll} ↗</a>
        </div>
        <div className="featured-grid">
          {projects.slice(0, 4).map((project, index) => (
            <article className={`featured-card featured-${index + 1}`} key={project.slug}>
              <a href={`/${locale}/portfolio/${project.slug}`}>
                <DecorImage src={project.cover} alt={project.title[locale]} />
                <div>
                  <span>0{index + 1} / {project.format[locale]}</span>
                  <h3>{project.title[locale]}</h3>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="process-band">
        <div className="section-index">04 / {locale === "ru" ? "Процесс" : "Process"}</div>
        {[
          ["01", locale === "ru" ? "Разговор" : "Conversation", locale === "ru" ? "Слушаем задачу, площадку и ожидания." : "We listen to the brief, venue and expectations."],
          ["02", locale === "ru" ? "Концепция" : "Concept", locale === "ru" ? "Собираем сценарий пространства и визуальный язык." : "We shape the spatial scenario and visual language."],
          ["03", locale === "ru" ? "Производство" : "Production", locale === "ru" ? "Создаем конструкции, графику, свет и детали." : "We build structures, graphics, light and details."],
          ["04", locale === "ru" ? "Монтаж" : "Installation", locale === "ru" ? "Собираем пространство точно по проекту." : "We assemble the environment exactly as designed."],
        ].map(([number, title, text]) => (
          <div className="process-item" key={number}>
            <span>{number}</span><h3>{title}</h3><p>{text}</p>
          </div>
        ))}
      </section>

      <ProjectBriefForm locale={locale} source="home" />
    </main>
  );
}
