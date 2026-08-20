"use client";

import { useState } from "react";
import { DecorImage } from "@/components/DecorImage";
import { dictionary, projects, type Locale } from "@/lib/site-data";

export function PortfolioGrid({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState("all");
  const t = dictionary[locale];
  const filters = [
    ["all", locale === "ru" ? "Все" : "All"],
    ["corporate", locale === "ru" ? "Бизнес" : "Business"],
    ["private", locale === "ru" ? "Частные" : "Private"],
    ["kids", locale === "ru" ? "Детские" : "Children"],
  ];
  const visible = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  return (
    <>
      <div className="portfolio-filters" role="group" aria-label={locale === "ru" ? "Фильтр проектов" : "Project filter"}>
        {filters.map(([value, label]) => (
          <button key={value} type="button" className={filter === value ? "active" : ""} onClick={() => setFilter(value)}>
            {label}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visible.map((project, index) => (
          <article className="project-card" key={project.slug}>
            <a href={`/${locale}/portfolio/${project.slug}`} className="project-image-link">
              <DecorImage src={project.cover} alt={project.title[locale]} priority={index < 2} />
              <span>{t.viewProject} ↗</span>
            </a>
            <div className="project-meta">
              <span>0{index + 1}</span>
              <div>
                <p>{project.format[locale]}</p>
                <h2><a href={`/${locale}/portfolio/${project.slug}`}>{project.title[locale]}</a></h2>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
