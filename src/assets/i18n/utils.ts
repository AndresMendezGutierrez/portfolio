import { routes, ui } from "./ui.ts";

type Locale = keyof typeof routes;
type PageKey = keyof (typeof routes)[typeof defaultLang];

export const languages = {
  es: "Español",
  en: "English",
  de: "Deutsch",
};

export const defaultLang = "en" as const;

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Locale;
  return defaultLang;
}

export function useTranslations(lang: Locale) {
  return function t(key: keyof (typeof ui)[Locale]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getTranslatedPath(pathname: string, targetLang: string) {
  const langCode = targetLang as Locale;
  const segments = pathname.split("/").filter((s) => s !== "");

  if (segments.length > 0 && segments[0] in languages) {
    segments.shift();
  }

  const cleanPathname = "/" + segments.join("/");

  if (langCode === defaultLang) {
    return cleanPathname;
  }

  return `/${langCode}${cleanPathname === "/" ? "/" : cleanPathname}`;
}
