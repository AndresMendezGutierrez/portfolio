import { routes, ui } from "./ui.ts";
import type { Locale, TranslateFn, TranslationKey } from "../../types.ts";

type PageKey = keyof (typeof routes)[typeof defaultLang];

export const languages: Record<Locale, string> = {
  es: "Español",
  en: "English",
  de: "Deutsch",
};

export const defaultLang: Locale = "en";

export function getLangFromUrl(url: URL): Locale {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const pathname = url.pathname.startsWith(base) ? url.pathname.replace(base, "") : url.pathname;
  const [, lang] = pathname.split("/");
  if (lang in ui) return lang as Locale;
  return defaultLang;
}

export function useTranslations(lang: Locale): TranslateFn {
  return function t(key: TranslationKey): string {
    const langStrings = ui[lang] as Record<TranslationKey, string>;
    const defaultStrings = ui[defaultLang] as Record<TranslationKey, string>;
    return langStrings[key] || defaultStrings[key];
  };
}

export function getTranslatedPath(pathname: string, targetLang: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const relativePathname = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;

  const langCode = targetLang as Locale;
  const segments = relativePathname.split("/").filter((s: string) => s !== "");

  if (segments.length > 0 && segments[0] in languages) {
    segments.shift();
  }

  const cleanPathname = "/" + segments.join("/");

  let newPath = "";
  if (langCode === defaultLang) {
    newPath = cleanPathname;
  } else {
    newPath = `/${langCode}${cleanPathname === "/" ? "" : cleanPathname}`;
  }

  return base + (newPath === "" ? "/" : newPath);
}
