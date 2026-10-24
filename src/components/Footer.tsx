import Image from "next/image";
import Link from "next/link";
import { EnvelopeSimple, Phone, InstagramLogo, MapPin, ShieldCheck, ArrowUp } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="bg-[#1a1926] text-[#dedbea] pt-14 pb-10 border-t border-[#373359]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 shrink-0 bg-white/10 p-1 rounded-full">
                <Image
                  src="/images/logo-symbol.png"
                  alt="Isotipo Igualdad Consultora"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-[16px] font-bold tracking-[0.08em] text-white leading-tight">
                  IGUALDAD
                </span>
                <span className="text-[10.5px] tracking-[0.28em] font-medium text-[#b9b1d0] uppercase leading-none">
                  CONSULTORA
                </span>
              </div>
            </div>

            <p className="text-[13.5px] text-[#dedbea]/80 max-w-sm leading-relaxed">
              Consultoría técnica e institucional para empresas, asociaciones gremiales y organismos públicos. Prevención y abordaje integral de la violencia y el acoso en el trabajo bajo los estándares del Convenio 190 OIT.
            </p>

            <div className="pt-2 text-[12px] text-[#b9b1d0] flex items-center gap-2">
              <ShieldCheck size={16} weight="bold" />
              <span>Dirección técnica: Belén Scalesa (FLACSO · UNCo · UNRN)</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-[12px] font-bold text-white">
              Estructura Institucional
            </div>
            <ul className="space-y-2 text-[13.5px]">
              <li>
                <Link href="#metodologia" className="hover:text-white transition-colors">
                  El desafío y metodología
                </Link>
              </li>
              <li>
                <Link href="#ecosistema" className="hover:text-white transition-colors">
                  Sistema de 4 Fases
                </Link>
              </li>
              <li>
                <Link href="#audiencias" className="hover:text-white transition-colors">
                  Empresas, Sindicatos y Estado
                </Link>
              </li>
              <li>
                <Link href="#trayectoria" className="hover:text-white transition-colors">
                  Trayectoria curricular
                </Link>
              </li>
              <li>
                <Link href="#inversion" className="hover:text-white transition-colors">
                  Inversión y condiciones
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-white transition-colors">
                  Agendar reunión inicial
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct channels */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-[12px] font-bold text-white">
              Contacto y Canales Directos
            </div>
            <ul className="space-y-2.5 text-[13px] text-[#dedbea]/80">
              <li className="flex items-center gap-2.5">
                <EnvelopeSimple size={16} weight="bold" className="text-[#b9b1d0] shrink-0" />
                <a href="mailto:igualdadconsultora@gmail.com" className="hover:text-white transition-colors">
                  igualdadconsultora@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} weight="bold" className="text-[#b9b1d0] shrink-0" />
                <a href="https://wa.me/5492920411152" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +54 9 2920 411152
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <InstagramLogo size={16} weight="bold" className="text-[#b9b1d0] shrink-0" />
                <a href="https://instagram.com/igualdadconsultora" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @igualdadconsultora
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={16} weight="bold" className="text-[#b9b1d0] shrink-0" />
                <span>Viedma, Río Negro, República Argentina</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#dedbea]/60">
          <div>
            © 2026 Igualdad Consultora · Belén Scalesa. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#dedbea] transition-colors">
              Convenio 190 OIT
            </span>
            <span className="hover:text-[#dedbea] transition-colors">
              Ley Micaela 27.499
            </span>
            <span className="hover:text-[#dedbea] transition-colors">
              Ley 5182 Río Negro
            </span>
            <a
              href="#"
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp size={14} weight="bold" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
