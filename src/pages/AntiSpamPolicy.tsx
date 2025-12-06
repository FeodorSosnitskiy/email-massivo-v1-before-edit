import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { parseMarkdown } from '../utils/markdownParser';

export const AntiSpamPolicy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Header />
      <main className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-darkest dark:text-white mb-8">
              {t.footer.legal.antiSpam}
            </h1>
            <div className="text-text dark:text-slate-300 leading-relaxed">
              {parseMarkdown(t.antiSpamPolicy.content)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

