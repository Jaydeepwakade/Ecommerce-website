import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar_page/Navbar";
import Login from "./Login";
import Modal from "react-modal"


function Register({isOpen,onClose}) {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isLogin,setisLogin] = useState(false)
  

  const onregisterclick = (e) => {
    e.preventDefault();
    const payload = {
      firstname,
      lastname,
      email,
      password,
    };
    console.log(payload);
  };

  const onLogin = ()=>{
    setisLogin(true)
    onClose()
    
  }
  const oncloseregister =()=>{
     setisLogin(false);
     
  }

  return (
    <>
      <Modal
       isOpen={isOpen}
       onRequestClose={onClose}
       className='flex items-center justify-center p-4'
       overlayClassName=" fixed inset-0 bg-black bg-opacity-50"
       ariaHideApp={false}

      >

     
      <div className="flex flex-col gap-5 h-[100vh] justify-center items-center bg-slate-400">
        <h1 className="text-[60px] text-black-200 font-serif">Register</h1>
        <form className="w-full max-w-md p-6 bg-slate-300 rounded-xl">
          <div className="flex flex-col gap-4 ">
            <div className="flex  gap-4">
              <div className=" flex flex-col  w-1/2 ">
                <label className="mb-1 text-gray-700" htmlFor="">
                  First Name
                </label>
                <input
                  onChange={(e) => setfirstname(e.target.value)}
                  className="p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="enter your firstname"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="mb-1 text-gray-700" htmlFor="">
                  Last Name
                </label>
                <input
                  onChange={(e) => setlastname(e.target.value)}
                  className="p-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2  focus:ring-blue-500"
                  type="text"
                  placeholder="enter your lastname"
                />
              </div>
            </div>
            <div className=" flex flex-col ">
              <label className="mb-1 text-gray-700" htmlFor="">
                Email
              </label>
              <input
                onChange={(e) => setemail(e.target.value)}
                className="p-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col ">
              <label className="mb-1 text-gray-700" htmlFor="">
                Password
              </label>
              <input
                onChange={(e) => setpassword(e.target.value)}
                className="p-1 rounded-md border border-gray-300 focus:outline-none  focus:ring-2 focus:ring-blue-500"
                type="password"
                placeholder="passowrd"
              />
            </div>
            <button
              onClick={onregisterclick}
              className="bg-red-400 text-[20px] text-gray-700 font-medium py-2 rounded-2xl"
            >
              Register
            </button>
            <p className="text-center">
              allready have a account
                <span onClick={onLogin} className="text-red-500">Login</span>
              
            </p>
          </div>
        </form>

      </div>
      </Modal>
    { isLogin && (<Login isOpen={isLogin} onClose={oncloseregister}/>)}
     
    </>
  );
}

export default Register;
