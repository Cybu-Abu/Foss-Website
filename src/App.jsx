import { CodeXml, CodeXmlIcon, Github, Globe, Heart, Instagram, Linkedin, Twitter, Users } from 'lucide-react'
import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Navbar from './pages/Main Page/Navbar'
import MainPage from './pages/Main Page/MainPage'
import { Route, Routes } from 'react-router-dom'
import SecondPage from './pages/Scrollable/Second Page/SecondPage'
import Scrollable from './pages/Scrollable/Scrollable'

const App = () => {
  return (
    <div >
      <div className=' h-screen '
      style={{
                  background: 'linear-gradient(to bottom, #1e3a5f, #0f2847)', // EDIT: Card gradient
                }}>
        <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/scrollable' element={<Scrollable/>} />
      </Routes>
      </div>
      
      
      
      
      
    </div>
  )
}

export default App
