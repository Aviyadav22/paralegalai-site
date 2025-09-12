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

    // Compose email content
    const emailHtml = `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${number ? `<p><strong>Phone:</strong> ${number}</p>` : ""}
      <p><strong>Organization:</strong> ${organization || "N/A"}</p>
      <p><strong>Role:</strong> ${role || "N/A"}</p>
      <p><strong>Use Case:</strong> ${useCase || "N/A"}</p>
      <p><strong>Message:</strong> ${message || "N/A"}</p>
      <p><strong>Preferred Demo Time:</strong> ${demoTime || "N/A"}</p>
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
