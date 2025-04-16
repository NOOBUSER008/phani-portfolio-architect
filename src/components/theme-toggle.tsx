
"use client"

import { Moon, Sun, Infinity } from "lucide-react"
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
      {/* Animated background glow effect */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        animate={{
          background: theme === "dark" 
            ? "radial-gradient(circle at center, rgba(0, 100, 255, 0.6) 0%, rgba(0, 0, 50, 0) 70%)" 
            : "radial-gradient(circle at center, rgba(255, 215, 0, 0.6) 0%, rgba(255, 255, 255, 0) 70%)"
        }}
        transition={{ duration: 0.6 }}
      />
      
      {/* DevOps Infinity Symbol */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
        animate={{
          rotate: [0, 360],
          scale: [0.9, 1.1, 0.9]
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, repeatType: "loop", ease: "linear" },
          scale: { duration: 8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }
        }}
      >
        <Infinity className="w-7 h-7 text-primary" />
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
            repeatType: "loop",
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
            repeatType: "loop",
            delay: i * 0.3
          }}
        />
      ))}
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
