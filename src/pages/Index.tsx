
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

// Configure which sections to display
// These could be moved to environment variables or a config file
const config = {
  showHero: true,
  showAbout: true,
  showSkills: true,
  showExperience: true,
  showProjects: true,
  showCertifications: true,
  showResume: true,
  showContact: true,
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {config.showHero && <HeroSection />}
        {config.showAbout && <AboutSection />}
        {config.showSkills && <SkillsSection />}
        {config.showExperience && <ExperienceSection />}
        {config.showProjects && <ProjectsSection />}
        {config.showCertifications && <CertificationsSection />}
        {config.showResume && <ResumeSection />}
        {config.showContact && <ContactSection />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
