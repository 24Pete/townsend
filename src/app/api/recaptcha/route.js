export async function POST(req) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const { token } = await req.json(); // Expecting frontend to send token
  
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: secretKey, response: token }),
    });
  
    const data = await response.json();
    console.log("reCAPTCHA response:", data); // 🔍 Debug log
  
    return Response.json(data);
  }