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
    company: "buildspace",
    role: "buildspace - Nights and Weekends Programme",
    location: "Remote",
    period: "05/2024 - 08/2024",
    bullets: [
      "Developed an acoustic fire suppression project exploring sound-based fire control, collaborating with a global builder community to iterate on the concept.",
      "Design targets: 30-100 Hz at 100-120 dB, 10-30 cm range, 5-15 s suppression time, 20-30 test trials and a 60-80% target success rate on a small controlled flame.",
    ],
  },
  {
    company: "Adobe Inc.",
    role: "Project Intern",
    period: "08/2023 - 11/2023",
    bullets: [
      "Completed a project-based work experience program focused on Adobe Express and industry-standard creative workflows.",
      "Collaborated with a 4-member team to develop 5 projects and deliver 10 creative deliverables, incorporating feedback and iterative design improvements.",
    ],
  },
];

export const resumeSkillGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "Java", "C++", "JavaScript", "SQL"] },
  { label: "Development", items: ["Android Development", "Software Architecture", "AI/ML Systems", "TensorFlow", "Alpaca API", "Quantum ML", "Astropy"] },
  {
    label: "Cybersecurity",
    items: ["Secure Systems", "Network Security", "Threat Analysis", "Data Protection", "LLM Security", "TLS / mTLS"],
  },
  { label: "Blockchain", items: ["Solidity", "Ethereum", "Smart Contracts", "Web3.py", "Hardhat", "ethers.js"] },
  { label: "Tools", items: ["Git", "GitHub", "Linux", "Android Studio", "VS Code", "Bash", "Terraform", "Jupyter", "Grafana"] },
  { label: "Engineering", items: ["Robotics", "Embedded Systems", "Control Systems", "Prototyping", "MQTT", "ESP32", "FPGA", "Isaac Sim"] },
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
    title: "OceanEmbed",
    subtitle: "Subsurface Ocean Reconstruction (Hackathon Project)",
    tech: "Python, PyTorch, Geospatial ML",
    bullets: [
      "Built a physics-constrained deep learning pipeline that reconstructs ocean temperature and salinity at 18 depths (0-2,000 m) from satellite surface data, trained on 8,340 Argo profiles matched to satellite passes (Indian Ocean, 2021-2023).",
      "Validated on a held-out Bay of Bengal region (1,044 profiles) and a held-out monsoon season; uncertainty bands calibrate to 81% coverage at the 80% level and 95% at the 95% level.",
    ],
  },
  {
    title: "AI Finance Controller",
    subtitle: "Razorpay AI Buildathon — Track 04",
    tech: "Python, LLM Agents, Streamlit",
    bullets: [
      "Built a reconciliation agent that proves each payment-ledger mismatch with a sandboxed, re-executable script hashed into an append-only chain; on a 60-record test batch it scored precision and recall of 1.0 at about 3,700 records/sec.",
      "Added a whole-batch conservation check that caught a systematic INR 175.87 ledger drift, plus a self-adversarial fuzzing layer that hunts the agent's own blind spots.",
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
  {
    title: "Engram",
    subtitle: "Company Brain for Open-Source Projects",
    tech: "Python, FalkorDB, Graph Queries",
    bullets: [
      "Built a temporal knowledge graph from thousands of merged pull requests that shows who actually knows a module, why the code is the way it is, and how much unwritten knowledge leaves when a maintainer does.",
      "Added what-if forks of the graph to simulate a contributor stepping away or a decision being reversed.",
    ],
  },
];
