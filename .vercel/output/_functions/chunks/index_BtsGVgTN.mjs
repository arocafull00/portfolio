import { c as createComponent } from './astro-component_9-ZibaCH.mjs';
import 'piccolore';
import { l as createRenderInstruction, m as maybeRenderHead, r as renderTemplate, s as spreadAttributes, h as addAttribute, n as renderComponent, u as unescapeHTML, o as renderHead, p as renderSlot } from './entrypoint_uLAJILKk.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="rounded-lg shadow m-4 bg-black/5 dark:bg-black/20 backdrop-blur-lg w-full xl:w-[1120px] mx-auto mb-10"> <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"> <span class="text-sm sm:text-center text-yellow-800/90 dark:text-yellow-200/90">© ${currentYear} <a href="https://adrianrocafull.es" class="rounded-sm underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">Adrian Rocafull</a>.
</span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"> <li> <a href="#about-me" class="rounded-sm me-4 md:me-6 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">About me</a> </li> <li> <a href="#contact" class="rounded-sm underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950">Contact</a> </li> </ul> </div> </footer>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/components/Footer.astro", void 0);

const $$Hamburguer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Hamburguer;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path> </svg>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/icons/Hamburguer.astro", void 0);

const $$Cross = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Cross;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path> </svg>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/icons/Cross.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navLinkClass = "rounded-sm outline-offset-2 transition-[color,box-shadow] duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/90 focus-visible:ring-offset-2 focus-visible:ring-offset-[#181822]";
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<header class="flex justify-start items-start md:justify-center md:items-center h-[70px] p-3 w-full md:w-[800px] xl:w-[810px]\n    fixed top-0 right-0 sm:right-auto z-[99999] bg-[#181822f1] text-[#e5ebf3]\n    rounded-b-xl border-b border-[#ffffff60]\n    transition-[height,box-shadow,background-color] duration-500 ease-out\n    overflow-hidden\n    " data-astro-cid-3ef6ksr2> <nav aria-label="Primary" class="hidden md:flex sm:w-full sm:justify-between sm:align-items-center sm:gap-11 sm:opacity-80 sm:text-xl" data-astro-cid-3ef6ksr2> <a href="#home"', ' aria-label="Home" data-astro-cid-3ef6ksr2>Home</a> <a href="#experience"', ' aria-label="Work experience" data-astro-cid-3ef6ksr2>Experience</a> <a href="#freelance-projects"', ' aria-label="Freelance projects" data-astro-cid-3ef6ksr2>Freelance projects</a> <a href="#about-me"', ' aria-label="About me" data-astro-cid-3ef6ksr2>About</a> <a href="#contact"', ' aria-label="Contact" data-astro-cid-3ef6ksr2>Contact</a> </nav> <nav aria-label="Primary mobile" class="flex justify-between items-start flex-col w-full flex-wrap gap-7 p-2 md:hidden" data-astro-cid-3ef6ksr2> <div class="w-full flex justify-between items-center" data-astro-cid-3ef6ksr2> <a href="#home"', ' aria-label="Home" data-astro-cid-3ef6ksr2>Home</a> <button type="button" id="open-button" class="relative rounded-sm p-1 text-[#e5ebf3] outline-offset-2 transition-[color] duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/90 focus-visible:ring-offset-2 focus-visible:ring-offset-[#181822]" aria-expanded="false" aria-controls="items-sm-navbar" aria-label="Open menu" data-astro-cid-3ef6ksr2> ', " ", ' </button> </div> <div id="items-sm-navbar" class="flex justify-start items-start flex-col gap-3 text-xl duration-500" data-astro-cid-3ef6ksr2> <a href="#experience"', ' aria-label="Work experience" data-astro-cid-3ef6ksr2>Experience</a> <a href="#freelance-projects"', ' aria-label="Freelance projects" data-astro-cid-3ef6ksr2>Freelance projects</a> <a href="#about-me"', ' aria-label="About me" data-astro-cid-3ef6ksr2>About</a> <a href="#contact"', ' aria-label="Contact" data-astro-cid-3ef6ksr2>Contact</a> </div> </nav> </header> <script lang="ts">\n  const openButton = document.querySelector("#open-button");\n  const header = document.querySelector("body > header");\n  const links = document.querySelectorAll("body > header a");\n  const iconsNavbar = openButton?.querySelectorAll("svg");\n  const setExpanded = (open: boolean) => {\n    openButton?.setAttribute("aria-expanded", open ? "true" : "false");\n    openButton?.setAttribute("aria-label", open ? "Close menu" : "Open menu");\n  };\n  openButton?.addEventListener("click", () => {\n    header?.classList.toggle("h-[70px]");\n    header?.classList.toggle("h-[270px]");\n    const expanded = header?.classList.contains("h-[270px]");\n    setExpanded(!!expanded);\n    iconsNavbar?.forEach((icon) => {\n      icon.classList.toggle("opacity-0");\n      icon.classList.toggle("opacity-100");\n    });\n  });\n  links.forEach((link) => {\n    link.addEventListener("click", () => {\n      header?.classList.add("h-[70px]");\n      header?.classList.remove("h-[270px]");\n      setExpanded(false);\n      iconsNavbar?.item(0)?.classList.add("opacity-100");\n      iconsNavbar?.item(0)?.classList.remove("opacity-0");\n      iconsNavbar?.item(1)?.classList.add("opacity-0");\n      iconsNavbar?.item(1)?.classList.remove("opacity-100");\n    });\n  });\n<\/script>'])), maybeRenderHead(), addAttribute(navLinkClass, "class"), addAttribute(navLinkClass, "class"), addAttribute(navLinkClass, "class"), addAttribute(navLinkClass, "class"), addAttribute(navLinkClass, "class"), addAttribute(navLinkClass, "class"), renderComponent($$result, "Hamburguer", $$Hamburguer, { "class": "size-6 transition-[opacity] duration-200 opacity-100 absolute top-2/4 right-1/2 translate-x-[-50%] translate-y-[-50%]", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "Cross", $$Cross, { "class": "size-6 opacity-0 transition-[opacity] duration-200 absolute top-2/4 right-1/2 translate-x-[-50%] translate-y-[-50%]", "data-astro-cid-3ef6ksr2": true }), addAttribute(navLinkClass, "class"), addAttribute(navLinkClass, "class"), addAttribute(navLinkClass, "class"), addAttribute(navLinkClass, "class"));
}, "C:/Users/hardh/Documents/code/portfolioV2/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$RichResults = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$RichResults;
  const URL = "https://adrianrocafull.es";
  const { description } = Astro2.props;
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${URL}`,
    image: `${URL}/favicon.webp`,
    sameAs: [
      "https://github.com/adriroca20",
      "https://www.linkedin.com/in/adri%C3%A1n-rocafull-448a1216a/"
    ],
    dateCreated: "2022-01-01T00:00:00+01:00",
    dateModified: "2026-03-19T12:00:00+01:00",
    mainEntity: {
      "@type": "Person",
      name: "Adrian Rocafull",
      alternateName: "adriroca20",
      description
    }
  };
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(organizationSchema)));
}, "C:/Users/hardh/Documents/code/portfolioV2/src/components/RichResults.astro", void 0);

const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SEO;
  const URL = "https://adrianrocafull.es";
  const { title, description } = Astro2.props;
  return renderTemplate`<title>${title}</title><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/webp" href="/favicon.webp"><link rel="canonical"${addAttribute(URL, "href")}><meta name="viewport" content="width=device-width"><meta name="theme-color" content="#fff"><meta name="keywords" content="React, TypeScript, Next.js, React Native, Expo, Node.js, full stack developer, Valencia, portfolio, AWS"><meta name="og:image"${addAttribute(`${URL}/ogImage.webp`, "content")}><meta name="og:title"${addAttribute(title, "content")}><meta name="og:description"${addAttribute(description, "content")}><meta name="og:url"${addAttribute(`${URL}`, "content")}><meta name="og:site_name" content="Adrian Rocafull"><meta name="og:type" content="website"><meta name="og:locale" content="es_ES"><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow"><!-- PWA Support --><!-- Favicons. --><!-- 16 --><link rel="icon" type="image/webp" sizes="16x16" href="/favicon.webp"><!-- 20 --><link rel="icon" type="image/webp" sizes="20x20" href="/favicon.webp"><!-- 24 --><link rel="icon" type="image/webp" sizes="24x24" href="/favicon.webp"><!-- 48 --><link rel="icon" type="image/webp" sizes="48x48" href="/favicon.webp"><!-- 64 --><link rel="icon" type="image/webp" sizes="64x64" href="/favicon.webp"><!-- 128 --><link rel="icon" type="image/webp" sizes="128x128" href="/favicon.webp"><!-- 144 --><link rel="icon" type="image/webp" sizes="144x144" href="/favicon.webp"><!-- 256 --><link rel="icon" type="image/webp" sizes="256x256" href="/favicon.webp"><!-- 512 --><link rel="icon" type="image/webp" sizes="512x512" href="/favicon.webp"><link rel="shortcut icon" type="image/webp" href="/favicon.webp"><!-- Sitemap --><meta name="msapplication-config" content="/browserconfig.xml">${renderComponent($$result, "RichResults", $$RichResults, { "description": description })}`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/components/SEO.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="es" class="dark"> <head>${renderComponent($$result, "SEO", $$SEO, { "description": description, "title": title })}${renderHead()}</head> <body> <a href="#main-content" class="absolute left-[-10000px] top-0 z-[100000] overflow-hidden whitespace-nowrap p-0 focus:fixed focus:left-4 focus:top-4 focus:m-0 focus:inline-block focus:h-auto focus:w-auto focus:max-w-[min(100vw-2rem,24rem)] focus:overflow-visible focus:whitespace-normal focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-neutral-950">Skip to main content</a> <div class="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.4),rgba(60,60,100,0.2))]"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "C:/Users/hardh/Documents/code/portfolioV2/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/layouts/Layout.astro", void 0);

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="bg-yellow-700/30 text-yellow-400 text-xs font-medium me-2 px-2.5 py-1 rounded whitespace-nowrap"> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/components/Badge.astro", void 0);

