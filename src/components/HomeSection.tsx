// src/components/HomeSection.tsx

import React from "react";
import Link from "next/link";

const HomeSection = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Welcome to Our Software Solutions.
          <strong className="font-extrabold text-indigo-700 sm:block">
            {" "}
            Expert Development Services.{" "}
          </strong>
        </h1>

        <p className="mt-4 sm:text-xl/relaxed">
          We provide <strong className="text-indigo-700">responsive</strong> and{" "}
          <strong className="text-indigo-700">robust</strong> websites using the
          latest technologies. From simple{" "}
          <strong className="text-indigo-700">WordPress</strong> sites to
          complex applications with{" "}
          <strong className="text-indigo-700">PHP</strong>,{" "}
          <strong className="text-indigo-700">MySQL</strong>, and{" "}
          <strong className="text-indigo-700">Next.js</strong>, we have you
          covered.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contactus">
            <span className="block w-full rounded bg-indigo-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-800 focus:outline-none focus:ring active:bg-indigo-900 sm:w-auto">
              Get Started
            </span>
          </Link>

          <Link href="/learnmore">
            <span className="block w-full rounded px-12 py-3 text-sm font-medium text-indigo-700 shadow hover:text-indigo-800 focus:outline-none focus:ring active:text-indigo-900 sm:w-auto">
              Learn More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
