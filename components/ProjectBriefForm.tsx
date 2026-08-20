"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { dictionary, type Locale } from "@/lib/site-data";

export function ProjectBriefForm({ locale, source = "website" }: { locale: Locale; source?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileNames, setFileNames] = useState<string[]>([]);
  const t = dictionary[locale].form;

  function selectFiles(event: ChangeEvent<HTMLInputElement>) {
    setFileNames(Array.from(event.target.files ?? []).map((file) => file.name));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 550);
  }

  return (
    <section
      className={`brief-section${source === "contacts" ? " brief-section-contacts" : ""}`}
      id="project-brief"
      aria-labelledby="brief-title"
    >
      <div className="brief-intro">
        <span className="section-index">{t.eyebrow}</span>
        <h2 id="brief-title">
          <span>{locale === "ru" ? "Расскажите" : "Tell us"}</span>
          <em>{locale === "ru" ? "о событии" : "about your event"}</em>
        </h2>
        <p>{t.intro}</p>
        <div className="brief-points" aria-label={locale === "ru" ? "Что рассказать" : "What to include"}>
          <span>{locale === "ru" ? "Формат" : "Format"}</span>
          <span>{locale === "ru" ? "Дата" : "Date"}</span>
          <span>{locale === "ru" ? "Площадка" : "Venue"}</span>
        </div>
      </div>
      <div className="brief-form-wrap">
        {submitted ? (
          <div className="form-success" role="status">
            <span>✓</span>
            <h3>{t.successTitle}</h3>
            <p>{t.success}</p>
            <button type="button" onClick={() => setSubmitted(false)}>
              {locale === "ru" ? "Отправить еще одну" : "Send another"}
            </button>
          </div>
        ) : (
          <form className="brief-form" onSubmit={submit}>
            <input type="hidden" name="source" value={source} />
            <div className="brief-form-heading form-wide">
              <span>{locale === "ru" ? "01 / Короткий бриф" : "01 / Short brief"}</span>
              <p>{locale === "ru" ? "Поля со звездочкой обязательны" : "Fields marked with an asterisk are required"}</p>
            </div>
            <label>
              <span>01 — {t.name} *</span>
              <input id="brief-name" name="name" autoComplete="name" required placeholder={locale === "ru" ? "Как к вам обращаться" : "How should we address you"} />
            </label>
            <label>
              <span>02 — {t.phone} *</span>
              <input name="phone" type="tel" autoComplete="tel" required placeholder="+7 900 000-00-00" />
            </label>
            <label>
              <span>03 — {t.contact}</span>
              <select name="contact" defaultValue="phone">
                <option value="phone">{locale === "ru" ? "Телефон" : "Phone"}</option>
                <option value="telegram">Telegram</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="email">Email</option>
              </select>
            </label>
            <label>
              <span>04 — {t.event}</span>
              <select name="event" defaultValue="">
                <option value="" disabled>{locale === "ru" ? "Выберите формат" : "Choose a format"}</option>
                <option value="corporate">{locale === "ru" ? "Бизнес-событие" : "Business event"}</option>
                <option value="wedding">{locale === "ru" ? "Свадьба / банкет" : "Wedding / dinner"}</option>
                <option value="private">{locale === "ru" ? "Частный праздник" : "Private celebration"}</option>
                <option value="kids">{locale === "ru" ? "Детский праздник" : "Children’s event"}</option>
                <option value="production">{locale === "ru" ? "Производство объекта" : "Custom production"}</option>
              </select>
            </label>
            <label>
              <span>05 — {t.city}</span>
              <input name="city" autoComplete="address-level2" placeholder={locale === "ru" ? "Где пройдет событие" : "Where is the event"} />
            </label>
            <label>
              <span>06 — {t.date}</span>
              <input name="date" type="date" />
            </label>
            <label className="form-wide">
              <span>07 — {t.message}</span>
              <textarea name="message" rows={4} placeholder={locale === "ru" ? "Формат, настроение, площадка и всё, что считаете важным" : "Format, mood, venue and anything else that matters"} />
            </label>
            <label className="file-field form-wide">
              <span>08 — {locale === "ru" ? "Референсы или техническое задание" : "References or brief"}</span>
              <input name="files" type="file" multiple accept="image/*,.pdf,.doc,.docx" onChange={selectFiles} />
              <span className="file-drop">
                <strong>+</strong>
                <span>{fileNames.length > 0 ? fileNames.join(" · ") : (locale === "ru" ? "Добавить файлы" : "Add files")}</span>
                <small>{locale === "ru" ? "Можно выбрать несколько изображений или документов" : "Choose multiple images or documents"}</small>
              </span>
            </label>
            <div className="form-submit form-wide">
              <p>{t.consent}</p>
              <button type="submit" disabled={loading}>
                <span>{loading ? (locale === "ru" ? "Отправляем" : "Sending") : t.submit}</span>
                <b aria-hidden="true">↗</b>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
