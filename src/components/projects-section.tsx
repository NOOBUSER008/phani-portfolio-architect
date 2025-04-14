
import { motion } from "framer-motion"

const projectsData = [
  {
    name: "redOrange.ai",
    role: "Senior DevOps Engineer",
    description: "RedOrange.ai is an AI-powered SaaS security and risk management platform designed to protect SaaS applications from cyber threats and ensure compliance by automating evidence collection and delivering real-time security and compliance. It focuses on SaaS security, user access management, and regulatory compliance.",
    responsibilities: [
      "Architected and deployed multi-environment AWS infrastructure (dev, staging, production) with a strong focus on cost optimization, high availability, and security best practices.",
      "Developed CI/CD pipelines using GitHub Actions, reducing deployment time and ensuring consistent releases.",
      "Created fully automated Terraform modules to provision the complete infrastructure within 2 hours in any AWS region, enabling multi-region deployments to meet compliance and data residency requirements.",
      "Integrated AWS Global Accelerator and CloudFront with ALB to significantly reduce product access latency across geographic regions.",
      "Implemented Lambda-based traffic handling to offload backend services, resulting in improved performance and reduced compute costs.",
      "Automated the shutdown/startup of dev and staging environments during idle periods, saving up to 40% in infrastructure costs.",
      "Configured long-term log storage strategy by archiving logs over 90 days to S3 Glacier, reducing CloudWatch retention costs.",
      "Enhanced VPC architecture by implementing VPC endpoints for internal services, improving security posture and minimizing data transfer costs.",
      "Configured S3 and CloudFront for secure, high-speed static website hosting, improving global content delivery.",
      "Managed containerized microservices on ECS across environments, using internal/external ALBs for controlled traffic routing and isolation.",
      "Built a robust monitoring and alerting stack using CloudWatch, AWS Managed Grafana, and PagerDuty, ensuring maximum uptime and fast issue resolution."
    ]
  },
  {
    name: "Lisha.ai",
    role: "DevOps Engineer",
    description: "Lisha.ai is an AI-powered compliance assistant that automates evidence collection, detects compliance drift in real time, and streamlines continuous compliance across cloud and SaaS environments.",
    responsibilities: [
      "Engineered secure, multi-tenant AWS infrastructure for Lisha.ai's compliance automation platform, ensuring high availability, data isolation, and audit readiness.",
      "Built and maintained CI/CD pipelines using GitHub Actions, enabling rapid deployment of microservices and infrastructure components.",
      "Deployed and managed Auto Scaling EC2 instances, including GPU-based workloads, to support compute-intensive AI functions with zero downtime.",
      "Managed ECS-based containerized services for OpenAI and Gemini AI, isolated with private load balancers for internal-only access and strict traffic segmentation.",
      "Developed centralized audit logging and artifact storage using S3, IAM access policies, and lifecycle rules, ensuring long-term retention and controlled access."
    ]
  },
  {
    name: "Flash, FDA/FDI (BNP Paribas)",
    role: "DevOps Engineer",
    description: "BNP Paribas, a leading French banking group and the world's 8th largest by assets, operates in 72 countries, offering retail and investment banking services.",
    responsibilities: [
      "Deployed Java-based applications across IST, UAT, and PPD environments, ensuring release consistency and minimal downtime.",
      "Collaborated with multiple development teams to support simultaneous feature releases across environments.",
      "Installed, configured, and monitored application servers and supporting infrastructure, including patching, upgrades, and performance tuning.",
      "Created Jenkins pipeline jobs tailored to application stack requirements, streamlining the build and release process.",
      "Integrated SonarQube for static code analysis to ensure code quality and compliance during build stages.",
      "Deployed applications on Amazon EKS, including updating Kubernetes manifests, modifying Helm charts, and troubleshooting pod-level deployment issues during release activities.",
      "Actively supported weekend production deployments, coordinating closely with onsite teams to validate rollout success and rollback readiness."
    ]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center space-y-2 mb-12">
          <h2 className="heading-lg">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Key projects showcasing my DevOps and cloud engineering expertise
          </p>
        </div>
        
        <div className="space-y-16">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Project Visual */}
              <div className="w-full md:w-2/5">
                <div className={`w-full aspect-video rounded-lg bg-gradient-to-br ${
                  index === 0 ? 'from-devops-blue to-devops-purple' : 
                  index === 1 ? 'from-devops-green to-devops-blue' : 
                  'from-devops-orange to-devops-purple'
                } flex items-center justify-center p-8`}>
                  <h3 className="text-3xl font-bold text-white text-center">{project.name}</h3>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="w-full md:w-3/5">
                <div className="bg-card rounded-lg shadow-md p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <h3 className="heading-md">{project.name}</h3>
                    <span className="text-muted-foreground font-medium mt-2 sm:mt-0">{project.role}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {project.responsibilities.slice(0, 5).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
