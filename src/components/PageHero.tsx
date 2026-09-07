"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

function HeroLink({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg hover:bg-indigo-700"
      : "inline-flex items-center justify-center rounded-lg border-2 border-indigo-700 px-6 py-3.5 font-semibold text-indigo-800 hover:bg-indigo-700 hover:text-white";
  const external = href.startsWith("http") || href.startsWith("tel:");

  if (external) {
    return (
      <a
        href={href}
        className={className}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  children?: ReactNode;
};

const PageHero = ({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  children,
}: PageHeroProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.16),_transparent_42%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.12),_transparent_40%)]">
      <div className="mx-auto max-w-screen-xl px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
        <div
          className={`grid items-center gap-10 ${children ? "lg:grid-cols-2 lg:gap-16" : ""}`}
        >
          <div className={children ? "" : "mx-auto max-w-3xl text-center"}>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-700"
            >
              {eyebrow}
            </motion.p>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 text-lg leading-relaxed text-gray-700 sm:text-xl"
            >
              {description}
            </motion.p>
            {(primaryCta || secondaryCta) && (
              <div
                className={`mt-8 flex flex-col gap-3 sm:flex-row ${children ? "" : "justify-center"}`}
              >
                {primaryCta && (
                  <HeroLink
                    href={primaryCta.href}
                    label={primaryCta.label}
                    variant="primary"
                  />
                )}
                {secondaryCta && (
                  <HeroLink
                    href={secondaryCta.href}
                    label={secondaryCta.label}
                    variant="secondary"
                  />
                )}
              </div>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
