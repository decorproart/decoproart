export type Locale = "ru" | "en";

export const locales: Locale[] = ["ru", "en"];

export const site = {
  name: "DECOPROART",
  domain: "https://decoproart.com",
  phone: "+7 (495) 000-00-00",
  phoneHref: "tel:+74950000000",
  email: "hello@decoproart.com",
};

export const dictionary = {
  ru: {
    nav: {
      home: "Главная",
      services: "Услуги",
      portfolio: "Портфолио",
      blog: "Журнал",
      about: "О нас",
      contacts: "Контакты",
    },
    discuss: "Обсудить проект",
    call: "Позвонить",
    menu: "Меню",
    close: "Закрыть",
    viewProject: "Смотреть проект",
    viewAll: "Все проекты",
    read: "Читать",
    form: {
      eyebrow: "Начнем с разговора",
      title: "Расскажите о событии",
      intro:
        "Оставьте контакты и несколько деталей. Мы свяжемся, зададим точные вопросы и подготовим индивидуальное предложение.",
      name: "Ваше имя",
      phone: "Телефон",
      contact: "Как удобнее связаться",
      event: "Формат события",
      city: "Город",
      date: "Дата события",
      message: "Расскажите о задаче",
      submit: "Отправить заявку",
      consent: "Отправляя форму, вы соглашаетесь с политикой конфиденциальности.",
      successTitle: "Заявка принята",
      success:
        "Спасибо! Мы свяжемся с вами, уточним детали и подготовим индивидуальный расчет.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      blog: "Journal",
      about: "About",
      contacts: "Contacts",
    },
    discuss: "Discuss a project",
    call: "Call us",
    menu: "Menu",
    close: "Close",
    viewProject: "View project",
    viewAll: "All projects",
    read: "Read",
    form: {
      eyebrow: "Start with a conversation",
      title: "Tell us about your event",
      intro:
        "Leave your contacts and a few details. We will get in touch, ask the right questions and prepare a tailored proposal.",
      name: "Your name",
      phone: "Phone",
      contact: "Preferred contact",
      event: "Event format",
      city: "City",
      date: "Event date",
      message: "Tell us about the project",
      submit: "Send request",
      consent: "By submitting, you agree to our privacy policy.",
      successTitle: "Request received",
      success:
        "Thank you. We will contact you, clarify the details and prepare a tailored estimate.",
    },
  },
} as const;

export const services = [
  {
    slug: "corporate",
    number: "01",
    title: { ru: "Бизнес-события", en: "Business events" },
    description: {
      ru: "Форумы, презентации, сцены, навигация и масштабная пространственная айдентика.",
      en: "Forums, launches, stages, wayfinding and large-scale spatial identity.",
    },
    features: {
      ru: ["Концепция и брендирование площадки", "Сцены, пресс-воллы и фотозоны", "Навигация, свет и техническое оформление"],
      en: ["Venue concept and spatial branding", "Stages, media walls and photo settings", "Wayfinding, lighting and technical design"],
    },
    image: "/img/087d8e28-c7cf-462b-b3b4-5e73d5bee475.jpg",
  },
  {
    slug: "weddings",
    number: "02",
    title: { ru: "Свадьбы и банкеты", en: "Weddings & dinners" },
    description: {
      ru: "Цельная атмосфера пространства — от церемонии до света, флористики и сервировки.",
      en: "A complete spatial atmosphere — from ceremony to lighting, florals and table styling.",
    },
    features: {
      ru: ["Оформление церемонии и welcome-зоны", "Флористика, текстиль и сервировка", "Световой сценарий и банкетная зона"],
      en: ["Ceremony and welcome-area design", "Florals, textiles and table styling", "Lighting direction and dinner setting"],
    },
    image: "/img/0b22f99f-bf3c-486b-929b-60cd6a33c112.jpg",
  },
  {
    slug: "private",
    number: "03",
    title: { ru: "Частные события", en: "Private celebrations" },
    description: {
      ru: "Дни рождения и юбилеи с персональной графикой, светом и авторскими объектами.",
      en: "Birthdays and anniversaries with personal graphics, light and bespoke objects.",
    },
    features: {
      ru: ["Персональная сценография и графика", "Тематические фотозоны и арт-объекты", "Сцена, свет и оформление столов"],
      en: ["Personal scenography and graphics", "Themed photo settings and art objects", "Stage, lighting and table design"],
    },
    image: "/img/b773daa4-313d-49fe-b630-f06f58dd6acf.jpg",
  },
  {
    slug: "kids",
    number: "04",
    title: { ru: "Детские миры", en: "Children’s worlds" },
    description: {
      ru: "Безопасные сказочные пространства, в которых декор становится частью игры.",
      en: "Safe imaginative spaces where decor becomes part of the experience.",
    },
    features: {
      ru: ["Тематическая концепция по интересам ребёнка", "Безопасные игровые декорации", "Фотозоны, сладкий стол и детали праздника"],
      en: ["A theme shaped around the child", "Safe interactive decorations", "Photo settings, dessert table and party details"],
    },
    image: "/img/7d6b4e6d-c471-4393-88ec-266452e10743.jpg",
  },
  {
    slug: "production",
    number: "05",
    title: { ru: "Производство", en: "In-house production" },
    description: {
      ru: "Конструкции, арт-объекты, текстиль, свет и нестандартные решения собственного изготовления.",
      en: "Structures, art objects, textiles, light and custom-built solutions.",
    },
    features: {
      ru: ["Декорации и сложные конструкции", "Печать, текстиль, покраска и свет", "Доставка, монтаж и демонтаж"],
      en: ["Decor and engineered structures", "Print, textiles, painting and light", "Delivery, installation and dismantling"],
    },
    image: "/img/e770d901-dfdf-45de-8e19-e02e6817aa38.jpg",
  },
] as const;

