// src/components/InfoSection.tsx
import React from "react";
import Link from "next/link";

const InfoSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-indigo-50 pt-24">
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            Why Choose H&C Tech Solution?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with business understanding to
            deliver solutions that don&apos;t just look great – they drive real
            results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16 max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-bold sm:text-4xl mb-6">
              Your Success is Our Mission
            </h3>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over{" "}
              <strong className="text-indigo-700">5 years of experience</strong>{" "}
              serving Malaysian businesses, we understand the unique challenges
              you face. Our team delivers{" "}
              <strong className="text-indigo-700">custom solutions</strong> that
              align with your business goals, ensuring every project drives
              measurable growth and success.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Free consultation and project planning
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Ongoing support and maintenance
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Performance optimization and SEO
                </span>
              </div>
            </div>

            <Link href="/contactus">
              <button className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors shadow-lg hover:shadow-xl">
                Get Your Free Consultation
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-indigo-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Custom Web Development
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tailored solutions built with modern frameworks like Next.js,
                React, and Node.js. Scalable, secure, and optimized for
                performance.
              </p>
            </div>

            <div className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-indigo-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                WordPress Excellence
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Custom themes, plugin development, and optimization.
                Easy-to-manage solutions that give you full control over your
                content.
              </p>
            </div>

            <div className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-indigo-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                E-commerce Solutions
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Complete online stores with secure payment gateways, inventory
                management, and customer analytics to boost your sales.
              </p>
            </div>

            <div className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-indigo-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                SEO & Performance
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Search engine optimization, speed optimization, and analytics
                setup to improve your search rankings and user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
