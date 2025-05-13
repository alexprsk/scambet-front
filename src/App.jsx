import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Registration from './components/Registration'
import Login from './components/Login'
import SideBar from './components/SideBar'

function App() {


  return (
    <>
      <NavBar />
      <Registration />
      <Login />
      <div className="relative min-h-screen flex">
        <SideBar />

      </div>
    </>
  )
}

export default App
