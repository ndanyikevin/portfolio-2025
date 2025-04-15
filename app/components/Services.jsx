'use client'
import { serviceData } from "@/public/assets/assets"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "motion/react"

export default function Services() {
  const [showFull, setShowFull] = useState(false)

  const toggleDescription = (index) => {
    setShowFull((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <motion.div id="services" className="w-full px-[12%] py-10 scroll-mt-20"
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition = {{ duration:1}}
    >
      <motion.h4 className="text-center mb-2 text-lg font-ovo"
        initial={{ opacity: 0, y:-20}}
        whileInView={{ opacity: 1, y:0}}
        transition = {{ duration: 0.8, delay: 0.1}}
      > What I offer </motion.h4>
      <motion.h2 className="text-center text-5xl font-ovo"
        initial={{ opacity: 0, y:-20}}
        whileInView={{ opacity: 1, y:0}}
        transition = {{ duration: 0.5, delay: 0.5}}
      >My Services</motion.h2>
      <motion.p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-lg"
       initial={{ opacity: 0}}
       whileInView={{ opacity: 1}}
       transition = {{ duration: 0.5, delay: 0.7}}
      >
        I offer professional web and mobile app development services using modern technologies like Next.js, React Native, and Prisma to build efficient, scalable digital solutions.
      </motion.p>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10"
       initial={{ opacity: 0}}
       whileInView={{ opacity: 1}}
       transition = {{ duration: 0.5, delay: 0.5}}
      >
        {serviceData.map(({ icon, title, description, link }, index) => {
          const words = description.split(' ')
          const truncated = words.slice(0, 6).join(' ') + (words.length > 6 ? '...' : '')

          return (
            <motion.div key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-150 hover:shadow-black dark:bg-darkHover dark:hover:shadow-white dark:hover:bg-darkHover"
              whileHover={{scale: 1.05}}
            >
              <Image src={icon} alt="service image" className="w-10" />
              <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
              <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                {showFull[index] ? description : truncated}
              </p>
              {words.length > 6 && (
                <button
                  className="flex items-center gap-2 text-sm mt-2 font-bold hover:underline"
                  onClick={() => toggleDescription(index)}
            
                >
                  {showFull[index] ? 'Show less' : 'Read more'}
                </button>
              )}
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}
