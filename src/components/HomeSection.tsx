// src/components/HomeSection.tsx

import React from "react";
import Link from "next/link";

const HomeSection = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-12 lg:pt-24 lg:pb-16 lg:flex lg:items-center lg:min-h-screen">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4">
            🚀 Trusted by 50+ Malaysian Businesses
          </span>
        </div>

        <h1 className="text-4xl font-extrabold sm:text-6xl lg:text-7xl">
          Transform Your Business with
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Professional Web Solutions
          </span>
        </h1>

        <p className="mt-6 text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          We don&apos;t just build websites – we create{" "}
          <strong className="text-indigo-700">digital experiences</strong> that
          convert visitors into customers. Our expert team delivers{" "}
          <strong className="text-indigo-700">
            fast, secure, and scalable
          </strong>{" "}
          solutions using cutting-edge technologies.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contactus">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
              Start Your Project Today
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </Link>

          <Link href="/learnmore">
            <button className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200">
              Learn About Our Process
            </button>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-semibold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600 text-sm">
              Websites that load in under 2 seconds
            </p>
          </div>
          <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-2">🛡️</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Secure & Reliable
            </h3>
            <p className="text-gray-600 text-sm">
              Enterprise-grade security & 99.9% uptime
            </p>
          </div>
          <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-2">📱</div>
            <h3 className="font-semibold text-gray-900 mb-2">Mobile First</h3>
            <p className="text-gray-600 text-sm">
              Optimized for all devices & screen sizes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
