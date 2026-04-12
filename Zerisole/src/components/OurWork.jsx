import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const OurWork = () => {
  const workData = [
    {
      title: "WatchMart – Timeless BD",
      description: "Watch Mart is a modern e-commerce website for selling watches online. The platform offers a clean, responsive design with smooth navigation, product...",
      tags: ["React.js", "Tailwind CSS", "Framer Motion"],
      image: assets.work_mobile_app, // Using existing assets as placeholders
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Home Decoration & Furniture",
      description: "A stylish and responsive e-commerce frontend for home décor and furniture. The site features product galleries, category browsing, and clean UI design...",
      tags: ["React.js", "Tailwind CSS", "Framer Motion"],
      image: assets.work_dashboard_management,
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "TicketBari Booking Platform",
      description: "The primary goal of TicketBari is to deliver a production-ready, real-world ticket booking system that demonstrates strong full-stack development...",
      tags: ["React.js", "Express.js", "MongoDB"],
      image: assets.work_fitness_app,
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "ZeriAI – Neural Analytics",
      description: "An advanced AI-driven analytics dashboard providing real-time data visualization and predictive insights for enterprise-level resource management...",
      tags: ["Next.js", "TypeScript", "Python"],
      image: assets.hero_img,
      liveLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
      id="our-work"
      className="flex flex-col items-center gap-12 px-4 sm:px-12 lg:px-10 xl:px-20 py-24 bg-white dark:bg-gray-950 scroll-mt-20 transition-colors"
    >
      <div className="text-center">
        <Title
          title="Our latest work"
          desc="Browse our portfolio of innovative digital projects that showcase creativity, performance, and results."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 w-full max-w-[1700px]">
        {workData.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={index}
            className="group flex flex-col bg-slate-50 dark:bg-[#1A1F2E] rounded-[24px] overflow-hidden border border-slate-200 dark:border-white/5 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(80,68,229,0.15)]"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 dark:bg-[#2D3344] p-4 flex items-center justify-center">
              <img
                src={work.image}
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 shadow-sm"
                alt={work.title}
              />
            </div>

            {/* Content Area */}
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-black dark:text-white mb-4 group-hover:text-primary transition-colors">
                {work.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {work.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {work.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary dark:text-primary/90 border border-primary/20 rounded-lg bg-primary/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="mt-auto flex items-center justify-between border-t border-slate-200 dark:border-white/10 pt-6">
                <button className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                  View Details
                </button>

                <div className="flex items-center gap-4">
                  <a href={work.liveLink} className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors text-xs font-bold uppercase tracking-wide">
                    Live <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                  <a href={work.codeLink} className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors text-xs font-bold uppercase tracking-wide">
                    Code <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default OurWork;
