import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Header = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, delay: .9, ease: "power3.out" }
    );
  }, []);

  const h1Refs = useRef([]);

  useEffect(() => {
    // Animate each h1 element with a staggered delay
    gsap.fromTo(h1Refs.current, 
      
      {opacity:50,y: 700}, // Move up from 50px below
      {stagger: 0.1, delay: 1.2,duration: .5, y: 0, ease: "power4.inOut"} // Duration of the animation
    );
  }, []);

  return (
    <div className="p-4 w-auto h-full flex flex-col">
      <div ref={navRef} className="flex flex-row justify-between ">
        <Link to="/" className="text-lg hover:underline">
          Home
        </Link>
        <NavLink to="/" className="text-lg hover:underline">
          Products
        </NavLink>

        <a href="#" className="text-lg hover:underline">
          About
        </a>
      </div>

      <div className="text-[200px] flex flex-row items-center justify-center gap-3">
        {[".","S", "T", "O", "R", "E"].map((letter, index) => (
          <h1 key={index} ref={(el) => (h1Refs.current[index] = el)}>
            {letter}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Header;
