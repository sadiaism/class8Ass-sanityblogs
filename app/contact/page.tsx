import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex flex-col gap-[16px] justify-center items-center bg-gradient-to-r from-slate-500 to-white p-[12px] h-screen' >
        <h1 className='flex flex-col justify-center items-center gap-[12px]'>
        <label htmlFor="name">Name</label>
                    <input type="text"
                    className='h-[40px] w-[350px] bg-transparent border border-black md:w-[540px] p-[12px]'
                    id="name" />

        <label htmlFor="email">Email</label>
                    <input type="text"
                    className='h-[40px] w-[350px] bg-transparent border border-black md:w-[540px] p-[12px]'
                    id="email" />

        <label htmlFor="message">Message</label>
                    <input type="text"
                    className='h-[100px] w-[350px] bg-transparent border border-black md:w-[540px] p-[12px]'
                    id="message" />
        </h1>

        <h2 className='font-bold text-[20px]'>Fill out our form and we will contact you within 24 hours.</h2>
                    <h3 className='font-semibold'>Emails: customer@exclusive.com</h3>
                    <h4 className='font-semibold'>Emails: support@exclusive.com</h4>
                    <h5 className='flex gap-[20px]'><Image src={"/images/Icon-Google.svg"} alt="google"width={20}height={40}/>
                    <Image src={"/images/icon-instagram-b.svg"} alt="instagram"width={20}height={40}/>
                    <Image src={"/images/icon-Linkedin-b.svg"} alt="linkedin"width={20}height={40}/></h5>
      
    </div>
  )
}

export default page
