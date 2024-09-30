import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { json, useLoaderData, useNavigate } from "react-router-dom";
import { gsap } from "gsap";

function Products() {
  const navigate = useNavigate();
  const data = useLoaderData();
  const [items, setItems] = useState(data)
  const [selectedCategory, setSelectedCategory] = useState("")
  console.log(items)

  const filterItems = ()=> {
   
    if(selectedCategory==="")
    {
      setItems([...data])
      return
    }
    const updateItems = data.filter((currItem) =>{
      return currItem.category === selectedCategory
    });
   setItems([...updateItems])
  }

  const prodRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      prodRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, delay: 2, ease: "power3.out" }
    );
  }, []);

  
  useEffect(() => {
    filterItems()
  }, [selectedCategory , data])
  

  return data?.length > 0 ? (
    <div  ref={prodRef}>
      <div className=" p-1 flex flex-col gap-4">
        <div className="flex flex-row items-center justify-center mb-5 gap-3 text-xl ">
          <button className="py-1 px-6 shadow-md rounded-3xl cursor-pointer hover:bg-slate-100" type="button" onClick = {()=>setSelectedCategory("")}>All</button>
          <button className="py-1 px-6 shadow-md rounded-3xl cursor-pointer" type="button" onClick={() => setSelectedCategory("men's clothing")}>Men</button>
          <button className="py-1 px-6 shadow-md rounded-3xl cursor-pointer" type="button" onClick={() => setSelectedCategory("women's clothing")}>Women</button>
          <button className="py-1 px-6 shadow-md rounded-3xl cursor-pointer" type="button" onClick={() => setSelectedCategory("jewelery")}>Jewelery</button>
          <button className="py-1 px-6 shadow-md rounded-3xl cursor-pointer" type="button" onClick={() => setSelectedCategory("electronics")}>Electronics</button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 m-4 ">
        {items.map((x) => (
          <div
            onClick={() => navigate("/product", { state: { product: x } })}
            className="w-full bg-white shadow-xl rounded-xl overflow-hidden cursor-pointer"
          >
            <img
              className="h-[300px] w-auto object-contain mx-auto"
              src={x.image}
              alt="image description"
            />

            <div className="p-2 flex flex-col gap-1">
              <p className="text-blue-700">{x.title}</p>
              <p className="text-blue-700 font-bold">{x.price}$</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <h1>No Products</h1>
  );
}

export default Products;

export const getProductsapi = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return await response.json();
};
