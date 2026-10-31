import { WarningCircle, CheckCircle, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function ChallengeSection() {
  return (
    <section id="metodologia" className="py-16 md:py-24 bg-[#faf9fd] border-b border-[#dedbea]/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Centered vertical stack, no floater */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1926] tracking-tight">
            El desafío de las respuestas aisladas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#464453] leading-relaxed">
            Cuando las áreas interpretan los conflictos laborales de forma desconectada, los procedimientos se debilitan, se revictimiza y la organización queda expuesta.
          </p>
        </div>

        {/* 2-Column Comparative Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Abordaje Fragmentado */}
          <div className="bg-white rounded-2xl border border-[#dedbea] p-5 sm:p-7 md:p-9 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#f6f5fa] text-[#676479] text-[12px] font-semibold mb-5">
                <WarningCircle size={16} weight="bold" />
                <span>Abordaje tradicional fragmentado</span>
              </div>

              <h3 className="font-heading text-lg sm:text-2xl font-bold text-[#1a1926] mb-3 sm:mb-4">
                Respuestas desarticuladas y protocolos de papel
              </h3>

              <p className="text-[14.5px] sm:text-[15px] text-[#464453] leading-relaxed mb-6">
                En muchas organizaciones, mandos medios y directivos, Recursos Humanos y representación sindical pueden activar respuestas diferentes frente a situaciones de violencia y acoso:
              </p>

              <ul className="space-y-3.5 sm:space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-[#f1eff7] text-[#676479] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ×
                  </div>
                  <span className="text-[13.5px] sm:text-[14px] text-[#464453] leading-snug">
                    <strong className="text-[#1a1926] font-semibold">Criterios dispares:</strong> Cada sector interpreta la normativa interna según su propia perspectiva.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-[#f1eff7] text-[#676479] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ×
                  </div>
                  <span className="text-[13.5px] sm:text-[14px] text-[#464453] leading-snug">
                    <strong className="text-[#1a1926] font-semibold">Circuitos difusos:</strong> Procedimientos poco claros sobre la recepción, el registro y la intervención frente a cada situación.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-[#f1eff7] text-[#676479] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ×
                  </div>
                  <span className="text-[13.5px] sm:text-[14px] text-[#464453] leading-snug">
                    <strong className="text-[#1a1926] font-semibold">Revictimización:</strong> La persona en situación de violencia y acoso pasa por varias instancias y procedimientos en los que es expuesta innecesariamente por falta de criterios acordados previamente entre los sectores.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-[#f1eff7] text-[#676479] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ×
                  </div>
                  <span className="text-[13.5px] sm:text-[14px] text-[#464453] leading-snug">
                    <strong className="text-[#1a1926] font-semibold">Contingencia legal:</strong> Incumplimiento del Convenio 190 OIT, de la Ley 26485 que prohíbe la revictimización en los casos de violencia de género en todos los ámbitos y modalidades, y aumento de litigiosidad laboral.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-7 sm:mt-8 pt-4 sm:pt-5 border-t border-[#dedbea]/60 text-[12.5px] sm:text-[13px] text-[#676479]">
              Consecuencia: Un protocolo archivado que no se aplica no protege a las personas ni resguarda a la dirección.
            </div>
          </div>

          {/* Card 2: Propuesta Articulada */}
          <div className="bg-[#544f82] text-white rounded-2xl p-5 sm:p-7 md:p-9 shadow-md flex flex-col justify-between relative overflow-hidden">
            {/* Subtle background glow element */}
            <div 
              className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#5f4a9a] opacity-50 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-[#dedbea] text-[12px] font-semibold mb-5 backdrop-blur-sm">
                <CheckCircle size={16} weight="fill" className="text-[#b9b1d0]" />
                <span>Propuesta articulada Igualdad</span>
              </div>

              <h3 className="font-heading text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                El Sistema Integral como proceso continuo
              </h3>

              <p className="text-[14.5px] sm:text-[15px] text-[#dedbea] leading-relaxed mb-6">
                Conectamos diagnóstico, diseño técnico, formación de mandos y asistencia permanente bajo un criterio metodológico unificado:
              </p>

              <ul className="space-y-3.5 sm:space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-md bg-white/15 text-[#b9b1d0] shrink-0 mt-0.5">
                    <CheckCircle size={14} weight="fill" />
                  </div>
                  <span className="text-[13.5px] sm:text-[14px] text-[#f5f3f9] leading-snug">
                    <strong className="text-white font-semibold">Claridad procedimental:</strong> Roles, plazos y mecanismos de actuación formalmente definidos.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-md bg-white/15 text-[#b9b1d0] shrink-0 mt-0.5">
                    <CheckCircle size={14} weight="fill" />
                  </div>
                  <span className="text-[13.5px] sm:text-[14px] text-[#f5f3f9] leading-snug">
                    <strong className="text-white font-semibold">Equipos facultados:</strong> Capacitación específica para mandos medios, RR. HH. y referentes gremiales.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-md bg-white/15 text-[#b9b1d0] shrink-0 mt-0.5">
                    <CheckCircle size={14} weight="fill" />
                  </div>
                  <span className="text-[13.5px] sm:text-[14px] text-[#f5f3f9] leading-snug">
                    <strong className="text-white font-semibold">Seguridad jurídica:</strong> Adecuación plena al Convenio 190 OIT y normativas de género vigentes.
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative z-10 mt-7 sm:mt-8 pt-4 sm:pt-5 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-[12.5px] sm:text-[13px] text-[#dedbea]">
                Resultado: Condiciones institucionales para que la prevención funcione.
              </span>
              <Link
                href="#contacto"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white hover:text-[#b9b1d0] transition-colors py-1"
              >
                <span>Solicitar diagnóstico</span>
                <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
