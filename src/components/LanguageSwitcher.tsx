import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' },
    { code: 'lo', name: 'ລາວ', flag: '🇱🇦' }
  ];

  // Close dropdown when clicking outside (essential for mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    setIsOpen(false); // Close menu after selection
  };

  const currentLanguage = languages.find(lang => i18n.language?.startsWith(lang.code)) || languages[0];

  return (
    <div className="relative" ref={menuRef}>
      {/* Button: Use onClick for mobile compatibility */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors border border-slate-600 md:border-transparent"
      >
        <Globe size={20} className="text-slate-300" />
        <span className="text-sm font-medium">
          {currentLanguage.flag}
        </span>
      </button>

      {/* Dropdown: Controlled by isOpen state */}
      <div className={`
        absolute right-0 mt-2 w-44 
        bg-slate-800 rounded-xl shadow-2xl border border-slate-700 
        transition-all duration-200 z-[100]
        ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
      `}>
        <div className="py-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-slate-700 transition-colors ${
                i18n.language?.startsWith(lang.code) 
                  ? 'bg-purple-600/20 text-purple-400' 
                  : 'text-slate-200'
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;