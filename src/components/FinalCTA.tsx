import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const FinalCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-light via-primary to-primary-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          {t.finalCta.headline}
        </h2>
        <p className="text-xl text-white/90 mb-8">
          {t.finalCta.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://app.emailmassivo.com/auth/register/" className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-primary-light rounded-lg font-bold transition-all duration-200 hover:scale-105 shadow-2xl hover:shadow-3xl">
            <span>{t.finalCta.ctaPrimary}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="https://app.emailmassivo.com/auth/register/" className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-lg font-bold transition-all duration-200 hover:scale-105 hover:bg-white/30">
            <span>{t.finalCta.ctaSecondary}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};


