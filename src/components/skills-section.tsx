
import React from 'react';
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { siteConfig } from "@/config/site-config";

// Type for dynamically rendering Lucide icons
type IconName = keyof typeof LucideIcons;

// Function to determine skill level badge color
const getSkillLevelColor = (level: string) => {
  switch(level) {
    case "Expert":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
    case "Advanced":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400";
  }
};

export default function SkillsSection() {
  // If the section is disabled in config, don't render anything
  if (!siteConfig.sections.showSkills) return null;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section 
      id="skills" 
      className="py-16 md:py-24 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-container">
        <motion.div 
          className="text-center space-y-2 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg">Technical Skills</h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            My technical toolkit spans DevOps, cloud infrastructure, and security
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {siteConfig.skillsCategories.map((category, index) => {
            // Safely get the correct Lucide icon component
            let IconComponent = null;
            
            if (category.icon && typeof category.icon === 'string') {
              const iconName = category.icon as IconName;
              // Check if the icon exists in Lucide
              if (LucideIcons[iconName]) {
                IconComponent = LucideIcons[iconName];
              }
            }
            
            return (
              <motion.div
                key={category.name}
                className={`p-6 rounded-xl border ${index % 2 === 0 ? 'bg-card' : 'bg-secondary/20'}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  transition: { duration: 0.2 } 
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className="p-2 rounded-lg bg-primary/10"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {IconComponent && React.createElement(IconComponent, { 
                      className: category.iconColor, 
                      width: 24, 
                      height: 24 
                    })}
                  </motion.div>
                  <h3 className="heading-sm">{category.name}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span 
                      key={skill.name}
                      className={`text-xs px-2 py-1 rounded-full ${getSkillLevelColor(skill.level)} inline-flex items-center gap-1`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * skillIndex, duration: 0.3 }}
                    >
                      {skill.name}
                      <span className="w-2 h-2 rounded-full bg-current opacity-70 ml-1"></span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
