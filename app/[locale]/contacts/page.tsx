import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
      <section className="contact-hero">
        <div className="contact-title"><span className="page-number">05 / {locale === "ru" ? "Контакты" : "Contacts"}</span><h1>{locale === "ru" ? "Начнём" : "Let’s start"}<em>{locale === "ru" ? "с разговора" : "with a conversation"}</em></h1></div>
        <div className="contact-direct">
          <p>{locale === "ru" ? "Позвоните или напишите — мы уточним задачу и предложим следующий шаг." : "Call or write — we will clarify the brief and suggest the next step."}</p>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <div><a href="#project-brief">{locale === "ru" ? "Оставить заявку" : "Send a request"} ↘</a></div>
        </div>
      </section>
      <ProjectBriefForm locale={locale} source="contacts" />
    </main>
  );
}
