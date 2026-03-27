interface ImportMetaEnv {
  readonly FIREBASE_PRIVATE_KEY_ID: string;
  readonly FIREBASE_PRIVATE_KEY: string;
  readonly FIREBASE_PROJECT_ID: string;
  readonly FIREBASE_CLIENT_EMAIL: string;
  readonly FIREBASE_CLIENT_ID: string;
  readonly FIREBASE_AUTH_URI: string;
  readonly FIREBASE_TOKEN_URI: string;
  readonly FIREBASE_AUTH_CERT_URL: string;
  readonly FIREBASE_CLIENT_CERT_URL: string;
  readonly BASE_URL: string;
  readonly PUBLIC_RECAPTCHA_URL: string;
  readonly RECAPTCHA_SITE_KEY: string;
  readonly RECAPTCHA_SECRET_KEY: string;
  readonly PUBLIC_BACKEND_URL: string;
  readonly PUBLIC_MAIL_SERVICE_ID: string;
  readonly PUBLIC_MAIL_TEMPLATE_ID: string;
  readonly PUBLIC_MAIL_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
