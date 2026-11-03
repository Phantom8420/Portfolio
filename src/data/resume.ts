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
      "Took Fooddle from a blank repository to a live platform serving 15,000+ users every day, with about US$12K in average transaction value, on a Django REST backend and Expo/React Native apps for customers and vendors.",
      "Owned the entire money path: Razorpay payments with tax and TCS calculation, a platform-fee waiver threshold and per-shop bank accounts, backed by a ledger that reconciles every single transaction.",
      "Built a Go worker on AWS SQS that moves bill PDFs, vendor payout sheets, mail, catalog sync and payment reconciliation off the request path, keeping checkout fast while thousands of orders flow through.",
      "Then attacked my own production stack: a security review and a 47,052-request load test over 17 minutes held p95 latency at 709 ms with a 0.03% error rate at 100 concurrent users, and the breaking point sits at 4,000-6,000.",
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
      "Built a bidirectional LLM security gateway that screens every prompt and response through 8 detectors across 3 tiers (unicode and encoding pre-processing, regex and YARA rules, ML classifiers), mapped to OWASP LLM Top 10 risks.",
      "Added canary-token leak detection and a YAML policy engine (allow/sanitize/challenge/block), with Kafka event streaming, Docker deployment, a WebSocket incident console and precision/recall/F1 benchmarks on labelled attack and benign sets.",
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
