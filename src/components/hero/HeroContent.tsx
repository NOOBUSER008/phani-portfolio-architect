
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export const HeroContent = () => {
  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.2,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  // Button animation variants
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1 + i * 0.15,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
      <motion.h1 
        className="heading-xl sm:leading-tight"
        custom={0}
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        Hi, I'm <span className="text-gradient relative inline-block">
          {siteConfig.name}
          <motion.div 
            className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-blue-600 to-violet-500 dark:from-blue-400 dark:to-violet-400"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          />
        </span>
      </motion.h1>
      
      <motion.h2 
        className="heading-md text-muted-foreground mt-2"
        custom={1}
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        {siteConfig.title}
      </motion.h2>
      
      <motion.p 
        className="text-base md:text-lg max-w-2xl mx-auto lg:mx-0"
        custom={2}
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        {siteConfig.description}
      </motion.p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <Button 
            size="lg" 
            asChild 
            className="rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 dark:from-blue-500 dark:via-blue-600 dark:to-indigo-600 hover:shadow-lg hover:shadow-primary/20 border-none"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
        
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <Button 
            size="lg" 
            variant="outline" 
            asChild 
            className="rounded-full border-primary/30 hover:border-primary/80 hover:bg-primary/5"
          >
            <a href="#projects">View Projects</a>
          </Button>
        </motion.div>
        
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <Button 
            size="lg" 
            variant="secondary" 
            asChild 
            className="rounded-full bg-gradient-to-r from-slate-200/80 to-slate-300/50 dark:from-slate-800/80 dark:to-slate-700/50 hover:shadow-md"
          >
            <a href={siteConfig.resumePath} download>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
