
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
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full profile-gradient p-1.5 shadow-2xl shadow-primary/20 devops-glow flex items-center justify-center">
          {/* Enhanced background elements */}
          <div className="absolute inset-0 rounded-full blur-xl opacity-50 profile-gradient"></div>
          
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
          
          <div className="absolute inset-0 rounded-full animate-pulse-slow opacity-70">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <linearGradient id="spinnerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={theme === 'dark' ? "#0078d7" : "#0078d7"} />
                  <stop offset="50%" stopColor={theme === 'dark' ? "#6554C0" : "#36B37E"} />
                  <stop offset="100%" stopColor={theme === 'dark' ? "#FF5630" : "#FF5630"} />
                </linearGradient>
              </defs>
              <path d="M100,10 A90,90 0 1,1 99.9,10" fill="none" stroke="url(#spinnerGradient)" strokeWidth="2" strokeDasharray="10 5" />
            </svg>
          </div>
          
          {/* Main content container */}
          <div className="relative w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden border border-white/10 dark:border-white/5">
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
            
            {/* Central DevOps logo */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="relative w-3/4 h-3/4 flex items-center justify-center">
                {/* Infinity symbol */}
                <motion.div
                  className="relative w-full h-full"
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
                  {/* DevOps infinity symbol base */}
                  <svg 
                    viewBox="0 0 100 50" 
                    width="100%" 
                    height="100%"
                    className="w-full h-full"
                  >
                    <defs>
                      <linearGradient id="devopsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={theme === 'dark' ? "#0078d7" : "#0078d7"} />
                        <stop offset="50%" stopColor={theme === 'dark' ? "#6554C0" : "#36B37E"} />
                        <stop offset="100%" stopColor={theme === 'dark' ? "#FF5630" : "#FF5630"} />
                      </linearGradient>
                      
                      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>
                    
                    {/* Main infinity path with glow */}
                    <motion.path
                      d="M25,25 C25,15 32,15 35,25 C38,35 45,35 45,25 M45,25 C45,15 52,15 55,25 C58,35 65,35 65,25"
                      fill="none"
                      stroke="url(#devopsGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      filter="url(#glow)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        pathLength: { duration: 3, delay: 0.2 },
                        opacity: { duration: 0.5 }
                      }}
                    />
                  </svg>
                  
                  {/* Animated particles along infinity path */}
                  {[0, 0.2, 0.4, 0.6, 0.8].map((offset, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute rounded-full"
                      animate={{
                        offsetDistance: [offset, offset + 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        ease: "linear",
                      }}
                      style={{
                        offsetPath: "path('M25,25 C25,15 32,15 35,25 C38,35 45,35 45,25 M45,25 C45,15 52,15 55,25 C58,35 65,35 65,25')",
                        offsetRotate: "auto 90deg",
                        width: (i % 2 === 0 ? 6 : 9) + 'px',
                        height: (i % 2 === 0 ? 6 : 9) + 'px',
                        backgroundColor: ['#0078d7', '#6554C0', '#36B37E', '#FF5630', '#00B8D9'][i],
                        boxShadow: `0 0 12px 3px ${['#0078d7', '#6554C0', '#36B37E', '#FF5630', '#00B8D9'][i]}`,
                      }}
                    />
                  ))}
                </motion.div>
                
                {/* DevOps text with professional styling */}
                <motion.div
                  className="absolute font-mono font-bold text-4xl sm:text-5xl lg:text-6xl"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ 
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.5
                  }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 dark:from-blue-400 dark:via-purple-400 dark:to-orange-400 filter drop-shadow-md">
                    DevOps
                  </span>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Surrounding icons representing DevOps tools */}
            <DevOpsToolIcons />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// DevOps Tool Icons that orbit around the main logo
const DevOpsToolIcons = () => {
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
