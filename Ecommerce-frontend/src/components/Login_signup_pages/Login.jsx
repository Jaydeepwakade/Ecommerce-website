import React, { useState, useContext } from "react";
import { Modalcontexts } from "../../contexts/modalcontext";
import cancel from "../../assets/cancel.svg";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, RegisterUser } from "../../redux/actions/action";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [mobileno, setmobileNo] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const { ismodalopen, isloginform, openModal, closemodal, toggleform } =
    useContext(Modalcontexts);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const onLoginClick = (e) => {
    e.preventDefault();
    const payload = { email, password };
    dispatch(LoginUser(payload, closemodal));
  };

  const onRegisterClick = (e) => {
    e.preventDefault();
    const payload = { firstname, lastname, mobile: mobileno, email, password };
    dispatch(RegisterUser(payload, toggleform));
    console.log(payload);
  };

  return (
    ismodalopen && (
      <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-opacity-50">
        <div className="flex flex-col gap-4 justify-center items-center h-auto w-[25%] rounded-lg shadow-lg  ">
          <form className="w-[100%]">
            {isloginform ? (
              <div className="flex flex-col gap-3 rounded-xl border bg-white  shadow-xl w-100 ">
                <div className="bg-[url(https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg)] bg-cover bg-center h-56 w-full  flex items-start justify-end p-6 ">
                  <button
                    onClick={closemodal}
                    className=" text-gray-800 hover:text-red-500 bg-white p-2 rounded-2xl "
                  >
                    <img className="h-4 " src={cancel} alt="" />
                  </button>
                </div>
                <h2 className="text-violet-800 font-serif justify-center pl-20 text-2xl">
                  Sign in
                </h2>
                <div className=" flex flex-col justify-center items-center">
                  <div className="flex flex-col  p-4">
                    <label htmlFor="username" className="text-gray-700">
                      Username
                    </label>
                    <input
                      id="username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="p-2 w-96   border border-gray-300 rounded-2xl h-14"
                      type="text"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label htmlFor="password" className="text-gray-700">
                      Password
                    </label>
                    <input
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="p-2 w-96   border border-gray-300 rounded-2xl h-14"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button
                    onClick={onLoginClick}
                    className="bg-gray-300 text-vo w-96 m-5 text-violet-900 text-xl font-medium py-2 rounded-2xl"
                  >
                    Sign in
                  </button>
                  <p className="m-4 text-start">
                    New member?{" "}
                    <span
                      onClick={toggleform}
                      className="text-violet-900 font-bold cursor-pointer "
                    >
                      Create an Account
                    </span>
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 w-full items-center bg-white p-6 rounded-xl shadow-xl border ">
                <div className="flex justify-around items-center gap-36 ">
                  <h2 className="text-start text-violet-900 text-3xl ">
                    Create a Account
                  </h2>
                  <button
                    onClick={closemodal}
                    className=" text-gray-800 hover:text-red-500 bg-white p-2 rounded-2xl "
                  >
                    <img className="h-4 " src={cancel} alt="" />
                  </button>
                </div>
                <div className=" flex flex-col gap-5">
                  <div className="flex gap-4">
                    <input
                      id="firstname"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      className="p-2 text-2xl border w-96 h-16 border-gray-300 rounded-md"
                      type="text"
                      placeholder=" first name"
                    />
                  </div>

                  <div className="flex flex-col ">
                    <input
                      id="lastname"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      className="p-2 text-2xl border w-96 h-16 border-gray-300 rounded-md"
                      type="text"
                      placeholder=" last name"
                    />
                  </div>

                  <div className="flex flex-col w-1/2">
                    <input
                      id="mobile"
                      value={mobileno}
                      onChange={(e) => setmobileNo(e.target.value)}
                      className="p-2 text-2xl border w-96 h-16 border-gray-300 rounded-md"
                      type="text"
                      placeholder="Mobile"
                    />
                  </div>

                  <div className="flex flex-col">
                    <input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="p-2 text-2xl border w-96 h-16 border-gray-300 rounded-md"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="p-2 text-2xl border w-96 h-16 border-gray-300 rounded-md"
                      type="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button
                    onClick={onRegisterClick}
                    className="bg-gray-300 text-violet-900 text-xl font-medium py-2 rounded-2xl"
                  >
                    Create an Account
                  </button>
                </div>
                <p className="text-center text-xl">
                  have an account?{" "}
                  <span
                    onClick={toggleform}
                    className="text-red-500 cursor-pointer"
                  >
                    Login
                  </span>
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    )
  );
}

export default Login;
