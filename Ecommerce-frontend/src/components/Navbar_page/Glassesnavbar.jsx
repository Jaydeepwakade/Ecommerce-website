import React from "react";
import { NavLink } from "react-router-dom";

function Glassesnavbar() {
  return (
    <div className="flex list-none gap-10 p-4 font-bold text-[#695b8d]">
      <li>
        <NavLink>EYEGLASSES</NavLink>
      </li>
      <li>
        <NavLink>SCREEN GLASSES</NavLink>
      </li>
      <li>
        <NavLink>CONTACT LENSES</NavLink>
      </li>
      <li>
        <NavLink>SUNGLASSES</NavLink>
      </li>
      <li>
        <NavLink>HOME EYE-TEST</NavLink>
      </li>
      <li>
        <NavLink>STORE LOCATOR</NavLink>
      </li>
    
    </div>
  );
}

export default Glassesnavbar;
