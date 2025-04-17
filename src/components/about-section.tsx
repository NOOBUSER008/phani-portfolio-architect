
import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site-config";
import * as LucideIcons from "lucide-react";

// Type for dynamically rendering Lucide icons
type IconName = keyof typeof LucideIcons;

export default function AboutSection() {
  // If the section is disabled in config, don't render anything
  if (!siteConfig.sections.showAbout) return null;
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };
  
  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i: number) => ({ 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        delay: 0.2 + i * 0.1,
        ease: "easeOut" 
      }
    })
  };
  
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-secondary/10 to-background">
      <div className="section-container">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="text-center space-y-2" variants={itemVariants}>
            <h2 className="heading-lg">{siteConfig.about.title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 mx-auto"></div>
          </motion.div>
          
          <motion.div 
            className="bg-card shadow-lg rounded-xl p-8 max-w-4xl mx-auto border border-primary/10"
            variants={itemVariants}
          >
            <motion.h3 
              className="heading-sm mb-4 text-primary"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Career Summary
            </motion.h3>
            
            <motion.p 
              className="text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {siteConfig.about.description}
            </motion.p>
            
            <motion.h3 
              className="heading-sm mt-8 mb-4 text-primary"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Education
            </motion.h3>
            
            <motion.div 
              className="flex items-center gap-4 mb-2 p-3 bg-card/50 rounded-lg border border-primary/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.15)" }}
            >
              <div className="bg-primary/20 dark:bg-primary/30 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <div>
                <h4 className="font-semibold">{siteConfig.about.education.degree}</h4>
                <p className="text-muted-foreground">{siteConfig.about.education.institution}</p>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.about.highlights.map((highlight, index) => {
              // Safely get the correct Lucide icon component
              let IconComponent = null;
              
              if (highlight.icon && typeof highlight.icon === 'string') {
                const iconName = highlight.icon as IconName;
                // Check if the icon exists in Lucide
                if (LucideIcons[iconName]) {
                  IconComponent = LucideIcons[iconName];
                }
              }
              
              return (
                <motion.div
                  key={index}
                  className="bg-card shadow-md rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300"
                  variants={cardVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 10px 25px -15px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 dark:from-blue-500/30 dark:to-indigo-500/30 p-3 rounded-full inline-block mb-4">
                    {IconComponent && React.createElement(IconComponent, { 
                      className: "text-primary", 
                      width: 24, 
                      height: 24 
                    })}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground/90">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
