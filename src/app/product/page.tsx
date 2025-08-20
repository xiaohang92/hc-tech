import type { Metadata } from "next";
import React, { Suspense } from "react";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Web Development Services & Products - H&C Tech Solution",
  description:
    "Explore our comprehensive web development services including custom websites, e-commerce solutions, WordPress development, and digital transformation services in Malaysia.",
  keywords: [
    "web development services",
    "custom website development",
    "e-commerce solutions",
    "WordPress development",
    "digital transformation",
    "web design services Malaysia",
  ],
  openGraph: {
    title: "Our Web Development Services & Products - H&C Tech Solution",
    description:
      "Explore our comprehensive web development services including custom websites, e-commerce solutions, WordPress development, and digital transformation services in Malaysia.",
    url: "https://hctechsolution.com/product",
    siteName: "H&C Tech Solution",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development Services & Products - H&C Tech Solution",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Web Development Services & Products - H&C Tech Solution",
    description:
      "Explore our comprehensive web development services including custom websites, e-commerce solutions, WordPress development, and digital transformation services in Malaysia.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/product",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Web Development Services",
            description:
              "Comprehensive web development services offered by H&C Tech Solution",
            url: "https://hctechsolution.com/product",
            itemListElement: [
              {
                "@type": "Service",
                position: 1,
                name: "Landing Page Development",
                description:
                  "Custom landing page development with responsive design and SEO optimization",
                provider: {
                  "@type": "Organization",
                  name: "H&C Tech Solution",
                },
                areaServed: "Malaysia",
              },
              {
                "@type": "Service",
                position: 2,
                name: "Full Website Development",
                description:
                  "Complete website development with backend integration and database management",
                provider: {
                  "@type": "Organization",
                  name: "H&C Tech Solution",
                },
                areaServed: "Malaysia",
              },
              {
                "@type": "Service",
                position: 3,
                name: "WordPress Development",
                description:
                  "Custom WordPress theme and plugin development with content management",
                provider: {
                  "@type": "Organization",
                  name: "H&C Tech Solution",
                },
                areaServed: "Malaysia",
              },
            ],
          }),
        }}
      />
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductSection />
        </Suspense>
        <Footer />
      </div>
    </>
  );
}
