import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DecorImage } from "@/components/DecorImage";
import { ProjectBriefForm } from "@/components/ProjectBriefForm";
import { localizedMetadata } from "@/lib/metadata";
import { isLocale, site } from "@/lib/site-data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return localizedMetadata(locale, locale === "ru" ? "Контакты" : "Contacts", locale === "ru" ? "Свяжитесь с DECOPROART, чтобы обсудить оформление вашего события." : "Contact DECOPROART to discuss your event project.", "/contacts");
}

export default async function ContactsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <main>
      <section className="editorial-hero editorial-hero-contacts">
        <div className="editorial-hero-copy">
          <span className="page-number">05 / {locale === "ru" ? "Контакты" : "Contacts"}</span>
          <h1>{locale === "ru" ? "Начнём" : "Let’s start"}<em>{locale === "ru" ? "с разговора" : "with a conversation"}</em></h1>
          <p>{locale === "ru" ? "Расскажите о событии, дате и площадке. Мы зададим точные вопросы и предложим понятный следующий шаг." : "Tell us about the event, date and venue. We will ask the right questions and suggest a clear next step."}</p>
          <div className="contact-links">
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <a className="hero-primary-link" href="#project-brief">{locale === "ru" ? "Оставить заявку" : "Send a request"}<b>↘</b></a>
        </div>
        <div className="editorial-hero-media">
          <DecorImage src="/img/contacts-hero-beige-2026.png" alt={locale === "ru" ? "Стол для встречи с образцами материалов и флористикой" : "Consultation table with material samples and florals"} priority sizes="(max-width: 760px) 100vw, 58vw" />
          <span className="media-caption">DECOPROART / {locale === "ru" ? "ДАВАЙТЕ ЗНАКОМИТЬСЯ" : "LET’S TALK"}</span>
        </div>
      </section>
      <ProjectBriefForm locale={locale} source="contacts" />
    </main>
  );
}
