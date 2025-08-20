// src/components/PriceSection.tsx
import Link from "next/link";
import React from "react";
import { products } from "@/lib/products";

const PriceSection = () => {
  return (
    <section className="bg-white py-20 pt-24">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            Transparent Pricing, Exceptional Value
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your business needs. All plans
            include our commitment to quality, performance, and ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-2xl ${
                index === 1
                  ? "border-indigo-600 bg-gradient-to-br from-indigo-50 to-purple-50 scale-105 shadow-xl"
                  : "border-gray-200 bg-white hover:border-indigo-300 hover:scale-105"
              }`}>
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${product.price.toLocaleString()}
                  </span>
                  <span className="text-gray-500 ml-2">one-time</span>
                </div>

                <div className="text-sm text-gray-500 mb-6">
                  <p>⚡ Delivery: {product.deliveryTime}</p>
                  <p>🛠️ Tech: {product.technologyStack}</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-900 text-lg">
                  What&apos;s included:
                </h4>
                <ul className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-indigo-600 mt-0.5 mr-3 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={`/product?name=${product.name}`}>
                <button
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    index === 1
                      ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl"
                      : "bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white"
                  }`}>
                  {index === 1 ? "Get Started Now" : "Choose This Plan"}
                </button>
              </Link>

              {index === 1 && (
                <p className="text-center text-sm text-indigo-600 mt-4 font-medium">
                  🎉 Limited time: Free SEO setup included!
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              Have specific requirements? Let&apos;s discuss your project and
              create a tailored solution that fits your budget and timeline.
            </p>
            <Link href="/contactus">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Schedule Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
