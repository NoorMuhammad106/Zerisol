import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-start sm:justify-center pt-20 sm:pt-24 pb-20 overflow-hidden bg-white dark:bg-gray-950">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Mesh Blobs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] rounded-full bg-blue-400 opacity-[0.08] blur-[120px] dark:opacity-[0.05]"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] right-[-10%] w-[55%] h-[55%] rounded-full bg-indigo-500 opacity-[0.08] blur-[120px] dark:opacity-[0.05]"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-purple-400 opacity-[0.06] blur-[120px] dark:opacity-[0.05]"
        ></motion.div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150 pointer-events-none"></div>
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(#4F46E5 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-0 sm:-mt-22">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Headline - Premium Fluid Sizing */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[34px] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-black text-[#0F172A] dark:text-white leading-[1.05] tracking-tight mb-8"
          >
            We Help Businesses <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] animate-gradient-x">
              Grow Faster
            </span>{" "}
            with AI Automation
          </motion.h1>

          {/* Subheading - Refined Readability */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
          >
            Zerisol empowers businesses to automate sales, marketing, and operations —
            through AI Automation, GoHighLevel CRM, SEO, and Web Development —
            so you scale faster, smarter, and with less effort.
          </motion.p>

          {/* CTA Buttons - Professional Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
          >
            <motion.a
              href="#contact-us"
              whileHover={{ y: -3, shadow: "0 20px 25px -5px rgb(79 70 229 / 0.2)" }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center justify-center gap-3 px-10 py-4.5 bg-[#4F46E5] text-white font-bold rounded-full hover:bg-[#4338CA] transition-all shadow-xl shadow-indigo-500/20 text-[16px] w-full sm:w-auto"
            >
              Consult an Expert
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
            <motion.a
              href="#solutions"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center justify-center gap-3 px-10 py-4.5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold rounded-full border border-slate-200 dark:border-slate-800 hover:border-[#4F46E5] hover:text-[#4F46E5] transition-all shadow-sm text-[16px] w-full sm:w-auto"
            >
              Explore Solutions
              <svg className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.503 1.51a2 2 0 01-1.414 1.414l-1.51-.503a2 2 0 00-1.414 1.96l.477 2.387a2 2 0 00.547 1.022l1.428 1.428a2 2 0 002.828 0l1.428-1.428a2 2 0 00.547-1.022l.477-2.387a2 2 0 00-1.414-1.96l-1.51-.503a2 2 0 01-1.414-1.414l.503-1.51a2 2 0 00-1.96-1.414l-2.387.477a2 2 0 00-1.022.547l-1.428 1.428a2 2 0 000 2.828l1.428 1.428a2 2 0 001.022.547l2.387.477a2 2 0 001.96-1.414l.503-1.51" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;