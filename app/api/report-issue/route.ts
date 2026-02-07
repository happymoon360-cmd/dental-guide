import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const issueTypeLabels: Record<string, string> = {
  website_down: 'Website down',
  wrong_phone: 'Wrong phone number',
  wrong_address: 'Wrong address',
  pricing_changed: 'Pricing changed',
  data_outdated: 'Data is outdated',
  other: 'Other',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { schoolName, issueType, description, reporterEmail } = body;

    if (!schoolName || !issueType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const issueLabel = issueTypeLabels[issueType] || issueType;

    const emailContent = `
<h2>Dental School Data Issue Report</h2>

<p><strong>School:</strong> ${schoolName}</p>
<p><strong>Issue Type:</strong> ${issueLabel}</p>

<p><strong>Description:</strong></p>
<p>${description || 'No description provided'}</p>

<p><strong>Reporter Email:</strong> ${reporterEmail || 'Not provided'}</p>

<p><strong>Reported At:</strong> ${new Date().toISOString()}</p>
    `.trim();

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'Guerilla Dental Guide <no-reply@guerilladentalguide.com>',
      to: 'jun91249@gmail.com',
      subject: `Issue Report: ${schoolName} - ${issueLabel}`,
      html: emailContent,
      replyTo: reporterEmail,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
