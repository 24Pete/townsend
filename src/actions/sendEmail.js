import sgMail from "@sendgrid/mail";

export async function sendEmail({ name, email, message }) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: process.env.EMAIL_TO, // Recipient
    from: process.env.EMAIL_FROM, // Sender
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  try {
    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.error("SendGrid Error:", error.response ? error.response.body : error);
    return false;
  }
}
