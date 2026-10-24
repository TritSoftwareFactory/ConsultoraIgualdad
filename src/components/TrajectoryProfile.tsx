"use client";

import { useState } from "react";
import Image from "next/image";
import { GraduationCap, BookOpen, Certificate, Briefcase, Camera, VectorThree } from "@phosphor-icons/react";

export function TrajectoryProfile() {
  const [viewMode, setViewMode] = useState<"photo" | "vector">("photo");

  return (
    <section id="trayectoria" className="py-16 md:py-24 bg-white border-b border-[#dedbea]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow and Headline (1 eyebrow per 3 sections rule: this is our 2nd eyebrow on the page!) */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f1eff7] border border-[#dedbea] text-[11px] font-semibold tracking-[0.16em] uppercase text-[#544f82] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5f4a9a]" />
            <span>Dirección Técnica y Académica</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1926] tracking-tight">
            Belén Scalesa: Más de 20 años de articulación institucional
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#464453] leading-relaxed">
            Especialista en relaciones laborales, perspectiva de género y diseño de políticas públicas con trayectoria docente y técnica en el ámbito público y privado.
          </p>
        </div>

        {/* Main Grid: Portrait with view toggle on left, Credentials on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Portrait Card with Photo / Vector switcher */}
          <div className="lg:col-span-5">
            <div className="bg-[#faf9fd] rounded-2xl border border-[#dedbea] p-5 sm:p-6 shadow-sm">
              
              {/* Media Container */}
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#e4e1ed] border border-[#dedbea]">
                {viewMode === "photo" ? (
                  <Image
                    src="/images/belen-scalesa.webp"
                    alt="Retrato fotográfico de Belén Scalesa, Directora de Igualdad Consultora"
                    fill
                    className="object-cover object-top transition-opacity duration-300"
                    priority
                  />
                ) : (
                  <div className="relative w-full h-full p-2 flex items-center justify-center bg-[#f6f5fa]">
                    <Image
                      src="/images/belen-vector.svg"
                      alt="Vectorización de identidad de Belén Scalesa"
                      fill
                      className="object-contain transition-opacity duration-300"
                    />
                  </div>
                )}

                {/* View Mode Toggle Pill inside bottom corner */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-center">
                  <div className="inline-flex items-center p-1 rounded-full bg-white/92 backdrop-blur-md border border-[#dedbea] shadow-md gap-1">
                    <button
                      type="button"
                      onClick={() => setViewMode("photo")}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold transition-all ${
                        viewMode === "photo"
                          ? "bg-[#544f82] text-white shadow-xs"
                          : "text-[#676479] hover:text-[#1a1926]"
                      }`}
                      aria-label="Ver fotografía editorial"
                    >
                      <Camera size={14} weight={viewMode === "photo" ? "fill" : "regular"} />
                      <span>Retrato</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setViewMode("vector")}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold transition-all ${
                        viewMode === "vector"
                          ? "bg-[#544f82] text-white shadow-xs"
                          : "text-[#676479] hover:text-[#1a1926]"
                      }`}
                      aria-label="Ver síntesis vectorial"
                    >
                      <VectorThree size={14} weight={viewMode === "vector" ? "bold" : "regular"} />
                      <span>Vector</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Caption and Publication */}
              <div className="mt-4 pt-3 border-t border-[#dedbea]/60 text-center">
                <div className="font-heading text-lg font-bold text-[#1a1926]">
                  Belén Scalesa
                </div>
                <div className="text-[13px] text-[#544f82] font-medium">
                  Directora · Consultora de Género y Relaciones Laborales
                </div>
                <div className="mt-2 text-[11.5px] text-[#676479] inline-flex items-center gap-1.5">
                  <BookOpen size={14} weight="bold" />
                  <span>Manual con ISBN: 978-987-86-6110-0</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Curricular Narrative & Milestones */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Academic Credentials */}
            <div className="space-y-3">
              <h3 className="text-[13px] font-bold text-[#544f82] flex items-center gap-2">
                <GraduationCap size={18} weight="bold" />
                <span>Formación de Posgrado y Grado</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-[#faf9fd] border border-[#dedbea]">
                  <div className="text-[14px] font-bold text-[#1a1926]">Magíster en Género, Sociedad y Políticas</div>
                  <div className="text-[12.5px] text-[#544f82] font-semibold">FLACSO Argentina · 2014</div>
                </div>

                <div className="p-4 rounded-xl bg-[#faf9fd] border border-[#dedbea]">
                  <div className="text-[14px] font-bold text-[#1a1926]">Licenciada en Ciencias Políticas</div>
                  <div className="text-[12.5px] text-[#544f82] font-semibold">Universidad Nacional del Comahue · 2010</div>
                </div>
              </div>
            </div>

            {/* Key Professional Experience */}
            <div className="space-y-3 pt-2">
              <h3 className="text-[13px] font-bold text-[#544f82] flex items-center gap-2">
                <Briefcase size={18} weight="bold" />
                <span>Hitos de Gestión y Articulación Laboral</span>
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-xl border border-[#dedbea] hover:border-[#b9b1d0] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <span className="font-heading text-[15px] font-bold text-[#1a1926]">
                      Secretaría de Trabajo de Río Negro
                    </span>
                    <span className="text-[12px] font-semibold text-[#676479]">
                      2016-2020 y 2024-2025
                    </span>
                  </div>
                  <p className="text-[13.5px] text-[#464453] leading-relaxed">
                    Coordinación del área de Género y Empleo. Diseño e implementación participativa del Protocolo Provincial de prevención y abordaje de la violencia laboral por razones de género con su respectivo manual de aplicación.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-[#dedbea] hover:border-[#b9b1d0] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <span className="font-heading text-[15px] font-bold text-[#1a1926]">
                      Comisión Tripartita de Igualdad (Ley 5182)
                    </span>
                    <span className="text-[12px] font-semibold text-[#676479]">
                      Coordinadora Provincial
                    </span>
                  </div>
                  <p className="text-[13.5px] text-[#464453] leading-relaxed">
                    Lideró plenarias provinciales con participación simultánea de cámaras empresariales, organizaciones sindicales, municipios e instituciones del Estado.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-[#dedbea] hover:border-[#b9b1d0] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <span className="font-heading text-[15px] font-bold text-[#1a1926]">
                      Universidad Nacional de Río Negro (UNRN)
                    </span>
                    <span className="text-[12px] font-semibold text-[#676479]">
                      Profesora Adjunta Interina (Concursada)
                    </span>
                  </div>
                  <p className="text-[13.5px] text-[#464453] leading-relaxed">
                    Cátedra de Comunicación y Perspectiva de Género en Sede Atlántica. Dirección de tesis de grado (calificadas con 10) y supervisión de prácticas profesionales de Abogacía.
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics and Author badge */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#faf9fd] border border-[#dedbea] text-center">
                <div className="font-heading text-2xl font-bold text-[#544f82]">+20</div>
                <div className="text-[11.5px] text-[#676479] font-medium leading-tight mt-1">
                  Años en derecho laboral y políticas
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#faf9fd] border border-[#dedbea] text-center">
                <div className="font-heading text-2xl font-bold text-[#544f82]">+500</div>
                <div className="text-[11.5px] text-[#676479] font-medium leading-tight mt-1">
                  Profesionales y mandos capacitados
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-[#faf9fd] border border-[#dedbea] text-center">
                <div className="font-heading text-2xl font-bold text-[#544f82]">OIT</div>
                <div className="text-[11.5px] text-[#676479] font-medium leading-tight mt-1">
                  Expositora Iniciativa Spotlight
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
