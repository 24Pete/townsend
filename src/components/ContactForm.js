"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("Verifying reCAPTCHA...");

    const formData = new FormData(event.target);

    try {
      // Fetch reCAPTCHA token
      const { token } = await fetch("/api/recaptcha", { method: "POST" }).then(res => res.json());

      if (!token) {
        setStatus("reCAPTCHA verification failed.");
        return;
      }

      formData.append("g-recaptcha-response", token);

      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setStatus(result.success ? "Email sent!" : "Email failed.");
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
