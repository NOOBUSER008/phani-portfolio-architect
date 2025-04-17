
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export default function ExperienceSection() {
  // If the section is disabled in config, don't render anything
  if (!siteConfig.sections.showExperience) return null;
  
  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center space-y-2 mb-12">
          <h2 className="heading-lg">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            My professional journey in DevOps and cloud infrastructure
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-border"></div>
          
          {/* Experience items */}
          {siteConfig.experience.map((item, index) => (
            <motion.div 
              key={index}
              className="relative mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background z-10"></div>
                
                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="bg-card p-6 rounded-lg shadow-md card-hover">
                    <h3 className="text-xl font-bold">
                      {item.position}
                      {item.current && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/20 text-primary">
                          Current
                        </span>
                      )}
                    </h3>
                    <h4 className="text-lg font-semibold text-muted-foreground">{item.company}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{item.period}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Skills list */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="heading-sm mb-6 text-center">Key Responsibilities & Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {siteConfig.keyResponsibilities.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
