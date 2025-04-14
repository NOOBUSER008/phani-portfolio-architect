
import { motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";

// Define our skills with icons for visualization
const skillsData = [
  {
    category: "Cloud Platforms",
    flowDirection: "right",
    skills: [
      { name: "AWS", icon: "/assets/aws.svg" },
      { name: "Azure", icon: "/assets/azure.svg" },
    ]
  },
  {
    category: "Cloud Services",
    flowDirection: "left",
    skills: [
      { name: "EC2", icon: "/assets/ec2.svg" },
      { name: "Lambda", icon: "/assets/lambda.svg" },
      { name: "ECS", icon: "/assets/ecs.svg" },
      { name: "EKS", icon: "/assets/eks.svg" },
      { name: "S3", icon: "/assets/s3.svg" },
      { name: "CloudFront", icon: "/assets/cloudfront.svg" },
      { name: "API Gateway", icon: "/assets/api-gateway.svg" },
      { name: "Secrets Manager", icon: "/assets/secrets-manager.svg" },
      { name: "RDS", icon: "/assets/rds.svg" },
      { name: "LightSail", icon: "/assets/lightsail.svg" },
      { name: "Entra ID", icon: "/assets/entra-id.svg" },
      { name: "Azure VMs", icon: "/assets/azure-vm.svg" },
    ]
  },
  {
    category: "CI/CD Tools",
    flowDirection: "right",
    skills: [
      { name: "GitHub Actions", icon: "/assets/github-actions.svg" },
      { name: "Jenkins", icon: "/assets/jenkins.svg" },
    ]
  },
  {
    category: "Version Control System",
    flowDirection: "left",
    skills: [
      { name: "Git", icon: "/assets/git.svg" },
      { name: "GitHub", icon: "/assets/github.svg" },
    ]
  },
  {
    category: "Infrastructure as Code",
    flowDirection: "right",
    skills: [
      { name: "Terraform", icon: "/assets/terraform.svg" },
      { name: "CloudFormation", icon: "/assets/cloudformation.svg" },
    ]
  },
  {
    category: "Containerization",
    flowDirection: "left",
    skills: [
      { name: "Docker", icon: "/assets/docker.svg" },
      { name: "Kubernetes", icon: "/assets/kubernetes.svg" },
      { name: "ECS", icon: "/assets/ecs.svg" },
    ]
  },
  {
    category: "Scripting Languages",
    flowDirection: "right",
    skills: [
      { name: "Bash", icon: "/assets/bash.svg" },
      { name: "Python", icon: "/assets/python.svg" },
    ]
  },
  {
    category: "Monitoring & Logging",
    flowDirection: "left",
    skills: [
      { name: "Prometheus", icon: "/assets/prometheus.svg" },
      { name: "Grafana", icon: "/assets/grafana.svg" },
      { name: "CloudWatch", icon: "/assets/cloudwatch.svg" },
      { name: "PagerDuty", icon: "/assets/pagerduty.svg" },
    ]
  },
  {
    category: "Ticketing Tools",
    flowDirection: "right",
    skills: [
      { name: "JIRA", icon: "/assets/jira.svg" },
    ]
  },
  {
    category: "Security Tools",
    flowDirection: "left",
    skills: [
      { name: "AWS Security Hub", icon: "/assets/security-hub.svg" },
      { name: "Microsoft Sentinel", icon: "/assets/sentinel.svg" },
      { name: "Defender for Cloud", icon: "/assets/defender.svg" },
      { name: "Wazuh", icon: "/assets/wazuh.svg" },
      { name: "Prowler", icon: "/assets/prowler.svg" },
    ]
  },
  {
    category: "Operating Systems",
    flowDirection: "right",
    skills: [
      { name: "Linux (Amazon Linux, Ubuntu, RHEL)", icon: "/assets/linux.svg" },
      { name: "Windows", icon: "/assets/windows.svg" },
    ]
  }
];

export default function SkillsSection() {
  // Animation variants for staggered animations
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

  const marqueeVariants = {
    animate: (direction: string) => ({
      x: direction === 'right' ? [0, -1000] : [-1000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear"
        }
      }
    })
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center space-y-2 mb-12">
          <h2 className="heading-lg">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            My technical toolkit includes a wide range of DevOps and cloud technologies
          </p>
        </div>

        <div className="space-y-16">
          {skillsData.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`${categoryIndex % 2 === 0 ? '' : 'bg-secondary/30'} p-6 rounded-lg`}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="heading-sm">{category.category}</h3>
                <ArrowLeftRight className={`h-5 w-5 ${category.flowDirection === 'right' ? 'text-primary' : 'rotate-180 text-primary'}`} />
              </div>
              
              <div className="overflow-hidden">
                <motion.div 
                  className="flex gap-4"
                  variants={marqueeVariants}
                  animate="animate"
                  custom={category.flowDirection}
                  style={{
                    display: "flex",
                    width: "fit-content",
                    minWidth: "100%"
                  }}
                >
                  {/* Double the items to create a continuous flow effect */}
                  {[...category.skills, ...category.skills].map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      className="bg-card p-4 rounded-lg shadow-sm flex flex-col items-center justify-center text-center card-hover min-w-24"
                      variants={itemVariants}
                    >
                      <div className="w-12 h-12 mb-3 flex-center">
                        {/* Fallback icon if image doesn't load */}
                        <div className="bg-primary/20 w-full h-full rounded-full flex-center">
                          <span className="text-primary font-bold text-lg">
                            {skill.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm font-medium">{skill.name}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
