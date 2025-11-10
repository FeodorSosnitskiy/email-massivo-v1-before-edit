import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Pricing: React.FC = () => {
  const { t } = useLanguage();
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: t.pricing.starter.name,
      price: isYearly ? '$23' : t.pricing.starter.price,
      description: t.pricing.starter.description,
      features: t.pricing.starter.features,
      cta: t.pricing.cta,
      highlighted: false
    },
    {
      name: t.pricing.professional.name,
      price: isYearly ? '$63' : t.pricing.professional.price,
      description: t.pricing.professional.description,
      features: t.pricing.professional.features,
      cta: t.pricing.cta,
      highlighted: true,
      popular: t.pricing.professional.popular
    },
    {
      name: t.pricing.enterprise.name,
      price: t.pricing.enterprise.price,
      description: t.pricing.enterprise.description,
      features: t.pricing.enterprise.features,
      cta: t.pricing.contact,
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            {t.pricing.subtitle}
          </p>

          <div className="inline-flex items-center space-x-4 bg-white dark:bg-slate-800 p-2 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                !isYearly
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {t.pricing.monthly}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                isYearly
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <span>{t.pricing.yearly}</span>
              <span className="text-xs px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full">
                {t.pricing.save}
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-2xl ring-4 ring-emerald-500/50'
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 text-sm font-bold rounded-full shadow-lg">
                  {plan.popular}
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-2">
                  <span
                    className={`text-5xl font-bold ${
                      plan.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.price !== t.pricing.enterprise.price && (
                    <span
                      className={`ml-2 ${
                        plan.highlighted ? 'text-emerald-100' : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      /month
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm ${
                    plan.highlighted ? 'text-emerald-100' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 mb-8 group ${
                  plan.highlighted
                    ? 'bg-white text-emerald-600 hover:bg-emerald-50'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? 'text-emerald-200' : 'text-emerald-600'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlighted ? 'text-emerald-50' : 'text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
