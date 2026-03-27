import emailjs from "@emailjs/browser";
import type { ContactResponse } from "../../types";

export const sendEmail = async (form: HTMLFormElement): Promise<ContactResponse> => {
  try {
    const result = await emailjs.sendForm(
      import.meta.env.PUBLIC_MAIL_SERVICE_ID,
      import.meta.env.PUBLIC_MAIL_TEMPLATE_ID,
      form,
      import.meta.env.PUBLIC_MAIL_PUBLIC_KEY,
    );

    return { success: result.status === 200 };
  } catch (error: unknown) {
    console.error("Mail Error:", error);
    return {
      success: false,
      errorType: "error_mail",
    };
  }
};
