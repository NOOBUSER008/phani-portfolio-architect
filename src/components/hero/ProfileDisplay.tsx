
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { Code2, Database, Globe, Server, Settings, Cloud, Command, Network, Codepen } from "lucide-react";

export const ProfileDisplay = () => {
  const { theme } = useTheme();

  return (
    <motion.div 
      className="flex-1 flex justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div 
        className="profile-container relative"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center">
          {/* Dynamic pulsing outer border with rotation */}
          <DynamicOuterBorder />
          
          {/* Professional tech orbital background */}
          <OrbitalBackground />
          
          {/* Main content container */}
          <div className="relative w-full h-full rounded-full bg-transparent flex items-center justify-center overflow-hidden">
            {/* Core element with professional styling */}
            <CoreElement theme={theme} />
            
            {/* Tech tool icons with professional styling */}
            <TechIcons />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Dynamic pulsing outer border with rotation
const DynamicOuterBorder = () => {
  return (
    <motion.div 
      className="absolute -inset-2 rounded-full"
      animate={{
        rotate: 360,
        boxShadow: [
          "0 0 0 4px rgba(59,130,246,0.3)",
          "0 0 0 6px rgba(59,130,246,0.2)",
          "0 0 0 4px rgba(59,130,246,0.3)"
        ],
      }}
      transition={{ 
        rotate: {
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "linear",
        },
        boxShadow: { 
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
        }
      }}
    >
      {/* Animated gradient border */}
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6">
              <animate 
                attributeName="stopColor" 
                values="#3B82F6; #60A5FA; #3B82F6" 
                dur="4s" 
                repeatCount="indefinite" 
              />
            </stop>
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.6">
              <animate 
                attributeName="stopColor" 
                values="#2563EB; #1E40AF; #2563EB" 
                dur="4s" 
                repeatCount="indefinite" 
              />
            </stop>
          </linearGradient>
        </defs>
        <motion.circle 
          cx="50" 
          cy="50" 
          r="49" 
          fill="none" 
          stroke="url(#borderGradient)" 
          strokeWidth="1.5"
          animate={{
            r: [49, 48, 49],
            strokeWidth: [1.5, 2, 1.5]
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />
      </svg>
    </motion.div>
  );
};

// Orbital background with subtle animations
const OrbitalBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Primary orbital ring */}
      <motion.div 
        className="absolute inset-0 border-2 border-blue-500/20 dark:border-blue-400/30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      
      {/* Secondary orbital ring */}
      <motion.div 
        className="absolute inset-4 border border-primary/20 dark:border-primary/30 rounded-full"
        animate={{ 
          rotate: -360,
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          rotate: { duration: 45, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
        }}
      />
      
      {/* Tertiary orbital dotted ring */}
      <motion.div 
        className="absolute inset-8 border border-dashed border-secondary/30 dark:border-secondary/40 rounded-full"
        animate={{ 
          rotate: 180,
          scale: [1, 0.98, 1]
        }}
        transition={{ 
          rotate: { duration: 90, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
        }}
      />
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/5 via-transparent to-primary/5 dark:from-blue-400/10 dark:to-primary/10 blur-md" />
    </div>
  );
};

// Core tech visualization - Improved DevOps Infinity Symbol
const CoreElement = ({ theme }: { theme: string | undefined }) => {
  return (
    <motion.div 
      className="relative w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center"
      animate={{ 
        scale: [0.98, 1.02, 0.98],
      }}
      transition={{ 
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-600/40 to-primary/40 dark:from-blue-500/50 dark:to-primary/50 flex items-center justify-center backdrop-blur-md shadow-xl">
        <motion.div 
          className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-card/70 backdrop-blur-sm flex items-center justify-center border border-primary/20 dark:border-blue-400/20"
          animate={{ 
            boxShadow: ["0 0 10px rgba(59,130,246,0.3)", "0 0 20px rgba(59,130,246,0.5)", "0 0 10px rgba(59,130,246,0.3)"],
          }}
          transition={{ 
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          {/* DevOps Infinity Symbol */}
          <motion.div 
            className="relative w-full h-full flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {/* Main SVG Canvas */}
            <svg viewBox="0 0 100 100" width="80%" height="80%" className="opacity-80">
              <defs>
                <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={theme === 'dark' ? "#3B82F6" : "#2563EB"}>
                    <animate 
                      attributeName="stopColor" 
                      values={theme === 'dark' ? "#3B82F6;#60A5FA;#3B82F6" : "#2563EB;#3B82F6;#2563EB"} 
                      dur="6s" 
                      repeatCount="indefinite" 
                    />
                  </stop>
                  <stop offset="100%" stopColor={theme === 'dark' ? "#8B5CF6" : "#6366F1"}>
                    <animate 
                      attributeName="stopColor" 
                      values={theme === 'dark' ? "#8B5CF6;#A78BFA;#8B5CF6" : "#6366F1;#818CF8;#6366F1"} 
                      dur="6s" 
                      repeatCount="indefinite" 
                    />
                  </stop>
                </linearGradient>
              </defs>
              
              {/* Infinity Symbol for DevOps - Proper infinity shape */}
              <motion.path 
                d="M30,50 C30,38 38,30 50,30 C62,30 70,38 70,50 C70,62 62,70 50,70 C38,70 30,62 30,50 Z M70,50 C70,38 78,30 90,30 C102,30 110,38 110,50 C110,62 102,70 90,70 C78,70 70,62 70,50 Z M30,50 C30,62 22,70 10,70 C-2,70 -10,62 -10,50 C-10,38 -2,30 10,30 C22,30 30,38 30,50 Z"
                fill="none" 
                stroke="url(#techGradient)" 
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ 
                  pathLength: 1,
                  strokeDasharray: "1, 0",
                }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                }}
              />
              
              {/* Animated dot traveling along the infinity path */}
              <motion.circle 
                r="2" 
                fill="url(#techGradient)"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  offsetDistance: "100%"
                }}
                style={{
                  offsetPath: "path('M30,50 C30,38 38,30 50,30 C62,30 70,38 70,50 C70,62 62,70 50,70 C38,70 30,62 30,50 Z M70,50 C70,38 78,30 90,30 C102,30 110,38 110,50 C110,62 102,70 90,70 C78,70 70,62 70,50 Z M30,50 C30,62 22,70 10,70 C-2,70 -10,62 -10,50 C-10,38 -2,30 10,30 C22,30 30,38 30,50 Z')",
                  offsetRotate: "auto"
                }}
                transition={{
                  offsetDistance: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              />
              
              {/* Cloud icon */}
              <path 
                d="M65,40 Q75,35 75,45 Q80,40 85,45 Q90,50 85,55 Q87,60 80,60 L55,60 Q45,60 45,50 Q45,40 55,40 Z" 
                fill="none" 
                stroke="url(#techGradient)" 
                strokeWidth="1.5" 
              />
              
              {/* Server icon */}
              <rect x="30" y="45" width="20" height="30" rx="2" fill="none" stroke="url(#techGradient)" strokeWidth="1.5" />
              <line x1="30" y1="55" x2="50" y2="55" stroke="url(#techGradient)" strokeWidth="1" />
              <line x1="30" y1="65" x2="50" y2="65" stroke="url(#techGradient)" strokeWidth="1" />
              
              {/* Connection lines */}
              <path 
                d="M50,50 C55,50 60,40 65,40" 
                fill="none" 
                stroke="url(#techGradient)" 
                strokeWidth="1.5" 
                strokeDasharray="3,2"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Professional tech icons with refined animations
const TechIcons = () => {
  const technologies = [
    { Icon: Server, label: "Infrastructure", color: "bg-blue-600 dark:bg-blue-500" },
    { Icon: Cloud, label: "Cloud", color: "bg-indigo-600 dark:bg-indigo-500" },
    { Icon: Code2, label: "IaC", color: "bg-violet-600 dark:bg-violet-500" },
    { Icon: Database, label: "Databases", color: "bg-green-600 dark:bg-green-500" },
    { Icon: Settings, label: "Automation", color: "bg-amber-600 dark:bg-amber-500" },
    { Icon: Command, label: "CLI", color: "bg-slate-600 dark:bg-slate-500" },
    { Icon: Network, label: "Networking", color: "bg-red-600 dark:bg-red-500" },
    { Icon: Codepen, label: "CI/CD", color: "bg-cyan-600 dark:bg-cyan-500" }
  ];
  
  return (
    <>
      {technologies.map((tech, index) => {
        // Calculate position around the circle
        const angle = (index / technologies.length) * 2 * Math.PI;
        const radius = 120; // Adjusted for better visibility
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        
        return (
          <motion.div
            key={`tech-${index}`}
            className={`absolute ${tech.color} text-white p-2 rounded-full shadow-md z-10`}
            initial={{ x, y, opacity: 0 }}
            animate={{
              opacity: 1,
              x: [
                x,
                x + Math.cos(angle + Math.PI/4) * 10,
                x - Math.cos(angle + Math.PI/4) * 10,
                x
              ],
              y: [
                y,
                y + Math.sin(angle + Math.PI/4) * 10,
                y - Math.sin(angle + Math.PI/4) * 10,
                y
              ]
            }}
            transition={{
              opacity: { duration: 0.5, delay: index * 0.1 },
              x: { 
                duration: 8 + index, 
                repeat: Number.POSITIVE_INFINITY, 
                repeatType: "mirror" 
              },
              y: { 
                duration: 8 + index, 
                repeat: Number.POSITIVE_INFINITY, 
                repeatType: "mirror" 
              }
            }}
            whileHover={{ scale: 1.2 }}
          >
            <div className="relative">
              <tech.Icon size={20} />
              
              {/* Tooltip */}
              <motion.div 
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 pointer-events-none"
                whileHover={{ opacity: 1, y: -5 }}
              >
                {tech.label}
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};
