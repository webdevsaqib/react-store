import React, { useEffect, useRef } from "react";
import { Link, useLocation } from 'react-router-dom'
import { gsap } from "gsap";



function ProductExpand() {
  const {state}=useLocation()
  const product=state.product
  const imgRef = useRef(null)
  const summaryRef = useRef(null)

  useEffect(() =>{
    gsap.fromTo(imgRef.current,
      {opacity: 0, x: -10},
      {opacity: 1, x:0, delay: 0.1, ease: "power4.inOut"}
  );
  }, []);

  useEffect(() =>{
    gsap.fromTo(summaryRef.current,
      {opacity: 0, y: -10},
      {opacity: 1, y: 0,delay: 0.25, ease: "power4.inOut"}
  );
  }, []);

  return (
    <div className="grid grid-cols-2 gap-1 m-4 ">
    
      <div className="w-full bg-white shadow-xl rounded-xl overflow-hidden cursor-pointer">


       
          <img ref={imgRef} className="h-[450px] w-auto object-contain mx-auto" src={product.image} alt="image description" />
               
      </div>

      <div ref={summaryRef} className="p-1 flex flex-col gap-4 ml-12  font-semibold text-gray-500">
        <div className='flex flex-row items-center gap-3 '>
        <Link className=' text-[12px] hover:underline' to='/'>Home</Link>
        <p className='text-[12px]'>/</p>
        <p className=' text-[12px]'>{product.category[0].toUpperCase() + product.category.substring(1)}</p>
        </div>

          <p className='text-4xl'>
            {product.title}
            </p>
            <p className='text-2xl text-black'>${product.price}</p>
          <p className='text-black text-2xl'>Description:
          <p className='text-gray-500 text-lg'>{product.description}</p>
           

          </p>
          
        </div>
    </div>
  )
}

export default ProductExpand