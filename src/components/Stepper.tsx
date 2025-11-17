import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Stepper: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    { key: 'step1', label: t.stepper.step1 },
    { key: 'step2', label: t.stepper.step2 },
    { key: 'step3', label: t.stepper.step3 }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-700">
            <div className="absolute top-0 left-0 h-full bg-primary-light w-2/3"></div>
          </div>

          {steps.map((step, index) => (
            <div key={step.key} className="relative z-10 flex flex-col items-center mb-8 md:mb-0">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                index < 2 
                  ? 'bg-primary-light text-white' 
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
              }`}>
                {index < 2 ? (
                  <Check className="w-6 h-6" />
                ) : (
                  <span className="text-lg font-bold">{index + 1}</span>
                )}
              </div>
              <p className="text-sm font-medium text-center text-text-dark dark:text-slate-300 max-w-[200px]">
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


