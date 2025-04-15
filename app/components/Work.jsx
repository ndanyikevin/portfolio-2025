import { assets, workData } from '@/public/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'

export default function Work({isDarkMode}) {
  return (
    <motion.div id='work' className="w-full px-[12%] py-10 scroll-mt-20"
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition = {{ duration:1}}
    >
        <motion.h4 className="text-center mb-2 text-lg font-ovo"
            initial={{ y:-20, opacity: 0}}
            whileInView={{y: 0, opacity: 1, y:0}}
            transition = {{ duration: 0.3, delay: 0.5}}
        > My Portfolio </motion.h4>
        <motion.h2 className="text-center text-5xl font-ovo"
            initial={{ y:-20, opacity: 0}}
            whileInView={{y: 0, opacity: 1, y:0}}
            transition = {{ duration: 0.5, delay: 0.5}}
        >My latest work</motion.h2>
        <motion.p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-lg"
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition = {{ duration: 0.7, delay: 0.5}}
        >
        My latest work showcases a responsive, high-performance web application built with React.js, demonstrating expertise in modern frontend development and seamless user experience.
        </motion.p>
        <motion.div className='grid grid-cols-auto gap-5 dark:text-black'
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition = {{ duration: 0.9, delay: 0.6}}
        >
            {workData.map((project, index)=> (
                <motion.div key={index} 
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                style={{ backgroundImage: `url(${project.bgImage})`}}
                whileHover={{scale: 1.05}}
                transition={{duration: 0.3}}
                >
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-150 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>
                        <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[1px_1px_0_#000] group-hover:bg-lime-300 transition'>
                            <Image src={assets.send_icon} alt='send icon image' className='w-5' />
                        </div>
                    </div>
                    
                </motion.div>
            ))}
        </motion.div>
        <motion.a href={'/'} className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-150 dark:text-white dark:border-white dark:hover:bg-darkHover'
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition = {{ duration: 1.1, delay: 0.5}}
        > Show More
        <Image src={isDarkMode ? assets.right_arrow_bold_dark: assets.right_arrow_bold}  alt='right arrow ' className='w-4'/>
        </motion.a>
    </motion.div>
  )
}
