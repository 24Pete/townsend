import { sendEmail } from "@/utils/sendEmail";

export async function POST(req) {
  const formData = await req.formData();
  const recaptchaToken = formData.get("recaptchaToken");
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  // Verify reCAPTCHA
  const verificationResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret: secretKey, response: recaptchaToken }),
  });

  const verificationResult = await verificationResponse.json();

  if (!verificationResult.success || verificationResult.score < 0.5) {
    return Response.json({ success: false, message: "reCAPTCHA verification failed." }, { status: 400 });
  }

  // Send Email
  const success = await sendEmail({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  return Response.json({ success });
}
