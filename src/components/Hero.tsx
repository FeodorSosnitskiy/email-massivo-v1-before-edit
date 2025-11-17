import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-darkest dark:text-white mb-6 leading-tight">
          {t.hero.headline}
        </h1>
        <p className="text-xl sm:text-2xl text-text dark:text-slate-300 mb-8">
          {t.hero.subheadline}
        </p>
        <button className="group inline-flex items-center space-x-2 px-8 py-4 bg-primary-light hover:bg-primary text-white rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
          <span>{t.hero.cta}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
