import { ui } from "./translationData";

const defaultLang = 'en' as const;

export function useTranslations(lang: keyof typeof ui) {
    return function translateFunction(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}