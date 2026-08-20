# DECOPROART

Двуязычный многостраничный фронтенд сайта студии событийного декора для домена `decoproart.com`.

## Страницы

- `/ru` и `/en` — главная
- `/[locale]/services` — услуги
- `/[locale]/portfolio` и `/[locale]/portfolio/[slug]` — портфолио
- `/[locale]/blog` и `/[locale]/blog/[slug]` — журнал
- `/[locale]/about` — о студии
- `/[locale]/contacts` — контакты и единая форма заявки

## Запуск

```bash
npm install
npm run dev
```

## Проверка

```bash
npm run typecheck
npm run lint
npm test
```

Форма работает в демонстрационном frontend-режиме и не отправляет данные на сервер. Перед публикацией замените демонстрационные телефон и email в `lib/site-data.ts`.
