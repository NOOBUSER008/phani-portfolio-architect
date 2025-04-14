
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import CertificationsSection from "@/components/certifications-section";
import ResumeSection from "@/components/resume-section";
import { siteConfig } from "@/config/site-config";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* SVG background pattern for DevOps theme */}
        <div className="fixed inset-0 -z-10 opacity-5 pointer-events-none dark:opacity-10">
          {/* Circuit board pattern */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M0 25h50 M25 0v50 M0 0L50 50 M50 0L0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>
      
        {/* Main content sections with entrance animations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {siteConfig.sections.showHero && <HeroSection />}
          
          {siteConfig.sections.showAbout && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <AboutSection />
            </motion.div>
          )}
          
          {siteConfig.sections.showSkills && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SkillsSection />
            </motion.div>
          )}
          
          {siteConfig.sections.showExperience && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ExperienceSection />
            </motion.div>
          )}
          
          {siteConfig.sections.showProjects && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ProjectsSection />
            </motion.div>
          )}
          
          {siteConfig.sections.showCertifications && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <CertificationsSection />
            </motion.div>
          )}
          
          {siteConfig.sections.showResume && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ResumeSection />
            </motion.div>
          )}
          
          {siteConfig.sections.showContact && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactSection />
            </motion.div>
          )}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
