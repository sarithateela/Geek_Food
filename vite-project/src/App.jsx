import './App.css'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MainBody from './MainBody'
import Card from './Card';

function App() {
  

  return (
    <>
      <Navbar className='Navb' />

      <MainBody />
      
      <div className="grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </>
  )
}

export default App
