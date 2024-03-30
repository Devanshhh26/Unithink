import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Countries from './pages/Countries'
import FAQs from './pages/FAQs'
import Community from './pages/Community'
import Booking from './pages/Booking'

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/countries' element={<Countries/>}/>
        <Route path='/faqs' element={<FAQs/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/booking' element={<Booking/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App