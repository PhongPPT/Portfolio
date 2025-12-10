import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">My Journey</h3>
            <p className="text-gray-300 mb-4">
              Developers with strong motivation to grow in the tech industry.
            </p>
            <p className="text-gray-300">
              I am 25 years old and based in Dondou Village, Hadsayfong District, Nakhonluang Province. I graduated with a Bachelor's degree in Computer Science from the National University of Laos in 2021.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">What I Do</h3>
            <p className="text-gray-300 mb-4">
              I specialize in full-stack development, cloud architecture, and DevOps practices. I'm experienced in building microservices, implementing CI/CD pipelines, and optimizing application performance.
            </p>
            <p className="text-gray-300">
              Passionate about software development, continuous learning, and creating efficient solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;