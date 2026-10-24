"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { List, X, ArrowUpRight, WhatsappLogo } from "@phosphor-icons/react";

const NAV_LINKS = [
  { href: "#metodologia", label: "Metodología" },
  { href: "#ecosistema", label: "Sistema 4 Fases" },
  { href: "#audiencias", label: "Sectores" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#inversion", label: "Inversión" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const whatsappMessage = encodeURIComponent(
    "Hola Belén, me contacto desde el sitio web de Igualdad Consultora para coordinar una reunión inicial sobre prevención y abordaje de violencia laboral."
  );

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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-[#464453] hover:text-[#544f82] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#5f4a9a] hover:after:w-full after:transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Button Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 bg-[#544f82] hover:bg-[#433e68] text-white text-[13.5px] font-medium px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow hover:-translate-y-[0.5px] active:translate-y-0"
          >
            <span>Agendar reunión inicial</span>
            <ArrowUpRight size={15} weight="bold" />
          </Link>
        </div>

        {/* Mobile Menu Trigger (Generous 44x44px touch target) */}
        <div className="flex md:hidden">
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

      {/* Mobile Drawer (Full height backdrop & accessible menu) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#dedbea] bg-[#faf9fd] px-5 pt-3 pb-6 space-y-5 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-68px)] overflow-y-auto">
          <nav className="flex flex-col divide-y divide-[#dedbea]/50" aria-label="Navegación móvil">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[16px] font-semibold text-[#1a1926] hover:text-[#544f82] py-3.5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#8b889e] text-xs">→</span>
              </Link>
            ))}
          </nav>

          {/* Quick Mobile Action Stack */}
          <div className="pt-2 space-y-2.5">
            <Link
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#544f82] active:bg-[#433e68] text-white text-[15px] font-semibold py-3.5 px-4 rounded-xl shadow-xs text-center min-h-[48px]"
            >
              <span>Agendar reunión inicial</span>
              <ArrowUpRight size={17} weight="bold" />
            </Link>

            <a
              href={`https://wa.me/5492920411152?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-white border border-[#dedbea] text-[#1a1926] text-[14px] font-semibold py-3 px-4 rounded-xl shadow-2xs text-center min-h-[46px]"
            >
              <WhatsappLogo size={18} weight="fill" className="text-[#25d366]" />
              <span>WhatsApp: +54 9 2920 411152</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
