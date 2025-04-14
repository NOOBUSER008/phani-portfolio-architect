
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {siteConfig.sections.showHero && <HeroSection />}
        {siteConfig.sections.showAbout && <AboutSection />}
        {siteConfig.sections.showSkills && <SkillsSection />}
        {siteConfig.sections.showExperience && <ExperienceSection />}
        {siteConfig.sections.showProjects && <ProjectsSection />}
        {siteConfig.sections.showCertifications && <CertificationsSection />}
        {siteConfig.sections.showResume && <ResumeSection />}
        {siteConfig.sections.showContact && <ContactSection />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
