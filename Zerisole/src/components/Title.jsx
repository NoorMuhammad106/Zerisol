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
        className='text-4xl sm:text-5xl text-center mb-3 font-extrabold uppercase text-gray-900 dark:text-white'>{title}</motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className='max-w-lg mx-auto text-center text-black dark:text-white mb-6'>{desc}</motion.p>
    </>
  )
}

export default Title
