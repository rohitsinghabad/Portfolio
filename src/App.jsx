import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
  <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Work/>
    <Contact/>
    <Footer/>
  </div>
  )
}

export default App
 
