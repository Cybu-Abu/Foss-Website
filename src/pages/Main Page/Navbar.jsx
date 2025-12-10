import React from 'react'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-40 py-4">
        <h2 className='text-white font-bold text-2xl'>FOSS CELL</h2>
        <div className='text-white font-bold flex items-center justify-between gap-4'>
          <h4>Home</h4>
          <h4>About</h4>
          <h4>Events</h4>
          <h4>Project</h4>
          <h4>Team</h4>
          <h4>Join</h4>
        </div>
        <div className='text-white flex items-center justify-between gap-4'>
        <Twitter/>
        <Linkedin/>
        <Github/>
        <Instagram/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
