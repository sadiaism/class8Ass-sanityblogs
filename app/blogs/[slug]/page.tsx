import { client } from '@/sanity/lib/client'
import React from 'react'
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
export const revalidate =10 //seconds

export default async function page({params:{slug}}:{params:{slug:string}}){
    
    const blog = await client.fetch(`*[_type == "blog" && slug.current == $slug][0]{
  title,image,summary,content,author
}`,{slug});
console.log(blog)
return(
    <div className='flex flex-col justify-center items-center gap-[20px]'>
        <h1 className='font-bold text-[44px]'>{blog.title}</h1>

        <Image className="rounded-full" src ={urlFor(blog.image).url()}
              alt ="Image"
              width ={500}
              height ={300}/>

        <h2 className=' flex justify-center text-center text-[24px] px-44'>{blog.summary}</h2>
        <h3 className='flex justify-center items-center font-bold text-[44px]'>Content</h3>
        <div className="text-[24px] px-[44px]">
        <PortableText value={blog.content} />
      </div>
        <h4 className='font-bold text-[44px]'>{blog.author}</h4>
    </div>
)
}


