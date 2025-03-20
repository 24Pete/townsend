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
      alt="Picture of the Amazons"
         className="  sm:left-[30px] width-[150px] sm:w-[300px] sm:pt-[65px] mix-blend-difference"
    />
              <Image
      src="/images/kylie.webp"
      width={500}
      height={500}
      alt="Picture of the Kylie"
            className="right-[30px]  w-[300px] sm:w-[500px] pt-[200px] sm:pt-[220px] mix-blend-difference"
    />

<button className="bg-orange-500 text-[16px] text-black right-[20%] absolute py-4 px-6 mt-[30px] uppercase">  End-to-End Global D2C Solution</button>
<button className="bg-orange-500 text-[16px] text-black left-[10%] absolute py-4 px-6 mt-[400px] sm:mt-[575px] uppercase">  Strategic Digital Marketing & Growth</button>

            </div>
    

<div className="grid__item">         <Image
      src="/images/antony-smizerek.webp"
      width={500}
      height={500}
      alt="Picture of the Antony Smizerek"
      className=" image-test pt-[100px] right-[30px] mix-blend-difference"
    
    />
    <Image
      src="/images/jorja-smith.webp"
      width={350}
      height={500}
      alt="Picture of the Jorja Smith"
      className=" pt-[500px] sm:pt-[200px] left-[50px] mix-blend-difference"
    />
     
</div>

<div className="grid__item">         <Image
      src="/images/barry-cant-swim.webp"
      width={450}
      height={500}
      alt="Picture of the Barry Cant Swim"
      className=" left-[100px] mix-blend-difference"
    />
       
       <Image
      src="/images/ting-tings.webp"
      width={400}
      height={500}
      alt="Picture of the Ting Tings"
      className=" pt-[200px] sm:pt-0 right-[100px] mix-blend-difference"
    />
       <button className="bg-orange-500 text-[16px] text-black left-[30px] absolute py-4 px-6 mt-[300px] sm:mt-[550px] uppercase">  Merchandise Production</button>

</div>

<div className="grid__item">     
          <Image
      src="/images/noel-gallagher.webp"
      width={400}
      height={500}
      alt="Picture of Noel Gallagher"
      className=" w-[200px] sm:w-[400px] pt-[400px] sm:pt-[100px] right-[30px] mix-blend-difference"
    />
          <Image
      src="/images/james.webp"
      width={500}
      height={500}
      alt="Picture of James"
      className=" w-[300px] sm:w-[500px] pt-[0px] left-[30px] mix-blend-difference"
    />

     
</div>

<div className="grid__item">  
  
         <Image
      src="/images/blossoms.webp"
      width={650}
      height={500}
      alt="Picture of the Blossoms"
      className=" sm:left-[30px] sm:pt-[60px] mix-blend-difference"
    />

<button className="bg-orange-500 text-[16px] text-black right-[150px] absolute py-4 px-6 mt-[450px] uppercase">  Ticketing & Fan Engagement
</button>

       


</div>

<div className="grid__item">         <Image
      src="/images/steven-wilson.webp"
      width={400}
      height={500}
      alt="Picture of Steven Wilson"
      className="   w-[250px] sm:w-[400px] right-[50px] mix-blend-difference"
    />
       <Image
      src="/images/courteeners.webp"
      width={600}
      height={500}
      alt="Picture of the Courteeners"
      className=" pt-[450px] sm:pt-0 left-[30px] mix-blend-difference"
    />
       


</div>

<div className="grid__item">         <Image
      src="/images/chesney.webp"
      width={600}
      height={500}
      alt="Picture of the Chesney"
      className=" w-[300px] sm:w-[600px]sm:pt-[100px] right-[30px] mix-blend-difference"
    />
    <Image
      src="/images/lottery-winners.webp"
      width={350}
      height={500}
      alt="Picture of the Lottery Winners"
      className=" pt-[350px] sm:pt-[200px] left-[50px] mix-blend-difference"
    />
            <button className="bg-orange-500 text-[16px] text-black left-[250px] absolute py-4 px-6  mt-[750px] sm:mt-[650px] uppercase">  Maximised Chart Impact & Sales</button>

</div>

<div className="grid__item">         <Image
      src="/images/darkness.webp"
      width={600}
      height={500}
      alt="Picture of the Darkness"
      className=" left-[40px] sm:pt-[65px] mix-blend-difference"
    />
       
       <Image
      src="/images/nemzz.webp"
      width={370}
      height={500}
      alt="Picture of Nemzz"
      className=" right-[100px] mix-blend-difference pt-[450px] sm:pt-[300px]"
    />

</div>

<div className="grid__item">         <Image
      src="/images/rizzle-kicks.webp"
      width={500}
      height={500}
      alt="Picture of the Rizzle Kicks"
      className=" w-[350px] sm:w-[500px] sm:pt-[100px] right-[30px] mix-blend-difference"
    />
    <Image
      src="/images/horrors.webp"
      width={350}
      height={500}
      alt="Picture of the Horrors"
      className=" pt-[500px] sm:pt-[200px] left-[50px] mix-blend-difference"
    />
                 <button className="bg-orange-500 text-[16px] text-black left-[250px] absolute py-4 px-6  mt-[800px] sm:mt-[650px] uppercase">  Excellent Customer Service & Support</button>

</div>

<div className="grid__item">  
  
         <Image
      src="/images/pete-doherty.webp"
      width={700}
      height={500}
      alt="Picture of the Pete Doherty"
      className=" sm:left-[100px] pt-[150px] mix-blend-difference"
    />

<button className="bg-orange-500 text-[16px] text-black right-[150px] absolute py-4 px-6 mt-[700px] sm:mt-[450px] uppercase">  Data-Driven Campaign Strategy</button>

       


</div>

<div className="grid__item">         <Image
      src="/images/nina-nesbitt.webp"
      width={400}
      height={500}
      alt="Picture of Nina Nesbitt"
      className=" left-[30px] mix-blend-difference"
    />
       
       <Image
      src="/images/john-grant.webp"
      width={450}
      height={500}
      alt="Picture of the John grant"
      className=" right-[100px] pt-[400px] sm:pt-[250px] mix-blend-difference"
    />


</div>


<div className="grid__item">         
<Image
      src="/images/amazons.webp"
      width={300}
      height={500}
      alt="Picture of the Amazons"
         className="  sm:left-[30px] width-[150px] sm:w-[300px] sm:pt-[65px] mix-blend-difference"
    />
              <Image
      src="/images/kylie.webp"
      width={500}
      height={500}
      alt="Picture of the Kylie"
            className="right-[30px]  w-[300px] sm:w-[500px] pt-[200px] sm:pt-[220px] mix-blend-difference"
    />


<button className="bg-orange-500 text-[16px] text-black right-[20%] absolute py-4 px-6 mt-[30px] uppercase">  End-to-End Global D2C Solution</button>
<button className="bg-orange-500 text-[16px] text-black left-[10%] absolute py-4 px-6 mt-[400px] sm:mt-[575px] uppercase">  Strategic Digital Marketing & Growth</button>
</div>    





          </div>
       </main>

   

  


   
  );
}