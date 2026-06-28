import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Commands from './pages/Commands';
import Portal from './pages/Portal';
import AboutUs from './pages/AboutUs';
import ApiDocs from './pages/ApiDocs';
import Faq from './pages/Faq';
import Privacy from './pages/Privacy';
import SystemArch from './pages/SystemArch';
import Terms from './pages/Terms';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import SmoothScrollProvider from './components/providers/SmoothScrollProvider';
import ScrollBackground from './components/ScrollBackground';
import ScrollToTop from './components/ScrollToTop';

// AnimatedRoutes wrapper to handle page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      '/': 'J.A.R.V.I.S. - Home',
      '/features': 'Capabilities - J.A.R.V.I.S.',
      '/commands': 'Command Library - J.A.R.V.I.S.',
      '/portal': 'Jarvis Portal - J.A.R.V.I.S.',
      '/about-us': 'About Us - J.A.R.V.I.S.',
      '/api-documentation': 'API Docs - J.A.R.V.I.S.',
      '/faq-support': 'FAQ & Support - J.A.R.V.I.S.',
      '/privacy-policy': 'Privacy Policy - J.A.R.V.I.S.',
      '/system-architecture': 'System Architecture - J.A.R.V.I.S.',
      '/terms-of-service': 'Terms of Service - J.A.R.V.I.S.',
    };
    document.title = pageTitles[location.pathname] || 'J.A.R.V.I.S.';
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/commands" element={<Commands />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/api-documentation" element={<ApiDocs />} />
        <Route path="/faq-support" element={<Faq />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/system-architecture" element={<SystemArch />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SmoothScrollProvider>
        <div className="flex flex-col min-h-screen relative font-body text-text-primary selection:bg-accent selection:text-bg-color overflow-x-hidden">
          
          <ScrollBackground />

          {/* Background CSS Effects overlayed on top of Canvas */}
          <div className="bg-grid pointer-events-none fixed inset-0 z-[-1]" />
          <div className="scan-line pointer-events-none fixed inset-0 z-[-1]" />
          <div className="cursor-glow pointer-events-none fixed z-[-1]" />

          <Navbar />
          
          <main className="relative z-10 flex-grow w-full">
            <AnimatedRoutes />
          </main>
          
          {/* Footer for inner pages */}
          <footer className="relative z-10 w-full border-t border-card-border bg-[#0a0e17]/80 backdrop-blur-md py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
              <div className="text-center text-text-secondary text-sm flex justify-center gap-6 flex-wrap">
                <Link to="/about-us" className="hover:text-accent transition-colors">About Us</Link>
                <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
                <Link to="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link>
                <Link to="/api-documentation" className="hover:text-accent transition-colors">API Docs</Link>
                <Link to="/system-architecture" className="hover:text-accent transition-colors">System Architecture</Link>
                <Link to="/faq-support" className="hover:text-accent transition-colors">FAQ</Link>
              </div>
              <p className="text-text-secondary/60 text-sm">
                &copy; {new Date().getFullYear()} J.A.R.V.I.S. All rights reserved. developed by Surya.CS.
              </p>
            </div>
          </footer>
        </div>
      </SmoothScrollProvider>
    </Router>
  );
}

export default App;
