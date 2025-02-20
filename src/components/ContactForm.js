"use client";

import { useState } from 'react';
import { useReCaptcha } from 'next-recaptcha-v3';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const { executeRecaptcha } = useReCaptcha();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // Get reCAPTCHA token
      const recaptchaToken = await executeRecaptcha('contact_form');
    

      // Send form data
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus('Message sent successfully! ✅');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setStatus(`Failed to send: ${result.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
   
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border" placeholder="Name" required />
      </div>

      <div>
    
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border"  placeholder="Email" required />
      </div>

      <div>
       
        <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-2 border"  placeholder="Your Message" required />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Send Message</button>

      {status && <p className="mt-2 text-sm">{status}</p>}
    </form>
  );
}
