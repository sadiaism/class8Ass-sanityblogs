"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import {AiOutlineMenu ,AiOutlineClose} from "react-icons/ai"

const Header = () => {
  const [isMenuOpen ,setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header>
    <div className='flex justify-around items-center text-[20px] font-semibold h-[100px] bg-gradient-to-r from-black to-white'>
        <h1 className='text-white'>Sanity Blogs</h1>
        <h2>
            <ul className='hidden md:flex justify-center items-center gap-[20px]'>
                <Link href="/"><li className='hover:text-white'>Home</li></Link>
                <Link href="/about"><li className='hover:text-white'>About</li></Link>
                <Link href="/contact"><li className='hover:text-white'>Contact</li></Link>
            </ul>
        </h2>

        <div className="flex mt-3 md:hidden"
                  onClick={toggleMenu}>
                    {isMenuOpen ?<AiOutlineClose size={30}/>:
                    <AiOutlineMenu size={30}/>
                  }
                </div>
      
    </div>


    {
            isMenuOpen && (
            <ul className='flex flex-col gap-[4px] md:hidden'>
                <li>
                    <Link href="/" onClick={toggleMenu}>Home</Link>
                </li>

                <li>
                    <Link href="/about" onClick={toggleMenu}>About</Link>
                </li>

                <li>
                    <Link href="/contact" onClick={toggleMenu}>Contact</Link>
                </li>

                    </ul>
                  )
                }

      </header>
  )
}

export default Header
