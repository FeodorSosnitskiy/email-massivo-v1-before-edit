import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { translations, Language, TranslationKey } from '../i18n/translations';
import { setLanguageCookie, getLanguageFromCookie } from '../utils/cookies';
import { getLanguageFromPath, getPathWithoutLanguage, getPathWithLanguage } from '../utils/languageRoutes';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKey;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [language, setLanguageState] = useState<Language>(() => {
    // Сначала определяем язык из URL
    if (typeof window !== 'undefined') {
      const urlLang = getLanguageFromPath(window.location.pathname);
      if (urlLang) {
        return urlLang;
      }
    }
    // Если в URL нет языка, проверяем cookie
    const cookieLang = getLanguageFromCookie();
    if (cookieLang) {
      return cookieLang;
    }
    // По умолчанию португальский
    return 'pt';
  });

  // Редирект при первой загрузке, если URL не соответствует языку
  useEffect(() => {
    const urlLang = getLanguageFromPath(location.pathname);
    const pathWithoutLang = getPathWithoutLanguage(location.pathname);
    const expectedPath = getPathWithLanguage(pathWithoutLang, language);
    
    // Если текущий путь не соответствует ожидаемому пути с языковым префиксом
    // и в URL нет языкового префикса (чтобы не было бесконечного цикла)
    if (!urlLang && location.pathname !== expectedPath) {
      navigate(expectedPath, { replace: true });
    }
  }, []); // Только при первой загрузке

  // Синхронизируем язык с URL при изменении пути
  useEffect(() => {
    const urlLang = getLanguageFromPath(location.pathname);
    if (urlLang && urlLang !== language) {
      setLanguageState(urlLang);
    }
  }, [location.pathname]);

  // Сохраняем язык в cookie и localStorage
  useEffect(() => {
    localStorage.setItem('emailmassivo-language', language);
    setLanguageCookie(language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    
    setLanguageState(lang);
    
    // Получаем текущий путь без языкового префикса
    const pathWithoutLang = getPathWithoutLanguage(location.pathname);
    // Создаем новый путь с новым языковым префиксом
    const newPath = getPathWithLanguage(pathWithoutLang, lang);
    
    // Переходим на новый URL
    navigate(newPath, { replace: true });
  };

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
