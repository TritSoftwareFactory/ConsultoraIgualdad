"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Buildings, UsersThree, Bank } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section className="relative pt-8 md:pt-14 pb-12 md:pb-16 bg-[#faf9fd] overflow-hidden border-b border-[#dedbea]/50">
      {/* Background subtle geometric orbit lines echoing the brand */}
      <div 
        className="pointer-events-none absolute -top-40 right-[-15%] w-[800px] h-[800px] rounded-full border border-[#dedbea]/60 opacity-40"
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute top-10 right-[-5%] w-[600px] h-[600px] rounded-full border border-[#b9b1d0]/30 opacity-40"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Content Stack: Max 4 text elements) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Eyebrow (rationed 1 per 3 sections) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f1eff7] border border-[#dedbea] text-[11px] font-semibold tracking-[0.16em] uppercase text-[#544f82]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5f4a9a]" />
              <span>Convenio 190 OIT · Prevención Laboral</span>
            </div>

            {/* 2. Headline (Max 2 lines desktop) */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-[#1a1926] leading-[1.12] tracking-tight">
              Prevención y abordaje integral de la violencia y el acoso en el trabajo
            </h1>

            {/* 3. Subtext (Max 20 words, strictly disciplined) */}
            <p className="text-base sm:text-lg text-[#464453] leading-relaxed max-w-[58ch]">
              Transformamos marcos normativos en protocolos aplicables, capacitando a sus equipos para proteger a las personas y a la organización.
            </p>

            {/* 4. CTAs (Primary + Secondary) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="#contacto"
                className="inline-flex items-center gap-2 bg-[#544f82] hover:bg-[#433e68] text-white text-[14.5px] font-medium px-6 py-3 rounded-full transition-all shadow-sm hover:shadow active:scale-[0.98]"
              >
                <span>Agendar reunión inicial</span>
                <ArrowRight size={16} weight="bold" />
              </Link>

              <Link
                href="#metodologia"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#f5f3f9] text-[#544f82] border border-[#dedbea] text-[14.5px] font-medium px-6 py-3 rounded-full transition-colors active:scale-[0.98]"
              >
                <span>Conocer el sistema</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Editorial Tripartite Architecture Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-2xl border border-[#dedbea] p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(84,79,130,0.08)]">
              
              {/* Card Header with Brand Icon */}
              <div className="flex items-center justify-between pb-4 border-b border-[#dedbea]/60">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8">
                    <Image
                      src="/images/logo-symbol.png"
                      alt="Símbolo Igualdad"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="font-heading text-[15px] font-bold text-[#1a1926]">
                      Sistema Integral
                    </h2>
                    <p className="text-[12px] text-[#676479]">
                      Articulación institucional tripartita
                    </p>
                  </div>
                </div>
                <div className="p-1.5 rounded-full bg-[#f5f3f9] text-[#544f82]">
                  <ShieldCheck size={20} weight="fill" />
                </div>
              </div>

              {/* 3 Sectors breakdown */}
              <div className="py-4 space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#faf9fd] border border-[#dedbea]/40">
                  <div className="p-2 rounded-lg bg-white border border-[#dedbea] text-[#544f82] shrink-0">
                    <Buildings size={18} weight="bold" />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-[#1a1926]">Empresas</div>
                    <div className="text-[12px] text-[#676479] leading-snug">
                      Mitigación de riesgos laborales y cumplimiento del Convenio 190 OIT.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#faf9fd] border border-[#dedbea]/40">
                  <div className="p-2 rounded-lg bg-white border border-[#dedbea] text-[#544f82] shrink-0">
                    <UsersThree size={18} weight="bold" />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-[#1a1926]">Sindicatos</div>
                    <div className="text-[12px] text-[#676479] leading-snug">
                      Fortalecimiento de comisiones de género y formación de delegados.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#faf9fd] border border-[#dedbea]/40">
                  <div className="p-2 rounded-lg bg-white border border-[#dedbea] text-[#544f82] shrink-0">
                    <Bank size={18} weight="bold" />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-[#1a1926]">Sector Público</div>
                    <div className="text-[12px] text-[#676479] leading-snug">
                      Cumplimiento de Ley Micaela y estandarización de protocolos.
                    </div>
                  </div>
                </div>
              </div>

              {/* Dossier Institutional Quote */}
              <div className="pt-3 border-t border-[#dedbea]/60 text-center sm:text-left">
                <p className="text-[12.5px] italic text-[#544f82] font-medium leading-relaxed">
                  &ldquo;Prevenir no consiste solo en contar con un protocolo: implica construir condiciones institucionales para que funcione en la práctica.&rdquo;
                </p>
                <p className="text-[11px] text-[#676479] mt-1.5 font-medium">
                  Belén Scalesa - Directora de Igualdad Consultora
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
