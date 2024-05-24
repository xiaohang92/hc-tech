// src/components/PriceSection.tsx
import React from "react";

const PriceSection = () => {
  return (
    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              Landing Page Development
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 text-gray-700">
              Perfect for businesses needing a high-quality landing page.
            </p>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                $500
              </strong>
              <span className="text-sm font-medium text-gray-700">
                /one-time
              </span>
            </p>

            <a
              className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
              href="#">
              Get Started
            </a>
          </div>

          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-gray-900 sm:text-xl">
              What&apos;s included:
            </p>

            <ul className="mt-2 space-y-2 sm:mt-4">
              <li className="flex items-center gap-1">
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
                <span className="text-gray-700">Custom design</span>
              </li>

              <li className="flex items-center gap-1">
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
                <span className="text-gray-700">Responsive layout</span>
              </li>

              <li className="flex items-center gap-1">
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
                <span className="text-gray-700">SEO optimized</span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-red-700">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-gray-700">Ongoing support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              Full Website Development
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 text-gray-700">
              Ideal for businesses needing a comprehensive web solution.
            </p>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                $1500
              </strong>
              <span className="text-sm font-medium text-gray-700">
                /one-time
              </span>
            </p>

            <a
              className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
              href="#">
              Get Started
            </a>
          </div>

          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-gray-900 sm:text-xl">
              What&apos;s included:
            </p>

            <ul className="mt-2 space-y-2 sm:mt-4">
              <li className="flex items-center gap-1">
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
                <span className="text-gray-700">
                  Custom design and development
                </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-indigo-700">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-700">Backend integration</span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-indigo-700">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-700">SEO optimized</span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-indigo-700">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-700">1 year of support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-gray-900">
              WordPress Development
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 text-gray-700">
              Best for customizable and easy-to-manage website.
            </p>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                $1000
              </strong>
              <span className="text-sm font-medium text-gray-700">
                /one-time
              </span>
            </p>

            <a
              className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
              href="#">
              Get Started
            </a>
          </div>

          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-gray-900 sm:text-xl">
              What&apos;s included:
            </p>

            <ul className="mt-2 space-y-2 sm:mt-4">
              <li className="flex items-center gap-1">
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
                <span className="text-gray-700">Custom theme development</span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-indigo-700">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-700">
                  Plugin setup and customization
                </span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-indigo-700">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-700">SEO optimized</span>
              </li>

              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-indigo-700">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-700">3 months of support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
