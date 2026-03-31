import type { ui } from "./assets/i18n/ui";

export type Locale = keyof typeof ui;

export type TranslationKey = keyof (typeof ui)["en"];

export type TranslateFn = (key: TranslationKey) => string;

export interface LocaleProps {
  currentLang: Locale;
  translate: TranslateFn;
}

export interface TranslateOnlyProps {
  translate: TranslateFn;
}

export type ErrorType = "error_captcha" | "error_mail" | "error_network";

export interface ContactResponse {
  success: boolean;
  errorType?: ErrorType;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
}

export type ToastType = "success" | "error";

export interface ToastAPI {
  show: (message: string, type?: ToastType) => void;
}

export interface GrecaptchaAPI {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
}

export interface RecaptchaVerifyResponse {
  isValid: boolean;
}

export interface UIMessageMap {
  required: string;
  email: string;
  form_success: string;
  error_captcha: string;
  error_mail: string;
  error_network: string;
  [key: string]: string;
}

export interface WIDItem {
  title: TranslationKey;
  description: TranslationKey;
  icon: string;
}

export interface NavItem {
  id: string;
  label: TranslationKey;
}
