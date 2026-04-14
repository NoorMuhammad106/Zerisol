import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "2738e7c3-8bc9-46d4-acac-071c74d03fa6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="contact-us"
      className="py-24 px-4 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-gray-950 overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto px-4">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6 bg-primary/5">
                Contact Us
            </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black dark:text-white mb-6 uppercase tracking-tight">
            Let’s build something great together.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Ready to scale your business with cutting-edge AI? Our team of specialists is here to help you navigate the future of automation.
          </p>
        </div>

        {/* Top 4 Detail Blocks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Address */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/30">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </div>
            <h3 className="font-bold text-black dark:text-white mb-1 text-sm sm:text-base">Address:</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Bahawalpur & Islamabad</p>
          </div>
          {/* WhatsApp */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/30">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
            </div>
            <h3 className="font-bold text-black dark:text-white mb-1 text-sm sm:text-base">WhatsApp:</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400" dir="ltr">+92 311 6566318</p>
          </div>
          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/30">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
            </div>
            <h3 className="font-bold text-black dark:text-white mb-1 text-sm sm:text-base">Email:</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">contact@zerisol.com</p>
          </div>
          {/* Website */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/30">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9-3-9m-9 9a9 9 0 019-9"></path></svg>
            </div>
            <h3 className="font-bold text-black dark:text-white mb-1 text-sm sm:text-base">Website:</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">zerisol.com</p>
          </div>
        </div>

        {/* Bottom Form & Illustration Section */}
        <div className="flex flex-col lg:flex-row items-stretch border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-2xl shadow-primary/5 bg-white dark:bg-gray-900/50">
          
          {/* Left Column: Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-10 bg-white dark:bg-transparent"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-10 text-center sm:text-left">Get in Touch</h2>

            <form onSubmit={onSubmit} id="contact-form" className="space-y-8">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary block">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 outline-none focus:border-primary transition-all text-sm text-black dark:text-white placeholder-gray-400"
                  placeholder="Your Name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary block">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 outline-none focus:border-primary transition-all text-sm text-black dark:text-white placeholder-gray-400"
                  placeholder="Your Email"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 outline-none focus:border-primary transition-all text-sm text-black dark:text-white placeholder-gray-400"
                  placeholder="Subject"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary block">Message</label>
                <textarea
                  name="message"
                  rows="3"
                  required
                  className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 outline-none focus:border-primary transition-all text-sm text-black dark:text-white placeholder-gray-400 resize-none"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="px-8 py-3.5 font-bold text-white transition-all duration-200 bg-primary hover:bg-primary/90 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] text-sm uppercase tracking-wide w-full sm:w-auto text-center flex items-center justify-center gap-2 group"
                >
                  <span>SEND MESSAGE</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right Column: Animated Illustration Section with Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 h-full relative flex flex-col justify-between p-8 sm:p-12 overflow-hidden bg-slate-50/50 dark:bg-gray-900/30 border-l border-gray-100 dark:border-gray-800"
          >
            {/* Animated Background Orbs */}
            <motion.div
              animate={{ x: [0, 30, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"
            />
            <motion.div
              animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#7C3AED]/20 rounded-full blur-[80px]"
            />

            {/* Top Info Section */}
            <div className="relative z-10 text-center mb-8 lg:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3">Accelerate Your Growth</h3>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
                Connect with our AI professionals to discover how automation solutions can scale your business and streamline workflows.
              </p>
            </div>

            {/* Central Abstract UI Element */}
            <div className="relative z-10 w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[320px] aspect-square flex items-center justify-center mx-auto my-auto py-8">
                {/* Outer dashed spinning ring */}
                <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 w-full h-full border-[2px] border-dashed border-primary/30 rounded-full"
                />
                
                {/* Inner counter-spinning dashed ring */}
                <motion.div 
                   animate={{ rotate: -360 }}
                   transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-[12%] w-[76%] h-[76%] border-[2px] border-dotted border-[#7C3AED]/40 rounded-full"
                />

                {/* Inner solid ring */}
                <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-[24%] w-[52%] h-[52%] border border-primary/50 rounded-full flex items-center justify-center bg-white/50 dark:bg-gray-800/10 backdrop-blur-sm"
                >
                     {/* Core glowing orb */}
                     <div className="w-[60%] h-[60%] bg-gradient-to-br from-primary via-[#7C3AED] to-[#EC4899] rounded-full shadow-[0_0_50px_rgba(79,70,229,0.5)] animate-pulse" />
                </motion.div>

                {/* Floating Email Icon */}
                <motion.div 
                   animate={{ y: [-15, 15, -15] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-[8%] right-[8%] w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex items-center justify-center text-primary"
                >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </motion.div>

                {/* Floating Chat Icon */}
                <motion.div 
                   animate={{ y: [15, -15, 15] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute bottom-[10%] left-[5%] w-14 h-14 sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-xl flex items-center justify-center text-[#7C3AED]"
                >
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
                </motion.div>

                {/* Floating Target Icon */}
                <motion.div 
                   animate={{ x: [-10, 10, -10], y: [-5, 5, -5] }}
                   transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -top-[5%] left-[20%] w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 rounded-xl shadow-xl flex items-center justify-center text-[#EC4899]"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </motion.div>
            </div>

            {/* Bottom: Interesting Value Proposition Badges */}
            <div className="relative z-10 w-full mt-8 lg:mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 group hover:border-primary/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-black dark:text-white text-sm">Lightning Fast</h4>
                    <p className="text-xs text-gray-500 font-medium">Response under 24hrs</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 group hover:border-[#7C3AED]/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-[#7C3AED] shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-black dark:text-white text-sm">Secure & Private</h4>
                    <p className="text-xs text-gray-500 font-medium">100% Data Confidentiality</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 md:col-span-2 group hover:border-[#EC4899]/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-900/30 flex items-center justify-center text-[#EC4899] shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-black dark:text-white text-sm">Top Tier Experts</h4>
                    <p className="text-xs text-gray-500 font-medium">Dedicated AI specialists assigned directly to your project.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactUs;