const $$HeroStackItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$HeroStackItem;
  const { name } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`${name}` })}`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/components/HeroStackItem.astro", void 0);

const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 250" width="256" height="250" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" fill="currentColor"></path></svg>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/icons/GitHub.astro", void 0);

const $$Linkedln = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Linkedln;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" fill="currentColor"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"></path></svg>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/icons/Linkedln.astro", void 0);

const $$SocialPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SocialPill;
  const { RRSS_Name, RRSS_Link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(RRSS_Link, "href")} class="flex gap-2 justify-center items-center rounded-full border-white/10 border py-2 px-4 bg-white/5 hover:bg-white/20 transition" target="_blank" rel="noopener noreferrer"> ${RRSS_Name} ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/components/Social_pill.astro", void 0);

const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path> <path d="M3 7l9 6l9 -6"></path> </svg>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/icons/Mail.astro", void 0);

const $$RRSSButtons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex items-center justify-start gap-3 w-full flex-wrap "> ${renderComponent($$result, "SocialPill", $$SocialPill, { "RRSS_Link": "https://github.com/adriroca20", "RRSS_Name": "GitHub" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GitHub", $$GitHub, { "class": "w-5 h-5" })} ` })} ${renderComponent($$result, "SocialPill", $$SocialPill, { "RRSS_Link": "https://www.linkedin.com/in/adri%C3%A1n-rocafull-448a1216a/", "RRSS_Name": "Linkedln" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Linkedln", $$Linkedln, { "class": "w-5 h-5" })} ` })} ${renderComponent($$result, "SocialPill", $$SocialPill, { "RRSS_Link": "mailto:adrianrocafull1@gmail.com", "RRSS_Name": "adrianrocafull1@gmail.com" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Mail", $$Mail, { "class": "w-6 h-6" })} ` })} </section>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/components/RRSS_Buttons.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const stack = [
    "React",
    "TypeScript",
    "Next.js",
    "React Native",
    "Expo",
    "Node.js"
  ];
  return renderTemplate`${maybeRenderHead()}<section id="home" class="w-full lg:w-[770px] mx-auto py-24 flex md:items-start gap-6 flex-col"> <a href="https://www.linkedin.com/in/adri%C3%A1n-rocafull-448a1216a/" target="_blank" rel="noopener noreferrer" class="flex items-start content-start flex-column h-full rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/90 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`Currently hired` })} </a> <header class="flex justify-start items-center gap-2 animate-fade-in flex-row"> <h1 class="text-white text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide text-nowrap">
Hey, I'm Adrian Rocafull
</h1> <img class="rounded-full size-16 object-cover object-top" src="/profile.webp" alt="Adrian Rocafull profile picture"> </header> <h2 class="text-xl md:text-2xl opacity-90 text-balance text-start leading-snug"> <span class="font-semibold text-white">4+ years</span> shipping full-stack
    products — web with <span class="text-yellow-400">React</span> and
<span class="text-yellow-400">Next.js</span>, mobile with
<span class="text-yellow-400">React Native</span> and
<span class="text-yellow-400">Expo</span>, APIs with
<span class="text-yellow-400">Node.js</span>, typed with
<span class="text-yellow-400">TypeScript</span>. Based in Valencia, Spain.
</h2> <div class="flex flex-wrap gap-2 items-center"> ${stack.map((name) => renderTemplate`${renderComponent($$result, "HeroStackItem", $$HeroStackItem, { "name": name })}`)} </div> ${renderComponent($$result, "RRSSButtons", $$RRSSButtons, {})} </section>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/components/Hero.astro", void 0);

const $$ExperienceBulletItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ExperienceBulletItem;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li>${text}</li>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/components/ExperienceBulletItem.astro", void 0);

const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { date, title, description, location, bullets } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="mb-10 ms-4"> <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">${date}</time> <div class="sm:flex md:justify-start sm:items-center gap-3"> <h3 class="sm:text-lg font-semibold text-balance text-white-900 dark:text-white"> ${title} </h3> <span class="hidden md:block"> - </span> <h3 class="text-lg font-semibold text-yellow-400/80"> ${location} </h3> </div> <p class="mb-2 text-base font-normal text-gray-500 dark:text-gray-400 text-pretty"> ${description} </p> ${bullets?.length ? renderTemplate`<ul class="mb-4 list-disc ps-5 text-base text-gray-500 dark:text-gray-400 space-y-1 text-pretty"> ${bullets.map((text) => renderTemplate`${renderComponent($$result, "ExperienceBulletItem", $$ExperienceBulletItem, { "text": text })}`)} </ul>` : null} ${renderSlot($$result, $$slots["default"])} </article>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/components/ExperienceItem.astro", void 0);

