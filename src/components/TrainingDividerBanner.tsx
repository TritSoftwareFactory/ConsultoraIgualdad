import Image from "next/image";

export function TrainingDividerBanner() {
  return (
    <div
      className="relative h-[220px] sm:h-[280px] md:h-[340px] w-full overflow-hidden bg-[#1a1926] border-y border-[#373359]"
      role="region"
      aria-label="Corte visual: Espacios de capacitación y formación"
    >
      {/* Background Image: Semi-transparent corporate training session */}
      <Image
        src="/images/capacitacion-banner.webp"
        alt="Sesión de capacitación y sensibilización laboral"
        fill
        className="object-cover object-center opacity-30 filter saturate-[0.8] contrast-[1.1]"
        sizes="100vw"
      />

      {/* Brand Color & Gradient Overlays: Deep violet and dark vignette */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#1a1926]/90 via-[#544f82]/55 to-[#1a1926]/90 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#1a1926]/40 via-transparent to-[#1a1926]/60 pointer-events-none"
        aria-hidden="true"
      />

      {/* Centered Editorial Statement (Visual break) */}
      <div className="relative z-10 h-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">
        <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] uppercase text-[#b9b1d0] mb-2 sm:mb-3">
          Espacios de Formación y Reflexión
        </span>
        <p className="font-heading text-lg sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug max-w-2xl text-balance">
          Sensibilizar a los equipos para construir organizaciones seguras y libres de violencia.
        </p>
      </div>
    </div>
  );
}
