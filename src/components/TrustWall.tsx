import React from "react";

interface Institution {
  name: string;
  shortName: string;
  badge: string;
}

const INSTITUTIONS: Institution[] = [
  {
    name: "Centro Atómico Bariloche",
    shortName: "CAB · CNEA",
    badge: "Ciencia y Tecnología",
  },
  {
    name: "Instituto Balseiro",
    shortName: "IB · CNEA / UNCuyo",
    badge: "Educación Superior",
  },
  {
    name: "Universidad Nacional de Río Negro",
    shortName: "UNRN",
    badge: "Ámbito Universitario",
  },
  {
    name: "Secretaría de Trabajo de Río Negro",
    shortName: "Gobierno de Río Negro",
    badge: "Gestión Pública",
  },
  {
    name: "Colegio de Abogados de General Roca",
    shortName: "Colegio de Abogados",
    badge: "Colegiatura Profesional",
  },
  {
    name: "Iniciativa OIT - Spotlight",
    shortName: "Convenio 190 OIT",
    badge: "Organismo Internacional",
  },
  {
    name: "FLACSO Argentina",
    shortName: "FLACSO",
    badge: "Posgrado y Políticas",
  },
  {
    name: "Universidad Nacional del Comahue",
    shortName: "UNCo",
    badge: "Ciencias Políticas",
  },
];

export function TrustWall() {
  return (
    <section className="py-10 bg-white border-b border-[#dedbea]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title: sober, honest, institutional */}
        <div className="text-center mb-7">
          <p className="text-[12px] font-semibold text-[#676479]">
            Organizaciones e instituciones vinculadas a la trayectoria técnica
          </p>
        </div>

        {/* Logo Wall: Real marks, sober layout, logo-only clarity */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
          {INSTITUTIONS.map((inst) => (
            <div
              key={inst.name}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#faf9fd] border border-[#dedbea]/60 hover:border-[#b9b1d0] transition-colors text-center group"
            >
              <span className="font-heading text-[14px] sm:text-[15px] font-bold text-[#3c3a4a] group-hover:text-[#544f82] transition-colors leading-tight">
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
