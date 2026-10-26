"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Metodología", href: "#metodologia" },
  { label: "Sistema Integral", href: "#sistema" },
  { label: "Sectores", href: "#sectores" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Formación", href: "#formacion" },
];

export const NAV_LINKS = NAV_ITEMS;

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Automatically close mobile menu when user starts scrolling the page or resizes to desktop
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const initialScrollY = window.scrollY;

    const handleScroll = () => {
      if (Math.abs(window.scrollY - initialScrollY) > 20) {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    if (typeof window !== "undefined" && window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#faf9fd]/95 backdrop-blur-md border-b border-[#dedbea]/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] sm:h-[72px] flex items-center justify-between">
        
        {/* Brand Logo & Wordmark (Scrolls to top smoothly on click, without scale animation) */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5f4a9a] rounded-lg p-1 -ml-1 cursor-pointer"
          aria-label="Igualdad Consultora - Inicio"
          onClick={handleLogoClick}
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0">
            <Image
              src="/images/logo-symbol.png"
              alt="Isotipo Igualdad Consultora"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-heading text-[14px] sm:text-[15px] font-bold tracking-[0.08em] text-[#544f82] leading-tight">
              IGUALDAD
            </span>
            <span className="text-[9.5px] sm:text-[10px] tracking-[0.28em] font-medium text-[#676479] uppercase leading-none">
              CONSULTORA
            </span>
          </div>
        </Link>

        {/* Desktop Navigation (Visible on lg screens >= 1024px to prevent intermediate collision) */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-7" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] xl:text-[14px] font-medium text-[#464453] hover:text-[#544f82] transition-colors py-1 whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#5f4a9a] hover:after:w-full after:transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Button Desktop (Adaptive text and padding) */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 bg-[#544f82] hover:bg-[#433e68] text-white text-[13px] xl:text-[13.5px] font-medium px-4 xl:px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow hover:-translate-y-[0.5px] active:translate-y-0 whitespace-nowrap shrink-0"
          >
            <span className="hidden xl:inline">Agendar reunión inicial</span>
            <span className="xl:hidden">Reunión de 30´</span>
            <ArrowUpRight size={15} weight="bold" />
          </Link>
        </div>

        {/* Mobile Menu Trigger (Active up to lg 1023px) */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 flex items-center justify-center text-[#544f82] hover:bg-[#dedbea]/40 active:bg-[#dedbea]/60 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5f4a9a]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
          >
            {mobileMenuOpen ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with AnimatePresence, Backdrop and Clean Exit */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop: clicking outside closes the menu (No backdrop-blur to eliminate iOS Safari blur glitches) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[68px] sm:top-[72px] z-40 bg-[#1a1926]/30 lg:hidden"
              aria-hidden="true"
            />

            {/* Drawer Container (absolute top-full so header never stretches and leaves no white box on close) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute top-full inset-x-0 z-50 lg:hidden border-b border-[#dedbea] bg-[#faf9fd] px-5 pt-3 pb-6 shadow-xl max-h-[calc(100vh-72px)] overflow-y-auto"
            >
              <nav className="flex flex-col divide-y divide-[#dedbea]/50" aria-label="Navegación móvil">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[16px] font-semibold text-[#1a1926] hover:text-[#544f82] active:text-[#544f82] py-3.5 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#8b889e] text-xs">→</span>
                  </Link>
                ))}
              </nav>

              {/* Action Button: Primary CTA only */}
              <div className="pt-4">
                <Link
                  href="#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-[#544f82] active:bg-[#433e68] text-white text-[15px] font-semibold py-3.5 px-4 rounded-xl shadow-xs text-center min-h-[48px]"
                >
                  <span>Agendar reunión inicial</span>
                  <ArrowUpRight size={17} weight="bold" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
