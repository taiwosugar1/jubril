import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { formType, ...fields } = body;

        // Build a readable HTML table of all submitted fields
        const rows = Object.entries(fields)
            .map(
                ([key, val]) =>
                    `<tr>
            <td style="padding:6px 14px 6px 0;color:#555;font-weight:600;text-transform:capitalize;white-space:nowrap;">
              ${key.replace(/([A-Z])/g, ' $1')}
            </td>
            <td style="padding:6px 0;color:#111;">${val || '—'}</td>
          </tr>`
            )
            .join('');

        const subjects: Record<string, string> = {
            consulting: '📋 New Consulting Inquiry — jubriloflagos.com',
            contact: '✉️ New Contact Message — jubriloflagos.com',
            speaking: '🎤 New Speaking Booking Request — jubriloflagos.com',
        };

        await transporter.sendMail({
            from: `"Jubril Lagos Website" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_TO,
            replyTo: fields.email as string,   // clicking Reply goes to the sender
            subject: subjects[formType] ?? '📬 New Website Submission',
            html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f9f9f9;border-radius:8px;">
          <h2 style="margin:0 0 24px;color:#0a0a0a;font-size:22px;">
            ${subjects[formType] ?? 'New Website Submission'}
          </h2>
          <table style="width:100%;border-collapse:collapse;">
            ${rows}
          </table>
          <p style="margin:32px 0 0;font-size:12px;color:#aaa;">
            Sent from jubriloflagos.com
          </p>
        </div>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Mail error:', err);
        return NextResponse.json(
            { success: false, error: 'Failed to send email.' },
            { status: 500 }
        );
    }
}