
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
        {/* DevOps Infinity Background Animation */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <motion.div 
            className="w-full h-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Large DevOps Infinity Symbol */}
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 1000 500" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-75 md:scale-100"
            >
              {/* Main infinity symbol paths */}
              <motion.path
                d="M400,250 C400,150 500,150 500,250 C500,350 600,350 600,250"
                stroke="url(#blueGradient)"
                strokeWidth="15"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              />
              
              <motion.path
                d="M600,250 C600,150 700,150 700,250 C700,350 800,350 800,250"
                stroke="url(#purpleGradient)"
                strokeWidth="15"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 4
                }}
              />
              
              {/* Data flow particles */}
              <motion.circle
                cx="0"
                cy="0"
                r="10"
                fill="#36B37E"
                animate={{
                  cx: [400, 500, 600, 700, 800],
                  cy: [250, 180, 250, 180, 250],
                  opacity: [0, 1, 1, 1, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.circle
                cx="0"
                cy="0"
                r="10"
                fill="#0078d7"
                animate={{
                  cx: [800, 700, 600, 500, 400],
                  cy: [250, 320, 250, 320, 250],
                  opacity: [0, 1, 1, 1, 0]
                }}
                transition={{
                  duration: 8,
                  delay: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.circle
                cx="0"
                cy="0"
                r="8"
                fill="#FF5630"
                animate={{
                  cx: [400, 500, 600, 700, 800],
                  cy: [250, 180, 250, 180, 250],
                  opacity: [0, 1, 1, 1, 0]
                }}
                transition={{
                  duration: 8,
                  delay: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.circle
                cx="0"
                cy="0"
                r="8"
                fill="#6554C0"
                animate={{
                  cx: [800, 700, 600, 500, 400],
                  cy: [250, 320, 250, 320, 250],
                  opacity: [0, 1, 1, 1, 0]
                }}
                transition={{
                  duration: 8,
                  delay: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Gradients for paths */}
              <defs>
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0078d7" />
                  <stop offset="100%" stopColor="#36B37E" />
                </linearGradient>
                <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6554C0" />
                  <stop offset="100%" stopColor="#FF5630" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
        
        {/* Profile section with DevOps-themed styling */}
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
                  {/* Animated DevOps Border */}
                  <svg
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.circle
                      cx="100"
                      cy="100"
                      r="98"
                      fill="none"
                      stroke="url(#profileBorderGradient)"
                      strokeWidth="2"
                      strokeDasharray="10 5"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    />
                    <defs>
                      <linearGradient id="profileBorderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0078d7" />
                        <stop offset="33%" stopColor="#6554C0" />
                        <stop offset="66%" stopColor="#36B37E" />
                        <stop offset="100%" stopColor="#FF5630" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  <img 
                    src={profileImg} 
                    alt="Phani Mathangi" 
                    className="w-full h-full object-cover rounded-full p-1 bg-card"
                  />
                  
                  {/* DevOps Icons around profile */}
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 dark:bg-blue-500 text-white p-2 rounded-full shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 6.1H3"></path><path d="M21 12.1H3"></path><path d="M15.5 18.1H3"></path></svg>
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-1/4 -right-4 transform translate-y-1/2 bg-purple-600 dark:bg-purple-500 text-white p-2 rounded-full shadow-lg"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"></path><path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"></path></svg>
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-10 -left-4 transform -translate-y-1/2 bg-green-600 dark:bg-green-500 text-white p-2 rounded-full shadow-lg"
                    animate={{ x: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-5 right-5 bg-orange-600 dark:bg-orange-500 text-white p-2 rounded-full shadow-lg"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H2v7l10.29 10.29c.39.39 1.02.39 1.41 0l7.29-7.29a1 1 0 0 0 0-1.41L11.7 5H9Z"></path><path d="M6 9h.01"></path></svg>
                  </motion.div>
                </div>
              ) : (
                // Fallback if profile image is not available
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full profile-gradient flex-center shadow-2xl shadow-primary/30 devops-glow">
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
