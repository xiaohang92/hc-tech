//src/components/ContactUs.tsx
"use client";
import React, { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  product: string;
  message: string;
};

const ContactUS = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, product: e.target.id });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.error) {
        console.error(result.error);
      } else {
        console.log("Email sent successfully", result);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="LandingPage"
                    className={`block w-full cursor-pointer rounded-lg border p-3 ${
                      formData.product === "LandingPage"
                        ? "border-black bg-black text-white"
                        : "border-gray-200 text-gray-600"
                    }`}>
                    <input
                      className="sr-only"
                      id="LandingPage"
                      type="radio"
                      name="product"
                      checked={formData.product === "LandingPage"}
                      onChange={handleRadioChange}
                    />
                    <span className="text-sm"> Landing Page </span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="FullWebsite"
                    className={`block w-full cursor-pointer rounded-lg border p-3 ${
                      formData.product === "FullWebsite"
                        ? "border-black bg-black text-white"
                        : "border-gray-200 text-gray-600"
                    }`}>
                    <input
                      className="sr-only"
                      id="FullWebsite"
                      type="radio"
                      name="product"
                      checked={formData.product === "FullWebsite"}
                      onChange={handleRadioChange}
                    />
                    <span className="text-sm"> Full Website </span>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="WordPress"
                    className={`block w-full cursor-pointer rounded-lg border p-3 ${
                      formData.product === "WordPress"
                        ? "border-black bg-black text-white"
                        : "border-gray-200 text-gray-600"
                    }`}>
                    <input
                      className="sr-only"
                      id="WordPress"
                      type="radio"
                      name="product"
                      checked={formData.product === "WordPress"}
                      onChange={handleRadioChange}
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
                  value={formData.message}
                  onChange={handleChange}></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUS;
