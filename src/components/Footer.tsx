import React from 'react';
import { Mail, Twitter, Facebook, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const footerSections = [
    {
      title: t.footer.product,
      links: [
        { label: t.footer.features, href: '#features' },
        { label: t.footer.pricing, href: '#pricing' },
        { label: t.footer.integrations, href: '#integrations' }
      ]
    },
    {
      title: t.footer.resources,
      links: [
        { label: t.footer.blog, href: '#' },
        { label: t.footer.help, href: '#' },
        { label: t.footer.documentation, href: '#' },
        { label: t.footer.apiDocs, href: '#' }
      ]
    },
    {
      title: t.footer.company,
      links: [
        { label: t.footer.about, href: '#' },
        { label: t.footer.careers, href: '#' },
        { label: t.footer.contact, href: '#contact' }
      ]
    },
    {
      title: t.footer.legal,
      links: [
        { label: t.footer.privacy, href: '#' },
        { label: t.footer.terms, href: '#' },
        { label: t.footer.security, href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">EmailMassivo</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              {t.footer.tagline}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm">
              {t.footer.rights}
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-slate-500 hover:text-emerald-400 text-sm transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#" className="text-slate-500 hover:text-emerald-400 text-sm transition-colors">
                {t.footer.terms}
              </a>
              <a href="#" className="text-slate-500 hover:text-emerald-400 text-sm transition-colors">
                {t.footer.security}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
