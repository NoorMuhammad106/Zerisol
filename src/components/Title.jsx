import React from 'react'
import { motion } from "framer-motion";

const Title = ({ title, desc }) => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-3xl sm:text-4xl lg:text-5xl text-center mb-3 font-extrabold uppercase text-gray-900 dark:text-white leading-tight px-2'>{title}</motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className='max-w-lg mx-auto text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 px-4'>{desc}</motion.p>
    </>
  )
}

export default Title
