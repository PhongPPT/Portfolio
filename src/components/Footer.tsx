import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 John Doe. {t('footer.copyright')}.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;