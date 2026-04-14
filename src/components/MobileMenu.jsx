import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES } from './ServicesMegaMenu';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose, theme }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Reset accordion when menu closes
  useEffect(() => {
    if (!isOpen) { setServicesOpen(false); setActiveCategory(0); }
  }, [isOpen]);

  const topLinks = [
    { name: 'Home',     to: '/' },
    { name: 'Our Work', href: '/#our-work' },
    { name: 'About Us', href: '/#about-us' },
    { name: 'Contact',  href: '/#contact-us' },
  ];

  const panel = {
    closed: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
    open:   { x: 0,      transition: { type: 'spring', stiffness: 300, damping: 30, staggerChildren: 0.07, delayChildren: 0.15 } },
  };
  const item = { closed: { opacity: 0, x: 18 }, open: { opacity: 1, x: 0 } };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/30 backdrop-blur-md"
          />

          {/* Panel */}
          <motion.div
            variants={panel} initial="closed" animate="open" exit="closed"
            className="absolute right-0 top-0 bottom-0 w-[88%] max-w-sm bg-white dark:bg-gray-950 shadow-2xl flex flex-col border-l border-gray-100 dark:border-gray-900"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100 dark:border-gray-900">
              <span className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Zerisol <span className="text-primary">AI</span>
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-500 hover:text-primary transition-all active:scale-90"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto px-6 pt-3 pb-8">
              <nav className="flex flex-col">

                {/* ── Services accordion ── */}
                <motion.div variants={item} className="border-b border-gray-100 dark:border-gray-900">
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    className="w-full py-5 flex items-center justify-between text-[17px] font-semibold text-gray-800 dark:text-gray-200 hover:text-primary transition-colors"
                  >
                    Services
                    <svg
                      className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${servicesOpen ? 'rotate-180 text-primary' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        {/* Category pills */}
                        <div className="flex flex-wrap gap-2 pb-3">
                          {CATEGORIES.map((cat, i) => (
                            <button
                              key={cat.id}
                              onClick={() => setActiveCategory(i)}
                              className={`mobile-cat-pill${activeCategory === i ? ' active' : ''}`}
                            >
                              {cat.label}
                            </button>
                          ))}
                        </div>

                        {/* Service list for active category */}
                        <div className="flex flex-col gap-1 pb-4">
                          {CATEGORIES[activeCategory].services.map((svc) => (
                            <Link
                              key={svc.name}
                              to="/services"
                              onClick={onClose}
                              className="mobile-service-row"
                            >
                              <span className="mobile-service-icon">{svc.icon}</span>
                              <div>
                                <p className="mobile-service-name">{svc.name}</p>
                                <p className="mobile-service-desc">{svc.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Other links */}
                {topLinks.map((link) => (
                  <motion.div key={link.name} variants={item}>
                    {link.to ? (
                      <Link
                        to={link.to}
                        onClick={onClose}
                        className="group py-5 flex items-center justify-between border-b border-gray-100 dark:border-gray-900 last:border-0"
                      >
                        <span className="text-[17px] font-medium text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
                          {link.name}
                        </span>
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={onClose}
                        className="group py-5 flex items-center justify-between border-b border-gray-100 dark:border-gray-900 last:border-0"
                      >
                        <span className="text-[17px] font-medium text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
                          {link.name}
                        </span>
                      </a>
                    )}
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Footer CTA */}
            <div className="p-6 pb-10 bg-gray-50 dark:bg-gray-900/40 border-t border-gray-100 dark:border-gray-900 flex flex-col gap-3">
              <a
                href="#contact-us"
                onClick={onClose}
                className="w-full text-center bg-primary text-white py-4 rounded-xl font-bold text-sm shadow-xl shadow-primary/20 hover:bg-primary/90 active:scale-[0.98] transition-all"
              >
                Get Started
              </a>
              <a
                href="#contact-us"
                onClick={onClose}
                className="w-full text-center bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white py-4 rounded-xl font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-900 transition-all active:scale-[0.98]"
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
