import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    setIsScrolled(latest > 50);
    if (latest > 100 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Capabilities', path: '/features' },
    { name: 'Command Library', path: '/commands' },
    { name: 'Jarvis Repository', path: 'https://github.com/Surya200622/Jarvis-personal-ai-by-surya', external: true }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden ? "-100%" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-[#0a0e17]/90 backdrop-blur-md border-b border-[#00d4ff]/20 py-4 shadow-[0_0_15px_rgba(0,212,255,0.2)]' : 'bg-transparent py-6'
        } px-6 md:px-12 flex justify-between items-center`}
      >
        <Link to="/" className="flex items-center gap-3 no-underline group">
          <div className="w-10 h-10 rounded-full shadow-[0_0_10px_rgba(0,212,255,0.4)] bg-accent/20 flex items-center justify-center border border-accent group-hover:shadow-[0_0_20px_rgba(0,212,255,0.8)] transition-all overflow-hidden">
            <img src="/jarvis_icon.png" alt="Jarvis Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-heading text-2xl font-bold uppercase tracking-[3px] text-white">J.A.R.V.I.S.</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.external ? (
                <a
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary font-semibold text-[1.1rem] uppercase no-underline transition-all hover:text-accent hover:drop-shadow-[0_0_10px_rgba(0,212,255,0.4)]"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.path}
                  className={`font-semibold text-[1.1rem] uppercase no-underline transition-all hover:text-accent hover:drop-shadow-[0_0_10px_rgba(0,212,255,0.4)] ${
                    location.pathname === link.path ? 'text-accent drop-shadow-[0_0_10px_rgba(0,212,255,0.4)]' : 'text-text-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right Section (Auth / Hamburger) */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 bg-white/5 p-1 pr-4 rounded-full border border-[#00d4ff]/20 hover:border-accent hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all cursor-pointer">
            <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center bg-bg-color">
              <User size={16} className="text-accent" />
            </div>
            <span className="text-sm font-semibold text-text-primary">Sign In</span>
          </div>

          <button
            className="md:hidden text-accent hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={32} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-[#0a0e17] border-l border-[#00d4ff]/20 z-[100] shadow-[-10px_0_30px_rgba(0,212,255,0.1)] flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-[#00d4ff]/10">
                <span className="font-heading text-xl font-bold uppercase tracking-[2px] text-white">Menu</span>
                <button
                  className="text-text-secondary hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={28} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.external ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-text-primary hover:text-accent transition-colors block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className={`text-lg font-semibold transition-colors block ${
                          location.pathname === link.path ? 'text-accent' : 'text-text-primary hover:text-accent'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="mt-auto pt-8 border-t border-[#00d4ff]/10">
                  <button className="btn-primary w-full justify-center">
                    Sign In
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
