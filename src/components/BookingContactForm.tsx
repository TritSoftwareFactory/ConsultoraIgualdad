"use client";

import { useState } from "react";
import {
  EnvelopeSimple,
  InstagramLogo,
  MapPin,
  CalendarCheck,
  CheckCircle,
  PaperPlaneTilt,
  LockKey,
  WhatsappLogo,
  Clock,
  ArrowRight
} from "@phosphor-icons/react";

interface FormState {
  fullName: string;
  organization: string;
  sector: string;
  email: string;
  phone: string;
  scope: string;
  preferredShift: string;
  preferredDate: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  fullName: "",
  organization: "",
  sector: "empresa",
  email: "",
  phone: "",
  scope: "sistema_integral",
  preferredShift: "manana",
  preferredDate: "",
  message: "",
};

export function BookingContactForm() {
  const [formData, setFormData] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [ticketId, setTicketId] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulating processing of the scheduling form
    // Ready for future integration with Resend / API route / Webhook
    setTimeout(() => {
      const generatedId = "IC-" + Math.floor(100000 + Math.random() * 900000);
      setTicketId(generatedId);
      setStatus("success");
    }, 900);
  };

  const handleReset = () => {
    setFormData(INITIAL_STATE);
    setStatus("idle");
    setTicketId("");
  };

  const whatsappMessage = encodeURIComponent(
    "Hola Belén, me contacto desde el sitio web de Igualdad Consultora para coordinar una reunión inicial sobre prevención y abordaje de violencia laboral."
  );

  return (
    <section id="contacto" className="py-16 md:py-24 bg-white border-b border-[#dedbea]/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f1eff7] text-[#544f82] text-[12px] font-semibold mb-4 border border-[#dedbea]/80">
            <LockKey size={14} weight="bold" />
            <span>Reunión inicial de 30´ sin costo · Confidencialidad estricta</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1926] tracking-tight">
            Coordinemos una reunión inicial
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#464453] leading-relaxed">
            Evaluamos el estado de su organización y ajustamos la propuesta técnica a las dimensiones y necesidades de su equipo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Institutional Channels & Location */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#faf9fd] rounded-2xl border border-[#dedbea] p-5 sm:p-7 md:p-8 space-y-6">
              <div>
                <h3 className="font-heading text-xl font-bold text-[#1a1926] mb-2">
                  Atención directa y confidencial
                </h3>
                <p className="text-[14px] text-[#464453] leading-relaxed">
                  Tratamiento reservado de cada consulta bajo estricto acuerdo de confidencialidad institucional.
                </p>
              </div>

              {/* Direct links */}
              <div className="space-y-3.5 pt-1">
                
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/5492920411152?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#dedbea] hover:border-[#b9b1d0] active:scale-[0.99] transition-all group min-h-[52px]"
                >
                  <div className="p-2.5 rounded-lg bg-[#faf9fd] text-[#544f82] group-hover:bg-[#544f82] group-hover:text-white transition-colors">
                    <WhatsappLogo size={20} weight="fill" />
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold text-[#676479]">
                      WhatsApp Directo
                    </div>
                    <div className="text-[14.5px] font-bold text-[#1a1926] mt-0.5">
                      +54 9 2920 411152
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:igualdadconsultora@gmail.com"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#dedbea] hover:border-[#b9b1d0] active:scale-[0.99] transition-all group min-h-[52px]"
                >
                  <div className="p-2.5 rounded-lg bg-[#faf9fd] text-[#544f82] group-hover:bg-[#544f82] group-hover:text-white transition-colors">
                    <EnvelopeSimple size={20} weight="bold" />
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold text-[#676479]">
                      Correo Electrónico
                    </div>
                    <div className="text-[14.5px] font-bold text-[#1a1926] mt-0.5 break-all">
                      igualdadconsultora@gmail.com
                    </div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/igualdadconsultora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#dedbea] hover:border-[#b9b1d0] active:scale-[0.99] transition-all group min-h-[52px]"
                >
                  <div className="p-2.5 rounded-lg bg-[#faf9fd] text-[#544f82] group-hover:bg-[#544f82] group-hover:text-white transition-colors">
                    <InstagramLogo size={20} weight="bold" />
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold text-[#676479]">
                      Red Institucional
                    </div>
                    <div className="text-[14.5px] font-bold text-[#1a1926] mt-0.5">
                      @igualdadconsultora
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#dedbea]">
                  <div className="p-2.5 rounded-lg bg-[#faf9fd] text-[#544f82]">
                    <MapPin size={20} weight="bold" />
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold text-[#676479]">
                      Sede y Alcance
                    </div>
                    <div className="text-[14.5px] font-bold text-[#1a1926] mt-0.5">
                      Provincia de Buenos Aires y Río Negro
                    </div>
                    <div className="text-[12.5px] text-[#676479]">
                      Todo el país y países de habla hispana
                    </div>
                  </div>
                </div>

              </div>

              {/* Confidentiality seal */}
              <div className="pt-4 border-t border-[#dedbea]/60 flex items-center gap-2 text-[12px] text-[#676479]">
                <LockKey size={16} weight="bold" className="text-[#544f82] shrink-0" />
                <span>Reunión inicial de 30´ sin costo · Confidencialidad estricta</span>
              </div>

            </div>

          </div>

          {/* Right Column: Intake & Scheduling Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#dedbea] p-5 sm:p-7 md:p-9 shadow-sm">
              
              {status === "success" ? (
                <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#f1eff7] text-[#544f82] flex items-center justify-center mx-auto">
                    <CheckCircle size={40} weight="fill" />
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-[#1a1926]">
                    Solicitud de reunión recibida
                  </h3>

                  <p className="text-[15px] text-[#464453] max-w-md mx-auto leading-relaxed">
                    Hemos registrado los datos de su entidad para coordinar la reunión inicial. Belén Scalesa o el equipo técnico se comunicará en un plazo máximo de 24 horas hábiles.
                  </p>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#faf9fd] border border-[#dedbea] text-[13px] text-[#544f82] font-semibold">
                    <span>Número de gestión:</span>
                    <span className="font-mono">{ticketId}</span>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#544f82] hover:underline"
                    >
                      <span>Completar otra solicitud</span>
                      <ArrowRight size={14} weight="bold" />
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="border-b border-[#dedbea]/60 pb-3 mb-2">
                    <h3 className="font-heading text-xl font-bold text-[#1a1926]">
                      Formulario de agendamiento y consulta preliminar
                    </h3>
                    <p className="text-[13px] text-[#676479] mt-0.5">
                      Los campos marcados con (*) son requeridos para la correcta evaluación.
                    </p>
                  </div>

                  {/* Nombre y Entidad */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-[13px] font-semibold text-[#1a1926] mb-1.5">
                        Nombre y Apellido *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        autoComplete="name"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Ej. Dra. Mariana Gómez"
                        className="w-full px-3.5 py-3 rounded-xl border border-[#dedbea] bg-[#faf9fd] text-[#1a1926] text-[16px] sm:text-[14px] placeholder-[#8b889e] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5f4a9a] min-h-[46px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-[13px] font-semibold text-[#1a1926] mb-1.5">
                        Organización o Razón Social *
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        autoComplete="organization"
                        required
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Ej. Empresa S.A. / Gremio / Municipio"
                        className="w-full px-3.5 py-3 rounded-xl border border-[#dedbea] bg-[#faf9fd] text-[#1a1926] text-[16px] sm:text-[14px] placeholder-[#8b889e] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5f4a9a] min-h-[46px]"
                      />
                    </div>
                  </div>

                  {/* Sector y Alcance de la necesidad */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="sector" className="block text-[13px] font-semibold text-[#1a1926] mb-1.5">
                        Tipo de Sector *
                      </label>
                      <select
                        id="sector"
                        name="sector"
                        required
                        value={formData.sector}
                        onChange={handleChange}
                        className="w-full px-3.5 py-3 rounded-xl border border-[#dedbea] bg-[#faf9fd] text-[#1a1926] text-[16px] sm:text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5f4a9a] min-h-[46px]"
                      >
                        <option value="empresa">Empresa / Empleador Privado</option>
                        <option value="sindicato">Sindicato / Organización Gremial</option>
                        <option value="publico">Organismo Público / Municipio</option>
                        <option value="educativa">Institución Educativa o Científica</option>
                        <option value="otra">Otra entidad</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="scope" className="block text-[13px] font-semibold text-[#1a1926] mb-1.5">
                        Necesidad Principal *
                      </label>
                      <select
                        id="scope"
                        name="scope"
                        required
                        value={formData.scope}
                        onChange={handleChange}
                        className="w-full px-3.5 py-3 rounded-xl border border-[#dedbea] bg-[#faf9fd] text-[#1a1926] text-[16px] sm:text-[14px] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5f4a9a] min-h-[46px]"
                      >
                        <option value="sistema_integral">Sistema Integral de Prevención</option>
                        <option value="formaciones">Formaciones y Charlas de Sensibilización</option>
                        <option value="diagnostico_protocolo">Diagnóstico y Protocolo Inicial</option>
                        <option value="otra_consulta">Otra consulta institucional</option>
                      </select>
                    </div>
                  </div>

                  {/* Correo y Teléfono */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-[13px] font-semibold text-[#1a1926] mb-1.5">
                        Correo Electrónico Institucional *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        inputMode="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="contacto@organizacion.com"
                        className="w-full px-3.5 py-3 rounded-xl border border-[#dedbea] bg-[#faf9fd] text-[#1a1926] text-[16px] sm:text-[14px] placeholder-[#8b889e] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5f4a9a] min-h-[46px]"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-[13px] font-semibold text-[#1a1926] mb-1.5">
                        Teléfono / WhatsApp de Contacto *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        inputMode="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+54 9 11 ..."
                        className="w-full px-3.5 py-3 rounded-xl border border-[#dedbea] bg-[#faf9fd] text-[#1a1926] text-[16px] sm:text-[14px] placeholder-[#8b889e] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5f4a9a] min-h-[46px]"
                      />
                    </div>
                  </div>

                  {/* Preferencia de agendamiento */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#faf9fd] border border-[#dedbea]">
                    <div>
                      <label htmlFor="preferredShift" className="block text-[13px] font-semibold text-[#1a1926] mb-1.5 flex items-center gap-1.5">
                        <Clock size={15} weight="bold" className="text-[#544f82]" />
                        <span>Franja horaria sugerida</span>
                      </label>
                      <select
                        id="preferredShift"
                        name="preferredShift"
                        value={formData.preferredShift}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-[#dedbea] bg-white text-[#1a1926] text-[16px] sm:text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#5f4a9a] min-h-[44px]"
                      >
                        <option value="manana">Turno Mañana (09:00 a 13:00 hs ART)</option>
                        <option value="tarde">Turno Tarde (14:00 a 18:00 hs ART)</option>
                        <option value="indistinto">Indistinto / A coordinar</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="preferredDate" className="block text-[13px] font-semibold text-[#1a1926] mb-1.5 flex items-center gap-1.5">
                        <CalendarCheck size={15} weight="bold" className="text-[#544f82]" />
                        <span>Fecha estimada de preferencia</span>
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        min="2026-10-24"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 rounded-lg border border-[#dedbea] bg-white text-[#1a1926] text-[16px] sm:text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[#5f4a9a] min-h-[44px]"
                      />
                    </div>
                  </div>

                  {/* Mensaje o Contexto */}
                  <div>
                    <label htmlFor="message" className="block text-[13px] font-semibold text-[#1a1926] mb-1.5">
                      Breve descripción del estado actual o consulta preliminar
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Indique si la organización ya cuenta con protocolos previos, dotación estimada de personal o urgencias a contemplar."
                      className="w-full px-3.5 py-3 rounded-xl border border-[#dedbea] bg-[#faf9fd] text-[#1a1926] text-[16px] sm:text-[14px] placeholder-[#8b889e] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#5f4a9a] resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#544f82] hover:bg-[#433e68] disabled:bg-[#8b889e] text-white text-[15px] font-semibold px-8 py-4 rounded-xl transition-all shadow-sm hover:shadow active:scale-[0.98] cursor-pointer min-h-[48px]"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Procesando solicitud...</span>
                        </>
                      ) : (
                        <>
                          <PaperPlaneTilt size={17} weight="bold" />
                          <span>Agendar reunión inicial</span>
                        </>
                      )}
                    </button>
                    <p className="text-[12px] text-[#676479] mt-3 flex items-center gap-1.5">
                      <LockKey size={14} weight="bold" className="text-[#544f82] shrink-0" />
                      <span>Reunión inicial de 30´ sin costo · Confidencialidad estricta</span>
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
