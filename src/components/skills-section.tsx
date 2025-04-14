
import { motion } from "framer-motion";
import { 
  Cloud, Database, GitBranchPlus, Code, MonitorCheck, 
  ShieldCheck, ServerCog, Terminal, FileCode, AlertTriangle 
} from "lucide-react";

// Reorganized skills by category with icons for better visual recognition
const skillsCategories = [
  {
    name: "Cloud & Infrastructure",
    icon: <Cloud className="h-6 w-6 text-devops-blue" />,
    skills: [
      { name: "AWS", level: "Expert" },
      { name: "Azure", level: "Intermediate" },
      { name: "EC2", level: "Expert" },
      { name: "Lambda", level: "Expert" },
      { name: "S3", level: "Expert" },
      { name: "CloudFront", level: "Advanced" },
      { name: "API Gateway", level: "Advanced" },
      { name: "RDS", level: "Advanced" },
      { name: "LightSail", level: "Intermediate" },
    ]
  },
  {
    name: "Containerization & Orchestration",
    icon: <ServerCog className="h-6 w-6 text-devops-green" />,
    skills: [
      { name: "Docker", level: "Expert" },
      { name: "Kubernetes (EKS)", level: "Advanced" },
      { name: "ECS", level: "Expert" },
    ]
  },
  {
    name: "CI/CD & Version Control",
    icon: <GitBranchPlus className="h-6 w-6 text-devops-orange" />,
    skills: [
      { name: "GitHub Actions", level: "Expert" },
      { name: "Jenkins", level: "Advanced" },
      { name: "Git", level: "Expert" },
      { name: "GitHub", level: "Expert" },
    ]
  },
  {
    name: "Infrastructure as Code",
    icon: <FileCode className="h-6 w-6 text-devops-purple" />,
    skills: [
      { name: "Terraform", level: "Expert" },
      { name: "CloudFormation", level: "Advanced" },
    ]
  },
  {
    name: "Monitoring & Logging",
    icon: <MonitorCheck className="h-6 w-6 text-devops-lightblue" />,
    skills: [
      { name: "Prometheus", level: "Advanced" },
      { name: "Grafana", level: "Advanced" },
      { name: "CloudWatch", level: "Expert" },
      { name: "PagerDuty", level: "Intermediate" },
    ]
  },
  {
    name: "Security & Compliance",
    icon: <ShieldCheck className="h-6 w-6 text-destructive" />,
    skills: [
      { name: "AWS Security Hub", level: "Advanced" },
      { name: "Microsoft Sentinel", level: "Intermediate" },
      { name: "Defender for Cloud", level: "Intermediate" },
      { name: "Wazuh", level: "Intermediate" },
      { name: "Prowler", level: "Advanced" },
      { name: "ISO 27001, PCI-DSS, GDPR", level: "Advanced" },
    ]
  },
  {
    name: "Scripting & Development",
    icon: <Terminal className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Bash", level: "Expert" },
      { name: "Python", level: "Advanced" },
    ]
  },
  {
    name: "Operating Systems",
    icon: <Code className="h-6 w-6 text-devops-navy" />,
    skills: [
      { name: "Linux (Amazon Linux, Ubuntu, RHEL)", level: "Expert" },
      { name: "Windows", level: "Advanced" },
    ]
  }
];

// Function to determine skill level badge color
const getSkillLevelColor = (level) => {
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
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <div className="text-center space-y-2 mb-12">
          <h2 className="heading-lg">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            My technical toolkit spans DevOps, cloud infrastructure, and security
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className={`p-6 rounded-xl border ${index % 2 === 0 ? 'bg-card' : 'bg-secondary/20'}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  {category.icon}
                </div>
                <h3 className="heading-sm">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill) => (
                  <span 
                    key={skill.name}
                    className={`text-xs px-2 py-1 rounded-full ${getSkillLevelColor(skill.level)} inline-flex items-center gap-1`}
                  >
                    {skill.name}
                    <span className="w-2 h-2 rounded-full bg-current opacity-70 ml-1"></span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
