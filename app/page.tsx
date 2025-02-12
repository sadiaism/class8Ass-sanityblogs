import {client} from "../sanity/lib/client"
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export const revalidate =10 //seconds

interface Iblog{
  title:string,
  image:string,
  buttonText:string;
  slug:string;
  content:[],
  summary:string,
  author:string,


}

export default async function Home() {
  const res:Iblog[] = await client.fetch(`*[_type == "blog"]{
     title,image,buttonText,
    "slug":slug.current}`)
 console.log(res);

  return (
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[12px]">
        {
          res.map((blog,index) =>{
           
            return(
             <div key={index} className="flex flex-col justify-center items-center gap-[24px]">
              <h1 className="text-[24px] font-bold text-blue-800">{blog.title}</h1>

              <img className="rounded-full" src ={urlFor(blog.image).url()}
              alt ="Image"
              width ={300}
              height ={300}/>

               <Link href={`blogs/${blog.slug}`}><h1 className="border-[1px] border-[#000000] w-[150px] h-[40px] rounded-2xl p-[7px] pl-[24px] bg-black text-white hover:bg-slate-500">{blog.buttonText}</h1></Link>
             </div>
            )
          })
        }
      </div>
      
  );
}
