import {Github, Mail, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { HeroProps } from '../types';
import Swal from 'sweetalert2';
import FacebookImg from '../assets/Facebook.png';
import MyresumeImg from '../assets/My_resume.jpg';

// Define Facebook type 
type Facebook = {
  title: string;
  image: string;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const { t } = useTranslation();
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl">
              👨‍💻
            </div>
          </div>
          <div className="absolute inset-0 blur-3xl opacity-50 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
          {t('hero.greeting')}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          {t('hero.title')}
        </p>
        {/* <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Building scalable, high-performance applications with modern technologies. Specialized in cloud architecture, microservices, and delivering exceptional user experiences.
        </p> */}

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:scale-105 transform transition-all shadow-lg hover:shadow-purple-500/50"
          >
            {t('hero.viewWork')}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400/10 transition-all"
          >
            {t('hero.contactMe')}
          </button>
          <button
            onClick={() =>
              Swal.fire({
                title: t('hero.myResume'),
                imageUrl: MyresumeImg,
                width: "100%",
                background: "#98999cff",
                color: "#fff",
                showCloseButton: true,
                showConfirmButton: false,
                backdrop: true,
              })
            }
            className="px-8 py-3 border-2 border-gray-400 rounded-full font-semibold hover:bg-gray-400/10 transition-all"
          >
            {t('hero.previewResume')}
          </button>
        </div>

        <div className="flex justify-center space-x-6 mt-12">
          <a href="https://github.com/PhongPPT/Project_Actions_Server-1-" target='_blank' className="hover:text-purple-400 transition-colors" aria-label="GitHub"><Github size={24} /></a>
          <a
            href="#"
            className="hover:text-purple-400 transition-colors"
            onClick={() =>
              Swal.fire({
                // title: "Facebook",
                imageUrl: FacebookImg,
                width: "100%",
                background: "#d6dbe8ff",
                color: "#fff",
                showCloseButton: true,
                showConfirmButton: false,
                backdrop: true,
              })
            }
            // aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a href="contact" onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
            className="hover:text-purple-400 bg-slate-900/95 backdrop-blur-sm shadow-lgtransition-colors" aria-label="Email"><Mail size={24} /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;