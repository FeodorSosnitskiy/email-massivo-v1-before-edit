import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, TranslationKey } from '../i18n/translations';
import { setLanguageCookie, getLanguageFromCookie } from '../utils/cookies';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKey;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Сначала проверяем cookie, потом localStorage
    const cookieLang = getLanguageFromCookie();
    if (cookieLang) {
      return cookieLang;
    }
    const saved = localStorage.getItem('emailmassivo-language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    // Сохраняем и в localStorage, и в cookie
    localStorage.setItem('emailmassivo-language', language);
    setLanguageCookie(language);
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
