export const profile = {
  name: "Bazil Rehman",
  title: "Entry-Level Cybersecurity Analyst",
  subtitle: "M.Sc. Cybersecurity and Emerging Threats",
  location: "Dubai, United Arab Emirates",
  email: "bazilr0230@gmail.com",
  resumeUrl: "/Bazil_Rehman_CV.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/bazil-rehman-414159212",
    github: "https://github.com/BazilRehman",
    tryhackme: "https://tryhackme.com/p/bazilr0230",
    tryhackmeUsername: "bazilr0230",
    hackthebox: "https://app.hackthebox.com/public/users/2258630",
    hacktheboxUsername: "Bazil23",
  },
  summary:
    "Cybersecurity postgraduate (M.Sc., Middlesex University Dubai) seeking an entry-level SOC, security analyst or junior penetration testing role. Hands-on practical experience from TryHackMe (top 5% globally, 121 rooms completed) and Hack The Box, backed by Python, Kali Linux and Nmap skills and security projects covering LLM defence, authentication testing and API threat detection. Also completed Mastercard and Deloitte Australia cyber job simulations.",
};

export const experience = [
  {
    org: "TryHackMe",
    role: "Practical Security Training",
    tag: "Top 5% Global Rank",
    bullets: [
      "Completed 121 rooms across offensive and defensive paths, including the Pre Security path (certified Feb 2026).",
      "Completed Advent of Cyber 2025 (24 challenges) and the Hacker Holidays event (14 challenges).",
    ],
  },
  {
    org: "Hack The Box",
    role: "Practical Security Training",
    tag: null,
    bullets: [
      "Practised penetration testing methodology on hosted lab machines: enumeration and scanning (Nmap), exploitation and privilege escalation on Kali Linux.",
    ],
  },
  {
    org: "Forage Cyber Job Simulations",
    role: "Mastercard (May 2026), Deloitte Australia (Dec 2025)",
    tag: null,
    bullets: [
      "Completed virtual security analyst tasks simulating real-world client work, including threat identification and security awareness.",
    ],
  },
];

export const projects = [
  {
    name: "Zero-Trust-AI",
    stack: "Go, Python",
    url: "https://github.com/BazilRehman/Zero-Trust-AI",
    status: null as string | null,
    summary:
      "Built a 4-layer security gateway to protect a local LLM: bearer-token authentication, prompt-injection detection, policy and budget enforcement, and output filtering to prevent data leakage.",
    bullets: [
      "Created a web chat client that shows which layer blocked a request, with test cases for injection and data-leak attacks.",
    ],
  },
  {
    name: "Project Mirage: Proactive Threat Detection in Enterprise REST APIs",
    stack: "Python, FastAPI",
    url: null as string | null,
    status: "M.Sc. Dissertation (in progress)",
    summary:
      "Designing an API deception and active intrusion prevention system using canary endpoints and behavioural velocity detection, benchmarked offline with an Isolation Forest ML model.",
    bullets: [] as string[],
  },
  {
    name: "Web-Login-Brute-Force",
    stack: "Python",
    url: "https://github.com/BazilRehman/Web-Login-Brute-Force",
    status: null as string | null,
    summary:
      "Developed an authentication testing tool to demonstrate weak-credential attacks, for authorised lab and educational use only.",
    bullets: [] as string[],
  },
  {
    name: "Zoro-ChatBot",
    stack: "Python, OpenAI API",
    url: "https://github.com/BazilRehman/Zoro-ChatBot",
    status: null as string | null,
    summary:
      "Built a desktop chatbot integrating the OpenAI API with retry logic, a rule-based fallback, threaded processing, logging and text-to-speech.",
    bullets: [] as string[],
  },
];

export const education = [
  {
    degree: "M.Sc. Cybersecurity and Emerging Threats",
    school: "Middlesex University Dubai",
    period: "2025 – Present",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Christ University, Delhi NCR",
    period: "2022 – 2025",
  },
];

export const certifications = [
  {
    org: "TryHackMe",
    items: [
      "Pre Security (Feb 2026)",
      "Advent of Cyber 2025 (Dec 2025)",
      "Hacker Holidays (Aug 2026)",
    ],
  },
  {
    org: "Forage",
    items: [
      "Mastercard Cybersecurity Job Simulation (May 2026)",
      "Deloitte Australia Cyber Job Simulation (Dec 2025)",
    ],
  },
  {
    org: "Cisco",
    items: ["Introduction to Cybersecurity (Jun 2025)"],
  },
  {
    org: "Internshala",
    items: ["Ethical Hacking Training, CEH curriculum (certificate of completion)"],
  },
  {
    org: "OneRoadmap",
    items: ["Data Analyst (Jun 2025)"],
  },
];

export const skills = {
  Security: [
    "Penetration testing",
    "Network scanning and enumeration",
    "Web application security",
    "Prompt-injection defence",
    "Intrusion detection",
    "Threat analysis",
  ],
  Tools: ["Kali Linux", "Nmap", "Git/GitHub", "TryHackMe", "Hack The Box"],
  "Languages & Frameworks": ["Python", "Go", "FastAPI", "scikit-learn"],
};
