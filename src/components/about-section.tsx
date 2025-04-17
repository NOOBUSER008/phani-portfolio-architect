
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site-config";
import * as LucideIcons from "lucide-react";

// Type for dynamically rendering Lucide icons
type IconName = keyof typeof LucideIcons;

export default function AboutSection() {
  // If the section is disabled in config, don't render anything
  if (!siteConfig.sections.showAbout) return null;
  
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="section-container">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-2">
            <h2 className="heading-lg">{siteConfig.about.title}</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="bg-card shadow-md rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="heading-sm mb-4">Career Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              {siteConfig.about.description}
            </p>
            
            <h3 className="heading-sm mt-8 mb-4">Education</h3>
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-primary/20 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <div>
                <h4 className="font-semibold">{siteConfig.about.education.degree}</h4>
                <p className="text-muted-foreground">{siteConfig.about.education.institution}</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.about.highlights.map((highlight, index) => {
              // Dynamically get the correct Lucide icon component
              const IconComponent = highlight.icon ? LucideIcons[highlight.icon as IconName] : null;
              
              return (
                <div key={index} className="bg-card shadow-md rounded-xl p-6 card-hover">
                  <div className="bg-primary/20 p-3 rounded-full inline-block mb-4">
                    {IconComponent && <IconComponent className="text-primary" width={24} height={24} />}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
