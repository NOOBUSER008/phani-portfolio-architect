
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";

export const DevOpsInfinityBackground = () => {
  const { theme } = useTheme();
  
  return (
    <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none overflow-hidden">
      <motion.div 
        className="w-full h-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Professional DevOps background with subtle grid and circuit patterns */}
        <ProfessionalDevOpsBackground theme={theme} />
      </motion.div>
    </div>
  );
};

const ProfessionalDevOpsBackground = ({ theme }: { theme: string | undefined }) => {
  // Create a professional backdrop with circuit-like patterns and tech elements
  return (
    <div className="relative w-full h-full">
      {/* Circuit grid background */}
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke={theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(37, 99, 235, 0.1)'}
              strokeWidth="0.5"
            />
          </pattern>
          
          <linearGradient id="techGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={theme === 'dark' ? "#3B82F6" : "#2563EB"} stopOpacity="0.4" />
            <stop offset="50%" stopColor={theme === 'dark' ? "#8B5CF6" : "#6366F1"} stopOpacity="0.4" />
            <stop offset="100%" stopColor={theme === 'dark' ? "#3B82F6" : "#2563EB"} stopOpacity="0.4" />
          </linearGradient>
        </defs>
        
        {/* Grid background */}
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Circuit paths - subtle, professional */}
        <g className="circuit-paths">
          <motion.path
            d="M100,300 Q200,100 300,200 T500,100 T700,300"
            stroke="url(#techGlow)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          
          <motion.path
            d="M200,500 Q300,300 400,400 T600,300 T800,500"
            stroke="url(#techGlow)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
          />
          
          {/* Connection nodes */}
          {[
            { cx: 200, cy: 100 },
            { cx: 500, cy: 100 },
            { cx: 300, cy: 400 },
            { cx: 600, cy: 300 },
          ].map((node, i) => (
            <motion.circle
              key={i}
              cx={node.cx}
              cy={node.cy}
              r="3"
              fill={theme === 'dark' ? "#3B82F6" : "#2563EB"}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: [0.2, 0.7, 0.2] }}
              transition={{
                scale: { duration: 0.5, delay: i * 0.2 },
                opacity: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }
              }}
            />
          ))}
        </g>
        
        {/* Tech symbols - subtle professional elements */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {/* Cloud symbol */}
          <motion.path
            d="M300,150 Q320,130 340,150 Q360,130 380,150 Q400,170 380,190 Q400,210 380,230 L320,230 Q300,210 300,190 Z"
            fill="none"
            stroke={theme === 'dark' ? "rgba(99, 102, 241, 0.3)" : "rgba(79, 70, 229, 0.2)"}
            strokeWidth="1"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          />
          
          {/* Server symbol */}
          <motion.g
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          >
            <rect
              x="500"
              y="350"
              width="60"
              height="80"
              rx="2"
              fill="none"
              stroke={theme === 'dark' ? "rgba(99, 102, 241, 0.3)" : "rgba(79, 70, 229, 0.2)"}
              strokeWidth="1"
            />
            <line
              x1="500"
              y1="370"
              x2="560"
              y2="370"
              stroke={theme === 'dark' ? "rgba(99, 102, 241, 0.3)" : "rgba(79, 70, 229, 0.2)"}
              strokeWidth="1"
            />
            <line
              x1="500"
              y1="390"
              x2="560"
              y2="390"
              stroke={theme === 'dark' ? "rgba(99, 102, 241, 0.3)" : "rgba(79, 70, 229, 0.2)"}
              strokeWidth="1"
            />
          </motion.g>
          
          {/* Code symbol */}
          <motion.g
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          >
            <path
              d="M650,200 L630,240 L650,280"
              fill="none"
              stroke={theme === 'dark' ? "rgba(99, 102, 241, 0.3)" : "rgba(79, 70, 229, 0.2)"}
              strokeWidth="1"
            />
            <path
              d="M680,200 L700,240 L680,280"
              fill="none"
              stroke={theme === 'dark' ? "rgba(99, 102, 241, 0.3)" : "rgba(79, 70, 229, 0.2)"}
              strokeWidth="1"
            />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
};
