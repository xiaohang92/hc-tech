// src/components/NavBar.tsx
"use client";
import Image from "next/image";
import logo from "/public/ht-tech-logo-with-word.jpeg";
import Link from "next/link";
import { useState } from "react";

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 z-10 flex w-full items-center justify-between bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4 px-6 shadow-sm">
        <Link
          href="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          onClick={closeMobileMenu}>
          <Image
            src={logo}
            width={140}
            height={42}
            alt="H&C Tech Solution Logo"
            priority
            className="w-auto h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
            Home
          </Link>
          <Link
            href="/learnmore"
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
            About Us
          </Link>
          <Link
            href="/contactus"
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/contactus"
            className="hidden sm:inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            Get Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-20 left-0 right-0 z-10 bg-white border-b border-gray-100 shadow-lg md:hidden">
          <div className="px-6 py-4 space-y-4">
            <Link
              href="/"
              className="block py-3 text-gray-700 hover:text-indigo-600 font-medium transition-colors border-b border-gray-100"
              onClick={closeMobileMenu}>
              Home
            </Link>
            <Link
              href="/learnmore"
              className="block py-3 text-gray-700 hover:text-indigo-600 font-medium transition-colors border-b border-gray-100"
              onClick={closeMobileMenu}>
              About Us
            </Link>
            <Link
              href="/contactus"
              className="block py-3 text-gray-700 hover:text-indigo-600 font-medium transition-colors border-b border-gray-100"
              onClick={closeMobileMenu}>
              Contact
            </Link>
            <div className="pt-4">
              <Link
                href="/contactus"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors w-full justify-center"
                onClick={closeMobileMenu}>
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default NavBar;
