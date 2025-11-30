// src/app/portfolio/page.tsx

import type { Metadata } from "next";
import React from "react";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio - WordPress Projects | H&C Tech Solution",
  description:
    "Explore our portfolio of WordPress projects. See how we've helped businesses in Malaysia create professional, responsive websites that drive results.",
  keywords: [
    "hc tech portfolio",
    "wordpress projects",
    "web development portfolio",
    "Malaysia web developer",
    "wordpress websites",
    "custom wordpress development",
  ],
  openGraph: {
    title: "Portfolio - WordPress Projects | H&C Tech Solution",
    description:
      "Explore our portfolio of WordPress projects. See how we've helped businesses in Malaysia create professional, responsive websites.",
    url: "https://hctechsolution.com/portfolio",
    siteName: "H&C Tech Solution",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&C Tech Solution Portfolio - WordPress Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - WordPress Projects | H&C Tech Solution",
    description:
      "Explore our portfolio of WordPress projects. See how we've helped businesses in Malaysia create professional, responsive websites.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/portfolio",
  },
};

const Portfolio = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Portfolio - H&C Tech Solution",
            description:
              "Portfolio showcasing WordPress projects developed by H&C Tech Solution",
            url: "https://hctechsolution.com/portfolio",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "CreativeWork",
                  name: "Eastmate Coffee Website",
                  description:
                    "A modern WordPress e-commerce website for a coffee business",
                  url: "https://eastmatecoffee.com",
                },
                {
                  "@type": "CreativeWork",
                  name: "Moesie Corporate Website",
                  description:
                    "A professional WordPress website showcasing business services",
                  url: "https://moesie.my",
                },
              ],
            },
          }),
        }}
      />
      <main>
        <div className="flex flex-col">
          <PortfolioSection />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Portfolio;

