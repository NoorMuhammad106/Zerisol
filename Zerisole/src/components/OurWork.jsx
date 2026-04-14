import React, { useRef } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const OurWork = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const workData = [
    {
      title: "WatchMart – Timeless BD",
      description: "Watch Mart is a modern e-commerce website for selling watches online. The platform offers a clean, responsive design with smooth navigation, product...",
      tags: ["Web Development", "React.js"],
      image: assets.work_mobile_app, 
      liveLink: "#", codeLink: "#"
    },
    {
      title: "Home Decoration & Furniture",
      description: "A stylish and responsive e-commerce frontend for home décor and furniture. The site features product galleries, category browsing, and clean UI design...",
      tags: ["UI/UX Design", "Figma"],
      image: assets.work_dashboard_management,
      liveLink: "#", codeLink: "#"
    },
    {
      title: "TicketBari Booking Platform",
      description: "The primary goal of TicketBari is to deliver a production-ready, real-world ticket booking system that demonstrates strong full-stack development...",
      tags: ["Web Development", "Node.js"],
      image: assets.work_fitness_app,
      liveLink: "#", codeLink: "#"
    },
    {
      title: "ZeriAI – Neural Analytics",
      description: "An advanced AI-driven analytics dashboard providing real-time data visualization and predictive insights for enterprise-level resource management...",
      tags: ["AI Automation", "Python"],
      image: assets.hero_img,
      liveLink: "#", codeLink: "#"
    },
    {
      title: "Enterprise Smart Voice Assistant",
      description: "A comprehensive voice AI solution enabling seamless voice-based customer support over call centers automatically.",
      tags: ["AI Voice Agents", "GPT-4"],
      image: assets.work_mobile_app, 
      liveLink: "#", codeLink: "#"
    },
    {
      title: "FinServe Custom SaaS",
      description: "Proprietary internal resource planning system for a fintech giant with end-to-end encryption features.",
      tags: ["Custom Software", "Next.js"],
      image: assets.work_dashboard_management,
      liveLink: "#", codeLink: "#"
    },
    {
      title: "Automated Data Pipelines",
      description: "Automated extraction and transformation pipeline processing 1M+ daily records with deep learning analytics.",
      tags: ["AI Automation", "AWS"],
      image: assets.work_fitness_app,
      liveLink: "#", codeLink: "#"
    },
    {
      title: "Intelligent Customer Chatbot",
      description: "A dynamic chatbot agent designed to act as the first line of defense for e-commerce website customer service.",
      tags: ["Intelligent Chatbots", "LangChain"],
      image: assets.hero_img,
      liveLink: "#", codeLink: "#"
    },
    {
      title: "Luxury Apparel Shopify Store",
      description: "A high-end, highly optimized custom Shopify storefront featuring dynamic 3D asset viewers and custom cart logic.",
      tags: ["Shopify", "Liquid"],
      image: assets.work_mobile_app, 
      liveLink: "#", codeLink: "#"
    },
    {
      title: "Healthcare Portal UX Redesign",
      description: "Fully modernized the look and feel of a 10-year-old hospital patient portal using modern user-centric design principles.",
      tags: ["UI/UX Design", "Figma"],
      image: assets.work_dashboard_management,
      liveLink: "#", codeLink: "#"
    },
    {
      title: "Corporate AI Adoption Strategy",
      description: "A detailed transformation roadmap and planning architecture for integrating GenAI into HR and operational workflows.",
      tags: ["AI Adoption Planning", "Consulting"],
      image: assets.work_fitness_app,
      liveLink: "#", codeLink: "#"
    },
    {
      title: "Logistics Automation Engine",
      description: "Custom software that integrates with APIs to map out optimized shipping routes and drastically lower fuel costs via machine learning.",
      tags: ["Custom Software", "Python"],
      image: assets.hero_img,
      liveLink: "#", codeLink: "#"
    }
  ];

  const filters = [
    "AI Voice Agents", "Intelligent Chatbots", "AI Automation", 
    "AI Adoption Planning", "Custom Software", "Web Development", 
    "Shopify", "UI/UX Design"
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
      id="our-work"
      className="flex flex-col items-center gap-8 px-4 sm:px-12 lg:px-10 xl:px-20 py-24 bg-white dark:bg-gray-950 scroll-mt-20 transition-colors overflow-hidden"
    >
      <div className="text-center w-full max-w-4xl mx-auto mb-4">
        <Title
          title="Our Work"
          desc="Navigating the cutting edge with agility and quality, our standout work includes cloud applications for:"
        />
        
        {/* Fillers Pills */}
        <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
          {filters.map((filter, idx) => (
            <button 
              key={idx} 
              className="px-4 py-1.5 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 border border-teal-500/30 rounded-full hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:border-teal-500 transition-colors"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel Container */}
      <div className="w-full max-w-[1600px] mt-6 relative">
        {/* Navigation Arrows */}
        <div className="flex justify-end gap-2 mb-4 px-4 hidden md:flex">
            <button onClick={scrollLeft} className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-500 hover:text-black dark:hover:text-white hover:border-gray-500 transition-colors cursor-pointer">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button onClick={scrollRight} className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-500 hover:text-black dark:hover:text-white hover:border-gray-500 transition-colors cursor-pointer">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
        </div>

        <div ref={carouselRef} className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scroll-bar px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {workData.map((work, index) => (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className="group relative flex-none w-[300px] sm:w-[350px] lg:w-[400px] aspect-[16/10] bg-slate-100 rounded-2xl overflow-hidden snap-start cursor-pointer border border-gray-100 dark:border-gray-800"
            >
              <img
                src={work.image}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt={work.title}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {work.tags.slice(0, 2).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-black/40 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-white font-bold text-sm sm:text-base leading-snug line-clamp-2">
                  {work.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OurWork;
