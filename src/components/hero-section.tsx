
import { ArrowDownIcon, Download, Infinity } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export default function HeroSection() {
  const { theme } = useTheme();
  
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
            <div className="relative w-full max-w-[700px] h-[500px]">
              {/* DevOps Infinity Symbol - Created programmatically */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  rotate: 360,
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{ 
                  rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                  scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <svg 
                  width="100%" 
                  height="100%" 
                  viewBox="0 0 500 250" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="max-w-full"
                >
                  {/* Left loop of infinity */}
                  <motion.path
                    d="M125,125 C125,80 175,80 175,125 C175,170 225,170 225,125"
                    stroke="url(#gradient1)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Right loop of infinity */}
                  <motion.path
                    d="M225,125 C225,80 275,80 275,125 C275,170 325,170 325,125"
                    stroke="url(#gradient2)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                      delay: 2.5
                    }}
                  />
                  
                  {/* DevOps text along the path */}
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0078d7" />
                      <stop offset="100%" stopColor="#36B37E" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6554C0" />
                      <stop offset="100%" stopColor="#FF5630" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
              
              {/* Animated particle dots along the infinity path */}
              {[0, 60, 120, 180, 240, 300].map((degree, index) => (
                <motion.div
                  key={index}
                  className="absolute top-1/2 left-1/2 h-3 w-3 md:h-4 md:w-4 rounded-full"
                  initial={{ 
                    x: Math.cos(degree * (Math.PI / 180)) * 100, 
                    y: Math.sin(degree * (Math.PI / 180)) * 60 
                  }}
                  animate={{
                    x: [
                      Math.cos(degree * (Math.PI / 180)) * 100,
                      Math.cos((degree + 120) * (Math.PI / 180)) * 100,
                      Math.cos((degree + 240) * (Math.PI / 180)) * 100,
                      Math.cos(degree * (Math.PI / 180)) * 100
                    ],
                    y: [
                      Math.sin(degree * (Math.PI / 180)) * 60,
                      Math.sin((degree + 120) * (Math.PI / 180)) * 60,
                      Math.sin((degree + 240) * (Math.PI / 180)) * 60,
                      Math.sin(degree * (Math.PI / 180)) * 60
                    ],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: index * 0.5
                  }}
                  style={{ 
                    backgroundColor: ['#0078d7', '#6554C0', '#36B37E', '#FF5630', '#00B8D9', '#6554C0'][index],
                    boxShadow: `0 0 10px 2px ${['#0078d7', '#6554C0', '#36B37E', '#FF5630', '#00B8D9', '#6554C0'][index]}`
                  }}
                />
              ))}

              {/* DevOps text in the middle */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0.5, 0.8, 0.5], scale: [0.9, 1, 0.9] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="font-mono font-bold text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-300 dark:from-blue-400 dark:via-purple-400 dark:to-blue-200">
                  DevOps
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 relative z-10 px-4">
          <motion.div 
            className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading-xl sm:leading-tight">
              Hi, I'm <span className="text-gradient">Phani Mathangi</span>
            </h1>
            <h2 className="heading-md text-muted-foreground mt-2">
              Senior DevOps Engineer
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
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
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full profile-gradient p-1.5 shadow-2xl shadow-primary/10 devops-glow flex items-center justify-center">
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
                
                {/* DevOps Infinity Symbol */}
                <div className="relative w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  >
                    {/* DevOps infinity background pattern */}
                    <svg width="100%" height="100%" viewBox="0 0 200 200" opacity="0.1">
                      <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </motion.div>
                  
                  {/* Main infinity symbol */}
                  <motion.div
                    className="w-3/4 h-3/4 relative"
                    animate={{ 
                      scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <svg 
                      viewBox="0 0 100 50" 
                      width="100%" 
                      height="100%"
                      className="w-full h-full"
                    >
                      <motion.path
                        d="M25,25 C25,15 32,15 35,25 C38,35 45,35 45,25 M45,25 C45,15 52,15 55,25 C58,35 65,35 65,25"
                        fill="none"
                        stroke="url(#devopsGradient)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 3,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatType: "loop",
                          repeatDelay: 1
                        }}
                      />
                      <defs>
                        <linearGradient id="devopsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={theme === 'dark' ? "#0078d7" : "#0078d7"} />
                          <stop offset="50%" stopColor={theme === 'dark' ? "#6554C0" : "#36B37E"} />
                          <stop offset="100%" stopColor={theme === 'dark' ? "#FF5630" : "#FF5630"} />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Animated particles along infinity path */}
                    {[0, 0.2, 0.4, 0.6, 0.8].map((offset, i) => (
                      <motion.div
                        key={`particle-${i}`}
                        className="absolute rounded-full"
                        style={{
                          width: (i % 2 === 0 ? 5 : 7) + 'px',
                          height: (i % 2 === 0 ? 5 : 7) + 'px',
                          backgroundColor: ['#0078d7', '#6554C0', '#36B37E', '#FF5630', '#00B8D9'][i],
                          boxShadow: `0 0 8px 2px ${['#0078d7', '#6554C0', '#36B37E', '#FF5630', '#00B8D9'][i]}`,
                        }}
                        animate={{
                          offsetDistance: [offset, offset + 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.2
                        }}
                        style={{
                          offsetPath: "path('M25,25 C25,15 32,15 35,25 C38,35 45,35 45,25 M45,25 C45,15 52,15 55,25 C58,35 65,35 65,25')",
                          offsetRotate: "auto 90deg",
                          // Make sure other styles from above are preserved
                          width: (i % 2 === 0 ? 5 : 7) + 'px',
                          height: (i % 2 === 0 ? 5 : 7) + 'px',
                          backgroundColor: ['#0078d7', '#6554C0', '#36B37E', '#FF5630', '#00B8D9'][i],
                          boxShadow: `0 0 8px 2px ${['#0078d7', '#6554C0', '#36B37E', '#FF5630', '#00B8D9'][i]}`,
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* DevOps Text */}
                  <motion.div
                    className="absolute font-mono font-bold text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-300 dark:from-blue-400 dark:via-purple-400 dark:to-blue-200"
                    animate={{ 
                      opacity: [0.7, 1, 0.7],
                      scale: [0.9, 1, 0.9]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    DevOps
                  </motion.div>
                </div>
              </div>
              
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
