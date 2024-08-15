
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login_signup_pages/Login";
import Register from "./components/Login_signup_pages/Register";

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
