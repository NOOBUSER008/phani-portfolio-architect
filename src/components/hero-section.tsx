
import { ArrowDownIcon } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

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
              <Button size="lg" asChild className="rounded-full">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex-center">
              <div className="absolute inset-3 rounded-full bg-card flex-center">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold">PM</div>
              </div>
            </div>
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
            <ArrowDownIcon className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