const $$Briefcase = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-briefcase" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path> <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path> <path d="M12 12l0 .01"></path> <path d="M3 13a20 20 0 0 0 18 0"></path> </svg>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/icons/Briefcase.astro", void 0);

const $$TimeLine = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TimeLine;
  return renderTemplate`${maybeRenderHead()}<header class="flex content-start items-end gap-2 mb-8"> <span class="shrink-0 text-yellow-400/90" aria-hidden="true"> ${renderComponent($$result, "Briefcase", $$Briefcase, {})} </span> <h2 id="experience-heading" class="text-2xl font-bold">Work experience</h2> </header> <section id="experience" class="relative border-s border-gray-200 dark:border-gray-700 mb-14" aria-labelledby="experience-heading"> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { "date": "September 2025 - Present · Remote", "title": "Full Stack Developer — React Native, Next.js, Node.js", "location": "DocMorris", "description": `DocMorris is Europe's largest online pharmacy, with mobile app and website across multiple countries.`, "bullets": [
    "AI Health Chatbot (React Native, Next.js, Node.js): assistant for health tracking, medical Q&A, and triage across services and catalogue on web and app.",
    "Promofarma Social Feed (React Native, Node.js): social-style feature for health and wellness content and category follows.",
    "Remote-first international team: code reviews, sprint planning, and technical collaboration."
  ] })} ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { "date": "May 2024 - September 2025 · Valencia, Spain", "title": "Frontend / Full-Stack Developer — React, React Native, Node.js, AWS", "location": "Flumotion", "description": `Flumotion is Spain's leading company in video, audio, and VOD streaming.`, "bullets": [
    "Built and maintained production web and mobile apps with React, React Native, TypeScript, Node.js, and AWS.",
    "OTT features: geoblocking, per-user analytics, push notifications, subtitles, multi-format video and audio.",
    "AWS: Cognito/Amplify auth, DynamoDB, Lambda. Agile collaboration with design, backend, and QA."
  ] })} ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { "date": "February 2023 - May 2024 · Valencia, Spain", "title": "Full-Stack Developer & Tester — Angular, .NET", "location": "Capgemini", "description": `Enterprise delivery for a major French energy company — foundation before my current focus on React and Node.`, "bullets": [
    "Web features with Angular, .NET, TypeScript, and SCSS.",
    "Automated tests with Jest and Playwright; sprint reviews and client-facing demos."
  ] })} ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { "date": "January 2022 - Present (alongside full-time) · Remote", "title": "Freelance Full-Stack Developer — React Native, Expo, Node.js", "location": "Self-employed", "description": `Shipped desktop, web, and mobile work for companies and private clients.`, "bullets": [
    "Ping (Jun 2025 - Sep 2025): secure messaging (UK) — React Native, Expo, Node.js; E2E chat, WebRTC calls, Signal Protocol, Supabase, Jitsi.",
    "Circulantis Dashboard: React, Node.js, Turso, Prisma — ops and financial workflows.",
    "Tender Dashboard — Circulantis: Python desktop app, tender scraping and report generation.",
    "Diariamente: React Native, Supabase, Figma — psychologist-patient mood tracking.",
    "OTT platform: React Native, AWS Amplify — geoblocking, analytics, push, subtitles, live chat.",
    "Fontanería Rocafull: Astro — business site and blog, SEO and performance."
  ] })} ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { "date": "2018 - 2023 · Valencia, Spain", "title": "Bachelor's Degree in Computer Science", "location": "Universidad Politécnica de Valencia", "description": `Four-year degree in computer science and software engineering — design patterns, solid engineering practices, and problem solving at scale.` })} </section>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/components/TimeLine.astro", void 0);

