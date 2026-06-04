import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, firma, email, menge, nachricht } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: 'Name und E-Mail sind Pflichtfelder.' }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: 'Labeldrop Anfrage <onboarding@resend.dev>',
      to: 'info@labeldrop.de',
      replyTo: email,
      subject: `Neue Anfrage von ${name}${firma ? ` (${firma})` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f4f8fc;">
          <div style="background: #1D65AD; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 20px; letter-spacing: 2px;">LABELDROP</h1>
            <p style="color: #EEF4FA; margin: 8px 0 0; font-size: 13px;">Neue Kundenanfrage</p>
          </div>
          <div style="background: white; padding: 32px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #EEF4FA; color: #9FB6CF; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; width: 130px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #EEF4FA; color: #1D2B4F; font-weight: bold;">${name}</td>
              </tr>
              ${firma ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #EEF4FA; color: #9FB6CF; font-size: 12px; letter-spacing: 1px; text-transform: uppercase;">Unternehmen</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #EEF4FA; color: #1D2B4F;">${firma}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #EEF4FA; color: #9FB6CF; font-size: 12px; letter-spacing: 1px; text-transform: uppercase;">E-Mail</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #EEF4FA;"><a href="mailto:${email}" style="color: #1D65AD;">${email}</a></td>
              </tr>
              ${menge ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #EEF4FA; color: #9FB6CF; font-size: 12px; letter-spacing: 1px; text-transform: uppercase;">Menge</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #EEF4FA; color: #1D2B4F;">${menge} Flaschen</td>
              </tr>` : ''}
              ${nachricht ? `
              <tr>
                <td style="padding: 12px 0; color: #9FB6CF; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; vertical-align: top;">Nachricht</td>
                <td style="padding: 12px 0; color: #1D2B4F; line-height: 1.6;">${nachricht.replace(/\n/g, '<br>')}</td>
              </tr>` : ''}
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #EEF4FA; border-radius: 6px; font-size: 13px; color: #9FB6CF;">
              Einfach auf "Antworten" klicken um direkt an ${email} zu antworten.
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('E-Mail Fehler:', error);
    return NextResponse.json({ error: 'E-Mail konnte nicht gesendet werden.' }, { status: 500 });
  }
}
