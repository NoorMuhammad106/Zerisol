import React, { useRef, useState } from "react";
import { motion } from "framer-motion";


const ServicesCard = ({ service, index }) => {

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false);

  const divRef = useRef(null)

  const handelMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative overflow-hidden w-full flex flex-col rounded-2xl border border-gray-100 dark:border-gray-800 
       shadow-xl shadow-gray-200/50 dark:shadow-none bg-white dark:bg-gray-900/50 transition-all duration-300 hover:border-primary/50" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} ref={divRef} onMouseMove={handelMouseMove}>

      <div className={`pointer-events-none blur-3xl rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'} `} style={{ top: position.y - 150, left: position.x - 150 }} />

      <div className="flex flex-col p-8 h-full z-10 relative">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 flex items-center justify-center bg-blue-500/10 dark:bg-blue-400/10 rounded-xl shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:shadow-lg group-hover:shadow-blue-500/20">
            {typeof service.icon === 'string' ? (
              <img src={service.icon} alt="" className="w-8 h-8 object-contain" />
            ) : (
              <service.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            )}
          </div>
          <h3 className="font-bold text-lg leading-tight text-black dark:text-white">{service.title}</h3>
        </div>

        <div className="flex flex-col flex-grow">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            {service.description}
          </p>

          {service.subServices && (
            <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800 space-y-4">
              {service.subServices.map((sub, idx) => (
                <div key={idx} className="group/sub">
                  <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.1em] mb-1">{sub.title}</h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">{sub.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
