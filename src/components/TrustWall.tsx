"use client";

import Image from "next/image";

interface Institution {
  name: string;
  shortName: string;
  logoSrc: string;
  logoAlt: string;
  aspectClass?: string;
}

const INSTITUTIONS: Institution[] = [
  {
    name: "Centro Atómico Bariloche",
    shortName: "CAB · CNEA",
    logoSrc: "/images/logos/cnea.svg",
    logoAlt: "Logotipo oficial Comisión Nacional de Energía Atómica / Centro Atómico Bariloche",
  },
  {
    name: "Instituto Balseiro",
    shortName: "IB · CNEA / UNCuyo",
    logoSrc: "/images/logos/balseiro.png",
    logoAlt: "Logotipo oficial Instituto Balseiro",
  },
  {
    name: "Universidad Nacional de Río Negro",
    shortName: "UNRN",
    logoSrc: "/images/logos/unrn.svg",
    logoAlt: "Logotipo oficial Universidad Nacional de Río Negro",
  },
  {
    name: "Secretaría de Trabajo",
    shortName: "Gobierno de Río Negro",
    logoSrc: "/images/logos/trabajo-rn.svg",
    logoAlt: "Logotipo oficial Secretaría de Trabajo - Gobierno de Río Negro",
  },
  {
    name: "Colegio de Abogados",
    shortName: "General Roca · Río Negro",
    logoSrc: "/images/logos/aboroca.png",
    logoAlt: "Logotipo oficial Colegio de Abogadas y Abogados de General Roca",
  },
  {
    name: "Iniciativa OIT - Spotlight",
    shortName: "Convenio 190 OIT",
    logoSrc: "/images/logos/oit.svg",
    logoAlt: "Logotipo oficial Organización Internacional del Trabajo (OIT / ILO)",
  },
  {
    name: "FLACSO Argentina",
    shortName: "Sede Académica Argentina",
    logoSrc: "/images/logos/flacso.png",
    logoAlt: "Logotipo oficial FLACSO Argentina",
  },
  {
    name: "Universidad Nacional del Comahue",
    shortName: "UNCo",
    logoSrc: "/images/logos/unco.png",
    logoAlt: "Logotipo oficial Universidad Nacional del Comahue",
  },
];

export function TrustWall() {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#dedbea]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Sober, institutional, high-trust */}
        <div className="text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
          <p className="text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] text-[#544f82] uppercase mb-2">
            Trayectoria y Respaldo Institucional
          </p>
          <h2 className="font-heading text-lg sm:text-xl font-bold text-[#1a1926]">
            Organizaciones vinculadas a la experiencia técnica de la consultora
          </h2>
        </div>

        {/* Real Logos Grid: Harmonious, balanced, mobile-first */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5 items-stretch">
          {INSTITUTIONS.map((inst) => (
            <div
              key={inst.name}
              className="flex flex-col items-center justify-between p-4 sm:p-5 rounded-xl bg-[#faf9fd]/90 hover:bg-white border border-[#dedbea]/80 hover:border-[#b9b1d0] shadow-2xs hover:shadow-md transition-all duration-300 group text-center min-h-[145px] sm:min-h-[160px]"
            >
              {/* Logo Visual Stage */}
              <div className="w-full h-14 sm:h-16 flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={inst.logoSrc}
                    alt={inst.logoAlt}
                    width={180}
                    height={64}
                    className="max-h-full max-w-[85%] object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Text labels */}
              <div className="w-full pt-3 border-t border-[#dedbea]/50">
                <div className="font-heading text-[12px] sm:text-[13.5px] font-bold text-[#1a1926] group-hover:text-[#544f82] transition-colors leading-tight line-clamp-1">
                  {inst.name}
                </div>
                <div className="text-[10px] sm:text-[11px] font-medium text-[#676479] mt-0.5 tracking-wide line-clamp-1">
                  {inst.shortName}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
