export function createWelcomeEmailTemplate(name, clientURL) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to Messenger</title>
</head>

<body style="
  margin: 0;
  padding: 0;
  background-color: #0f172a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Helvetica, Arial, sans-serif;
">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 16px;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table width="100%" cellpadding="0" cellspacing="0" style="
          max-width: 600px;
          background: linear-gradient(180deg, #0b1220 0%, #020617 100%);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.55);
        ">

          <!-- Header -->
          <tr>
            <td style="
              padding: 48px 40px;
              text-align: center;
              background: radial-gradient(circle at top, #2563eb 0%, #020617 70%);
            ">
              <img 
                src="https://img.freepik.com/free-vector/hand-drawn-message-element-vector-cute-sticker_53876-118344.jpg"
                width="72"
                height="72"
                style="
                  border-radius: 16px;
                  margin-bottom: 20px;
                  background: #fff;
                  padding: 10px;
                "
              />
              <h1 style="
                margin: 0;
                font-size: 30px;
                font-weight: 600;
                color: #ffffff;
                letter-spacing: -0.5px;
              ">
                Welcome to Messenger
              </h1>
              <p style="
                margin-top: 12px;
                font-size: 15px;
                color: #c7d2fe;
              ">
                Secure • Fast • Real-time communication
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 42px 40px; color: #e5e7eb;">
              <p style="
                font-size: 17px;
                margin-top: 0;
                margin-bottom: 18px;
              ">
                Hi <strong>${name}</strong>,
              </p>

              <p style="
                font-size: 15.5px;
                line-height: 1.7;
                color: #d1d5db;
                margin-bottom: 28px;
              ">
                You’re officially in. Messenger is designed to help you communicate effortlessly — whether you’re chatting one-on-one or collaborating with teams in real time.
              </p>

              <!-- Feature Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="
                background: rgba(255,255,255,0.03);
                border-radius: 14px;
                padding: 26px;
                margin-bottom: 34px;
                border: 1px solid rgba(255,255,255,0.08);
              ">
                <tr>
                  <td style="font-size: 15px; line-height: 1.6;">
                    <strong style="color: #93c5fd;">What you can do:</strong>
                    <ul style="margin: 14px 0 0 18px; padding: 0; color: #d1d5db;">
                      <li style="margin-bottom: 10px;">Create a personalized profile</li>
                      <li style="margin-bottom: 10px;">Connect with friends instantly</li>
                      <li style="margin-bottom: 10px;">Send messages, images & media</li>
                      <li>Enjoy secure, encrypted conversations</li>
                    </ul>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="${clientURL}" style="
                      display: inline-block;
                      padding: 14px 38px;
                      background: linear-gradient(135deg, #3b82f6, #2563eb);
                      color: #ffffff;
                      font-size: 15px;
                      font-weight: 600;
                      border-radius: 999px;
                      text-decoration: none;
                      box-shadow: 0 10px 30px rgba(59,130,246,0.45);
                    ">
                      Launch Messenger →
                    </a>
                  </td>
                </tr>
              </table>

              <p style="
                font-size: 14px;
                color: #9ca3af;
                margin-top: 36px;
                line-height: 1.6;
              ">
                Need help? Just reply to this email — we’re happy to assist.
              </p>

              <p style="
                margin-top: 28px;
                font-size: 14px;
                color: #9ca3af;
              ">
                — The Messenger Team
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="
              padding: 24px 32px;
              background: #020617;
              text-align: center;
              font-size: 12px;
              color: #6b7280;
            ">
              © 2025 Messenger • Built for secure communication
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;
}
