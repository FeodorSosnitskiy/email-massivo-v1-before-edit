import React from 'react';
import { ArrowRight, Play, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-full border border-emerald-200 dark:border-emerald-800">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                AI-Powered Email Marketing
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
              {t.hero.headline}
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105 shadow-lg hover:shadow-xl">
                <span>{t.hero.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105">
                <Play className="w-5 h-5" />
                <span>{t.hero.secondary}</span>
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white dark:border-slate-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white dark:border-slate-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white dark:border-slate-800"></div>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  <span className="font-bold text-slate-900 dark:text-white">10,000+</span> companies
                </div>
              </div>

              <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>

              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  <span className="font-bold text-slate-900 dark:text-white">4.9/5</span> rating
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform duration-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">98%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Deliverability Rate</div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform duration-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">3x</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">ROI Increase</div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-2xl shadow-xl text-white hover:scale-105 transition-transform duration-200">
                  <div className="text-4xl font-bold mb-2">150%</div>
                  <div className="text-emerald-100">Higher Open Rates</div>
                  <div className="mt-4 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Automation</span>
                    <span className="text-xs px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full">Active</span>
                  </div>
                  <div className="space-y-2">
                    {[80, 95, 70].map((width, i) => (
                      <div key={i} className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"
                          style={{ width: `${width}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 w-72 h-72 bg-emerald-200 dark:bg-emerald-900/30 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-teal-200 dark:bg-teal-900/30 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
