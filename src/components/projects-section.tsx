
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site-config";

export default function ProjectsSection() {
  // If the section is disabled in config, don't render anything
  if (!siteConfig.sections.showProjects) return null;

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center space-y-2 mb-12">
          <h2 className="heading-lg">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Key projects showcasing my DevOps and cloud engineering expertise
          </p>
        </div>
        
        <div className="space-y-16">
          {siteConfig.projects.map((project, index) => (
            <motion.div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Project Visual */}
              <div className="w-full md:w-2/5">
                <div className={`w-full aspect-video rounded-lg bg-gradient-to-br ${
                  index === 0 ? 'from-devops-blue to-devops-purple' : 
                  index === 1 ? 'from-devops-green to-devops-blue' : 
                  'from-devops-orange to-devops-purple'
                } flex items-center justify-center p-8`}>
                  <h3 className="text-3xl font-bold text-white text-center">{project.name}</h3>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="w-full md:w-3/5">
                <div className="bg-card rounded-lg shadow-md p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <h3 className="heading-md">{project.name}</h3>
                    <span className="text-muted-foreground font-medium mt-2 sm:mt-0">{project.role}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {project.achievements.slice(0, 5).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
