
"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 rounded-full transition-all relative overflow-hidden border-primary/20 devops-glow"
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        animate={{
          background: theme === "dark" 
            ? "radial-gradient(circle at center, rgba(0, 100, 255, 0.6) 0%, rgba(0, 0, 50, 0) 70%)" 
            : "radial-gradient(circle at center, rgba(255, 215, 0, 0.6) 0%, rgba(255, 255, 255, 0) 70%)"
        }}
      />
      
      {/* DevOps Infinity Symbol */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none"
        animate={{
          rotate: [0, 360],
          scale: [0.9, 1.1, 0.9]
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg
          width="40"
          height="20"
          viewBox="0 0 40 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
        >
          <defs>
            <linearGradient id="infinityGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={theme === "dark" ? "#61dafb" : "#0078d7"} />
              <stop offset="100%" stopColor={theme === "dark" ? "#6554C0" : "#36B37E"} />
            </linearGradient>
            <linearGradient id="infinityGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={theme === "dark" ? "#6554C0" : "#6554C0"} />
              <stop offset="100%" stopColor={theme === "dark" ? "#FF5630" : "#FF5630"} />
            </linearGradient>
          </defs>
          <motion.path
            d="M10,10 C10,6 15,6 15,10 C15,14 20,14 20,10"
            stroke="url(#infinityGradient1)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M20,10 C20,6 25,6 25,10 C25,14 30,14 30,10"
            stroke="url(#infinityGradient2)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.path
            d="M15,10 C15,6 10,6 10,10"
            stroke="url(#infinityGradient1)"
            strokeDasharray="0 1"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, strokeDasharray: "0 1" }}
            animate={{ pathLength: 1, strokeDasharray: "1 0" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.path
            d="M30,10 C30,6 25,6 25,10"
            stroke="url(#infinityGradient2)"
            strokeDasharray="0 1"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, strokeDasharray: "0 1" }}
            animate={{ pathLength: 1, strokeDasharray: "1 0" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 3
            }}
          />
        </svg>
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === "dark" ? 0 : -90,
          opacity: theme === "dark" ? 1 : 0,
          scale: theme === "dark" ? 1 : 0 
        }}
        transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="h-[1.2rem] w-[1.2rem] text-blue-200" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === "light" ? 0 : 90,
          opacity: theme === "light" ? 1 : 0,
          scale: theme === "light" ? 1 : 0 
        }}
        transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] text-amber-500" />
      </motion.div>
      
      {/* Animated rays/dots */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((degree, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary"
          initial={false}
          animate={{
            opacity: theme === "light" ? [0.4, 1, 0.4] : 0,
            x: theme === "light" ? `${Math.cos(degree * Math.PI / 180) * 14}px` : 0,
            y: theme === "light" ? `${Math.sin(degree * Math.PI / 180) * 14}px` : 0,
            scale: theme === "light" ? [0.8, 1.2, 0.8] : 0
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            delay: i * 0.15
          }}
        />
      ))}
      
      {/* Stars for dark mode */}
      {[1, 2, 3, 4, 5].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-0.5 h-0.5 rounded-full bg-white"
          initial={false}
          animate={{
            opacity: theme === "dark" ? [0.2, 1, 0.2] : 0,
            x: theme === "dark" ? `${Math.random() * 14 - 7}px` : 0,
            y: theme === "dark" ? `${Math.random() * 14 - 7}px` : 0,
            scale: theme === "dark" ? [0.8, 1.2, 0.8] : 0
          }}
          transition={{ 
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3
          }}
        />
      ))}
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
