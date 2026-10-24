"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import {
  FileMagnifyingGlass,
  Scales,
  GraduationCap,
  Lifebuoy,
  ArrowRight,
  ArrowDown,
  ArrowsClockwise,
  Check,
  ShieldCheck,
} from "@phosphor-icons/react";

interface PhaseItem {
  id: string;
  letter: "A" | "B" | "C" | "D";
  stepNumber: string;
  stepLabel: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: typeof FileMagnifyingGlass;
  badgeBg: string;
  connectionSummary: string;
  connectionDetail: string;
  nextStepText: string;
  nextLetter: string;
}

const PHASES: PhaseItem[] = [
  {
    id: "fase-a",
    letter: "A",
    stepNumber: "01",
    stepLabel: "Fase 01 de 04",
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
    connectionSummary: "Fundamenta la base técnica",
    connectionDetail:
      "Los hallazgos y la matriz de riesgos definen los estándares específicos para redactar o adecuar el protocolo institucional.",
    nextStepText: "Habilita Fase B · Diseño de protocolos",
    nextLetter: "B",
  },
  {
    id: "fase-b",
    letter: "B",
    stepNumber: "02",
    stepLabel: "Fase 02 de 04",
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
    connectionSummary: "Establece el marco normativo",
    connectionDetail:
      "El protocolo formal define los roles y procedimientos taxativos que se transferirán y entrenarán en las capacitaciones.",
    nextStepText: "Habilita Fase C · Capacitación operativa",
    nextLetter: "C",
  },
  {
    id: "fase-c",
    letter: "C",
    stepNumber: "03",
    stepLabel: "Fase 03 de 04",
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
    connectionSummary: "Activa la capacidad de respuesta",
    connectionDetail:
      "Los equipos formados aplican el protocolo en terreno y cuentan con respaldo permanente ante dudas o complejidades.",
    nextStepText: "Habilita Fase D · Asesoramiento continuo",
    nextLetter: "D",
  },
  {
    id: "fase-d",
    letter: "D",
    stepNumber: "04",
    stepLabel: "Fase 04 de 04",
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
    connectionSummary: "Garantiza vigencia y mejora",
    connectionDetail:
      "La supervisión de casos reales retroalimenta auditorías periódicas, cerrando el ciclo virtuoso de mejora continua.",
    nextStepText: "Retroalimenta Fase A · Diagnóstico periódico",
    nextLetter: "A",
  },
];

