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
        <div className="flex flex-col lg:flex-row items-stretch gap-0 border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-2xl shadow-primary/5">

          {/* Left Column: Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 p-6 sm:p-12 lg:p-16 bg-slate-50/50 dark:bg-gray-900/20 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">Reach Out</h2>
              <p className="text-primary font-medium mb-8 sm:mb-12 tracking-wide uppercase text-xs sm:text-sm">Let's start a conversation</p>

              <form onSubmit={onSubmit} id="contact-form" className="space-y-10 sm:space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      required
                      className="peer w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-800 py-3 outline-none focus:border-primary transition-all text-black dark:text-white placeholder-transparent"
                      placeholder="Name"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-500 dark:text-gray-400 text-xs sm:text-sm transition-all peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs sm:peer-focus:text-sm pointer-events-none">Your Full Name</label>
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      required
                      className="peer w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-800 py-3 outline-none focus:border-primary transition-all text-black dark:text-white placeholder-transparent"
                      placeholder="Email"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-500 dark:text-gray-400 text-xs sm:text-sm transition-all peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs sm:peer-focus:text-sm pointer-events-none">Professional Email</label>
                  </div>
                </div>
                <div className="relative group">
                  <textarea
                    name="message"
                    rows="3"
                    required
                    className="peer w-full bg-transparent border-b-2 border-gray-200 dark:border-gray-800 py-3 outline-none focus:border-primary transition-all text-black dark:text-white placeholder-transparent resize-none"
                    placeholder="Message"
                  ></textarea>
                  <label className="absolute left-0 -top-3.5 text-gray-500 dark:text-gray-400 text-xs sm:text-sm transition-all peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs sm:peer-focus:text-sm pointer-events-none">How can we help you?</label>
                </div>
              </form>
            </div>

            <div className="mt-12 sm:mt-16">
              <button
                type="submit"
                form="contact-form"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 font-bold text-white transition-all duration-200 bg-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary overflow-hidden shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </button>
            </div>
          </motion.div>

          {/* Vertical Divider (Hidden on Mobile) */}
          <div className="hidden lg:block w-[1px] bg-gray-100 dark:bg-gray-800"></div>
          {/* Horizontal Divider (Visible on Mobile) */}
          <div className="block lg:hidden h-[1px] bg-gray-100 dark:border-gray-800"></div>

          {/* Right Column: Contact Detail Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 p-6 sm:p-12 lg:p-16 bg-white dark:bg-gray-900/10 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">Contact US</h2>
              <p className="text-primary font-medium mb-8 sm:mb-12 tracking-wide uppercase text-xs sm:text-sm">Direct lines to our team</p>

              <div className="space-y-8 sm:space-y-10">
                <div className="flex items-start gap-4 sm:gap-6 group">
                  <div className="mt-1 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6 shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 sm:mb-2">Call Anytime</p>
                    <div className="flex flex-col gap-0.5 sm:gap-1">
                      <span className="text-base sm:text-lg font-bold text-black dark:text-white tracking-tight">+92 311 4710106</span>
                      <span className="text-base sm:text-lg font-bold text-black dark:text-white tracking-tight">+92 311 6566318</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6 group">
                  <div className="mt-1 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:-rotate-6 shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 sm:mb-2">Write to us</p>
                    <span className="text-base sm:text-lg font-bold text-black dark:text-white tracking-tight break-all">info@zerisol.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="mt-1 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6 shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9-3-9m-9 9a9 9 0 019-9"></path></svg>
                </div>
                <div>
                  <p className="text-primary font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-1 sm:mb-2">Global Operations</p>
                  <h3 className="text-base sm:text-lg font-bold text-black dark:text-white mb-1">Remote-First Agency</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                    Operating globally with a distributed team of AI specialists, providing seamless partnership.
                  </p>
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
