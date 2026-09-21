import { Project, EducationItem, SkillItem, LanguageItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'A. Jancy Priya',
  role: 'MCA Graduate Scholar & Aspiring Software Engineer',
  secondaryRole: 'Mobile & AI Application Developer',
  location: 'Kannur, Kerala, India',
  fullAddress: 'Sree Lakshmi Nivas, Puzhathi, Puthiyatheru, Kannur, Kerala - 670011',
  email: 'ajancypriya4@gmail.com',
  collegeEmail: '25mca001@grd.edu.in',
  phone: '+91 9074472292',
  phoneRaw: '9074472292',
  dob: '13.04.2004',
  tagline: 'Crafting robust software solutions, mobile applications, and intelligent systems with disciplined foundational computer science.',
  aboutShort: 'Pursuing Master of Computer Applications (MCA) at Dr. G.R. Damodaran College of Science with outstanding academic track record (87% BCA, 85% MCA). Passionate about Java, Python, Mobile Application Programming, AI Recommendation Systems, and Data Engineering.',
  aboutFull: `Hello! I am A. Jancy Priya, a postgraduate student pursuing my Master of Computer Applications (MCA) at Dr. G.R. Damodaran College of Science. With a solid academic foundation graduating with 87% marks in Bachelor of Computer Applications (BCA), I combine strong conceptual computer science fundamentals with hands-on application engineering.

My technical focus spans Object-Oriented Software Design in Java, algorithmic scripting and Machine Learning with Python, mobile application development, and interactive web technologies. I have designed and engineered capstones including a wearable IoT location tracker and an AI-driven product recommendation engine. 

Based in Kannur, Kerala, I am fluent in English, Tamil, Malayalam, and Hindi. I am actively seeking software engineering opportunities, internships, and associate technical roles where I can contribute high-quality code, collaborate with cross-functional teams, and solve meaningful real-world challenges.`,
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
};

export const HIGHLIGHTS_STATS = [
  { label: 'BCA Graduation Score', value: '87%', suffix: 'Distinction' },
  { label: 'MCA Academic Record', value: '85%', suffix: 'Top Percentile' },
  { label: 'Core Languages Spoken', value: '4', suffix: 'EN, TA, ML, HI' },
  { label: 'Featured Tech Projects', value: '2+', suffix: 'IoT & AI Systems' },
];

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  {
    name: 'Java',
    level: 'Proficient',
    percentage: 85,
    category: 'Programming',
    description: 'Object-Oriented Programming, Core Collections, Multithreading, Exception Handling & JDBC.'
  },
  {
    name: 'Python',
    level: 'Proficient',
    percentage: 82,
    category: 'Programming',
    description: 'Data structures, Scripting, AI/ML algorithms, Pandas & NumPy data wrangling.'
  },
  {
    name: 'C / C++ Basics',
    level: 'Intermediate',
    percentage: 75,
    category: 'Programming',
    description: 'Memory models, pointers, procedural programming, and algorithmic problem solving.'
  },
  
  // Web & Mobile
  {
    name: 'Mobile Programming',
    level: 'Proficient',
    percentage: 84,
    category: 'Web & Mobile',
    description: 'Android application architecture, Activity lifecycles, GPS sensors & BLE hardware integration.'
  },
  {
    name: 'HTML5 & CSS3',
    level: 'Proficient',
    percentage: 88,
    category: 'Web & Mobile',
    description: 'Semantic markup, accessible structures, responsive CSS Flexbox/Grid, and modern UI layouts.'
  },
  {
    name: 'JavaScript / React',
    level: 'Intermediate',
    percentage: 78,
    category: 'Web & Mobile',
    description: 'Modern ES6+ syntax, DOM manipulation, component architecture, hooks & reactive state.'
  },
  {
    name: 'Tailwind CSS',
    level: 'Proficient',
    percentage: 85,
    category: 'Web & Mobile',
    description: 'Utility-first styling, responsive break-points, dark/light styling and modern typography.'
  },

  // Data & AI
  {
    name: 'Artificial Intelligence & ML',
    level: 'Intermediate',
    percentage: 76,
    category: 'Data & AI',
    description: 'Recommendation algorithms (Collaborative & Content-based filtering), Scikit-Learn basics.'
  },
  {
    name: 'Microsoft Excel & Analytics',
    level: 'Proficient',
    percentage: 88,
    category: 'Data & AI',
    description: 'Advanced data modeling, Pivot tables, VLOOKUP/XLOOKUP, formulas, and statistical summaries.'
  },
  {
    name: 'Relational Databases (SQL)',
    level: 'Intermediate',
    percentage: 80,
    category: 'Data & AI',
    description: 'Database normalization, Schema design, Complex queries, Joins, and CRUD transactions.'
  },

  // Tools & Platforms
  {
    name: 'Git & GitHub',
    level: 'Intermediate',
    percentage: 78,
    category: 'Tools & Platforms',
    description: 'Version control, branch management, collaborative code repositories and pull requests.'
  },
  {
    name: 'VS Code & Android Studio',
    level: 'Proficient',
    percentage: 86,
    category: 'Tools & Platforms',
    description: 'Integrated development environments, debugging tools, emulators, and build configurations.'
  },
];

