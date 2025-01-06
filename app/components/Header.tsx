import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex justify-around items-center text-[20px] font-semibold h-[100px] mb-[50px] bg-gradient-to-r from-black to-white'>
        <h1 className='text-white'>Sanity Blogs</h1>
        <h2>
            <ul className='flex justify-center items-center gap-[20px]'>
                <Link href="/"><li className='hover:text-white'>Home</li></Link>
                <Link href="/about"><li className='hover:text-white'>About</li></Link>
                <Link href="/blogs"><li className='hover:text-white'>Blogs</li></Link>
                <Link href="/contact"><li className='hover:text-white'>Contact</li></Link>
            </ul>
        </h2>
      
    </div>
  )
}

export default Header
