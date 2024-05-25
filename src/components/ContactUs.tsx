"use client";
// src/components/ContactUs.tsx
import React, { useState } from "react";
import PopUpAlert from "./PopUpAlert"; // Adjust the import path if necessary
import ErrorAlert from "./ErrorAlert"; // Adjust the import path if necessary

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
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
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

            <div className="mt-8">
              <a
                href="tel:+6012-5261536"
                className="text-2xl font-bold text-pink-600">
                +6012-5261536
              </a>
              <address className="mt-2 not-italic">
                Butterworth, Penang, Malaysia
              </address>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={handleSubmit} method="post" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="LandingPage"
                    className={`block w-full cursor-pointer rounded-lg border p-3 ${
                      selectedProduct === "LandingPage"
                        ? "bg-indigo-200 border-indigo-700"
                        : ""
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
                    <span className="text-sm"> Landing Page </span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="FullWebsite"
                    className={`block w-full cursor-pointer rounded-lg border p-3 ${
                      selectedProduct === "FullWebsite"
                        ? "bg-indigo-200 border-indigo-700"
                        : ""
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
                    <span className="text-sm"> Full Website </span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="WordPress"
                    className={`block w-full cursor-pointer rounded-lg border p-3 ${
                      selectedProduct === "WordPress"
                        ? "bg-indigo-200 border-indigo-700"
                        : ""
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
                    <span className="text-sm"> WordPress </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows={8}
                  id="message"
                  name="message"
                  required></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </button>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
