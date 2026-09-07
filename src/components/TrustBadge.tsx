"use client";

import { motion, useReducedMotion } from "framer-motion";

const CLIENTS = [
  "Eastmate Coffee",
  "Penang Retail",
  "Klang Valley Ops",
  "F&B Groups",
  "Professional Services",
];

const TrustBadge = () => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md sm:px-5"
      aria-label="Client logos and verified ratings"
    >
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="flex shrink-0 items-center gap-3 border-b border-gray-100 pb-3 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
            4.9
          </div>
          <div>
            <p className="flex items-center gap-1 text-amber-500" aria-hidden="true">
              {"★★★★★"}
            </p>
            <p className="text-xs font-medium text-gray-700">
              Verified 4.9/5 from Malaysian SMEs
            </p>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="sr-only">Trusted by 50+ Malaysian businesses</p>
          <div className="group overflow-hidden">
            <div
              className={`flex w-max gap-6 ${reduceMotion ? "" : "animate-marquee group-hover:[animation-play-state:paused]"}`}
            >
              {[...CLIENTS, ...CLIENTS].map((name, index) => (
                <span
                  key={`${name}-${index}`}
                  className="whitespace-nowrap text-sm font-semibold tracking-wide text-gray-600"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TrustBadge;
