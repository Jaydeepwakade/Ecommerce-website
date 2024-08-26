
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/Login_signup_pages/Login";


function App() {
 
  return (
 <>
 
 <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="login" element={<Login />} />
     
    </Routes>

   
    </>
  );
}

export default App;
