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
      <Router>
        <LanguageProvider>
          <Routes>
            {/* Португальский (по умолчанию, без префикса) */}
            <Route path="/" element={<Home />} />
            <Route path="/support" element={<Support />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/license" element={<LicenseAgreement />} />
            <Route path="/anti-spam" element={<AntiSpamPolicy />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            
            {/* Английский */}
            <Route path="/en" element={<Home />} />
            <Route path="/en/support" element={<Support />} />
            <Route path="/en/pricing" element={<PricingPage />} />
            <Route path="/en/license" element={<LicenseAgreement />} />
            <Route path="/en/anti-spam" element={<AntiSpamPolicy />} />
            <Route path="/en/privacy" element={<PrivacyPolicy />} />
            
            {/* Испанский */}
            <Route path="/es" element={<Home />} />
            <Route path="/es/support" element={<Support />} />
            <Route path="/es/pricing" element={<PricingPage />} />
            <Route path="/es/license" element={<LicenseAgreement />} />
            <Route path="/es/anti-spam" element={<AntiSpamPolicy />} />
            <Route path="/es/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </LanguageProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
