import React from 'react';
import Title from './Title';

const testimonialsDataRow1 = [
  {
    text: "Zerisol team exceeded our expectations in all aspects of AI product development. We partnered with them when our idea was in the initial phase. Haroon Sajid contributed significantly to product management. We feel privileged to have found them as a technology partner.",
    name: "Alex Johnson",
    role: "CEO, TechInnovators"
  },
  {
    text: "We needed a robust, enterprise-grade, production-ready solution to automate our data pipelines. Noor Muhammad delivered exactly that with speed and precision, creating a secure and highly scalable AI solution.",
    name: "Sarah Williams",
    role: "VP Engineering, DataCorp"
  },
  {
    text: "It has been an absolute pleasure working with Zerisol. Their expertise in LLMs and AI automation is unmatched. Haroon's strategic alignment with our goals made them an exceptional partner.",
    name: "Michael Chen",
    role: "CTO, FinEdge"
  },
  {
    text: "Our project was highly complex, and the Zerisol team demonstrated excellent qualities throughout. Noor Muhammad’s intelligent QA framework was flawless. Highly recommended.",
    name: "David Smith",
    role: "Product Manager"
  }
];

const testimonialsDataRow2 = [
  {
    text: "In just three weeks, Haroon Sajid and the Zerisol team delivered a GenAI proof of value that brought our vision to life. Their team built a personalized agent that integrated perfectly with our APIs.",
    name: "Emily Davis",
    role: "Chief Strategy Officer"
  },
  {
    text: "Zerisol's commitment to quality is incredible. Working with Noor Muhammad was seamless, completely transforming how our internal platform handles complex automated workflows.",
    name: "James Wilson",
    role: "Director of IT, HealthPlus"
  },
  {
    text: "Zerisol is the best partner experience I have had, period! Haroon Sajid guided us through a flawless cloud migration and AI scale-up. I enthusiastically recommend them.",
    name: "Elena Rodriguez",
    role: "Founder, StartupHub"
  },
  {
    text: "The GenAI adoption planning provided by Zerisol was a game-changer. Noor Muhammad and Haroon mapped out our entire AI journey ensuring every step added massive value.",
    name: "Robert Fox",
    role: "Head of Innovation"
  }
];

const Testimonials = () => {
  const row1 = [...testimonialsDataRow1, ...testimonialsDataRow1];
  const row2 = [...testimonialsDataRow2, ...testimonialsDataRow2];

  return (
    <section className="pt-12 pb-24 bg-[#021F24] overflow-hidden border-y border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="text-center mb-12 relative z-10 px-4">
        <div className="inline-block px-4 py-1.5 rounded-full border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-widest mb-4 bg-teal-500/10 backdrop-blur-sm">
          Wall of Love
        </div>
        <h2 className="text-white text-3xl md:text-5xl font-extrabold uppercase mb-4 tracking-tight">
          TESTIMONIES
        </h2>
        <p className="text-gray-300 text-sm md:text-base hidden md:block">
          A few words from our satisfied clients as they share their success stories with Zerisol.
        </p>
        <p className="text-gray-300 text-sm block md:hidden max-w-sm mx-auto">
          A few words from our satisfied clients as they share their success stories with Zerisol.
        </p>
      </div>

      <div className="flex flex-col gap-8 relative z-10">
        
        {/* Row 1 - Moves Left */}
        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee gap-6 px-4 hover:[animation-play-state:paused]">
            {row1.map((item, idx) => (
              <div 
                key={`r1-${idx}`} 
                className="w-[380px] md:w-[480px] shrink-0 bg-[#062c33]/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-[#062c33] transition-colors"
              >
                <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-10">
                  {item.text}
                </p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 font-bold text-lg shrink-0">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{item.name}</h4>
                    <p className="text-gray-400 text-xs">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Moves Right */}
        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee-reverse gap-6 px-4 hover:[animation-play-state:paused]">
            {row2.map((item, idx) => (
              <div 
                key={`r2-${idx}`} 
                className="w-[380px] md:w-[480px] shrink-0 bg-[#062c33]/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-[#062c33] transition-colors"
              >
                <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-10">
                  {item.text}
                </p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-lg shrink-0">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{item.name}</h4>
                    <p className="text-gray-400 text-xs">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Edge Gradients for smooth fade in/out */}
      <div className="absolute inset-y-0 left-0 w-[100px] md:w-[300px] z-20 pointer-events-none bg-gradient-to-r from-[#021F24] to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-[100px] md:w-[300px] z-20 pointer-events-none bg-gradient-to-l from-[#021F24] to-transparent"></div>
    </section>
  );
};

export default Testimonials;