export type Project = (typeof projects)[number];

export const projects = [
  {
    slug: "forum-first",
    category: "corporate",
    title: { ru: "Форум первых", en: "Forum of the First" },
    format: { ru: "Бизнес-форум", en: "Business forum" },
    intro: {
      ru: "Пространство для масштабного форума: световая инсталляция, сложная потолочная композиция и полная техническая сборка площадки.",
      en: "A large forum environment with a light installation, complex ceiling composition and complete technical setup.",
    },
    cover: "/img/087d8e28-c7cf-462b-b3b4-5e73d5bee475.jpg",
    images: [
      "/img/087d8e28-c7cf-462b-b3b4-5e73d5bee475.jpg",
      "/img/69791555-18b3-483b-9acf-aad1beeab35a.jpg",
      "/img/82c53442-dd63-4be1-bf1b-0fe2e11d915f.jpg",
      "/img/e92ac341-27e1-448d-84b3-801b3fd36974.jpg",
      "/img/a7468b44-ff54-4886-9a57-7dbbf26b1be2.jpg",
      "/img/e770d901-dfdf-45de-8e19-e02e6817aa38.jpg",
    ],
  },
  {
    slug: "cruella-night",
    category: "private",
    title: { ru: "Cruella Night", en: "Cruella Night" },
    format: { ru: "Частный праздник", en: "Private celebration" },
    intro: {
      ru: "Графичная красно-черная сценография с пайетками, неоном, зеркальным подиумом и полигональным арт-объектом.",
      en: "Graphic red-and-black scenography with sequins, neon, mirrored flooring and a polygonal art object.",
    },
    cover: "/img/c31dcd30-1376-4ab9-a167-ed27d5d74e96.jpg",
    images: [
      "/img/c31dcd30-1376-4ab9-a167-ed27d5d74e96.jpg",
      "/img/b773daa4-313d-49fe-b630-f06f58dd6acf.jpg",
      "/img/09eefa65-6123-4ec0-b6e1-3b5d4acc897d.jpg",
      "/img/d98d9b15-d3df-4b48-a11b-e131252bbe75.jpg",
    ],
  },
  {
    slug: "little-worlds",
    category: "kids",
    title: { ru: "Маленькие миры", en: "Little Worlds" },
    format: { ru: "Детские события", en: "Children’s events" },
    intro: {
      ru: "Серия персональных декораций: космос, сказочный сад, путешествия и пикник у воды.",
      en: "A series of personal settings: space, enchanted garden, travel and a lakeside picnic.",
    },
    cover: "/img/7d6b4e6d-c471-4393-88ec-266452e10743.jpg",
    images: [
      "/img/7d6b4e6d-c471-4393-88ec-266452e10743.jpg",
      "/img/b10d9dcd-892c-42e5-8169-e5fb6c25c415.jpg",
      "/img/691955e1-e892-4d83-be3b-aadca317a758.jpg",
      "/img/a6ea21c2-2f02-4a70-8467-6f1468fdbef4.jpg",
      "/img/b4da3dc5-59f8-4f93-b075-c5e2ecebcf65.jpg",
      "/img/d2acbd20-4ef2-4a07-a328-f343ce069b0c.jpg",
      "/img/a8809fb9-8ce8-41d5-bbcd-91d03bf8b621.jpg",
      "/img/73c3e06f-1fbc-49b2-ad15-39ad2dbf306e.jpg",
      "/img/f13d0135-1cf6-4141-ade3-45a04c9fff2e.jpg",
    ],
  },
  {
    slug: "pink-stage",
    category: "private",
    title: { ru: "Pink Stage", en: "Pink Stage" },
    format: { ru: "Юбилей", en: "Anniversary" },
    intro: {
      ru: "Яркое вечернее пространство со сценой, световым сценарием, банкетной зоной и персональной графикой.",
      en: "A vivid evening setting with stage, lighting direction, dinner zone and personal graphics.",
    },
    cover: "/img/88a1696b-b4ad-4c26-8caf-91c0ce125657.jpg",
    images: [
      "/img/88a1696b-b4ad-4c26-8caf-91c0ce125657.jpg",
      "/img/fe534914-e5d1-45c7-9eff-7f6555f0bbd4.jpg",
      "/img/451f73d7-c2e0-42ba-a523-7aa470ff06e5.jpg",
      "/img/0b22f99f-bf3c-486b-929b-60cd6a33c112.jpg",
    ],
  },
  {
    slug: "golden-moment",
    category: "private",
    title: { ru: "Golden Moment", en: "Golden Moment" },
    format: { ru: "Фотозона", en: "Photo setting" },
    intro: {
      ru: "Световая арка, золотые пайетки и скульптурная композиция для памятного школьного события.",
      en: "Light arch, gold sequins and a sculptural composition for a memorable school event.",
    },
    cover: "/img/31601cfc-3270-4b70-81ab-7a24a42ed5ac.jpg",
    images: [
      "/img/31601cfc-3270-4b70-81ab-7a24a42ed5ac.jpg",
      "/img/e88ddda8-31da-46eb-a393-b7dcc49e69ba.jpg",
    ],
  },
] as const;

