"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  PROJECT_FILTERS,
  projects,
  type Project,
  type ProjectFilter,
} from "@/lib/projects";

type PortfolioSectionProps = {
  compact?: boolean;
  hideIntro?: boolean;
};

const PortfolioSection = ({
  compact = false,
  hideIntro = false,
}: PortfolioSectionProps) => {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [active, setActive] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const reduceMotion = useReducedMotion();

  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => project.filters.includes(filter));

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (active) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [active]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onClose = () => setActive(null);
    dialog.addEventListener("close", onClose);

    const supportsClosedBy = "closedBy" in HTMLDialogElement.prototype;
    const onClick = (event: MouseEvent) => {
      if (supportsClosedBy) return;
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const inside =
        rect.top <= event.clientY &&
        event.clientY <= rect.bottom &&
        rect.left <= event.clientX &&
        event.clientX <= rect.right;
      if (!inside) dialog.close();
    };

    dialog.addEventListener("click", onClick);
    return () => {
      dialog.removeEventListener("close", onClose);
      dialog.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <section
      id="portfolio"
      className={`scroll-mt-24 bg-white ${compact ? "py-16" : hideIntro ? "pb-20 pt-4" : "py-20 pt-24"}`}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {!hideIntro && (
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl">
            Work that converts
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Filter live Malaysian projects and capability case studies. Open a
            card for metrics, stack, and a preview.
          </p>
        </div>
        )}

        <div
          role="tablist"
          aria-label="Portfolio filters"
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {PROJECT_FILTERS.map((item) => {
            const selected = filter === item;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setFilter(item)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  selected
                    ? "border-indigo-600 bg-indigo-600 text-white"
                    : "border-gray-200 bg-white text-gray-800 hover:border-indigo-500/50"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {visible.map((project) => (
              <motion.article
                key={project.id}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-xl"
              >
                <button
                  type="button"
                  onClick={() => setActive(project)}
                  className="block w-full text-left"
                >
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <span className="absolute right-3 top-3 rounded-full bg-indigo-700 px-3 py-1 text-xs font-semibold text-white">
                      {project.type}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
                      {project.category}
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">{project.client}</p>
                    <dl className="mt-4 grid grid-cols-3 gap-2">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-lg bg-slate-50 px-2 py-2 text-center"
                        >
                          <dt className="text-[11px] text-gray-600">{metric.label}</dt>
                          <dd className="text-sm font-bold text-gray-900">
                            {metric.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-4 text-sm font-semibold text-indigo-700">
                      Open live preview
                    </p>
                  </div>
                </button>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 text-center">
          <Link
            href="/contactus"
            className="inline-flex items-center rounded-lg bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition-colors hover:bg-indigo-700"
          >
            Start a similar project
          </Link>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="preview-dialog"
        aria-labelledby={titleId}
        {...{ closedby: "any" }}
      >
        {active && (
          <div className="max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 border-b border-gray-100 px-5 py-4">
              <div>
                <h3 id={titleId} className="text-xl font-bold text-gray-900">
                  {active.title}
                </h3>
                <p className="text-sm text-gray-600">{active.client}</p>
              </div>
              <form method="dialog">
                <button
                  type="submit"
                  className="rounded-lg px-3 py-1.5 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                >
                  Close
                </button>
              </form>
            </div>
            <div className="relative h-56 bg-slate-100 sm:h-72">
              <Image
                src={active.image}
                alt={`${active.title} preview`}
                fill
                className="object-cover object-top"
                sizes="90vw"
              />
            </div>
            <div className="space-y-4 px-5 py-5">
              <p className="text-gray-700">{active.description}</p>
              <dl className="grid grid-cols-3 gap-3">
                {active.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-gray-200 p-3 text-center hover:border-indigo-500/50"
                  >
                    <dt className="text-xs text-gray-600">{metric.label}</dt>
                    <dd className="text-lg font-bold text-gray-900">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="text-sm text-gray-700">
                Stack: {active.stack.join(" · ")}
              </p>
              {active.url && (
                <a
                  href={active.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex font-semibold text-indigo-700 hover:text-indigo-800"
                >
                  Open live site
                </a>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
};

export default PortfolioSection;
