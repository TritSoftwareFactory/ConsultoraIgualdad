import { Check, ShieldCheck, LockKey, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const INCLUDED_COMPONENTS = [
  "Diagnóstico documental con matriz de hallazgos.",
  "Protocolo de actuación adaptado y manual de aplicación.",
  "Ciclo de capacitación para roles clave.",
  "Acompañamiento técnico durante la implementación.",
];

export function PricingSection() {
  return (
    <section id="inversion" className="py-16 md:py-24 bg-[#faf9fd] border-b border-[#dedbea]/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1eff7] text-[#544f82] text-[12px] font-semibold tracking-wider uppercase mb-4">
            <ShieldCheck size={16} weight="fill" />
            <span>Propuesta Integral</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1926] tracking-tight">
            Inversión transparente en el Sistema Integral
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#464453] leading-relaxed">
            El valor de implementar un sistema completo es que cada herramienta potencia a la otra. Esto reduce riesgos, evita esfuerzos aislados y asegura que la organización quede verdaderamente preparada.
          </p>
        </div>

        {/* Investment Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-[#dedbea] p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left: Deliverables / What is included */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1a1926] tracking-tight mb-5">
                  ¿Qué incluye la inversión?
                </h3>

                <ul className="space-y-3.5">
                  {INCLUDED_COMPONENTS.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#faf9fd] border border-[#dedbea]/60 transition-colors hover:border-[#dedbea]"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[#f1eff7] text-[#544f82] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} weight="bold" />
                      </div>
                      <span className="text-[14.5px] sm:text-[15px] text-[#2d2b3a] leading-relaxed font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Tailored Planning & Action Box */}
            <div className="lg:col-span-5 bg-[#faf9fd] rounded-2xl border border-[#dedbea]/70 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold tracking-wider uppercase text-[#544f82] bg-white px-2.5 py-1 rounded-md border border-[#dedbea]/60">
                  <ShieldCheck size={14} weight="fill" />
                  <span>Planificación a medida</span>
                </div>

                <h4 className="font-heading text-xl sm:text-2xl font-bold text-[#1a1926] mt-4 mb-3 leading-snug">
                  Sistema Integral de Prevención
                </h4>

                <p className="text-[14px] sm:text-[14.5px] text-[#464453] leading-relaxed">
                  El presupuesto y el tiempo de intervención se planifican según el tamaño de la organización y el alcance del proyecto.
                </p>
              </div>

              <div className="pt-6 sm:pt-8 space-y-3">
                <Link
                  href="#contacto"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#544f82] hover:bg-[#433e68] text-white text-[14.5px] font-medium px-5 py-3.5 rounded-xl transition-all shadow-sm hover:shadow active:scale-[0.98]"
                >
                  <span>Solicitá una reunión de 30´ sin costo</span>
                  <ArrowRight size={16} weight="bold" />
                </Link>

                <div className="flex items-center justify-center gap-2 text-[12px] text-[#676479] text-center">
                  <LockKey size={14} weight="bold" className="text-[#544f82] shrink-0" />
                  <span>Toda intervención es estrictamente confidencial.</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
