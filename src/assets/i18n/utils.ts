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
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getRelativePath(url: URL) {
  const pathname = url.pathname;
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0 && (segments[0] as any) in ui) {
    return segments.slice(1).join("/");
  }
  return segments.join("/");
}

export function getTranslatedPath(url: URL, targetLang: string) {
  const slug = getRelativePath(url);
  const langCode = targetLang as Locale;

  if (!slug || slug === "/") {
    return langCode === defaultLang ? "/" : `/${langCode}/`;
  }

  const pageKey = (Object.keys(routes[defaultLang]) as PageKey[]).find(
    (key) => {
      return Object.values(routes).some(
        (langRoutes) => langRoutes[key] === slug,
      );
    },
  );

  if (!pageKey) {
    return langCode === defaultLang ? "/" : `/${langCode}/`;
  }

  const translatedSlug = routes[langCode][pageKey];

  return langCode === defaultLang
    ? `/${translatedSlug}`
    : `/${langCode}/${translatedSlug}`;
}
