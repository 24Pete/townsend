import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message, recaptchaToken } = await req.json();

  // Verify reCAPTCHA
  const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
  });

  const recaptchaData = await recaptchaResponse.json();
  const recaptchaScore = recaptchaData.score ?? 0.0;

  if (!recaptchaData.success || recaptchaScore < 0.5) {
    return Response.json({ success: false, message: `reCAPTCHA failed. Score: ${recaptchaScore}` }, { status: 400 });
  }

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
      user: 'apikey',
      pass: process.env.SENDGRID_API_KEY,
    },
  });

  // Email content
  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_SENDER}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\nreCAPTCHA Score: ${recaptchaScore}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      <hr />
      <p><strong>reCAPTCHA Score:</strong> ${recaptchaScore}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ success: true, message: 'Email sent successfully.', score: recaptchaScore });
  } catch (error) {
    console.error('Failed to send email:', error);
    return Response.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
  }
}
