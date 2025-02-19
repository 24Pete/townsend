"use client";
import Image from "next/image";
import Lenis from 'lenis';
import { useEffect } from "react";





export default function Home() {
     

  return (
  
     
       <main > 

            

            <div className="grid text-[50px]">
            <div className="grid__item"> 
              
              
            <Image
      src="/0arlo-parks.webp"
      width={400}
      height={500}
      alt="Picture of the author"
         className="  left-[30px]"
    />
          <Image
      src="/0oasis.webp"
      width={400}
      height={500}
      alt="Picture of the author"
            className="right-[60px] pt-[50px]"
    />




            </div>
    

<div className="grid__item">         <Image
      src="/0deap-valley.webp"
      width={700}
      height={500}
      alt="Picture of the author"
      className=" pt-[100px] right-[30px]"
    />
     
</div>

<div className="grid__item">         <Image
      src="/0fontaines.webp"
      width={600}
      height={500}
      alt="Picture of the author"
      className=" left-[100px]"
    />
       


</div>




<div className="grid__item"> 
              
              
              <Image
        src="/0arlo-parks.webp"
        width={400}
        height={500}
        alt="Picture of the author"
       className="  left-[30px]"
      />
            <Image
        src="/0oasis.webp"
        width={400}
        height={500}
        alt="Picture of the author"
            className="right-[60px] pt-[50px]"
      />

  
              </div>
      





          </div>
       </main>

   

  


   
  );
}