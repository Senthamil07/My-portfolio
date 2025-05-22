// SkillsSection.jsx
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript,Si1001Tracklists,SiMysql } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
{ name: "javaScript", icon: <SiJavascript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
   { name: "Mysql", icon: <SiMysql className="text-green-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
];

export default function SkillsSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900" id="skills">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 shadow-md rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-200">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
