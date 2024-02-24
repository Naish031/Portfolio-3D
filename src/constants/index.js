import {
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  threejs,
  vemely,
  obsTechnology,
  photo,
  websiteReact,
  dashboard,
  FoodyZone,
  testimonial_one,
  testimonial_two,
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
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Photograhy",
    icon: photo,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "OBS-Technologia",
    icon: obsTechnology,
    iconBg: "#383E56",
    date: "June 2023 - September 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Next.js/React.js Developer",
    company_name: "Veme.ly",
    icon: vemely,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Demonstrated proficiency in Next.js and React.js frameworks to create dynamic and engaging user interfaces..",
      "Collaborated closely with UI/UX designers to interpret and implement design concepts into interactive Next.js/React applications.",
      "Responsible for designing and testing user interfaces, ensuring compatibility and responsiveness across various devices and screen sizes.",
      "Developed and maintained reusable components and front-end libraries for future use.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Naish Abbas for his outstanding work and dedication as a team member on our latest software development project. Naish's exceptional skills, positive attitude, and willingness to collaborate made him a pleasure to work with.",
    name: "Yousaf Rehman",
    designation: "Student",
    company: "University of Hertfordshire",
    image: testimonial_one,
  },
  {
    testimonial:
      "I had the pleasure of collaborating with Naish on a React/Next.js project where he demonstrated a keen eye for design, strong technical proficiency, and excellent communication skills..",
    name: "Shameer Abdullah",
    designation: "Freelancer",
    company: "Fiver",
    image: testimonial_two,
  },
];

const projects = [
  {
    name: "Modern Design Website",
    description:
      "A fully responsive website with modern UI/UX in React js with tailwind.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: websiteReact,
    source_code_link: "https://github.com/Naish031/modern-website",
  },
  {
    name: "DashBoard Project",
    description:
      "A dashboard project pressented to display various types of visual data in one place",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "green-text-gradient",
      },
      {
        name: "ChakraUI",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/Naish031/Dashboard",
  },
  {
    name: "FoodyZone Application",
    description:
      "FoodyZone is a user-friendly website designed to simplify the search for food options, offering categorized listings of breakfast, lunch, and dinner choices. With a minimalist interface and a convenient search bar, users can effortlessly explore the platform to find their desired dishes.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "backend api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: FoodyZone,
    source_code_link: "https://github.com/Naish031/FoodyZone-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
