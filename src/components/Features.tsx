import React from 'react';
import { LayoutGrid, FileText, PenTool } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: LayoutGrid,
      title: t.features.templates.title,
      description: t.features.templates.description
    },
    {
      icon: FileText,
      title: t.features.forms.title,
      description: t.features.forms.description
    },
    {
      icon: PenTool,
      title: t.features.editor.title,
      description: t.features.editor.items,
      isList: true
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-primary-light dark:hover:border-primary transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text-darkest dark:text-white mb-4">
                {feature.title}
              </h3>
              {feature.isList ? (
                <ul className="space-y-3">
                  {feature.description.map((item: string, i: number) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-text dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-text dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
