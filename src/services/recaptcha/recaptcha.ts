export const validationRecaptchaV3 = async (token: string) => {
  const url = import.meta.env.PUBLIC_CLOUD_FUNCTIONS_URL;
  console.log(url);
  console.log(token);
  try {
    const response = await fetch(`${url}/verifyRecaptcha`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    const data = await response.json();
    return data.isValid;
  } catch (error) {
    console.error("Error validating reCAPTCHA:", error);
    return false;
  }
};
