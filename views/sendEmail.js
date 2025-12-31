const nodeMailer = require('nodemailer')
const url = /* 'http://localhost:3000' */ 'https://secrets-h91m.onrender.com'
const dotenv = require('dotenv')
dotenv.config()
const transporter = nodeMailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  }
})

function sendGmail(to, verificationCode, name) {
  transporter.sendMail({
    from: '"Secrets Zx" <ishu46025@gmail.com>',
    to: to,
    subject: "Email Verification",
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="color-scheme" content="light only">
    <meta name="supported-color-schemes" content="light">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
      @media screen and (max-width: 600px) {
        .container { width: 100% !important; }
        .content { padding: 24px !important; }
        .code { letter-spacing: 4px !important; font-size: 22px !important; }
      }
    </style>
  </head>
  <body style="margin:0; padding:0; background:#198754;">
    <center role="article" aria-roledescription="email" lang="en">
      <!-- Outer wrapper -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#198754;">
        <tr>
          <td align="center" style="padding:32px 12px;">
            <!-- Card -->
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" class="container" style="max-width:600px; width:100%; background:#ffffff; border-radius:12px; box-shadow:0 6px 20px rgba(0,0,0,0.06);">
              <!-- Header -->
              <tr>
                <td align="center" style="padding:28px 24px 0 24px;">
                  <h1 style="color:#198754;">Secrets</h1>
                </td>
              </tr>
              <!-- Content -->
              <tr>
                <td class="content" style="padding:32px; font-family:Arial, Helvetica, sans-serif; color:#1f2937;">
                  <h1 style="margin:0 0 12px 0; font-size:22px; line-height:1.3; font-weight:700; color:#111827;">
                    Verify your email
                  </h1>
                  <p style="margin:0 0 16px 0; font-size:14px; line-height:1.7; color:#4b5563;">
                    Hi ${name}, thanks for signing up. To finish setting up your account, please verify your email address.
                  </p>

                  <!-- Verification code -->
                  <p style="margin:0 0 8px 0; font-size:13px; color:#6b7280;">
                    Enter this verification code in the web-app:
                  </p>
                  <div class="code" style="display:inline-block; margin:8px 0 20px 0; padding:12px 18px; border:1px solid #e5e7eb; border-radius:8px; font-size:20px; font-weight:700; letter-spacing:3px; color:#111827; background:#fafafa;">
                    ${verificationCode}
                  </div>

                  <!-- CTA button (verification link) -->
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0; padding:0;">
                    <tr>
                      <td align="center">
                        <a href="${url}/verification"
                           style="display:inline-block; padding:12px 20px; background:#198754; color:#ffffff; text-decoration:none; border-radius:8px; font-weight:700; font-size:14px;">
                           Verify email
                        </a>
                      </td>
                    </tr>
                  </table>

                  <!-- Link fallback -->
                  <p style="margin:16px 0 0 0; font-size:12px; line-height:1.7; color:#6b7280;">
                    If the button doesn’t work, copy and paste this link into your browser:
                    <br>
                    <a href="${url}/verification" style="color:#2563eb; text-decoration:underline; word-break:break-all;">${url}/verification</a>
                  </p>

                  <!-- Security and expiry -->
                  <p style="margin:16px 0 0 0; font-size:12px; line-height:1.7; color:#6b7280;">
                    This code expires in 10 minutes. If you didn’t request this, you can safely ignore this email.
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td align="center" style="padding:20px 24px 28px 24px; font-family:Arial, Helvetica, sans-serif;">
                  <p style="margin:0; font-size:11px; color:#9ca3af;">
                    Sent by Secrets • ZX
                  </p>
                </td>
              </tr>
            </table>
            <!-- /Card -->
          </td>
        </tr>
      </table>
    </center>
  </body>
</html>`

  })
}

module.exports = sendGmail