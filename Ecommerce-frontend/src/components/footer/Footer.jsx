import React from "react";

function Footer() {
  return (
    <div className="bg-blue-900 ">
      <div className="flex flex-col gap-4 p-10 text-white font-sans ">
        <h1 className="text-4xl ">Buy The Best Eyewear From Lenskart</h1>
        <p>
          Lenskart Is The Leading E-Commerce Portal For Eyewear In India. It Has
          Revolutionised The Eyewear Industry In The Country With Its
          Omni-Channel Approach. From An Ever-Growing Number Of Offline Stores
          Across Major Cities In The Country To Innovative Integration Of
          Technology While Purchasing Online, Lenskart Caters To Every Customer
          With Several Deals And Offers.
        </p>
        <p>
          {" "}
          A One-Stop Online Solution For Purchasing Eyewear And Its Accessories,
          Lenskart Delivers Them Right At Your Doorstep With Convenient Methods
          Of Payment. Sunglasses as well as Eyeglasses Are Available For Men And
          Women In A Diverse Array Of Styles And Trendy Colours. If You Want To
          Try Out Contact Lenses, Pick The Ones Of Your Choice From The
          Extensive Variety Of Coloured Contact Lenses From Our Online Store.
        </p>
      </div>

      <div className="flex  items-center text-white  mr-20   justify-between">
        <div className="flex  gap-20 p-10 text-white">
          <div className=" flex flex-col gap-2">
            <h1 className="font-bold font-sans text-2xl">Services</h1>
            <p>Store locator</p>
            <p>Buying Guide</p>
            <p>Frame Size</p>
          </div>

          <div className=" flex flex-col gap-2">
            <h1 className="font-bold font-sans text-2xl">About us</h1>
            <p>We are Hiring</p>
            <p>Refer and earn</p>
            <p>About us</p>
            <p>Lenskart Coupons</p>
          </div>

          <div className=" flex flex-col gap-2">
            <h1 className="font-bold font-sans text-2xl">Help</h1>
            <p>FAQ's</p>
          </div>
        </div>

        <div className="flex gap-3 items-center  flex-col  text-center">
          <div className="flex gap-10 ">
            <img
              src="https://static.lenskart.com/media/desktop/img/play-store.svg"
              alt=""
            />
            <img
              src="https://static.lenskart.com/media/desktop/img/app-store.svg"
              alt=""
            />
          </div>
          <div>
            <p>Download Lenskart App to buy</p>
            <p>Eyeglasses, Sunglasses and Contact Lenses</p>
          </div>
        </div>
      </div>
      <div className=" flex ml-10  mr-10 justify-between items-center text-white mt-2 p-2 border-t border-white">
        <div className="flex gap-20 m-5">
          <p>T & C</p>
          <p>Privacy</p>
          <p>Disclaimer</p>
        </div>
        <div>
          <p>Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
