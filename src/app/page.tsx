import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustWall } from "@/components/TrustWall";
import { ChallengeSection } from "@/components/ChallengeSection";
import { EcosystemPhases } from "@/components/EcosystemPhases";
import { AudiencesSection } from "@/components/AudiencesSection";
import { TrajectoryProfile } from "@/components/TrajectoryProfile";
import { PricingSection } from "@/components/PricingSection";
import { BookingContactForm } from "@/components/BookingContactForm";
import { Footer } from "@/components/Footer";
import { MobileQuickBar } from "@/components/MobileQuickBar";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Igualdad Consultora",
    "image": "https://igualdadconsultora.com/images/logo-full.png",
    "description":
      "Consultoría integral para empresas, sindicatos y sector público en prevención y abordaje de la violencia laboral y adecuación al Convenio 190 OIT.",
    "founder": {
      "@type": "Person",
      "name": "Belén Scalesa",
      "jobTitle": "Directora General",
      "alumniOf": ["FLACSO Argentina", "Universidad Nacional del Comahue"],
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Viedma",
      "addressRegion": "Río Negro",
      "addressCountry": "AR",
    },
    "telephone": "+5492920411152",
    "email": "igualdadconsultora@gmail.com",
    "url": "https://igualdadconsultora.com",
    "priceRange": "$$$",
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#faf9fd]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustWall />
        <ChallengeSection />
        <EcosystemPhases />
        <AudiencesSection />
        <TrajectoryProfile />
        <PricingSection />
        <BookingContactForm />
      </main>
      <Footer />
      <MobileQuickBar />
    </div>
  );
}
