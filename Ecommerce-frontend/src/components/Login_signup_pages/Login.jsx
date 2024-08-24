import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-modal"
import Register from "./Register";

function Login({isOpen ,onClose}) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [isOpenregiter, setisopenregister]= useState(false)

  const onLoginclick = (e) => {
    e.preventDefault();
    const payload = {
      username,
      password,
    };
    console.log(payload);
  };

  const onClickregister = ()=> {
    setisopenregister(true)
    onClose()
  
  
  }
   const onCloseregister = ()=>{
      setisopenregister(false)
      
   }
  return (
  

    <Modal
     isOpen={isOpen}
     onRequestClose={onClose}
     className="flex items-center justify-center p-4"
     overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      ariaHideApp={false}
    
  >
     
      <div className="flex flex-col gap-4 justify-center items-center h-[100vh] bg-slate-400">
        <h1 className="text-[50px] font-serif">Login</h1>
        <form action="">
          <div className="flex flex-col gap-3 rounded-xl w-96 p-6 bg-slate-300 ">
            <div className="flex flex-col">
              <label htmlFor="">username</label>
              <input
                onChange={(e) => setusername(e.target.value)}
                className="p-1 rounded-md"
                type="text"
                placeholder="enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor=""> password</label>
              <input
                onChange={(e) => setpassword(e.target.value)}
                className="p-1 rounded-md"
                type="text"
                placeholder="passowrd"
              />
            </div>
            <button
              onClick={onLoginclick}
              className="bg-red-400 text-[20px] text-gray-700 font-medium  rounded-2xl"
            >
              Login
            </button>
            <p>
              Dont have a account{" "}
              
                <span onClick={onClickregister} className="text-red-500">register</span>
    
            </p>
          </div>
        </form>
      </div>
      {    isOpenregiter  &&  (<Register isOpen={isOpenregiter} onClose={onCloseregister}/>)}
     
      </Modal>
      
  
  );
}

export default Login;
