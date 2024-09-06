import { c as createAstro, a as createComponent, r as renderTemplate, d as addAttribute, m as maybeRenderHead, s as spreadAttributes, b as renderComponent, u as unescapeHTML, F as Fragment, f as createTransitionScope, g as renderHead, h as renderSlot } from './astro/server_CuGB0Mp9.mjs';
import 'kleur/colors';
import 'clsx';
import { getIconData, iconToSVG } from '@iconify/utils';
/* empty css                          */

const $$Astro$3 = createAstro("https://example.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><!-- <link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin />
<link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin /> --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap" rel="stylesheet"><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/components/BaseHead.astro", void 0);

const SITE_TITLE = "Ace Website";
const SITE_DESCRIPTION = "Welcome to Ace Website";
const githubLink = "https://github.com/";
const linkedinLink = "https://www.linkedin.com/";
const instagramLink = "https://www.instagram.com/";


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$2 = createAstro("https://example.com");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="tracking-wider bg-[#000621] pt-8 rounded-t-3xl text-center md:text-left"> <div class="content-container mx-auto flex flex-col flex-wrap md:flex-row md:flex-nowrap md:items-center lg:items-start"> <div class="m-6 flex flex-grow md:mt-0 md:pl-20"> <div class="w-full p-4 px-4 md:w-1/2 lg:w-1/2"> <div class="flex flex-col gap-4 text-white"> <div class="flex gap-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:github", "size": 30 })} <a${addAttribute(githubLink, "href")} target="_blank">GitHub</a> </div> <div class="flex gap-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:linkedin", "size": 30 })} <a${addAttribute(linkedinLink, "href")} target="_blank">LinkedIn</a> </div> <div class="flex gap-4"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:instagram", "size": 30 })} <a${addAttribute(instagramLink, "href")} target="_blank">Instagram</a> </div> </div> </div> </div> <div class="mx-10 flex flex-shrink-0 flex-col gap-2 text-white md:w-1/3"> <p class="pt-4">ACE</p> <p>Department of CSE</p> <p class="">NMAM Institute of Technology, Nitte, Karkala Taluk, Udupi-574110 Karnataka, India</p> <a href="mailto:ace@nmamit.in" target="_blank">ace@nmamit.in</a> </div> </div> <div class="text-white"> <p class="px-5 py-5 text-center">
ACE © ${(/* @__PURE__ */ new Date()).getFullYear()} </p> </div> </footer>`;
}, "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/components/Footer.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="w-full fixed top-0 z-50 backdrop-blur-sm" style="background-color: rgba(24, 23, 23, 0.3);" data-astro-cid-3ef6ksr2${addAttribute(createTransitionScope($$result, "c22sul6k"), "data-astro-transition-persist")}> <div class="content-container flex justify-between gap-4 items-center py-2" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2> <img src="/images/logo.png" alt="ACE" class="h-16 w-auto" data-astro-cid-3ef6ksr2> </a> <nav class="relative flex justify-between gap-8 items-center" data-astro-cid-3ef6ksr2> <a href="/events" class="nav-link" data-astro-cid-3ef6ksr2>events</a> <a href="/faculty" class="nav-link" data-astro-cid-3ef6ksr2>faculty</a> <a href="/gallery" class="nav-link" data-astro-cid-3ef6ksr2>gallery</a> <a href="/team" class="nav-link" data-astro-cid-3ef6ksr2>team</a> <a href="/developers" class="nav-link" data-astro-cid-3ef6ksr2>dev-team</a> </nav> </div> </header> `;
}, "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/components/Header.astro", "self");

const $$MouseTrailer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="trailer" data-astro-cid-2ajenj3a${addAttribute(createTransitionScope($$result, "jdt3phex"), "data-astro-transition-persist")}> <div id="trailer-icon" data-astro-cid-2ajenj3a></div> </div>  `;
}, "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/components/MouseTrailer.astro", "self");

const $$Astro$1 = createAstro("https://example.com");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = SITE_TITLE, description = SITE_DESCRIPTION } = Astro2.props;
  const { name, email } = Astro2.locals;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "MouseTrailer", $$MouseTrailer, {})} ${renderComponent($$result, "Header", $$Header, {})} <div class="flex items-center justify-center  mt-5 content-container text-white">Hiiiiii</div> ${name && renderTemplate`<div class="mt-5 content-container text-white flex items-center justify-center h-screen">Hello ${name}!</div>`} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/Len/OneDrive/Desktop/ACE/ace-website/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Icon as a };