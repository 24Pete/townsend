"use client";
import { useEffect, useState } from 'react';
import { initializeLenis, destroyLenis } from '../utils/lenis';
import { Mulish } from "next/font/google";
import "./globals.css";
import 'lenis/dist/lenis.css';
import Image from "next/image";
import ContactForm from "../components/ContactForm";

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
    <html>
      <body>
    <div className={mulish.className}>
      <div className="main-container py-4 px-4 z-0 fixed ">
        <Image src="/logo-small.svg" width={150} height={120} alt="Header Logo" />
      </div>
      <div className="button-toggle fixed right-0 z-10">
        <button className="z-10 relative rotate-90 top-14 bg-white text-black py-4 px-6 -mr-[25px] mt-[20px]" onClick={handleClick}>CONTACT US</button>
        <div className={`transition-all h-screen w-screen bg-[#000] left-0 fixed ${isActive ? "top-0" : "-top-[900px]"}`}>
        <div className="grid grid-cols-6 gap-4 p-6">
          <div className="col-span-3"> <h4 className="font-extralight">SEND US A MESSAGE </h4>
          <ContactForm /></div>
          <div className="col-span-3"> <h4 className="font-extralight">FIND US ON </h4> 
          <ul>
            <li> <a href="" className="text-[24px] font-extrabold">instagram</a></li>
            <li> <a href="" className="text-[24px] font-extrabold">facebook</a></li>
            <li> <a href="" className="text-[24px] font-extrabold">x</a></li>
          </ul>

          <div className="col-span-3"> 
            <h4 className="font-extralight mt-[50px]">TOWNSEND HQ </h4> 
            <address className="text-[24px] font-extrabold not-italic whitespace-pre-line">
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
      </div>
      <div className={`bottom-container fixed bottom-0 py-4 px-4 ${isActive ? "z-10" : "z-0"}`}>
        <Image src="/logo-small.svg" width={550} height={120} alt="Footer Logo" className='inline-block' />
        <p className='inline bottom-5 absolute ml-5 w-full'> © 2025 All Rights Reserved </p>
      </div>
      <div className="body-content fixed">
        <div className="flex h-screen w-screen">
          <div className="m-auto w-[500px]">
            <h1 className="font-extrabold text-[24px]">
              <span className="title font-normal text-[15px] mr-2">About </span>
              A UK based direct-to-fan eCommerce leader with over 35 years of experience in the music industry. We connect artists and fans through cutting edge solutions.
            </h1>
            <p className="font-normal text-[24px] mt-[50px]">
              Big changes are coming - to the industry and our website. Stay tuned!
            </p>
          </div>
        </div>
      </div>
      <div className="lenis-container">{children}</div>
    </div>
    </body>
    </html>
  );
}
