import React, { useState } from 'react';
import { CATEGORIES } from '../components/ServicesMegaMenu';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_DATA = [
  { question: "What is AI Automation?", answer: "AI Automation refers to the use of artificial intelligence to perform tasks automatically without human intervention." },
  { question: "How long does it take to see results?", answer: "Typically, businesses see measurable improvements in efficiency and lead generation within 3-4 weeks of deployment." },
  { question: "Which CRM do you use?", answer: "We specialize in GoHighLevel (GHL) for comprehensive sales, marketing, and operational automation." },
  { question: "Is my data secure?", answer: "Absolutely. We follow enterprise-grade security practices and ensure API integrations are strictly authenticated." }
];

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [openFaq, setOpenFaq] = useState(0);

  const filterCategories = activeTab === 'All' 
    ? CATEGORIES 
    : CATEGORIES.filter(c => c.label === activeTab);

  return (
    <div className="w-full bg-white dark:bg-[#060614] transition-colors duration-300">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white font-['Syne'] uppercase"
          >
            OUR SERVICES
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            We offer comprehensive, end-to-end automation and digital growth services tailored to scale your operations rapidly and minimize manual overhead.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <a href="#contact-us" className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-indigo-500/30 hover:bg-[#4338CA] transition-all active:scale-95">
              Let's Consult Now
            </a>
            <a href="#about-us" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 px-8 py-3.5 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all active:scale-95">
              About Us
            </a>
          </motion.div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-20 max-w-6xl mx-auto flex flex-wrap justify-center gap-3 relative z-10 border-b border-gray-100 dark:border-gray-800 pb-8">
          <button
            onClick={() => setActiveTab('All')}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
              activeTab === 'All' 
              ? 'bg-[#0D3BFF] text-white shadow-lg' 
              : 'bg-gray-50 text-gray-600 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800'
            }`}
          >
            All Services
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.label)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeTab === cat.label 
                ? 'bg-[#0D3BFF] text-white shadow-lg' 
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 2. SERVICES GRIDS */}
      <div className="max-w-7xl mx-auto px-6 pb-24 space-y-24">
        {filterCategories.map((category, idx) => (
          <div key={category.id} className="space-y-10">
            {/* Split layout mapping logic: inject a dark hero split periodically */}
            {idx === 2 && (
              <div className="w-[100vw] relative left-1/2 -translate-x-1/2 bg-[#0A0A1F] text-white py-24 px-6 my-24 border-y border-white/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-6">
                    <h2 className="text-4xl font-extrabold font-['Syne'] uppercase">Intelligent Growth Systems</h2>
                    <p className="text-gray-400 text-lg">Deploy end-to-end ecosystems that integrate CRM dynamics with active artificial intelligence — ensuring your business works 24/7 without growing your payroll.</p>
                    <a href="#contact" className="inline-block bg-[#0D3BFF] text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all">
                      Consult an Expert
                    </a>
                  </div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(13,59,255,0.2)] bg-gradient-to-br from-gray-900 to-black p-8 flex items-center justify-center">
                    {/* Placeholder for Graphic */}
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <p className="text-white/50 font-bold uppercase tracking-widest text-sm">Automated Workflows</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase font-['Syne'] text-gray-900 dark:text-white">
                {category.label}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                Optimized strategies to accelerate your business output and drive consistent revenue.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((svc) => (
                <div 
                  key={svc.name} 
                  className="group flex flex-col gap-4 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.02)] transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden"
                >
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 flex items-center justify-center rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="w-7 h-7">{svc.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                      {svc.name}
                    </h3>
                    <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                  
                  {/* Subtle right arrow on hover */}
                  <div className="absolute bottom-8 right-8 opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-blue-600 dark:text-blue-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 3. RADIAL TRANSFORM PATTERN SECTION */}
      <section className="relative py-32 overflow-hidden bg-gray-50 dark:bg-gray-950 border-y border-gray-100 dark:border-gray-900">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 dark:opacity-10">
          <div className="w-[800px] h-[800px] border-[1px] border-blue-500 rounded-full" />
          <div className="w-[1000px] h-[1000px] border-[1px] border-blue-500 rounded-full absolute" />
          <div className="w-[1200px] h-[1200px] border-[1px] border-blue-500 rounded-full absolute" />
          <div className="w-[1400px] h-[1400px] border-[1px] border-blue-500 rounded-full absolute" />
        </div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10 px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase font-['Syne'] text-gray-900 dark:text-white mb-6">
            TRANSFORM YOUR BUSINESS, ONE SOLUTION AT A TIME
          </h2>
          <div className="my-12 relative">
             <div className="w-full max-w-sm mx-auto aspect-square bg-gradient-to-tr from-blue-600 to-teal-400 rounded-3xl shadow-2xl rotate-12 opacity-80 blur-md absolute inset-0 m-auto"></div>
             <div className="relative w-full max-w-md mx-auto aspect-[4/3] bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 flex items-center justify-center -rotate-3 overflow-hidden">
                <svg className="w-24 h-24 text-gray-200 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
             </div>
          </div>
          <a href="#contact" className="bg-[#0D3BFF] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-blue-500/40 hover:-translate-y-1 transition-all inline-block">
            Get Started
          </a>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="py-24 px-6 bg-white dark:bg-[#060614]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase font-['Syne'] text-gray-900 dark:text-white">
              EVERYTHING YOU NEED TO KNOW ABOUT OUR SOLUTIONS
            </h2>
          </div>
          
          <div className="space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <div 
                key={i} 
                className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900/50 transition-colors"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900/80 transition-colors"
                >
                  <span className="font-bold text-gray-900 dark:text-white">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: 'auto', opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed bg-white dark:bg-gray-950"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA PANEL */}
      <section className="pb-24 px-6 bg-white dark:bg-[#060614]">
        <div className="max-w-7xl mx-auto rounded-3xl bg-[#0A0A1F] border border-blue-900/30 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none" />
          
          <div className="p-12 md:p-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase font-['Syne'] text-white mb-6">
                READY TO TRANSFORM YOUR BUSINESS?
              </h2>
              <p className="text-blue-100/70 text-lg mb-8 max-w-sm">
                Take the leap. Automate your operations, scale marketing, and multiply revenue through our targeted AI strategies.
              </p>
              <a href="#contact" className="bg-[#0D3BFF] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-white hover:text-[#0D3BFF] transition-all inline-block">
                Start Growing
              </a>
            </div>
            
            <div className="relative h-[300px] flex items-center justify-center">
              {/* Graphic Mockup */}
              <div className="w-32 h-32 bg-blue-600 rounded-2xl rotate-12 absolute shadow-[0_0_50px_rgba(37,99,235,0.5)]"></div>
              <div className="w-32 h-32 bg-purple-600 rounded-2xl -rotate-12 absolute right-[20%] shadow-[0_0_50px_rgba(147,51,234,0.5)]"></div>
              <div className="w-32 h-32 bg-teal-400 rounded-full absolute bottom-[10%] left-[30%] blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
