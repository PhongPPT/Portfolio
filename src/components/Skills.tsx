import React from 'react';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import { Code, Database, Server, Layers, Zap, Award, BookOpen } from 'lucide-react';
import type { SkillCategory } from '../types';
import ReactImg from '../assets/React.jpg';
type Certification = {
  title: string;
  image: string;
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React + vite / Next.js", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 80 },
      { name: "JQuery", level: 90 }
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js / Express", level: 80 },
      { name: "REST APIs", level: 80 },
      { name: "PHP PDO", level: 100 },
    ]
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: [
      { name: "MySQL", level: 100 },
      { name: "MongoDB", level: 90 },
      { name: "Firebase", level: 90 },
    ]
  },
  {
    title: "Kintone Development",
    icon: Layers,
    skills: [
      { name: "Kintone Customization (JavaScript, CSS, Events)", level: 100 },
      { name: "Kintone plugins Development ", level: 100 },
      { name: "Kintone API Integration", level: 100 },
    ]
  },

  {
    title: "Unit testing & E2E Testing",
    icon: Layers,
    skills: [
      { name: "Unit Testing", level: 100 },
      { name: "Integration Testing", level: 100 },
      { name: "E2E Testing(Cypress, jest)", level: 70 },
    ]
  },

  {
    title: "Other Technologies",
    icon: Zap,
    skills: [
      { name: "WebSockets / Real-time", level: 88 },
      // { name: "Machine Learning Basics", level: 20 },
      // { name: "Blockchain", level: 78 },
    ]
  }
];

// const certifications: Certification[] = [
//   {
//     title: t("awards.title"),
//     image: ReactImg,
//   },
// ];

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const certifications: Certification[] = [
    {
      title: t("awards.description"),
      image: ReactImg,
    },
  ];

  return (
    <section id="skills" className="min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Comprehensive technical proficiency across the full development lifecycle
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-purple-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="flex items-center mb-6">
            <Award className="text-purple-400 mr-3" size={32} />
            <h3 className="text-2xl font-bold">{t('awards.title')}</h3>
          </div>
          {/* <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center p-4 bg-purple-600/10 rounded-lg border border-purple-400/30">
                <BookOpen className="text-purple-400 mr-3" size={20} />
                <span className="text-gray-300 cursor-pointer" onClick={() => setSelectedCert(cert)}>{cert.title}</span>
              </div>
            ))}
          </div> */}
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-purple-600/10 rounded-lg border border-purple-400/30"
              >
                <BookOpen className="text-purple-400 mr-3" size={20} />
                <span
                  className="text-gray-300 cursor-pointer hover:text-purple-400 transition-colors"
                  onClick={() =>
                    Swal.fire({
                      title: cert.title,
                      imageUrl: cert.image,
                      imageAlt: cert.title,
                      width: "100%",
                      background: "#0f172a",
                      color: "#fff",
                      showCloseButton: true,
                      showConfirmButton: false,
                      backdrop: true,
                    })
                  }
                >
                  {cert.title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;