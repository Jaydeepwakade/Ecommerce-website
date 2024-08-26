import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar_page/Navbar'
import Login from '../Login_signup_pages/Login'

function Home() {
  return (
    <div>
        <Navbar/>
        <Login/>
        <Outlet/>
       
    </div>
  )
}

export default Home