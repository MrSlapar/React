import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import PublicNavbar from './components/PublicNavbar'
import { BASE } from './utils'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from './pages/homepage'
import Login from './pages/login'
import Register from './pages/register'


function App() {
  return (
    <BrowserRouter>
    <PublicNavbar />
    <div className="main-container">
    <Routes>
      <Route path={BASE} element={<Homepage />} />
      <Route path={BASE + 'login'} element={<Login />} />
      <Route path={BASE + 'register'} element={<Register />} />
    </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App
