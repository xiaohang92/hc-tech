"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LearnMoreSection() {
  return (
    <section className="pt-8">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl font-bold sm:text-4xl leading-tight">
            <span className="block">Transforming Ideas into Reality</span>
            <span className="block mt-2 text-indigo-600 lg:ml-40">
              with Expert Web Development
            </span>
          </h2>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-64 overflow-hidden sm:h-80 lg:h-full"
          >
            <Image
              alt="Team working on a project"
              src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
              className="absolute inset-0 h-full w-full object-cover"
              fill
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:py-12"
          >
            <article className="space-y-4 text-gray-600">
              <p>
                At <strong>H&C Tech Solution</strong>, we believe in the power
                of <span className="text-indigo-600">technology</span> to drive
                business success. Our team of{" "}
                <strong>skilled developers</strong> creates custom web solutions
                that not only meet your needs but exceed your expectations.
              </p>

              <p>
                Our journey began with a simple goal: to help businesses of all
                sizes harness the potential of the <strong>web</strong>. From
                dynamic websites to robust e-commerce platforms, we deliver
                solutions that reflect your brand&apos;s unique story.
              </p>

              <p>
                What sets us apart is our commitment to{" "}
                <span className="text-indigo-600">quality</span> and our
                collaborative approach. We work closely with our clients to
                understand their objectives and deliver solutions that are
                functional and engaging. Our expertise in{" "}
                <strong>cutting-edge technologies</strong> ensures your project
                is future-proof and scalable.
              </p>

              <p>
                Join us on a journey of <strong>digital transformation</strong>.
                Let&apos;s build something amazing together and take your
                business to new heights.
              </p>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
