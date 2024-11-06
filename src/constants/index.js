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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  aws,
  flutter,
  java,
dsa,
litLyrics,
techxchat,
bharatBhraman
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Linux",
    icon: creator,
  },
  {
    title:'Flutter',
    icon: flutter
  }, {
    title:'Aws',
    icon: aws
  },
  {
    title:'Problem Solving',
    icon: dsa
  },{
    
      title: "Frontend Developer",
      icon: backend,
    
  }
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
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Aws",
    icon: aws,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name:'Java',
    icon:java
  }
];



const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TechXChat",
    description:
      " web-based chat platform built using the MERN stack and Socket.io, enabling real-time messaging, media sharing, and seamless connectivity between users. This application provides an intuitive, user-friendly experience similar to WhatsApp, allowing users to communicate instantly with friends, family, or colleagues. With a focus on scalability and performance, it ensures a reliable and efficient messaging solution for staying connected across devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: techxchat,
    source_code_link: "https://github.com/Ramannandiwal/TechXChat.git",
  },
  {
    name: "LitLyrics",
    description:
      "A React Native application designed for immersive audiobook experiences, similar to KuKu FM. This app allows users to discover, listen to, and manage a diverse library of audiobooks across various genres. With features like personalized recommendations, offline listening, bookmarking, and playback speed control, it delivers a tailored and engaging reading experience. The app prioritizes smooth performance and intuitive navigation, making it easy for users to enjoy audiobooks on the go. Perfect for readers and listeners alike, it brings the joy of books into the digital age with accessibility and convenience at its core.",
    tags: [
      {
        name: "reactNative",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    
    ],
    image: litLyrics,
    source_code_link: "https://github.com/Ramannandiwal/LitLyrics.git",
  },
  {
    name: "Bharat Bhraman",
    description:
      "A Flutter-based mobile application with a Python backend, dedicated to showcasing and promoting India's rich cultural heritage. This app provides users with an immersive experience exploring India's diverse traditions, historical landmarks, and lesser-known cultural gems. With interactive features like a cultural map, event calendar, and multimedia galleries, users can engage deeply with India's heritage. Built without the LLaMA 3.1 AI assistant, the backend leverages Ollama to enhance cultural insights and information accessibility. This solution, developed for the Smart India Hackathon, aims to foster cultural awareness and appreciation while making India's heritage accessible to a global audience.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "ollama",
        color: "pink-text-gradient",
      },
    ],
    image: bharatBhraman,
    source_code_link: "https://github.com/Ramannandiwal/ollamabackend.git",
  },
];

export { services, technologies, testimonials, projects };
