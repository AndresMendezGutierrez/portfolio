export const validationRecaptchaV3 = async (token: string) => {
  try {
    const response = await fetch(import.meta.env.PUBLIC_BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    return data.isValid;
  } catch (error) {
    console.error("Error validating reCAPTCHA:", error);
    return false;
  }
};
