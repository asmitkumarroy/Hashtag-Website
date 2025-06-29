import { useState } from 'react'

import './App.css'
import Navbar from "./components/Navbar.jsx"
import Logo from './components/Logo.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home.jsx'
import { SparklesCore } from './components/SparklesCore.jsx'
import Contact from './components/Contact'
import Banner from './components/Banner.jsx'
import Events from './components/Events.jsx'
import Team from './components/Team.jsx'
import Blogs from './components/Blogs';
import SinglePost from './components/SinglePost'; // Import the new component

function App() {

  return (
    <div className="">
      <Navbar />
      <Logo />
     <SparklesCore particleDensity={250} particleColor="#FFFFFF" />
       <Routes>
        {/* ... other routes */}
              <Route path="/blogs" element={<Blogs />} />
              {/* This is a dynamic route for single posts */}
              <Route path="/blogs/:slug" element={<SinglePost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Banner/>
    </div>
      
  )
}

export default App
