"use client";
// src/components/ContactUs.tsx
import React, { useState } from "react";
import PopUpAlert from "./PopUpAlert"; // Adjust the import path if necessary
import ErrorAlert from "./ErrorAlert"; // Adjust the import path if necessary
import { motion } from "framer-motion";

const ContactUs = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleProductSelect = (product: string) => {
    setSelectedProduct(product);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData.error);
        setErrorMessage(
          errorData.error || "Failed to send enquiry. Please try again."
        ); // Set the error message
        setErrorVisible(true); // Show the error alert
      } else {
        setAlertVisible(true); // Show the success alert
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An unexpected error occurred. Please try again."); // Set the error message
      setErrorVisible(true); // Show the error alert
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseAlert = () => {
    setAlertVisible(false);
  };

  const handleCloseError = () => {
    setErrorVisible(false);
  };

  return (
    <section className="bg-gray-100 pt-8">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 lg:py-12"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="max-w-xl text-lg">
              <strong>Contact us</strong> to discuss your{" "}
              <strong className="text-indigo-700">web development</strong>{" "}
              needs. Whether you need a{" "}
              <strong className="text-indigo-700">landing page</strong>, a{" "}
              <strong className="text-indigo-700">full website</strong>, or a
              custom <strong className="text-indigo-700">WordPress</strong>{" "}
              solution, we are here to help you{" "}
              <strong className="text-indigo-700">
                bring your vision to life
              </strong>{" "}
              with expert precision and creativity.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <a
                  href="tel:+6011-11266316"
                  className="text-2xl font-bold text-pink-600 hover:text-pink-700 transition-colors">
                  +6011-11266316
                </a>
                <span className="text-gray-600 font-medium text-lg">
                  (Mr. Calvin)
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <a
                  href="tel:+6012-5261536"
                  className="text-2xl font-bold text-pink-600 hover:text-pink-700 transition-colors">
                  +6012-5261536
                </a>
                <span className="text-gray-600 font-medium text-lg">
                  (Mr. Chuah)
                </span>
              </div>

              {/* Email */}
              <div className="pt-2">
                <a
                  href="mailto:calvin@hctechsolution.com"
                  className="text-lg font-bold text-indigo-700 hover:text-indigo-800 transition-colors block mb-2">
                  calvin@hctechsolution.com
                </a>
                <a
                  href="mailto:weihang@hctechsolution.com"
                  className="text-lg font-bold text-indigo-700 hover:text-indigo-800 transition-colors block">
                  weihang@hctechsolution.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12"
          >
            <form onSubmit={handleSubmit} method="post" className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none hover:border-gray-300"
                  placeholder="Your Name"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none hover:border-gray-300"
                    placeholder="Your Email Address"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none hover:border-gray-300"
                    placeholder="Your Phone Number"
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Product Interest
                </label>
                <div className="grid grid-cols-1 gap-3 text-center sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="LandingPage"
                      className={`block w-full cursor-pointer rounded-lg border-2 p-3 transition-all duration-200 ${
                        selectedProduct === "LandingPage"
                          ? "bg-indigo-50 border-indigo-500 text-indigo-700 shadow-md"
                          : "border-gray-200 hover:border-indigo-300 hover:bg-gray-50"
                      }`}
                      onClick={() => handleProductSelect("LandingPage")}>
                      <input
                        className="sr-only"
                        id="LandingPage"
                        type="radio"
                        name="product"
                        value="LandingPage"
                        required
                      />
                      <span className="text-sm font-medium">Landing Page</span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="FullWebsite"
                      className={`block w-full cursor-pointer rounded-lg border-2 p-3 transition-all duration-200 ${
                        selectedProduct === "FullWebsite"
                          ? "bg-indigo-50 border-indigo-500 text-indigo-700 shadow-md"
                          : "border-gray-200 hover:border-indigo-300 hover:bg-gray-50"
                      }`}
                      onClick={() => handleProductSelect("FullWebsite")}>
                      <input
                        className="sr-only"
                        id="FullWebsite"
                        type="radio"
                        name="product"
                        value="FullWebsite"
                        required
                      />
                      <span className="text-sm font-medium">Full Website</span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="WordPress"
                      className={`block w-full cursor-pointer rounded-lg border-2 p-3 transition-all duration-200 ${
                        selectedProduct === "WordPress"
                          ? "bg-indigo-50 border-indigo-500 text-indigo-700 shadow-md"
                          : "border-gray-200 hover:border-indigo-300 hover:bg-gray-50"
                      }`}
                      onClick={() => handleProductSelect("WordPress")}>
                      <input
                        className="sr-only"
                        id="WordPress"
                        type="radio"
                        name="product"
                        value="WordPress"
                        required
                      />
                      <span className="text-sm font-medium">WordPress</span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none hover:border-gray-300 resize-none"
                  placeholder="Tell us about your project requirements..."
                  rows={6}
                  id="message"
                  name="message"
                  required></textarea>
              </div>

              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-block w-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-medium text-white transition-all duration-200 hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Enquiry"
                  )}
                </motion.button>
              </div>
            </form>
            {alertVisible && (
              <PopUpAlert
                title="Success"
                content="Your enquiry has been sent successfully!"
                onClose={handleCloseAlert}
              />
            )}
            {errorVisible && (
              <ErrorAlert message={errorMessage} onClose={handleCloseError} />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
