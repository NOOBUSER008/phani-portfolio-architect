
import { DevOpsInfinityBackground } from "@/components/hero/DevOpsInfinityBackground";
import { HeroContent } from "@/components/hero/HeroContent";
import { ProfileDisplay } from "@/components/hero/ProfileDisplay";
import { ScrollIndicator } from "@/components/hero/ScrollIndicator";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="section-container">
        {/* DevOps Infinity Background Animation */}
        <DevOpsInfinityBackground />
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 relative z-10 px-4">
          <HeroContent />
          <ProfileDisplay />
        </div>
        
        <ScrollIndicator />
      </div>
    </section>
  );
}
