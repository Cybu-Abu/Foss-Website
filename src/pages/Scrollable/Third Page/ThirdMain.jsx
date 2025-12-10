import React from 'react'
import ThirdHero from './ThirdHero'
import OpenDevelopment from './Third Page Components/OpenDevelopment'
import Community from './Third Page Components/Community'
import Collaboration from './Third Page Components/Collaboration'
import PassionForFoss from './Third Page Components/PassionForFoss'

const ThirdMain = () => {
  return (
    <div>
      <div>

        {/* Hero */}
        <div className="flex flex-col items-center justify-center">
          <ThirdHero/>
          <h1 className='text-white font-bold   text-5xl my-12'>Our Values</h1>

          <div className='flex flex-row gap-9'>
        {/* Components */}
        <OpenDevelopment/>
        <Community/>
        <Collaboration/>
        <PassionForFoss/>
        </div>
          
        </div>
      </div>
    </div>
  )
}

export default ThirdMain
