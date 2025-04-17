
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
          {/* Enhanced border with stronger visibility in light mode */}
          <div className="absolute inset-0 rounded-full border-[6px] border-primary/30 dark:border-blue-500/40 shadow-lg"></div>
          
          {/* Professional tech orbital background */}
          <ProfessionalOrbitalBackground />
          
          {/* Main content container */}
          <div className="relative w-full h-full rounded-full bg-transparent flex items-center justify-center overflow-hidden">
            {/* Core element with professional styling */}
            <motion.div 
              className="relative flex items-center justify-center"
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
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-blue-600/40 to-primary/40 dark:from-blue-500/50 dark:to-primary/50 flex items-center justify-center backdrop-blur-md shadow-xl">
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
                  <TechCore theme={theme} />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Tech tool icons with professional styling */}
            <ProfessionalTechIcons />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Professional orbital background with subtle animations
const ProfessionalOrbitalBackground = () => {
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
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      
      {/* Tertiary orbital dotted ring */}
      <motion.div 
        className="absolute inset-8 border border-dashed border-secondary/30 dark:border-secondary/40 rounded-full"
        animate={{ rotate: 180 }}
        transition={{ duration: 90, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/5 via-transparent to-primary/5 dark:from-blue-400/10 dark:to-primary/10 blur-md" />
    </div>
  );
};

// Core tech visualization
const TechCore = ({ theme }: { theme: string | undefined }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 100 100" width="80%" height="80%" className="opacity-80">
        <defs>
          <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={theme === 'dark' ? "#3B82F6" : "#2563EB"} />
            <stop offset="100%" stopColor={theme === 'dark' ? "#8B5CF6" : "#6366F1"} />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Central icon symbolizing DevOps integration */}
        <motion.g
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 40, 
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          filter="url(#glow)"
        >
          {/* Cloud */}
          <path 
            d="M65,40 Q75,35 75,45 Q80,40 85,45 Q90,50 85,55 Q87,60 80,60 L55,60 Q45,60 45,50 Q45,40 55,40 Z" 
            fill="none" 
            stroke="url(#techGradient)" 
            strokeWidth="1.5" 
          />
          
          {/* Server */}
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
          
          {/* Code brackets */}
          <path 
            d="M20,30 L15,50 L20,70" 
            fill="none" 
            stroke="url(#techGradient)" 
            strokeWidth="1.5" 
          />
          <path 
            d="M80,30 L85,50 L80,70" 
            fill="none" 
            stroke="url(#techGradient)" 
            strokeWidth="1.5" 
          />
        </motion.g>
      </svg>
      
      {/* Subtle pulsing effect */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-primary/10 dark:from-blue-400/15 dark:to-primary/15"
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ 
          duration: 3, 
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Professional tech icons with refined animations
const ProfessionalTechIcons = () => {
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
