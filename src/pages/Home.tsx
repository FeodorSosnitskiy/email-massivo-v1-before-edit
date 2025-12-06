import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Stepper } from '../components/Stepper';
import { Benefits } from '../components/Benefits';
import { Features } from '../components/Features';
import { Analytics } from '../components/Analytics';
import { Hosting } from '../components/Hosting';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

export const Home = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      * {
        scrollbar-width: thin;
        scrollbar-color: #7777FB transparent;
      }
      *::-webkit-scrollbar {
        width: 8px;
      }
      *::-webkit-scrollbar-track {
        background: transparent;
      }
      *::-webkit-scrollbar-thumb {
        background-color: #7777FB;
        border-radius: 4px;
      }
      *::-webkit-scrollbar-thumb:hover {
        background-color: #4A4AFA;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Stepper />
        <Benefits />
        <Features />
        <Analytics />
        <Hosting />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

