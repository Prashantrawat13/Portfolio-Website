/* ============================================================
   DATA FILE — this is the ONLY file you should need to edit
   to add new projects, certifications, or blog posts.

   HOW TO ADD A PROJECT / CERTIFICATION / POST:
   Copy one block inside the matching array below, paste it as
   a new entry, and change the values.

   HOW TO ADD YOUR PHOTO:
   Replace profile.photo with a path to your image, e.g.
   "photo.jpg" (put the image file in this same folder).
   Leave it as "" to keep the placeholder initials avatar.
   ============================================================ */

const SITE_DATA = {

  profile: {
    name: "Prashant Rawat",
    initials: "PR",
    photo: "", // e.g. "photo.jpg" — put the image file in this folder
    role: "Cloud & DevOps Engineer",
    location: "Noida, Uttar Pradesh, India",
    tagline: "From Economics & Political Science to AWS & Kubernetes — building in public.",
    summary: "Proactive Cloud and DevOps fresher with hands-on experience in AWS infrastructure automation, CI/CD pipelines, and containerized application deployment. Strong foundation in Infrastructure as Code (Terraform), Linux environments, and scripting — transitioning into cloud after a Bachelor's in Arts (Economics, History, Political Science).",
    email: "prashantrawat733@gmail.com",
    phone: "+91 7300762003",
    resumeFile: "resume.pdf", // put your resume PDF in this folder with this name
    socials: {
      linkedin: "#",
      github: "#",
      instagram: "#",
      youtube: "#"
    }
  },

  skills: {
    "Cloud (AWS)": ["EC2", "S3", "VPC", "IAM", "RDS", "Route 53", "ALB/NLB", "Auto Scaling", "CloudFront", "DynamoDB", "ACM", "KMS", "Secrets Manager", "WAF", "CloudWatch", "CloudTrail", "SQS", "SNS", "CloudFormation"],
    "Infrastructure as Code": ["Terraform (Modules, Workspaces, Remote State)", "HCL", "CloudFormation"],
    "DevOps & Containers": ["Docker", "Kubernetes", "Ansible", "Jenkins", "GitHub Actions", "CircleCI", "NGINX"],
    "Version Control": ["Git", "GitHub", "GitLab"],
    "Programming & Scripting": ["Python", "SQL", "C++", "Bash", "AWS CLI", "Flask", "MongoDB"],
    "OS & Networking": ["Linux", "Windows", "Networking Fundamentals"]
  },

  experience: [
    {
      title: "DevOps Intern — Project Based Internship",
      org: "Elevate Labs (Remote)",
      period: "Oct 2025 – Dec 2025",
      points: [
        "Completed 8+ hands-on projects covering AWS infrastructure automation, containerization, orchestration, and CI/CD tooling.",
        "Translated business specifications and technical documentation into fully working, production-style cloud infrastructure.",
        "Gained end-to-end experience in root-cause debugging and integrating multiple DevOps tools into repeatable workflows."
      ]
    },
    {
      title: "DevOps Trainee (Offline)",
      org: "4Achievers",
      period: "Oct 2025 – Mar 2026",
      points: [
        "Git, Linux, Kubernetes, Docker, Ansible, CI/CD & Cloud Deployment with industry-level project exposure."
      ]
    }
  ],

  education: [
    { title: "Master of Computer Applications (AI/ML)", org: "Lovely Professional University (Distance Learning)", period: "2025 – Pursuing" },
    { title: "Bachelor of Arts — Economics", org: "Kumaun University", period: "2021 – 2024" }
  ],

  /* ---------------- CERTIFICATIONS ---------------- */
  certifications: [
    { title: "AWS Cloud Practitioner Essentials", issuer: "AWS", year: "" },
    { title: "AWS Technical Essentials", issuer: "AWS", year: "" },
    { title: "Business Accreditation", issuer: "", year: "" },
    { title: "Economic Accreditation", issuer: "", year: "" }
  ],

  /* ---------------- BADGES / ACHIEVEMENTS ---------------- */
  badges: [
    { title: "SSC CGL Preliminary — Cleared", note: "Cleared within 4 months of focused preparation." },
    { title: "SSC CHSL Preliminary — Cleared", note: "Consistent aptitude and reasoning across formats." },
    { title: "Conversational French", note: "Learned within 2 months." },
    { title: "District Marathon — 1st Place", note: "District-level marathon winner." }
  ],

  /* ---------------- PROJECTS ---------------- */
  projects: [
    {
      title: "AWS 3-Tier Architecture Deployment using Terraform",
      status: "Completed",
      stack: ["Terraform", "AWS VPC", "ALB", "ASG", "RDS", "IAM"],
      summary: "Designed and deployed a highly available, production-style 3-tier AWS architecture (Web, App, Database tiers) across multiple Availability Zones using reusable, parameterized Terraform modules.",
      points: [
        "Custom VPC with public/private subnets, internal & external ALBs, NAT/Internet Gateways, and 5 dedicated security groups enforcing least-privilege access.",
        "Auto Scaling Groups with launch templates for Web and App tiers.",
        "Multi-AZ-ready RDS MySQL instance isolated within private subnets."
      ],
      github: "#"
    },
    {
      title: "Terraform AWS Infrastructure using Workspaces & Modules",
      status: "Completed",
      stack: ["Terraform", "AWS", "HCL"],
      summary: "Built reusable, environment-agnostic Terraform modules to standardize AWS resource provisioning across multiple projects and teams.",
      points: [
        "Used Terraform workspaces to safely manage isolated state for dev, staging, and production from one codebase.",
        "Configured a secure S3-backed remote state setup for collaborative, conflict-free provisioning."
      ],
      github: "#"
    },
    {
      title: "Load-Balancing using NGINX and Docker",
      status: "Completed",
      stack: ["Docker", "NGINX", "Linux", "AWS EC2"],
      summary: "Built custom Docker images and deployed multiple isolated containers, each running an independent web app instance on its own host port.",
      points: [
        "Configured NGINX as a reverse proxy performing round-robin load balancing across containers.",
        "Demonstrated scalable, highly available containerized infrastructure on AWS EC2."
      ],
      github: "#"
    },
    {
      title: "Terraform S3 Remote Backend Setup",
      status: "Completed",
      stack: ["Terraform", "AWS S3", "DynamoDB"],
      summary: "Provisioned a dedicated S3 bucket as a remote backend to securely store and centrally manage terraform.tfstate across a team.",
      points: [
        "Implemented a safe state migration workflow between local and S3 backends.",
        "Documented S3 versioning, encryption, and DynamoDB-based state locking for production hardening."
      ],
      github: "#"
    }
  ],

  /* ---------------- BLOG / LEARNING-IN-PUBLIC POSTS ---------------- */
  posts: [
    {
      title: "Why I'm going from Economics to the Cloud",
      date: "2026-09-18",
      tags: ["journey", "intro"],
      body: `
        <p>I graduated with a Bachelor of Arts in Economics — no coding background, no CS degree.
        Somewhere along the way I got curious about how the internet's infrastructure actually works,
        and that curiosity turned into a year-plus of self-study: Linux, networking, AWS, and the
        DevOps toolchain (Docker, Kubernetes, Ansible, Jenkins, CI/CD).</p>
        <p>This site — and the Instagram/YouTube series that goes with it — is where I'll document that
        transition in public: what I'm learning, what I'm building, and what I get wrong along the way.</p>
      `
    }
  ]
};
