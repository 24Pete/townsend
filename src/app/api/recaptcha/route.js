export async function POST(req) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const siteKey = process.env.RECAPTCHA_SITE_KEY;
  
    try {
      const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${siteKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
  
      const data = await response.json();
      return Response.json({ success: data.success, token: siteKey });
    } catch (error) {
      console.error("reCAPTCHA verification error:", error);
      return Response.json({ success: false });
    }
  }
  