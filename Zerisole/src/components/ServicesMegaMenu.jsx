import React, { useState, useRef, useEffect } from "react";

/* ─────────────────────── DATA ─────────────────────── */
const CATEGORIES = [
  {
    id: "ai-automation",
    label: "AI Automation",
    services: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
            <path d="M7 9l2 2 4-4" />
          </svg>
        ),
        name: "AI Workflow Automation",
        desc: "End-to-end automation of repetitive tasks",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
            <path d="M12 8v4l3 3" />
          </svg>
        ),
        name: "AI Chatbots & Assistants",
        desc: "Smart bots that qualify leads 24/7",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        ),
        name: "NLP & Text Processing",
        desc: "Extract insights from unstructured data",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /><path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
          </svg>
        ),
        name: "AI Voice Agents",
        desc: "Conversational voice AI for your business",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
          </svg>
        ),
        name: "n8n / Make.com Integrations",
        desc: "Plug-and-play automation with 500+ apps",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
          </svg>
        ),
        name: "AI Consultation",
        desc: "Strategic roadmap to AI-powered growth",
      },
    ],
    expertise: [
      { icon: "🤖", name: "OpenAI GPT-4o" },
      { icon: "🔗", name: "n8n Automation" },
      { icon: "⚙️", name: "Make.com" },
      { icon: "🧠", name: "LangChain" },
    ],
  },
  {
    id: "gohighlevel",
    label: "GoHighLevel CRM",
    services: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
        name: "GHL Account Setup",
        desc: "Full white-label GHL environment setup",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
        name: "Pipeline & Funnel Build",
        desc: "High-converting sales funnels in GHL",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        ),
        name: "Email & SMS Automation",
        desc: "Drip campaigns that close deals on autopilot",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 4.08 5.18 2 2 0 0 1 6.11 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L10.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 24 17.92z" />
          </svg>
        ),
        name: "Lead Follow-Up System",
        desc: "Never let a lead go cold again",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
          </svg>
        ),
        name: "GHL Sub-Account Management",
        desc: "Manage multiple client accounts with ease",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        ),
        name: "Reporting & Analytics",
        desc: "Real-time dashboards for every campaign",
      },
    ],
    expertise: [
      { icon: "🚀", name: "GoHighLevel" },
      { icon: "📧", name: "Email Marketing" },
      { icon: "📲", name: "SMS Campaigns" },
      { icon: "🔄", name: "Zapier / Make" },
    ],
  },
  {
    id: "seo",
    label: "SEO",
    services: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        ),
        name: "Technical SEO Audit",
        desc: "Identify & fix every ranking blocker",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        ),
        name: "Keyword Research & Strategy",
        desc: "Target keywords that bring buyers",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
          </svg>
        ),
        name: "On-Page Optimization",
        desc: "Meta, headings, and content that rank",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        ),
        name: "Link Building",
        desc: "High-authority backlinks at scale",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        ),
        name: "Local SEO",
        desc: "Dominate Google Maps & local search",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        ),
        name: "SEO Reporting",
        desc: "Monthly rank tracking & ROI reports",
      },
    ],
    expertise: [
      { icon: "🔍", name: "Ahrefs" },
      { icon: "📊", name: "SEMrush" },
      { icon: "🌐", name: "Google Search Console" },
      { icon: "🖊️", name: "Surfer SEO" },
    ],
  },
  {
    id: "web-dev",
    label: "Web Development",
    services: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
          </svg>
        ),
        name: "Custom Web Development",
        desc: "Tailored websites built to convert",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        ),
        name: "Landing Page Design",
        desc: "High-converting pages that drive action",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        ),
        name: "E-Commerce Development",
        desc: "Shopify & WooCommerce stores that sell",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
          </svg>
        ),
        name: "WordPress Development",
        desc: "Fast, scalable WordPress solutions",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        ),
        name: "Web App Development",
        desc: "React / Next.js apps at startup speed",
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 4 20 4 20 20 4 20 4 4" /><line x1="4" y1="9" x2="20" y2="9" /><line x1="9" y1="9" x2="9" y2="20" />
          </svg>
        ),
        name: "UI/UX Design",
        desc: "Designs users love to interact with",
      },
    ],
    expertise: [
      { icon: "⚛️", name: "React / Next.js" },
      { icon: "🎨", name: "Figma" },
      { icon: "🟦", name: "WordPress" },
      { icon: "🛒", name: "Shopify" },
    ],
  },
];

/* ─────────────────────── COMPONENT ─────────────────────── */
import { Link } from "react-router-dom";

const ServicesMegaMenu = ({ isVisible, onMouseEnter, onMouseLeave }) => {
  const [activeTab, setActiveTab] = useState(0);
  const category = CATEGORIES[activeTab];

  if (!isVisible) return null;

  return (
    <div
      className="mega-menu-wrapper"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mega-menu-inner">
        {/* ── Tab bar ── */}
        <div className="mega-menu-tabs">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat.id}
              className={`mega-tab-btn${activeTab === i ? " active" : ""}`}
              onMouseEnter={() => setActiveTab(i)}
              onClick={() => setActiveTab(i)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── Body ── */}
        <div className="mega-menu-body">
          {/* Services grid */}
          <div className="mega-services-grid">
            {category.services.map((svc) => (
              <Link key={svc.name} to="/services" className="mega-service-item">
                <span className="mega-service-icon">{svc.icon}</span>
                <p className="mega-service-name">{svc.name}</p>
              </Link>
            ))}
          </div>

          {/* Expertise sidebar */}
          <div className="mega-expertise">
            <p className="mega-expertise-title">OUR EXPERTISE</p>
            <div className="mega-expertise-list">
              {category.expertise.map((tool) => (
                <div key={tool.name} className="mega-expertise-item">
                  <span className="mega-expertise-icon">{tool.icon}</span>
                  <span className="mega-expertise-name">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesMegaMenu;
export { CATEGORIES };