const $$Code2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Code2;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-folder-code" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M11 19h-6a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v4"></path> <path d="M20 21l2 -2l-2 -2"></path> <path d="M17 17l-2 2l2 2"></path> </svg>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/icons/Code2.astro", void 0);

const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop-code" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8"></path> <path d="M7 20h4"></path> <path d="M9 16v4"></path> <path d="M20 21l2 -2l-2 -2"></path> <path d="M17 17l-2 2l2 2"></path> </svg>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/icons/Code.astro", void 0);

const $$JavaScript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$JavaScript;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"></path><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"></path></svg>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/icons/JavaScript.astro", void 0);

const $$TypeScript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TypeScript;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 256" width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6"></path><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF"></path></svg>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/icons/TypeScript.astro", void 0);

const $$AstroIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AstroIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 366" xmlns="http://www.w3.org/2000/svg" width="256" height="366" preserveAspectRatio="xMidYMid"><path fill="#fff" d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z"></path><path fill="#FF5D01" d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z"></path></svg>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/icons/AstroIcon.astro", void 0);

const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer" class="bg-white/5
    border dark:border-white/10 border-gray-300
    rounded-full
    inline-flex justify-center items-center gap-x-2
    py-1 px-2 md:py-2 md:px-4
    text-xs md:text-base
    transition-[background-color,box-shadow,color] duration-200
    hover:bg-white/10
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/90 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/components/LinkButton.astro", void 0);

const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Carousel;
  const { carouselImages, imageAltBase } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative w-full" data-carousel="slide"> <div class="relative h-56 overflow-hidden rounded-lg md:h-96"> ${carouselImages.map((carouselImage, index) => {
    return renderTemplate`<div class="hidden duration-700 ease-in-out" data-carousel-item> <img${addAttribute(carouselImage, "src")}${addAttribute(1920, "width")}${addAttribute(1080, "height")} class="absolute block w-full max-h-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"${addAttribute(`${imageAltBase} — screenshot ${index + 1}`, "alt")} loading="lazy"> </div>`;
  })} </div> <button type="button" class="absolute top-0 start-0 z-30 flex h-full items-center justify-center px-4 cursor-pointer group focus-visible:outline-none" data-carousel-prev aria-label="Previous slide"> <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus-visible:ring-4 group-focus-visible:ring-white dark:group-focus-visible:ring-gray-800/70"> <svg class="w-4 h-4 text-white dark:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path> </svg> <span class="sr-only">Previous</span> </span> </button> <button type="button" class="absolute top-0 end-0 z-30 flex h-full items-center justify-center px-4 cursor-pointer group focus-visible:outline-none" data-carousel-next aria-label="Next slide"> <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus-visible:ring-4 group-focus-visible:ring-white dark:group-focus-visible:ring-gray-800/70"> <svg class="w-4 h-4 text-white dark:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <span class="sr-only">Next</span> </span> </button> </div>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/components/Carousel.astro", void 0);

