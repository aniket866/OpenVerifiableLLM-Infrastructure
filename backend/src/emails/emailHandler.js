import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "../emails/emailTemplate.js";

export const sendWelcomeEmail = async (email, fullName, clientURL) => {
  const { data, error } = await resendClient.emails.send({
    from: `${sender.fullName} <${sender.email}>`,
    to: email,
    subject: "Welcome to Chatt-app!",
    html: createWelcomeEmailTemplate(fullName, clientURL),
  });

  if (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Failed to send welcome email");
  }

  console.log("Welcome Email sent successfully", data);
};