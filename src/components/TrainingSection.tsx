import Link from "next/link";
import {
  ChalkboardTeacher,
  ShieldCheck,
  UsersThree,
  Scales,
  ArrowRight,
  Sparkle,
  CheckCircle,
  LockKey,
} from "@phosphor-icons/react/dist/ssr";

interface ThematicItem {
  id: string;
  order: string;
  tag: string;
  title: string;
  description: string;
  icon: typeof Scales;
}

const THEMATIC_TOPICS: ThematicItem[] = [
  {
    id: "convenio-190",
    order: "01",
    tag: "Marco normativo internacional",
    title: "El impacto del Convenio 190 de la OIT en la cultura organizacional",
    description:
      "Comprensión técnica y práctica de las definiciones vinculantes sobre violencia y acoso laboral. Alcance institucional y pautas para actualizar las reglas de convivencia interna.",
    icon: Scales,
  },
  {
    id: "liderazgo-seguro",
    order: "02",
    tag: "Gestión de mandos y equipos",
    title: "Herramientas para liderar entornos de trabajo seguro",
    description:
      "Pautas metodológicas para líderes y mandos medios: detección temprana, escucha activa, neutralización de sesgos y preservación del clima y la seguridad psicológica del equipo.",
    icon: ShieldCheck,
  },
  {
    id: "trabajo-genero",
    order: "03",
    tag: "Estructuras y equidad sustantiva",
    title: "Trabajo, Empleo y Género(s): Transformar las estructuras de desigualdad laboral",
    description:
      "Herramientas conceptuales y diagnósticas para identificar barreras ocupacionales, segmentación horizontal y vertical, promoviendo criterios de equidad en la gestión de personas.",
    icon: UsersThree,
  },
  {
    id: "masculinidades-acoso",
    order: "04",
    tag: "Prevención y cultura de trabajo",
    title: "Masculinidades en el ámbito laboral: Claves para la prevención del acoso",
    description:
      "Espacios de reflexión aplicada para problematizar conductas naturalizadas, desarmar complicidades implícitas y consolidar una corresponsabilidad activa en la prevención del hostigamiento.",
    icon: ChalkboardTeacher,
  },
];

export function TrainingSection() {
  return (
    <section
      id="formacion"
      className="py-16 md:py-24 bg-[#faf9fd] border-b border-[#dedbea]/60 scroll-mt-20"
      aria-labelledby="training-section-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#f6f5fa] text-[#544f82] text-[12px] font-semibold mb-4 border border-[#dedbea]/80">
            <ChalkboardTeacher size={16} weight="bold" />
            <span className="tracking-wide">Capacitación y Sensibilización</span>
          </div>

          <h2
            id="training-section-title"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1926] tracking-tight"
          >
            Formaciones y Charlas de Sensibilización
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#464453] leading-relaxed">
            Ofrezco propuestas de formación asincrónicas o virtuales, diseñadas bajo estándares
            técnicos y normativos internacionales. Cada actividad cuenta con un temario estructurado
            y objetivos precisos para fortalecer las capacidades analíticas e institucionales de su
            organización.
          </p>

          {/* Value Highlights Pill Row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-[12px] sm:text-[12.5px] text-[#676479]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#dedbea] shadow-2xs">
              <CheckCircle size={14} weight="fill" className="text-[#5f4a9a]" />
              Modalidades virtuales o asincrónicas
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#dedbea] shadow-2xs">
              <CheckCircle size={14} weight="fill" className="text-[#5f4a9a]" />
              Conforme a estándares Convenio 190 OIT
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#dedbea] shadow-2xs">
              <CheckCircle size={14} weight="fill" className="text-[#5f4a9a]" />
              Temarios estructurados a medida
            </span>
          </div>
        </div>

        {/* 4 Thematic Cards Grid */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="w-6 h-[1.5px] bg-[#544f82]/50" />
            <h3 className="text-[12.5px] sm:text-[13px] font-semibold tracking-[0.2em] uppercase text-[#544f82]">
              Algunas temáticas
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 items-stretch">
            {THEMATIC_TOPICS.map((topic) => {
              const IconComponent = topic.icon;
              return (
                <div
                  key={topic.id}
                  className="group bg-white rounded-2xl border border-[#dedbea] p-6 sm:p-7 md:p-8 shadow-xs hover:border-[#afabd8] hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon + Module Number */}
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#f5f3f9] text-[#544f82] flex items-center justify-center border border-[#dedbea]/80 group-hover:bg-[#544f82] group-hover:text-white transition-colors shrink-0">
                        <IconComponent size={24} weight="duotone" />
                      </div>
                      <span className="text-[11.5px] font-bold text-[#8b889e] tracking-wider uppercase bg-[#faf9fd] px-2.5 py-1 rounded-md border border-[#dedbea]/60">
                        Temática {topic.order}
                      </span>
                    </div>

                    {/* Tag */}
                    <span className="inline-block text-[11.5px] font-semibold uppercase tracking-wider text-[#5f4a9a] mb-2">
                      {topic.tag}
                    </span>

                    {/* Topic Title */}
                    <h4 className="font-heading text-lg sm:text-xl font-bold text-[#1a1926] leading-snug group-hover:text-[#544f82] transition-colors">
                      {topic.title}
                    </h4>

                    {/* Description */}
                    <p className="mt-3 text-[13.5px] sm:text-[14px] text-[#464453] leading-relaxed">
                      {topic.description}
                    </p>
                  </div>

                  {/* Card Footer Accent */}
                  <div className="mt-6 pt-4 border-t border-[#dedbea]/60 flex items-center justify-between text-[12px] text-[#676479]">
                    <span>Diseño modular y aplicable</span>
                    <span className="font-medium text-[#544f82]">Formato sincrónico o asincrónico</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Commercial Hook towards Sistema Integral & Scheduling */}
        <div className="bg-[#544f82] text-white rounded-3xl p-6 sm:p-9 md:p-12 shadow-md relative overflow-hidden border border-[#5f4a9a]/40">
          {/* Subtle background glow elements */}
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#5f4a9a] opacity-40 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#948ece] opacity-25 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6 sm:space-y-7">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-[#dedbea] text-[12px] font-semibold backdrop-blur-sm">
              <Sparkle size={15} weight="fill" className="text-[#afabd8]" />
              <span>Articulación institucional con el Sistema Integral</span>
            </div>

            {/* Hook Headline */}
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
              Conversemos sobre la propuesta de formación para equipos y personal que necesita tu
              empresa u organización.
            </h3>

            {/* Diagnostic Maturity Question Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.08] border border-white/15 backdrop-blur-sm text-left sm:text-center">
              <p className="text-[14.5px] sm:text-[15.5px] text-[#dedbea] leading-relaxed">
                <span className="text-white font-semibold">
                  ¿Tu organización ya cuenta con alguna de las herramientas validadas para abordar y
                  prevenir la violencia y el acoso en el trabajo?
                </span>{" "}
                En la reunión inicial evaluamos el alcance y ajustamos la propuesta.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#faf9fd] text-[#544f82] hover:text-[#433e68] text-[14.5px] font-semibold px-7 py-3.5 rounded-xl transition-all shadow-sm hover:shadow active:scale-[0.98]"
              >
                <span>Solicitá una reunión de 30´ sin costo</span>
                <ArrowRight size={17} weight="bold" />
              </Link>
            </div>

            {/* Footer Trust Indicator */}
            <div className="pt-2 flex items-center justify-center gap-2 text-[12px] text-[#dedbea]/80">
              <LockKey size={14} weight="bold" />
              <span>Evaluación preliminar sin costo · Confidencialidad estricta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