const $$FreelanceProjectItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FreelanceProjectItem;
  const { projectItemData } = Astro2.props;
  const { title, description, tags, link, github, images } = projectItemData;
  const imageList = images.filter(
    (src) => typeof src === "string" && src.trim() !== ""
  );
  return renderTemplate`${maybeRenderHead()}<article class="min-w-0"> <h3 class="text-2xl font-semibold text-pretty text-yellow-400 dark:text-yellow-400 mb-2"> ${title} </h3> <p class="text-lg mb-4 text-pretty">${description}</p> <ul class="flex gap-2 flex-row flex-wrap mb-2"> ${tags.map((tag) => renderTemplate`<li> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `, "class")}> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-4 shrink-0", "aria-hidden": "true" })} ${tag.name} </span> </li>`)} </ul> ${imageList.length > 1 ? renderTemplate`${renderComponent($$result, "Carousel", $$Carousel, { "carouselImages": imageList, "imageAltBase": title })}` : imageList.length === 1 ? renderTemplate`<img loading="lazy"${addAttribute(1920, "width")}${addAttribute(1080, "height")}${addAttribute(imageList[0], "src")}${addAttribute(`${title} — screenshot`, "alt")} class="rounded-lg w-full max-h-[24rem] object-contain bg-black/20">` : renderTemplate`<p class="text-sm py-5 text-yellow-300">
Screenshots not shown due to privacy policies.
</p>`} <footer class="flex gap-x-4 items-end justify-start mt-4 flex-wrap"> ${github && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": github }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GitHub", $$GitHub, { "class": "size-6 shrink-0", "aria-hidden": "true" })}
View Source
` })}`} ${link && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": link }, { "default": ($$result2) => renderTemplate` <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="shrink-0" aria-hidden="true"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path> <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path> <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path> <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path> <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path> <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path> <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path> <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path> <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path> </svg>
Go to Website
` })}`} </footer> </article>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/components/FreelanceProjectItem.astro", void 0);

const $$React = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$React;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 228" width="256" height="228" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF"></path></svg>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/icons/React.astro", void 0);

