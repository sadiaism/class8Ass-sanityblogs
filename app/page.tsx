import {client} from "../sanity/lib/client"
import { urlFor } from "@/sanity/lib/image";

interface Iblog{
  name:string,
  image:any,
  buttonText:string
}

export default async function Home() {
  const res:Iblog[] = await client.fetch(`*[_type == "blog"]`)
 console.log(res);

  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[12px]">
        {
          res.map((data) =>{
           
            return(
             <div className="flex flex-col justify-center items-center gap-[24px]">
              <h1 className="text-[24px] font-bold text-blue-800">{data.name}</h1>

              <img className="rounded-full" src ={urlFor(data.image).url()}
              alt ="Image"
              width ={300}
              height ={300}/>

              <h2 className="border-[1px] border-[#000000] w-[150px] h-[40px] rounded-2xl p-[7px] pl-[24px] bg-black text-white hover:bg-slate-500">{data.buttonText}</h2>
             </div>
            )
          })
        }
      </div>
  );
}
