import React from "react";
import { motion } from "framer-motion";

const ServicesCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col items-center text-center p-8 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-none hover:bg-primary transition-all duration-500 hover:-translate-y-2 overflow-hidden z-10 border-b-[5px] border-b-primary"
    >
      <div className="relative z-10 flex flex-col items-center h-full">
        {/* Compact Icon Container */}
        <div className="w-16 h-16 mb-6 flex items-center justify-center bg-primary rounded-full shrink-0 transition-all duration-500 group-hover:bg-white shadow-md">
          {typeof service.icon === 'string' ? (
            <img 
              src={service.icon} 
              alt={service.title} 
              className="w-8 h-8 object-contain transition-all duration-500 group-hover:brightness-0" 
            />
          ) : (
            <service.icon className="w-7 h-7 text-white group-hover:text-primary transition-colors duration-500" />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-lg md:text-xl whitespace-nowrap leading-tight text-gray-900 dark:text-white mb-3 group-hover:text-white transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed group-hover:text-white/90 transition-colors duration-300 max-w-[240px]">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
