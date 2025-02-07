import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// Simple in-memory store for rate limiting
const rateLimit = new Map();

async function sendEmail(req, res) {
  console.log("API route hit");
  try {
    // Basic rate limiting
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const now = Date.now();
    const windowStart = now - 15 * 60 * 1000; // 15 minutes ago

    if (rateLimit.has(ip)) {
      const requests = rateLimit.get(ip).filter((time) => time > windowStart);
      if (requests.length >= 5) {
        return res
          .status(429)
          .json({ error: "Too many requests, please try again later." });
      }
      requests.push(now);
      rateLimit.set(ip, requests);
    } else {
      rateLimit.set(ip, [now]);
    }

    console.log("Received request body:", req.body);

    if (!req.body.email || !req.body.name || !req.body.message) {
      console.log("Missing required fields");
      return res.status(400).json({ error: "Missing required fields" });
    }

    const msg = {
      to: process.env.user,
      from: {
        email: process.env.user,
        name: "Kyle Vannarath",
      },
      subject: `[Lead from website] : ${req.body.subject || "No Subject"}`,
      html: `<!DOCTYPE html>
                  <html>
                    <body>
                      <h3>New message from ${req.body.name} (${req.body.email})</h3>
                      <p>${req.body.message}</p>
                    </body>
                  </html>`,
    };

    console.log("Attempting to send email with:", msg);
    await sendgrid.send(msg);
    console.log("Email sent successfully");

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("SendGrid error:", error);
    return res.status(error.statusCode || 500).json({
      error: error.message || "Error sending email",
    });
  }
}

export default sendEmail;
