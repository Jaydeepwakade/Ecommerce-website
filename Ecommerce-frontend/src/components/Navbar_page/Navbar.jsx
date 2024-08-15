import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-1 bg-slate-200">
      <div className="bg-red-400 p-2 rounded-lg ml-3  ">
        <h1 className="font-bold">ShopatZone</h1>
      </div>
      <div className="flex gap-5">
        <NavLink to={"/login"}>
          <button className="bg-blue-400 p-1 w-[80px]">Login</button>
        </NavLink>
        <NavLink to={"/register"}>
          <button className="bg-blue-400 p-1 w-[80px] mr-3">Register</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
