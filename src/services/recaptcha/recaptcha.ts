import type { ContactResponse, RecaptchaVerifyResponse } from "../../types";

export const verifyRecaptcha = async (token: string): Promise<ContactResponse> => {
  try {
    const response = await fetch(import.meta.env.PUBLIC_BACKEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    const data: RecaptchaVerifyResponse = await response.json();

    return {
      success: data.isValid,
      errorType: data.isValid ? undefined : "error_captcha",
    };
  } catch (_error: unknown) {
    return { success: false, errorType: "error_network" };
  }
};
