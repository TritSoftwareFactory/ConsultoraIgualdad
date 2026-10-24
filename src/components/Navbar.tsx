"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";

const NAV_LINKS = [
  { href: "#metodologia", label: "Metodología" },
  { href: "#ecosistema", label: "Sistema 4 Fases" },
  { href: "#audiencias", label: "Sectores" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#inversion", label: "Inversión" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#faf9fd]/92 backdrop-blur-md border-b border-[#dedbea]/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5f4a9a] rounded-lg p-1"
          aria-label="Igualdad Consultora - Inicio"
        >
          <div className="relative w-9 h-9 shrink-0">
            <Image
              src="/images/logo-symbol.png"
              alt="Isotipo Igualdad Consultora"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-heading text-[15px] font-bold tracking-[0.08em] text-[#544f82] leading-tight">
              IGUALDAD
            </span>
            <span className="text-[10px] tracking-[0.28em] font-medium text-[#676479] uppercase leading-none">
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
            className="inline-flex items-center gap-2 bg-[#544f82] hover:bg-[#433e68] text-white text-[13.5px] font-medium px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow hover:-translate-y-[0.5px] active:translate-y-0"
          >
            <span>Agendar reunión</span>
            <ArrowUpRight size={15} weight="bold" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#544f82] hover:bg-[#dedbea]/40 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5f4a9a]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
          >
            {mobileMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#dedbea] bg-[#faf9fd] px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Navegación móvil">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-medium text-[#3c3a4a] hover:text-[#544f82] py-2 border-b border-[#dedbea]/40"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <Link
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#544f82] text-white text-[14px] font-medium px-5 py-3 rounded-full shadow-sm text-center"
            >
              <span>Agendar reunión inicial</span>
              <ArrowUpRight size={16} weight="bold" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
