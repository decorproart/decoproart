"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { DecorImage } from "@/components/DecorImage";

type ProjectGalleryProps = {
  images: readonly string[];
  title: string;
  locale: "ru" | "en";
};

export function ProjectGallery({ images, title, locale }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrevious = useCallback(() => setActiveIndex((current) => current === null ? null : (current - 1 + images.length) % images.length), [images.length]);
  const showNext = useCallback(() => setActiveIndex((current) => current === null ? null : (current + 1) % images.length), [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement as HTMLElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [isOpen, close, showNext, showPrevious]);

  return (
    <>
      <section className="project-gallery section-pad" aria-label={locale === "ru" ? "Галерея проекта" : "Project gallery"}>
        {images.map((image, index) => (
          <figure key={image} className="gallery-item">
            <button
              className="gallery-open"
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={locale === "ru" ? `Открыть фотографию ${index + 1} в полном размере` : `Open photo ${index + 1} full size`}
            >
              <DecorImage src={image} alt={`${title} — ${index + 1}`} sizes="(max-width: 760px) 100vw, 50vw" priority={index < 2} />
              <span className="gallery-expand" aria-hidden="true">↗</span>
            </button>
            <figcaption>0{index + 1} / {title}</figcaption>
          </figure>
        ))}
      </section>

      {activeIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={locale === "ru" ? "Просмотр фотографии" : "Photo viewer"}>
          <div className="lightbox-bar">
            <span>{String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
            <span>{title}</span>
            <button ref={closeButtonRef} type="button" onClick={close} aria-label={locale === "ru" ? "Закрыть" : "Close"}>×</button>
          </div>
          <div className="lightbox-stage">
            <button className="lightbox-arrow lightbox-prev" type="button" onClick={showPrevious} aria-label={locale === "ru" ? "Предыдущая фотография" : "Previous photo"}>←</button>
            <DecorImage src={images[activeIndex]} alt={`${title} — ${activeIndex + 1}`} priority sizes="100vw" />
            <button className="lightbox-arrow lightbox-next" type="button" onClick={showNext} aria-label={locale === "ru" ? "Следующая фотография" : "Next photo"}>→</button>
          </div>
          <div className="lightbox-hint">{locale === "ru" ? "← → для навигации · ESC закрыть" : "← → to navigate · ESC to close"}</div>
        </div>
      )}
    </>
  );
}
