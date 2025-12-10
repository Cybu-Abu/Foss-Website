import { Calendar, Clock, MapPin } from 'lucide-react'
import React from 'react'
import FouthHero from './FourthHero'
import FourthCard from './FourthCard'
import eventData from "../../../Data/Event.json";
import RecentEventHero from './Recent Events/RecentEventHero';
import RecentEventsMain from './Recent Events/recentEventsMain';
const FourthMain = () => {

  
  return (
    <div >
      <FouthHero/>
      <div className="flex flex-row">
        {eventData.map((event,index)=>(
        <FourthCard 
        key={index}
        event={event}/>
      ))}
      </div>

      <RecentEventsMain/>


      <div className=" flex w-full justify-center">
        <button className='text-white border-[#114BCC] border-2 py-2 px-15 rounded-lg text-[10px] my-20 active:scale-95'>View All Events</button>
      </div>
        
    </div>
  )
}

export default FourthMain
