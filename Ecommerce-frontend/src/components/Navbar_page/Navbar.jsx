import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import   wishlist from "../../assets/wishlist.svg"
import cart from  "../../assets/cart.svg"
import Login from "../Login_signup_pages/Login";

function Navbar() {
  const [isOpen, setisOpen]= useState(false)

  const onOpen = ()=> setisOpen(true)
  return (
    <div className="flex items-center justify-between h-16 p-1 bg-slate-200">
      <div className= " p-2 rounded-lg ml-3  ">
        <img src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt="" />
      </div>

      <div className="flex gap-10 items-center w-[55%] ">
        <img className="h-12" src="https://static1.lenskart.com/media/desktop/img/republic/eye/new-toll-number.png" alt="" />
         <input type="text" placeholder="What are looking  for ?" className=" border border-violet-600 h-9 rounded-md w-[90%] p-2" />
      </div>
      <div className="flex gap-5 mr-5">
          <button className="">Track order</button>
        
          <button onClick={onOpen}>signin&signup</button>
        

        <button className="flex gap-2"><img  className =" h-7"src={wishlist} alt="" />Wishlist</button>
         <NavLink to={"/cart"}> <button className="flex gap-2 items-center"><img className =" h-7" src={cart} alt="" /> Cart</button></NavLink>
      </div>

      <Login isOpen={isOpen}/>
    </div>
  );
}

export default Navbar;
