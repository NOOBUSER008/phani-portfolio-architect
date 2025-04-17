
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { siteConfig } from "@/config/site-config";

export const HeroContent = () => {
  return (
    <motion.div 
      className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="heading-xl sm:leading-tight">
        Hi, I'm <span className="text-gradient">{siteConfig.name}</span>
      </h1>
      <h2 className="heading-md text-muted-foreground mt-2">
        {siteConfig.title}
      </h2>
      <p className="text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
        {siteConfig.description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <Button size="lg" asChild className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-purple-500 hover:shadow-lg hover:shadow-primary/20">
          <a href="#contact">Get in Touch</a>
        </Button>
        <Button size="lg" variant="outline" asChild className="rounded-full border-primary/20 hover:border-primary/80">
          <a href="#projects">View Projects</a>
        </Button>
        <Button size="lg" variant="secondary" asChild className="rounded-full bg-gradient-to-r from-secondary/50 to-secondary/20 dark:from-accent dark:to-accent/50">
          <a href={siteConfig.resumePath} download>
            <Download className="mr-2 h-4 w-4" />
            Resume
          </a>
        </Button>
      </div>
    </motion.div>
  );
};
