import React from 'react';
import { motion } from 'framer-motion';
import Title from '../components/Title';
import assets from '../assets/assets';

const OurWorkPage = () => {
  const filters = [
    "All", "AI Voice Agents", "Intelligent Chatbots", "AI Automation", 
    "AI Adoption Planning", "Custom Software", "Web Development", 
    "Shopify", "UI/UX Design"
  ];

  // Expanded dummy data for the grid
  const workData = [
    {
      title: "WatchMart – Timeless BD",
      description: "Watch Mart is a modern e-commerce website for selling watches online.",
      tags: ["Web Development", "React.js"],
      image: assets.work_mobile_app,
    },
    {
      title: "Home Decoration & Furniture",
      description: "A stylish and responsive e-commerce frontend for home décor and furniture.",
      tags: ["UI/UX Design", "Figma"],
      image: assets.work_dashboard_management,
    },
    {
      title: "TicketBari Booking Platform",
      description: "A production-ready, real-world ticket booking system showcasing full-stack capabilities.",
      tags: ["Web Development", "Node.js"],
      image: assets.work_fitness_app,
    },
    {
      title: "ZeriAI – Neural Analytics",
      description: "Advanced AI-driven analytics dashboard providing real-time data visualization.",
      tags: ["AI Automation", "Python"],
      image: assets.hero_img,
    },
    {
      title: "Enterprise Smart Voice Assistant",
      description: "A comprehensive voice AI solution enabling seamless voice-based customer support over call centers automatically.",
      tags: ["AI Voice Agents", "GPT-4"],
      image: assets.work_mobile_app, 
    },
    {
      title: "FinServe Custom SaaS",
      description: "Proprietary internal resource planning system for a fintech giant with end-to-end encryption features.",
      tags: ["Custom Software", "Next.js"],
      image: assets.work_dashboard_management,
    },
    {
      title: "Automated Data Pipelines",
      description: "Automated extraction and transformation pipeline processing 1M+ daily records with deep learning analytics.",
      tags: ["AI Automation", "AWS"],
      image: assets.work_fitness_app,
    },
    {
      title: "Intelligent Customer Chatbot",
      description: "A dynamic chatbot agent designed to act as the first line of defense for e-commerce website customer service.",
      tags: ["Intelligent Chatbots", "LangChain"],
      image: assets.hero_img,
    },
    {
      title: "Luxury Apparel Shopify Store",
      description: "A high-end, highly optimized custom Shopify storefront featuring dynamic 3D asset viewers and custom cart logic.",
      tags: ["Shopify", "Liquid"],
      image: assets.work_mobile_app, 
    },
    {
      title: "Healthcare Portal UX Redesign",
      description: "Fully modernized the look and feel of a 10-year-old hospital patient portal using modern user-centric design principles.",
      tags: ["UI/UX Design", "Figma"],
      image: assets.work_dashboard_management,
    },
    {
      title: "Corporate AI Adoption Strategy",
      description: "A detailed transformation roadmap and planning architecture for integrating GenAI into HR and operational workflows.",
      tags: ["AI Adoption Planning", "Consulting"],
      image: assets.work_fitness_app,
    },
    {
      title: "Logistics Automation Engine",
      description: "Custom software that integrates with APIs to map out optimized shipping routes and drastically lower fuel costs via machine learning.",
      tags: ["Custom Software", "Python"],
      image: assets.hero_img,
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-gray-950 min-h-screen text-black dark:text-white transition-colors">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center w-full max-w-4xl mx-auto mb-16">
          <Title
            title="Our Work"
            desc="Navigating the cutting edge with agility and quality, our standout work includes cloud applications for:"
          />
          
          {/* Philter section */}
          <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
            {filters.map((filter, idx) => (
              <button 
                key={idx} 
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors border ${
                  filter === "All" 
                  ? "bg-teal-500/10 border-teal-500 text-teal-600 dark:text-teal-400" 
                  : "border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-teal-500 hover:text-teal-600"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {workData.map((work, index) => (
             <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={index}
                className="group relative flex flex-col w-full rounded-2xl overflow-hidden cursor-pointer"
             >
                <div className="w-full aspect-[16/10] relative rounded-2xl overflow-hidden mb-4 border border-gray-100 dark:border-gray-800">
                    <img
                        src={work.image}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        alt={work.title}
                    />
                    {/* Gradient Overlay for style */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="absolute left-4 bottom-4 flex flex-col justify-end">
                        <div className="flex flex-wrap gap-2 mb-2">
                        {work.tags.map((tag, tIdx) => (
                            <span
                            key={tIdx}
                            className="bg-black/60 backdrop-blur border border-white/20 text-white text-[10px] font-semibold px-2 py-1 rounded-md flex items-center gap-1.5"
                            >
                            <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                            {tag}
                            </span>
                        ))}
                        </div>
                    </div>
                </div>
                
                {/* Title and details placed below the image for exactly the second reference look */}
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-500 transition-colors">
                        {work.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {work.description}
                    </p>
                </div>
             </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OurWorkPage;
