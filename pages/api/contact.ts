// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, organization, role, useCase, message, demoTime, number } = req.body;

    // Input validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Length validation
    if (name.length > 100 || email.length > 100 || message.length > 2000) {
      return res.status(400).json({ error: "Input too long" });
    }

    // Sanitize inputs
    const sanitizeInput = (input: string) => input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').trim();

    // Compose email content with sanitized inputs
    const emailHtml = `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${sanitizeInput(name)}</p>
      <p><strong>Email:</strong> ${sanitizeInput(email)}</p>
      ${number ? `<p><strong>Phone:</strong> ${sanitizeInput(number)}</p>` : ""}
      <p><strong>Organization:</strong> ${organization ? sanitizeInput(organization) : "N/A"}</p>
      <p><strong>Role:</strong> ${role ? sanitizeInput(role) : "N/A"}</p>
      <p><strong>Use Case:</strong> ${useCase ? sanitizeInput(useCase) : "N/A"}</p>
      <p><strong>Message:</strong> ${sanitizeInput(message)}</p>
      <p><strong>Preferred Demo Time:</strong> ${demoTime ? sanitizeInput(demoTime) : "N/A"}</p>
    `;

    // ✅ sender & recipient from environment
    const from = process.env.RESEND_FROM as string;
    const to = process.env.CONTACT_RECEIVER as string; 

    await resend.emails.send({
      from,
      to,
      subject: "New Paralegal AI Contact Request",
      html: emailHtml,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
