import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, firma, email, telefon, menge, nachricht } = await req.json();

  const now = new Date();
  const zeitpunkt = now.toLocaleString('de-DE', {
    timeZone: 'Europe/Berlin',
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  }) + ' Uhr';

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
          <div style="background: white; padding: 28px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 9px 0; border-bottom: 1px solid #EEF4FA; color: #9FB6CF; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; width: 120px;">Name</td>
                <td style="padding: 9px 0; border-bottom: 1px solid #EEF4FA; color: #1D2B4F; font-size: 13px; font-weight: bold;">${name}</td>
              </tr>
              ${firma ? `
              <tr>
                <td style="padding: 9px 0; border-bottom: 1px solid #EEF4FA; color: #9FB6CF; font-size: 11px; letter-spacing: 1px; text-transform: uppercase;">Unternehmen</td>
                <td style="padding: 9px 0; border-bottom: 1px solid #EEF4FA; color: #1D2B4F; font-size: 13px;">${firma}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 9px 0; border-bottom: 1px solid #EEF4FA; color: #9FB6CF; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; white-space: nowrap;">E-Mail</td>
                <td style="padding: 9px 0; border-bottom: 1px solid #EEF4FA; font-size: 13px; white-space: nowrap;"><a href="mailto:${email}" style="color: #1D65AD;">${email}</a></td>
              </tr>
              ${telefon ? `
              <tr>
                <td style="padding: 9px 0; border-bottom: 1px solid #EEF4FA; color: #9FB6CF; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; white-space: nowrap;">Telefon</td>
                <td style="padding: 9px 0; border-bottom: 1px solid #EEF4FA; color: #1D2B4F; font-size: 13px; white-space: nowrap;">${telefon}</td>
              </tr>` : ''}
              ${menge ? `
              <tr>
                <td style="padding: 9px 0; border-bottom: 1px solid #EEF4FA; color: #9FB6CF; font-size: 11px; letter-spacing: 1px; text-transform: uppercase;">Menge</td>
                <td style="padding: 9px 0; border-bottom: 1px solid #EEF4FA; color: #1D2B4F; font-size: 13px;">${menge} Flaschen</td>
              </tr>` : ''}
              ${nachricht ? `
              <tr>
                <td style="padding: 9px 0; border-bottom: 1px solid #EEF4FA; color: #9FB6CF; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; vertical-align: top;">Nachricht</td>
                <td style="padding: 9px 0; border-bottom: 1px solid #EEF4FA; color: #1D2B4F; font-size: 13px; line-height: 1.6;">${nachricht.replace(/\n/g, '<br>')}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 9px 0; color: #9FB6CF; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; white-space: nowrap;">Zeitpunkt</td>
                <td style="padding: 9px 0; color: #9FB6CF; font-size: 12px;">${zeitpunkt}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 14px; background: #EEF4FA; border-radius: 6px; font-size: 12px; color: #9FB6CF;">
              Einfach auf "Antworten" klicken um direkt an ${email} zu antworten.
            </div>
          </div>
        </div>
      `,
    });

    // Automatische Antwort an den Kunden
    await resend.emails.send({
      from: 'Labeldrop <onboarding@resend.dev>',
      to: email,
      replyTo: 'info@labeldrop.de',
      subject: `Vielen Dank für Ihre Anfrage, ${name.split(' ')[0]}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #EEF4FA;">

          <!-- Header -->
          <div style="background: #1D65AD; padding: 32px 28px; border-radius: 8px 8px 0 0; text-align: center;">
            <div style="display: inline-block; margin-bottom: 12px;">
              <span style="color: white; font-size: 22px; font-weight: bold; letter-spacing: 3px;">LABELDROP</span>
            </div>
            <p style="color: #EEF4FA; margin: 0; font-size: 13px; letter-spacing: 1px;">PREMIUM BRANDING · INDIVIDUELL GEFERTIGT</p>
          </div>

          <!-- Inhalt -->
          <div style="background: white; padding: 36px 32px; border-radius: 0 0 8px 8px;">

            <p style="color: #9FB6CF; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 8px;">Ihre Anfrage</p>
            <h2 style="color: #1D2B4F; font-size: 22px; font-weight: 300; margin: 0 0 24px; line-height: 1.3;">
              Vielen Dank,<br/><strong style="font-weight: 600;">${name.split(' ')[0]}.</strong>
            </h2>

            <p style="color: #4a6080; font-size: 14px; line-height: 1.8; margin: 0 0 16px;">
              Wir haben Ihre Anfrage erhalten und melden uns <strong>innerhalb von 24 Stunden</strong> persönlich bei Ihnen — unverbindlich und auf Augenhöhe.
            </p>

            <p style="color: #4a6080; font-size: 14px; line-height: 1.8; margin: 0 0 32px;">
              Bei Labeldrop verwandeln wir jede Flasche Wasser in ein hochwertiges Markenprodukt — mit Ihrem Logo, Ihren Farben, Ihrer Persönlichkeit. <em>Marketing, das getrunken wird.</em>
            </p>

            <!-- Trennlinie -->
            <div style="border-top: 1px solid #EEF4FA; margin: 0 0 28px;"></div>

            <!-- Drei Punkte -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
              <tr>
                <td style="width: 33%; padding: 0 8px 0 0; vertical-align: top;">
                  <div style="background: #EEF4FA; border-radius: 8px; padding: 16px; text-align: center;">
                    <div style="color: #1D65AD; font-size: 20px; margin-bottom: 8px;">✦</div>
                    <p style="color: #1D2B4F; font-size: 12px; font-weight: bold; margin: 0 0 4px; letter-spacing: 0.5px;">INDIVIDUELL</p>
                    <p style="color: #9FB6CF; font-size: 11px; margin: 0; line-height: 1.5;">Jede Flasche auf Ihr Unternehmen abgestimmt</p>
                  </div>
                </td>
                <td style="width: 33%; padding: 0 4px; vertical-align: top;">
                  <div style="background: #EEF4FA; border-radius: 8px; padding: 16px; text-align: center;">
                    <div style="color: #1D65AD; font-size: 20px; margin-bottom: 8px;">✦</div>
                    <p style="color: #1D2B4F; font-size: 12px; font-weight: bold; margin: 0 0 4px; letter-spacing: 0.5px;">PREMIUM</p>
                    <p style="color: #9FB6CF; font-size: 11px; margin: 0; line-height: 1.5;">Hochwertige Materialien & Druck</p>
                  </div>
                </td>
                <td style="width: 33%; padding: 0 0 0 8px; vertical-align: top;">
                  <div style="background: #EEF4FA; border-radius: 8px; padding: 16px; text-align: center;">
                    <div style="color: #1D65AD; font-size: 20px; margin-bottom: 8px;">✦</div>
                    <p style="color: #1D2B4F; font-size: 12px; font-weight: bold; margin: 0 0 4px; letter-spacing: 0.5px;">PERSÖNLICH</p>
                    <p style="color: #9FB6CF; font-size: 11px; margin: 0; line-height: 1.5;">Beratung von Idee bis Lieferung</p>
                  </div>
                </td>
              </tr>
            </table>

            <!-- CTA Button -->
            <div style="text-align: center; margin-bottom: 32px;">
              <a href="https://labeldrop.de" style="display: inline-block; background: #1D65AD; color: white; text-decoration: none; padding: 14px 36px; border-radius: 40px; font-size: 13px; letter-spacing: 2px; font-weight: 500;">
                LABELDROP.DE
              </a>
            </div>

            <!-- Trennlinie -->
            <div style="border-top: 1px solid #EEF4FA; margin: 0 0 20px;"></div>

            <!-- Footer Info -->
            <p style="color: #9FB6CF; font-size: 12px; text-align: center; margin: 0; line-height: 1.8;">
              Bei Fragen antworten Sie einfach auf diese E-Mail.<br/>
              <a href="https://labeldrop.de" style="color: #1D65AD; text-decoration: none;">labeldrop.de</a>
              &nbsp;·&nbsp;
              <a href="mailto:info@labeldrop.de" style="color: #1D65AD; text-decoration: none;">info@labeldrop.de</a>
            </p>

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
