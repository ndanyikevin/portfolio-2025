'use client';

import { assets } from '@/public/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const [resultMessage, setResultMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "dda46bb0-16d4-4353-a4ad-3387893ccd83",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });

    const result = await response.json();
    if (result.success) {
      setResultMessage('Message sent successfully!');
      e.target.reset(); // Optional: clear form
    } else {
      setResultMessage('Something went wrong. Please try again.');
    }
  }

  return (
    <motion.div id='contact' className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition = {{ duration: 1}}
    
    >
      <motion.h4 className="text-center mb-2 text-lg font-ovo"
        initial={{ y: -20,opacity: 0}}
        whileInView={{ y:0,opacity: 1}}
        transition = {{ duration: 0.3, delay: 0.5}}
      >Contact me</motion.h4>
      <motion.h2 className="text-center text-5xl font-ovo"
        initial={{ y: -20,opacity: 0}}
        whileInView={{ y:0,opacity: 1}}
        transition = {{ duration: 0.5, delay: 0.5}}
      >Get in touch</motion.h2>
      <motion.p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-lg"
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition = {{ duration: 0.7, delay: 0.5}}
      >
        Have a project in mind or just want to say hello? Let’s connect and make something amazing together.
      </motion.p>

      <motion.form className='max-w-2xl mx-auto' onSubmit={handleSubmit}
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition = {{ duration: 0.9, delay: 0.5}}
      >
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <motion.input
            type="text"
            placeholder='Enter your name'
            required
            name='name'
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
            initial={{ x: -50,opacity: 0}}
            whileInView={{ x:0,opacity: 1}}
            transition = {{ duration: 0.6, delay: 1.1}}

          />
          <motion.input
            type="text"
            placeholder='Enter your email'
            required
            name='email'
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
            initial={{ x: 50,opacity: 0}}
            whileInView={{ x:0,opacity: 1}}
            transition = {{ duration: 0.6, delay: 1.2}}

          />
        </div>
        <motion.textarea
          rows={6}
          placeholder='Enter your message'
          required
          name='message'
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90'

          initial={{ y:100,opacity: 0}}
          whileInView={{ y:0,opacity: 1}}
          transition = {{ duration: 0.6, delay: 1.3}}
        ></motion.textarea>
        <motion.button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-150 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
          whileHover={{scale: 1.05}}
          transition={{duration: 0.3}}
        >
          Send message
          <Image src={assets.right_arrow_white} alt='right white arrow' className="w-4" />
        </motion.button>
        {resultMessage && (
          <p className='mt-4 text-center font-outfit text-sm text-green-700'>{resultMessage}</p>
        )}
      </motion.form>
    </motion.div>
  );
}
