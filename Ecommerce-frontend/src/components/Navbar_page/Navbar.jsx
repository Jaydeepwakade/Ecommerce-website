import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import wishlist from "../../assets/wishlist.svg";
import cart from "../../assets/cart.svg";
import { Modalcontexts } from "../../contexts/modalcontext";

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const token = localStorage.getItem('authToken');
    const { openModal } = useContext(Modalcontexts);

    const Logoutuser =()=>{
        localStorage.removeItem("authToken")
    }

    return (
        <div className="flex items-center justify-between h-16 p-1">
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
                    className="border border-[#695b8d] h-9 rounded-md w-[90%] p-2"
                />
            </div>

            <div className="flex gap-10 mr-5">
                <button className="text-sm text-gray-700 hover:text-violet-600">
                    Track Order
                </button>

                {
                    !token ? (
                        <button
                            onClick={() => openModal(true)}
                            className="text-sm text-gray-700 hover:text-violet-600"
                        >
                            Sign In & Sign Up
                        </button>
                    ) : (
                        <div
                            className="relative"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <button className="text-sm text-gray-700 hover:text-violet-600">
                                Specsy
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute left-1/2 mt-1 transform -translate-x-1/2 w-40 bg-white border border-gray-300 rounded shadow-lg">
                                    <ul>
                                        <li className="p-2 text-1xl hover:bg-gray-100 hover:cursor-pointer">
                                           My Orders
                                        </li>
                                        <li className="p-2 hover:bg-gray-100">
                                            My Prescription
                                        </li>
                                        <li className="p-2 hover:bg-gray-100">
                                            My Store Credit
                                        </li>
                                        <li className="p-2 hover:bg-gray-100">
                                           Account informtion
                                        </li>
                                        <li className="p-2 hover:bg-gray-100">
                                        <p onClick={Logoutuser}>Log out</p>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    )
                }

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
