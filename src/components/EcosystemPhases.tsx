"use client";

import { useRef, useState, useEffect } from "react";
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
  shortTitle: string;
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
    shortTitle: "Diagnóstico",
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
    shortTitle: "Protocolos",
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
    shortTitle: "Capacitación",
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
    shortTitle: "Asesoramiento",
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
  const timelineRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  // Scroll tracking across the vertical route timeline for the dynamic progress fill line
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 80%"],
  });

  const timelineScale = useTransform(scrollYProgress, [0, 1], [0, 1], {
    clamp: true,
  });

  // Track active phase dynamically based on scroll position in viewport
  useEffect(() => {
    const phaseIds = PHASES.map((p) => p.id);
    const elements = phaseIds
      .map((id) => document.getElementById(`phase-${id}`))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );
          const id = visible[0].target.id.replace(/^phase-/, "");
          const index = PHASES.findIndex((p) => p.id === id);
          if (index !== -1) {
            setActivePhaseIndex(index);
          }
        }
      },
      {
        rootMargin: "-18% 0px -38% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToPhase = (phaseId: string) => {
    const target = document.getElementById(`phase-${phaseId}`);
    if (target) {
      const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;
      const yOffset = isDesktop ? -175 : -85;
      const y =
        target.getBoundingClientRect().top + (window.scrollY || window.pageYOffset || 0) + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="ecosistema"
      ref={containerRef}
      className="py-16 md:py-24 bg-white border-b border-[#dedbea]/60 relative overflow-x-clip"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-12"
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
            Un protocolo sin capacitación queda en el papel; una capacitación sin
            diagnóstico carece de precisión; y un diagnóstico sin seguimiento
            pierde vigencia. La integralidad garantiza sostenibilidad técnica.
          </p>
        </motion.div>

        {/* Desktop Pipeline Progress Bar (Sticky Navigation on Desktop) */}
        <div className="hidden md:block sticky top-[72px] z-30 mb-12 py-1">
          <div className="bg-[#faf9fd]/95 backdrop-blur-md border border-[#dedbea] rounded-2xl p-4 sm:p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3.5 px-1">
              <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-[#676479]">
                <span className="w-2 h-2 rounded-full bg-[#544f82]" />
                <span>Ruta Metodológica Continua · Convenio 190 OIT</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-[#dedbea] text-[11.5px] font-semibold text-[#544f82] shadow-2xs">
                <span>
                  Paso activo: {PHASES[activePhaseIndex].letter} ·{" "}
                  {PHASES[activePhaseIndex].shortTitle}
                </span>
              </div>
            </div>

            {/* Stepper bar with background track and progress fill */}
            <div className="relative">
              {/* Background rail */}
              <div className="absolute top-1/2 left-6 right-6 h-[2px] -translate-y-1/2 bg-[#dedbea]" />

              {/* Dynamic progress fill line */}
              <div
                style={{
                  width: shouldReduceMotion
                    ? "100%"
                    : `${(activePhaseIndex / (PHASES.length - 1)) * 100}%`,
                }}
                className="absolute top-1/2 left-6 h-[2px] max-w-[calc(100%-3rem)] -translate-y-1/2 bg-gradient-to-r from-[#544f82] via-[#5f4a9a] to-[#7b61c4] transition-all duration-500 ease-out"
              />

              {/* 4 Interconnected Step Buttons */}
              <div className="relative z-10 flex items-center justify-between gap-2">
                {PHASES.map((phase, idx) => {
                  const isStepActive = activePhaseIndex === idx;
                  const isStepPassed = activePhaseIndex > idx;

                  return (
                    <button
                      key={phase.id}
                      type="button"
                      onClick={() => scrollToPhase(phase.id)}
                      aria-current={isStepActive ? "step" : undefined}
                      className={`group flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5f4a9a] ${
                        isStepActive
                          ? "bg-[#544f82] text-white border border-[#544f82] shadow-sm ring-2 ring-[#544f82]/25 scale-[1.02]"
                          : isStepPassed
                          ? "bg-white text-[#1a1926] border border-[#5f4a9a]/40 hover:border-[#544f82]"
                          : "bg-white text-[#676479] border border-[#dedbea] hover:border-[#544f82]/50"
                      }`}
                      aria-label={`Ir a Fase ${phase.letter}: ${phase.title}`}
                    >
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-heading text-xs font-bold transition-all ${
                          isStepActive
                            ? "bg-white text-[#544f82]"
                            : isStepPassed
                            ? "bg-[#5f4a9a] text-white"
                            : phase.badgeBg
                        }`}
                      >
                        {isStepPassed ? (
                          <Check size={12} weight="bold" />
                        ) : (
                          phase.letter
                        )}
                      </span>
                      <div className="text-left">
                        <div
                          className={`text-[10px] uppercase font-semibold leading-none ${
                            isStepActive ? "text-white/80" : "text-[#676479]"
                          }`}
                        >
                          Paso {phase.stepNumber}
                        </div>
                        <div
                          className={`text-[12.5px] font-semibold leading-tight ${
                            isStepActive
                              ? "text-white"
                              : "text-[#1a1926] group-hover:text-[#544f82]"
                          }`}
                        >
                          {phase.shortTitle}
                        </div>
                      </div>
                      {idx < PHASES.length - 1 ? (
                        <ArrowRight
                          size={13}
                          weight="bold"
                          className={`ml-1 transition-transform group-hover:translate-x-0.5 ${
                            isStepActive ? "text-white/80" : "text-[#8b889e]"
                          }`}
                        />
                      ) : (
                        <ArrowsClockwise
                          size={13}
                          weight="bold"
                          className={`ml-1 transition-transform duration-500 group-hover:rotate-180 ${
                            isStepActive ? "text-white/80" : "text-[#5f4a9a]"
                          }`}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* CONTINUOUS VERTICAL ROUTE (DESKTOP & MOBILE): "UNA ABAJO DE OTRA" */}
        {/* As you scroll, each phase on the route appears with its explanation */}
        {/* ============================================================== */}
        <div
          ref={timelineRef}
          className="relative pl-10 sm:pl-12 md:pl-20 lg:pl-24"
        >
          {/* Continuous vertical timeline track line between first node and closure node */}
          <div
            aria-hidden="true"
            className="absolute left-[20px] sm:left-[24px] md:left-[40px] lg:left-[48px] -translate-x-1/2 top-7 md:top-8 bottom-12 md:bottom-14 w-[2px] md:w-[3px] bg-[#dedbea]"
          />

          {/* Dynamic scroll progress fill line running down the route */}
          <motion.div
            aria-hidden="true"
            style={{
              scaleY: shouldReduceMotion ? 1 : timelineScale,
              transformOrigin: "top",
            }}
            className="absolute left-[20px] sm:left-[24px] md:left-[40px] lg:left-[48px] -translate-x-1/2 top-7 md:top-8 bottom-12 md:bottom-14 w-[2px] md:w-[3px] bg-gradient-to-b from-[#544f82] via-[#5f4a9a] to-[#7b61c4]"
          />

          <div className="space-y-8 md:space-y-12 lg:space-y-14">
            {PHASES.map((phase, idx) => {
              const Icon = phase.icon;
              const isAlternate = idx % 2 === 1;
              const isActive = activePhaseIndex === idx;
              const isPassed = activePhaseIndex > idx;

              return (
                <div
                  key={phase.id}
                  id={`phase-${phase.id}`}
                  className="relative"
                >
                  {/* Timeline Anchor Node aligned over vertical spine */}
                  <div
                    aria-hidden="true"
                    className="absolute -left-10 sm:-left-12 md:-left-20 lg:-left-24 w-10 sm:w-12 md:w-20 lg:w-24 flex justify-center top-5 md:top-7 z-10"
                  >
                    <div
                      className={`w-7 h-7 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full md:rounded-2xl font-heading text-xs md:text-sm lg:text-base font-bold flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-[#544f82] text-white shadow-md ring-4 ring-[#544f82]/20 scale-110"
                          : isPassed
                          ? "bg-[#5f4a9a] text-white shadow-xs"
                          : "bg-white text-[#676479] border-2 border-[#dedbea]"
                      }`}
                    >
                      {isPassed ? (
                        <Check size={14} weight="bold" />
                      ) : (
                        <span>{phase.letter}</span>
                      )}
                    </div>
                  </div>

                  {/* Phase Card with Scroll Reveal Animation ("cada vez que aparece una tiene que aparecer su explicación") */}
                  <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
                    whileInView={
                      shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                    }
                    viewport={{
                      once: true,
                      amount: 0.18,
                      margin: "0px 0px -50px 0px",
                    }}
                    transition={{
                      duration: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`rounded-2xl border p-5 sm:p-7 md:p-8 lg:p-9 transition-all duration-300 shadow-xs hover:shadow-md ${
                      isActive
                        ? "border-[#544f82]/60 shadow-md ring-1 ring-[#544f82]/20"
                        : "border-[#dedbea] hover:border-[#544f82]/40"
                    } ${isAlternate ? "bg-[#faf9fd]" : "bg-white"}`}
                  >
                    {/* Header: Step Label, Subtitle, and Icon */}
                    <div className="flex items-start justify-between gap-4 mb-3 sm:mb-4">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#544f82]/10 text-[#544f82] text-[11px] font-bold uppercase tracking-wider">
                          <span>{phase.stepLabel}</span>
                          <span className="text-[#544f82]/30">·</span>
                          <span>{phase.shortTitle}</span>
                        </span>
                        <span className="text-[12.5px] sm:text-[13px] font-medium text-[#676479]">
                          {phase.subtitle}
                        </span>
                      </div>

                      <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-[#dedbea] text-[#544f82] shadow-xs shrink-0">
                        <Icon size={22} weight="bold" />
                      </div>
                    </div>

                    {/* Phase Title */}
                    <h3 className="font-heading text-xl sm:text-2xl lg:text-[26px] font-bold text-[#1a1926] mb-4 leading-snug">
                      {phase.title}
                    </h3>

                    {/* Comprehensive Explanation & Technical Deliverables Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                      {/* Left Column: Full Technical Description & Handover */}
                      <div className="lg:col-span-7 flex flex-col justify-between">
                        <p className="text-[14px] sm:text-[14.5px] lg:text-[15px] text-[#464453] leading-relaxed mb-5">
                          {phase.description}
                        </p>

                        {/* Route Handover Box to Next Phase */}
                        <div className="p-3.5 sm:p-4 rounded-xl bg-[#faf9fd] border border-[#dedbea]/90 flex items-start gap-3">
                          <div className="w-6 h-6 rounded-lg bg-[#544f82] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                            {idx === PHASES.length - 1 ? (
                              <ArrowsClockwise size={13} weight="bold" />
                            ) : (
                              <ArrowRight size={13} weight="bold" />
                            )}
                          </div>
                          <div className="text-[12px] flex-1">
                            <span className="font-semibold text-[#1a1926] block leading-snug">
                              {phase.nextStepText}
                            </span>
                            <span className="text-[#676479] text-[11.5px] leading-relaxed block mt-0.5">
                              {phase.connectionDetail}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Structured Deliverables Panel */}
                      <div className="lg:col-span-5 rounded-xl bg-white lg:bg-[#faf9fd]/80 border border-[#dedbea] p-4 sm:p-5 shadow-2xs">
                        <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-[#dedbea]/70">
                          <div className="text-[11px] sm:text-[11.5px] font-bold uppercase tracking-wider text-[#544f82]">
                            Entregables técnicos
                          </div>
                          <span className="text-[10.5px] font-semibold text-[#676479]">
                            Convenio 190 OIT
                          </span>
                        </div>
                        <ul className="space-y-2.5">
                          {phase.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-[12.5px] sm:text-[13px] text-[#3c3a4a] leading-snug"
                            >
                              <span className="w-4 h-4 rounded-full bg-[#f1eff7] text-[#5f4a9a] flex items-center justify-center shrink-0 mt-0.5">
                                <Check size={11} weight="bold" />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Desktop Downward Route Flow Marker between Phases */}
                  {idx < PHASES.length - 1 && (
                    <div className="hidden md:flex items-center gap-3 pt-4 pb-1 pl-3 text-[11.5px] font-semibold tracking-wide text-[#676479]">
                      <span className="w-5 h-[1.5px] bg-[#dedbea]" />
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#dedbea] text-[11.5px] text-[#544f82] shadow-2xs">
                        <ArrowDown size={12} weight="bold" className="text-[#5f4a9a]" />
                        <span>Ruta hacia Paso {PHASES[idx + 1].stepNumber}: {PHASES[idx + 1].shortTitle}</span>
                      </span>
                      <span className="flex-1 h-[1.5px] bg-gradient-to-r from-[#dedbea] to-transparent" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Terminal Cycle Node & Continuous Improvement Closure Card */}
            <div className="relative pt-2 md:pt-4">
              {/* Terminal Anchor Node on the vertical spine */}
              <div
                aria-hidden="true"
                className="absolute -left-10 sm:-left-12 md:-left-20 lg:-left-24 w-10 sm:w-12 md:w-20 lg:w-24 flex justify-center top-6 md:top-8 z-10"
              >
                <div
                  className={`w-7 h-7 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full md:rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    activePhaseIndex === PHASES.length - 1
                      ? "bg-[#5f4a9a] text-white shadow-md ring-4 ring-[#5f4a9a]/25 scale-105"
                      : "bg-[#f1eff7] text-[#5f4a9a] border border-[#dedbea]"
                  }`}
                >
                  <ArrowsClockwise size={16} weight="bold" className="md:scale-110" />
                </div>
              </div>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
                className="rounded-2xl bg-[#faf9fd] border border-[#dedbea] p-5 sm:p-7 md:p-8 shadow-xs"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#5f4a9a] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                      <ShieldCheck size={22} weight="bold" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold text-[#5f4a9a] uppercase tracking-wider">
                          Ciclo continuo de mejora · Convenio 190 OIT
                        </span>
                      </div>
                      <h4 className="font-heading text-base sm:text-lg font-bold text-[#1a1926] mb-1.5">
                        Retroalimentación permanente al diagnóstico inicial
                      </h4>
                      <p className="text-[13px] sm:text-[13.5px] text-[#464453] leading-relaxed max-w-2xl">
                        La supervisión de casos reales y la casuística incidente retroalimentan periódicamente la Fase A. Esto asegura que los protocolos institucionales no pierdan vigencia frente a reformas legislativas o reorganizaciones funcionales.
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex sm:self-start md:self-center">
                    <button
                      type="button"
                      onClick={() => scrollToPhase("fase-a")}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#dedbea] text-[12px] font-semibold text-[#544f82] hover:border-[#544f82] hover:bg-[#faf9fd] transition-all shadow-2xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5f4a9a]"
                    >
                      <ArrowsClockwise size={14} weight="bold" className="text-[#5f4a9a]" />
                      <span>Volver al inicio de la ruta (Fase A)</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
