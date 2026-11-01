import type { Project, Experience } from '../types';

export const PERSONAL_INFO = {
  name: 'Nadeem Elsayed',
  title: 'Software Engineering Student',
  university: 'McMaster University',
  degree: 'Bachelor of Engineering, Software Engineering',
  expectedGraduation: 'Expected May 2028',
  location: 'Mississauga / Hamilton / Toronto, ON, Canada',
  email: 'elsayn3@mcmaster.ca',
  github: 'https://github.com/nadeem-elsayed',
  linkedin: 'https://linkedin.com/in/nadeem-elsayed-b63828290',
  resumeUrl: '/resume.pdf',
  profileImage: '/Profile_Picture.png',
  availability: {
    badge: 'Available Winter 2025/2026',
    termLength: 'Seeking 4, 8, 12, or 16-Month Co-op Terms',
    summary: 'Available starting Winter for up to 16 months (minimum 4 months). Ready for high-impact software engineering roles across systems, MLOps, and full-stack development.'
  },
  bio: 'Software Engineering student at McMaster University passionate about computer vision, serverless MLOps, distributed systems, and robust desktop applications. Experienced in developing offline-first systems for real clients and building scale-to-zero cloud backends.'
};

export const ACADEMIC_HONORS = [
  {
    title: "Dean's Honour List",
    organization: 'McMaster University',
    highlight: 'Top Academic Standing',
    detail: 'Recognized for sustained academic excellence in the Software Engineering curriculum.'
  },
  {
    title: 'Golden Key Society Member',
    organization: 'McMaster University',
    highlight: 'Top 15% of Class',
    detail: 'Global collegiate honor society invitation based on high academic standing.'
  },
  {
    title: 'High School Valedictorian',
    organization: 'Philip Pocock Catholic Secondary School',
    highlight: 'June 2023',
    detail: 'Selected to represent the graduating class, recognizing academic achievement, integrity, and peer leadership.'
  }
];

