import { Check, ShieldCheck, LockKey, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const INCLUDED_ITEMS = [
  "Auditoría documental previa y matriz de hallazgos institucionales",
  "Elaboración o actualización de protocolos con manual operativo de aplicación",
  "Ciclo presencial o virtual de capacitación a mandos medios, RR. HH. y delegados",
  "Asistencia técnica y acompañamiento durante las etapas de implementación",
  "Pautas de adaptación conforme a la escala de la nómina y Convenio 190 OIT",
  "Material didáctico y modelos de registro confidencial para la entidad",
];

export function PricingSection() {
  return (
    <section id="inversion" className="py-16 md:py-24 bg-[#faf9fd] border-b border-[#dedbea]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1926] tracking-tight">
            Inversión transparente en el Sistema Integral
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#464453] leading-relaxed">
            El valor de implementar un sistema completo radica en que cada herramienta potencia a la otra: reduce contingencias laborales, evita esfuerzos aislados y deja a la organización verdaderamente preparada.
          </p>
        </div>

        {/* Investment Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#dedbea] p-5 sm:p-8 md:p-12 shadow-md relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Proposal & Price */}
            <div className="lg:col-span-5 space-y-5 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-[#dedbea]/60 pb-8 lg:pb-0 lg:pr-8">
              
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[12px] font-semibold tracking-[0.18em] uppercase text-[#544f82]">
                <ShieldCheck size={16} weight="fill" />
                <span>Propuesta Integral</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1a1926] leading-tight">
                Sistema Integral de Prevención
              </h3>

              <div className="pt-2">
                <div className="flex items-baseline justify-center lg:justify-start gap-2 whitespace-nowrap">
                  <span className="text-[13px] sm:text-[14px] font-semibold uppercase tracking-wider text-[#676479]">
                    Desde
                  </span>
                  <span className="font-heading text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] font-extrabold text-[#544f82] tracking-tight whitespace-nowrap">
                    USD 2.800
                  </span>
                </div>
                <p className="text-[12px] text-[#676479] mt-2 leading-relaxed">
                  Valor de referencia, sin IVA. Ajustable según el tamaño de la organización, complejidad y alcance del proyecto.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="#contacto"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#544f82] hover:bg-[#433e68] text-white text-[14.5px] font-medium px-6 py-3.5 rounded-xl transition-all shadow-sm hover:shadow active:scale-[0.98]"
                >
                  <span>Solicitar cotización formal</span>
                  <ArrowRight size={16} weight="bold" />
                </Link>
                <div className="mt-3 flex items-center justify-center lg:justify-start gap-1.5 text-[11.5px] text-[#676479]">
                  <LockKey size={14} weight="bold" />
                  <span>Confidencialidad estricta bajo acuerdo</span>
                </div>
              </div>

            </div>

            {/* Right: What is included & Conditions */}
            <div className="lg:col-span-7 space-y-6">
              <h4 className="text-[13px] font-bold text-[#1a1926]">
                Alcance y entregables contemplados:
              </h4>

              <ul className="space-y-3.5">
                {INCLUDED_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-[#f1eff7] text-[#544f82] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={13} weight="bold" />
                    </div>
                    <span className="text-[14px] text-[#3c3a4a] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Conditions footnote from the dossier */}
              <div className="pt-5 border-t border-[#dedbea]/60 text-[12px] text-[#676479] space-y-1.5">
                <p>
                  <strong>Condiciones comerciales:</strong> Validez de la propuesta de 30 días corridos. Para organizaciones radicadas en Argentina se puede cotizar y liquidar en pesos argentinos (ARS).
                </p>
                <p>
                  Forma de pago, modalidad de encuentros y cronograma operativo se acuerdan según los requerimientos de la entidad.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
