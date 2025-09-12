// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const resend = new Resend(apiKey || "");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, organization, role, usecase, message, demoTime } = req.body || {};

  if (!apiKey) {
    console.error("Resend API key missing.");
    return res.status(500).json({ error: "Email service not configured" });
  }

  if (!email || !name) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM || "Paralegal AI <onboarding@resend.dev>",
      to: "aviyadav.official@gmail.com",
      subject: `📩 Contact Request from ${name}`,
      html: `
        <div style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#111;">
          <h2>New Contact / Demo Request</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Organization:</strong> ${escapeHtml(organization || "")}</p>
          <p><strong>Role:</strong> ${escapeHtml(role || "")}</p>
          <p><strong>Use case:</strong> ${escapeHtml(usecase || "")}</p>
          <p><strong>Preferred demo time:</strong> ${escapeHtml(demoTime || "")}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message || "")}</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}

// small helper to avoid naive injection into email HTML
function escapeHtml(str: string) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
