import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><span>404</span><h1>Страница не найдена</h1><p>Возможно, адрес изменился. Вернитесь к портфолио или расскажите нам о своем проекте.</p><div><Link href="/ru/portfolio">Портфолио ↗</Link><Link href="/ru/contacts#project-brief">Обсудить проект ↗</Link></div></main>;
}
