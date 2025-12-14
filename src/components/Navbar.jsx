import React, { useRef } from 'react'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {
  const tl= gsap.timeline()
  const logoRef=useRef()
  const navRef=useRef()
  const navAnimation=()=>{
      useGSAP(()=>{
    tl.from("h2",{
      y:-100,
      opacity:0,
      duration:.5,
      ease:"power3.out"
    })
    tl.from("h4",{
      y:-100,
      opacity:0,
      duration:.5,
      stagger:.3
    })

    tl.from(logoRef.current.querySelectorAll("svg"),{
      y:-100,
      opacity:0,
      duration:.5,
      stagger:.3
    },"<1")
  },{scope:navRef})
  }
  navAnimation()

  return (
    <div 
      ref={navRef}
    className=''>
      <div className="flex items-center justify-between px-40 py-4 ">
        <h2 className='text-white font-bold text-2xl'>FOSS CELL</h2>
        <div className='text-white font-bold flex items-center justify-between gap-4'>
          <h4>Home</h4>
          <h4>About</h4>
          <h4>Events</h4>
          <h4>Project</h4>
          <h4>Team</h4>
          <h4>Join</h4>
        </div>
        <div 
        ref={logoRef}
        className='text-white flex items-center justify-between gap-4'>
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