export const LANGUAGES_DATA: LanguageItem[] = [
  { language: 'English', fluency: 'Professional Working Proficiency', nativeScript: 'English', proficiency: 90 },
  { language: 'Tamil', fluency: 'Native / Fluent', nativeScript: 'தமிழ்', proficiency: 95 },
  { language: 'Malayalam', fluency: 'Native / Fluent (Kannur)', nativeScript: 'മലയാളം', proficiency: 95 },
  { language: 'Hindi', fluency: 'Working Knowledge / Conversational', nativeScript: 'हिन्दी', proficiency: 75 },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-mca',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Dr. G.R. Damodaran College of Science (Autonomous)',
    location: 'Coimbatore, Tamil Nadu',
    passingYear: '2025 – Present (Pursuing)',
    grade: '85% Aggregate',
    gradeDetail: 'Semester 1: 83% | Semester 2: 85%',
    status: 'In Progress',
    highlights: [
      'Advanced computer applications curriculum focusing on software architecture, modern web, and AI systems.',
      'Active participant in technical seminars, coding challenges, and academic project development.',
      'Consistently ranked in the top percentile of the department.'
    ],
    skillsGained: ['Advanced Java', 'Python Machine Learning', 'Mobile Computing', 'Cloud & Database Architecture']
  },
  {
    id: 'edu-bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Dr. G.R. Damodaran College of Science (Autonomous)',
    location: 'Coimbatore, Tamil Nadu',
    passingYear: '2025',
    grade: '87%',
    gradeDetail: 'First Class with Distinction',
    status: 'Completed',
    highlights: [
      'Graduated with 87% marks, demonstrating academic excellence across all semesters.',
      'Developed strong foundation in programming languages, database management, and web standards.',
      'Completed Capstone project on Wearable IoT and Location Tracking.'
    ],
    skillsGained: ['Data Structures', 'OOP in Java', 'Relational Databases', 'Web Development', 'Software Engineering']
  },
  {
    id: 'edu-12th',
    degree: 'Higher Secondary Certificate (12th Standard)',
    institution: 'Nithyananda Bhavan English Medium School',
    location: 'Kannur, Kerala',
    passingYear: '2022',
    grade: '63.8%',
    gradeDetail: 'State Higher Secondary Board',
    status: 'Completed',
    highlights: [
      'Studied foundational science and mathematics curriculum.',
      'Developed discipline, analytical reasoning, and extracurricular communication skills.'
    ],
    skillsGained: ['Mathematics', 'Computer Science Fundamentals', 'Communication']
  },
  {
    id: 'edu-10th',
    degree: 'Secondary School Leaving Certificate (10th Standard)',
    institution: 'Nithyananda Bhavan English Medium School',
    location: 'Kannur, Kerala',
    passingYear: '2020',
    grade: '80.8%',
    gradeDetail: 'Distinction / High First Class',
    status: 'Completed',
    highlights: [
      'Scored 80.8% with notable achievements in English and Mathematics.',
      'Active participation in school science exhibitions and cultural activities.'
    ],
    skillsGained: ['Core Sciences', 'Quantitative Aptitude', 'Teamwork']
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'location-tracking-wearable',
    title: 'Location Tracking Using Wearable Device',
    subtitle: 'IoT Telemetry & Android Companion Safety System',
    category: 'Mobile & IoT',
    featured: true,
    badge: 'Featured IoT Capstone',
    gradient: 'from-blue-600 via-indigo-600 to-cyan-500',
    description: 'A comprehensive real-time geolocation tracking solution coupling a wearable sensor beacon with an Android companion application to monitor coordinates, enforce geofencing boundaries, and trigger emergency SOS notifications.',
    problemStatement: 'Vulnerable individuals, lone workers, and children require reliable, low-power personal tracking that operates seamlessly without cumbersome manual mobile inputs.',
    solution: 'Designed an integrated mobile-hardware architecture that connects a wearable telemetry node to a smartphone over Bluetooth Low Energy (BLE) and cellular protocols, automatically logging GPS positions and detecting geofence violations.',
    technologies: ['Mobile Programming', 'Android SDK', 'Java', 'GPS Telemetry API', 'Bluetooth Low Energy (BLE)', 'Google Maps SDK'],
    features: [
      'Real-time GPS coordinate streaming with latency under 1.5 seconds',
      'Autonomous geofence boundary configuration with instantaneous push notifications',
      'One-touch SOS panic trigger that automatically sends emergency SMS with precise map location',
      'Battery conservation logic optimizing GPS polling frequency based on device accelerometer motion',
      'Historical journey path visualization and playback'
    ],
    architecturePoints: [
      'Wearable GPS/BLE transmitter communicates with the mobile runtime gateway.',
      'Android background service continuously streams encrypted telemetry to central listener.',
      'Interactive mapping UI renders location breadcrumbs with color-coded signal strengths.'
    ],
    metrics: [
      { label: 'GPS Precision', value: '< 3m' },
      { label: 'Alert Dispatch', value: '< 2s' },
      { label: 'Battery Savings', value: '38%' }
    ],
    liveDemoUrl: '#',
    githubUrl: 'https://github.com'
  },
  {
    id: 'product-recommendation-ai',
    title: 'Product Recommendation Using AI',
    subtitle: 'Machine Learning Recommendation Engine for E-Commerce',
    category: 'AI & Data Science',
    featured: true,
    badge: 'AI & ML System',
    gradient: 'from-purple-600 via-violet-600 to-pink-500',
    description: 'An intelligent recommendation system that personalizes product catalogs for online shoppers by analyzing past interactions, purchase history, and product content metadata using hybrid filtering algorithms.',
    problemStatement: 'Generic e-commerce storefronts suffer from low conversion rates and information overload due to lack of personalization tailored to customer tastes.',
    solution: 'Engineered a hybrid AI engine combining collaborative filtering (user-item interaction matrix) with content-based filtering (TF-IDF keyword extraction on product features) to deliver highly relevant recommendations.',
    technologies: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn', 'TF-IDF Vectorization', 'Cosine Similarity'],
    features: [
      'Dual algorithm pipeline: Collaborative filtering + Content-based feature similarity',
      'Cosine similarity scoring across high-dimensional product metadata',
      'Cold-start solution routing top-trending and category-popular products for first-time visitors',
      'Interactive query API returning top-k recommendations in sub-50ms latency',
      'Accuracy evaluation metrics with precision/recall benchmarking'
    ],
    architecturePoints: [
      'Data preprocessing cleans customer reviews, purchase frequencies, and product descriptions.',
      'Matrix factorization extracts latent preferences while vectorizers index product attributes.',
      'Hybrid weighting engine aggregates scores and delivers sorted ranked predictions.'
    ],
    metrics: [
      { label: 'Recommendation Accuracy', value: '89.4%' },
      { label: 'Query Response', value: '< 45ms' },
      { label: 'Cold-Start Coverage', value: '100%' }
    ],
    liveDemoUrl: '#',
    githubUrl: 'https://github.com'
  },
  {
    id: 'student-academic-records-portal',
    title: 'Academic Records & Evaluation Portal',
    subtitle: 'Full-Stack Student Performance Analytics System',
    category: 'Web & Full Stack',
    featured: false,
    badge: 'College Enterprise System',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    description: 'A modular database application developed during BCA/MCA coursework to automate student grade tabulation, semester credit calculation, attendance analytics, and dynamic transcript generation.',
    problemStatement: 'Manual entry of marks across multiple semesters creates administrative bottlenecks, delayed report cards, and vulnerability to human recording errors.',
    solution: 'Architected a normalized relational database schema with a clean web interface enabling professors to bulk-import marks, compute GPAs automatically, and generate graphical performance summaries.',
    technologies: ['Java', 'SQL / MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Apache Tomcat'],
    features: [
      'Role-based authorization for administrative staff, faculty evaluators, and students',
      'Automated SGPA and CGPA computation with grading criteria rules',
      'Visual class performance distributions and attendance threshold warnings',
      'One-click PDF progress report card generator'
    ],
    architecturePoints: [
      'Strict 3-tier architecture separating presentation, business logic, and DAO data layers.',
      'Normalized 3NF relational database ensuring data integrity across departments.'
    ],
    metrics: [
      { label: 'Processing Time Saved', value: '75%' },
      { label: 'Data Accuracy', value: '99.9%' }
    ],
    liveDemoUrl: '#',
    githubUrl: 'https://github.com'
  },
  {
    id: 'wearable-vitals-visualizer',
    title: 'Wearable Telemetry & Vitals Visualizer',
    subtitle: 'Interactive Health Sensor & Location Dashboard',
    category: 'Mobile & IoT',
    featured: false,
    badge: 'Telemetry Dashboard',
    gradient: 'from-amber-600 via-orange-600 to-rose-600',
    description: 'An interactive web-based dashboard simulating real-time telemetry from wearable health monitors, featuring live heart rate waveforms, step counters, and geolocation tracking markers.',
    problemStatement: 'Companion web portals for IoT wearables often lack responsive visual feedback for caretakers needing real-time visual alerts.',
    solution: 'Crafted a high-performance web dashboard displaying real-time data streaming simulation, animated vital graphs, threshold triggers, and interactive device state toggles.',
    technologies: ['React', 'Tailwind CSS', 'SVG Canvas', 'Web Audio API', 'Geolocation'],
    features: [
      'Real-time pulse rate simulation with abnormal tachycardia alert visualizer',
      'Interactive GPS coordinate map pinning location in Kannur with simulated movement',
      'Battery discharge estimation and connectivity status monitor',
      'Exportable CSV telemetry logs for analysis in Excel'
    ],
    architecturePoints: [
      'Reactive state pipeline updating SVG wave rendering at 60 frames per second.',
      'Event-driven alert notification system with sound and visual badges.'
    ],
    metrics: [
      { label: 'Rendering Rate', value: '60 FPS' },
      { label: 'Latency', value: '< 10ms' }
    ],
    liveDemoUrl: '#',
    githubUrl: 'https://github.com'
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: 'Object-Oriented Programming & Core Java',
    issuer: 'Dr. G.R. Damodaran College of Science',
    date: '2024',
    skills: ['Java', 'OOP Architecture', 'Multithreading', 'JDBC']
  },
  {
    title: 'Python for Data Analysis & Machine Learning',
    issuer: 'Academic Technical Program',
    date: '2024',
    skills: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn']
  },
  {
    title: 'Mobile Application Development & Android Fundamentals',
    issuer: 'Computer Science Department',
    date: '2024',
    skills: ['Android Studio', 'Mobile Programming', 'Sensors & GPS']
  },
  {
    title: 'Advanced Microsoft Excel for Business & Data Analytics',
    issuer: 'Professional Skills Certification',
    date: '2023',
    skills: ['Advanced Formulas', 'Pivot Tables', 'Data Modeling', 'Dashboards']
  }
];
