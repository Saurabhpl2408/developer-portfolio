export const personalInfo = {
  name: "Saurabh Lohokare",
  title: "Software Engineer & Full-Stack Developer",
  email: "lohokare.s@northeastern.edu",
  phone: "+1 (857) 302-9360",
  location: "Boston, MA",
  linkedin: "linkedin.com/in/saurabh-lohokare",
  github: "github.com/Saurabhpl2408",
  intro: "Passionate about building scalable web applications and data-driven solutions. I specialize in full-stack development with a focus on modern web technologies, analytics, and AI integration.",
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
    coursework: ["Distributed Systems", "Web Development", "Data Structures and Algorithms"],
    logo: "🎓",
  },
];

export const skills = {
  "Programming Languages": [
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "🟨" },
    { name: "TypeScript", icon: "🔷" },
    { name: "SQL", icon: "🗄️" },
    { name: ".NET Core", icon: "🟣" },
    { name: "Java", icon: "☕" },
  ],
  "Web Technologies": [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "FastAPI", icon: "⚡" },
    { name: "Tailwind CSS", icon: "🎨" },
  ],
  "Analytics & Reporting": [
    { name: "Google Tag Manager", icon: "🏷️" },
    { name: "Google Analytics 4", icon: "📊" },
    { name: "Looker Studio", icon: "📈" },
    { name: "Grafana", icon: "📉" },
    { name: "Tableau", icon: "📊" },
    { name: "PowerBI", icon: "⚡" },
  ],
  "AI & Data": [
    { name: "Hugging Face", icon: "🤗" },
    { name: "LLMs", icon: "🤖" },
    { name: "LangChain", icon: "🔗" },
    { name: "NLP", icon: "💬" },
    { name: "Computer Vision", icon: "👁️" },
    { name: "Anomaly Detection", icon: "🔍" },
  ],
  "Database & Testing": [
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🐬" },
    { name: "Supabase", icon: "⚡" },
    { name: "Jest", icon: "🃏" },
  ],
  "DevOps & Cloud": [
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "☸️" },
    { name: "Kafka", icon: "📨" },
    { name: "AWS", icon: "☁️" },
    { name: "BigQuery", icon: "📊" },
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
    description: "Chrome extension detecting explicit content in real-time with 92% accuracy on sample datasets. Architected a modular microservices system processing 5–10 concurrent content streams efficiently.",
    duration: "Aug 2023 – Nov 2023",
    github: "https://github.com/Saurabhpl2408/obscenity-blocker",
    tech: ["Chrome Extension", "Microservices", "Python", "Machine Learning"],
    image: "🔒",
  },
  {
    id: 2,
    name: "Real-Time Event Analytics Platform",
    description: "Microservices platform for event ingestion using Kafka, Python, and PostgreSQL, handling 500–1,000 events per minute. Deployed with Grafana dashboards for monitoring throughput and latency.",
    duration: "Jan 2025 – May 2025",
    tech: ["Kafka", "Python", "PostgreSQL", "Grafana", "Microservices"],
    image: "📊",
  },
  {
    id: 3,
    name: "Conversational Analytics Dashboard",
    description: "AI-powered dashboard with Next.js and MongoDB converting natural language queries to SQL. Integrated LangChain and Hugging Face models achieving 85% query accuracy, optimized for 10–20 concurrent users.",
    duration: "May 2025 – Sep 2025",
    tech: ["Next.js", "MongoDB", "Django", "LangChain", "Hugging Face", "AI"],
    image: "💬",
  },
];

export const publications = [
  {
    id: 1,
    title: "Machine Learning Approaches for Real-Time Data Analytics",
    authors: "Saurabh Lohokare, et al.",
    publication: "International Conference on Computing and Data Science",
    year: "2023",
    link: "https://example.com/publication-1",
    description: "Explored various machine learning techniques for processing and analyzing large-scale real-time data streams with applications in predictive analytics.",
  },
  {
    id: 2,
    title: "Optimizing Web Performance: A Study on Modern Frontend Frameworks",
    authors: "Saurabh Lohokare",
    publication: "Journal of Web Technologies",
    year: "2022",
    link: "https://example.com/publication-2",
    description: "Comparative analysis of performance optimization strategies across React, Vue, and Angular frameworks.",
  },
];

export const awards = [
  {
    id: 1,
    title: "Smart India Hackathon 2022",
    issuer: "Government of India",
    date: "2022",
    description: "Won the Smart India Hackathon 2022 along with my team for developing an innovative solution addressing real-world problems using cutting-edge technology.",
    certificate: null, // Space for uploading certificate PDF
  },
  {
    id: 2,
    title: "UNESCO India-Africa Hackathon 2022",
    issuer: "UNESCO",
    date: "2022",
    description: "Awarded winner at the UNESCO India-Africa Hackathon 2022 for creating impactful solutions promoting collaboration between India and African nations.",
    certificate: null, // Space for uploading certificate PDF
  },
];

export const recommendations = [
  {
    id: 1,
    name: "John Doe",
    title: "Senior Software Engineer at Google",
    location: "San Francisco, CA",
    coordinates: [-122.4194, 37.7749], // [longitude, latitude]
    image: "👤",
    relationship: "Worked together at DealerOn",
    text: "Saurabh is an exceptional developer with deep expertise in full-stack development. His work on our analytics platform was outstanding, and his ability to solve complex problems is truly impressive.",
    date: "2024",
  },
  {
    id: 2,
    name: "Priya Sharma",
    title: "Tech Lead at Amazon",
    location: "Bangalore, India",
    coordinates: [77.5946, 12.9716],
    image: "👤",
    relationship: "Colleague at DealerOn",
    text: "Working with Saurabh was a great experience. He brings innovation and dedication to every project. His technical skills combined with excellent communication make him a valuable team member.",
    date: "2024",
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Product Manager at Microsoft",
    location: "Seattle, WA",
    coordinates: [-122.3321, 47.6062],
    image: "👤",
    relationship: "Collaborated on projects",
    text: "Saurabh has a rare combination of technical excellence and business acumen. He consistently delivered high-quality work and was instrumental in the success of our GA4 migration project.",
    date: "2023",
  },
  {
    id: 4,
    name: "Sarah Williams",
    title: "Engineering Manager at Meta",
    location: "London, UK",
    coordinates: [-0.1276, 51.5074],
    image: "👤",
    relationship: "Mentor at Atomic Loops",
    text: "During his internship, Saurabh demonstrated remarkable learning ability and professionalism. He quickly became a key contributor to our frontend team and exceeded all expectations.",
    date: "2022",
  },
];

export const certifications = [
  // Add your certifications here
];
