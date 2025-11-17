import React from 'react';
import { BarChart3 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Analytics: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6">
          <BarChart3 className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-text-darkest dark:text-white mb-6">
          {t.analytics.title}
        </h2>
        <p className="text-xl text-text dark:text-slate-300 leading-relaxed">
          {t.analytics.description}
        </p>
      </div>
    </section>
  );
};


