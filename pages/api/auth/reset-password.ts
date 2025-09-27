import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 3; // 3 requests per window

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);
  
  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  userLimit.count++;
  return true;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Rate limiting
  const clientIP = req.headers['x-forwarded-for'] as string || req.connection.remoteAddress || 'unknown';
  if (!rateLimit(clientIP)) {
    return res.status(429).json({ error: "Too many requests. Please try again later." });
  }

  try {
    const { email } = req.body;

    // Input validation
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Generate reset token (in production, use a proper token generation library)
    const resetToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${resetToken}`;

    // Compose email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f1d1b;">Reset Your Password</h2>
        <p>You requested to reset your password for your Paralegal AI account.</p>
        <p>Click the button below to reset your password:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetUrl}" style="background-color: #1f1d1b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
            Reset Password
          </a>
        </div>
        <p>If the button doesn't work, copy and paste this link into your browser:</p>
        <p style="word-break: break-all; color: #666;">${resetUrl}</p>
        <p>This link will expire in 1 hour for security reasons.</p>
        <p>If you didn't request this password reset, please ignore this email.</p>
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
        <p style="color: #666; font-size: 12px;">
          © 2025 Paralegal AI. All rights reserved.
        </p>
      </div>
    `;

    // Send email
    await resend.emails.send({
      from: process.env.RESEND_FROM as string,
      to: email,
      subject: "Reset Your Paralegal AI Password",
      html: emailHtml,
    });

    // In production, you would store the reset token in the database with an expiration time
    // For now, we'll just return success

    return res.status(200).json({ 
      success: true, 
      message: "Password reset instructions have been sent to your email" 
    });
  } catch (err) {
    console.error("Password reset error:", err);
    return res.status(500).json({ error: "Failed to send reset email" });
  }
}



