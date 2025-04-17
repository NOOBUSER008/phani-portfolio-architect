
import { motion } from "framer-motion";
import { DevOpsInfinityBackground } from "@/components/hero/DevOpsInfinityBackground";
import { HeroContent } from "@/components/hero/HeroContent";
import { ProfileDisplay } from "@/components/hero/ProfileDisplay";
import { ScrollIndicator } from "@/components/hero/ScrollIndicator";
import { siteConfig } from "@/config/site-config";

export default function HeroSection() {
  // Only render if showHero is true in the configuration
  if (!siteConfig.sections.showHero) return null;
  
  return (
    <motion.section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-container">
        {/* DevOps Background Animation */}
        <DevOpsInfinityBackground />
        
        {/* Content Wrapper with Enhanced Animation */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 relative z-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7, 
            delay: 0.2,
            ease: "easeOut"
          }}
        >
          <HeroContent />
          <ProfileDisplay />
        </motion.div>
        
        <ScrollIndicator />
      </div>
    </motion.section>
  );
}
