/* eslint-disable @next/next/no-img-element */

export function DecorImage({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 760px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={1280}
      height={1280}
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  );
}
