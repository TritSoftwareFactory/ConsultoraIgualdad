import Image from "next/image";
import {
  EnvelopeSimple,
  Phone,
  InstagramLogo,
  MapPin,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="bg-[#1a1926] text-[#dedbea] pt-14 pb-12 border-t border-[#373359]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content: Brand & Direct Contact Channels (Clean 2-Column Editorial Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-white/10 items-start">
          
          {/* Brand info */}
          <div className="space-y-4 lg:col-span-7">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 shrink-0 bg-white/10 p-1 rounded-full">
                <Image
                  src="/images/logo-symbol.png"
                  alt="Isotipo Igualdad Consultora"
                  fill
                  sizes="36px"
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

            <p className="text-[14px] text-[#dedbea]/80 max-w-lg leading-relaxed">
              Consultoría técnica e institucional para empresas, asociaciones gremiales y organismos públicos. Prevención y abordaje integral de la violencia y el acoso en el trabajo bajo los estándares del Convenio 190 OIT.
            </p>

            <div className="pt-1 text-[12.5px] text-[#b9b1d0] flex items-center gap-2">
              <ShieldCheck size={16} weight="bold" />
              <span>Dirección técnica: Belén Scalesa (FLACSO · UNCo · UNRN)</span>
            </div>
          </div>

          {/* Direct Contact Channels */}
          <div className="space-y-4 lg:col-span-5 md:pl-4 lg:pl-8">
            <div className="text-[12px] font-bold uppercase tracking-wider text-white">
              Contacto y Canales Directos
            </div>
            <ul className="space-y-3.5 text-[13.5px] text-[#dedbea]/85">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#b9b1d0]">
                  <EnvelopeSimple size={16} weight="bold" />
                </div>
                <div>
                  <span className="text-[11px] text-[#dedbea]/60 block leading-tight">Correo electrónico</span>
                  <a href="mailto:igualdadconsultora@gmail.com" className="text-white hover:text-[#b9b1d0] transition-colors font-medium">
                    igualdadconsultora@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#b9b1d0]">
                  <Phone size={16} weight="bold" />
                </div>
                <div>
                  <span className="text-[11px] text-[#dedbea]/60 block leading-tight">Teléfono / WhatsApp</span>
                  <a href="https://wa.me/5492920411152" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#b9b1d0] transition-colors font-medium">
                    +54 9 2920 411152
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#b9b1d0]">
                  <InstagramLogo size={16} weight="bold" />
                </div>
                <div>
                  <span className="text-[11px] text-[#dedbea]/60 block leading-tight">Canal institucional</span>
                  <a href="https://instagram.com/igualdadconsultora" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#b9b1d0] transition-colors font-medium">
                    @igualdadconsultora
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#b9b1d0] mt-0.5">
                  <MapPin size={16} weight="bold" />
                </div>
                <div>
                  <span className="text-[11px] text-[#dedbea]/60 block leading-tight">Sede y Alcance</span>
                  <span className="text-white/90 font-medium block">Provincia de Buenos Aires y Río Negro</span>
                  <span className="text-[12px] text-[#dedbea]/70 block">Todo el país y países de habla hispana</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Desarrollado por Trit Software Factory */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11.5px] text-[#dedbea]/50 text-center sm:text-left">
          <div>
            © 2026 Igualdad Consultora · Belén Scalesa. Todos los derechos reservados.
          </div>

          <a
            href="https://trit.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] text-[#dedbea]/45 hover:text-[#dedbea]/80 transition-colors duration-100 group"
            aria-label="Sitio web de Trit Software Factory"
          >
            <span>Desarrollado por</span>
            <div className="relative w-3.5 h-3.5 shrink-0 opacity-75 group-hover:opacity-100 transition-opacity duration-100">
              <Image
                src="/images/trit-icon.svg"
                alt="Trit Software Factory"
                fill
                sizes="14px"
                className="object-contain"
              />
            </div>
            <span className="font-medium tracking-wide">Trit Software Factory</span>
          </a>
        </div>

      </div>
    </footer>
  );
}
