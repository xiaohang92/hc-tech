// src/api/send/route.ts
import { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, phone, product, message } = await req.body;

    // Basic validation for email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    try {
      const data = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: "hang_cw@hotmail.com",
        subject: "New Contact Form Submission",
        react: EmailTemplate({ name, email, phone, product, message }),
        text: "You have a new message from {name} regarding {product}.",
      });

      return res.status(200).json(data);
    } catch (error: any) {
      console.error("Error sending email:", error.message);
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
