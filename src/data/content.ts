export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tech: string[];
  link?: { label: string; href: string };
};

export const experiences: Experience[] = [
  {
    company: "Fooddle",
    role: "Software Engineer",
    period: "02/2026 - Present",
    bullets: [
      "Took Fooddle from a blank repository to a live platform serving 15,000+ users every day, with about US$12K in average transaction value, on a Django REST backend and Expo/React Native apps for customers and vendors.",
      "Owned the entire money path: Razorpay payments with tax and TCS calculation, a platform-fee waiver threshold and per-shop bank accounts, backed by a ledger that reconciles every single transaction.",
      "Built a Go worker on AWS SQS that moves bill PDFs, vendor payout sheets, mail, catalog sync and payment reconciliation off the request path, keeping checkout fast while thousands of orders flow through.",
      "Then attacked my own production stack: a security review and a 47,052-request load test over 17 minutes held p95 latency at 709 ms with a 0.03% error rate at 100 concurrent users, and the breaking point sits at 4,000-6,000.",
    ],
    tech: ["Django", "Go", "React Native", "AWS SQS", "Razorpay"],
  },
  {
    company: "buildspace",
    role: "Nights and Weekends Programme",
    period: "05/2024 - 08/2024",
    bullets: [
      "Developed an acoustic fire suppression project exploring sound-based fire control, collaborating with a global builder community to iterate on the concept.",
    ],
    tech: ["Hardware Prototyping", "Acoustics", "Product Iteration"],
    link: { label: "buildspace.so", href: "https://buildspace.so" },
  },
  {
    company: "Adobe Inc.",
    role: "Project Intern",
    period: "08/2023 - 11/2023",
    bullets: [
      "Completed project-based training on Adobe Express and industry-standard creative workflows.",
      "Collaborated on team projects, strengthening communication, feedback handling and adaptability in a professional setting.",
    ],
    tech: ["Adobe Express", "Creative Workflows", "Collaboration"],
    link: { label: "adobe.com", href: "https://www.adobe.com" },
  },
];

