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
      className="py-24 px-4 sm:px-12 lg:px-24 xl:px-40 flex flex-col items-center gap-16 bg-white dark:bg-gray-950 overflow-hidden scroll-mt-20"
    >
      <div className="text-center">
        <Title
          title="Meet Our Experts"
          desc="Blending world-class talent with AI innovation to deliver exceptional results."
        />
      </div>

      {/* Founders Section - 2 Cards */}
      <div className="w-full flex flex-col items-center gap-10">
        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Core Leadership</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
          {founders.map((member, index) => (
            <motion.div
              key={`founder-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-slate-50 dark:bg-gray-900/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 text-center shadow-sm hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-40 h-40 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-1">{member.name}</h3>
              <p className="text-primary font-medium text-sm mb-4">{member.title}</p>
              <div className="flex justify-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-all shadow-sm">
                  <img src={assets.linkedin_icon} alt="LinkedIn" className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-all shadow-sm">
                  <img src={assets.twitter_icon} alt="Twitter" className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center cursor-pointer hover:bg-primary/10 transition-all shadow-sm">
                  <img src={assets.whatsapp_icon} alt="WhatsApp" className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Members Section - 4 Cards */}
      <div className="w-full flex flex-col items-center gap-10">
        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Specialized Team</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {coreTeam.map((member, index) => (
            <motion.div
              key={`team-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
              viewport={{ once: true }}
              className="group bg-slate-50/50 dark:bg-gray-900/30 p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-900 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="relative mb-6 mx-auto inline-block">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-24 h-24 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border-4 border-white dark:border-gray-800 shadow-sm group-hover:border-primary/20"
                />
              </div>
              <h3 className="font-bold text-black dark:text-white text-lg mb-1">{member.name}</h3>
              <p className="text-sm text-primary font-semibold">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Teams;
