export const site = {
  name: "Manobhi Ram Pabbathi",
  role: "Software Engineer (Full-Stack • Data Engineering • ML)",
  location: "Cincinnati, OH, USA",
  email: "manobhiram.pabbathi@gmail.com",
  phone: "+1 (513) 399-0499",
  linkedin: "https://www.linkedin.com/in/manobhi-ram/",
  research: "https://tinyurl.com/muhkxbwv",
  baseUrl: "https://jonsnow.dev",
  resumeLabel: "Download Resume",
  status: "Open to software engineering roles",
  timelineNote: "Share your calender link for a chat",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  headline: "Product-minded Software Engineering from 0 to 1 and beyond.",
  subhead:
    "I apply ML, usability research, and data storytelling to build practical software with measurable outcomes.",
  highlights: [
    "ML modeling",
    "Full-stack Development",
    "Data Engineering",
    "Cloud fundamentals",
  ],
};

export const systems = [
  {
    title: "Applied ML Modeling",
    description:
      "Built and compared Logistic Regression, Random Forest, AdaBoost, and CNN-based models for practical prediction tasks.",
  },
  {
    title: "HCI + Usability",
    description:
      "Translated HCI coursework into product decisions, using prototype testing to reach strong task-success outcomes.",
  },
  {
    title: "Data Analytics + Visualization",
    description:
      "Used Python, Matplotlib, and Seaborn to turn model outputs into clear decision-ready insights.",
  },
  {
    title: "Cloud + Systems Foundations",
    description:
      "Applied coursework in Azure Data Engineering, infrastructure, and system design to ship reliable software.",
  },
];

export const projectFilters = ["All", "Data & Machine Learning", "UI/UX", "Product"];