export const posts = [
  {
    slug: "space-as-a-story",
    date: "18.08.2026",
    title: {
      ru: "Как превратить площадку в историю",
      en: "How to turn a venue into a story",
    },
    excerpt: {
      ru: "Почему сильная концепция начинается не с набора украшений, а со сценария движения, света и эмоций.",
      en: "Why a strong concept starts not with a set of decorations, but with movement, light and emotion.",
    },
    image: "/img/d98d9b15-d3df-4b48-a11b-e131252bbe75.jpg",
    paragraphs: {
      ru: [
        "Декор работает сильнее, когда он продолжает идею события. Мы начинаем с маршрута гостя: что он увидит первым, где остановится, как изменится атмосфера к вечеру.",
        "Затем появляется визуальный ритм — масштабные акценты, тишина между ними, свет и материалы. Так отдельные объекты складываются в цельное пространство.",
        "Производственная команда подключается еще на этапе концепции. Это позволяет сразу проверять конструктив, сроки монтажа и качество каждого узла.",
      ],
      en: [
        "Decor becomes more powerful when it extends the event’s idea. We begin with the guest journey: the first view, the moments of pause and the shift in atmosphere after dark.",
        "Then comes the visual rhythm — large accents, quiet space between them, light and materials. Individual objects become one coherent environment.",
        "Our production team joins at the concept stage, allowing us to validate structure, installation logic and the quality of every detail.",
      ],
    },
  },
  {
    slug: "ceiling-installations",
    date: "03.08.2026",
    title: {
      ru: "Потолочные инсталляции: пространство над гостями",
      en: "Ceiling installations: the space above",
    },
    excerpt: {
      ru: "Текстиль, свет и инженерия, которые меняют масштаб даже самой сложной площадки.",
      en: "Textiles, light and engineering that transform even the most complex venue.",
    },
    image: "/img/69791555-18b3-483b-9acf-aad1beeab35a.jpg",
    paragraphs: {
      ru: [
        "Потолок часто занимает большую часть поля зрения, но остается без внимания. Подвесная композиция собирает пространство и задает ему масштаб.",
        "Для таких решений важна совместная работа декоратора, конструктора, световой команды и площадки. Каждый подвес и материал проверяются до начала монтажа.",
      ],
      en: [
        "The ceiling often occupies most of the visual field, yet remains overlooked. A suspended composition unifies the venue and defines its scale.",
        "These solutions depend on close collaboration between designer, engineer, lighting team and venue. Every suspension point and material is verified before installation.",
      ],
    },
  },
  {
    slug: "personal-kids-decor",
    date: "21.07.2026",
    title: {
      ru: "Детский декор без шаблонов",
      en: "Children’s decor beyond templates",
    },
    excerpt: {
      ru: "Как сохранить любимую тему ребенка и создать визуально цельное, безопасное пространство.",
      en: "How to preserve a child’s favourite theme while creating a coherent, safe environment.",
    },
    image: "/img/73c3e06f-1fbc-49b2-ad15-39ad2dbf306e.jpg",
    paragraphs: {
      ru: [
        "Хорошая детская концепция не копирует готовую картинку. Она переводит интерес ребенка в цвет, форму, свет и небольшие игровые детали.",
        "Мы отдельно продумываем устойчивость конструкций, безопасные проходы, высоту интерактивных элементов и кадр для семейных фотографий.",
      ],
      en: [
        "A good children’s concept does not copy a ready-made image. It translates the child’s interests into colour, form, light and playful details.",
        "We consider structural stability, safe routes, the height of interactive elements and a strong frame for family photographs.",
      ],
    },
  },
] as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
