import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Preloader from './Components/Preloader/Preloader'

function Layout() {
  return (
    <>
    <Preloader/>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout