"use client";
import { useState } from "react";
import { sendEmail } from "../actions/sendEmail";

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await sendEmail(formData);

    if (response.success) {
      setStatus("Email sent successfully!");
      event.target.reset();
    } else {
      setStatus("Failed to send email.");
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
