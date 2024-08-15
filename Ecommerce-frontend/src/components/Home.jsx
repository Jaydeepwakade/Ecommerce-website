import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar_page/Navbar'

function Home() {
  return (
    <div>
        <Navbar/>
        
        <Outlet/>
    </div>
  )
}

export default Home