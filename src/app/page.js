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
      width={300}
      height={500}
      alt="Picture of the author"
         className="  left-[30px] pt-[65px] mix-blend-difference"
    />
          <Image
      src="/0oasis.webp"
      width={400}
      height={500}
      alt="Picture of the author"
            className="right-[30px] pt-[220px] mix-blend-difference"
    />

<button className="bg-orange-500 text-[16px] text-black right-[20%] absolute py-4 px-6 mt-[30px] ">  ONLINE RECORD SHOP</button>
<button className="bg-orange-500 text-[16px] text-black left-[10%] absolute py-4 px-6 mt-[575px]">  OVER 500 STORES</button>

            </div>
    

<div className="grid__item">         <Image
      src="/0deap-valley.webp"
      width={700}
      height={500}
      alt="Picture of the author"
      className=" pt-[100px] right-[30px] mix-blend-difference"
    />
    <Image
      src="/lottery-winners.webp"
      width={350}
      height={500}
      alt="Picture of the author"
      className=" pt-[200px] left-[50px] mix-blend-difference"
    />
     
</div>

<div className="grid__item">         <Image
      src="/0fontaines.webp"
      width={600}
      height={500}
      alt="Picture of the author"
      className=" left-[100px] mix-blend-difference"
    />
       
       <Image
      src="/serj-tankian.webp"
      width={300}
      height={500}
      alt="Picture of the author"
      className=" right-[100px] mix-blend-difference"
    />
       <button className="bg-orange-500 text-[16px] text-black right-[30px] absolute py-4 px-6 mt-[550px]">  35 YEARS EXPERIENCE</button>

</div>

<div className="grid__item">     
          <Image
      src="/circa-waves.webp"
      width={700}
      height={500}
      alt="Picture of the author"
      className=" pt-[100px] right-[30px] mix-blend-difference"
    />
          <Image
      src="/johnny-marr.webp"
      width={300}
      height={500}
      alt="Picture of the author"
      className=" pt-[0px] left-[30px] mix-blend-difference"
    />

     
</div>

<div className="grid__item">         <Image
      src="/james.webp"
      width={700}
      height={500}
      alt="Picture of the author"
      className=" left-[100px] mix-blend-difference"
    />

<button className="bg-orange-500 text-[16px] text-black right-[150px] absolute py-4 px-6 mt-[450px]">  OVER 75K PRE-ORDERS</button>

       


</div>

<div className="grid__item">         <Image
      src="/kylie.webp"
      width={400}
      height={500}
      alt="Picture of the author"
      className=" right-[200px] mix-blend-difference"
    />
       <Image
      src="/horrors.webp"
      width={400}
      height={500}
      alt="Picture of the author"
      className=" left-[30px] mix-blend-difference"
    />
       


</div>




<div className="grid__item"> 
              
    
<Image
      src="/0arlo-parks.webp"
      width={300}
      height={500}
      alt="Picture of the author"
         className="  left-[30px] pt-[65px] mix-blend-difference"
    />
          <Image
      src="/0oasis.webp"
      width={400}
      height={500}
      alt="Picture of the author"
            className="right-[30px] pt-[220px] mix-blend-difference"
    />

<button className="bg-orange-500 text-[16px] text-black right-[20%] absolute py-4 px-6 mt-[30px]">  ONLINE RECORD SHOP</button>
<button className="bg-orange-500 text-[16px] text-black left-[10%] absolute py-4 px-6 mt-[575px]">  OVER 500 STORES</button>           </div>
      





          </div>
       </main>

   

  


   
  );
}