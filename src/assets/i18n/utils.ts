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

  if (pathname.startsWith(`/${langCode}/`)) {
    console.log(`pathname.startsWith = ${pathname}`);
    return pathname;
  }

  console.log(`pathname = ${pathname}`);
  return langCode === defaultLang ? `${pathname}` : `${langCode}${pathname}`;
}
