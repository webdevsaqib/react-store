import React, { useEffect, useRef } from "react";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "./Preloader.css"; // Assume you style the blocks here

const Preloader = () => {
  const preloaderRef = useRef(null);
  const blocksRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // You can hide or remove the preloader once the animation is done
        gsap.to(preloaderRef.current, { autoAlpha: 0, duration: 1 });
      },
    });

    // Block reveal animation
    tl.to(blocksRef.current, 1, {
      y: "100%",
      stagger: 0.1, // Delay each block
      duration: 1,
      ease: "power4.inOut",
    });

    // You can add more animations here
  }, []);

  return (

    <div ref={preloaderRef} className="preloader-container">
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        ref={(el) => (blocksRef.current[i] = el)}
        className="preloader-block"
      ></div>
    ))}
  </div>
   
  );
};

export default Preloader;
