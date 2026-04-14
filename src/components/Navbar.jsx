import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import ServicesMegaMenu from "./ServicesMegaMenu";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const hideTimer = useRef(null);

  const showMega = () => {
    clearTimeout(hideTimer.current);
    setMegaOpen(true);
  };

  const hideMega = () => {
    hideTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-between items-center px-6 sm:px-12 lg:px-24 xl:px-40 py-5 sticky top-0 z-[100] backdrop-blur-xl border-b border-gray-100 dark:border-gray-900/50 font-medium bg-white/70 dark:bg-gray-950/70 transition-colors duration-300"
      >
        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/20 rounded-lg blur-lg group-hover:bg-primary/30 transition-all duration-500" />
            <svg className="relative w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
              <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Zerisol <span className="text-primary tracking-normal">AI</span>
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-8 text-gray-600 dark:text-gray-300">
          <Link to="/" className="hover:text-primary transition-colors duration-300 font-medium text-[15px]">
            Home
          </Link>
          <a href="/#about-us" className="hover:text-primary transition-colors duration-300 font-medium text-[15px]">
            About Us
          </a>

          {/* Services trigger */}
          <div
            onMouseEnter={showMega}
            onMouseLeave={hideMega}
          >
            <Link
              to="/services"
              onClick={() => setMegaOpen(false)}
              className={`flex items-center gap-1 font-medium text-[15px] transition-colors duration-300 cursor-pointer ${
                megaOpen ? "text-primary" : "hover:text-primary"
              }`}
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${megaOpen ? "rotate-180 text-primary" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <ServicesMegaMenu
              isVisible={megaOpen}
              onMouseEnter={showMega}
              onMouseLeave={hideMega}
            />
          </div>

          <Link to="/our-work" className="hover:text-primary transition-colors duration-300 font-medium text-[15px]">
            Our Work
          </Link>
          <a href="/#contact-us" className="hover:text-primary transition-colors duration-300 font-medium text-[15px]">
            Contact
          </a>
        </nav>

        {/* ── Right controls ── */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="/#contact-us"
              className="bg-[#4F46E5] text-white px-7 py-2.5 rounded-xl font-bold hover:bg-[#4338CA] transition-all shadow-lg shadow-indigo-500/30 active:scale-95 text-[15px]"
            >
              Get Started
            </a>
          </div>
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />

          {/* Hamburger */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 text-gray-900 dark:text-white transition-transform active:scale-90"
            aria-label="Open menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>
      </motion.div>

      <MobileMenu isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} theme={theme} />
    </>
  );
};

export default Navbar;
