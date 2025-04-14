
import { ArrowDownIcon, Download } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import profileImg from "/lovable-uploads/db51e5ab-c509-4b43-bf46-417c9d9b26b4.png"

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading-xl">
              Hi, I'm <span className="text-gradient">Phani Mathangi</span>
            </h1>
            <h2 className="heading-md text-muted-foreground">
              Senior DevOps Engineer
            </h2>
            <p className="text-lg max-w-2xl mx-auto lg:mx-0">
              Specializing in infrastructure management, automation, and cloud security with over 4 years of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-purple-500 hover:shadow-lg hover:shadow-primary/20">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-primary/20 hover:border-primary/80">
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="secondary" asChild className="rounded-full bg-gradient-to-r from-secondary/50 to-secondary/20 dark:from-accent dark:to-accent/50">
                <a href="/assets/phani_mathangi_resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div 
              className="profile-container"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {profileImg ? (
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full profile-gradient p-1.5 shadow-2xl shadow-primary/10">
                  <div className="absolute inset-0 rounded-full blur-xl opacity-50 profile-gradient"></div>
                  <img 
                    src={profileImg} 
                    alt="Phani Mathangi" 
                    className="w-full h-full object-cover rounded-full p-1 bg-card"
                  />
                </div>
              ) : (
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full profile-gradient flex-center shadow-2xl shadow-primary/30">
                  <div className="absolute inset-5 rounded-full bg-card flex-center">
                    <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-gradient">PM</div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href="#about" 
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDownIcon className="h-5 w-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
