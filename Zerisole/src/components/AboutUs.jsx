import React from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets';
import Title from './Title';

const AboutUs = () => {
    return (
        <section id="about-us" className="py-24 px-4 sm:px-12 lg:px-24 xl:px-40 overflow-hidden bg-white dark:bg-gray-950 scroll-mt-20">
            <Title
                title="About Zerisol"
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

            {/* Our Values / Stats Section */}
            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-gray-100 dark:border-gray-800">
                <div className="text-center">
                    <p className="text-4xl font-bold text-black dark:text-white mb-2">50+</p>
                    <p className="text-sm text-black dark:text-white uppercase tracking-widest">Projects Completed</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-black dark:text-white mb-2">99%</p>
                    <p className="text-sm text-black dark:text-white uppercase tracking-widest">Client Satisfaction</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-black dark:text-white mb-2">25+</p>
                    <p className="text-sm text-black dark:text-white uppercase tracking-widest">Global Clients</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-black dark:text-white mb-2">10</p>
                    <p className="text-sm text-black dark:text-white uppercase tracking-widest">AI Experts</p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
