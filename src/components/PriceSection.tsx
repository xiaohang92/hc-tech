// src/components/PriceSection.tsx
import Link from "next/link";
import React from "react";

const PriceSection = () => {
  const products = [
    {
      name: "Landing Page Development",
      description:
        "Perfect for businesses needing a high-quality landing page.",
      price: 1000,
      features: [
        "Custom design",
        "Responsive layout",
        "SEO optimized",
        "Ongoing support",
      ],
      priceId: "price_1PKHPY07J704FKDMrTOyJuQF",
    },
    {
      name: "Full Website Development",
      description: "Ideal for businesses needing a comprehensive web solution.",
      price: 3000,
      features: [
        "Custom design and development",
        "Backend integration",
        "SEO optimized",
        "1 year of support",
      ],
      priceId: "price_1PKHPY07J704FKDMrTOyJuQG",
    },
    {
      name: "WordPress Development",
      description: "Best for customizable and easy-to-manage website.",
      price: 1000,
      features: [
        "Custom theme development",
        "Plugin setup and customization",
        "SEO optimized",
        "3 months of support",
      ],
      priceId: "price_1PKHPY07J704FKDMrTOyJuQH",
    },
  ];

  return (
    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-gray-900">
                {product.name}
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 text-gray-700">{product.description}</p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  ${product.price}
                </strong>
                <span className="text-sm font-medium text-gray-700">
                  /one-time
                </span>
              </p>

              <Link href={`/product?name=${product.name}`}>
                <span className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6">
                  Get Started
                </span>
              </Link>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-gray-900 sm:text-xl">
                What's included:
              </p>
              <ul className="mt-2 space-y-2 sm:mt-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 text-indigo-700">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceSection;
