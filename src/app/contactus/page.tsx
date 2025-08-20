// src/app/contactus/page.tsx

import type { Metadata } from "next";
import React from "react";
import ContactUS from "@/components/ContactUs";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";

export const metadata: Metadata = {
  title: "Contact H&C Tech Solution - Web Development Services in Malaysia",
  description:
    "Get in touch with H&C Tech Solution for professional web development services. Contact us for custom websites, e-commerce solutions, and digital transformation in Penang, Malaysia.",
  keywords: [
    "contact H&C Tech Solution",
    "web development contact",
    "Penang web developer contact",
    "Malaysia web development services",
    "get quote web development",
  ],
  openGraph: {
    title: "Contact H&C Tech Solution - Web Development Services in Malaysia",
    description:
      "Get in touch with H&C Tech Solution for professional web development services. Contact us for custom websites, e-commerce solutions, and digital transformation in Penang, Malaysia.",
    url: "https://hctechsolution.com/contactus",
    siteName: "H&C Tech Solution",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact H&C Tech Solution - Web Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact H&C Tech Solution - Web Development Services in Malaysia",
    description:
      "Get in touch with H&C Tech Solution for professional web development services. Contact us for custom websites, e-commerce solutions, and digital transformation in Penang, Malaysia.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/contactus",
  },
};

const ContactUs = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact H&C Tech Solution",
            description:
              "Contact page for H&C Tech Solution web development services",
            url: "https://hctechsolution.com/contactus",
            mainEntity: {
              "@type": "Organization",
              name: "H&C Tech Solution",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+6011-11266316",
                contactType: "customer service",
                contactPerson: "Mr. Calvin",
                email: "calvin@hctechsolution.com",
                availableLanguage: "English, Malay, Chinese",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Butterworth",
                addressRegion: "Penang",
                addressCountry: "MY",
              },
            },
          }),
        }}
      />
      <main>
        <div className="flex flex-col">
          <ContactUS />
          <GoogleMap />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default ContactUs;
