import React, { useState } from 'react';
import { BookOpen, HelpCircle, Rocket, ArrowRight, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Support: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    email: '',
    message: '',
    consent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, consent: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы
    console.log('Form submitted:', formData);
    // Можно добавить отправку на сервер или открыть mailto
    window.location.href = `mailto:support@emailmassivo.com?subject=Support Request&body=${encodeURIComponent(formData.message)}`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Header />
      <main className="pt-16">
        {/* 1 блок — Поддержка 24/7 */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-text-darkest dark:text-white mb-6">
              {t.support.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl text-text dark:text-slate-300">
              {t.support.hero.subtitle}
            </p>
          </div>
        </section>

        <section className="pt-10 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* 2 блок — Карточка «База знаний» */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-text-darkest dark:text-white mb-3">
                  {t.support.knowledgeBase.title}
                </h2>
                <p className="text-text dark:text-slate-300 leading-relaxed mb-6 flex-grow">
                  {t.support.knowledgeBase.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-primary-light hover:text-primary font-semibold transition-colors duration-200 mt-auto"
                >
                  <span>{t.support.knowledgeBase.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* 4 блок — Карточка «Быстрый старт» */}
              <div className="bg-gradient-to-br from-primary-light to-primary-dark p-8 rounded-3xl text-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  {t.support.quickStart.title}
                </h2>
                <p className="text-white/90 leading-relaxed mb-6 flex-grow">
                  {t.support.quickStart.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 bg-white text-primary-light hover:bg-white/90 rounded-lg px-6 py-3 font-semibold transition-colors duration-200 mt-auto w-fit"
                >
                  <span>{t.support.quickStart.button}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* 3 блок — «Нужна помощь?» */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-text-darkest dark:text-white mb-4">
                    {t.support.needHelp.title}
                  </h2>
                  <p className="text-text dark:text-slate-300 leading-relaxed text-lg">
                    {t.support.needHelp.description}
                  </p>
                </div>
              </div>
            </div>

            {/* 5 блок — Форма «Задать вопрос» */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg">
              <h2 className="text-3xl font-bold text-text-darkest dark:text-white mb-8">
                {t.support.form.title}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-dark dark:text-slate-300 mb-2">
                      {t.support.form.fields.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-text-darkest dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-light transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-text-dark dark:text-slate-300 mb-2">
                      {t.support.form.fields.website}
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-text-darkest dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-light transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-dark dark:text-slate-300 mb-2">
                    {t.support.form.fields.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-text-darkest dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-light transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-dark dark:text-slate-300 mb-2">
                    {t.support.form.fields.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-text-darkest dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-light transition-colors resize-vertical"
                  />
                </div>
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleCheckboxChange}
                    required
                    className="mt-1 w-4 h-4 text-primary-light bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 rounded focus:ring-primary-light focus:ring-2"
                  />
                  <label htmlFor="consent" className="text-sm text-text dark:text-slate-300">
                    {t.support.form.checkbox}
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-primary-light hover:bg-primary text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>{t.support.form.submit}</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
