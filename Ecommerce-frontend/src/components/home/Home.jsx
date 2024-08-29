import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar_page/Navbar'
import Login from '../Login_signup_pages/Login'
import Glassesnavbar from '../Navbar_page/Glassesnavbar'
import Imagebar from '../Navbar_page/Imagebar'
import Desktopbanner from "../../assets/Desktopbanner.png"
import BannerSlider from '../imageslider/BannerSlider'

function Home() {
  return (
    <div>
        <Navbar/>
        <Glassesnavbar/>
        <Imagebar/>
        <div>
          <img src={Desktopbanner} alt="" />
        </div>
        <BannerSlider/>
        <Login/>
        <Outlet/>
       
    </div>
  )
}

export default Home