const $$SQL = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SQL;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path fill="#cfd8dc" d="M23.084 11.277c-1.633-2.449-1.986-5.722-2.063-7.067-4.148.897-8.269 2.506-8.031 3.691.03.149.218.328.53.502l-.488.873c-.596-.334-.931-.719-1.022-1.179-.269-1.341 1.25-2.554 4.642-3.709a42.152 42.152 0 0 1 4.751-1.279l.597-.12V3.6c0 .042.026 4.288 1.916 7.123l-.832.554zM24.751 43H24.5c-8.192 0-17.309-2.573-18.386-6.879-.657-2.63 1.492-5.536 6.214-8.401l.52.854c-4.249 2.579-6.296 5.172-5.763 7.305.935 3.738 9.575 6.068 17.153 6.12.901-1.347 5.742-9.26 2.979-19.873l.967-.252c3.149 12.092-3.218 20.837-3.282 20.924l-.151.202z"></path><path fill="#cfd8dc" d="M9.931 39.306c-.539 0-.806-.059-.85-.07a.498.498 0 0 1-.233-.84c.072-.072 7.197-7.208 8.159-12.978l.986.164c-.827 4.964-5.715 10.623-7.656 12.707 1.939-.111 6.835-1.019 16.234-6.28-7.335-.804-8.495-6.676-8.507-6.739l.983-.181c.047.246 1.226 6.011 9.244 6.011h.008a.5.5 0 0 1 .251.933c-11.235 6.509-16.683 7.272-18.619 7.273z"></path><path fill="#cfd8dc" d="M14.524 41.7a.499.499 0 0 1-.291-.907c.034-.025 1.813-1.338 3.706-4.228a19.896 19.896 0 0 1-2.196-1.137c-.888-.533-1.559-1.105-2.06-1.691-2.57.678-4.942.946-7.025.769l.084-.996c1.876.159 4.009-.063 6.321-.64-1.573-2.688-.129-5.356-.109-5.392l.874.487c-.067.122-1.265 2.37.249 4.633 2.201-.632 4.549-1.567 6.979-2.782a32.189 32.189 0 0 0 1.225-6.276.501.501 0 0 1 .706-.406c.032.015 3.264 1.491 5.604 2.454a.5.5 0 0 1 .091.876 62.494 62.494 0 0 1-6.778 4.042 27.19 27.19 0 0 1-2.459 5.591c3.702 1.383 6.915 1.404 6.956 1.404a.5.5 0 0 1 .243.938c-4.54 2.522-11.767 3.232-12.072 3.261h-.048zm4.385-4.733c-1.04 1.614-2.062 2.773-2.826 3.53 1.998-.294 5.501-.938 8.408-2.139a23.733 23.733 0 0 1-5.582-1.391zm-4.142-3.536c.393.392.883.775 1.49 1.14.736.442 1.483.817 2.22 1.135a26.116 26.116 0 0 0 2.142-4.568c-2.021.962-3.983 1.73-5.852 2.293zm8.435-9.102a33.95 33.95 0 0 1-.913 4.85 62.45 62.45 0 0 0 5.062-3.026 207.1 207.1 0 0 1-4.149-1.824zM17.924 10.6a.504.504 0 0 1-.325-.12c-1.61-1.378-3.505-4.182-3.585-4.301a.5.5 0 0 1 .654-.718c.011.003.938.385 7.217 1.431a.499.499 0 0 1 .29.828c-1.758 1.953-3.979 2.813-4.073 2.848a.527.527 0 0 1-.178.032zm-2.277-3.854c.631.849 1.54 1.996 2.372 2.769a11.186 11.186 0 0 0 2.744-1.798c-2.583-.441-4.159-.755-5.116-.971z"></path><path fill="#b71c1c" d="M21.843 24.4a.5.5 0 0 1-.497-.552c.292-2.749-3.926-3.852-3.969-3.862a.5.5 0 0 1-.23-.838c.207-.207 5.139-5.098 11.327-7.784a.5.5 0 0 1 .689.559c-1.186 5.744-6.71 12.044-6.944 12.309a.51.51 0 0 1-.376.168zm-3.388-5.115c1.184.445 3.258 1.475 3.783 3.356 1.449-1.808 4.542-5.973 5.697-9.934-4.387 2.11-8.081 5.292-9.48 6.578z"></path><path fill="#b71c1c" d="m13.079 28.36-.475-.88c1.883-1.015 4.04-2.883 5.807-5.054-1.504 1.03-2.365 1.735-2.392 1.758l-.639-.77c.039-.032 1.764-1.447 4.631-3.22.787-1.266 1.392-2.568 1.703-3.816.053-.212.099-.417.136-.615-1.925-.687-3.701-1.094-4.921-1.269a.5.5 0 0 1-.297-.835c.085-.092 2.116-2.268 4.654-3.463a.5.5 0 0 1 .581.114c.067.073 1.44 1.615 1.091 4.805 1.155.45 2.345.997 3.491 1.648 2.759-1.24 5.892-2.356 9.229-3.03a.51.51 0 0 1 .481.168c.117.14.149.333.083.503-1.3 3.332-4.786 6.891-4.934 7.041a.503.503 0 0 1-.748-.04c-1.12-1.408-2.584-2.574-4.163-3.523a55.136 55.136 0 0 0-5.684 3.049c-2.02 3.153-5.069 6.048-7.634 7.429zm14.413-10.964c1.29.832 2.491 1.81 3.484 2.948.828-.898 2.815-3.168 3.942-5.422-2.65.61-5.158 1.493-7.426 2.474zm-4.693-1.274c-.033.163-.071.33-.113.5-.21.839-.544 1.701-.972 2.561a56.183 56.183 0 0 1 3.618-1.898 25.476 25.476 0 0 0-2.533-1.163zm-4.751-2.45c1.111.218 2.48.574 3.941 1.086.152-1.843-.346-2.972-.647-3.472-1.376.718-2.581 1.728-3.294 2.386z"></path><path fill="#b71c1c" d="M18.05 18.5c0 4.38-3.65 7.86-6.28 10.4-.44.43-1.93.5-1.93.5.37-.38.79-.78 1.24-1.21 2.5-2.42 5.97-5.73 5.97-9.69 0-4.69-1.89-6.54-3.38-8.02-.66-.67-1.22-1.31-1.56-2.09l.31-.13c.34.15.73.32 1.03.45.24.35.56.69.93 1.06 1.53 1.53 3.67 3.63 3.67 8.73z"></path><path fill="#b71c1c" d="M42.935 19.794s-.605.086-.775.106c-8.76.97-17.8 3.49-22.97 5.56-1.87.75-3.81 1.66-5.58 2.68-.01.01-.02.01-.04.02-1.04.6-3.57 1.84-5.62 2.93 3-3.19 8.62-5.65 10.86-6.55 5.07-2.03 13.78-4.48 22.35-5.53-1.01-1.18-3.48-3.68-8.34-5.54-2.84-1.1-7.16-1.72-10.97-2.27-6.06-.87-9.51-1.45-9.84-3.1-.07-.33-.02-.66.13-.98.33.54.8.92 1.11 1.14.15.1.26.16.3.18l.01.01c1.42.75 5.25 1.3 8.44 1.76 3.86.56 8.23 1.19 11.18 2.32 6.87 2.65 9.24 6.44 9.34 6.6.09.15.415.664.415.664z"></path></svg>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/icons/SQL.astro", void 0);

const $$Figma = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Figma;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 54 80" fill="none"${spreadAttributes(Astro2.props)}> <path d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z" fill="#0ACF83"></path> <path d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z" fill="#A259FF"></path> <path d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z" fill="#F24E1E"></path> <path d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z" fill="#FF7262"></path> <path d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z" fill="#1ABCFE"></path> <defs> <clipPath id="clip0_912_3"> <rect fill="white"></rect> </clipPath> </defs> </svg>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/icons/Figma.astro", void 0);

const $$Supabase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Supabase;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg"${spreadAttributes(Astro2.props)}> <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint0_linear)"></path> <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint1_linear)" fill-opacity="0.2"></path> <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"></path> <defs> <linearGradient id="paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse"> <stop stop-color="#249361"></stop> <stop offset="1" stop-color="#3ECF8E"></stop> </linearGradient> <linearGradient id="paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse"> <stop></stop> <stop offset="1" stop-opacity="0"></stop> </linearGradient> </defs> </svg>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/icons/Supabase.astro", void 0);

