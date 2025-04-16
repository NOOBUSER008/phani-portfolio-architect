
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
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-1.5 shadow-xl flex items-center justify-center">
          {/* Dynamic circular elements */}
          <DynamicCircles />
          
          {/* Animated rings */}
          <motion.div 
            className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/30 dark:border-blue-500/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          
          <motion.div 
            className="absolute inset-2 rounded-full border-2 border-dashed border-purple-400/20 dark:border-purple-500/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          
          {/* Main content container */}
          <div className="relative w-full h-full rounded-full bg-transparent flex items-center justify-center overflow-hidden">
            {/* Circuit pattern background */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ opacity: [0.05, 0.1, 0.05] }}
              transition={{ 
                duration: 5, 
                repeat: Number.POSITIVE_INFINITY, 
                repeatType: "loop", 
                ease: "easeInOut" 
              }}
            >
              <svg width="100%" height="100%" viewBox="0 0 200 200">
                <pattern id="circuitPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 0 10 L 10 10 M 10 0 L 10 20 M 0 0 L 20 20 M 20 0 L 0 20" stroke="currentColor" strokeWidth="0.5" fill="none" />
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#circuitPattern)" />
              </svg>
            </motion.div>
            
            {/* Creative circle animation at the center */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <CreativeCoreAnimation theme={theme} />
            </motion.div>
            
            {/* Surrounding icons representing tech tools */}
            <TechToolIcons />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Dynamic floating circles in background
const DynamicCircles = () => {
  const circleProps = [
    { size: 60, delay: 0, duration: 8, color: "bg-blue-500/20" },
    { size: 40, delay: 1, duration: 12, color: "bg-purple-500/15" },
    { size: 80, delay: 2, duration: 15, color: "bg-cyan-500/10" },
    { size: 30, delay: 0.5, duration: 10, color: "bg-indigo-500/20" },
    { size: 50, delay: 1.5, duration: 9, color: "bg-pink-500/15" },
  ];
  
  return (
    <>
      {circleProps.map((circle, index) => (
        <motion.div
          key={`floating-circle-${index}`}
          className={`absolute rounded-full ${circle.color} backdrop-blur-md`}
          style={{
            width: circle.size,
            height: circle.size,
            left: `calc(50% - ${circle.size / 2}px)`,
            top: `calc(50% - ${circle.size / 2}px)`,
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -20, 30, -10, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: circle.duration,
            delay: circle.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

// Creative core animation component
const CreativeCoreAnimation = ({ theme }: { theme: string | undefined }) => {
  return (
    <div className="relative w-3/4 h-3/4 flex items-center justify-center">
      {/* Animated orbit lines */}
      <svg viewBox="0 0 100 100" width="100%" height="100%" className="absolute">
        <defs>
          <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={theme === 'dark' ? "#0078d7" : "#0078d7"} />
            <stop offset="50%" stopColor={theme === 'dark' ? "#6554C0" : "#36B37E"} />
            <stop offset="100%" stopColor={theme === 'dark' ? "#FF5630" : "#FF5630"} />
          </linearGradient>
        </defs>
        
        <motion.ellipse
          cx="50" cy="50" rx="30" ry="45"
          stroke="url(#orbitGradient)"
          strokeWidth="0.5"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        
        <motion.ellipse
          cx="50" cy="50" rx="45" ry="30"
          stroke="url(#orbitGradient)"
          strokeWidth="0.5"
          fill="none"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </svg>
      
      {/* Core pulsing circle */}
      <motion.div
        className="relative flex items-center justify-center"
        animate={{ 
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{ 
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
          <motion.div 
            className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-card flex items-center justify-center"
            animate={{ 
              boxShadow: ["0 0 10px rgba(255,255,255,0.2)", "0 0 20px rgba(255,255,255,0.4)", "0 0 10px rgba(255,255,255,0.2)"],
            }}
            transition={{ 
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <svg width="60%" height="60%" viewBox="0 0 100 100">
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              
              {/* Central icon - technologically creative symbol */}
              <motion.path
                d="M50,20 L80,50 L50,80 L20,50 Z"
                fill="none"
                stroke="url(#orbitGradient)"
                strokeWidth="2"
                filter="url(#glow)"
                animate={{ 
                  rotate: 360,
                  strokeDasharray: ["1 10", "12 12", "1 10"],
                }}
                transition={{ 
                  duration: 15, 
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              
              <motion.circle
                cx="50" cy="50" r="20"
                fill="none" 
                stroke="url(#orbitGradient)"
                strokeWidth="2"
                filter="url(#glow)"
                animate={{ 
                  r: [15, 25, 15],
                  strokeDasharray: ["1 10", "12 12", "1 10"],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Animated particles */}
      <AnimatedParticles />
    </div>
  );
};

// Animated particles
const AnimatedParticles = () => {
  const particles = Array.from({ length: 8 }, (_, i) => i);
  
  return (
    <>
      {particles.map((i) => {
        const angle = (i / particles.length) * 2 * Math.PI;
        const delay = i * 0.2;
        
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full h-2 w-2"
            style={{
              backgroundColor: ['#0078d7', '#6554C0', '#36B37E', '#FF5630', '#00B8D9', '#9b87f5', '#33C3F0', '#8B5CF6'][i % 8],
              boxShadow: `0 0 8px ${['#0078d7', '#6554C0', '#36B37E', '#FF5630', '#00B8D9', '#9b87f5', '#33C3F0', '#8B5CF6'][i % 8]}`,
            }}
            animate={{
              x: [
                Math.cos(angle) * 40,
                Math.cos(angle + Math.PI / 2) * 60,
                Math.cos(angle + Math.PI) * 40,
                Math.cos(angle + 3 * Math.PI / 2) * 60,
                Math.cos(angle + 2 * Math.PI) * 40,
              ],
              y: [
                Math.sin(angle) * 40,
                Math.sin(angle + Math.PI / 2) * 60,
                Math.sin(angle + Math.PI) * 40,
                Math.sin(angle + 3 * Math.PI / 2) * 60,
                Math.sin(angle + 2 * Math.PI) * 40,
              ],
              scale: [1, 1.5, 1, 1.5, 1],
              opacity: [0.8, 1, 0.8, 1, 0.8],
            }}
            transition={{
              duration: 10,
              delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear"
            }}
          />
        );
      })}
    </>
  );
};

// Tech Tool Icons that orbit around the main logo
const TechToolIcons = () => {
  // Orbital paths at different distances
  const orbitPaths = [
    { radius: 95, duration: 25, delay: 0, reverse: false },
    { radius: 105, duration: 30, delay: 2, reverse: true },
    { radius: 115, duration: 35, delay: 4, reverse: false }
  ];
  
  // Orbital positions (degrees)
  const positions = [0, 40, 80, 120, 160, 200, 240, 280, 320];
  
  // Tools with colors
  const tools = [
    { Icon: Code2, color: "bg-blue-600 dark:bg-blue-500", name: "Code" },
    { Icon: Server, color: "bg-purple-600 dark:bg-purple-500", name: "Server" },
    { Icon: Cloud, color: "bg-green-600 dark:bg-green-500", name: "Cloud" },
    { Icon: Settings, color: "bg-orange-600 dark:bg-orange-500", name: "Config" },
    { Icon: Database, color: "bg-indigo-600 dark:bg-indigo-500", name: "Data" },
    { Icon: Command, color: "bg-cyan-600 dark:bg-cyan-500", name: "CLI" },
    { Icon: Network, color: "bg-red-600 dark:bg-red-500", name: "Network" },
    { Icon: Codepen, color: "bg-amber-600 dark:bg-amber-500", name: "CI/CD" },
    { Icon: Globe, color: "bg-emerald-600 dark:bg-emerald-500", name: "Deploy" }
  ];

  return (
    <>
      {/* Create three different orbital paths with tools */}
      {orbitPaths.map((orbit, orbitIndex) => (
        <React.Fragment key={`orbit-${orbitIndex}`}>
          {positions.slice(0, 3).map((degree, i) => {
            const itemIndex = (orbitIndex * 3 + i) % tools.length;
            const { Icon, color, name } = tools[itemIndex];
            
            // Calculate starting position on the orbit
            const positionDegree = degree + orbitIndex * 30;
            const radians = (positionDegree * Math.PI) / 180;
            const x = orbit.radius * Math.cos(radians);
            const y = orbit.radius * Math.sin(radians);
            
            return (
              <motion.div
                key={`tool-${orbitIndex}-${i}`}
                className={`absolute ${color} text-white p-2 rounded-full shadow-xl z-10`}
                initial={{ x, y, opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: 1,
                  scale: 1,
                  x: orbit.reverse 
                    ? [x, -y, -x, y, x] 
                    : [x, y, -x, -y, x],
                  y: orbit.reverse 
                    ? [y, x, -y, -x, y] 
                    : [y, -x, -y, x, y],
                }}
                transition={{
                  x: { 
                    duration: orbit.duration, 
                    repeat: Number.POSITIVE_INFINITY, 
                    ease: "linear",
                    delay: orbit.delay
                  },
                  y: { 
                    duration: orbit.duration, 
                    repeat: Number.POSITIVE_INFINITY, 
                    ease: "linear",
                    delay: orbit.delay
                  },
                  opacity: { duration: 0.8, delay: orbit.delay + (i * 0.1) },
                  scale: { duration: 0.8, delay: orbit.delay + (i * 0.1) }
                }}
                whileHover={{ scale: 1.2 }}
              >
                <div className="relative">
                  <Icon size={24} />
                  
                  {/* Tooltip on hover */}
                  <motion.div 
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0"
                    whileHover={{ opacity: 1, y: -5 }}
                  >
                    {name}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </React.Fragment>
      ))}
    </>
  );
};
