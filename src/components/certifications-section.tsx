
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export default function CertificationsSection() {
  // If the sections are disabled in config, don't render anything
  if (!siteConfig.sections.showCertifications && !siteConfig.sections.showAchievements) return null;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="certifications" className="py-16 md:py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center space-y-2 mb-12">
          <h2 className="heading-lg">Certifications & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Professional certifications and key accomplishments
          </p>
        </div>

        {/* Certifications Grid - Only show if enabled */}
        {siteConfig.sections.showCertifications && (
          <div className="mb-16">
            <h3 className="heading-sm mb-6 text-center">Certifications</h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {siteConfig.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-sm card-hover"
                  variants={itemVariants}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{cert.name}</h4>
                      <p className="text-muted-foreground">{cert.issuer}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline">{cert.date}</Badge>
                        <Badge variant="outline">ID: {cert.credentialId}</Badge>
                      </div>
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:underline mt-2 text-sm"
                      >
                        Verify <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Achievements List - Only show if enabled */}
        {siteConfig.sections.showAchievements && (
          <div>
            <h3 className="heading-sm mb-6 text-center">Key Achievements</h3>
            <motion.div
              className="max-w-3xl mx-auto bg-card p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ul className="space-y-4">
                {siteConfig.achievements.map((achievement, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-primary font-bold text-lg">•</span>
                    <span>{achievement.description}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
