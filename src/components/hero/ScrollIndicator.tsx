
import { motion } from "framer-motion";
import { ArrowDownIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const ScrollIndicator = () => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      className={`absolute ${isMobile ? 'bottom-0' : 'bottom-8'} left-1/2 transform -translate-x-1/2 z-10`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.8 }}
    >
      <a 
        href="#about" 
        className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group"
      >
        <span className={`text-sm mb-1 font-medium opacity-80 group-hover:opacity-100 transition-opacity ${isMobile ? 'text-xs' : ''}`}>
          Scroll Down
        </span>
        <motion.div
          className="bg-primary/10 dark:bg-primary/20 rounded-full p-1.5 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors"
          animate={{ y: [0, 5, 0] }}
          transition={{ 
            repeat: Number.POSITIVE_INFINITY, 
            repeatType: "loop", 
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <ArrowDownIcon className="h-3 w-3 text-primary" />
        </motion.div>
      </a>
    </motion.div>
  );
};
