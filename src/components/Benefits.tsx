import React from 'react';
import { ArrowRight, Sparkles, Gift } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Benefits: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 - Simplicity */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-text-darkest dark:text-white mb-4">
              {t.benefits.simplicity.title}
            </h3>
            <p className="text-text dark:text-slate-300 mb-6 leading-relaxed">
              {t.benefits.simplicity.description}
            </p>
            <button className="group inline-flex items-center space-x-2 px-6 py-3 bg-primary-light hover:bg-primary text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              <span>{t.benefits.simplicity.cta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 2 - 500 Free */}
          <div className="bg-gradient-to-br from-primary-light to-primary-dark p-8 rounded-3xl text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.benefits.free500.title}
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              {t.benefits.free500.description}
            </p>
            <button className="group inline-flex items-center space-x-2 px-6 py-3 bg-white text-primary-light hover:bg-white/90 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              <span>{t.benefits.free500.cta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