const $$AWS = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AWS;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" x="0" y="0" viewBox="0 0 304 182"${spreadAttributes(Astro2.props)}><path fill="#ffffff" d="m86 66 2 9c0 3 1 5 3 8v2l-1 3-7 4-2 1-3-1-4-5-3-6c-8 9-18 14-29 14-9 0-16-3-20-8-5-4-8-11-8-19s3-15 9-20c6-6 14-8 25-8a79 79 0 0 1 22 3v-7c0-8-2-13-5-16-3-4-8-5-16-5l-11 1a80 80 0 0 0-14 5h-2c-1 0-2-1-2-3v-5l1-3c0-1 1-2 3-2l12-5 16-2c12 0 20 3 26 8 5 6 8 14 8 25v32zM46 82l10-2c4-1 7-4 10-7l3-6 1-9v-4a84 84 0 0 0-19-2c-6 0-11 1-15 4-3 2-4 6-4 11s1 8 3 11c3 2 6 4 11 4zm80 10-4-1-2-3-23-78-1-4 2-2h10l4 1 2 4 17 66 15-66 2-4 4-1h8l4 1 2 4 16 67 17-67 2-4 4-1h9c2 0 3 1 3 2v2l-1 2-24 78-2 4-4 1h-9l-4-1-1-4-16-65-15 64-2 4-4 1h-9zm129 3a66 66 0 0 1-27-6l-3-3-1-2v-5c0-2 1-3 2-3h2l3 1a54 54 0 0 0 23 5c6 0 11-2 14-4 4-2 5-5 5-9l-2-7-10-5-15-5c-7-2-13-6-16-10a24 24 0 0 1 5-34l10-5a44 44 0 0 1 20-2 110 110 0 0 1 12 3l4 2 3 2 1 4v4c0 3-1 4-2 4l-4-2c-6-2-12-3-19-3-6 0-11 0-14 2s-4 5-4 9c0 3 1 5 3 7s5 4 11 6l14 4c7 3 12 6 15 10s5 9 5 14l-3 12-7 8c-3 3-7 5-11 6l-14 2z"></path><path d="M274 144A220 220 0 0 1 4 124c-4-3-1-6 2-4a300 300 0 0 0 263 16c5-2 10 4 5 8z" fill="#f90"></path><path d="M287 128c-4-5-28-3-38-1-4 0-4-3-1-5 19-13 50-9 53-5 4 5-1 36-18 51-3 2-6 1-5-2 5-10 13-33 9-38z" fill="#f90"></path></svg>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/icons/AWS.astro", void 0);

