"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { dictionary, site, type Locale } from "@/lib/site-data";

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = dictionary[locale];
  const alternate = locale === "ru" ? "en" : "ru";
  const alternatePath = pathname.replace(/^\/(ru|en)/, `/${alternate}`);
  const links = [
    [t.nav.services, "services"],
    [t.nav.portfolio, "portfolio"],
    [t.nav.blog, "blog"],
    [t.nav.about, "about"],
    [t.nav.contacts, "contacts"],
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <a className="brand" href={`/${locale}`} aria-label={`${site.name} — ${t.nav.home}`}>
          DECO<span>PRO</span>ART
        </a>
        <nav className="main-nav" aria-label={locale === "ru" ? "Основная навигация" : "Main navigation"}>
          {links.map(([label, path]) => {
            const href = `/${locale}/${path}`;
            return (
              <a key={path} href={href} aria-current={pathname === href ? "page" : undefined}>
                {label}
              </a>
            );
          })}
        </nav>
        <div className="header-tools">
          <a className="language-link" href={alternatePath} aria-label={locale === "ru" ? "English" : "Русский"}>
            {alternate.toUpperCase()}
          </a>
          <button
            className="menu-button"
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {t.menu}
          </button>
          <a className="header-action" href={`/${locale}/contacts#project-brief`}>
            {t.discuss}
          </a>
        </div>
      </header>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} id="mobile-menu" aria-hidden={!open}>
        <div className="mobile-menu-top">
          <span className="brand">DECO<span>PRO</span>ART</span>
          <button type="button" onClick={() => setOpen(false)}>{t.close} ×</button>
        </div>
        <nav aria-label={locale === "ru" ? "Мобильная навигация" : "Mobile navigation"}>
          <a href={`/${locale}`} onClick={() => setOpen(false)}>00 / {t.nav.home}</a>
          {links.map(([label, path], index) => (
            <a key={path} href={`/${locale}/${path}`} onClick={() => setOpen(false)}>
              0{index + 1} / {label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-contact">
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={`/${locale}/contacts#project-brief`} onClick={() => setOpen(false)}>{t.discuss} ↗</a>
        </div>
      </div>
    </>
  );
}
