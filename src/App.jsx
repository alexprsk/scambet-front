import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Registration from './components/Registration'
import Login from './components/Login'
import SideBar from './components/SideBar'
import Carousel from './components/Carousel'

function App() {


  return (
    <>
      <NavBar />
      <Registration />
      <Login />
      <div className="relative min-h-screen flex">
        <SideBar />
      <div className="flex-1 flex-col">
        <div className="carousel_card  m-8 h-56 flex flex-row rounded-xl"></div>
          <Carousel />
      </div>
      </div>
    </>
  )
}

export default App
