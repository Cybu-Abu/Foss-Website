import { Calendar, Clock, MapPin } from 'lucide-react'
import React, { useRef, useState } from 'react'
import FouthHero from './FourthHero'
import FourthCard from './FourthCard'
import eventData from "../../../Data/Event.json";
import RecentEventHero from './Recent Events/RecentEventHero';
import RecentEventsMain from './Recent Events/recentEventsMain';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { div } from 'motion/react-client';
gsap.registerPlugin(ScrollTrigger);


const FourthMain = () => {
  
  const fourthHeroRef=useRef()
  const fourthMain=useRef()
  const fourthRefCard=useRef()
  const fourthRefRecentCard=useRef()
  const fourthRefRecentHero=useRef()
  const fourthRefButton=useRef()
  const [mobiletl, setMobiletl] = useState(null)

  useGSAP(()=>{

    var mm=gsap.matchMedia()
    var tl2=gsap.timeline({
      scrollTrigger:{
        trigger:fourthRefCard.current,
        scroller:"body",
        start:"top 50%",
        end:"bottom 50%",
        scrub:2
      }
    })

    var tl3 = gsap.timeline({
      scrollTrigger:{
          trigger:fourthMain.current,
          scroller:"body",
          pin:true,
          scrub:2,
          markers:true,
          start:"top 0%",
          end: "+=3000", // THIS IS KEY: It gives 3000px of scroll room
          anticipatePin: 1
        }
    })

    mm.add("(max-width: 768px)",()=>{
      tl3.to(fourthRefCard.current.children,{
        xPercent:-300,        
      })
      setMobiletl(tl3)
    })
    mm.add("(min-width: 769px)",()=>{
          tl2.from(fourthHeroRef.current.querySelector("h1"),{
      x:-100,
      opacity:0,
    })
    tl2.from(fourthMain.current.querySelector("h4"),{
      x:-100,
      opacity:0,
      stagger:0.3
    })
    tl2.from(fourthRefCard.current.children,{
      x:-100,
      opacity:0,
      stagger:0.3
    })
    tl2.from(fourthRefRecentHero.current,{
      x:100,
      opacity:0,
      stagger:0.3
    })
    tl2.from(fourthRefRecentCard.current.children,{
      x:100,
      opacity:0,
      stagger:0.3
    })
    })
  })
  
  
  return (
    <div ref={fourthMain} className='h-fit'>
      <div ref={fourthHeroRef}><FouthHero/></div>
      <div className="lg:flex lg:flex-col flex flex-col overflow-x-scroll lg:overflow-hidden justify-start items-center ">
        <div>
          <h4 className="text-white font-semibold mx-12">Upcoming Events</h4>
        </div>
        <div 
        ref={fourthRefCard}
        className="flex flex-row items-center justify-evenly lg:overflow-hidden lg:snap-none lg:px-0 overflow-x-auto snap-x snap-mandatory no-scrollbar w-full px-[15%] ">
          {eventData.map((event,index)=>(
            <div key={index} className='snap-center shrink-0'>
              <FourthCard event={event}/>
            </div>
      ))}
        </div>
      </div>
      <div ref={fourthRefRecentHero}>
        <RecentEventHero/>
      </div>

      <div ref={fourthRefRecentCard}>
        <RecentEventsMain timeline={mobiletl}/>
      </div>


      <div className=" flex w-full justify-center">
        <button 
        ref={fourthRefButton}
        className='text-white border-[#114BCC] border-2 py-2 px-15 rounded-lg text-[10px] my-20 active:scale-95'>View All Events</button>
      </div>
        
    </div>
  )
}

export default FourthMain
