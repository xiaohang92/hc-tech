"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import PageHero from "@/components/PageHero";

const STEPS = [
  {
    title: "Discover",
    copy: "A 30-minute call to map goals, audience, and the Malaysian channels that actually convert.",
  },
  {
    title: "Prototype",
    copy: "We ship a clickable structure first so stakeholders can react before pixels get expensive.",
  },
  {
    title: "Build",
    copy: "Next.js, WordPress, or a custom app — fast, secure, and ready for local payments and WhatsApp.",
  },
  {
    title: "Grow",
    copy: "Optional retainer for SEO, conversion tweaks, and monthly shipping so the site keeps earning.",
  },
];

export default function LearnMoreSection() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <PageHero
        eyebrow="About · Penang & Klang Valley"
        title="A Penang studio for Malaysian brands that need sites that sell"
        description="H&C Tech Solution pairs senior engineering with conversion-minded UX. We do not ship templates. We ship digital experiences that load fast, capture leads, and stay easy to run."
        primaryCta={{ href: "/contactus", label: "Book a free consult" }}
        secondaryCta={{ href: "/portfolio", label: "See the work" }}
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="overflow-hidden rounded-3xl border border-indigo-500/30 shadow-2xl"
        >
          <div className="relative h-64 sm:h-80 lg:h-[22rem]">
            <Image
              alt="H&C Tech team collaborating on a web project"
              src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </PageHero>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              ["5+ years", "serving Malaysian SMEs"],
              ["<2s", "typical first paint target"],
              ["EN · BM · 中文", "stakeholder-ready comms"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center hover:border-indigo-500/50"
              >
                <p className="text-2xl font-bold text-gray-900">{value}</p>
                <p className="mt-1 text-sm text-gray-700">{label}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-16 text-3xl font-bold text-gray-900 sm:text-4xl">
            How we work
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-gray-200 bg-slate-50 p-5 transition-colors hover:border-indigo-500/50 hover:bg-white"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
                  0{index + 1}
                </p>
                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>

          <article className="mt-16 max-w-3xl space-y-4 text-lg leading-relaxed text-gray-700">
            <p>
              At <strong className="text-gray-900">H&C Tech Solution</strong> we
              treat the website as a growth asset, not a brochure. From
              e-commerce and WordPress to custom web apps, every build is
              scoped around the metric that matters to you: enquiries, orders,
              or ops time saved.
            </p>
            <p>
              What sets us apart is proximity. We are in Butterworth, Penang,
              and we work the way Malaysian SMEs actually operate — WhatsApp
              updates, clear milestones, and no offshore black box.
            </p>
          </article>

          <Link
            href="/contactus"
            className="mt-10 inline-flex rounded-lg bg-indigo-600 px-8 py-4 font-semibold text-white hover:bg-indigo-700"
          >
            Start your project
          </Link>
        </div>
      </section>
    </>
  );
}
