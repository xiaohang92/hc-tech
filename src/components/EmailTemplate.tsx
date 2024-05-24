// src/components/EmailTemplate.tsx
import React from "react";
import { Html } from "@react-email/html";
import { Hr } from "@react-email/hr";
import { Text } from "@react-email/text";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  product: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  phone,
  product,
  message,
}) => (
  <Html lang="en">
    {/* Standard HTML tags are used here */}
    <div style={{ padding: "1em", fontFamily: "Arial, sans-serif" }}>
      <Text style={{ fontSize: "1.2em", fontWeight: "bold" }}>
        Dear Recipient,
      </Text>
      <Hr />
      <Text style={{ fontSize: "1em" }}>
        You have a new message from {name} regarding {product}.
      </Text>
      <Text style={{ fontSize: "0.9em", marginTop: "1em" }}>{message}</Text>
      <Hr />
      <Text style={{ fontSize: "0.9em" }}>Contact Information:</Text>
      <div>Email: {email}</div>
      <div>Contact Number: {phone}</div>
    </div>
  </Html>
);