export type Project = {
  title: string;
  badge?: string;
  period?: string;
  description: string;
  bullets?: string[];
  tech: string[];
  github?: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Aegis: LLM Security Gateway",
    badge: "Hackathon Project",
    description:
      "A security firewall in front of LLM applications that inspects every prompt and response for prompt injection, encoded payloads and data leaks. Eight detectors run in three tiers (unicode and encoding pre-processing, regex and YARA rules, ML classifiers), and a YAML policy engine decides to allow, sanitize, challenge or block in real time. Ships with a live operator console, a feedback loop for true/false positives, and benchmarks reporting precision, recall, F1 and false-positive rate.",
    bullets: [
      "Built a bidirectional LLM security gateway that screens every prompt and response through 8 detectors across 3 tiers (unicode and encoding pre-processing, regex and YARA rules, ML classifiers), mapped to OWASP LLM Top 10 risks.",
      "Added canary-token leak detection and a YAML policy engine (allow/sanitize/challenge/block), with Kafka event streaming, Docker deployment, a WebSocket incident console and precision/recall/F1 benchmarks on labelled attack and benign sets.",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "React", "Kafka", "Docker", "YARA"],
    github: "https://github.com/Phantom8420/Aegis",
    liveUrl: "https://aegis-frontend-dn3z.onrender.com",
    featured: true,
  },
  {
    title: "UniHealth: Healthcare Interoperability Platform",
    badge: "Public Benefit Project",
    description:
      "A cloud-based platform that lets hospitals exchange patient data securely and in real time through a unified API layer, cutting through the fragmentation of siloed hospital record systems. Built with role-based access control and a scalable patient identity system so multiple institutions can coordinate care without compromising privacy.",
    bullets: [
      "Built a cloud-based healthcare interoperability platform enabling secure real-time hospital data exchange using APIs.",
      "Implemented role-based access control and a scalable patient identity system for secure inter-hospital coordination.",
    ],
    tech: ["TypeScript", "React", "REST APIs", "RBAC"],
    github: "https://github.com/Phantom8420/UniHealth",
    liveUrl: "https://uni-health-kappa.vercel.app",
    featured: true,
  },
  {
    title: "AuthenTick: Blockchain Anti-Counterfeit Platform",
    badge: "Hackathon Project",
    description:
      "A hybrid blockchain platform for fighting counterfeit goods across the supply chain: manufacturers mint an NFT for each product, distributors log shipment checkpoints on-chain, and consumers scan a secure QR code to instantly verify a product's authenticity and full chain of custody.",
    tech: ["TypeScript", "Solidity", "Next.js"],
    github: "https://github.com/Phantom8420/AuthenTick",
    liveUrl: "https://authen-tick-web.vercel.app",
    featured: true,
  },
  {
    title: "ChainGuard: Ethereum Fraud Detection",
    badge: "Hackathon Project",
    description:
      "An Ethereum fraud-detection system that trains a Random Forest classifier on 10,000+ real transactions to flag suspicious wallet activity, then writes flagged events to a Solidity smart contract for tamper-proof, on-chain audit logging that can't be quietly edited after the fact.",
    tech: ["Python", "Jupyter Notebook", "Solidity", "JavaScript"],
    github: "https://github.com/Phantom8420/ChainGuard",
  },
  {
    title: "Glasses: Offline College Life Manager",
    badge: "Personal Project",
    description:
      "A local-first Android app with no accounts, no cloud and no permissions: timetable, per-course attendance with miss-budget gauges, habits, to-dos, money tracking and learning, all stored on the device.",
    tech: ["JavaScript", "Android"],
    github: "https://github.com/Phantom8420/Glasses",
  },
  {
    title: "Engram: Company Brain for Open-Source Projects",
    badge: "Hackathon Project",
    description:
      "A temporal knowledge graph built from thousands of merged pull requests that shows who actually knows a module, why the code is the way it is, and how much unwritten knowledge walks out when a maintainer leaves. Forks the graph to run what-if scenarios, such as a contributor stepping away or a decision being reversed.",
    tech: ["Python", "FalkorDB", "Graph Queries"],
    github: "https://github.com/Phantom8420/engram",
    liveUrl: "https://graph-hacks-pearl.vercel.app",
  },
  {
    title: "TSUKUMO: Tacit-Skill Capture and Coaching",
    badge: "Hackathon Project",
    description:
      "A phone watches an expert's hands (or rides on the tool), finds the moments no manual explains, asks the expert why, and turns each answer into a card that coaches apprentices at the same point in the work. Hand tracking runs in the browser; the pipeline is craft-agnostic.",
    tech: ["Python", "MediaPipe", "Web Sensors"],
    github: "https://github.com/Phantom8420/tsukumo",
    liveUrl: "https://tsukumo-xi.vercel.app",
  },
  {
    title: "Lookahead: Streaming Live RAG",
    badge: "Hackathon Project",
    description:
      "An event-driven RAG engine for live voice and chat that starts retrieval before the user finishes speaking, splits compound requests into parallel sub-queries, and patches individual claims when a late constraint arrives instead of restarting. Citation fabrication is structurally impossible, and every decision is traced as JSON.",
    tech: ["Python", "RAG", "Embeddings"],
    github: "https://github.com/Phantom8420/Live-Rag-Streaming",
  },
  {
    title: "Hole: Graph-Based Job Search Platform",
    badge: "Personal Project",
    description:
      "Career history stored as a queryable graph, with resumes generated from it. Code deterministically selects which positions, bullets and skills appear; the model only writes the phrasing, and a skill with no evidence cannot be claimed.",
    tech: ["Python", "Graph DB", "LLMs"],
    github: "https://github.com/Phantom8420/Hole",
    liveUrl: "https://hole-roan.vercel.app",
  },
  {
    title: "Notes & Reminders",
    badge: "Open Source",
    description:
      "An open-source, lightweight note-taking app focused on getting out of your way: fast capture, minimal friction, and full control over how your notes are organized — built as a self-hostable alternative to heavier, bloated note-taking tools.",
    tech: ["Go", "TypeScript"],
    github: "https://github.com/Phantom8420/Notes-and-Reminders",
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "LANGUAGES", items: ["Python", "Java", "C++", "JavaScript", "SQL"] },
  {
    label: "DEVELOPMENT",
    items: ["Android Development", "Software Architecture", "AI/ML Systems", "TensorFlow", "Alpaca API", "Quantum ML", "Astropy"],
  },
  {
    label: "CYBERSECURITY",
    items: ["Secure Systems", "Network Security", "Threat Analysis", "Data Protection", "LLM Security", "TLS / mTLS"],
  },
  { label: "BLOCKCHAIN", items: ["Solidity", "Ethereum", "Smart Contracts", "Web3.py", "Hardhat", "ethers.js"] },
  { label: "TOOLS", items: ["Git", "GitHub", "Linux", "Android Studio", "VS Code", "Bash", "Terraform", "Jupyter", "Grafana"] },
  {
    label: "ENGINEERING",
    items: ["Robotics", "Embedded Systems", "Control Systems", "Prototyping", "MQTT", "ESP32", "FPGA", "Isaac Sim"],
  },
];

export const socials = {
  github: "https://github.com/Phantom8420",
  behance: "https://www.behance.net/10932e09",
  discord: "@842phantom",
  discordUrl: "https://discord.com/users/985132611045322753",
  email: "phantom842x@gmail.com",
  resumeEmail: "phantom842x@gmail.com",
};

export const certifications = [
  { name: "SQL (Basic)", issuer: "HackerRank" },
  { name: "SQL (Intermediate)", issuer: "HackerRank" },
  { name: "Python (Basic)", issuer: "HackerRank" },
  { name: "JavaScript (Basic)", issuer: "HackerRank" },
];