export const projects = [
  {
    slug: "farmket-platform",
    title: "Farmket - Agricultural E-Commerce Platform",
    date: "2022",
    category: "Product",
    problem:
      "Farmers needed a reliable marketplace for inventory, storage, and resources.",
    approach:
      "Built a PHP/MySQL platform with secure workflows and a farmer-first UI.",
    impact:
      "Enabled a scalable marketplace with simplified product booking.",
    tech: ["PHP", "MySQL", "Bootstrap", "XAMPP"],
    highlights: [
      "Secure backend",
      "Farmer-friendly UX",
      "Inventory + booking flows",
    ],
    files: [
      "Product requirements and user flow map",
      "Database schema and backend module plan",
      "UI screens for farmer marketplace journeys",
      "Release notes and deployment checklist",
    ],
  },
  {
    slug: "employee-attrition-analytics",
    title: "Predictive Analytics for Employee Attrition",
    date: "Dec 2024",
    category: "Data & Machine Learning",
    problem:
      "HR teams lacked early warning signals for attrition and relied on reactive workflows.",
    approach:
      "Built classification models and a Flask dashboard to surface real-time risk scores.",
    impact:
      "Achieved 74% accuracy and enabled faster, proactive retention decisions.",
    tech: ["Python", "Flask", "Logistic Regression", "Random Forest", "AdaBoost"],
    highlights: [
      "Model comparison framework",
      "Actionable risk dashboard",
      "Real-time insights",
    ],
    files: [
      "Data preparation and feature engineering notebook",
      "Model evaluation report (LR, RF, AdaBoost)",
      "Flask app wireframe and dashboard screen plan",
      "Prediction API flow and validation checklist",
    ],
  },
  {
    slug: "photo-description-enhancement",
    title: "AI-Powered Photo Description & Enhancement Prototype",
    date: "Dec 2023",
    category: "UI/UX",
    problem:
      "Users needed faster image understanding and enhancement with minimal effort.",
    approach:
      "Designed a low-fidelity prototype and validated AI-assisted captions + enhancements.",
    impact:
      "Reached 85% task success during usability testing.",
    tech: ["UX Research", "Prototyping", "AI APIs", "Usability Testing"],
    highlights: [
      "Contextual captioning",
      "Auto-enhancement flow",
      "Validated UX improvements",
    ],
    files: [
      "Low-fidelity prototype screens",
      "Usability testing script and success metrics",
      "User feedback synthesis and priority matrix",
      "Feature scope document for AI captioning/enhancement",
    ],
  },
  {
    slug: "airline-nlp-prediction",
    title: "Airline Prediction System using NLP + Deep Learning",
    date: "2023",
    category: "Data & Machine Learning",
    problem:
      "Sentiment signals were noisy and hard to operationalize for airline forecasting.",
    approach:
      "Built CNN + NLP models and boosted accuracy with ensemble methods.",
    impact:
      "Improved accuracy by 9% and visualized insights with data storytelling.",
    tech: ["Python", "CNN", "NLP", "AdaBoost", "Random Forest"],
    highlights: [
      "Ensemble modeling",
      "Sentiment classification",
      "Matplotlib/Seaborn analytics",
    ],
    files: [
      "NLP preprocessing and tokenization notebook",
      "CNN training and ensemble experiment logs",
      "Sentiment classification evaluation summary",
      "Visualization pack for airline insights",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Venchal Scientific",
    location: "New York",
    timeframe: "Jan 2025 - Present",
    bullets: [
      "Built backend services with Python, SQL, and AWS (Lambda, EC2, RDS).",
      "Optimized data pipelines and queries, cutting response time by 37%.",
      "Shipped CI/CD workflows using Git, Jira, and AWS CodePipeline.",
      "Produced requirements, design docs, task breakdowns, and estimates.",
      "Drove log-based debugging, RCA, and uptime improvements.",
    ],
  },
  {
    role: "Intern",
    company: "AICTE",
    location: "India",
    timeframe: "Jul 2022 - Mar 2023",
    bullets: [
      "Automated Salesforce CRM workflows, cutting manual time by 29%.",
      "Created reusable automation components for scalable rollout.",
      "Earned Apex Specialist + Process Automation Superbadges.",
      "Delivered documentation and testing strategies.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "SwechaAP",
    location: "India",
    timeframe: "Jul 2021 - May 2022",
    bullets: [
      "Built 5+ interactive educational simulations for Balaswecha.",
      "Improved engagement by 20% and reduced load time by 35%.",
      "Strengthened accessibility and community contributions.",
      "Platform scaled to 1000+ active users.",
    ],
  },
];

export const education = [
  {
    degree: "MS IT",
    school: "University of Cincinnati",
    gpa: "3.96",
    timeframe: "Aug 2023 - Dec 2024",
    coursework: [
      "Azure Data Engineering",
      "Data-driven Cybersecurity",
      "HCI & Usability",
      "Mobile Apps",
      "Advanced Storage",
      "Infrastructure Sustainability",
      "IT Research",
    ],
  },
  {
    degree: "BTech IT",
    school: "Lakireddy Bali Reddy College of Engineering",
    gpa: "3.60",
    timeframe: "Aug 2019 - May 2023",
    coursework: [
      "DSA",
      "Software Eng",
      "Web Tech",
      "Data Mining/Warehousing",
      "Algo Design",
      "Prob & Stats",
      "Networks",
      "DBMS",
      "Design Patterns",
      "OOAD",
    ],
  },
];

export const skills = {
  Programming: ["Python", "Java/J2EE", "C", "C++", "JavaScript", "R", "SQL"],
  Web: ["React.js", "HTML5", "CSS", "Flask", "Bootstrap"],
  DB: ["MySQL", "Oracle XE"],
  "Cloud/DevOps": [
    "Azure",
    "AWS (Lambda, EC2, RDS)",
    "GCP",
    "Git",
    "Jira",
    "Kubernetes",
    "CI/CD",
  ],
  "Systems/Design": [
    "System Design Fundamentals",
    "UML",
    "Requirements Analysis",
    "Wireframing",
  ],
  Core: [
    "Debugging",
    "Distributed Systems Basics",
    "Performance Optimization",
    "Deployment Automation",
    "Observability Basics",
  ],
};

export const skillFilters = [
  {
    label: "Backend",
    matches: ["Python", "Java/J2EE", "SQL", "Flask", "System Design Fundamentals"],
  },
  {
    label: "Data",
    matches: ["Azure", "GCP", "MySQL", "Oracle XE", "R"],
  },
  {
    label: "ML",
    matches: ["Python", "R", "ML", "NLP"],
  },
  {
    label: "Cloud",
    matches: ["AWS", "Azure", "GCP", "Kubernetes", "CI/CD"],
  },
  {
    label: "DevOps",
    matches: ["CI/CD", "Git", "Jira", "Deployment"],
  },
  {
    label: "Frontend",
    matches: ["React.js", "HTML5", "CSS", "Wireframing"],
  },
];

export const certifications = [
  "LinkedIn Learning: Become a Full-Stack Web Developer",
  "Wipro TalentNext Java J2EE (75%)",
];

export const socialLinks = [
  { label: "Resume", href: "/resume" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/manobhi-ram/" },
  { label: "Email", href: "mailto:manobhiram.pabbathi@gmail.com" },
];

export const meta = {
  title: "Manobhi Ram Pabbathi | Software Engineer",
  description:
    "Full-stack, data engineering, and ML systems with a product-first mindset.",
};
