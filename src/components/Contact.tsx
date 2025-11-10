import React from 'react';
import { ArrowRight, Check, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    t.contact.secondary,
    t.contact.trial,
    'Cancel anytime'
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {t.contact.title}
              </h2>

              <p className="text-xl text-emerald-50 mb-8">
                {t.contact.subtitle}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2 text-white">
                    <Check className="w-5 h-5" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="group inline-flex items-center space-x-2 px-8 py-4 bg-white text-emerald-600 rounded-lg font-bold transition-all duration-200 hover:scale-105 shadow-2xl hover:shadow-3xl">
                <span>{t.contact.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                {[
                  { value: '10,000+', label: 'Active Users' },
                  { value: '50M+', label: 'Emails Sent' },
                  { value: '98%', label: 'Satisfaction' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-emerald-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};
