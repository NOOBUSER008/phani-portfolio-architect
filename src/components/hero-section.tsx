
import { ArrowDownIcon, Download } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

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
            <div className="relative w-[700px] h-[500px]">
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
                  width="500" 
                  height="250" 
                  viewBox="0 0 500 250" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
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
                  className="absolute top-1/2 left-1/2 h-4 w-4 rounded-full"
                  initial={{ 
                    x: Math.cos(degree * (Math.PI / 180)) * 150, 
                    y: Math.sin(degree * (Math.PI / 180)) * 80 
                  }}
                  animate={{
                    x: [
                      Math.cos(degree * (Math.PI / 180)) * 150,
                      Math.cos((degree + 120) * (Math.PI / 180)) * 150,
                      Math.cos((degree + 240) * (Math.PI / 180)) * 150,
                      Math.cos(degree * (Math.PI / 180)) * 150
                    ],
                    y: [
                      Math.sin(degree * (Math.PI / 180)) * 80,
                      Math.sin((degree + 120) * (Math.PI / 180)) * 80,
                      Math.sin((degree + 240) * (Math.PI / 180)) * 80,
                      Math.sin(degree * (Math.PI / 180)) * 80
                    ]
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
            </div>
          </motion.div>
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
              className="relative w-80 h-80 flex items-center justify-center"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* DevOps Infinity Logo Animation */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Glowing background */}
                <div className="absolute inset-0 rounded-full blur-3xl opacity-30 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500"></div>
                
                {/* Rotating outer ring */}
                <motion.div 
                  className="absolute w-full h-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0078d7" />
                        <stop offset="50%" stopColor="#6554C0" />
                        <stop offset="100%" stopColor="#FF5630" />
                      </linearGradient>
                    </defs>
                    <circle cx="100" cy="100" r="90" fill="none" stroke="url(#ringGradient)" strokeWidth="2" strokeDasharray="10 5" />
                  </svg>
                </motion.div>
                
                {/* Main infinity symbol */}
                <motion.div 
                  className="relative w-72 h-72 flex items-center justify-center"
                  animate={{ scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg viewBox="0 0 300 150" className="w-full">
                    <defs>
                      <linearGradient id="leftLoopGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0078d7" />
                        <stop offset="100%" stopColor="#36B37E" />
                      </linearGradient>
                      <linearGradient id="rightLoopGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6554C0" />
                        <stop offset="100%" stopColor="#FF5630" />
                      </linearGradient>
                      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                      </filter>
                    </defs>
                    
                    {/* Glowing effect */}
                    <g filter="url(#glow)">
                      <path d="M75,75 C75,45 105,45 105,75 C105,105 135,105 135,75" stroke="url(#leftLoopGradient)" strokeWidth="8" strokeLinecap="round" />
                      <path d="M135,75 C135,45 165,45 165,75 C165,105 195,105 195,75" stroke="url(#rightLoopGradient)" strokeWidth="8" strokeLinecap="round" />
                    </g>
                    
                    {/* Main paths */}
                    <motion.path
                      d="M75,75 C75,45 105,45 105,75 C105,105 135,105 135,75"
                      stroke="url(#leftLoopGradient)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                      }}
                    />
                    <motion.path
                      d="M135,75 C135,45 165,45 165,75 C165,105 195,105 195,75"
                      stroke="url(#rightLoopGradient)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        delay: 1.5
                      }}
                    />
                    
                    {/* Moving dots */}
                    <motion.circle
                      cx="0"
                      cy="0"
                      r="5"
                      fill="#0078d7"
                      initial={{ pathOffset: 0 }}
                      animate={{ pathOffset: 1 }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        offsetPath: "path('M75,75 C75,45 105,45 105,75 C105,105 135,105 135,75 C135,45 165,45 165,75 C165,105 195,105 195,75')",
                        offsetRotate: "0deg"
                      }}
                    />
                    <motion.circle
                      cx="0"
                      cy="0"
                      r="5"
                      fill="#FF5630"
                      initial={{ pathOffset: 0.25 }}
                      animate={{ pathOffset: [0.25, 1.25] }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        offsetPath: "path('M75,75 C75,45 105,45 105,75 C105,105 135,105 135,75 C135,45 165,45 165,75 C165,105 195,105 195,75')",
                        offsetRotate: "0deg"
                      }}
                    />
                    <motion.circle
                      cx="0"
                      cy="0"
                      r="5"
                      fill="#36B37E"
                      initial={{ pathOffset: 0.5 }}
                      animate={{ pathOffset: [0.5, 1.5] }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        offsetPath: "path('M75,75 C75,45 105,45 105,75 C105,105 135,105 135,75 C135,45 165,45 165,75 C165,105 195,105 195,75')",
                        offsetRotate: "0deg"
                      }}
                    />
                    <motion.circle
                      cx="0"
                      cy="0"
                      r="5"
                      fill="#6554C0"
                      initial={{ pathOffset: 0.75 }}
                      animate={{ pathOffset: [0.75, 1.75] }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        offsetPath: "path('M75,75 C75,45 105,45 105,75 C105,105 135,105 135,75 C135,45 165,45 165,75 C165,105 195,105 195,75')",
                        offsetRotate: "0deg"
                      }}
                    />
                    
                    {/* DevOps Text */}
                    <motion.text
                      x="135"
                      y="75"
                      textAnchor="middle"
                      className="text-xl font-bold"
                      fill="white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      DevOps
                    </motion.text>
                  </svg>
                </motion.div>
                
                {/* Tech icons floating around */}
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
              </div>
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
