import React from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Reviews from './components/Reviews'
import UiDesign from './components/UiDesign'
import './sass/style.scss'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Reviews />
      <Projects />
      <UiDesign />
      <Contact />
      <Footer />
    </>
  )
}

export default App

