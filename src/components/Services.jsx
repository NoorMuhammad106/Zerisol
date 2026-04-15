import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServicesCard from './ServicesCard'
import { motion } from "framer-motion";

import {
  Mic,
  Bot,
  Workflow,
  Code,
  Cpu,
  Globe,
  ShoppingBag,
  Palette
} from 'lucide-react';

const Services = () => {

  const servicesData = [
    {
      title: 'AI Voice Agents',
      description: 'Advanced voice AI for customer support and automated call workflows.',
      icon: Mic
    },
    {
      title: 'Intelligent Bots',
      description: 'Sophisticated AI chatbots capable of managing complex business operations.',
      icon: Bot
    },
    {
      title: 'AI Adoption',
      description: 'Structured roadmaps for business automation guided by AI professionals.',
      icon: Workflow
    },
    {
      title: 'Python & AI Apps',
      description: 'Scalable backend solutions with Django and FastAPI.',
      icon: Code
    },
    {
      title: 'AI Automations',
      description: 'n8n, Make, and Zapier ecosystems to streamline operations.',
      icon: Cpu
    },
    {
      title: 'Web Solutions',
      description: 'Scalable, secure, and modern web applications built for business growth.',
      icon: Globe
    },
    {
      title: 'Shopify Stores',
      description: 'Custom Shopify stores designed for high conversion and e-commerce growth.',
      icon: ShoppingBag
    },
    {
      title: 'UI/UX Design',
      description: 'User-centric design solutions combining aesthetics with functionality.',
      icon: Palette
    }
  ]

  return (
    <div id="solutions" className="scroll-mt-20">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}

      id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-12 pb-24 text-black dark:text-white scroll-mt-20'>
      <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 z-1 dark:hidden' />

      <div className="z-10">
        <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.' />
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-2 ${servicesData.length > 6 ? 'lg:grid-cols-3 xl:grid-cols-4' : 'lg:grid-cols-3'} grid-auto-rows-[1fr] gap-8 w-full max-w-[1600px] items-stretch`}>
        {servicesData.map((service, index) => (
          <ServicesCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
    </div>
  )
}

export default Services
