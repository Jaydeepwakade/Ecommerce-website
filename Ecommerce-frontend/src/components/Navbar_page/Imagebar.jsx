import React from "react";
import Eyeglasses from "../../assets/Eyeglasses.webp"
import sunglasses from "../../assets/sunglasses.webp"
import Screenglass from "../../assets/screenglass.webp"
import contactlense from "../../assets/contactlense.webp"
import powersunglass from "../../assets/powersunglass.webp"
import progresive from "../../assets/progresive.webp"

function Imagebar() {
  return (
    <div className="flex gap-20 m-8">
      <div className="flex flex-col items-center gap-3 border border-none">
        <img
        className="h-40 w-60 "
          src={Eyeglasses}
          alt=""
        />
        <h1 className="text-gray-500 font-semibold">Eyeglasses</h1>
      </div>
      <div className="flex flex-col items-center gap-3">
        <img
         className="h-40 w-60"
          src={sunglasses}
          alt=""
        />
        <h1 className="text-gray-500 font-semibold">Sunglasses</h1>
      </div>
      <div className="flex flex-col items-center gap-3">
        <img
         className="h-40 w-60"
          src={Screenglass}
          alt=""
        />
        <h1 className="text-gray-500 font-semibold">Screen Glasses</h1>
      </div>
      <div className="flex flex-col items-center gap-3">
        <img
         className="h-40 w-60"
          src={contactlense}
          alt=""
        />
        <h1 className="text-gray-500 font-semibold">Contact Lenses</h1>
      </div>
      <div className="flex flex-col items-center gap-3">
        <img
         className="h-40 w-60"
          src={powersunglass}
          alt=""
        />
        <h1 className="text-gray-500 font-semibold">Power Sunglasses</h1>
      </div>
      <div className="flex flex-col items-center gap-3">
        <img
         className="h-40 w-60"
          src={progresive}
          alt=""
        />
        <h1 className="text-gray-500 font-semibold">Progressive Lenses</h1>
      </div>
    </div>
  );
}

export default Imagebar;
