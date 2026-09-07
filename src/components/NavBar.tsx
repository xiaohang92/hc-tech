"use client";

import BrandLogo from "@/components/BrandLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home", match: (path: string, hash: string) => path === "/" && hash !== "portfolio" && hash !== "pricing" },
  { href: "/learnmore", label: "About Us", match: (path: string) => path.startsWith("/learnmore") },
  { href: "/portfolio", label: "Portfolio", match: (path: string, hash: string) => path.startsWith("/portfolio") || hash === "portfolio" },
  { href: "/#pricing", label: "Pricing", match: (_path: string, hash: string) => hash === "pricing" },
  { href: "/contactus", label: "Contact", match: (path: string) => path.startsWith("/contactus") },
];

const NavBar: React.FC = () => {
  const pathname = usePathname() || "/";
  const [hash, setHash] = useState("");
  const [isStuck, setIsStuck] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const listRef = useRef<HTMLUListElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash.replace("#", ""));
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["home", "portfolio", "pricing"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        setHash(visible.target.id === "home" ? "" : visible.target.id);
      },
      { rootMargin: "-22% 0px -58% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { threshold: 1 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const active = list.querySelector<HTMLElement>("[data-active='true']");
    if (!active) {
      setIndicator({ left: 0, width: 0 });
      return;
    }
    setIndicator({ left: active.offsetLeft, width: active.offsetWidth });
  }, [pathname, hash, isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <div ref={sentinelRef} className="h-px w-full" aria-hidden="true" />
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-200 ${
          isStuck
            ? "border-b border-indigo-500/20 bg-white/75 shadow-sm backdrop-blur-xl"
            : "border-b border-transparent bg-white/90 backdrop-blur-md"
        }`}
      >
        <nav
          className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 sm:px-6"
          aria-label="Primary"
        >
          <Link
            href="/"
            className="flex items-center hover:opacity-80"
            onClick={closeMobileMenu}
            aria-label="H&C Tech Solution home"
          >
            <BrandLogo priority />
          </Link>

          <ul
            ref={listRef}
            className="relative hidden items-center gap-7 md:flex"
          >
            {NAV_LINKS.map((link) => {
              const active = link.match(pathname, hash);
              return (
                <li key={link.href} data-active={active}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative pb-1 text-sm font-medium transition-colors ${
                      active
                        ? "nav-link-active text-indigo-700"
                        : "text-gray-700 hover:text-indigo-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <span
              className="nav-indicator hidden md:block"
              style={
                {
                  "--indicator-left": `${indicator.left}px`,
                  "--indicator-width": `${indicator.width}px`,
                } as React.CSSProperties
              }
              aria-hidden="true"
            />
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/contactus"
              className="hidden rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 sm:inline-flex"
            >
              Get Quote
            </Link>
            <button
              className="rounded-lg p-2 text-gray-700 hover:text-gray-900 md:hidden"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div
            id="mobile-nav"
            className="border-t border-gray-100 bg-white/95 px-4 py-4 shadow-lg backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => {
                const active = link.match(pathname, hash);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-lg px-3 py-3 font-medium ${
                        active
                          ? "bg-indigo-50 text-indigo-800"
                          : "text-gray-800 hover:bg-gray-50"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/contactus"
              className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
              onClick={closeMobileMenu}
            >
              Get Quote
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;
