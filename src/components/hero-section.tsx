
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
        {/* DevOps Background Animation */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 800 600">
            {/* DevOps Infinity Symbol Path */}
            <motion.path
              d="M250,300 C250,220 300,180 350,180 C400,180 450,220 450,300 C450,380 500,420 550,420 C600,420 650,380 650,300 C650,220 600,180 550,180 C500,180 450,220 450,300 C450,380 400,420 350,420 C300,420 250,380 250,300 Z"
              fill="none"
              stroke="url(#devops-gradient)"
              strokeWidth="6"
              className="infinity-path"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            
            {/* Icons along the path */}
            <motion.circle cx="350" cy="180" r="10" fill="#0078d7" className="animate-pulse-slow" />
            <motion.circle cx="550" cy="180" r="10" fill="#36B37E" className="animate-pulse-slow" />
            <motion.circle cx="250" cy="300" r="10" fill="#6554C0" className="animate-pulse-slow" />
            <motion.circle cx="650" cy="300" r="10" fill="#FF5630" className="animate-pulse-slow" />
            <motion.circle cx="350" cy="420" r="10" fill="#0078d7" className="animate-pulse-slow" />
            <motion.circle cx="550" cy="420" r="10" fill="#36B37E" className="animate-pulse-slow" />
            
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="devops-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0078d7" />
                <stop offset="50%" stopColor="#6554C0" />
                <stop offset="100%" stopColor="#36B37E" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
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
              className="profile-container relative"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {profileImg ? (
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full profile-gradient p-1.5 shadow-2xl shadow-primary/10 devops-glow">
                  <div className="absolute inset-0 rounded-full blur-xl opacity-50 profile-gradient"></div>
                  <div className="absolute inset-0 rounded-full animate-rotate opacity-70">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <defs>
                        <linearGradient id="spinnerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(var(--devops-primary))" />
                          <stop offset="50%" stopColor="hsl(var(--devops-secondary))" />
                          <stop offset="100%" stopColor="hsl(var(--devops-accent))" />
                        </linearGradient>
                      </defs>
                      <path d="M100,20 A80,80 0 1,1 99.9,20" fill="none" stroke="url(#spinnerGradient)" strokeWidth="3" strokeDasharray="10 5" />
                    </svg>
                  </div>
                  <img 
                    src={profileImg} 
                    alt="Phani Mathangi" 
                    className="w-full h-full object-cover rounded-full p-1 bg-card"
                  />
                </div>
              ) : (
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full profile-gradient flex-center shadow-2xl shadow-primary/30 devops-glow">
                  <div className="absolute inset-5 rounded-full bg-card flex-center">
                    <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-gradient">PM</div>
                  </div>
                </div>
              )}
              
              {/* Tech icons floating around profile */}
              <motion.div 
                className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 dark:bg-blue-500 text-white p-2 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 7h10" /><path d="M10 7v10" /><path d="M7 17h10" /></svg>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-10 right-0 transform translate-x-1/2 bg-purple-600 dark:bg-purple-500 text-white p-2 rounded-full shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" /></svg>
              </motion.div>
              
              <motion.div 
                className="absolute top-1/3 -left-4 transform -translate-y-1/2 bg-green-600 dark:bg-green-500 text-white p-2 rounded-full shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12" /><path d="M15 10v12" /><path d="M11 10v12" /><path d="M19 10v12" /><path d="M3 10v12" /><rect width="18" height="5" x="3" y="5" rx="2" /><path d="M3 10h18" /></svg>
              </motion.div>
              
              <motion.div 
                className="absolute top-2/3 right-0 transform translate-x-1/2 bg-orange-600 dark:bg-orange-500 text-white p-2 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2" /><rect width="20" height="8" x="2" y="14" rx="2" ry="2" /><line x1="6" x2="6" y1="6" y2="6" /><line x1="6" x2="6" y1="18" y2="18" /></svg>
              </motion.div>
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
