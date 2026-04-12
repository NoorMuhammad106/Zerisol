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
      description: 'Advanced voice AI solutions for customer support, inbound call handling, outbound sales, and automated voice-driven communication workflows.',
      icon: Mic
    },
    {
      title: 'Advanced AI Chatbots & Intelligent Agents',
      description: 'Sophisticated AI chatbots and autonomous agents capable of managing complex conversations, automating workflows, and scaling business operations.',
      icon: Bot
    },
    {
      title: 'Organizational AI Adoption Planning',
      description: 'Comprehensive evaluation of business processes with a structured AI automation roadmap, guided by certified AI professionals to ensure smooth transformation.',
      icon: Workflow
    },
    {
      title: 'Custom Software Development',
      description: 'End-to-end development of AI-powered applications. Proven delivery across drilling, logistics, and healthcare industries with measurable results.',
      icon: Code
    },
    {
      title: 'AI & Machine Learning Services',
      description: 'At Zerisol, we enable businesses to leverage AI and Machine Learning to drive innovation, automate processes, and unlock data-driven insights.',
      icon: Cpu
    },
    {
      title: 'Web Development Services',
      description: 'Scalable, secure, and modern web solutions built to support business growth, performance, and user experience using latest technologies.',
      icon: Globe
    },
    {
      title: 'Shopify Development Services',
      description: 'Custom Shopify stores designed for high conversion, seamless integrations, and scalable e-commerce growth for modern brands.',
      icon: ShoppingBag
    },
    {
      title: 'UI/UX & Product Design',
      description: 'User-centric design solutions that combine aesthetics with functionality to create intuitive digital products and memorable experiences.',
      icon: Palette
    }
  ]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}

      id='services' className='relative  flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-black dark:text-white scroll-mt-20'>
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
  )
}

export default Services
