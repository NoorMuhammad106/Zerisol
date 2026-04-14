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
                    {/* Floating stats card - Positioned safely for mobile screens */}
                    <div className="absolute -bottom-6 right-2 sm:-bottom-10 sm:-right-6 lg:-right-10 z-20 bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 transition-all">
                        <p className="text-2xl sm:text-4xl font-bold text-primary mb-1">5+</p>
                        <p className="text-[10px] sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Years of Innovation</p>
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

            {/* Compact Themed Stats Component - 5 Column Professional Layout */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-[90rem] mx-auto px-4">
                {/* Stat Card 1 - Orange Theme */}
                <div className="relative p-2 rounded-[1.8rem] border border-indigo-500/30 group">
                    <div className="absolute -bottom-1 -left-1 w-14 h-14 border-b-6 border-l-6 border-indigo-500 rounded-bl-[1.8rem] z-0 transition-all duration-300 group-hover:scale-105"></div>
                    <div className="relative z-10 bg-[#F9F9F9] dark:bg-gray-900 rounded-[1.6rem] py-5 px-3 flex flex-col items-center shadow-lg">
                        <svg className="w-7 h-7 text-indigo-500 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.97 4.13c-.31.16-.69.16-1 0L3.53 17.38c-.32-.17-.53-.5-.53-.88V9.26c0-.38.21-.71.53-.88l7.97-4.13c.31-.16.69-.16 1 0l7.97 4.13c.32.17.53.5.53.88v7.24zM6.76 16.47l5.24 2.71V13.8l-5.24-2.7v5.37z" /></svg>
                        <p className="text-3xl font-black text-[#333] dark:text-white mb-1">50+</p>
                        <p className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.05em] text-center whitespace-nowrap">Projects Completed</p>
                    </div>
                </div>

                {/* Stat Card 2 - Cyan Theme */}
                <div className="relative p-2 rounded-[1.8rem] border border-blue-500/30 group">
                    <div className="absolute -bottom-1 -left-1 w-14 h-14 border-b-6 border-l-6 border-blue-500 rounded-bl-[1.8rem] z-0 transition-all duration-300 group-hover:scale-105"></div>
                    <div className="relative z-10 bg-[#F9F9F9] dark:bg-gray-900 rounded-[1.6rem] py-5 px-3 flex flex-col items-center shadow-lg">
                        <svg className="w-7 h-7 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v4h4v2h-6V8zm0 8h2v2h-2v-2z" /></svg>
                        <p className="text-3xl font-black text-[#333] dark:text-white mb-1">99%</p>
                        <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.05em] text-center whitespace-nowrap">Client Satisfaction</p>
                    </div>
                </div>

                {/* Stat Card 3 - Pink Theme */}
                <div className="relative p-2 rounded-[1.8rem] border border-indigo-600/30 group">
                    <div className="absolute -bottom-1 -left-1 w-14 h-14 border-b-6 border-l-6 border-indigo-600 rounded-bl-[1.8rem] z-0 transition-all duration-300 group-hover:scale-105"></div>
                    <div className="relative z-10 bg-[#F9F9F9] dark:bg-gray-900 rounded-[1.6rem] py-5 px-3 flex flex-col items-center shadow-lg">
                        <svg className="w-7 h-7 text-indigo-600 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-7h2v5h-2z" /></svg>
                        <p className="text-3xl font-black text-[#333] dark:text-white mb-1">25+</p>
                        <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.05em] text-center whitespace-nowrap">Global Clients</p>
                    </div>
                </div>

                {/* Stat Card 4 - Purple Theme */}
                <div className="relative p-2 rounded-[1.8rem] border border-blue-600/30 group">
                    <div className="absolute -bottom-1 -left-1 w-14 h-14 border-b-6 border-l-6 border-blue-600 rounded-bl-[1.8rem] z-0 transition-all duration-300 group-hover:scale-105"></div>
                    <div className="relative z-10 bg-[#F9F9F9] dark:bg-gray-900 rounded-[1.6rem] py-5 px-3 flex flex-col items-center shadow-lg">
                        <svg className="w-7 h-7 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                        <p className="text-3xl font-black text-[#333] dark:text-white mb-1">10</p>
                        <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.05em] text-center whitespace-nowrap">AI Experts</p>
                    </div>
                </div>

                {/* Stat Card 5 - Green Theme (Experience) */}
                <div className="relative p-2 rounded-[1.8rem] border border-indigo-500/30 group">
                    <div className="absolute -bottom-1 -left-1 w-14 h-14 border-b-6 border-l-6 border-indigo-500 rounded-bl-[1.8rem] z-0 transition-all duration-300 group-hover:scale-105"></div>
                    <div className="relative z-10 bg-[#F9F9F9] dark:bg-gray-900 rounded-[1.6rem] py-5 px-3 flex flex-col items-center shadow-lg">
                        <svg className="w-7 h-7 text-indigo-500 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" /></svg>
                        <p className="text-3xl font-black text-[#333] dark:text-white mb-1">5+</p>
                        <p className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.05em] text-center whitespace-nowrap">Years Experience</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
