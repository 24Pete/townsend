"use client";
import { useEffect, useState } from 'react';
import { initializeLenis, destroyLenis } from '../utils/lenis';
import { Mulish } from "next/font/google";
import "./globals.css";
import 'lenis/dist/lenis.css';
import Image from "next/image";
import ContactForm from '../components/ContactForm';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { XMarkIcon } from '@heroicons/react/24/solid';


const mulish = Mulish({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);
    if (!isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    initializeLenis();

    return () => {
      destroyLenis();
      document.body.style.overflow = ""; // Ensure scrolling is enabled on unmount
    };
  }, []);

  return (
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
    <html>
    <head>
        <title>Townsend Music - Leading D2C Ecommerce Music Platform</title>
        <meta name="description" content="Leading D2C Ecommerce Music Platform" />
        <meta property="og:title" content="Townsend Music" />
        <meta property="og:description" content="Leading D2C Ecommerce Music Platform" />
      
      </head>
      <body>
    <div className={mulish.className}>
      <div className="main-container py-4 px-4 z-10 mix-blend-difference fixed ">
        <Image src="/logo-small.svg" width={150} height={120} alt="Header Logo" />
      </div>
      <div className="button-toggle fixed right-0 z-10">
      <button
  className={`z-10 absolute top-6 right-6 flex items-center justify-center transition-all duration-300 ${
    isActive
      ? "bg-[#F47920] text-black w-[50px] h-[50px] "
      : "bg-white text-black w-[50px] h-[150px] "
  }`}
  onClick={handleClick}
>
  {isActive ? (
    <XMarkIcon className="w-6 h-6" />
  ) : (
    <span className="transform rotate-90 whitespace-nowrap">CONTACT US</span>
  )}
</button>


        <div className={`transition-all h-screen w-screen bg-[#000] left-0 fixed ${isActive ? "top-0" : "-top-[2000px]"}`}>


        <div className="grid grid-cols-6 gap-4 p-[40px] pt-[40px]">
          <div className="col-span-6 sm:col-span-3"> 
            <h4 className="font-extralight mb-[20px] pr-[50px] sm:pr-0 block uppercase">Get in touch to find out how we can support your campaigns. </h4>
          <ContactForm />
  </div>
          <div className="col-span-6 sm:col-span-3 sm:pl-[60px]">
             <h4 className="font-extralight mb-[20px]">FIND US ON </h4> 
          <ul>
            <li> <a href="" className="text-[18px] sm:text-[24px]font-extrabold">instagram</a></li>
            <li> <a href="" className="text-[18px] sm:text-[24px] font-extrabold">facebook</a></li>
            <li> <a href="" className="text-[18px] sm:text-[24px] font-extrabold">x</a></li>
          </ul>

          
            <h4 className="font-extralight mt-[10px] sm:mt-[90px] mb-[20px]">TOWNSEND HQ </h4> 
            <address className=" text-[18px] sm:text-[24px] font-extrabold not-italic whitespace-pre-line">
          {`4-5 Iridium Close
             Burnley
Lancashire
UK
BB12 7EJ`}
            </address>

          
          </div>
        </div>
    
        </div>
      </div>
      <div className={`bottom-container fixed bottom-0 py-4 px-4 ${isActive ? "z-10" : "z-0"}`}>
        <Image src="/logo-small.svg" width={550} height={120} alt="Footer Logo" className='inline-block' />
        <p className='inline bottom-5 absolute ml-5 w-full'> © 2025 All Rights Reserved </p>
      </div>
      <div className="body-content fixed">



        <div className="flex h-screen w-screen">
          <div className="m-auto w-[475px]">
            <h1 className="font-extrabold text-[18px]">
              <span className="title font-normal text-[15px] mr-2">About </span>
              Our cutting edge D2C platform, dynamic storefronts and seamless logistics fuel revenue growth, drive fan engagement and deliver chart topping success.            </h1>
            <p className="font-normal text-[18px] mt-[20px]">
            Big changes are coming. Stay tuned! 
            </p>
          </div>
        </div>
      </div>
      <div className="lenis-container max-w-[100dvw] ">{children}</div>
    </div>
    </body>
    </html>
     </ReCaptchaProvider>
  );
}