export function EcosystemPhases() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;

  // Scroll tracking across the whole ecosystem section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 75%"],
  });

  const timelineScale = useTransform(scrollYProgress, [0, 1], [0, 1], {
    clamp: true,
  });

  const scrollToPhase = (phaseId: string) => {
    const desktopEl = document.getElementById(`desktop-${phaseId}`);
    const mobileEl = document.getElementById(`mobile-${phaseId}`);
    const target =
      desktopEl && desktopEl.offsetParent !== null ? desktopEl : mobileEl;
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      id="ecosistema"
      ref={containerRef}
      className="py-16 md:py-24 bg-white border-b border-[#dedbea]/60 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-14"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <span className="w-5 sm:w-8 h-[1.5px] bg-[#544f82]/40" />
            <span className="text-[11px] sm:text-[12.5px] font-semibold tracking-[0.18em] sm:tracking-[0.22em] uppercase text-[#544f82]">
              Metodología Integral de Intervención
            </span>
            <span className="w-5 sm:w-8 h-[1.5px] bg-[#544f82]/40" />
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1926] tracking-tight text-balance">
            Ecosistema de cuatro fases interconectadas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#464453] leading-relaxed text-balance">
            Un protocolo sin capacitación queda en el papel; una capacitación sin diagnóstico carece de precisión; y un diagnóstico sin seguimiento pierde vigencia. La integralidad garantiza sostenibilidad técnica.
          </p>
        </motion.div>

        {/* Desktop Pipeline Progress Bar (Tablets & Desktop) */}
        <div className="hidden md:block mb-12">
          <div className="bg-[#faf9fd] border border-[#dedbea] rounded-2xl p-4 sm:p-5 shadow-2xs">
            <div className="flex items-center justify-between mb-3.5 px-1">
              <div className="text-[11px] font-semibold tracking-wider uppercase text-[#676479]">
                Ruta Metodológica Continua · Convenio 190 OIT
              </div>
              <div className="text-[11px] font-medium text-[#544f82]">
                4 fases interconectadas
              </div>
            </div>

            {/* Stepper bar with background track and progress fill */}
            <div className="relative">
              {/* Background rail */}
              <div className="absolute top-1/2 left-6 right-6 h-[2px] -translate-y-1/2 bg-[#dedbea]" />
              
              {/* Dynamic scroll progress fill line */}
              <motion.div
                style={{
                  scaleX: shouldReduceMotion ? 1 : timelineScale,
                  transformOrigin: "left",
                }}
                className="absolute top-1/2 left-6 right-6 h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#544f82] via-[#5f4a9a] to-[#7b61c4]"
              />

              {/* 4 Interconnected Step Pills */}
              <div className="relative z-10 flex items-center justify-between gap-2">
                {PHASES.map((phase, idx) => (
                  <button
                    key={phase.id}
                    type="button"
                    onClick={() => scrollToPhase(phase.id)}
                    className="group flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white border border-[#dedbea] hover:border-[#544f82] transition-all shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5f4a9a]"
                    aria-label={`Ir a Fase ${phase.letter}: ${phase.title}`}
                  >
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-heading text-xs font-bold transition-transform group-hover:scale-105 ${phase.badgeBg}`}
                    >
                      {phase.letter}
                    </span>
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-semibold text-[#676479] leading-none">
                        Paso {phase.stepNumber}
                      </div>
                      <div className="text-[12.5px] font-semibold text-[#1a1926] group-hover:text-[#544f82] transition-colors leading-tight">
                        {phase.title.split(" ")[0]} {phase.title.split(" ")[1] || ""}
                      </div>
                    </div>
                    {idx < PHASES.length - 1 ? (
                      <ArrowRight
                        size={13}
                        weight="bold"
                        className="text-[#8b889e] ml-1 group-hover:translate-x-0.5 transition-transform"
                      />
                    ) : (
                      <ArrowsClockwise
                        size={13}
                        weight="bold"
                        className="text-[#5f4a9a] ml-1 group-hover:rotate-180 transition-transform duration-500"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< md): Connected Vertical Timeline Rail         */}
        {/* ============================================================== */}
        <div className="block md:hidden relative pl-8 sm:pl-10">
          
          {/* Continuous vertical timeline track line */}
          <div
            aria-hidden="true"
            className="absolute left-4 sm:left-5 -translate-x-1/2 top-5 bottom-6 w-[2px] bg-[#dedbea]"
          />

          {/* Dynamic scroll progress fill line on mobile */}
          <motion.div
            aria-hidden="true"
            style={{
              scaleY: shouldReduceMotion ? 1 : timelineScale,
              transformOrigin: "top",
            }}
            className="absolute left-4 sm:left-5 -translate-x-1/2 top-5 bottom-6 w-[2px] bg-gradient-to-b from-[#544f82] via-[#5f4a9a] to-[#7b61c4]"
          />

          <div className="space-y-6">
            {PHASES.map((phase, idx) => {
              const Icon = phase.icon;
              const isAlternate = idx % 2 === 1;

              return (
                <div key={phase.id} id={`mobile-${phase.id}`} className="relative">
                  {/* Timeline Anchor Node aligned over vertical spine */}
                  <div
                    aria-hidden="true"
                    className="absolute -left-8 sm:-left-10 w-8 sm:w-10 flex justify-center top-4.5 z-10"
                  >
                    <div className="w-6 h-6 rounded-full bg-white border-2 border-[#544f82] shadow-xs flex items-center justify-center">
                      <span className="text-[10px] font-bold text-[#544f82] font-heading">
                        {phase.letter}
                      </span>
                    </div>
                  </div>

                  {/* Mobile Card with Scroll Reveal */}
                  <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`rounded-2xl border p-5 sm:p-6 transition-all shadow-xs ${
                      isAlternate
                        ? "bg-[#faf9fd] border-[#dedbea]"
                        : "bg-white border-[#dedbea]"
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between gap-3 mb-3.5">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-8 h-8 rounded-xl flex items-center justify-center font-heading text-sm font-bold shadow-xs ${phase.badgeBg}`}
                        >
                          {phase.letter}
                        </span>
                        <div>
                          <div className="text-[10.5px] font-semibold text-[#544f82] uppercase tracking-wide">
                            {phase.stepLabel}
                          </div>
                          <div className="text-[12px] font-medium text-[#676479] leading-tight">
                            {phase.subtitle}
                          </div>
                        </div>
                      </div>

                      <div className="p-2 rounded-xl bg-white border border-[#dedbea] text-[#544f82] shadow-xs shrink-0">
                        <Icon size={20} weight="bold" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-lg font-bold text-[#1a1926] mb-2 leading-snug">
                      {phase.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13.5px] text-[#464453] leading-relaxed mb-4">
                      {phase.description}
                    </p>

                    {/* Deliverables */}
                    <div className="pt-3.5 border-t border-[#dedbea]/70 mb-4">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#544f82] mb-2">
                        Entregables y resultados:
                      </div>
                      <ul className="space-y-2">
                        {phase.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[12.5px] text-[#3c3a4a] leading-snug">
                            <span className="w-4 h-4 rounded-full bg-[#f1eff7] text-[#5f4a9a] flex items-center justify-center shrink-0 mt-0.5">
                              <Check size={11} weight="bold" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Interconnection Card Footer */}
                    <div className="bg-[#f5f3f9] border border-[#dedbea] rounded-xl p-3 text-[12px] text-[#3c3a4a] flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-md bg-[#544f82] text-white flex items-center justify-center shrink-0 mt-0.5">
                        {idx === PHASES.length - 1 ? (
                          <ArrowsClockwise size={12} weight="bold" />
                        ) : (
                          <ArrowRight size={12} weight="bold" />
                        )}
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-[#1a1926] block">
                          {phase.nextStepText}
                        </span>
                        <span className="text-[#676479] text-[11.5px] leading-relaxed block mt-0.5">
                          {phase.connectionDetail}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Inter-card Connector Pill on Mobile */}
                  {idx < PHASES.length - 1 && (
                    <div className="flex items-center gap-2 py-2 pl-2">
                      <div className="w-4 h-4 rounded-full bg-[#544f82]/10 text-[#544f82] flex items-center justify-center">
                        <ArrowDown size={11} weight="bold" />
                      </div>
                      <span className="text-[11px] font-semibold text-[#676479] tracking-tight">
                        Paso {phase.stepNumber} → Paso {PHASES[idx + 1].stepNumber}: {phase.connectionSummary}
                      </span>
                    </div>
                  )}

                  {/* Final Cycle Closure on Mobile */}
                  {idx === PHASES.length - 1 && (
                    <motion.div
                      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                      whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45 }}
                      className="mt-3 bg-[#faf9fd] border border-[#dedbea] rounded-xl p-3.5 flex items-start gap-2.5 shadow-2xs"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[#5f4a9a] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <ArrowsClockwise size={14} weight="bold" />
                      </div>
                      <div className="text-[12px] text-[#3c3a4a]">
                        <strong className="text-[#1a1926] block font-semibold">
                          Ciclo cerrado de sostenibilidad
                        </strong>
                        <span className="text-[#464453] text-[11.5px] leading-snug">
                          La supervisión de casos reales retroalimenta la Fase A (Diagnóstico), asegurando que los protocolos mantengan vigencia legal y técnica permanente.
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP VIEW (>= md): Interconnected 2x2 Bento with Flow Links */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-2 gap-7 lg:gap-8">
          {PHASES.map((phase, idx) => {
            const Icon = phase.icon;
            const isAlternate = idx === 1 || idx === 2;

            return (
              <motion.div
                key={phase.id}
                id={`desktop-${phase.id}`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15, margin: "0px 0px -50px 0px" }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : (idx % 2) * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`rounded-2xl border p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-[#544f82]/40 ${
                  isAlternate
                    ? "bg-[#faf9fd] border-[#dedbea]"
                    : "bg-white border-[#dedbea]"
                }`}
              >
                <div>
                  {/* Phase Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-heading text-base font-bold shadow-xs ${phase.badgeBg}`}
                      >
                        {phase.letter}
                      </span>
                      <div>
                        <div className="text-[11px] font-semibold text-[#544f82] uppercase tracking-wider">
                          {phase.stepLabel}
                        </div>
                        <div className="text-[12px] font-medium text-[#676479]">
                          {phase.subtitle}
                        </div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-[#dedbea] text-[#544f82] shadow-xs">
                      <Icon size={22} weight="bold" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-[#1a1926] mb-3 leading-snug">
                    {phase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] lg:text-[14.5px] text-[#464453] leading-relaxed mb-6">
                    {phase.description}
                  </p>
                </div>

                <div>
                  {/* Deliverables list */}
                  <div className="pt-4 lg:pt-5 border-t border-[#dedbea]/70">
                    <div className="text-[11.5px] font-semibold uppercase tracking-wider text-[#544f82] mb-3">
                      Entregables y resultados técnicos:
                    </div>
                    <ul className="space-y-2.5">
                      {phase.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[12.5px] lg:text-[13px] text-[#3c3a4a]">
                          <span className="w-4 h-4 rounded-full bg-[#f1eff7] text-[#5f4a9a] flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={11} weight="bold" />
                          </span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dedicated Interconnection Bar at the bottom of the card */}
                  <div className="mt-6 pt-4 border-t border-[#dedbea]/50 bg-[#faf9fd] -mx-6 -mb-6 lg:-mx-8 lg:-mb-8 p-4 lg:px-6 rounded-b-2xl flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-[#544f82] text-white flex items-center justify-center shrink-0 mt-0.5">
                      {idx === PHASES.length - 1 ? (
                        <ArrowsClockwise size={12} weight="bold" />
                      ) : (
                        <ArrowRight size={12} weight="bold" />
                      )}
                    </div>
                    <div className="text-[12px] flex-1">
                      <span className="font-semibold text-[#1a1926] block">
                        {phase.nextStepText}
                      </span>
                      <span className="text-[#676479] text-[11.5px] leading-relaxed block mt-0.5">
                        {phase.connectionDetail}
                      </span>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Desktop Bottom Continuous Ecosystem Banner */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center justify-between gap-6 mt-10 p-5 rounded-2xl bg-[#faf9fd] border border-[#dedbea] shadow-2xs"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#5f4a9a] text-white flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck size={20} weight="bold" />
            </div>
            <div>
              <div className="text-[13px] font-bold text-[#1a1926]">
                Ecosistema integral y sostenible bajo estándar Convenio 190 OIT
              </div>
              <div className="text-[12px] text-[#676479]">
                Cada fase alimenta a la siguiente y la supervisión de casos reales retroalimenta nuevos diagnósticos, cerrando un circuito de prevención continua.
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-[#dedbea] text-[11.5px] font-semibold text-[#544f82] shrink-0 shadow-2xs">
            <ArrowsClockwise size={14} weight="bold" className="text-[#5f4a9a]" />
            <span>Ciclo continuo de mejora</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
