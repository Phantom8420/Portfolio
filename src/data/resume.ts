export const resumeProfile = {
  name: "Phantom842",
  title: "Student | Computational Systems Engineer",
};

export const resumeExperience = [
  {
    company: "Fooddle",
    role: "Software Engineer",
    location: "Remote",
    period: "02/2026 - Present",
    bullets: [
      "Engineered Fooddle from zero to production: a Django REST backend and Expo/React Native apps for customers and vendors, now serving 15,000+ users every day with average transactions worth about US$12K.",
      "Commanded the money layer end to end: Razorpay payments with tax and TCS calculation, a platform-fee waiver threshold, per-shop bank accounts and a payment ledger that reconciles every rupee.",
      "Built a Go worker on AWS SQS that takes bill PDFs, vendor payout sheets, the mail queue, catalog sync and payment reconciliation off the request path, so checkout stays fast under load.",
      "Added guest login, helper users and external-shop support, then attacked my own production stack: a security review plus load tests that held p95 latency near 700 ms at 100 concurrent users with a 0.03% error rate, and mapped the breaking point at 4,000-6,000.",
    ],
  },
  {
    company: "Thapar Institute of Engineering & Technology",
    role: "Research Intern",
    location: "Patiala, Punjab, India",
    period: "05/2026 - 07/2026",
    bullets: [
      "Designed the Universal Brain Board, a universal PCB built to be compatible with every robotics project, so one controller board is reused across builds instead of being redesigned for each one.",
      "Worked on-site at the Patiala campus as part of the robotics research group on the board's design.",
    ],
  },
  {
    company: "Adobe Inc.",
    role: "Project Intern",
    location: "Greater Noida, UP, India",
    period: "08/2023 - 11/2023",
    bullets: [
      "Completed project-based training on Adobe Express and industry-standard creative workflows.",
      "Collaborated on team projects, strengthening communication, feedback handling and adaptability in a professional setting.",
    ],
  },
];

export const resumeSkillGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "Java", "C++", "JavaScript", "SQL"] },
  { label: "Development", items: ["Android Development", "Software Architecture", "AI/ML Systems"] },
  {
    label: "Cybersecurity",
    items: ["Secure Systems", "Network Security", "Threat Analysis", "Data Protection", "LLM Security"],
  },
  { label: "Blockchain", items: ["Solidity", "Ethereum", "Smart Contracts", "Web3.py"] },
  { label: "Tools", items: ["Git", "GitHub", "Linux", "Android Studio", "VS Code"] },
  { label: "Engineering", items: ["Robotics", "Embedded Systems", "Control Systems", "Prototyping"] },
];

export const resumeProjects = [
  {
    title: "Aegis",
    subtitle: "LLM Security Gateway",
    tech: "Python, FastAPI, PostgreSQL, React",
    bullets: [
      "Built a bidirectional security gateway that scans LLM prompts and responses in real time, combining regex, YARA rules, and ML models in a multi-stage detection pipeline.",
      "Implemented canary-token leak detection and a YAML-driven policy engine (allow/sanitize/challenge/block), with Kafka-backed event streaming, Docker deployment and a real-time WebSocket incident console.",
    ],
  },
  {
    title: "UniHealth",
    subtitle: "Healthcare Interoperability Platform",
    tech: "Full Stack Development, Cyber-Security",
    bullets: [
      "Built a cloud-based healthcare interoperability platform enabling secure real-time hospital data exchange using APIs.",
      "Implemented role-based access control and a scalable patient identity system for secure inter-hospital coordination.",
    ],
  },
];
