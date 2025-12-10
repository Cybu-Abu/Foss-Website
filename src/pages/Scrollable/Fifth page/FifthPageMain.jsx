import React from 'react'
import FifthPageHero from './FifthPageHero'
import FifthPageCard from './FifthPageCard'
import { Github } from 'lucide-react'
import project from "../../../Data/Project.json";
import FifthPageButton from './FifthPageButton';

const FifthPageMain = () => {
  return (
    <div>

      <div className=" ">
        <div>
          <FifthPageHero/>
        </div>
        <div className='flex flex-row'>
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
