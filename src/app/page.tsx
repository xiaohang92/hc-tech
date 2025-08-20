import type { Metadata } from "next";
import HomeSection from "@/components/HomeSection";
import PriceSection from "@/components/PriceSection";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Professional Web Development Services in Malaysia",
  description:
    "Transform your business with H&C Tech Solution's expert web development services. Custom websites, e-commerce solutions, and digital transformation in Penang, Malaysia.",
  keywords: [
    "web development Malaysia",
    "website design Penang",
    "e-commerce development",
    "custom software Malaysia",
    "digital transformation services",
  ],
  openGraph: {
    title: "Professional Web Development Services in Malaysia",
    description:
      "Transform your business with H&C Tech Solution's expert web development services. Custom websites, e-commerce solutions, and digital transformation in Penang, Malaysia.",
    url: "https://hctechsolution.com",
    siteName: "H&C Tech Solution",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H&C Tech Solution - Web Development Services in Malaysia",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Web Development Services in Malaysia",
    description:
      "Transform your business with H&C Tech Solution's expert web development services. Custom websites, e-commerce solutions, and digital transformation in Penang, Malaysia.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "H&C Tech Solution",
            url: "https://hctechsolution.com",
            logo: "https://hctechsolution.com/hc-tech-logo.svg",
            description: "Professional web development services in Malaysia",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Butterworth",
              addressRegion: "Penang",
              addressCountry: "MY",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+6011-11266316",
              contactType: "customer service",
              contactPerson: "Mr. Calvin",
            },
            sameAs: [
              "https://www.facebook.com/hctechsolution",
              "https://www.linkedin.com/company/hctechsolution",
            ],
            serviceArea: {
              "@type": "Country",
              name: "Malaysia",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Web Development Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Landing Page Development",
                    description:
                      "Custom landing page development with responsive design",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Full Website Development",
                    description:
                      "Complete website development with backend integration",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "WordPress Development",
                    description:
                      "Custom WordPress theme and plugin development",
                  },
                },
              ],
            },
          }),
        }}
      />
      <main>
        <div className="flex flex-col">
          <HomeSection />
          <PriceSection />
          <InfoSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
