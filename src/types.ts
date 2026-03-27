import type { ui } from "./assets/i18n/ui";

// ── Locale ───────────────────────────────────────────────────────
export type Locale = keyof typeof ui;

// ── Translation keys (derived from the default 'en' locale) ──────
export type TranslationKey = keyof (typeof ui)["en"];

// ── Translate function returned by useTranslations() ─────────────
export type TranslateFn = (key: TranslationKey) => string;

// ── Reusable component prop shapes ───────────────────────────────
export interface LocaleProps {
  currentLang: Locale;
  translate: TranslateFn;
}

export interface TranslateOnlyProps {
  translate: TranslateFn;
}

// ── Service types ────────────────────────────────────────────────
export type ErrorType =
  | "error_captcha"
  | "error_mail"
  | "error_network";

export interface ContactResponse {
  success: boolean;
  errorType?: ErrorType;
}

// ── Skills ───────────────────────────────────────────────────────
export interface Skill {
  id: number;
  name: string;
  icon: string;
}

// ── Toast (global window augmentation) ───────────────────────────
export type ToastType = "success" | "error";

export interface ToastAPI {
  show: (message: string, type?: ToastType) => void;
}

// ── reCAPTCHA (global window augmentation) ───────────────────────
export interface GrecaptchaAPI {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
}

// ── Recaptcha backend response ───────────────────────────────────
export interface RecaptchaVerifyResponse {
  isValid: boolean;
}

// ── UIMessageMap for form ────────────────────────────────────────
export interface UIMessageMap {
  required: string;
  email: string;
  form_success: string;
  error_captcha: string;
  error_mail: string;
  error_network: string;
  [key: string]: string;
}

// ── WID card data ────────────────────────────────────────────────
export interface WIDItem {
  title: TranslationKey;
  description: TranslationKey;
  icon: string;
}

// ── NavItem ──────────────────────────────────────────────────────
export interface NavItem {
  id: string;
  label: TranslationKey;
}
