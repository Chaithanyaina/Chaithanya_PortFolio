import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,

  PhysicsWallah,

  carrent,
  jobit,
  tripguide,
  threejs,
  APSSDC,
  postgreSQL,
  ML,
  jobportal,
  task

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
];
const education = [
  {
    degree: "Bachelor's Degree in Computer Science and Engineering",
    institution: "SRM University AP",
    year: "2021 - 2025",
    score: "8.52 CGPA",
  },
  {
    degree: "12th Grade",
    institution: "NRI Junior College",
    year: "2021",
    score: "939/1000 Marks",
  },
  {
    degree: "10th Grade",
    institution: "Bhashyam School",
    year: "2019",
    score: "9.8/10 CGPA",
  },
];


const services = [
  {
    title: "Web Architect",
    icon: web,
  },
  {
    title: "React Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI-Powered Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgreSQL,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Content Strategist/Technical Trainee",
    company_name: "PhysicsWallah",
    icon: PhysicsWallah,
    iconBg: "#383E56",
    date: "October 2024 - January 2025",
    points: [
      "Created and curated technical content on MERN stack, Data Structures, and Algorithms for 300+ students.",
  "Developed coding exercises and tutorials to enhance learning and problem-solving skills.",
  "Collaborated with cross-functional teams to design structured educational materials.",
  "Designed and reviewed practice problems to help students improve DSA proficiency.",
  "Researched and implemented best practices in web development and backend technologies to create high-quality learning resources."

    ],
  },
  {
    title: "Python Django Project Intern",
    company_name: "APSSDC",
    icon: APSSDC,
    iconBg: "#E6DEDD",
    date: "July 2023 - September 2023",
    points: [
      "Developed a Car Servicing Management System using Python, Django, SQL, and MongoDB as part of an academic project.",
      "Designed an intuitive user interface for customers to book, track, and manage vehicle servicing requests.",
      "Implemented role-based authentication for customers, service providers, and administrators.",
      "Integrated SQL and MongoDB databases to efficiently store and retrieve service records.",
      "Optimized backend queries to ensure smooth handling of 50+ concurrent service requests.",
      "Enhanced user experience by ensuring responsive design and seamless navigation."
    ],
  }
];


const projects = [
  {
    name: "Job Portal",
    description:
      "Developed a MERN-based job portal with a responsive UI, JWT authentication, and advanced job search with 7+ filters, improving match accuracy by 35%. Optimized MongoDB queries for 50+ concurrent users with sub-250ms response times and integrated real-time application tracking for seamless user experience.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    image: jobportal,
    source_code_link: "https://github.com/Chaithanyaina/JobPortal",
  },
  {
    name: "To Do List",
    description:
      "Developed a task management application using React.js, Node.js, and MongoDB, enabling users to create, prioritize, and organize tasks efficiently. Implemented CRUD operations and optimized the database to handle 50+ tasks per user with minimal loading time.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: task,
    source_code_link: "https://github.com/Chaithanyaina/To-Do-List",
  },
  {
    name: "Object Tracking-Federated Learning",
    description:
      "Developed an AI-powered object tracking system using YOLOv8, TensorFlow, and the MERN stack, enabling real-time vehicle detection and congestion monitoring. Integrated federated learning to enhance model accuracy while preserving data privacy. Achieved 80% detection accuracy and processed 15-20 frames per second on standard hardware.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "MERN",
        color: "pink-text-gradient",
      },
    ],
    image: ML,
    source_code_link: "https://github.com/Chaithanyaina/Chaithanya_PortFolio",
  },
];

export { services, technologies, experiences, education, projects };
