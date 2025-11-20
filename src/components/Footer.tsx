// src/components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/ht-tech-logo-with-word-no-background.png";

const Footer = () => {
  return (
    <div className="w-full">
      <footer className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src={logo}
                  width={160}
                  height={48}
                  alt="H&C Tech Solution Logo"
                  className="brightness-0 invert w-40 md:w-56 h-auto"
                />
              </Link>
              <p className="text-gray-300 mb-6 max-w-md">
                We transform businesses through innovative web solutions. From
                custom development to WordPress expertise, we deliver results
                that drive growth and success.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link
                    href="/product?name=Landing Page Development"
                    className="hover:text-white transition-colors">
                    Landing Pages
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product?name=Full Website Development"
                    className="hover:text-white transition-colors">
                    Full Websites
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product?name=WordPress Development"
                    className="hover:text-white transition-colors">
                    WordPress
                  </Link>
                </li>
                <li>
                  <span className="hover:text-white transition-colors">
                    E-commerce
                  </span>
                </li>
                <li>
                  <span className="hover:text-white transition-colors">
                    SEO Services
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <p className="font-medium">Mr. Calvin</p>
                  <a
                    href="tel:+6011-11266316"
                    className="hover:text-white transition-colors">
                    +6011-11266316
                  </a>
                </div>
                <div>
                  <p className="font-medium">Mr. Chuah</p>
                  <a
                    href="tel:+6012-5261536"
                    className="hover:text-white transition-colors">
                    +6012-5261536
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:calvin@hctechsolution.com"
                    className="hover:text-white transition-colors">
                    calvin@hctechsolution.com
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:weihang@hctechsolution.com"
                    className="hover:text-white transition-colors">
                    weihang@hctechsolution.com
                  </a>
                </div>
                <div className="pt-2">
                  <p className="text-sm">Butterworth, Penang, Malaysia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 H&C Tech Solution. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
