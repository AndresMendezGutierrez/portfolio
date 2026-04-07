/// <reference types="astro/client" />

import type { ToastAPI, GrecaptchaAPI } from "./types";

interface ImportMetaEnv {
  readonly FIREBASE_PRIVATE_KEY: string;
  readonly FIREBASE_PROJECT_ID: string;
  readonly FIREBASE_CLIENT_EMAIL: string;
  readonly BASE_URL: string;
  readonly PUBLIC_RECAPTCHA_URL: string;
  readonly PUBLIC_RECAPTCHA_SITE_KEY: string;
  readonly PUBLIC_BACKEND_URL: string;
  readonly PUBLIC_MAIL_SERVICE_ID: string;
  readonly PUBLIC_MAIL_TEMPLATE_ID: string;
  readonly PUBLIC_MAIL_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {
    toast?: ToastAPI;
    grecaptcha?: GrecaptchaAPI;
  }
}
