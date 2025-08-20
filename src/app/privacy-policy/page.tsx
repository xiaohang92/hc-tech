// src/app/privacy-policy/page.tsx
import type { Metadata } from "next";
import React from "react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - H&C Tech Solution",
  description:
    "Read H&C Tech Solution's privacy policy to understand how we collect, use, and protect your personal information when using our web development services.",
  keywords: [
    "privacy policy",
    "H&C Tech Solution privacy",
    "data protection",
    "personal information",
    "web development privacy",
  ],
  openGraph: {
    title: "Privacy Policy - H&C Tech Solution",
    description:
      "Read H&C Tech Solution's privacy policy to understand how we collect, use, and protect your personal information when using our web development services.",
    url: "https://hctechsolution.com/privacy-policy",
    siteName: "H&C Tech Solution",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - H&C Tech Solution",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - H&C Tech Solution",
    description:
      "Read H&C Tech Solution's privacy policy to understand how we collect, use, and protect your personal information when using our web development services.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

const PrivacyPolicy = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            description:
              "Privacy policy for H&C Tech Solution web development services",
            url: "https://hctechsolution.com/privacy-policy",
            mainEntity: {
              "@type": "Organization",
              name: "H&C Tech Solution",
              description: "Professional web development services in Malaysia",
            },
          }),
        }}
      />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-gray-700 mb-4">
                  We collect information you provide directly to us, such as
                  when you:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Contact us through our contact form</li>
                  <li>Request a quote or consultation</li>
                  <li>Sign up for our services</li>
                  <li>Communicate with us via email or phone</li>
                </ul>
                <p className="text-gray-700">
                  This information may include your name, email address, phone
                  number, company name, and project details.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Provide and improve our web development services</li>
                  <li>Communicate with you about your projects</li>
                  <li>Send you technical information and updates</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Process payments and manage billing</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Information Sharing
                </h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>
                    To trusted third-party service providers who assist us in
                    operating our website and providing services
                  </li>
                  <li>
                    When required by law or to protect our rights and safety
                  </li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Data Security
                </h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your
                  personal information against unauthorized access, alteration,
                  disclosure, or destruction. However, no method of transmission
                  over the internet is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Cookies and Tracking
                </h2>
                <p className="text-gray-700 mb-4">
                  Our website may use cookies and similar tracking technologies
                  to enhance your browsing experience and analyze website
                  traffic. You can control cookie settings through your browser
                  preferences.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Your Rights
                </h2>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Data Retention
                </h2>
                <p className="text-gray-700 mb-4">
                  We retain your personal information for as long as necessary
                  to provide our services and fulfill the purposes outlined in
                  this policy, unless a longer retention period is required by
                  law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. International Transfers
                </h2>
                <p className="text-gray-700 mb-4">
                  Your information may be transferred to and processed in
                  countries other than your own. We ensure appropriate
                  safeguards are in place to protect your data in accordance
                  with this policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Children&apos;s Privacy
                </h2>
                <p className="text-gray-700 mb-4">
                  Our services are not intended for children under 13 years of
                  age. We do not knowingly collect personal information from
                  children under 13.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. Changes to This Policy
                </h2>
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page and updating the &quot;Last updated&quot; date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  11. Contact Us
                </h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 mb-2">
                    <strong>H&C Tech Solution</strong>
                  </p>
                  <p className="text-gray-700 mb-2">
                    Email: calvin@hctechsolution.com
                  </p>
                  <p className="text-gray-700 mb-2">
                    Phone: +6011-11266316 (Mr. Calvin)
                  </p>
                  <p className="text-gray-700">
                    Address: Butterworth, Penang, Malaysia
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default PrivacyPolicy;
