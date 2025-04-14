
import { motion } from "framer-motion"

export default function AboutSection() {
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
            <h2 className="heading-lg">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="bg-card shadow-md rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="heading-sm mb-4">Career Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              Experienced DevOps Engineer with 4+ years, specializing in end-to-end infrastructure management, automation, and cloud security. Skilled in CI/CD pipeline development, deployment automation, and containerized workloads. Designed cloud architectures on AWS with a focus on cost optimization, scalability, and high availability. Knowledgeable in compliance standards enabling secure and audit-ready DevOps practices.
            </p>
            
            <h3 className="heading-sm mt-8 mb-4">Education</h3>
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-primary/20 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <div>
                <h4 className="font-semibold">B. Tech</h4>
                <p className="text-muted-foreground">VR Siddhartha Engineering college</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card shadow-md rounded-xl p-6 card-hover">
              <div className="bg-primary/20 p-3 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m7 11 2-2-2-2"/><path d="M11 13h4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">CI/CD Expertise</h3>
              <p className="text-muted-foreground">Streamlined deployment processes with automated workflows using GitHub Actions and Jenkins.</p>
            </div>
            
            <div className="bg-card shadow-md rounded-xl p-6 card-hover">
              <div className="bg-primary/20 p-3 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M2 22a8 8 0 0 1 16 0"/><path d="M4 8a20 20 0 0 1 16 0"/><circle cx="10" cy="11" r="3"/><path d="M2 18a10 10 0 0 1 18-1"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud Architecture</h3>
              <p className="text-muted-foreground">Designed resilient, secure cloud infrastructure focusing on cost optimization and high availability.</p>
            </div>
            
            <div className="bg-card shadow-md rounded-xl p-6 card-hover">
              <div className="bg-primary/20 p-3 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a1.93 1.93 0 0 0-.97 1.68v5.7c0 2.25.37 3.32.67 4l1.42 2.28A6.86 6.86 0 0 0 10.34 22h3.12a6.86 6.86 0 0 0 6.25-4.17l1.45-2.35c.27-.47.64-1.32.64-3.34v-1.7a1.93 1.93 0 0 0-.89-1.6Z"/><path d="M13 2.05v5.7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-5.7"/><path d="m15 22-3-3 3-3"/><path d="m9 22 3-3-3-3"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Container Orchestration</h3>
              <p className="text-muted-foreground">Managed containerized applications through Docker, Kubernetes (EKS), and ECS.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
