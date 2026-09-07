"use client";

import React, { useState } from "react";
import PopUpAlert from "./PopUpAlert";
import ErrorAlert from "./ErrorAlert";
import { motion, useReducedMotion } from "framer-motion";
import PageHero from "@/components/PageHero";

const WHATSAPP_HREF =
  "https://wa.me/601111266316?text=" +
  encodeURIComponent(
    "Hi Calvin, I would like to discuss a web project for my Malaysian business."
  );

const ContactUs = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const reduceMotion = useReducedMotion();

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
        setErrorMessage(
          errorData.error || "Failed to send enquiry. Please try again."
        );
        setErrorVisible(true);
      } else {
        setAlertVisible(true);
      }
    } catch {
      setErrorMessage("An unexpected error occurred. Please try again.");
      setErrorVisible(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact · Butterworth, Penang"
        title="Tell us the outcome. We will map the build."
        description="Share your timeline and budget. Calvin replies on WhatsApp at 6011-11266316, or use the form — typically within Malaysian office hours."
        primaryCta={{ href: WHATSAPP_HREF, label: "WhatsApp Calvin" }}
        secondaryCta={{ href: "tel:+601111266316", label: "Call 6011-11266316" }}
      />

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 lg:col-span-2"
            >
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-gray-200 bg-white p-5 transition-colors hover:border-indigo-500/50"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
                  Fastest reply
                </p>
                <p className="mt-1 text-xl font-bold text-gray-900">
                  WhatsApp Calvin
                </p>
                <p className="text-gray-700">6011-11266316</p>
              </a>
              <a
                href="tel:+60125261536"
                className="block rounded-2xl border border-gray-200 p-5 hover:border-indigo-500/50"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
                  Also available
                </p>
                <p className="mt-1 text-lg font-bold text-gray-900">Mr. Chuah</p>
                <p className="text-gray-700">+6012-5261536</p>
              </a>
              <div className="rounded-2xl border border-gray-200 p-5 hover:border-indigo-500/50">
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
                  Email
                </p>
                <a
                  href="mailto:calvin@hctechsolution.com"
                  className="mt-2 block font-semibold text-indigo-800 hover:text-indigo-900"
                >
                  calvin@hctechsolution.com
                </a>
                <a
                  href="mailto:weihang@hctechsolution.com"
                  className="mt-1 block font-semibold text-indigo-800 hover:text-indigo-900"
                >
                  weihang@hctechsolution.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-indigo-500/50 lg:col-span-3 lg:p-10"
            >
              <h2 className="text-2xl font-bold text-gray-900">
                Project enquiry
              </h2>
              <p className="mt-2 text-gray-700">
                All fields required. We use this to prepare a scoped quote.
              </p>
              <form
                onSubmit={handleSubmit}
                method="post"
                action="/api/send"
                className="mt-6 space-y-5"
                noValidate={false}
              >
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      required
                      placeholder="01x-xxxxxxx"
                    />
                  </div>
                </div>

                <fieldset>
                  <legend className="mb-3 text-sm font-semibold text-gray-700">
                    Product interest
                  </legend>
                  <div className="grid grid-cols-1 gap-3 text-center sm:grid-cols-3">
                    {(
                      [
                        ["LandingPage", "Landing Page"],
                        ["FullWebsite", "Full Website"],
                        ["WordPress", "WordPress"],
                      ] as const
                    ).map(([value, label]) => (
                      <label
                        key={value}
                        htmlFor={value}
                        className={`block cursor-pointer rounded-lg border-2 p-3 text-sm font-medium transition-colors ${
                          selectedProduct === value
                            ? "border-indigo-600 bg-indigo-50 text-indigo-800"
                            : "border-gray-200 hover:border-indigo-500/50"
                        }`}
                      >
                        <input
                          className="sr-only"
                          id={value}
                          type="radio"
                          name="product"
                          value={value}
                          required
                          onChange={() => setSelectedProduct(value)}
                        />
                        {label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Goals, timeline, and anything we should know."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send enquiry"}
                </button>
              </form>
              {alertVisible && (
                <PopUpAlert
                  title="Success"
                  content="Your enquiry has been sent successfully!"
                  onClose={() => setAlertVisible(false)}
                />
              )}
              {errorVisible && (
                <ErrorAlert
                  message={errorMessage}
                  onClose={() => setErrorVisible(false)}
                />
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
