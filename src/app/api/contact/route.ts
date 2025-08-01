import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message, captcha } = await request.json();

    // Validácia
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Všetky povinné polia musia byť vyplnené' },
        { status: 400 }
      );
    }

    // Jednoduchá captcha validácia (môžete použiť Google reCAPTCHA)
    if (captcha !== 'bam2024') {
      return NextResponse.json(
        { error: 'Nesprávna captcha' },
        { status: 400 }
      );
    }

    // Email konfigurácia
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email obsah
    const mailOptions = {
      from: process.env.SMTP_FROM || 'noreply@bam-atelier.sk',
      to: process.env.CONTACT_EMAIL || 'info@bam-atelier.sk',
      subject: `Nová správa od ${name}`,
      html: `
        <h2>Nová správa z kontaktného formulára</h2>
        <p><strong>Meno:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefón:</strong> ${phone || 'Neuvedený'}</p>
        <p><strong>Správa:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Správa bola úspešne odoslaná' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Chyba pri odosielaní správy' },
      { status: 500 }
    );
  }
} 