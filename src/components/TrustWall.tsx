import React from "react";

interface Institution {
  name: string;
  shortName: string;
  svgIcon: React.ReactNode;
}

const INSTITUTIONS: Institution[] = [
  {
    name: "Centro Atómico Bariloche",
    shortName: "CAB · CNEA",
    svgIcon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9 text-[#544f82]" aria-hidden="true">
        <circle cx="22" cy="22" r="3.5" fill="currentColor" />
        <ellipse cx="22" cy="22" rx="19" ry="7.5" stroke="currentColor" strokeWidth="1.5" transform="rotate(30 22 22)" />
        <ellipse cx="22" cy="22" rx="19" ry="7.5" stroke="currentColor" strokeWidth="1.5" transform="rotate(-30 22 22)" />
        <ellipse cx="22" cy="22" rx="19" ry="7.5" stroke="currentColor" strokeWidth="1.5" transform="rotate(90 22 22)" />
      </svg>
    ),
  },
  {
    name: "Instituto Balseiro",
    shortName: "IB · CNEA / UNCuyo",
    svgIcon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9 text-[#544f82]" aria-hidden="true">
        <path d="M22 3 L37 9 V22 C37 31 22 39 22 39 C22 39 7 31 7 22 V9 L22 3 Z" stroke="currentColor" strokeWidth="1.5" fill="#f5f3f9" />
        <path d="M22 10 V24 M16 16 H28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="28" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Universidad Nacional de Río Negro",
    shortName: "UNRN",
    svgIcon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9 text-[#544f82]" aria-hidden="true">
        <rect x="6" y="8" width="32" height="28" rx="4" stroke="currentColor" strokeWidth="1.5" fill="#f5f3f9" />
        <path d="M22 12 V32 M10 26 C15 23 20 23 22 25 C24 23 29 23 34 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 18 C16 16 19 16 22 17 C25 16 28 16 32 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Secretaría de Trabajo de Río Negro",
    shortName: "Gobierno de Río Negro",
    svgIcon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9 text-[#544f82]" aria-hidden="true">
        <circle cx="22" cy="22" r="18" stroke="currentColor" strokeWidth="1.5" fill="#f5f3f9" />
        <path d="M22 9 V33 M13 17 H31 M13 17 L10 25 H16 L13 17 Z M31 17 L28 25 H34 L31 17 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Colegio de Abogados de General Roca",
    shortName: "Colegio de Abogados",
    svgIcon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9 text-[#544f82]" aria-hidden="true">
        <path d="M22 4 L38 12 V30 L22 40 L6 30 V12 Z" stroke="currentColor" strokeWidth="1.5" fill="#f5f3f9" />
        <path d="M22 12 V30 M15 18 H29 M12 24 L15 18 L18 24 Z M26 24 L29 18 L32 24 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Iniciativa OIT - Spotlight",
    shortName: "Convenio 190 OIT",
    svgIcon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9 text-[#544f82]" aria-hidden="true">
        <circle cx="22" cy="22" r="17" stroke="currentColor" strokeWidth="1.5" fill="#f5f3f9" />
        <ellipse cx="22" cy="22" rx="17" ry="7" stroke="currentColor" strokeWidth="1.3" />
        <path d="M22 5 V39 M5 22 H39" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="22" cy="22" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "FLACSO Argentina",
    shortName: "FLACSO",
    svgIcon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9 text-[#544f82]" aria-hidden="true">
        <path d="M8 8 H36 V24 C36 32 22 38 22 38 C22 38 8 32 8 24 Z" stroke="currentColor" strokeWidth="1.5" fill="#f5f3f9" />
        <path d="M15 17 H29 M15 22 H25 M15 27 H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Universidad Nacional del Comahue",
    shortName: "UNCo",
    svgIcon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-9 h-9 text-[#544f82]" aria-hidden="true">
        <circle cx="22" cy="22" r="18" stroke="currentColor" strokeWidth="1.5" fill="#f5f3f9" />
        <path d="M10 28 L18 18 L24 25 L30 16 L35 28 Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <circle cx="22" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
  },
];

export function TrustWall() {
  return (
    <section className="py-12 bg-white border-b border-[#dedbea]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title: sober, honest, institutional */}
        <div className="text-center mb-9">
          <p className="text-[12px] font-semibold tracking-wider text-[#676479] uppercase">
            Organizaciones e instituciones vinculadas a la trayectoria técnica
          </p>
        </div>

        {/* Logo Wall: Real SVG marks, sober layout, logo-only clarity */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
          {INSTITUTIONS.map((inst) => (
            <div
              key={inst.name}
              className="flex flex-col items-center justify-center p-5 rounded-xl bg-[#faf9fd] border border-[#dedbea]/70 hover:border-[#b9b1d0] hover:bg-white hover:shadow-sm transition-all duration-200 text-center group"
            >
              <div className="mb-3 p-2 rounded-xl bg-white border border-[#dedbea]/60 group-hover:border-[#b9b1d0] group-hover:scale-105 transition-all shadow-xs">
                {inst.svgIcon}
              </div>
              <span className="font-heading text-[13.5px] sm:text-[14px] font-bold text-[#3c3a4a] group-hover:text-[#544f82] transition-colors leading-snug">
                {inst.name}
              </span>
              <span className="text-[11px] font-medium text-[#676479] mt-1 tracking-wide">
                {inst.shortName}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
