import React, { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Integrations } from './components/Integrations';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      * {
        scrollbar-width: thin;
        scrollbar-color: rgb(16 185 129) transparent;
      }
      *::-webkit-scrollbar {
        width: 8px;
      }
      *::-webkit-scrollbar-track {
        background: transparent;
      }
      *::-webkit-scrollbar-thumb {
        background-color: rgb(16 185 129);
        border-radius: 4px;
      }
      *::-webkit-scrollbar-thumb:hover {
        background-color: rgb(5 150 105);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <Features />
            <Pricing />
            <Testimonials />
            <Integrations />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
