"use client";

import { useState } from "react";
import { Buildings, UsersThree, Bank, ArrowRight, ShieldCheck, GlobeSimple } from "@phosphor-icons/react";
import Link from "next/link";

interface Audience {
  id: string;
  name: string;
  shortLabel: string;
  tagline: string;
  icon: typeof Buildings;
  challenge: string;
  solution: string;
  highlights: string[];
}

const AUDIENCES: Audience[] = [
  {
    id: "empresas",
    name: "Empresas y Empleadores",
    shortLabel: "Empresas",
    tagline: "Mitigación de riesgos legales y resguardo del clima organizacional",
    icon: Buildings,
    challenge:
      "Las contingencias laborales por acoso o discriminación acarrean altos costos en indemnizaciones, deterioro del clima de trabajo, desmotivación de equipos, ausentismo y daños severos a la reputación corporativa.",
    solution:
      "Estructuramos canales formales de denuncia y protocolos blindados conforme al Convenio 190 de la OIT. Capacitamos a la línea gerencial y a Recursos Humanos para actuar con celeridad y seguridad técnica.",
    highlights: [
      "Adecuación plena al estándar vinculante del Convenio 190 OIT",
      "Definición de circuitos de investigación interna con debido proceso",
      "Talleres de sensibilización y liderazgo para mandos medios y directores",
      "Resguardo legal de la empresa y mitigación de reclamos judiciales",
    ],
  },
  {
    id: "sindicatos",
    name: "Sindicatos y Entidades Gremiales",
    shortLabel: "Sindicatos",
    tagline: "Defensa gremial fundamentada y comisiones paritarias de igualdad",
    icon: UsersThree,
    challenge:
      "Las y los delegados gremiales suelen recibir relatos complejos sin contar con un protocolo unificado ni con herramientas técnicas para intervenir constructivamente sin exponer a las personas afiliadas.",
    solution:
      "Brindamos herramientas técnicas para la negociación colectiva paritaria, conformación de comisiones de género y formación de cuadros sindicales en recepción de casos y acompañamiento gremial responsable.",
    highlights: [
      "Cláusulas paritarias de prevención para convenios colectivos",
      "Formación a cuerpos de delegadas/os en primera escucha y derivación",
      "Manuales operativos gremiales para la articulación con las empresas",
      "Fortalecimiento institucional de secretarías de género y diversidad",
    ],
  },
  {
    id: "publico",
    name: "Organismos Públicos y Municipios",
    shortLabel: "Sector Público",
    tagline: "Cumplimiento normativo, Ley Micaela y jerarquización institucional",
    icon: Bank,
    challenge:
      "Los estados provinciales y municipios enfrentan el desafío de aplicar normativas de género en estructuras administrativas complejas, garantizando debidos procesos disciplinarios y respuesta oportuna a la ciudadanía.",
    solution:
      "Diseño e implementación de protocolos administrativos provinciales y municipales, articulación de comisiones tripartitas de igualdad (Ley 5182) y capacitación obligatoria en Ley Micaela con impacto medible.",
    highlights: [
      "Protocolos administrativos con circuitos de intervención formalizados",
      "Planes de formación y certificación en el marco de la Ley Micaela",
      "Articulación interministerial y mesas de trabajo tripartitas",
      "Asesoramiento técnico en sumarios y comisiones de disciplina",
    ],
  },
];

export function AudiencesSection() {
  const [activeId, setActiveId] = useState("empresas");
  const activeAudience = AUDIENCES.find((a) => a.id === activeId) || AUDIENCES[0];
  const Icon = activeAudience.icon;

  return (
    <section id="sectores" className="py-16 md:py-24 bg-[#faf9fd] border-b border-[#dedbea]/60 scroll-mt-20">
      <span id="audiencias" className="sr-only pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1926] tracking-tight">
            Propuestas a la medida de cada sector institucional
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#464453] leading-relaxed">
            La prevención de la violencia laboral no admite recetas genéricas: cada sector opera bajo regulaciones, lógicas internas y marcos normativos específicos.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#dedbea] text-[12px] sm:text-[12.5px] font-medium text-[#544f82] shadow-2xs">
            <GlobeSimple size={15} weight="bold" className="text-[#5f4a9a] shrink-0" />
            <span>Alcance para organizaciones en Argentina y países de habla hispana (Latinoamérica y España)</span>
          </div>
        </div>

        {/* Tab Controls: Responsive Segmented Switcher (Sober architectural styling) */}
        <div className="flex justify-center mb-8 sm:mb-10 w-full max-w-xl mx-auto">
          <div className="grid grid-cols-3 w-full p-1 rounded-xl bg-white border border-[#dedbea] shadow-xs gap-1">
            {AUDIENCES.map((audience) => {
              const TabIcon = audience.icon;
              const isSelected = audience.id === activeId;

              return (
                <button
                  key={audience.id}
                  type="button"
                  onClick={() => setActiveId(audience.id)}
                  className={`inline-flex items-center justify-center gap-1.5 px-1.5 sm:px-4 py-2.5 sm:py-3 rounded-lg text-[12px] sm:text-[13.5px] font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5f4a9a] text-center min-h-[44px] cursor-pointer ${
                    isSelected
                      ? "bg-[#544f82] text-white shadow-sm"
                      : "text-[#676479] hover:text-[#1a1926] hover:bg-[#f6f5fa]"
                  }`}
                >
                  <TabIcon size={16} weight={isSelected ? "bold" : "regular"} className="shrink-0" />
                  <span className="hidden sm:inline">{audience.name}</span>
                  <span className="sm:hidden">{audience.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Content Panel */}
        <div className="bg-white rounded-2xl border border-[#dedbea] p-5 sm:p-8 md:p-11 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Scope & Rationale */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#f5f3f9] text-[#544f82]">
                  <Icon size={24} weight="bold" />
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1a1926]">
                    {activeAudience.name}
                  </h3>
                  <p className="text-[13px] text-[#676479]">
                    {activeAudience.tagline}
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <h4 className="text-[12px] font-semibold text-[#676479] mb-1.5">
                    El desafío principal
                  </h4>
                  <p className="text-[14.5px] text-[#464453] leading-relaxed">
                    {activeAudience.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-[12px] font-semibold text-[#544f82] mb-1.5">
                    El abordaje de Igualdad Consultora
                  </h4>
                  <p className="text-[14.5px] text-[#464453] leading-relaxed">
                    {activeAudience.solution}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#544f82] hover:text-[#373359] group"
                >
                  <span>Solicitar propuesta para {activeAudience.name.toLowerCase()}</span>
                  <ArrowRight size={15} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Key Focus Highlights */}
            <div className="lg:col-span-5 bg-[#faf9fd] rounded-xl border border-[#dedbea] p-6 space-y-4">
              <div className="flex items-center gap-2 text-[12px] font-bold text-[#544f82]">
                <ShieldCheck size={18} weight="fill" />
                <span>Puntos clave de intervención</span>
              </div>

              <ul className="space-y-3">
                {activeAudience.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5f4a9a] shrink-0 mt-2" />
                    <span className="text-[13.5px] text-[#3c3a4a] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
