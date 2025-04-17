
import { motion } from "framer-motion";
import { ArrowDownIcon } from "lucide-react";

export const ScrollIndicator = () => {
  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.8 }}
    >
      <a 
        href="#about" 
        className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group"
      >
        <span className="text-sm mb-2 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
          Scroll Down
        </span>
        <motion.div
          className="bg-primary/10 dark:bg-primary/20 rounded-full p-2 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors"
          animate={{ y: [0, 5, 0] }}
          transition={{ 
            repeat: Number.POSITIVE_INFINITY, 
            repeatType: "loop", 
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <ArrowDownIcon className="h-4 w-4 text-primary" />
        </motion.div>
      </a>
    </motion.div>
  );
};
