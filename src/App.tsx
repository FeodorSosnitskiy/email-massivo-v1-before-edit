import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Home } from './pages/Home';
import { Support } from './pages/Support';
import { PricingPage } from './pages/PricingPage';
import { LicenseAgreement } from './pages/LicenseAgreement';
import { AntiSpamPolicy } from './pages/AntiSpamPolicy';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/support" element={<Support />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/license" element={<LicenseAgreement />} />
            <Route path="/anti-spam" element={<AntiSpamPolicy />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
