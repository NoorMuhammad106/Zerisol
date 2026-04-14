import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
    const stats = [
        { value: '5+', label: 'Years of Innovation' },
        { value: '40+', label: 'Happy Clients' },
        { value: '20+', label: 'Deployed Agents' },
        { value: '05+', label: 'Global Partnerships' }
    ];

    return (
        <section className="py-20 px-4 sm:px-12 lg:px-24 xl:px-40 bg-gray-50/50 dark:bg-gray-950/50 relative overflow-hidden">
            {/* Background blur effects */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute top-1/2 right-10 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-14 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                            <div className="w-2 h-8 bg-gradient-to-b from-primary to-teal-400 rounded-full transform -skew-x-12"></div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black dark:text-white tracking-tight">
                                Why Choose Zerisol
                            </h2>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-[15px] leading-relaxed mx-auto md:mx-0">
                            We deliver unmatched technical expertise and proven results. Here is why the fastest-growing startups and enterprises trust us as their technological backbone.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white dark:bg-[#0a0f1c] rounded-3xl border border-gray-200 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative">
                    {/* Inner highlight line inside the card */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-teal-400 to-blue-500"></div>

                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-10 lg:p-12 text-center flex flex-col items-center justify-center border-gray-100 dark:border-white/5 relative group
                                ${index !== stats.length - 1 ? 'lg:border-r' : ''} 
                                ${index % 2 === 0 ? 'md:border-r' : 'md:border-r-0 lg:border-r'}
                                ${index !== stats.length - 1 ? 'border-b lg:border-b-0' : ''}`}
                        >
                            <span className="text-5xl md:text-6xl font-extrabold bg-gradient-to-br from-black to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </span>
                            <span className="text-[13px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest group-hover:text-primary dark:group-hover:text-teal-400 transition-colors">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
