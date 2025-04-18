export const siteConfig = {
  // Basic info
  name: "Phani Mathangi",
  title: "Senior DevOps Engineer",
  description: "Specializing in infrastructure management, automation, and cloud security with over 4 years of experience.",
  profileImage: "/lovable-uploads/db51e5ab-c509-4b43-bf46-417c9d9b26b4.png", // Set to empty string to use initials
  resumePath: "/assets/phani_mathangi_resume.pdf",
  
  // Contact info
  contact: {
    phone: "+917989009317",
    email: "phanimathangi98@gmail.com",
    linkedin: "linkedin/phani-mathangi",
    website: "phani.mathangi.in",
  },
  
  // Theme settings
  theme: {
    defaultTheme: "system", // "light", "dark", or "system"
    colorScheme: "blue", // Options: "blue", "purple", "teal", "green", "orange"
  },
  
  // Section visibility and order configuration
  sections: {
    // Visibility toggles
    showHero: true,
    showAbout: true,
    showSkills: true,
    showExperience: true,
    showProjects: true,
    showCertifications: true,
    showAchievements: true,
    showResume: true,
    showContact: true,
    
    // Section order - Put hero first
    order: [
      "hero",
      "about",
      "skills", 
      "experience",
      "projects",
      "certifications", 
      "resume",
      "contact"
    ]
  },

  // About section
  about: {
    title: "About Me",
    description: "Experienced DevOps Engineer with 4+ years, specializing in end-to-end infrastructure management, automation, and cloud security. Skilled in CI/CD pipeline development, deployment automation, and containerized workloads. Designed cloud architectures on AWS with a focus on cost optimization, scalability, and high availability. Knowledgeable in compliance standards enabling secure and audit-ready DevOps practices.",
    education: {
      degree: "B. Tech",
      institution: "VR Siddhartha Engineering college",
      period: "Completed",
    },
    highlights: [
      {
        title: "CI/CD Expertise",
        description: "Streamlined deployment processes with automated workflows using GitHub Actions and Jenkins.",
        icon: "Code" // Corresponds to Lucide icon names
      },
      {
        title: "Cloud Architecture",
        description: "Designed resilient, secure cloud infrastructure focusing on cost optimization and high availability.",
        icon: "Cloud"
      },
      {
        title: "Container Orchestration",
        description: "Managed containerized applications through Docker, Kubernetes (EKS), and ECS.",
        icon: "ServerCog"
      }
    ]
  },
  
  // Skills categories with icons
  skillsCategories: [
    {
      name: "Cloud & Infrastructure",
      icon: "Cloud",
      iconColor: "text-devops-blue",
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
      icon: "ServerCog",
      iconColor: "text-devops-green",
      skills: [
        { name: "Docker", level: "Expert" },
        { name: "Kubernetes (EKS)", level: "Advanced" },
        { name: "ECS", level: "Expert" },
      ]
    },
    {
      name: "CI/CD & Version Control",
      icon: "GitBranchPlus",
      iconColor: "text-devops-orange",
      skills: [
        { name: "GitHub Actions", level: "Expert" },
        { name: "Jenkins", level: "Advanced" },
        { name: "Git", level: "Expert" },
        { name: "GitHub", level: "Expert" },
      ]
    },
    {
      name: "Infrastructure as Code",
      icon: "FileCode",
      iconColor: "text-devops-purple",
      skills: [
        { name: "Terraform", level: "Expert" },
        { name: "CloudFormation", level: "Advanced" },
      ]
    },
    {
      name: "Monitoring & Logging",
      icon: "MonitorCheck",
      iconColor: "text-devops-lightblue",
      skills: [
        { name: "Prometheus", level: "Advanced" },
        { name: "Grafana", level: "Advanced" },
        { name: "CloudWatch", level: "Expert" },
        { name: "PagerDuty", level: "Intermediate" },
      ]
    },
    {
      name: "Security & Compliance",
      icon: "ShieldCheck",
      iconColor: "text-destructive",
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
      icon: "Terminal",
      iconColor: "text-primary",
      skills: [
        { name: "Bash", level: "Expert" },
        { name: "Python", level: "Advanced" },
      ]
    },
    {
      name: "Operating Systems",
      icon: "Code",
      iconColor: "text-devops-navy",
      skills: [
        { name: "Linux (Amazon Linux, Ubuntu, RHEL)", level: "Expert" },
        { name: "Windows", level: "Advanced" },
      ]
    }
  ],
  
  // Experience 
  experience: [
    {
      company: "Caretcloud Technologies",
      position: "Senior DevOps Engineer",
      period: "Sep 2023 - Present",
      current: true,
      description: "Leading DevOps practices, implementing cloud infrastructure, and ensuring CI/CD automation."
    },
    {
      company: "Wipro",
      position: "DevOps Engineer",
      period: "April 2022 - Feb 2023",
      current: false,
      description: "Managed deployment pipelines and infrastructure for enterprise clients."
    },
    {
      company: "Tech well IT solutions",
      position: "Build and Release Engineer",
      period: "Jan 2020 - March 2022",
      current: false,
      description: "Handled build and deployment processes, ensuring smooth delivery of software products."
    }
  ],
  
  // Key responsibilities for experience section
  keyResponsibilities: [
    "Infrastructure management and automation",
    "CI/CD pipeline development",
    "Cloud architecture design",
    "Containerization with Docker and Kubernetes",
    "Security implementation and compliance",
    "Cost optimization strategies",
    "High-availability systems design",
    "Monitoring and alerting setup",
    "Infrastructure as Code development",
    "Team collaboration and knowledge sharing"
  ],
  
  // Projects
  projects: [
    {
      name: "redOrange.ai",
      role: "Senior DevOps Engineer",
      description: "AI-powered SaaS security and risk management platform designed to protect SaaS applications from cyber threats and ensure compliance by automating evidence collection.",
      achievements: [
        "Architected and deployed multi-environment AWS infrastructure with a focus on cost optimization and security",
        "Developed CI/CD pipelines using GitHub Actions, reducing deployment time",
        "Created fully automated Terraform modules to provision complete infrastructure within 2 hours in any AWS region",
        "Integrated AWS Global Accelerator and CloudFront with ALB to reduce latency",
        "Implemented Lambda-based traffic handling to offload backend services",
        "Automated shutdown/startup of dev and staging environments, saving up to 40% in costs",
        "Configured long-term log storage strategy using S3 Glacier",
        "Enhanced VPC architecture with VPC endpoints for internal services",
        "Configured S3 and CloudFront for secure static website hosting",
        "Managed containerized microservices on ECS across environments",
        "Built a robust monitoring stack using CloudWatch, AWS Managed Grafana, and PagerDuty"
      ]
    },
    {
      name: "Lisha.ai",
      role: "DevOps Engineer",
      description: "AI-powered compliance assistant that automates evidence collection, detects compliance drift in real time, and streamlines continuous compliance across cloud and SaaS environments.",
      achievements: [
        "Engineered secure, multi-tenant AWS infrastructure ensuring high availability and data isolation",
        "Built and maintained CI/CD pipelines using GitHub Actions",
        "Deployed and managed Auto Scaling EC2 instances, including GPU-based workloads",
        "Managed ECS-based containerized services for OpenAI and Gemini AI",
        "Developed centralized audit logging and artifact storage using S3, IAM access policies, and lifecycle rules"
      ]
    },
    {
      name: "Flash, FDA/FDI - BNP Paribas",
      role: "DevOps Engineer",
      description: "Support for a leading French banking group operating in 72 countries, offering retail and investment banking services.",
      achievements: [
        "Deployed Java-based applications across multiple environments with minimal downtime",
        "Collaborated with development teams to support simultaneous feature releases",
        "Configured application servers and supporting infrastructure",
        "Created Jenkins pipeline jobs tailored to application stack requirements",
        "Integrated SonarQube for static code analysis",
        "Deployed applications on Amazon EKS, including Kubernetes manifests and Helm charts",
        "Supported weekend production deployments coordinating with onsite teams"
      ]
    }
  ],
  
  // Certifications
  certifications: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "2022",
      credentialId: "AWS-1234567",
      url: "https://www.credly.com/badges/example",
      description: "Validates the ability to design and implement distributed systems on AWS"
    },
    {
      name: "Terraform Associate",
      issuer: "HashiCorp",
      date: "2022",
      credentialId: "HC-1234567",
      url: "https://www.credly.com/badges/example",
      description: "Validates understanding of infrastructure as code using HashiCorp Terraform"
    },
    {
      name: "Microsoft Certified: Azure Administrator Associate",
      issuer: "Microsoft",
      date: "2023",
      credentialId: "MS-7654321",
      url: "https://www.credly.com/badges/example",
      description: "Validates the skills to implement, manage, and monitor an organization's Azure environment"
    }
  ],
  
  // Achievements
  achievements: [
    {
      title: "Cost Optimization Champion",
      description: "Reduced cloud infrastructure costs by 40% through automated environment management",
      date: "2023"
    },
    {
      title: "Automation Excellence Award",
      description: "Developed CI/CD pipelines that reduced deployment time by 70%",
      date: "2022"
    },
    {
      title: "Security Compliance Leader",
      description: "Led implementation of security best practices resulting in successful ISO 27001 certification",
      date: "2022"
    }
  ],
  
  // Resume section
  resume: {
    title: "Resume",
    subtitle: "Download my resume to learn more about my qualifications and experience"
  },
  
  // Contact section
  contactSection: {
    title: "Get In Touch",
    subtitle: "Feel free to reach out to discuss opportunities or collaborations",
    formTitle: "Send a Message",
    formLabels: {
      name: "Full Name*",
      email: "Email*",
      subject: "Subject",
      message: "Message*",
      submitButton: "Send Message"
    },
    connectionCard: {
      title: "Let's Connect",
      description: "I'm always open to discussing new projects, opportunities, or partnerships."
    },
    contactInfo: {
      title: "Contact Information"
    }
  }
}
