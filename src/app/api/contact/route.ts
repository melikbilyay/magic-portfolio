import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email, phone, message } = await request.json();

    const formattedMessage = message.replace(/\n/g, '<br>');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: 'Yeni İletişim Formu Mesajı',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
            <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #ddd;">
              <img src="cid:logo" alt="Haktan Teymur İnşaat Logo" style="max-width: 150px;"/>
            </div>
            <h2 style="color: #0056b3;">Yeni İletişim Formu Mesajı</h2>
            <p>Web sitenizden yeni bir iletişim formu mesajı aldınız:</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Gönderen E-posta:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Telefon Numarası:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${phone || 'Belirtilmedi'}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; vertical-align: top;">Mesaj:</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><p style="margin: 0;">${formattedMessage}</p></td>
              </tr>
            </table>
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #888;">
              <p>Haktan Teymur İnşaat</p>
              <p><a href="${process.env.NEXT_PUBLIC_BASE_URL || ''}" style="color: #0056b3;">Web Sitesini Ziyaret Et</a></p>
            </div>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: 'HT LOGO.PNG',
          path: `${process.cwd()}/public/pics/HT LOGO.PNG`,
          cid: 'logo'
        }
      ]
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'E-posta başarıyla gönderildi.' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'E-posta gönderilirken bir hata oluştu.' }, { status: 500 });
  }
}
