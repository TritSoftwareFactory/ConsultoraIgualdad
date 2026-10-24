"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Play, Pause } from "@phosphor-icons/react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative min-h-[72vh] sm:min-h-[78vh] md:min-h-[82vh] flex items-center justify-center bg-[#faf9fd] overflow-hidden border-b border-[#dedbea]/60">
      
      {/* 1. Cinematic Background Video Layer with Fallback Poster */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-poster.jpg"
          preload="metadata"
          className="w-full h-full object-cover object-center filter saturate-[0.85] contrast-[1.05] opacity-25 sm:opacity-30 transition-opacity duration-1000"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>

        {/* 2. Brand Overlay Gradients: Centered spotlight with clean subtle lighting */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-[#faf9fd]/88 via-[#faf9fd]/94 to-[#faf9fd]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#544f82]/12 via-transparent to-[#5f4a9a]/10 mix-blend-multiply" />
        <div className="absolute bottom-0 inset-x-0 h-28 sm:h-32 bg-gradient-to-t from-[#faf9fd] to-transparent" />
      </div>

      {/* Main Essential Hero Content (Mobile-First Spacing & Typography) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-18 md:py-24 text-center">
        
        {/* Sober Editorial Eyebrow */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <span className="w-5 sm:w-8 h-[1.5px] bg-[#544f82]/40" />
          <span className="text-[11px] sm:text-[13px] font-semibold tracking-[0.16em] sm:tracking-[0.22em] uppercase text-[#544f82]">
            Convenio 190 OIT · Prevención Laboral
          </span>
          <span className="w-5 sm:w-8 h-[1.5px] bg-[#544f82]/40" />
        </div>

        {/* Main Headline (Responsive typography for mobile) */}
        <h1 className="font-heading text-[27px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1926] leading-[1.18] sm:leading-[1.12] tracking-tight text-balance">
          Prevención y abordaje integral de la{" "}
          <span className="text-[#544f82]">violencia y el acoso</span>{" "}
          en el trabajo
        </h1>

        {/* Concise Value Subtext */}
        <p className="mt-4 sm:mt-6 text-[15.5px] sm:text-lg md:text-xl text-[#3c3a4a] leading-relaxed max-w-2xl mx-auto text-balance">
          Transformamos marcos normativos en protocolos aplicables, capacitando a sus equipos para proteger a las personas y a la organización.
        </p>

        {/* Action CTAs: Full-width stacked on mobile for thumb accessibility */}
        <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <Link
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#544f82] active:bg-[#433e68] text-white text-[15px] sm:text-[15.5px] font-semibold px-8 py-3.5 sm:py-4 rounded-xl transition-all shadow-[0_4px_16px_rgba(84,79,130,0.22)] active:scale-[0.98] min-h-[48px]"
          >
            <span>Agendar reunión inicial</span>
            <ArrowRight size={17} weight="bold" />
          </Link>

          <Link
            href="#metodologia"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/95 active:bg-[#f5f3f9] text-[#544f82] border border-[#dedbea] text-[15px] sm:text-[15.5px] font-semibold px-7 py-3.5 sm:py-4 rounded-xl transition-all backdrop-blur-xs shadow-xs active:scale-[0.98] min-h-[48px]"
          >
            <span>Conocer el sistema</span>
          </Link>
        </div>

      </div>

      {/* Discrete Accessibility Video Toggle (Bottom Corner) */}
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20">
        <button
          type="button"
          onClick={togglePlay}
          className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white/85 hover:bg-white border border-[#dedbea] text-[11px] font-medium text-[#544f82] transition-colors shadow-2xs backdrop-blur-sm cursor-pointer min-h-[32px]"
          aria-label={isPlaying ? "Pausar video de fondo" : "Reproducir video de fondo"}
        >
          {isPlaying ? (
            <>
              <Pause size={12} weight="bold" />
              <span className="hidden xs:inline sm:inline">Pausar video</span>
            </>
          ) : (
            <>
              <Play size={12} weight="bold" />
              <span className="hidden xs:inline sm:inline">Reproducir video</span>
            </>
          )}
        </button>
      </div>

    </section>
  );
}
