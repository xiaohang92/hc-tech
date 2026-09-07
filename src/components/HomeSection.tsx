"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import TrustBadge from "@/components/TrustBadge";
import DeviceMockup from "@/components/DeviceMockup";

const HomeSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.16),_transparent_42%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.12),_transparent_40%)]"
    >
      <div className="mx-auto max-w-screen-xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-10">
        <TrustBadge />

        <div className="mt-10 grid items-center gap-12 lg:mt-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-700"
            >
              Penang · Kuala Lumpur · Malaysia
            </motion.p>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduceMotion ? 0 : 0.08 }}
              className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              High-Performance Web Solutions for Growing Malaysian Businesses
            </motion.h1>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduceMotion ? 0 : 0.16 }}
              className="mt-5 max-w-xl text-lg leading-relaxed text-gray-700 sm:text-xl"
            >
              Custom websites, e-commerce, and web apps that load fast, convert
              visitors, and stay easy to run. Built in Penang for Malaysian
              brands that need results, not templates.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduceMotion ? 0 : 0.24 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="/contactus"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-transform hover:bg-indigo-700 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
              >
                Start Your Project
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-lg border-2 border-indigo-700 px-6 py-3.5 text-base font-semibold text-indigo-800 transition-colors hover:bg-indigo-700 hover:text-white"
              >
                View Work &amp; Pricing
              </Link>
            </motion.div>

            <dl className="mt-10 grid grid-cols-3 gap-3 text-center sm:max-w-md">
              <div className="rounded-xl border border-gray-200 bg-white/80 p-3 hover:border-indigo-500/50">
                <dt className="text-xs font-medium text-gray-600">Load time</dt>
                <dd className="text-lg font-bold text-gray-900">&lt;2s</dd>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white/80 p-3 hover:border-indigo-500/50">
                <dt className="text-xs font-medium text-gray-600">Uptime</dt>
                <dd className="text-lg font-bold text-gray-900">99.9%</dd>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white/80 p-3 hover:border-indigo-500/50">
                <dt className="text-xs font-medium text-gray-600">Clients</dt>
                <dd className="text-lg font-bold text-gray-900">50+</dd>
              </div>
            </dl>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: reduceMotion ? 0 : 0.12, duration: 0.45 }}
          >
            <DeviceMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
