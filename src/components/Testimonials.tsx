import React from 'react';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <blockquote className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
          {[
            { name: 'TechStart', width: 'w-24' },
            { name: 'GrowthLabs', width: 'w-28' },
            { name: 'Innovate', width: 'w-26' },
            { name: 'Digital+', width: 'w-24' }
          ].map((company, index) => (
            <div
              key={index}
              className={`${company.width} h-8 bg-slate-300 dark:bg-slate-600 rounded-lg flex items-center justify-center`}
            >
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
