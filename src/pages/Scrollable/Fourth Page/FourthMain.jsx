import { Calendar, Clock, MapPin } from 'lucide-react'
import React from 'react'
import FouthHero from './FourthHero'
import FourthCard from './FourthCard'
import eventData from "../../../Data/Event.json";
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
        
    </div>
  )
}

export default FourthMain
