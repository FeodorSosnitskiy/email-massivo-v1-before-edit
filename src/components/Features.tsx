import React from 'react';
import { Workflow, User, BarChart3, Puzzle, Inbox, LayoutGrid as Layout } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Workflow,
      title: t.features.automation.title,
      description: t.features.automation.description,
      gradient: 'from-emerald-500 to-teal-600',
      size: 'large'
    },
    {
      icon: User,
      title: t.features.personalization.title,
      description: t.features.personalization.description,
      gradient: 'from-blue-500 to-cyan-600',
      size: 'medium'
    },
    {
      icon: BarChart3,
      title: t.features.analytics.title,
      description: t.features.analytics.description,
      gradient: 'from-purple-500 to-pink-600',
      size: 'medium'
    },
    {
      icon: Puzzle,
      title: t.features.integrations.title,
      description: t.features.integrations.description,
      gradient: 'from-orange-500 to-red-600',
      size: 'small'
    },
    {
      icon: Inbox,
      title: t.features.deliverability.title,
      description: t.features.deliverability.description,
      gradient: 'from-indigo-500 to-purple-600',
      size: 'small'
    },
    {
      icon: Layout,
      title: t.features.templates.title,
      description: t.features.templates.description,
      gradient: 'from-pink-500 to-rose-600',
      size: 'small'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t.features.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 group">
            <div className="h-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
              <div className={`w-16 h-16 bg-gradient-to-br ${features[0].gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {React.createElement(features[0].icon, { className: "w-8 h-8 text-white" })}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {features[0].title}
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {features[0].description}
              </p>
              <div className="mt-8 space-y-3">
                {['Trigger-based workflows', 'Conditional logic', 'Multi-channel campaigns'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {features.slice(1, 3).map((feature, index) => (
            <div key={index} className={`${index === 0 ? 'lg:row-span-1' : 'lg:row-span-1'} group`}>
              <div className="h-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {React.createElement(feature.icon, { className: "w-6 h-6 text-white" })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

          {features.slice(3).map((feature, index) => (
            <div key={index} className="group">
              <div className="h-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {React.createElement(feature.icon, { className: "w-6 h-6 text-white" })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
