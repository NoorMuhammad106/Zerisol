import React from "react";
import assets from "../assets/assets";

const Footer = ({ theme }) => {
  return (
    <footer className="bg-[#021F24] text-gray-300 pt-16 pb-6 relative overflow-hidden transition-colors font-sans">
      <div className="px-6 md:px-12 lg:px-20 max-w-[1700px] mx-auto flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 border-b border-white/10 pb-16">
        
        {/* Left Section - Brand & Contact */}
        <div className="flex flex-col max-w-sm">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8 text-white font-bold text-xl tracking-wide cursor-pointer hover:text-teal-400 transition-colors">
            {/* Simple Box icon to match "EMUMBA" style */}
            <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4h16v16H4zM4 12h16M12 4v16" />
            </svg>
            ZERISOL
          </div>

          {/* Locations */}
          <div className="flex flex-col gap-5 text-sm text-gray-400">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>Plot H 275, Disposal Allama Iqbal Town, Bahawalpur, Pakistan</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>Plot# 189-A, Korang Road, I-10/3, Islamabad</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-12 text-white/90">
             <a href="#" className="hover:text-teal-400 transition-colors">
               <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" /></svg>
             </a>
             <a href="#" className="hover:text-teal-400 transition-colors">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
             </a>
             <a href="#" className="hover:text-teal-400 transition-colors">
               <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
             </a>
             <a href="#" className="hover:text-teal-400 transition-colors">
               <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M21.582 6.186a2.668 2.668 0 00-1.876-1.884C17.915 3.82 12 3.82 12 3.82s-5.914 0-7.705.482a2.668 2.668 0 00-1.876 1.884C1.942 7.981 1.942 12 1.942 12s0 4.02.477 5.814a2.668 2.668 0 001.876 1.884c1.791.482 7.705.482 7.705.482s5.915 0 7.706-.482a2.668 2.668 0 001.876-1.884C22.059 16.02 22.059 12 22.059 12s0-4.019-.477-5.814zM9.948 15.485V8.515L16.022 12l-6.074 3.485z"/></svg>
             </a>
          </div>
        </div>

        {/* Right Section - Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-14 text-[13.5px] lg:flex-1 lg:max-w-4xl lg:ml-auto">
          
          {/* Services Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-gray-500 font-semibold mb-2 uppercase tracking-wide text-xs">Services</h4>
            <a href="#" className="hover:text-white transition-colors">AI Voice Agents</a>
            <a href="#" className="hover:text-white transition-colors">Intelligent Chatbots</a>
            <a href="#" className="hover:text-white transition-colors">AI Automation</a>
            <a href="#" className="hover:text-white transition-colors">AI Adoption Planning</a>
            <a href="#" className="hover:text-white transition-colors">Custom Software Development</a>
            <a href="#" className="hover:text-white transition-colors">Web Development</a>
            <a href="#" className="hover:text-white transition-colors">Shopify Development</a>
            <a href="#" className="hover:text-white transition-colors">UI/UX & Product Design</a>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-gray-500 font-semibold mb-2 uppercase tracking-wide text-xs">Quick Links</h4>
            <a href="/#hero" className="hover:text-white transition-colors">Home</a>
            <a href="/#about-us" className="hover:text-white transition-colors">About Us</a>
            <a href="/services" className="hover:text-white transition-colors">Services</a>
            <a href="/our-work" className="hover:text-white transition-colors">Our Work</a>
            <a href="/#contact-us" className="hover:text-white transition-colors">Contact Us</a>
          </div>

          {/* Company & Resources Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-gray-500 font-semibold mb-2 uppercase tracking-wide text-xs">Company & Resources</h4>
            <a href="#" className="hover:text-white transition-colors">Our Team</a>
            <a href="#" className="hover:text-white transition-colors">Careers / Open Positions</a>
            <a href="#" className="hover:text-white transition-colors">Blogs & Insights</a>
            <a href="#" className="hover:text-white transition-colors">Webinars</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>

      {/* Footer Bottom Setup */}
      <div className="pt-6 px-6 text-center text-[13px] text-gray-500 font-medium">
        Copyright © 2026 Zerisol Inc. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
