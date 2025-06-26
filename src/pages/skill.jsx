import React from "react";
import { motion } from "framer-motion";

const skillsData = {
  Programming: [
    { name: "C", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Java", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  ],
  "Web Design": [
    { name: "HTML", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Tailwind", level: "Intermediate", icon: "https://i.ibb.co/0p3sM3S5/tailwind-css-256x154.png" },
    { name: "Material-UI", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
  ],
  Frontend: [
    { name: "JavaScript", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", level: "Begginer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  ],
  Backend: [
    { name: "Node.js", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", level: "Beginner", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  ],
  Database: [
    { name: "MongoDB", level: "Beginner", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "SQL", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ],
};

const SkillCard = ({ name, level, icon }) => (
  <motion.div
    className="flex flex-col items-center p-4 bg-transparent"
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
  >
    <img src={icon} alt={name} className="w-16 h-16 mb-2" />
    <h4 className="font-semibold text-gray-700">{name}</h4>
    <p className="text-sm text-gray-500">{level}</p>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="py-10 px-4 md:px-12 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-center mt-10 pb-3 border-b-2 border-gray-300 mb-10">Skills</h2>
      {/* <p className="text-center text-gray-600 mb-12">My Favourite Skills</p> */}

      {Object.entries(skillsData).map(([category, skills]) => (
  <div key={category} className="mb-16">
    <h3 className="text-2xl font-semibold mb-6 text-gray-700 text-center">{category}</h3>
    <div className="flex flex-wrap gap-14 justify-center">
      {skills.map((skill) => (
        <SkillCard key={skill.name} {...skill} />
      ))}
    </div>
  </div>
))}

    </div>
  );
};

export default Skills;
