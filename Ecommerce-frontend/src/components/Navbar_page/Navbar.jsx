import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import wishlist from "../../assets/wishlist.svg";
import cart from "../../assets/cart.svg";
import { Modalcontexts } from "../../contexts/modalcontext";



function Navbar() {
    const { openModal } = useContext(Modalcontexts);


    return (
        <div className="flex items-center justify-between h-16 p-1 bg-slate-200">
            <div className="p-2 rounded-lg ml-3">
                <img
                    src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
                    alt="Main Logo"
                />
            </div>

            <div className="flex gap-10 items-center w-[55%]">
                <img
                    className="h-12"
                    src="https://static1.lenskart.com/media/desktop/img/republic/eye/new-toll-number.png"
                    alt="Eye Toll Number"
                />
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="border border-violet-600 h-9 rounded-md w-[90%] p-2"
                />
            </div>

            <div className="flex gap-5 mr-5">
                <button className="text-sm text-gray-700 hover:text-violet-600">
                    Track Order
                </button>

                <button
                    onClick={() => openModal(true)}
                    className="text-sm text-gray-700 hover:text-violet-600"
                >
                    Sign In & Sign Up
                </button>

                <button className="flex gap-2 items-center text-sm text-gray-700 hover:text-violet-600">
                    <img className="h-7" src={wishlist} alt="Wishlist" />
                    Wishlist
                </button>

                <NavLink to="/cart">
                    <button className="flex gap-2 items-center text-sm text-gray-700 hover:text-violet-600">
                        <img className="h-7" src={cart} alt="Cart" />
                        Cart
                    </button>
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
