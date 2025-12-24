import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {t('about.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">{t('about.journeyTitle')}</h3>
            <p className="text-gray-300 mb-4">
              {t('about.journeyDesc1')}
            </p>
            <p className="text-gray-300">
              {t('about.journeyDesc2')}
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">{t('about.whatIDoTitle')}</h3>
            <p className="text-gray-300 mb-4">
              {t('about.whatIDoDesc1')}
            </p>
            <p className="text-gray-300">
              {t('about.whatIDoDesc2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;