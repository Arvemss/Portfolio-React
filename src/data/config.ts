import type { Project } from "../types";

export const profile = {
  name: "Arnaldo Velis",
  title: "Frontend Developer",
  bio:
    "Soy un desarrollador frontend enfocado en construir interfaces modernas, limpias y funcionales. Me especializo en React y TypeScript, y disfruto transformando ideas en experiencias interactivas. Siempre estoy buscando aprender nuevas tecnologías y colaborar en proyectos que generen impacto real.",
  contact: {
    email: "velisarnaldo@gmail.com",
    linkedIn: "https://LinkedIn.com/arnaldo-velisb"
  }
};

export const skills = [
  "React",
  "TypeScript",
  "JavaScript (ES6+)",
  "TailwindCSS",
  "HTML & CSS",
  "Framer Motion",
  "React Router",
  "Zustand",
  "Git & GitHub",
  "APIs REST",
  "Vite",
  "Figma (lectura de diseños)"
];

export const projects: Project[] = [
  {
    name: "DevFinder",
    description: "App para buscar perfiles de GitHub usando la API pública.",
    tech: ["React", "TypeScript", "TailwindCSS", "Axios"],
    repo: "https://github.com/arnaldo/devfinder",
    demo: "https://devfinder.example.com"
  },
  {
    name: "TaskFlow",
    description: "Gestor de tareas estilo Trello con drag & drop.",
    tech: ["React", "Zustand", "TailwindCSS", "TypeScript"],
    repo: "https://github.com/arnaldo/taskflow",
    demo: "https://taskflow.example.com"
  },
  {
    name: "Portfolio v1",
    description: "Primer portafolio personal con routing, animaciones y contacto.",
    tech: ["React", "React Router", "Framer Motion", "EmailJS"],
    repo: "https://github.com/arnaldo/portfolio-v1",
    demo: "https://arnaldo-portfolio.example.com"
  },
  {
    name: "WeatherSnap",
    description: "App del clima basada en ubicación o búsqueda.",
    tech: ["React", "TypeScript", "OpenWeatherMap API", "TailwindCSS"],
    repo: "https://github.com/arnaldo/weathersnap",
    demo: "https://weathersnap.example.com"
  }
];
