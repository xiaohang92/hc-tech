"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { products, retainerProducts, type Product } from "@/lib/products";
import { motion, useReducedMotion } from "framer-motion";

const PriceSection = () => {
  const [cycle, setCycle] = useState<"onetime" | "retainer">("onetime");
  const switchId = useId();
  const reduceMotion = useReducedMotion();
  const plans = cycle === "onetime" ? products : retainerProducts;

  return (
    <section id="pricing" className="scroll-mt-24 bg-white py-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl">
            Transparent pricing, exceptional value
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-700">
            Switch between a one-time build and a monthly retainer. The most
            popular package stays highlighted so you can decide faster.
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div
            role="radiogroup"
            aria-labelledby={switchId}
            className="relative grid grid-cols-2 rounded-full border border-gray-200 bg-slate-100 p-1"
          >
            <span id={switchId} className="sr-only">
              Billing cycle
            </span>
            {(
              [
                ["onetime", "One-Time Project"],
                ["retainer", "Monthly Retainer/Support"],
              ] as const
            ).map(([value, label]) => {
              const checked = cycle === value;
              return (
                <label
                  key={value}
                  className={`relative z-10 cursor-pointer rounded-full px-4 py-2 text-center text-sm font-semibold sm:px-6 ${
                    checked ? "text-white" : "text-gray-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="billing-cycle"
                    value={value}
                    checked={checked}
                    onChange={() => setCycle(value)}
                    className="sr-only"
                  />
                  {checked && (
                    <motion.span
                      layoutId={reduceMotion ? undefined : "pricing-pill"}
                      className="absolute inset-0 -z-10 rounded-full bg-indigo-600"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {label}
                </label>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((product, index) => (
            <PlanCard
              key={product.name}
              product={product}
              index={index}
              reduceMotion={Boolean(reduceMotion)}
            />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-gray-200 bg-slate-50 p-8 text-center hover:border-indigo-500/50">
          <h3 className="text-2xl font-bold text-gray-900">
            Need a custom solution?
          </h3>
          <p className="mt-3 text-gray-700">
            Tell us the scope, timeline, and budget. We will map a build or
            retainer that fits a Malaysian SME cadence.
          </p>
          <Link
            href="/contactus"
            className="mt-6 inline-flex rounded-lg bg-indigo-600 px-8 py-3 font-semibold text-white hover:bg-indigo-700"
          >
            Schedule a free consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

function PlanCard({
  product,
  index,
  reduceMotion,
}: {
  product: Product;
  index: number;
  reduceMotion: boolean;
}) {
  const popular = Boolean(product.popular);
  const href =
    product.ctaHref ?? `/product?name=${encodeURIComponent(product.name)}`;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`relative rounded-2xl border-2 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        popular
          ? "border-indigo-600 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-xl lg:scale-[1.03]"
          : "border-gray-200 bg-white hover:border-indigo-500/50"
      }`}
    >
      {popular && (
        <p className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-700 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Most popular
        </p>
      )}
      <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
      <p className="mt-3 text-gray-700">{product.description}</p>
      <p className="mt-6">
        <span className="text-4xl font-bold text-gray-900">
          ${product.price.toLocaleString()}
        </span>
        <span className="ml-2 text-gray-600">{product.periodLabel}</span>
      </p>
      <p className="mt-3 text-sm text-gray-600">
        {product.billing === "retainer" ? "Response" : "Delivery"}:{" "}
        {product.deliveryTime}
        <br />
        Tech: {product.technologyStack}
      </p>
      <ul className="mt-6 space-y-3">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-start text-gray-800">
            <svg
              className="mr-3 mt-0.5 h-5 w-5 shrink-0 text-indigo-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className={`mt-8 block rounded-lg py-4 text-center font-semibold transition-colors ${
          popular
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "border-2 border-indigo-700 text-indigo-800 hover:bg-indigo-700 hover:text-white"
        }`}
      >
        {popular ? "Get started now" : "Choose this plan"}
      </Link>
    </motion.article>
  );
}

export default PriceSection;
