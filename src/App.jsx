import { useState } from 'react'

import './App.css'
import Navbar from "./components/Navbar.jsx"
import Logo from './components/Logo.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home.jsx'
import { SparklesCore } from './components/SparklesCore.jsx'
import Events from './components/Events.jsx'
import Team from './components/Team.jsx'

function App() {

  return (
    <div className="">
      <Navbar />
      <Logo />
     <SparklesCore particleDensity={250} particleColor="#FFFFFF" />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
      
  )
}

export default App
