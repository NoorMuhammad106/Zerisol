import React from "react";
import Title from "./Title";
import assets, { teamData } from "../assets/assets";
import { motion } from "framer-motion";

const Teams = () => {
  const founders = teamData.slice(0, 2);
  const coreTeam = teamData.slice(2, 6);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="team"
      className="relative py-24 px-4 sm:px-12 lg:px-24 xl:px-40 flex flex-col items-center gap-16 bg-white dark:bg-gray-950 overflow-hidden scroll-mt-20"
    >
      {/* Background decoration to match Services section */}
      <img src={assets.bgImage2} alt="" className='absolute -top-60 -left-60 z-0 dark:hidden opacity-60' />

      <div className="text-center relative z-10">
        <Title
          title="Meet Our Experts"
          desc="Blending world-class talent with AI innovation to deliver exceptional results."
        />
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:bg-primary transition-all duration-500 hover:-translate-y-2 border-b-[5px] border-b-primary overflow-hidden"
            >
              {/* Circular Image Container - Tightened Margins */}
              <div className="w-24 h-24 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 border-4 border-primary group-hover:bg-white group-hover:border-white transition-all duration-500 overflow-hidden shadow-lg shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Text Area - Tightened Margins */}
              <div className="flex flex-col items-center mb-4">
                <h3 className="text-lg font-extrabold text-[#0D1041] dark:text-white mb-0.5 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                  {member.name}
                </h3>
                <p className="text-[12px] font-bold text-gray-500 dark:text-gray-400 group-hover:text-white/90 transition-colors duration-300 leading-tight">
                  {member.title}
                </p>
              </div>

              {/* Social Icons - Compact Placement */}
              <div className="flex gap-2 relative z-20">
                {[assets.linkedin_icon, assets.twitter_icon, assets.whatsapp_icon].map((icon, i) => (
                  <div 
                    key={i} 
                    className="w-7 h-7 rounded-full bg-slate-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-800 flex items-center justify-center cursor-pointer hover:scale-110 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300"
                  >
                    <img 
                      src={icon} 
                      alt="social" 
                      className="w-3 h-3 opacity-60 dark:opacity-40 group-hover:opacity-100 group-hover:invert transition-all" 
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Teams;
