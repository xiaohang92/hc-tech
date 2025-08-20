// src/app/api/send/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Server misconfiguration: RESEND_API_KEY is not set." },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const product = formData.get("product");
    const message = formData.get("message");

    if (!name || !email || !phone || !product || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const htmlContent = `
        <div>
            <h1>New Contact Form Submission</h1>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Product: ${product}</p>
            <p>Message: ${message}</p>
        </div>
        `;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["calvin@hctechsolution.com", "weihang@hctechsolution.com"],
      subject: "New Contact Form Submission",
      //   react: EmailTemplate({ name, email, phone, product, message }),
      html: htmlContent,
    });

    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { error: "An unexpected error occurred" },
        { status: 500 }
      );
    }
  }
}
