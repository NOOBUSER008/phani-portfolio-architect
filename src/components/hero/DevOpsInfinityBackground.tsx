
import { motion } from "framer-motion";

export const DevOpsInfinityBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
      <motion.div 
        className="w-full h-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-full max-w-[700px] h-[500px]">
          {/* DevOps Infinity Symbol - Created programmatically */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            animate={{ 
              rotate: 360,
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{ 
              rotate: { duration: 60, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "linear" },
              scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "easeInOut" }
            }}
          >
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 500 250" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-full"
            >
              {/* Left loop of infinity */}
              <motion.path
                d="M125,125 C125,80 175,80 175,125 C175,170 225,170 225,125"
                stroke="url(#gradient1)"
                strokeWidth="12"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              />
              
              {/* Right loop of infinity */}
              <motion.path
                d="M225,125 C225,80 275,80 275,125 C275,170 325,170 325,125"
                stroke="url(#gradient2)"
                strokeWidth="12"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 2.5
                }}
              />
              
              {/* DevOps text along the path */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0078d7" />
                  <stop offset="100%" stopColor="#36B37E" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6554C0" />
                  <stop offset="100%" stopColor="#FF5630" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          
          {/* Animated particle dots along the infinity path */}
          {[0, 60, 120, 180, 240, 300].map((degree, index) => (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2 h-3 w-3 md:h-4 md:w-4 rounded-full"
              initial={{ 
                x: Math.cos(degree * (Math.PI / 180)) * 100, 
                y: Math.sin(degree * (Math.PI / 180)) * 60 
              }}
              animate={{
                x: [
                  Math.cos(degree * (Math.PI / 180)) * 100,
                  Math.cos((degree + 120) * (Math.PI / 180)) * 100,
                  Math.cos((degree + 240) * (Math.PI / 180)) * 100,
                  Math.cos(degree * (Math.PI / 180)) * 100
                ],
                y: [
                  Math.sin(degree * (Math.PI / 180)) * 60,
                  Math.sin((degree + 120) * (Math.PI / 180)) * 60,
                  Math.sin((degree + 240) * (Math.PI / 180)) * 60,
                  Math.sin(degree * (Math.PI / 180)) * 60
                ],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 8, 
                repeat: Number.POSITIVE_INFINITY, 
                repeatType: "loop",
                ease: "linear",
                delay: index * 0.5
              }}
              style={{ 
                backgroundColor: ['#0078d7', '#6554C0', '#36B37E', '#FF5630', '#00B8D9', '#6554C0'][index],
                boxShadow: `0 0 10px 2px ${['#0078d7', '#6554C0', '#36B37E', '#FF5630', '#00B8D9', '#6554C0'][index]}`
              }}
            />
          ))}

          {/* DevOps text in the middle */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0.5, 0.8, 0.5], scale: [0.9, 1, 0.9] }}
            transition={{ 
              duration: 4, 
              repeat: Number.POSITIVE_INFINITY, 
              repeatType: "loop", 
              ease: "easeInOut" 
            }}
          >
            <div className="font-mono font-bold text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-300 dark:from-blue-400 dark:via-purple-400 dark:to-blue-200">
              DevOps
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
