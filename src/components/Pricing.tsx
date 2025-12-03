import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Premium pricing data
const premiumPricing = [
  { contacts: 1000, month: 14, year: 134 },
  { contacts: 2000, month: 19, year: 182 },
  { contacts: 3000, month: 27, year: 259 },
  { contacts: 4000, month: 33, year: 317 },
  { contacts: 5000, month: 37, year: 355 },
  { contacts: 7500, month: 44, year: 422 },
  { contacts: 10000, month: 53, year: 509 },
  { contacts: 13000, month: 57, year: 547 },
  { contacts: 15000, month: 64, year: 614 },
  { contacts: 20000, month: 86, year: 826 },
  { contacts: 25000, month: 101, year: 970 },
  { contacts: 30000, month: 117, year: 1123 },
  { contacts: 35000, month: 132, year: 1267 },
  { contacts: 40000, month: 142, year: 1363 },
  { contacts: 45000, month: 164, year: 1574 },
  { contacts: 50000, month: 171, year: 1642 },
  { contacts: 55000, month: 192, year: 1843 },
  { contacts: 60000, month: 206, year: 1978 },
  { contacts: 65000, month: 213, year: 2045 },
  { contacts: 70000, month: 228, year: 2189 },
  { contacts: 75000, month: 238, year: 2285 },
  { contacts: 80000, month: 249, year: 2390 },
  { contacts: 85000, month: 259, year: 2486 },
  { contacts: 90000, month: 270, year: 2592 },
  { contacts: 95000, month: 280, year: 2688 },
  { contacts: 100000, month: 284, year: 2726 },
  { contacts: 150000, month: 384, year: 3686 },
  { contacts: 200000, month: 469, year: 4502 },
  { contacts: 250000, month: 583, year: 5597 },
  { contacts: 300000, month: 653, year: 6269 },
  { contacts: 350000, month: 710, year: 6816 },
  { contacts: 400000, month: 781, year: 7498 },
  { contacts: 450000, month: 916, year: 8794 },
  { contacts: 500000, month: 994, year: 9542 }
];

// Premium API+SMTP pricing data
const premiumApiPricing = [
  { sends: 6000, month: 5, year: 48 },
  { sends: 10000, month: 6, year: 58 },
  { sends: 50000, month: 28, year: 269 },
  { sends: 100000, month: 48, year: 461 },
  { sends: 150000, month: 111, year: 1067 },
  { sends: 300000, month: 219, year: 2102 },
  { sends: 700000, month: 419, year: 4022 },
  { sends: 1500000, month: 779, year: 7478 },
  { sends: 3000000, month: 1319, year: 12662 },
  { sends: 5000000, month: 1990, year: 19104 }
];

