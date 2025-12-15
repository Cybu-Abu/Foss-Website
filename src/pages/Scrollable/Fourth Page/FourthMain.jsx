import { Calendar, Clock, MapPin } from 'lucide-react'
import React, { useRef } from 'react'
import FouthHero from './FourthHero'
import FourthCard from './FourthCard'
import eventData from "../../../Data/Event.json";
import RecentEventHero from './Recent Events/RecentEventHero';
import RecentEventsMain from './Recent Events/recentEventsMain';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const FourthMain = () => {
  
  const fourthHeroRef=useRef()
  const fourthMain=useRef()
  const fourthRefCard=useRef()
  const fourthRefRecentCard=useRef()
  const fourthRefRecentHero=useRef()
  const fourthRefButton=useRef()

  useGSAP(()=>{
    var tl2=gsap.timeline({
      scrollTrigger:{
        trigger:fourthRefCard.current,
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"bottom 50%",
        scrub:2
      }
    })
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
    tl2.from(fourthRefCard.current.querySelectorAll("button"),{
      scale:0,
      opacity:0,
    })
  })
  
  
  return (
    <div ref={fourthMain}>
      <div ref={fourthHeroRef}><FouthHero/></div>
      <div className="flex flex-col ">
        <div>
          <h4 className="text-white font-semibold mx-12">Upcoming Events</h4>
        </div>
        <div 
        ref={fourthRefCard}
        className="flex flex-row items-center justify-evenly">
          {eventData.map((event,index)=>(
        <FourthCard 
        key={index}
        event={event}/>
      ))}
        </div>
      </div>
      <div ref={fourthRefRecentHero}>
        <RecentEventHero/>
      </div>

      <div ref={fourthRefRecentCard}>
        <RecentEventsMain/>
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
