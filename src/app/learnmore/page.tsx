// src/app/LearnMore/page.tsx

import type { Metadata } from "next";
import React from "react";
import LearnMoreSection from "@/components/LearnMoreSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About H&C Tech Solution - Web Development Company in Malaysia",
  description:
    "Learn about H&C Tech Solution, a leading web development company in Penang, Malaysia. Discover our expertise in custom websites, e-commerce, and digital transformation.",
  keywords: [
    "hc tech",
    "hnctechsolution",
    "about hc tech",
    "about H&C Tech Solution",
    "web development company Malaysia",
    "Penang web developer",
    "custom website development",
    "digital transformation services",
  ],
  openGraph: {
    title: "About H&C Tech Solution - Web Development Company in Malaysia",
    description:
      "Learn about H&C Tech Solution, a leading web development company in Penang, Malaysia. Discover our expertise in custom websites, e-commerce, and digital transformation.",
    url: "https://hctechsolution.com/learnmore",
    siteName: "H&C Tech Solution",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About H&C Tech Solution - Web Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About H&C Tech Solution - Web Development Company in Malaysia",
    description:
      "Learn about H&C Tech Solution, a leading web development company in Penang, Malaysia. Discover our expertise in custom websites, e-commerce, and digital transformation.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/learnmore",
  },
};

const LearnMore = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About H&C Tech Solution",
            description:
              "Learn about H&C Tech Solution, a leading web development company in Penang, Malaysia",
            url: "https://hctechsolution.com/learnmore",
            mainEntity: {
              "@type": "Organization",
              name: "H&C Tech Solution",
              alternateName: ["HC Tech", "HNCTechSolution", "hc tech", "H&C Tech"],
              description: "Professional web development services in Malaysia",
              foundingDate: "2024",
              location: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Butterworth",
                  addressRegion: "Penang",
                  addressCountry: "MY",
                },
              },
            },
          }),
        }}
      />
      <main>
        <div className="flex flex-col">
          <LearnMoreSection />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default LearnMore;
