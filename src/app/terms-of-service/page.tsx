// src/app/terms-of-service/page.tsx
import type { Metadata } from "next";
import React from "react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service - H&C Tech Solution",
  description:
    "Read H&C Tech Solution's terms of service to understand the conditions and agreements for using our web development services in Malaysia.",
  keywords: [
    "terms of service",
    "H&C Tech Solution terms",
    "web development terms",
    "service agreement",
    "terms and conditions",
  ],
  openGraph: {
    title: "Terms of Service - H&C Tech Solution",
    description:
      "Read H&C Tech Solution's terms of service to understand the conditions and agreements for using our web development services in Malaysia.",
    url: "https://hctechsolution.com/terms-of-service",
    siteName: "H&C Tech Solution",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Terms of Service - H&C Tech Solution",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - H&C Tech Solution",
    description:
      "Read H&C Tech Solution's terms of service to understand the conditions and agreements for using our web development services in Malaysia.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/terms-of-service",
  },
};

const TermsOfService = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms of Service",
            description:
              "Terms of service for H&C Tech Solution web development services",
            url: "https://hctechsolution.com/terms-of-service",
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
              Terms of Service
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
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using the services of H&amp;C Tech Solution
                  (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you
                  accept and agree to be bound by the terms and provision of
                  this agreement. If you do not agree to abide by the above,
                  please do not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Services Description
                </h2>
                <p className="text-gray-700 mb-4">
                  H&C Tech Solution provides web development services including
                  but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Landing page development</li>
                  <li>Full website development</li>
                  <li>WordPress development and customization</li>
                  <li>E-commerce solutions</li>
                  <li>SEO and performance optimization</li>
                  <li>Website maintenance and support</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Project Terms and Conditions
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      3.1 Project Initiation
                    </h3>
                    <p className="text-gray-700">
                      Projects begin upon receipt of the required booking fee
                      and project approval. All projects require a 50% deposit
                      before work begins, with the remaining balance due upon
                      project completion.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      3.2 Project Timeline
                    </h3>
                    <p className="text-gray-700">
                      Project timelines are estimates and may vary based on
                      project complexity, client feedback, and revisions. We
                      commit to keeping you informed of any timeline changes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      3.3 Revisions
                    </h3>
                    <p className="text-gray-700">
                      Each project includes up to 3 rounds of revisions.
                      Additional revisions may incur additional charges at our
                      standard hourly rate.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Payment Terms
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      4.1 Payment Schedule
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>50% deposit required before project commencement</li>
                      <li>Remaining balance due upon project completion</li>
                      <li>All payments are non-refundable once work begins</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      4.2 Late Payments
                    </h3>
                    <p className="text-gray-700">
                      Late payments may result in project suspension and may
                      incur additional fees. We reserve the right to charge
                      interest on overdue amounts.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Client Responsibilities
                </h2>
                <p className="text-gray-700 mb-4">As a client, you agree to:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>
                    Provide timely feedback and responses to our inquiries
                  </li>
                  <li>
                    Supply necessary content, images, and materials for your
                    project
                  </li>
                  <li>
                    Review and approve project milestones within agreed
                    timeframes
                  </li>
                  <li>
                    Ensure you have rights to all content and materials provided
                  </li>
                  <li>Maintain regular communication throughout the project</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Intellectual Property
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      6.1 Client Content
                    </h3>
                    <p className="text-gray-700">
                      You retain ownership of all content, images, and materials
                      you provide. You grant us a license to use this content
                      for the purpose of completing your project.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      6.2 Final Deliverables
                    </h3>
                    <p className="text-gray-700">
                      Upon final payment, you receive full ownership of the
                      final website or application. We retain the right to
                      showcase your project in our portfolio.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Limitation of Liability
                </h2>
                <p className="text-gray-700 mb-4">
                  H&C Tech Solution shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages,
                  including but not limited to loss of profits, data, or
                  business opportunities, arising from the use of our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Warranty and Support
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      8.1 Project Warranty
                    </h3>
                    <p className="text-gray-700">
                      We provide a 30-day warranty period after project
                      completion for any bugs or issues related to our
                      development work.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      8.2 Ongoing Support
                    </h3>
                    <p className="text-gray-700">
                      Support packages are available for ongoing maintenance and
                      updates. Basic support is included for 3 months after
                      project completion.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Termination
                </h2>
                <p className="text-gray-700 mb-4">
                  Either party may terminate this agreement with written notice.
                  Upon termination, you will be responsible for payment of all
                  work completed up to the termination date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. Confidentiality
                </h2>
                <p className="text-gray-700 mb-4">
                  We maintain strict confidentiality regarding your business
                  information and project details. We will not disclose any
                  confidential information to third parties without your written
                  consent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  11. Governing Law
                </h2>
                <p className="text-gray-700 mb-4">
                  These terms shall be governed by and construed in accordance
                  with the laws of Malaysia. Any disputes shall be resolved
                  through amicable discussion or mediation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  12. Changes to Terms
                </h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify these terms at any time.
                  Changes will be effective immediately upon posting on our
                  website. Your continued use of our services constitutes
                  acceptance of the modified terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  13. Contact Information
                </h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please
                  contact us:
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

export default TermsOfService;
