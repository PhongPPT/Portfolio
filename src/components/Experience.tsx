import React from 'react';
import type { Experience as ExperienceType } from '../types';

const experiencesData: ExperienceType[] = [
  // {
  //   title: "Senior Full Stack Developer",
  //   company: "Tech Innovations Inc.",
  //   period: "2022 - Present",
  //   description: "Leading development of cloud-native applications and mentoring junior developers. Implemented microservices architecture that improved system scalability by 300%."
  // },
  {
    title: "Full Stack Developer",
    company: "Systory Co., Ltd.",
    period: "2023 - 2025",
    description: `- Design custom documents, such as flowcharts, sequence diagrams, etc. Most of the work is done in Japan, and the application is customizable. Plugins work in the Kintone app.\n
                  - Write code, review code, and create documents related to unit and integration testing.\n
                  - Connect with ChatGPT to help analyze problems and provide solutions.\n
                  - Connect with Google Translate for translation from English to Japanese.\n
                  - Sendgride for emails, with customizable content.\n
                  - Collaborate on various projects with Systory partner companies.`
  },
  // {
  //   title: "Software Engineer",
  //   company: "StartUp Ventures",
  //   period: "2018 - 2020",
  //   description: "Built MVP products for various startups. Collaborated with cross-functional teams to deliver products on time and within budget."
  // }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="min-h-screen px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="space-y-8">
          {experiencesData.map((exp, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400">{exp.title}</h3>
                  <p className="text-xl text-gray-300">{exp.company}</p>
                </div>
                <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
              </div>
              {/* <p className="text-gray-300">{exp.description}</p> */}
              {exp.description.split('\n').map((line, idx) => (
                <p key={idx} className="text-gray-300 mb-2">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;