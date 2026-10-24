import { FileMagnifyingGlass, Scales, GraduationCap, Lifebuoy } from "@phosphor-icons/react/dist/ssr";

const PHASES = [
  {
    letter: "A",
    title: "Diagnóstico y hoja de ruta",
    subtitle: "El punto de partida técnico",
    description:
      "Revisión integral del estado actual de la organización: auditoría de protocolos preexistentes, normativa interna y procedimientos de RR. HH. Mapeo de fortalezas, vacíos normativos y formulación de una hoja de ruta priorizada.",
    deliverables: [
      "Auditoría documental y de procedimientos",
      "Matriz de hallazgos y priorización de riesgos",
      "Cronograma estratégico de adecuación",
    ],
    icon: FileMagnifyingGlass,
    badgeBg: "bg-[#544f82] text-white",
  },
  {
    letter: "B",
    title: "Diseño y actualización de protocolos",
    subtitle: "La herramienta central de actuación",
    description:
      "Elaboración o adecuación del protocolo de prevención e intervención adaptado a la dimensión institucional. Definición taxativa de circuitos de denuncia, plazos, garantías de debido proceso, medidas cautelares y manual de aplicación.",
    deliverables: [
      "Protocolo institucional conforme Convenio 190 OIT",
      "Manual operativo y flujogramas de intervención",
      "Plantillas de registro confidencial y actas",
    ],
    icon: Scales,
    badgeBg: "bg-[#5f4a9a] text-white",
  },
  {
    letter: "C",
    title: "Capacitación para la implementación",
    subtitle: "El factor humano operativo",
    description:
      "Talleres prácticos diferenciados por rol funcional: alta dirección, mandos medios, equipos de Recursos Humanos y comisiones de delegados gremiales. Entrenamiento en detección temprana, recepción de consultas y límites de intervención.",
    deliverables: [
      "Talleres para mandos medios y conducción",
      "Capacitación a equipos de gestión y RR. HH.",
      "Módulos para delegados y representación gremial",
    ],
    icon: GraduationCap,
    badgeBg: "bg-[#544f82] text-white",
  },
  {
    letter: "D",
    title: "Asesoramiento técnico continuo",
    subtitle: "Acompañamiento y sostenibilidad",
    description:
      "Asistencia técnica permanente para la resolución de situaciones complejas, adecuación normativa ante reformas legislativas y consolidación paulatina de una cultura laboral basada en el respeto recíproco y la igualdad.",
    deliverables: [
      "Consultoría técnica ante casos incidentales",
      "Supervisión periódica de circuitos aplicados",
      "Actualización normativa y asesoría en paritarias",
    ],
    icon: Lifebuoy,
    badgeBg: "bg-[#5f4a9a] text-white",
  },
];

export function EcosystemPhases() {
  return (
    <section id="ecosistema" className="py-16 md:py-24 bg-white border-b border-[#dedbea]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1926] tracking-tight">
            Ecosistema de cuatro fases interconectadas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#464453] leading-relaxed">
            Un protocolo sin capacitación queda en el papel; una capacitación sin diagnóstico carece de precisión; y un diagnóstico sin seguimiento pierde vigencia. La integralidad garantiza sostenibilidad técnica.
          </p>
        </div>

        {/* Bento Grid: 2x2 with visual rhythm */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {PHASES.map((phase, idx) => {
            const Icon = phase.icon;
            const isAlternate = idx === 1 || idx === 2;

            return (
              <div
                key={phase.letter}
                className={`rounded-2xl border p-5 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md ${
                  isAlternate
                    ? "bg-[#faf9fd] border-[#dedbea]"
                    : "bg-white border-[#dedbea]"
                }`}
              >
                <div>
                  {/* Phase Header */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-heading text-base font-bold shadow-xs ${phase.badgeBg}`}
                      >
                        {phase.letter}
                      </span>
                      <span className="text-[12px] font-semibold text-[#676479]">
                        {phase.subtitle}
                      </span>
                    </div>

                    <div className="p-2 rounded-xl bg-white border border-[#dedbea] text-[#544f82] shadow-xs">
                      <Icon size={22} weight="bold" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-[#1a1926] mb-2 sm:mb-3">
                    {phase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] sm:text-[14.5px] text-[#464453] leading-relaxed mb-5 sm:mb-6">
                    {phase.description}
                  </p>
                </div>

                {/* Deliverables list */}
                <div className="pt-4 sm:pt-5 border-t border-[#dedbea]/60">
                  <div className="text-[11.5px] font-semibold text-[#544f82] mb-2.5 sm:mb-3">
                    Entregables y resultados:
                  </div>
                  <ul className="space-y-2">
                    {phase.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[12.5px] sm:text-[13px] text-[#3c3a4a]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5f4a9a] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
