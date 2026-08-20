import { dictionary, site, type Locale } from "@/lib/site-data";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = dictionary[locale];
  const links = [
    [t.nav.services, "services"],
    [t.nav.portfolio, "portfolio"],
    [t.nav.blog, "blog"],
    [t.nav.about, "about"],
    [t.nav.contacts, "contacts"],
  ];

  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <p>{locale === "ru" ? "Есть идея?" : "Have an idea?"}</p>
        <a href={`/${locale}/contacts#project-brief`}>
          {locale === "ru" ? "Давайте создадим событие" : "Let’s create an event"} <span>↗</span>
        </a>
      </div>
      <div className="footer-grid">
        <div>
          <a className="footer-brand" href={`/${locale}`}>DECOPROART</a>
          <p>{locale === "ru" ? "Архитектура событий" : "Event architecture"}</p>
        </div>
        <nav aria-label={locale === "ru" ? "Навигация в подвале" : "Footer navigation"}>
          {links.map(([label, path]) => <a key={path} href={`/${locale}/${path}`}>{label}</a>)}
        </nav>
        <div className="footer-contact">
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{locale === "ru" ? "Проекты по всей России и за рубежом" : "Projects in Russia and worldwide"}</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} DECOPROART</span>
        <span>decoproart.com</span>
      </div>
    </footer>
  );
}
