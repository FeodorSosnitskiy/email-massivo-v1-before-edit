import React from 'react';
import { Cloud, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hosting: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-text-darkest dark:text-white mb-2">
              {t.hosting.freeHosting.title}
            </h3>
            <p className="text-text dark:text-slate-300">
              {t.hosting.freeHosting.description}
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-text-darkest dark:text-white mb-2">
              {t.hosting.stableAccess.text}
            </h3>
            <p className="text-text dark:text-slate-300">
              {t.hosting.freePlan.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
