"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import eCommerce from "/public/e-commerce.jpg";
import PopUpAlert from "./PopUpAlert";
import ErrorAlert from "./ErrorAlert";
import { getProductByName, products } from "@/lib/products";
import { motion, useReducedMotion } from "framer-motion";

export default function ProductSection() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [clientName, setClientName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const searchParams = useSearchParams();
  const name = searchParams?.get("name") || "Landing Page Development";
  const status = searchParams?.get("status") || "";
  const product = getProductByName(name);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (status === "success") {
      setAlertVisible(true);
    } else if (status === "cancel") {
      setErrorMessage("Payment was cancelled. Please try again.");
      setErrorVisible(true);
    }
  }, [status]);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.16),_transparent_42%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.12),_transparent_40%)] py-12 sm:py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-700">
          Book a build
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Lock in {product.name} with a $100 booking fee
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-700">
          Switch packages below, then leave a contact number. Calvin will
          confirm scope on WhatsApp after payment.
        </p>

        <div
          role="tablist"
          aria-label="Choose a package"
          className="mt-8 flex flex-wrap gap-2"
        >
          {products.map((item) => {
            const active = item.name === product.name;
            return (
              <Link
                key={item.name}
                role="tab"
                aria-selected={active}
                href={`/product?name=${encodeURIComponent(item.name)}`}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "border-indigo-600 bg-indigo-600 text-white"
                    : "border-gray-200 bg-white text-gray-800 hover:border-indigo-500/50"
                }`}
              >
                {item.name.replace(" Development", "")}
                {item.popular ? " · Popular" : ""}
              </Link>
            );
          })}
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-2">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="overflow-hidden rounded-3xl border border-indigo-500/30 bg-white shadow-xl"
          >
            <Image
              src={eCommerce}
              alt="Web development services preview"
              sizes="(max-width: 1024px) 100vw, 50vw"
              width={768}
              height={512}
              className="h-auto w-full object-cover"
              priority
            />
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:border-indigo-500/50 sm:p-8"
          >
            <form action="/api/checkout-sessions" method="POST" className="space-y-5">
              <input type="hidden" name="priceId" value={product.priceId} />
              <input type="hidden" name="name" value={product.name} />
              <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-3xl font-extrabold text-gray-900">
                ${product.price.toLocaleString()}
                <span className="ml-2 text-base font-medium text-gray-600">
                  {product.periodLabel}
                </span>
              </p>
              <p className="text-sm text-gray-700">
                Delivery: {product.deliveryTime} · {product.technologyStack}
              </p>
              <ul className="space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-gray-800">
                    <span className="text-indigo-700" aria-hidden="true">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="field">
                <label htmlFor="clientName">Client name</label>
                <input
                  type="text"
                  id="clientName"
                  name="clientName"
                  autoComplete="name"
                  value={clientName}
                  onChange={(event) => setClientName(event.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="mobile">Mobile number</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  autoComplete="tel"
                  inputMode="tel"
                  value={mobileNumber}
                  onChange={(event) => setMobileNumber(event.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
              >
                Pay booking fee of $100 to get started
              </button>
              <p className="text-sm text-gray-600">
                Prefer to talk first?{" "}
                <Link href="/contactus" className="font-semibold text-indigo-800">
                  Send an enquiry
                </Link>{" "}
                or WhatsApp Calvin at 6011-11266316.
              </p>
            </form>
            {alertVisible && (
              <PopUpAlert
                title="Success"
                content="Your payment was successful. We will contact you shortly."
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
  );
}
