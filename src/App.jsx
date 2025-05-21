import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/Aboutme'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App