const $$FreelanceProjects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FreelanceProjects;
  const TAGS = {
    TS: {
      name: "TypeScript",
      class: "bg-[#3178c64d] text-white",
      icon: $$TypeScript
    },
    ASTRO: {
      name: "Astro",
      class: "bg-[#FFFFFF66] text-white",
      icon: $$AstroIcon
    },
    REACT: {
      name: "React",
      class: "bg-[#00D8FF66] text-white",
      icon: $$React
    },
    FIGMA: {
      name: "Figma",
      class: "bg-[#F24E1E66] text-white",
      icon: $$Figma
    },
    REACTNATIVE: {
      name: "React Native",
      class: "bg-[#61DAFB66] text-white",
      icon: $$React
    },
    EXPO: {
      name: "Expo",
      class: "bg-[#18181b66] text-white",
      icon: $$React
    },
    NODE: {
      name: "Node.js",
      class: "bg-[#3c873a66] text-white",
      icon: $$JavaScript
    },
    SUPABASE: {
      name: "Supabase",
      class: "bg-[#30a9dc66] text-white",
      icon: $$Supabase
    },
    AWS: {
      name: "AWS",
      class: "bg-[#F9AB0066] text-white",
      icon: $$AWS
    },
    TURSO: {
      name: "Turso",
      class: "bg-[#1e293b66] text-white",
      icon: $$SQL
    },
    PRISMA: {
      name: "Prisma",
      class: "bg-[#2d374866] text-white",
      icon: $$SQL
    },
    PYTHON: {
      name: "Python",
      class: "bg-[#3776ab66] text-white",
      icon: $$Code
    }
  };
  const PROJECTS = [
    {
      title: "Diariamente — psychologist and patient mobile app",
      description: `React Native app connecting psychologists with patients in real time: patients log mood and anxiety moments; professionals review timelines. Built with TypeScript, Figma, V0, and Supabase.`,
      tags: [TAGS.REACTNATIVE, TAGS.TS, TAGS.SUPABASE, TAGS.FIGMA],
      images: ["/Diariamente1.webp", "/Diariamente2.webp", "/Diariamente3.webp"]
    },
    {
      title: "Ping — secure messaging and collaboration",
      description: `June 2025 – September 2025 (remote, UK): React Native (Expo) and Node.js for a secure messaging product — end-to-end encrypted chat, WebRTC calls, contacts and media. Signal Protocol, Supabase, and Jitsi with a focus on performance and UX.`,
      tags: [TAGS.REACTNATIVE, TAGS.EXPO, TAGS.NODE, TAGS.TS, TAGS.SUPABASE],
      images: [""]
    },
    {
      title: "OTT platform — streaming (React Native, AWS)",
      description: `Mobile streaming experience with AWS Amplify: auth, data, and Lambdas. Geoblocking, per-user analytics, push notifications, subtitles, live chat, and multi-format video and audio.`,
      tags: [TAGS.REACTNATIVE, TAGS.AWS, TAGS.NODE, TAGS.TS],
      images: ["/OTT1.webp", "/OTT2.webp", "/OTT3.webp"]
    },
    {
      title: "Circulantis dashboard — operations and finance",
      description: `React and Node.js web app for operational management: CRUD workflows, automated calculations, and data with Turso (SQLite) and Prisma.`,
      tags: [TAGS.REACT, TAGS.NODE, TAGS.TURSO, TAGS.PRISMA, TAGS.TS],
      images: [""]
    },
    {
      title: "Tender Dashboard — Circulantis",
      description: `Python desktop app that scrapes public tenders and auto-generates structured reports for the team.`,
      tags: [TAGS.PYTHON],
      images: [""]
    },
    {
      title: "Fontanería Rocafull — business site & blog",
      description: `Astro landing and blog for a local business, optimized for SEO and performance.`,
      tags: [TAGS.ASTRO, TAGS.TS],
      images: [""]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="freelance-projects" class="flex flex-col gap-y-16 mb-14" aria-labelledby="freelance-projects-heading"> <header class="flex content-start items-end gap-2 mb-0"> ${renderComponent($$result, "Code", $$Code2, { "class": "shrink-0", "aria-hidden": "true" })} <h2 id="freelance-projects-heading" class="text-2xl font-bold">
Freelance projects
</h2> </header> ${PROJECTS.map((project) => renderTemplate`${renderComponent($$result, "FreelanceProjectItem", $$FreelanceProjectItem, { "projectItemData": project })}`)} </section>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/components/FreelanceProjects.astro", void 0);

const $$User = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$User;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} class="icon icon-tabler icon-tabler-user" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path> <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path> </svg>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/icons/User.astro", void 0);

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex content-start items-end gap-2 mb-8 mt-4"> ${renderComponent($$result, "User", $$User, { "class": "size-8 shrink-0", "aria-hidden": "true" })} <h2 id="about-me-heading" class="text-2xl font-bold">About me</h2> </header> <section id="about-me" class="flex gap-5 sm:gap-x-8 justify-between items-center mb-8 flex-col sm:flex-row" aria-labelledby="about-me-heading"> <div class="flex flex-col gap-3 w-full text-[1rem] sm:text-lg sm:w-[50%] [&>p]:text-balance [&>p>strong]:text-yellow-400 [&>p>strong]:font-semibold"> <h3 class="text-xl font-semibold">Hi! I'm Adrian Rocafull.</h3> <p>
I still remember when that teacher, Roberto, showed us how to print our
      first "Hello world" using C. Today I build
<strong>web and mobile products with React, Next.js, React Native, Expo, and
        Node.js</strong>
— all grounded in a
<strong>bachelor's degree in computer science</strong> from the UPV. I work
      in <strong>Spanish (native)</strong> and
<strong>English (professional working proficiency)</strong>.
</p> <p>
I have been part of multiple <strong>Hackathons in Valencia</strong>, like
      IDays and The Challenge VDS2023. My enthusiasm for this field leads me to
<strong>read programming-related newsletters</strong> and
<strong>build projects on my own</strong> in order to stay current.
</p> <p>
Last but not least, <strong>I love reading</strong>, mostly fantasy books
      written by authors like Brandon Sanderson or Patrick Rothfuss.
</p> </div> <img class="hidden rounded-lg sm:block sm:h-[30rem] sm:w-[20rem] object-cover object-center shadow-sm shadow-yellow-400" src="/profile.webp" alt="Adrian Rocafull profile picture"> </section>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/components/AboutMe.astro", void 0);

const $$Envelope = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="icon icon-tabler icon-tabler-mail" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path> <path d="M3 7l9 6l9 -6"></path> </svg>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/icons/Envelope.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex content-start items-end gap-2 mb-8 mt-[6rem]"> <span class="shrink-0 text-yellow-400/90" aria-hidden="true"> ${renderComponent($$result, "Envelope", $$Envelope, {})} </span> <h2 id="contact-heading" class="text-2xl font-bold">Contact me</h2> </header> <section id="contact" aria-labelledby="contact-heading"> <form class="flex flex-col gap-5" action="https://formspree.io/f/moqgjqjk" method="POST"> <div> <label for="email" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Mail</label> <input required name="email" type="email" id="email" autocomplete="email" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs md:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/90 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-visible:ring-yellow-400/80"> </div> <div class="mb-5"> <label for="message" class="block mb-2 text-md text-gray-900 dark:text-white">Message</label> <textarea required name="message" id="message" rows="6" class="block w-full min-h-[8rem] p-4 resize-y text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/90 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-visible:ring-yellow-400/80"></textarea> </div> <button type="submit" class="py-2.5 px-5 me-2 mb-2 text-[1rem] w-fit font-medium text-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/90 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus-visible:z-10 dark:focus-visible:ring-yellow-400/80 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:hover:text-yellow-400 dark:hover:bg-gray-700">Submit</button> </form> </section>`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/components/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Adrian Rocafull — React, TypeScript, Next.js, React Native & Node.js developer";
  const description = "Full-stack developer from Valencia with 4+ years of experience building web and mobile products with React, TypeScript, Next.js, React Native, Expo, and Node.js — plus AWS when the stack calls for it.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="main-content" tabindex="-1" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "TimeLine", $$TimeLine, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "FreelanceProjects", $$FreelanceProjects, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "AboutMe", $$AboutMe, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-j7pv25f6": true })} </main> ` })}`;
}, "C:/Users/hardh/Documents/code/portfolioV2/src/pages/index.astro", void 0);

const $$file = "C:/Users/hardh/Documents/code/portfolioV2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
