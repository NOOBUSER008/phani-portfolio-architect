
"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const isMobile = useIsMobile()

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
      
      // Update active section
      const sections = navItems.map(item => item.href.substring(1))
      
      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (!section) continue
        
        const rect = section.getBoundingClientRect()
        if (rect.top <= 150) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled || isMenuOpen
          ? "bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0 font-bold text-xl">
            <a 
              href="#home" 
              className="text-foreground group flex items-center"
            >
              <span className="relative">
                Phani<span className="text-primary">.</span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary rounded-full"
                  animate={{ width: activeSection === "home" ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </span>
              <motion.div 
                className="ml-2 text-primary opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                initial={false}
              >
                DevOps
              </motion.div>
            </a>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors font-medium text-sm relative",
                  activeSection === item.href.substring(1) && "text-foreground"
                )}
              >
                <span className="relative">
                  {item.name}
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary rounded-full"
                    animate={{ width: activeSection === item.href.substring(1) ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </a>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              className="transition-transform duration-300 hover:bg-primary/10"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-1 px-4 pt-2 pb-4 bg-background/95 backdrop-blur-sm">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.03, x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a
                    href={item.href}
                    className={cn(
                      "block px-3 py-2 rounded-md transition-colors relative overflow-hidden",
                      activeSection === item.href.substring(1)
                        ? "text-primary font-medium bg-primary/10"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="relative z-10">
                      {item.name}
                    </div>
                    {activeSection === item.href.substring(1) && (
                      <motion.div 
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 h-0.5 bg-primary w-1/3 ml-3"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
