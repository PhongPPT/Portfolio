import React from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' },
    { code: 'lo', name: 'ລາວ', flag: '🇱🇦' }
  ];

  // const changeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng);
  // };

  // 1. Logic to check localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (!savedLanguage) {
      i18n.changeLanguage('en');
      localStorage.setItem('i18nextLng', 'en');
    }
  }, [i18n]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // 2. Save choice to localStorage so it persists on refresh
    localStorage.setItem('i18nextLng', lng);
  };

  // 3. Helper to find the current language object safely
  const currentLanguage = languages.find(lang => i18n.language?.startsWith(lang.code)) || languages[0];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
        <Globe size={20} />
        <span className="hidden md:inline">
          {/* {languages.find(lang => lang.code === i18n.language)?.flag || 'en'} */}
          {currentLanguage.flag}
        </span>
      </button>

      {/* Dropdown */}
      <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg border border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-slate-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
              // i18n.language === lang.code ? 'bg-purple-600/20 text-purple-400' : ''
              i18n.language?.startsWith(lang.code) ? 'bg-purple-600/20 text-purple-400' : 'text-white'
            }`}
          >
            <span className="text-2xl">{lang.flag}</span>
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;