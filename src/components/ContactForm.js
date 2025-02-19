"use client";
import { useState } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

function ContactForm() {
  const [status, setStatus] = useState(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("Verifying reCAPTCHA...");

    if (!executeRecaptcha) {
      setStatus("reCAPTCHA not available.");
      return;
    }

    try {
      const token = await executeRecaptcha("contact_form");

      if (!token) {
        setStatus("reCAPTCHA verification failed.");
        return;
      }

      const formData = new FormData(event.target);
      formData.append("recaptchaToken", token);

      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setStatus(result.success ? "Email sent!" : "Error sending email.");
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" placeholder="Name" required className="border p-2 w-full" />
      <input type="email" name="email" placeholder="Email" required className="border p-2 w-full" />
      <textarea name="message" placeholder="Your message" required className="border p-2 w-full"></textarea>

      <button type="submit" className="bg-blue-500 text-white p-2">Send Email</button>
      {status && <p className="text-green-500">{status}</p>}
    </form>
  );
}

// Wrap Form with reCAPTCHA Provider
export default function WrappedContactForm() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
      <ContactForm />
    </GoogleReCaptchaProvider>
  );
}