export const Pricing: React.FC = () => {
  const { t } = useLanguage();
  const [isYearly, setIsYearly] = useState(false);
  const [premiumContacts, setPremiumContacts] = useState(1000);
  const [premiumApiSends, setPremiumApiSends] = useState(6000);

  const getPremiumPrice = () => {
    const pricing = premiumPricing.find(p => p.contacts >= premiumContacts) || premiumPricing[premiumPricing.length - 1];
    return isYearly ? pricing.year : pricing.month;
  };

  const getPremiumApiPrice = () => {
    const pricing = premiumApiPricing.find(p => p.sends >= premiumApiSends) || premiumApiPricing[premiumApiPricing.length - 1];
    return isYearly ? pricing.year : pricing.month;
  };

  return (
    <section id="pricing" className="pt-0 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Period Toggle for Free and Premium */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center space-x-4 bg-white dark:bg-slate-800 p-2 rounded-xl border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                !isYearly
                  ? 'bg-primary-light text-white'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {t.pricing.periodMonth}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                isYearly
                  ? 'bg-primary-light text-white'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {t.pricing.periodYear}
            </button>
          </div>
        </div>

        {/* Free and Premium Plans */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Free Plan */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 flex flex-col">
            <h3 className="text-3xl font-bold text-text-darkest dark:text-white mb-2">
              {t.pricing.free.title}
            </h3>
            <p className="text-text dark:text-slate-400 mb-6">
              {t.pricing.free.subtitle}
            </p>
            <div className="text-4xl font-bold text-text-darkest dark:text-white mb-8">
              0 $<span className="text-lg text-text-light dark:text-slate-400">/{isYearly ? t.pricing.year : t.pricing.month}</span>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-text-dark dark:text-slate-300 mb-2">
                {t.pricing.free.contactsLabel}
              </label>
              <input
                type="text"
                value={t.pricing.free.contactsDefault}
                readOnly
                className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-text-darkest dark:text-white"
              />
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-text-darkest dark:text-white mb-4">
                {t.pricing.free.benefitsTitle}
              </h4>
              <ul className="space-y-3">
                {t.pricing.free.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary-light mt-0.5 flex-shrink-0" />
                    <span className="text-text dark:text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="https://app.emailmassivo.com/auth/register/" className="mt-auto w-full py-3 px-6 bg-primary-light hover:bg-primary text-white rounded-lg font-semibold transition-colors duration-200 text-center block">
              {t.pricing.free.cta}
            </a>
                </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-primary-light to-primary-dark p-8 rounded-3xl text-white shadow-xl flex flex-col">
            <h3 className="text-3xl font-bold text-white mb-2">
              {t.pricing.premium.title}
            </h3>
            <p className="text-white/90 mb-6">
              {t.pricing.premium.subtitle}
            </p>
            <div className="text-4xl font-bold text-white mb-8">
              ${getPremiumPrice()}
              <span className="text-lg text-white/90">/{isYearly ? t.pricing.year : t.pricing.month}</span>
            </div>
              <div className="mb-6">
              <label className="block text-sm font-medium text-white/90 mb-2">
                {t.pricing.premium.contactsLabel}
              </label>
              <select
                value={premiumContacts}
                onChange={(e) => setPremiumContacts(Number(e.target.value))}
                className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white"
              >
                {premiumPricing.map(p => (
                  <option key={p.contacts} value={p.contacts} className="bg-slate-800">
                    {p.contacts.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                {t.pricing.premium.benefitsTitle}
              </h4>
              <ul className="space-y-3">
                {t.pricing.premium.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-white/80 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="https://app.emailmassivo.com/auth/register/" className="mt-auto w-full py-3 px-6 bg-white text-primary-light hover:bg-white/90 rounded-lg font-semibold transition-colors duration-200 text-center block">
              {t.pricing.premium.cta}
            </a>
          </div>
        </div>

        {/* API+SMTP Plans */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-text-darkest dark:text-white text-center mb-8">
            {t.pricing.apiTitle}
          </h2>
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center space-x-4 bg-white dark:bg-slate-800 p-2 rounded-xl border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  !isYearly
                    ? 'bg-primary-light text-white'
                    : 'text-text dark:text-slate-400'
                }`}
              >
                {t.pricing.periodMonth}
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isYearly
                    ? 'bg-primary-light text-white'
                    : 'text-text dark:text-slate-400'
                }`}
              >
                {t.pricing.periodYear}
              </button>
            </div>
          </div>
                </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Free API+SMTP */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 flex flex-col">
            <h3 className="text-3xl font-bold text-text-darkest dark:text-white mb-2">
              {t.pricing.freeApi.title}
            </h3>
            <p className="text-text dark:text-slate-400 mb-6">
              {t.pricing.freeApi.subtitle}
            </p>
            <div className="text-4xl font-bold text-text-darkest dark:text-white mb-8">
              0 $<span className="text-lg text-text-light dark:text-slate-400">/{isYearly ? t.pricing.year : t.pricing.month}</span>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-text-dark dark:text-slate-300 mb-2">
                {t.pricing.freeApi.sendsLabel}
              </label>
              <input
                type="text"
                value={t.pricing.freeApi.sendsDefault}
                readOnly
                className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-text-darkest dark:text-white"
              />
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-text-darkest dark:text-white mb-4">
                {t.pricing.freeApi.benefitsTitle}
              </h4>
              <ul className="space-y-3">
                {t.pricing.freeApi.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary-light mt-0.5 flex-shrink-0" />
                    <span className="text-text dark:text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="https://app.emailmassivo.com/auth/register/" className="mt-auto w-full py-3 px-6 bg-primary-light hover:bg-primary text-white rounded-lg font-semibold transition-colors duration-200 text-center block">
              {t.pricing.freeApi.cta}
            </a>
              </div>

          {/* Premium API+SMTP */}
          <div className="bg-gradient-to-br from-primary-light to-primary-dark p-8 rounded-3xl text-white shadow-xl flex flex-col">
            <h3 className="text-3xl font-bold text-white mb-2">
              {t.pricing.premiumApi.title}
            </h3>
            <p className="text-white/90 mb-6">
              {t.pricing.premiumApi.subtitle}
            </p>
            <div className="text-4xl font-bold text-white mb-8">
              ${getPremiumApiPrice()}
              <span className="text-lg text-white/90">/{isYearly ? t.pricing.year : t.pricing.month}</span>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-white/90 mb-2">
                {t.pricing.premiumApi.sendsLabel}
              </label>
              <select
                value={premiumApiSends}
                onChange={(e) => setPremiumApiSends(Number(e.target.value))}
                className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white"
              >
                {premiumApiPricing.map(p => (
                  <option key={p.sends} value={p.sends} className="bg-slate-800">
                    {p.sends.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                {t.pricing.premiumApi.benefitsTitle}
              </h4>
              <ul className="space-y-3">
                {t.pricing.premiumApi.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-white/80 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="https://app.emailmassivo.com/auth/register/" className="mt-auto w-full py-3 px-6 bg-white text-primary-light hover:bg-white/90 rounded-lg font-semibold transition-colors duration-200 text-center block">
              {t.pricing.premiumApi.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
