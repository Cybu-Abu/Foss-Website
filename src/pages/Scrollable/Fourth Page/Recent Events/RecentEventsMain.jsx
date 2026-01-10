import React, { useRef } from 'react'
import RecentEventHero from './RecentEventHero'
import RecentEventsCard from './RecentEventsCard'
import prevEventData from "../../../../Data/PreviousEvent.json";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const RecentEventsMain = ({timeline}) => {
  const recentEventCard= useRef()
  const containerRef=useRef()

  useGSAP(()=>{
    if(timeline){
      timeline.to(containerRef.current, {
        y: -100, // Adjust this value to bring it into view
      }, ">");
      timeline.to(recentEventCard.current.children,{
      xPercent:-300
    })
  }
  },[timeline])
  return (
    <div ref={containerRef}>


      <div 
      ref={recentEventCard}
      className="flex flex-row items-center justify-evenly w-full px-[15%] snap-x snap-mandatory overflow-x-auto gap-8 no-scrollbar">
        {prevEventData.map((event,index)=>(
        <RecentEventsCard 
        key={index}
        event={event} />
      ))}
      </div>
    </div>
  )
}

export default RecentEventsMain
