import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      if (document.documentElement.classList.contains('dark')) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    };

    // Check on mount
    checkTheme();

    // Observe theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id='hero' className='relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900 px-4 sm:px-6 lg:px-8 py-20'>

      {/* Enhanced Professional Background Animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic Theme-Aware Gradient Mesh */}
        <div className="absolute inset-0 opacity-30 dark:opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.2)_0px,transparent_60%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.2)_0px,transparent_60%),radial-gradient(circle_at_40%_80%,rgba(236,72,153,0.15)_0px,transparent_60%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.3)_0px,transparent_60%),radial-gradient(circle_at_80%_30%,rgba(139,92,246,0.3)_0px,transparent_60%),radial-gradient(circle_at_40%_80%,rgba(236,72,153,0.2)_0px,transparent_60%)]"></div>
        </div>

        {/* Enhanced Animated Binary Code Rain */}
        <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-20">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute font-mono text-xs text-blue-500/30 dark:text-cyan-400/40"
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${8 + Math.random() * 12}px`
              }}
              initial={{ y: -50, opacity: 0 }}
              animate={{
                y: ['-50px', '100vh'],
                opacity: [0, 0.4, 0]
              }}
              transition={{
                duration: 8 + Math.random() * 15,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            >
              {Math.random().toString(2).substring(2, 10)}
            </motion.div>
          ))}
        </div>

        {/* Enhanced Neural Network with Theme Support */}
        <svg className="absolute inset-0 w-full h-full opacity-30 dark:opacity-40">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={isDarkMode ? "0.8" : "0.6"} />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity={isDarkMode ? "0.8" : "0.6"} />
              <stop offset="100%" stopColor="#ec4899" stopOpacity={isDarkMode ? "0.8" : "0.6"} />
            </linearGradient>
            <filter id="neuralGlow">
              <feGaussianBlur stdDeviation={isDarkMode ? "2" : "1"} result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Animated Nodes */}
          {[...Array(20)].map((_, i) => (
            <motion.circle
              key={`node-${i}`}
              cx={`${5 + Math.random() * 90}%`}
              cy={`${5 + Math.random() * 90}%`}
              r="2"
              fill="url(#neuralGradient)"
              filter="url(#neuralGlow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.5, 1],
                opacity: [0, 0.8, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.15,
                repeatType: "reverse"
              }}
            />
          ))}

          {/* Animated Connections */}
          {[...Array(30)].map((_, i) => {
            const x1 = 15 + Math.random() * 70;
            const y1 = 15 + Math.random() * 70;
            const x2 = 15 + Math.random() * 70;
            const y2 = 15 + Math.random() * 70;

            return (
              <motion.line
                key={`connection-${i}`}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="url(#neuralGradient)"
                strokeWidth="0.5"
                strokeDasharray="3,3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  duration: 5 + Math.random() * 4,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </svg>

        {/* Enhanced Data Streams - Removed Green Lines */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`stream-${i}`}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 dark:via-cyan-500/60 to-transparent"
              style={{
                width: '200%',
                top: `${15 + i * 15}%`,
                left: '-50%',
                transform: `rotate(${i * 6}deg)`
              }}
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Enhanced Floating AI Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`ai-element-${i}`}
            className="absolute w-64 h-64 rounded-full opacity-5 dark:opacity-10"
            style={{
              background: `conic-gradient(from ${i * 45}deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)`,
              top: `${15 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
              filter: 'blur(40px)'
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.3, 1],
              opacity: [0.03, 0.1, 0.03]
            }}
            transition={{
              duration: 25 + i * 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Enhanced Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-15">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                                linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '60px 60px']
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Enhanced Pulsing Core */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.01, 0.03, 0.01],
            boxShadow: [
              '0 0 100px 100px rgba(59, 130, 246, 0.03)',
              '0 0 200px 200px rgba(139, 92, 246, 0.05)',
              '0 0 100px 100px rgba(59, 130, 246, 0.03)'
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* New: Floating Geometric Shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`absolute w-32 h-32 opacity-5 dark:opacity-10 ${i % 2 === 0 ? 'rounded-full' : 'rounded-3xl'}`}
            style={{
              background: `linear-gradient(45deg, #3b82f6, #8b5cf6)`,
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
            animate={{
              y: [0, 30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center px-6 pt-4 sm:pt-10 md:pt-4 pb-16">

        {/* Heading: Optimized for exactly 2 lines on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="font-heading text-[28px] xs:text-[32px] sm:text-6xl md:text-8xl lg:text-9xl xl:text-[110px] font-black leading-[1.2] sm:leading-[1.1] tracking-tight">
            <span className="block sm:inline text-gray-900 dark:text-white">
              Architecting{' '}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text'
                }}
              >
                Intelligent
              </motion.span>
            </span>
            <span className="block sm:inline text-gray-900 dark:text-white sm:ml-4">
              AI Futures
            </span>
          </h1>
        </motion.div>

        {/* Subheading: Balanced line depth */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-bold px-2 sm:px-4"
        >
          We build <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400">custom AI solutions</span> that transform businesses,
          enhance efficiency, and unlock unprecedented opportunities.
        </motion.p>

        {/* CTA Buttons: Responsive stacking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 px-4"
        >
          <motion.a
            href="#contact-us"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl flex items-center justify-center gap-3 overflow-hidden shadow-2xl shadow-blue-500/30 cursor-pointer w-full sm:w-auto"
          >
            <span className="text-base sm:text-lg relative z-10">Start AI Transformation</span>
            <motion.svg
              className="w-5 h-5 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>

          <motion.a
            href="#contact-us"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 bg-white/20 dark:bg-white/10 backdrop-blur-xl border-2 border-gray-200 dark:border-white/20 text-gray-800 dark:text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-white/30 dark:hover:bg-white/15 transition-all shadow-xl cursor-pointer w-full sm:w-auto"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="text-base sm:text-lg">Book Consultation</span>
          </motion.a>
        </motion.div>

        {/* Stats Section: Optimized Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 max-w-6xl mx-auto px-4"
        >
          {[
            { value: "50+", label: "AI Projects", color: "from-blue-600 to-cyan-600" },
            { value: "98%", label: "Satisfaction", color: "from-emerald-600 to-green-600" },
            { value: "25+", label: "Clients", color: "from-purple-600 to-pink-600" },
            { value: "45%", label: "Efficiency", color: "from-orange-600 to-red-600" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-white/30 to-white/10 dark:from-white/10 dark:to-transparent backdrop-blur-sm border border-white/20 dark:border-white/10 hover:border-white/40 dark:hover:border-white/20 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className={`text-2xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-3`}>
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 font-bold tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Label: Proportional for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-white/20 to-white/10 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/30 dark:border-white/20 shadow-2xl shadow-blue-500/10"
        >
          <motion.div
            className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-[10px] sm:text-sm font-bold text-gray-800 dark:text-white tracking-[0.2em] sm:tracking-[0.3em] uppercase">
            ENTERPRISE AI SOLUTIONS
          </span>
        </motion.div>
      </div>

      {/* Enhanced Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs mb-3 tracking-widest uppercase">Explore Solutions</span>
          <div className="w-8 h-12 border-2 border-gray-400/30 dark:border-white/30 rounded-2xl flex justify-center pt-2 backdrop-blur-sm">
            <motion.div
              className="w-1.5 h-3 bg-gradient-to-b from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-purple-400 rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;