export const JUDGING_SPOTLIGHT = {
  role: 'Programming Division Judge',
  organization: 'McMaster Engineering Competition (MEC)',
  date: 'August 2025',
  participantsCount: '500+ Participants',
  candidatesEvaluated: '100+ Divisional Candidates',
  details: [
    'Evaluated cybersecurity solutions and algorithmic architectures for over 500 total participants across the university competition.',
    'Performed systematic, in-depth technical evaluations of code efficiency, runtime complexity (Big-O), logic soundness, and software design patterns to narrow down the winning team out of 100+ candidates.',
    'Assessed defensive security postures, data sanitization, and architectural resilience under stress-test testcases.'
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'hostel-ops',
    role: 'Software Developer',
    organization: 'Independent Client (Hostel Operations System)',
    period: 'Apr 2026 – Aug 2026',
    location: 'Toronto, ON',
    bullets: [
      'Conducted requirements-gathering sessions with the end-client to architect a specialized system tailored to unique operational pain points.',
      'Engineered a local, offline desktop application (React, TypeScript, Electron, SQLite) to manage long-term operations for staff and 1,000+ guests.',
      'Designed an intuitive, responsive user interface that reduced management manual administrative toil by approximately 30 minutes daily.',
      'Developed an automated shift scheduler for 10-20 employees, tracking work hours and payments for streamlined tax calculations.'
    ],
    techStack: ['React', 'TypeScript', 'Electron', 'SQLite', 'Node.js']
  },
  {
    id: 'mcmaster-creates',
    role: 'Software Team Developer',
    organization: 'McMaster Creates',
    period: 'Sept 2024 – Dec 2024',
    location: 'Hamilton, ON',
    bullets: [
      'Developed modern web platforms using HTML/CSS/JavaScript and React while providing technical guidance and architecture planning to 100+ members.',
      'Mentored junior students on modular component structuring, Git workflows, and front-end best practices.'
    ],
    techStack: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Git']
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'iron-man',
    title: 'IronMan Gesture Control System',
    subtitle: 'Real-time Computer Vision & Serverless MLOps Pipeline',
    description: 'A real-time computer vision system that maps hand gestures from the HaGRID dataset directly to automated Windows OS actions and keyboard shortcuts, supported by a scale-to-zero serverless cloud backend.',
    architecturePoints: [
      'Engineered a real-time computer vision system using PyTorch and OpenCV mapping hand gestures from HaGRID dataset to automated Windows OS shortcuts.',
      'Designed a scale-to-zero serverless MLOps backend using AWS Lambda and Docker containers, fully automated through GitHub Actions CI/CD pipelines.'
    ],
    techStack: ['Python', 'PyTorch', 'OpenCV', 'AWS Lambda', 'Docker', 'GitHub Actions', 'HaGRID'],
    githubUrl: 'https://github.com/Nadeem-Elsayed/Iron-Man',
    metrics: '< 35ms Inference Latency',
    badge: 'Flagship MLOps Project',
    featured: true
  },
  {
    id: 'hostel-scheduler',
    title: 'Hotel-Scheduler (Hostel Operations App)',
    subtitle: 'Offline Desktop Client Management Software',
    description: 'An offline-first desktop application engineered for an independent client to streamline operations for staff and 1,000+ guests with local SQLite persistence and automated payroll tracking.',
    architecturePoints: [
      'Engineered with React, TypeScript, Electron, and SQLite for 100% offline reliability in commercial environments.',
      'Automated shift scheduler for 10-20 employees, tracking hours, rate calculations, and tax prep to eliminate 30 mins of daily toil.'
    ],
    techStack: ['React', 'TypeScript', 'Electron', 'SQLite', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Nadeem-Elsayed/Hotel-Scheduler',
    metrics: '1,000+ Guests Managed',
    badge: 'Production Client Software',
    featured: true,
    videoDemo: {
      type: 'youtube',
      url: 'https://www.youtube.com/embed/imUtS33-Pxs',
      caption: 'Offline desktop client operations, shift scheduling, and guest management walkthrough'
    }
  },
  {
    id: 'lumina',
    title: 'Lumina 2D Game & Physics Engine',
    subtitle: 'Custom 2D Collision Detection & Mechanics',
    description: 'Led a 4-person engineering team to build a 2D platformer game featuring custom-built collision detection, gravity, and physics simulation algorithms from the ground up in Java and JavaFX.',
    architecturePoints: [
      'Secured 1st place out of 150 participants in the DPCDSB Creative Videogame Hackathon for the most technically impressive project.',
      'Architected custom bounding-box collision detection algorithms and modular state management.'
    ],
    techStack: ['Java', 'JavaFX', 'OOP', 'Game Physics Engine', 'Custom Collision'],
    githubUrl: 'https://github.com/Nadeem-Elsayed/Lumina',
    metrics: '1st Place / 150 Participants',
    badge: 'Hackathon 1st Place Winner',
    featured: true
  },
  {
    id: 'weather-network',
    title: 'IoT Sensor Data Pipeline',
    subtitle: 'High-Throughput Bus Pipe & Filter Architecture',
    description: 'Collaborated in a 4-person team to engineer an event-driven IoT weather metric aggregation system with a secure REST API to process real-time environmental data with anonymized third-party consumption.',
    architecturePoints: [
      'Implemented a Bus Pipe and Filter architecture, ensuring high-throughput and reliable event processing.',
      'Architected asynchronous message routing with Vert.x and real-time visualization with React.'
    ],
    techStack: ['Java', 'Vert.x', 'React', 'REST API', 'Pipe & Filter Architecture'],
    githubUrl: 'https://github.com/Nadeem-Elsayed/Weather-Network',
    metrics: 'Event-Driven Real-Time Stream',
    badge: 'Distributed Systems',
    featured: true
  }
];

export const OTHER_PROJECTS = [
  {
    title: 'Rock-Paper-Scissors ML',
    description: 'Face off against a machine learning algorithm in Java that predicts user choices through Markov patterns and adaptive frequency analysis.',
    tech: ['Java', 'Machine Learning', 'JavaFX'],
    github: 'https://github.com/Nadeem-Elsayed/Machine-Learning---Rock-Paper-Scissors'
  },
  {
    title: 'Act-Push Git CLI',
    description: 'Shell script utility automating local Git workflow: stage, commit, tag, and push with safety verifications.',
    tech: ['Shell', 'Bash', 'Git Automation'],
    github: 'https://github.com/Nadeem-Elsayed/Act-Push'
  },
  {
    title: 'runc Linux Compiler Tool',
    description: 'Developer productivity script streamlining compiling and executing complex multi-file C programs directly in Linux terminal.',
    tech: ['C', 'Bash', 'Linux CLI'],
    github: 'https://github.com/Nadeem-Elsayed/runc'
  },
  {
    title: 'Wikipedia Scraper',
    description: 'Targeted web scraping tool in Python parsing semantic header trees (H2, H3) to extract structured topic taxonomies.',
    tech: ['Python', 'BeautifulSoup', 'Web Scraping'],
    github: 'https://github.com/Nadeem-Elsayed/WikipediaScraper'
  }
];

export const SKILLS_DATA = {
  languages: [
    { name: 'Java', level: 'Advanced' },
    { name: 'Python', level: 'Advanced' },
    { name: 'TypeScript', level: 'Proficient' },
    { name: 'JavaScript', level: 'Proficient' },
    { name: 'C', level: 'Proficient' },
    { name: 'Go', level: 'Intermediate' },
    { name: 'SQL / MySQL', level: 'Proficient' },
    { name: 'Bash / Shell', level: 'Proficient' },
    { name: 'R', level: 'Academic' },
    { name: 'Verilog', level: 'Academic' }
  ],
  frameworks: [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Electron', category: 'Desktop' },
    { name: 'PyTorch', category: 'Machine Learning' },
    { name: 'OpenCV', category: 'Computer Vision' },
    { name: 'Vert.x', category: 'Reactive Systems' },
    { name: 'JavaFX', category: 'Desktop UI' },
    { name: 'REST APIs', category: 'Web Services' },
    { name: 'Selenium', category: 'Automation Testing' }
  ],
  toolsAndCloud: [
    { name: 'AWS Lambda', category: 'Serverless' },
    { name: 'Docker', category: 'Containers' },
    { name: 'Git & GitHub Actions', category: 'CI/CD' },
    { name: 'Linux', category: 'OS / CLI' },
    { name: 'SQLite', category: 'Embedded Database' },
    { name: 'Maven', category: 'Build Tool' },
    { name: 'MATLAB', category: 'Computation' },
    { name: 'Quartus', category: 'FPGA / Hardware' }
  ],
  coursework: [
    'Data Structures & Algorithms',
    'Applications of Machine Learning',
    'Object-Oriented Programming',
    'CI/CD & Software Testing',
    'Databases & Concurrency',
    'Large System Design',
    'Software Requirements Engineering'
  ]
};
