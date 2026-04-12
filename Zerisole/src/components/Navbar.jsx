import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-between items-center px-6 sm:px-12 lg:px-24 xl:px-40 py-5 sticky top-0 z-[100] backdrop-blur-xl border-b border-gray-100 dark:border-gray-900/50 font-medium bg-white/70 dark:bg-gray-950/70 transition-colors duration-300"
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl group-hover:bg-emerald-500/30 transition-all duration-500"></div>
            <svg className="relative w-8 h-8 transform group-hover:scale-110 transition-transform duration-500" viewBox="0 0 100 100" fill="none">
              <path d="M25 25H75L25 75H75" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500" />
              <circle cx="25" cy="25" r="5" fill="#10b981" />
              <circle cx="75" cy="75" r="5" fill="#06b6d4" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors duration-300">Zerisol</span>
        </a>

        {/* Desktop Menu - Hidden on Mobile */}
        <nav className="hidden lg:flex items-center gap-10 text-gray-600 dark:text-gray-300">
          <a href="#" className="hover:text-primary transition-colors duration-300 relative group text-sm font-semibold uppercase tracking-wider">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about-us" className="hover:text-primary transition-colors duration-300 relative group text-sm font-semibold uppercase tracking-wider">
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#services" className="hover:text-primary transition-colors duration-300 relative group text-sm font-semibold uppercase tracking-wider">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#our-work" className="hover:text-primary transition-colors duration-300 relative group text-sm font-semibold uppercase tracking-wider">
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact-us" className="hover:text-primary transition-colors duration-300 relative group text-sm font-semibold uppercase tracking-wider">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />

          {/* Contact Button Desktop */}
          <a
            href="#contact-us"
            className="hidden lg:flex items-center gap-2 bg-primary text-white px-8 py-2.5 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95"
          >
            Contact <img src={assets.arrow_icon} width={14} alt="" className="invert brightness-0" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 text-gray-900 dark:text-white transition-transform active:scale-90"
            aria-label="Open menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Standalone Mobile Menu Component */}
      <MobileMenu
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        theme={theme}
      />
    </>
  );
};

export default Navbar;
