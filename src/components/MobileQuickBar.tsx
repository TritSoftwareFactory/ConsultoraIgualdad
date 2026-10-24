"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { WhatsappLogo, CalendarCheck } from "@phosphor-icons/react";

export function MobileQuickBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating quick bar after scrolling 200px
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hola Belén, me contacto desde el sitio web de Igualdad Consultora para coordinar una reunión inicial sobre prevención y abordaje de violencia laboral."
  );

  if (!visible) return null;

  return (
    <div 
      className="fixed bottom-0 inset-x-0 z-40 md:hidden p-3 bg-white/95 backdrop-blur-md border-t border-[#dedbea] shadow-[0_-4px_20px_rgba(84,79,130,0.12)] pb-[calc(0.75rem+env(safe-area-inset-bottom))] transition-all duration-300 animate-in slide-in-from-bottom-3"
      role="region"
      aria-label="Acciones rápidas para móvil"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* WhatsApp Direct 1-Tap */}
        <a
          href={`https://wa.me/5492920411152?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20ba59] active:scale-[0.98] text-white text-[13.5px] font-semibold py-3 px-3 rounded-xl shadow-xs transition-all min-h-[46px]"
          aria-label="Contactar directamente por WhatsApp"
        >
          <WhatsappLogo size={20} weight="fill" />
          <span>WhatsApp directo</span>
        </a>

        {/* Agendar Reunión Fast Jump */}
        <Link
          href="#contacto"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#544f82] hover:bg-[#433e68] active:scale-[0.98] text-white text-[13.5px] font-semibold py-3 px-3 rounded-xl shadow-xs transition-all min-h-[46px]"
        >
          <CalendarCheck size={18} weight="bold" />
          <span>Agendar reunión</span>
        </Link>
      </div>
    </div>
  );
}
