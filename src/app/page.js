"use client";


import Image from "next/image";
import Lenis from 'lenis';
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      infinite: true,
      syncTouch: true
    });
    
    function onRaf(time) {
      lenis.raf(time);
      requestAnimationFrame(onRaf);
    }
    
    requestAnimationFrame(onRaf);
    
// repeat first six items by cloning them and appending them to the .grid
const repeatItems = (parentEl, total = 0) => {
  const items = [...parentEl.children];
  for (let i = 0; i <= total - 1; ++i) {
    var cln = items[i].cloneNode(true);
    parentEl.appendChild(cln);
  }
};
repeatItems(document.querySelector(".grid"), 20);



    
  }, []);


  return (
  
     
       <main> 
          <div className="grid">
            <div className="grid text-[50px]">
            <div className="grid__item"> 1</div>
            <div className="grid__item">2</div>
            <div className="grid__item"> 3</div>
            <div className="grid__item"> 4</div>
            <div className="grid__item"> 5</div>
            <div className="grid__item">6</div>
            <div className="grid__item"> 7</div>
            <div className="grid__item"> 8</div>
            <div className="grid__item"> 9</div>
            <div className="grid__item">10</div>
            <div className="grid__item"> 11</div>
            <div className="grid__item"> 12</div>
            <div className="grid__item"> 13</div>
            <div className="grid__item">14</div>
            <div className="grid__item"> 15</div>
            <div className="grid__item"> 16</div>
            <div className="grid__item"> 17</div>
            <div className="grid__item">18</div>
            <div className="grid__item"> 19</div>
            <div className="grid__item"> 20</div>

          </div>
       </main>

   

  


   
  );
}
