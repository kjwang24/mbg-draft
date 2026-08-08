import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const TO_EMAIL = "mbgci@mit.edu";

type ContactBody = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Only posting is allowed" });
  }

  const body = req.body as ContactBody;
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const company = typeof body?.company === "string" ? body.company.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const subject = typeof body?.subject === "string" ? body.subject.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Name, email, and message are required" });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: "Please provide a valid email" });
  }

  if (!process.env.SMTP_PASS) {
    console.error("contact: SMTP_PASS is not set");
    return res.status(500).json({ ok: false, error: "Emailing isn't configured on the server." });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.resend.com",
    port: 465,
    secure: true,
    auth: {
      user: "resend",
      pass: process.env.SMTP_PASS,
    },
  });

  const fields: [string, string][] = [
    ["Name", name],
    ["Company", company || "—"],
    ["Email", email],
    ["Subject", subject || "—"],
  ];

  try {
    await transporter.sendMail({
      from: process.env.SENDER_EMAIL || "MBGCI Website <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: subject ? subject : `Client Inquiry from ${name}`,
      text: [...fields.map(([label, value]) => `${label}: ${value}`), "", message].join("\n"),
      html: [
        "<table cellpadding=\"4\" cellspacing=\"0\">",
        ...fields.map(
          ([label, value]) =>
            `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value)}</td></tr>`
        ),
        "</table>",
        `<p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
      ].join(""),
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("contact: failed to send email", err);
    return res.status(502).json({ ok: false, error: "Failed to send. Please try again or email us directly." });
  }
}
