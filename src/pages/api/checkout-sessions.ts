// src/pages/api/checkout-sessions.ts
import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { priceId, name, clientName, mobile } = req.body;

      if (!priceId) {
        throw new Error("Price ID is missing.");
      }

      const resendApiKey = process.env.RESEND_API_KEY;
      if (!resendApiKey) {
        throw new Error("Server misconfiguration: RESEND_API_KEY is not set.");
      }
      const resend = new Resend(resendApiKey);

      // Send email to clerk with client's mobile number
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: ["calvin@hctechsolution.com", "weihang@hctechsolution.com"],
        subject: "New Order",
        html: `
          <div>
            <h1>New Order for ${name}</h1>
            <p>Service: ${name}</p>
            <p>Client Name: ${clientName}</p>
            <p>Mobile Number: ${mobile}</p>
          </div>
        `,
      });

      const stripeSecret = process.env.STRIPE_SECRET_KEY as string | undefined;
      if (!stripeSecret) {
        throw new Error(
          "Server misconfiguration: STRIPE_SECRET_KEY is not set."
        );
      }
      const stripe = require("stripe")(stripeSecret);
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/product?name=${name}&status=success`,
        cancel_url: `${req.headers.origin}/product?name=${name}&status=cancel`,
      });
      res.redirect(303, session.url);
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
