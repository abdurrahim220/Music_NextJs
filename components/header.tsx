"use client"
import React, { useEffect, useState } from 'react'
import { SidebarTrigger } from './ui/sidebar'
import { Input } from './ui/input'
import { BellIcon, SettingsIcon } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, [])


  return (
    <header className={`fixed z-50 top-0 w-full md:w-[calc(100%-16rem)] transition-colors duration-300 ${isScrolled ? "bg-gray-900/40 backdrop-blur-md" : ""}`}>


      <div className="flex items-center justify-between gap-8 px-6 md:px-12 py-4 md:py-8">

        <SidebarTrigger />

        <ul className='hidden md:flex gap-x-6 text-lg uppercase'>
          <li><a href="#">Music</a></li>
          <li><a href="#">Album</a></li>
          <li><a href="#">Radio</a></li>
        </ul>

        <Input
          className='rounded-xl h-10 md:h-12 w-full md:w-96 bg-muted border-2 border-gray-500/70'
          placeholder='Type here to search'
        />

        <div className='flex items-center gap-x-8 cursor-pointer'>
          <BellIcon />
          <SettingsIcon />

          <div className="hidden md:flex items-center gap-4 bg-gray-800/50 px-4 py-2 rounded-xl">
            <Image
              src={"/user.jpg"}
              alt='User'
              width={100}
              height={100}
              className='rounded-lg object-cover size-10 aspect-square'
            />
            <p className='text-lg'>John Doe</p>

          </div>

        </div>

      </div>

    </header>
  )
}

export default Header