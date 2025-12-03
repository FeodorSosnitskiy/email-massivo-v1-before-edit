import React from 'react';
import { Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and tagline */}
          <div className="col-span-1">
            <a href="/" className="flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity duration-200 inline-block">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">EmailMassivo</span>
            </a>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-primary-light transition-colors duration-200">
                  {t.footer.product.knowledgeBase}
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary-light transition-colors duration-200">
                  {t.footer.product.apiDocs}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-primary-light transition-colors duration-200">
                  {t.footer.legal.license}
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary-light transition-colors duration-200">
                  {t.footer.legal.antiSpam}
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary-light transition-colors duration-200">
                  {t.footer.legal.privacy}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.footer.support}</h3>
            <ul className="space-y-3">
              <li>
                <a href="/support" className="text-slate-400 hover:text-primary-light transition-colors duration-200">
                  {t.footer.support}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-500 text-sm text-center">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
