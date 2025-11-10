import React from 'react';
import { ArrowRight, Box, Database, Layers, Share2, ShoppingCart, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Integrations: React.FC = () => {
  const { t } = useLanguage();

  const integrations = [
    { name: 'Shopify', icon: ShoppingCart, color: 'from-green-500 to-emerald-600' },
    { name: 'Salesforce', icon: Database, color: 'from-blue-500 to-cyan-600' },
    { name: 'Zapier', icon: Zap, color: 'from-orange-500 to-red-600' },
    { name: 'WordPress', icon: Box, color: 'from-slate-500 to-slate-700' },
    { name: 'HubSpot', icon: Layers, color: 'from-orange-400 to-orange-600' },
    { name: 'Slack', icon: Share2, color: 'from-purple-500 to-pink-600' }
  ];

  return (
    <section id="integrations" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t.integrations.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            {t.integrations.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 hover:shadow-xl hover:scale-110 flex flex-col items-center justify-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${integration.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <integration.icon className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">
                {integration.name}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl p-12 border border-emerald-200 dark:border-emerald-800">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <Zap className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                500+ Integrations
              </span>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Connect Everything You Use
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              From e-commerce platforms to CRM systems, EmailMassivo integrates seamlessly with all your favorite tools. Build a connected marketing ecosystem that works for you.
            </p>
            <button className="group inline-flex items-center space-x-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
              <span>{t.integrations.cta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
