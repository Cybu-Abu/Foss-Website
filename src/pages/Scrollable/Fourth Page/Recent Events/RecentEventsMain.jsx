import React from 'react'
import RecentEventHero from './RecentEventHero'
import RecentEventsCard from './RecentEventsCard'
import prevEventData from "../../../../Data/PreviousEvent.json";

const RecentEventsMain = () => {
  return (
    <div>
      <RecentEventHero/>

      <div className="flex flex-row items-center justify-evenly">
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
