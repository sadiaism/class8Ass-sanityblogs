import { client } from '@/sanity/lib/client'
import React from 'react'
import { urlFor } from "@/sanity/lib/image";
export const revalidate =10 //seconds

export default async function page({params:{slug}}:{params:{slug:string}}){
    
    const blog = await client.fetch(`*[_type == "blog" && slug.current =="${slug}"]{
  name,image,buttonText,summary,content,author
}`);
console.log(blog)
return(
    <div>
        <h1>{blog.title}</h1>
        <h2>{blog.summary}</h2>
        <h3>{blog.content}</h3>
        <h4>{blog.author}</h4>
    </div>
)
}


