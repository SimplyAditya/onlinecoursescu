import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  const { name, phone, email, programme } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "chandigarhonlineuniversity727@gmail.com",
      pass: "fxjksuogadgiqliv",
    },
  });
  let mailOptions = {
    from: `Online Courses CU <chandigarhonlineuniversity727@gmail.com>`,
    to: "chandigarhonlineuniversity727@gmail.com",
    subject: "New Enquiry Details",
    text: `You have received a new enquiry from:
Name: ${name}
Phone: ${phone}
Email: ${email}
Programme: ${programme}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email" });
  }
}
