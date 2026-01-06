export const personalInfo = {
  name: "Saurabh Lohokare",
  title: "Software Engineer & Full-Stack Developer",
  email: "lohokare.s@northeastern.edu",
  phone: "+1 (857) 302-9360",
  location: "Boston, MA",
  linkedin: "linkedin.com/in/saurabh-lohokare",
  github: "github.com/Saurabhpl2408",
  intro: "Passionate about translating business requirements into effective technical solutions. I enjoy building scalable web applications and data-driven solutions. I specialize in full-stack development with a focus on modern web technologies, analytics, and AI integration."
};

export const education = [
  {
    id: 1,
    institution: "Northeastern University",
    location: "Boston, MA",
    degree: "Master of Science in Computer Science",
    duration: "Sep 2025 – May 2027",
    coursework: ["Programming Design Paradigms", "Database Management Systems"],
    logo: "🎓",
  },
  {
    id: 2,
    institution: "University of Pune",
    location: "Pune, India",
    degree: "Bachelor of Engineering in Information Technology",
    duration: "Jul 2019 – May 2023",
    coursework: [
      "Distributed Systems",
      "Web Development",
      "Data Structures and Algorithms",
    ],
    logo: "🎓",
  },
];

export const skills = {
  "Programming Languages": [
    { name: "Python", icon: "SiPython", color: "#3776AB" },
    { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
    { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
    { name: "SQL", icon: "SiMysql", color: "#4479A1" },
    { name: ".NET Core", icon: "SiDotnet", color: "#512BD4" },
    { name: "Java", icon: "SiOpenjdk", color: "#437291" },
  ],
  "Web Technologies": [
    { name: "React", icon: "SiReact", color: "#61DAFB" },
    { name: "Next.js", icon: "SiNextdotjs", color: "#000000" },
    { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
    { name: "Express.js", icon: "SiExpress", color: "#000000" },
    { name: "FastAPI", icon: "SiFastapi", color: "#009688" },
    { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
  ],
  "Analytics & Reporting": [
    {
      name: "Google Tag Manager",
      icon: "SiGoogletagmanager",
      color: "#246FDB",
    },
    { name: "Google Analytics 4", icon: "SiGoogleanalytics", color: "#E37400" },
    { name: "Looker Studio", icon: "SiLooker", color: "#4285F4" },
    { name: "Grafana", icon: "SiGrafana", color: "#F46800" },
    { name: "Tableau", icon: "SiTableau", color: "#E97627" },
    { name: "PowerBI", icon: "SiPowerbi", color: "#F2C811" }, // Correct: SiPowerbi (lowercase 'bi')
  ],
  "AI & Data": [
    { name: "Hugging Face", icon: "SiHuggingface", color: "#FFD21E" },
    { name: "LLMs", icon: "SiOpenai", color: "#412991" },
    { name: "LangChain", icon: "SiChainlink", color: "#375BD2" },
    { name: "NLP", icon: "SiPython", color: "#3776AB" },
    { name: "Computer Vision", icon: "SiOpencv", color: "#5C3EE8" },
    { name: "Anomaly Detection", icon: "SiDatadog", color: "#632CA6" },
  ],
  "Database & Testing": [
    { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
    { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
    { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
    { name: "Supabase", icon: "SiSupabase", color: "#3ECF8E" },
    { name: "Jest", icon: "SiJest", color: "#C21325" },
  ],
  "DevOps & Cloud": [
    { name: "Docker", icon: "SiDocker", color: "#2496ED" },
    { name: "Kubernetes", icon: "SiKubernetes", color: "#326CE5" },
    { name: "Kafka", icon: "SiApachekafka", color: "#000000" }, 
    { name: "AWS", icon: "SiAmazonwebservices", color: "#FF9900" }, 
    { name: "BigQuery", icon: "SiGooglebigquery", color: "#669DF6" },
  ],
};

export const experience = [
  {
    id: 1,
    company: "DealerOn",
    role: "Member Technical",
    location: "Pune, India",
    duration: "Sep 2023 – Jun 2025",
    logo: "/src/assets/dealeron-logo.png",
    responsibilities: [
      "Engineered a user tracking tool for automotive OEM websites, leveraging TypeScript, JavaScript, Redux, Google Tag Manager, and .NET to enable data-driven decisions on 10+ dealership portals",
      "Migrated analytics from Universal Analytics to GA4 and redesigned schemas and automated reports via Looker Studio API, streamlining workflows by 80% and reducing turnaround from 3 days to under 1 day",
      "Orchestrated the OEM Overnighter Program, ensuring on-time delivery of feature rollouts for 10 automotive companies",
    ],
  },
  {
    id: 2,
    company: "Atomic Loops Pvt. Ltd",
    role: "Frontend Development Intern",
    location: "Pune, India",
    duration: "Apr 2022 – Jul 2022",
    logo: "/src/assets/atomicloops-logo.png",
    responsibilities: [
      "Developed responsive, scalable web applications boosting Lighthouse mobile performance to 90%",
      "Implemented UIs using React.js, JavaScript, and Tailwind CSS with cross-device compatibility and integrated third-party APIs (Razorpay) to enable secure payment workflows",
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Obscenity Blocker Extension",
    description:
      "Chrome extension detecting explicit content in real-time with 92% accuracy on sample datasets. Architected a modular microservices system processing 5–10 concurrent content streams efficiently.",
    duration: "Aug 2023 – Nov 2023",
    github: "https://github.com/Saurabhpl2408/obscenity-blocker",
    tech: ["Chrome Extension", "Microservices", "Python", "Machine Learning"],
    image: "🔒",
  },
  {
    id: 2,
    name: "Real-Time Event Analytics Platform",
    description:
      "Microservices platform for event ingestion using Kafka, Python, and PostgreSQL, handling 500–1,000 events per minute. Deployed with Grafana dashboards for monitoring throughput and latency.",
    duration: "Jan 2025 – May 2025",
    github:
      "https://github.com/Saurabhpl2408/real-time-event-analytics-dashboard",
    tech: ["Kafka", "Python", "PostgreSQL", "Grafana", "Microservices"],
    image: "📊",
  },

  {
    id: 3,
    name: "Meditriage",
    description: "MediTriage is a complete, AI-powered medical triage system that analyzes patient symptoms and provides intelligent urgency assessments in seconds. Think of it as having a knowledgeable medical assistant available 24/7.",
    duration: "Dec 2025 - Jan 2026",
    github: "https://github.com/Saurabhpl2408/meditriage",
    tech : ["React", "FastAPI", "PostgreSQL", "AWS(EC2, RDS, EKS)", "ChromaDB", "RAG"],
    image: "🏥"
  },
  // {
  //   id: 3,
  //   name: "Conversational Analytics Dashboard",
  //   description:
  //     "AI-powered dashboard with Next.js and MongoDB converting natural language queries to SQL. Integrated LangChain and Hugging Face models achieving 85% query accuracy, optimized for 10–20 concurrent users.",
  //   duration: "May 2025 – Sep 2025",
  //   tech: ["Next.js", "MongoDB", "Django", "LangChain", "Hugging Face", "AI"],
  //   image: "💬",
  // },
  // {
  //   id: 4,
  //   name: "InsightBot - AI Market Research Agent",
  //   description:
  //     "AI-powered agent leveraging RAG pipelines and LLMs to extract, summarize, and visualize market insights from financial APIs, CSVs, and news sources. Integrated ChromaDB vector search with Hugging Face embeddings for context-aware retrieval.",
  //   duration: "Sept 2025 – Present",
  //   github: "https://github.com/Saurabhpl2408/insightbot-ai",
  //   tech: ["Next.js", "Tailwind CSS", "ChromaDB", "Hugging Face", "RAG", "LLMs"],
  //   image: "📈",
  // },
];

export const publications = [
  {
    id: 1,
    title: "An Automated Solution for Department Data Management System (DDMS)",
    authors: "Saurabh Lohokare, et al.",
    publication:
      "International Journal of Creative Research Thoughts (IJCRT), Volume 11, Issue 9",
    year: "2023",
    link: "https://ijcrt.org/papers/IJCRT2309035.pdf",
    description:
      "Proposed a Progressive Web App to automate departmental data management tasks such as attendance tracking, result mapping, and handling CSV, Excel, and scanned PDF files to improve efficiency in educational institutions.",
  },
];

export const awards = [
  {
    id: 1,
    title: "Smart India Hackathon 2022",
    issuer: "Government of India",
    date: "August 2022",
    description:
      "My team Bitt By Bitt won the Smart India Hackathon 2022 with a solution to facilitate access to government schemes for disabled people through a progressive web app. The project was developed using React, Node.js, and MongoDB, and deployed on AWS, with accessibility-focused features to ensure ease of use for people with disabilities.",
    certificate:
      "/src/assets/certificates/Saurabh_Lohokare_SIH_Certificate.pdf",
  },
  {
    id: 2,
    title: "UNESCO India-Africa Hackathon 2022",
    issuer: "UNESCO",
    date: "November 2022",
    description:
      "My team Hash Clashers won the UNESCO India-Africa Hackathon 2022, a 36-hour international event with 22 participating countries. Our project addressed the underutilization and lack of mechanisms for acting on partograms, a vital tool used during labor to monitor maternal and fetal health. We built a solution using Modular JavaScript, Node.js, Chart.js, and MongoDB to streamline partogram interpretation and enable timely medical decisions, with the goal of improving maternal healthcare outcomes.",
    certificate:
      "/src/assets/certificates/Saurabh_Lohokare_UIA_Certificate.pdf",
  },
];

export const recommendations = [
  {
    id: 1,
    name: "Colleen Harris",
    title: "Director of Product Insights at DealerOn",
    location: "Seattle, Washington, United States",
    image: "👤",
    relationship: "Colleague at DealerOn",
    text: "Saurabh was an amazing member of my tagging team. Our tagging system is the foundational layer for all data analytics and Saurabh jumped into the team headfirst. He asked very good questions and never asked the same question more than once. Saurabh was instrumental in building out a process to streamline a complicated tagging request system into a simple process. It took normal requests that started at 4-5 days to complete and he built the process that got it done within 24 hours. He will be an asset to any team he joins.",
    date: "29th Sept 2025",
    url: "https://www.linkedin.com/in/saurabh-lohokare/details/recommendations/",
  },

  {
    id: 2,
    name: "Gampeshwar Kumar Sahu",
    title: "Principal Consultant at DealerOn",
    location: "India",
    coordinates: [78.9629, 20.5937],
    image: "👤",
    relationship: "Manager at DealerOn",
    text: "I had the pleasure of working with Saurabh in the tagging team, where he consistently demonstrated deep expertise in JavaScript, GA4, and Google Tag Manager. His ability to implement complex tracking solutions and troubleshoot intricate tagging issues was truly impressive. He played a key role in ensuring our analytics setup was robust, scalable, and aligned with business goals. What stood out most was his proactive approach to problem-solving and his willingness to collaborate across teams to deliver high-quality solutions. Whether it was setting up custom events, debugging data layers, or optimizing tag configurations, Saurabh always brought clarity and precision to the task. He's not only technically strong but also a great team player, and I highly recommend him for any role that requires strong analytical and implementation skills in the digital analytics space.",
    date: "26th Sept 2025",
    url: "https://www.linkedin.com/in/saurabh-lohokare/details/recommendations/",
  }
];

export const certifications = [
  // Add your certifications here
];
