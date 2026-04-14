import React from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets';
import Title from './Title';

const AboutUs = () => {
    return (
        <section id="about-us" className="py-24 px-4 sm:px-12 lg:px-24 xl:px-40 overflow-hidden bg-white dark:bg-gray-950 scroll-mt-20">
            <Title
                title="About Us"
                desc="We are a team of expert AI engineers dedicated to building intelligent, high-impact, production-ready solutions."
            />

            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row items-center gap-20 mt-20">
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 relative"
                >
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.05)] border border-gray-100 dark:border-gray-800">
                        <img
                            src={assets.ai_agency_about_us}
                            alt="AI Agency Environment"
                            className="w-full aspect-[640/434] object-cover"
                        />
                    </div>
                    {/* Floating stats card */}
                    <div className="absolute -bottom-10 -right-6 lg:-right-10 z-20 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
                        <p className="text-4xl font-bold text-primary mb-1">5+</p>
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Years of Innovation</p>
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 text-black dark:text-white"
                >
                    <h3 className="text-3xl font-bold text-black dark:text-white mb-6">Our Story</h3>
                    <p className="text-lg text-black dark:text-white leading-relaxed mb-8">
                        Founded with a clear vision to build intelligent and impactful AI solutions, <strong>Zerisol</strong> was created by AI engineers with a strong focus on solving real-world business problems. We have grown from a focused AI startup into a full-service AI solutions agency, combining technical expertise with practical, results-driven implementation.
                    </p>
                    <p className="text-lg text-black dark:text-white leading-relaxed mb-10">
                        Our journey is driven by innovation, precision, and client impact. We don’t just adopt AI trends; we engineer scalable, production-ready AI systems that push boundaries and deliver measurable value across industries.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-black dark:text-white">Fast-Paced</h4>
                                <p className="text-sm text-black dark:text-white">Rapid execution without compromising quality.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-black dark:text-white">Reliable</h4>
                                <p className="text-sm text-black dark:text-white">Trusted partners for long-term growth.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* High-End Stats Card Grid - Optimized for both Light & Dark themes */}
            <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Stat Card 1 */}
                <motion.div 
                   whileHover={{ y: -10 }}
                   className="relative flex flex-col items-center p-10 rounded-3xl bg-white dark:bg-[#0D1041] border border-gray-100 dark:border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                >
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                    <div className="w-16 h-16 bg-[#FACC15] rounded-full flex items-center justify-center mb-8 shadow-[0_8px_30px_rgba(250,204,21,0.2)] transition-transform duration-500 group-hover:scale-110">
                        <svg className="w-8 h-8 text-[#0D1041]" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.97 4.13c-.31.16-.69.16-1 0L3.53 17.38c-.32-.17-.53-.5-.53-.88V9.26c0-.38.21-.71.53-.88l7.97-4.13c.31-.16.69-.16 1 0l7.97 4.13c.32.17.53.5.53.88v7.24zM6.76 16.47l5.24 2.71V13.8l-5.24-2.7v5.37z"/></svg>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-5xl font-extrabold text-[#0D1041] dark:text-white mb-4 tracking-tight tabular-nums">50+</p>
                        <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] text-center">Projects<br/>Completed</p>
                    </div>
                </motion.div>

                {/* Stat Card 2 */}
                <motion.div 
                   whileHover={{ y: -10 }}
                   className="relative flex flex-col items-center p-10 rounded-3xl bg-white dark:bg-[#0D1041] border border-gray-100 dark:border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                >
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
                    <div className="w-16 h-16 bg-[#FACC15] rounded-full flex items-center justify-center mb-8 shadow-[0_8px_30px_rgba(250,204,21,0.2)] transition-transform duration-500 group-hover:scale-110">
                        <svg className="w-8 h-8 text-[#0D1041]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v4h4v2h-6V8zm0 8h2v2h-2v-2z"/></svg>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-5xl font-extrabold text-[#0D1041] dark:text-white mb-4 tracking-tight tabular-nums">99%</p>
                        <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] text-center">Client<br/>Satisfaction</p>
                    </div>
                </motion.div>

                {/* Stat Card 3 */}
                <motion.div 
                   whileHover={{ y: -10 }}
                   className="relative flex flex-col items-center p-10 rounded-3xl bg-white dark:bg-[#0D1041] border border-gray-100 dark:border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                >
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors"></div>
                    <div className="w-16 h-16 bg-[#FACC15] rounded-full flex items-center justify-center mb-8 shadow-[0_8px_30px_rgba(250,204,21,0.2)] transition-transform duration-500 group-hover:scale-110">
                        <svg className="w-8 h-8 text-[#0D1041]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-7h2v5h-2z"/></svg>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-5xl font-extrabold text-[#0D1041] dark:text-white mb-4 tracking-tight tabular-nums">25+</p>
                        <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] text-center">Global<br/>Clients</p>
                    </div>
                </motion.div>

                {/* Stat Card 4 */}
                <motion.div 
                   whileHover={{ y: -10 }}
                   className="relative flex flex-col items-center p-10 rounded-3xl bg-white dark:bg-[#0D1041] border border-gray-100 dark:border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                >
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-teal-500/5 rounded-full blur-2xl group-hover:bg-teal-500/10 transition-colors"></div>
                    <div className="w-16 h-16 bg-[#FACC15] rounded-full flex items-center justify-center mb-8 shadow-[0_8px_30px_rgba(250,204,21,0.2)] transition-transform duration-500 group-hover:scale-110">
                        <svg className="w-8 h-8 text-[#0D1041]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-5xl font-extrabold text-[#0D1041] dark:text-white mb-4 tracking-tight tabular-nums">10</p>
                        <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] text-center">AI<br/>Experts</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
