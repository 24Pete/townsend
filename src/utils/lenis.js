"use client";

import Lenis from 'lenis';

let lenis;

export const initializeLenis = () => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => t * (2 - t),
    smooth: true,
    infinite: true, // Enable infinite scrolling
    syncTouch: true,  
    gestureOrientation: 'vertical',
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Prevent iOS overscroll issues
  document.body.style.overscrollBehavior = 'none';

};

export const destroyLenis = () => {
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
};