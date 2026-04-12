import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const Footer = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40"
    >
      {/* Footer Top */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-12 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 text-base text-black dark:text-white"
        >
          <a href="#hero" className="flex items-center gap-4 group cursor-pointer lg:justify-start">
            <div className="relative w-14 h-14 flex items-center justify-center">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-all duration-500"></div>
              <svg className="relative w-12 h-12 transform group-hover:scale-110 transition-transform duration-500" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <path d="M25 25H75L25 75H75" stroke="url(#footer-logo-grad)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="25" cy="25" r="5" fill="#10b981" />
                <circle cx="75" cy="25" r="5" fill="#06b6d4" />
                <circle cx="25" cy="75" r="5" fill="#10b981" />
                <circle cx="75" cy="75" r="5" fill="#06b6d4" />
              </svg>
            </div>
            <span className="text-3xl font-bold tracking-tight text-black dark:text-white group-hover:text-emerald-500 transition-colors duration-300">Zerisol</span>
          </a>
          <p className="max-w-md text-gray-600 dark:text-gray-400 leading-relaxed">
            From strategy to execution, we engineer production-ready AI solutions
            that drive measurable business impact.
          </p>

          <nav>
            <ul className="flex flex-wrap gap-x-8 gap-y-4 text-sm sm:text-base font-medium">
              <li>
                <a className="hover:text-primary transition-colors duration-300" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors duration-300" href="#about-us">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors duration-300" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors duration-300" href="#our-work">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors duration-300" href="#contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-black dark:text-white lg:max-w-md w-full"
        >
          <h3 className="font-bold text-lg">Subscribe to our newsletter</h3>
          <p className="text-sm mt-2 mb-6 text-gray-600 dark:text-gray-400">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 text-base outline-none rounded-xl text-black dark:text-white bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
            />
            <button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-xl px-8 py-3 transition-all shadow-lg shadow-primary/20 shrink-0">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      <hr className="border-gray-200 dark:border-gray-800 my-10" />

      {/* footer bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="pb-10 text-sm font-medium text-gray-500 dark:text-gray-400 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-center md:text-left">Copyright 2025 © Zerisol - All Right Reserved.</p>

        <div className="flex items-center gap-6">
          <a href="https://www.facebook.com/share/1FNKHVbhXd/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:scale-120 hover:text-primary transition-all cursor-pointer">
            <img src={assets.facebook_icon} alt="Facebook" className="w-5 h-5 opacity-70 hover:opacity-100" />
          </a>
          <img src={assets.twitter_icon} alt="Twitter" className="w-5 h-5 opacity-70 hover:opacity-100 cursor-pointer hover:scale-120 transition-all" />
          <img src={assets.instagram_icon} alt="Instagram" className="w-5 h-5 opacity-70 hover:opacity-100 cursor-pointer hover:scale-120 transition-all" />
          <img src={assets.linkedin_icon} alt="LinkedIn" className="w-5 h-5 opacity-70 hover:opacity-100 cursor-pointer hover:scale-120 transition-all" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;

{
  /* <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div className="md:max-w-96">
                    <img className="h-9" src={assets.logo} alt="dummyLogoDark" />
                    <p className="mt-6 text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold text-gray-800 mb-5">Subscribe to our newsletter</h2>
                        <div className="text-sm space-y-2">
                            <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                            <div className="flex items-center gap-2 pt-4">
                                <input className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 h-9 rounded px-2" type="email" placeholder="Enter your email" />
                                <button className="bg-blue-600 w-24 h-9 text-white rounded">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-xs md:text-sm pb-5">
                Copyright 2024 © <a href="https://prebuiltui.com">PrebuiltUI</a>. All Right Reserved.
            </p>
        </footer> */
}
