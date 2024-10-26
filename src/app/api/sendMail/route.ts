import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, description, websiteName } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIEVER,
      subject: `Message from ${name} - ${websiteName}`,
      text: `
        Name: ${name}
        Email: ${email}
        Description: ${description}
        Website Name: ${websiteName}`,
    };

    await transporter.sendMail(mailOptions);
    return new Response("Success", {
      status: 200,
      statusText: "Email sent successfully.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("Error", { status: 500 });
  }
}
