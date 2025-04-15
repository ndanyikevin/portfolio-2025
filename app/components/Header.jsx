'use client'
import Image from "next/image";
import { assets } from '@/public/assets/assets'
import Link from "next/link";
import { motion } from "motion/react";

export default function Header(){
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <motion.div
                initial= {{scale:0}}
                whileInView={{scale: 1}}
                transition={{duration: 0.8, type: 'spring', stiffness: 100}}
            >
                <Image src={assets.profile_img} alt="profile image" className="rounded-full w-32"/>
            </motion.div>
            <motion.h3
                initial= {{y: -30, opacity:0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.8, delay:0.5}}
            className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">Hi!<Image src={assets.hand_icon} className="w-6" alt="hand emoji"/> This is Kevin Ndanyi</motion.h3>
            <motion.h1 
                initial= {{y: -20, opacity:0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.8, delay:0.5}}
            className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">fullstack developer based in Nairobi, Kenya</motion.h1>
            <motion.p 
                initial= {{opacity:0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, delay:0.7}}
            className="max-w-2xl mx-auto font-ovo">I am a fullstack developer from Nairobi, Kenya with 5 years of experience in ReactJS ecosystem</motion.p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">  
                <motion.a 
                    initial= {{y: 30, opacity:0}}
                    whileInView={{y:0,opacity: 1}}
                    transition={{duration: 0.6, delay:1}}
                href='#contact' className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent">contact me <Image src={assets.right_arrow_white} alt="white right arrow" className=" w-4" download/> </motion.a>
                <motion.a
                    initial= {{y: 30, opacity:0}}
                    whileInView={{y:0,opacity: 1}}
                    transition={{duration: 0.6, delay:1.2}}
                href='/sample-resume.pdf' className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black">my resume <Image src={assets.download_icon} alt="download icon" className=" w-4"/> </motion.a>
            </div>
        </div>
    )
}