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
      src="/images/amazons.webp"
      width={300}
      height={500}
      alt="Picture of the author"
         className="  left-[30px] pt-[65px] mix-blend-difference"
    />
          <Image
      src="/images/kylie.webp"
      width={500}
      height={500}
      alt="Picture of the author"
            className="right-[30px] pt-[220px] mix-blend-difference"
    />

<button className="bg-orange-500 text-[16px] text-black right-[20%] absolute py-4 px-6 mt-[30px] uppercase">  End-to-End Global D2C Solution</button>
<button className="bg-orange-500 text-[16px] text-black left-[10%] absolute py-4 px-6 mt-[575px] uppercase">  Strategic Digital Marketing & Growth</button>

            </div>
    

<div className="grid__item">         <Image
      src="/images/antony-smizerek.webp"
      width={700}
      height={500}
      alt="Picture of the author"
      className=" pt-[100px] right-[30px] mix-blend-difference"
    />
    <Image
      src="/images/jorja-smith.webp"
      width={350}
      height={500}
      alt="Picture of the author"
      className=" pt-[200px] left-[50px] mix-blend-difference"
    />
     
</div>

<div className="grid__item">         <Image
      src="/images/barry-cant-swim.webp"
      width={600}
      height={500}
      alt="Picture of the author"
      className=" left-[100px] mix-blend-difference"
    />
       
       <Image
      src="/images/ting-tings.webp"
      width={400}
      height={500}
      alt="Picture of the author"
      className=" right-[100px] mix-blend-difference"
    />
       <button className="bg-orange-500 text-[16px] text-black left-[30px] absolute py-4 px-6 mt-[550px] uppercase">  Merchandise Production</button>

</div>

<div className="grid__item">     
          <Image
      src="/images/noel-gallagher.webp"
      width={400}
      height={500}
      alt="Picture of the author"
      className=" pt-[100px] right-[30px] mix-blend-difference"
    />
          <Image
      src="/images/james.webp"
      width={500}
      height={500}
      alt="Picture of the author"
      className=" pt-[0px] left-[30px] mix-blend-difference"
    />

     
</div>

<div className="grid__item">  
  
         <Image
      src="/images/blossoms.webp"
      width={700}
      height={500}
      alt="Picture of the author"
      className=" left-[30px] mix-blend-difference"
    />

<button className="bg-orange-500 text-[16px] text-black right-[150px] absolute py-4 px-6 mt-[450px] uppercase">  Ticketing & Fan Engagement
</button>

       


</div>

<div className="grid__item">         <Image
      src="/images/steven-wilson.webp"
      width={400}
      height={500}
      alt="Picture of the author"
      className=" right-[200px] mix-blend-difference"
    />
       <Image
      src="/images/courteeners.webp"
      width={600}
      height={500}
      alt="Picture of the author"
      className=" left-[30px] mix-blend-difference"
    />
       


</div>

<div className="grid__item">         <Image
      src="/images/chesney.webp"
      width={600}
      height={500}
      alt="Picture of the author"
      className=" pt-[100px] right-[30px] mix-blend-difference"
    />
    <Image
      src="/images/lottery-winners.webp"
      width={350}
      height={500}
      alt="Picture of the author"
      className=" pt-[200px] left-[50px] mix-blend-difference"
    />
            <button className="bg-orange-500 text-[16px] text-black left-[250px] absolute py-4 px-6 mt-[650px] uppercase">  Maximised Chart Impact & Sales</button>

</div>

<div className="grid__item">         <Image
      src="/images/darkness.webp"
      width={600}
      height={500}
      alt="Picture of the author"
      className=" left-[40px] pt-[65px] mix-blend-difference"
    />
       
       <Image
      src="/images/nemzz.webp"
      width={370}
      height={500}
      alt="Picture of the author"
      className=" right-[100px] mix-blend-difference pt-[300px]"
    />

</div>

<div className="grid__item">         <Image
      src="/images/rizzle-kicks.webp"
      width={500}
      height={500}
      alt="Picture of the author"
      className=" pt-[100px] right-[30px] mix-blend-difference"
    />
    <Image
      src="/images/horrors.webp"
      width={350}
      height={500}
      alt="Picture of the author"
      className=" pt-[200px] left-[50px] mix-blend-difference"
    />
                 <button className="bg-orange-500 text-[16px] text-black left-[250px] absolute py-4 px-6 mt-[650px] uppercase">  Excellent Customer Service & Support</button>

</div>

<div className="grid__item">  
  
         <Image
      src="/images/pete-doherty.webp"
      width={700}
      height={500}
      alt="Picture of the author"
      className=" left-[100px] pt-[150px] mix-blend-difference"
    />

<button className="bg-orange-500 text-[16px] text-black right-[150px] absolute py-4 px-6 mt-[450px] uppercase">  Data-Driven Campaign Strategy</button>

       


</div>

<div className="grid__item">         <Image
      src="/images/nina-nesbitt.webp"
      width={400}
      height={500}
      alt="Picture of the author"
      className=" left-[30px] mix-blend-difference"
    />
       
       <Image
      src="/images/john-grant.webp"
      width={450}
      height={500}
      alt="Picture of the author"
      className=" right-[100px] pt-[250px] mix-blend-difference"
    />


</div>


<div className="grid__item"> 
              
    
<Image
      src="/images/amazons.webp"
      width={300}
      height={500}
      alt="Picture of the author"
         className="  left-[30px] pt-[65px] mix-blend-difference"
    />
              <Image
      src="/images/kylie.webp"
      width={500}
      height={500}
      alt="Picture of the author"
            className="right-[30px] pt-[220px] mix-blend-difference"
    />


<button className="bg-orange-500 text-[16px] text-black right-[20%] absolute py-4 px-6 mt-[30px] uppercase">  End-to-End Global D2C Solution</button>
<button className="bg-orange-500 text-[16px] text-black left-[10%] absolute py-4 px-6 mt-[575px] uppercase">  Strategic Digital Marketing & Growth</button>           </div>
      





          </div>
       </main>

   

  


   
  );
}