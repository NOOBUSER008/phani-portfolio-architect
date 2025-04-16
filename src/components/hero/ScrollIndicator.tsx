
import { motion } from "framer-motion";
import { ArrowDownIcon } from "lucide-react";

export const ScrollIndicator = () => {
  return (
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
          transition={{ 
            repeat: Number.POSITIVE_INFINITY, 
            repeatType: "loop", 
            duration: 1.5 
          }}
        >
          <ArrowDownIcon className="h-5 w-5" />
        </motion.div>
      </a>
    </motion.div>
  );
};
