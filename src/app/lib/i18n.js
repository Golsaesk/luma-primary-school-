/* ==========================================================================
   i18n.js — tiny, framework-free content loader
   Works with the /en and /fa style URLs described in the README.
   ========================================================================== */

const SUPPORTED_LANGS = ["en", "fa"];
const DEFAULT_LANG = "en";

/**
 * Reads the language from the URL path.
 * Expects URLs like /en/page.html or /fa/ -> returns "en" or "fa".
 * Falls back to DEFAULT_LANG if the path doesn't start with a known lang.
 */
function getLangFromPath() {
  const segments = window.location.pathname.split("/").filter(Boolean);
  const first = segments[0];
  return SUPPORTED_LANGS.includes(first) ? first : DEFAULT_LANG;
}

/**
 * Reads a dot-notation path like "auth.loginTitle" out of a nested object.
 */
function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

/**
 * Fetches the JSON content file for a given language.
 */
async function loadContent(lang) {
  const res = await fetch(`/content/${lang}.json`);
  if (!res.ok) throw new Error(`Missing content file for "${lang}"`);
  return res.json();
}

/**
 * Walks the DOM and fills every element tagged with data-i18n.
 * - data-i18n="hero.title"            -> sets textContent
 * - data-i18n-placeholder="auth.emailPlaceholder" -> sets placeholder attr
 * - data-i18n-html="some.key"         -> sets innerHTML (use only for trusted content)
 */
function applyContent(content) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = getNestedValue(content, el.getAttribute("data-i18n"));
    if (value !== undefined) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const value = getNestedValue(content, el.getAttribute("data-i18n-placeholder"));
    if (value !== undefined) el.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const value = getNestedValue(content, el.getAttribute("data-i18n-html"));
    if (value !== undefined) el.innerHTML = value;
  });

  // Set <html lang="..."> and dir="ltr"/"rtl" automatically (important for Farsi/Arabic)
  if (content.meta) {
    document.documentElement.lang = content.meta.lang || DEFAULT_LANG;
    document.documentElement.dir = content.meta.dir || "ltr";
    if (content.meta.title) document.title = content.meta.title;
  }
}

/**
 * Builds the equivalent URL for a different language, preserving the
 * current page. Use this to power a language switcher.
 */
function buildLangSwitchUrl(targetLang) {
  const segments = window.location.pathname.split("/").filter(Boolean);
  if (SUPPORTED_LANGS.includes(segments[0])) segments[0] = targetLang;
  else segments.unshift(targetLang);
  return "/" + segments.join("/");
}

async function initI18n() {
  const lang = getLangFromPath();
  try {
    const content = await loadContent(lang);
    applyContent(content);
  } catch (err) {
    console.error(err);
    if (lang !== DEFAULT_LANG) {
      const fallback = await loadContent(DEFAULT_LANG);
      applyContent(fallback);
    }
  }

  // Wire up any language switcher links: <a data-lang-switch="fa">
  document.querySelectorAll("[data-lang-switch]").forEach((el) => {
    el.setAttribute("href", buildLangSwitchUrl(el.getAttribute("data-lang-switch")));
  });
}

document.addEventListener("DOMContentLoaded", initI18n);
