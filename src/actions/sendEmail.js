"use server";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendEmail(formData) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const token = formData.get("g-recaptcha-response");

  // Verify reCAPTCHA with Google
  const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret: secretKey, response: token }),
  }).then(res => res.json());

  if (!recaptchaResponse.success || recaptchaResponse.score < 0.5) {
    return { success: false, error: "reCAPTCHA failed. Try again." };
  }

  // Send email via SendGrid
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    await sendgrid.send({
      to: "your-recipient@example.com",
      from: "your-verified-email@example.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    });

    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error: "Failed to send email." };
  }
}
