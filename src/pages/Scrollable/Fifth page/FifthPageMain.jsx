import React, { useRef } from 'react'
import FifthPageHero from './FifthPageHero'
import FifthPageCard from './FifthPageCard'
import { Github } from 'lucide-react'
import project from "../../../Data/Project.json";
import FifthPageButton from './FifthPageButton';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FifthPageMain = () => {

  const fifthPageHeroRef=useRef();
  const fifthPageMainRef=useRef();
  const fifthPageCardRef=useRef();

  useGSAP(()=>{
    var tl2 = gsap.timeline()

    tl2.from(fifthPageHeroRef.current.querySelector("h1"),{
    opacity:0,
    x:100,
    scrollTrigger:{
      trigger:fifthPageHeroRef.current,
      scroller:"body",
      scrub:2,
      start:"top 50%",
      end:"bottom 60%"
    }

    })

    tl2.from(fifthPageHeroRef.current.querySelector("h4"),{
      opacity:0,
      x:-100,
      scrollTrigger:{
        trigger:fifthPageHeroRef.current,
        scroller:"body",
        scrub:2,
        start:"top 50%",
        end:"bottom 60%"
      }
    })
    
    tl2.from(fifthPageCardRef.current.children,{
      opacity:0,
      y:100,
      stagger:.2,
      scrollTrigger:{
        trigger:fifthPageCardRef.current,
        scroller:"body",
        scrub:2,
        start:"top 80%",
        end:"bottom 90%"
      }
    })
  })
  


  return (
    <div ref={fifthPageMainRef}>

      <div className=" ">
        <div ref={fifthPageHeroRef}>
          <FifthPageHero/>
        </div>
        <div 
        ref={fifthPageCardRef}
        className='flex flex-row'>
          {project.map((event)=>(
            <FifthPageCard
            key={event.id}
            project={event}
            />
          ))}
        </div>
          <FifthPageButton/>
        
      </div>

    </div>
  )
}

export default FifthPageMain
