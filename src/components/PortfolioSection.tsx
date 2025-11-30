// src/components/PortfolioSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Eastmate Coffee Website",
      client: "Eastmate Coffee",
      category: "E-commerce & Retail",
      description: "A modern WordPress e-commerce website for a coffee business, featuring responsive design, seamless user experience, and integrated online ordering system.",
      image: "/eastmatecoffee-com-11-30-2025_02_29_PM.png",
      type: "WordPress",
      url: "https://eastmatecoffee.com",
    },
    {
      id: 2,
      title: "Moesie Corporate Website",
      client: "Moesie",
      category: "Business & Corporate",
      description: "A professional WordPress website showcasing business services with elegant design, optimized performance, and comprehensive service presentation.",
      image: "/moesie-my-11-30-2025_02_28_PM.png",
      type: "WordPress",
      url: "https://moesie.my",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-white py-20 pt-24">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent WordPress projects and see how we&apos;ve helped
            businesses transform their online presence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-6xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative w-full h-64 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full">
                    {project.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Client: {project.client}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
                >
                  View Live Site
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Interested in working together on your next project?
          </p>
          <a
            href="/contactus"
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Your Free Consultation
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;

