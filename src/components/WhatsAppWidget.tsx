"use client";

import { useEffect, useId, useRef, useState } from "react";

const WHATSAPP_NUMBER = "601111266316";
const PRESET_MESSAGES = [
  {
    label: "Need a website quote",
    text: "Hi H&C Tech, I would like a quote for a new website for my Malaysian business.",
  },
  {
    label: "Monthly support",
    text: "Hi H&C Tech, I am looking for monthly retainer or support for an existing website.",
  },
  {
    label: "Talk in BM",
    text: "Hai H&C Tech, saya berminat dengan perkhidmatan web development. Boleh bantu?",
  },
];

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
    >
      <div
        id={panelId}
        hidden={!open}
        className="w-[min(20.5rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-emerald-500/30 bg-white shadow-2xl"
        role="dialog"
        aria-label="WhatsApp enquiry"
      >
        <div className="bg-[#075e54] px-4 py-3 text-white">
          <p className="text-sm font-semibold">H&C Tech Solution</p>
          <p className="text-xs text-emerald-100">
            Typically replies within office hours · MYT
          </p>
        </div>
        <div className="space-y-3 bg-[#ece5dd] px-3 py-3">
          <p className="max-w-[90%] rounded-lg rounded-tl-sm bg-white px-3 py-2 text-sm text-gray-800 shadow-sm">
            Hi! Need a high-performance site for your Malaysian business? Chat
            with Calvin or Chuah on WhatsApp.
          </p>
          <ul className="space-y-2">
            {PRESET_MESSAGES.map((preset) => (
              <li key={preset.label}>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(preset.text)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border border-transparent bg-white px-3 py-2 text-sm font-medium text-gray-800 transition-colors hover:border-indigo-500/50 hover:text-indigo-700"
                >
                  {preset.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
        {open ? (
          <svg className="relative h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg className="relative h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.86 11.86 0 005.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.44-8.44zM12.06 21.15h-.01a9.27 9.27 0 01-4.72-1.29l-.34-.2-3.74.98 1-3.64-.22-.37a9.25 9.25 0 01-1.42-4.93c0-5.12 4.17-9.28 9.3-9.28 2.48 0 4.81.97 6.56 2.73a9.22 9.22 0 012.72 6.56c0 5.12-4.17 9.28-9.29 9.28zm5.1-6.95c-.28-.14-1.65-.81-1.9-.9-.26-.1-.44-.14-.63.14-.18.27-.72.9-.88 1.08-.16.18-.33.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.38-1.63-1.54-1.9-.16-.28-.02-.43.12-.56.13-.13.28-.33.42-.5.14-.16.18-.28.28-.47.09-.18.05-.35-.02-.5-.07-.14-.63-1.51-.86-2.07-.23-.55-.46-.47-.63-.48h-.54c-.18 0-.47.07-.72.35-.25.27-.95.93-.95 2.26s.97 2.62 1.1 2.8c.14.18 1.91 2.92 4.63 4.1.65.28 1.15.45 1.55.57.65.2 1.24.18 1.7.11.52-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
