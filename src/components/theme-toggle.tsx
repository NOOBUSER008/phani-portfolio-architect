
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
      className="w-10 h-10 rounded-full transition-all relative overflow-hidden border-primary/20"
      aria-label="Toggle theme"
    >
      {/* Professional gradient background effect */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        animate={{
          background: theme === "dark" 
            ? "radial-gradient(circle at center, rgba(59,130,246,0.6) 0%, rgba(0,0,50,0) 70%)" 
            : "radial-gradient(circle at center, rgba(96,165,250,0.6) 0%, rgba(255,255,255,0) 70%)"
        }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Professional tech animation - subtle circuit pattern */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 20, 
          repeat: Number.POSITIVE_INFINITY, 
          repeatType: "loop", 
          ease: "linear"
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
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
        <Moon className="h-[1.2rem] w-[1.2rem] text-blue-300" />
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
      
      {/* Professional subtle rays - light mode only */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((degree, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 rounded-full bg-amber-500"
          initial={false}
          animate={{
            opacity: theme === "light" ? [0.4, 0.8, 0.4] : 0,
            x: theme === "light" ? `${Math.cos(degree * Math.PI / 180) * 14}px` : "0px",
            y: theme === "light" ? `${Math.sin(degree * Math.PI / 180) * 14}px` : "0px",
            scale: theme === "light" ? [0.8, 1, 0.8] : 0
          }}
          transition={{ 
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: i * 0.1
          }}
        />
      ))}
      
      {/* Professional subtle stars - dark mode only */}
      {[0, 72, 144, 216, 288].map((degree, i) => {
        const radius = 10 + (i % 2) * 4;
        return (
          <motion.div
            key={`star-${i}`}
            className="absolute w-0.5 h-0.5 rounded-full bg-blue-200"
            initial={false}
            animate={{
              opacity: theme === "dark" ? [0.3, 0.8, 0.3] : 0,
              x: theme === "dark" ? `${Math.cos(degree * Math.PI / 180) * radius}px` : "0px",
              y: theme === "dark" ? `${Math.sin(degree * Math.PI / 180) * radius}px` : "0px"
            }}
            transition={{ 
              duration: 2 + i,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop"
            }}
          />
        );
      })}
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
