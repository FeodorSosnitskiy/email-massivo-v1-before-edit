import React, { useState, useEffect, useRef } from 'react';
import { Mail, Sun, Moon, Globe, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../i18n/translations';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { key: 'knowledgeBase', href: '#' },
    { key: 'support', href: 'mailto:support@emailmassivo.com' },
    { key: 'pricing', href: '#pricing' }
  ];

  const languages: { code: Language; label: string; flag: string; codeLabel: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸', codeLabel: 'EN' },
    { code: 'es', label: 'Español', flag: '🇪🇸', codeLabel: 'ES' },
    { code: 'pt', label: 'Português', flag: '🇧🇷', codeLabel: 'PT' }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMenuOpen(false);
      }
    } else if (href.startsWith('mailto:')) {
      // Allow mailto links to work normally
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };

    if (isLangOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLangOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-text-darkest dark:text-white">
              EmailMassivo
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(item => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-text dark:text-text-light hover:text-primary-light dark:hover:text-primary-light transition-colors duration-200"
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </a>
            ))}
            <a
              href="https://app.emailmassivo.com/auth/sign-in/"
              className="text-text dark:text-slate-300 hover:text-primary-light dark:hover:text-primary-light transition-colors duration-200"
            >
              {t.nav.logIn}
            </a>
            <a
              href="https://app.emailmassivo.com/auth/register/"
              className="px-4 py-2 bg-primary-light hover:bg-primary text-white rounded-lg font-medium transition-colors duration-200"
            >
              {t.nav.signUp}
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
                aria-label="Change language"
                aria-expanded={isLangOpen}
              >
                <Globe className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-1 z-50">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left flex items-center space-x-3 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors ${
                        language === lang.code ? 'bg-primary-light/10 dark:bg-primary-dark/20' : ''
                      }`}
                    >
                      <span className="text-base w-6 text-center dark:brightness-0 dark:invert">{lang.flag}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-base font-bold text-text-dark dark:text-slate-200">{lang.codeLabel}</span>
                        <span className="text-base font-light text-text dark:text-slate-200">{lang.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              ) : (
                <Sun className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              ) : (
                <Menu className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
            {navItems.map(item => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="block py-2 text-text dark:text-slate-300 hover:text-primary-light dark:hover:text-primary-light transition-colors duration-200"
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </a>
            ))}
            <a
              href="https://app.emailmassivo.com/auth/sign-in/"
              className="block py-2 text-text dark:text-slate-300 hover:text-primary-light dark:hover:text-primary-light transition-colors duration-200"
            >
              {t.nav.logIn}
            </a>
            <a
              href="https://app.emailmassivo.com/auth/register/"
              className="block py-2 px-4 bg-primary-light text-white rounded-lg font-medium text-center"
            >
              {t.nav.signUp}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
