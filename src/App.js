import React from 'react'
import Navbar from './components/Navbar.js'
import { Routes,Route } from 'react-router-dom'
import Contact from './pages/Contact.js'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Login from './pages/login.js'
import Products from './pages/Products.js'
import Specification from './pages/Specification.js'
import Orders from './pages/Orders.js'
import Profile from './pages/Profile.js'
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/orders' element={<Orders/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/products/:id' element={<Specification/>}/>
    </Routes>
    </>
  )
}

export default App