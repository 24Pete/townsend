"use client";

import Lenis from 'lenis';

let lenis;

export const initializeLenis = () => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => t * (2 - t),
    smooth: true,
    touchMultiplier: 0,
    infinite: true,
    syncTouch: true,  // Enable infinite scrolling
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

export const destroyLenis = () => {
  if (lenis) {
    lenis.destroy();
  }
};