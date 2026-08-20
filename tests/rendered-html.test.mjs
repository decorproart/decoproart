import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/ru") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the Russian home page and separate navigation routes", async () => {
  const response = await render("/ru");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Архитектура/);
  assert.match(html, /событий/);
  assert.match(html, /href="\/ru\/services"/);
  assert.match(html, /href="\/ru\/portfolio"/);
  assert.match(html, /href="\/ru\/blog"/);
  assert.match(html, /href="\/ru\/about"/);
  assert.match(html, /href="\/ru\/contacts/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("renders an English page", async () => {
  const response = await render("/en/services");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /We design events/);
  assert.match(html, /Business events/);
  assert.match(html, /Discuss the brief/);
});

test("renders portfolio and project detail pages", async () => {
  const [portfolioResponse, projectResponse] = await Promise.all([
    render("/ru/portfolio"),
    render("/ru/portfolio/cruella-night"),
  ]);
  assert.equal(portfolioResponse.status, 200);
  assert.equal(projectResponse.status, 200);
  assert.match(await portfolioResponse.text(), /События с/);
  const projectHtml = await projectResponse.text();
  assert.match(projectHtml, /Cruella Night/);
  assert.match(projectHtml, /Хочу обсудить похожий проект/);
  assert.doesNotMatch(projectHtml, /₽|руб\.|price|budget/i);
});

test("renders every top-level menu page independently", async () => {
  const routes = [
    ["/ru/services", "Оформляем события"],
    ["/ru/portfolio", "События с"],
    ["/ru/blog", "Идеи, материалы"],
    ["/ru/about", "Идея и"],
    ["/ru/contacts", "Начнём"],
  ];

  for (const [path, heading] of routes) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, new RegExp(heading), path);
    assert.match(html, /project-brief/, path);
    assert.doesNotMatch(html, /₽|руб\.|калькулятор|price_from|budget_estimate/i, path);
  }
});

test("renders an article page and the frontend-only contact form", async () => {
  const [article, contacts] = await Promise.all([
    render("/ru/blog/space-as-a-story"),
    render("/ru/contacts"),
  ]);
  assert.equal(article.status, 200);
  assert.equal(contacts.status, 200);
  assert.match(await article.text(), /Как превратить площадку в историю/);
  const contactsHtml = await contacts.text();
  assert.match(contactsHtml, /name="name"/);
  assert.match(contactsHtml, /name="phone"/);
  assert.match(contactsHtml, /Отправить заявку/);
});
