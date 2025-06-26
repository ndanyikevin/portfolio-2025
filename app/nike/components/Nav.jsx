import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navLinks } from '../constants/index'
import { hamburger } from '../assets/icons'

export default function Nav() {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <Link href={"/"}>
          <Image src={"/nike/assets/images/header-logo.svg"}  width={130} height={29} alt="hamburger menu"/>
        </Link>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            {
              navLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className='font-monstserrat leading-normal text-lg text-slate-gray'>
                  {item.label}
                  </Link>
                </li>
              ))
            }
        </ul>
        <div className='hidden max-lg:block'>
          <Image src={hamburger}  width={25} height={25} alt='Hamburger Menu'/>
        </div>
      </nav>
    </header>
  )
}
