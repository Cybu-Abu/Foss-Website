import React from 'react'
import SixthPageHero from './SixthPageHero'
import CardCarousel from './CardCarousal'
import sampleData from '../../../Data/CradCarousal.json'

const SixthPageMain = () => {
  return (
    <div className='gap-4'>
      <SixthPageHero/>
      <CardCarousel 
        data={sampleData} 
        autoPlayInterval={3000}  // Auto-slide every 3 seconds
        autoPlay={true}          // Enable auto-play
      />

      <div className='w-full flex justify-center'>
        <button className='border-[#1351DC] rounded-lg border-2 w-fit active:scale-95 text-white text-[10px] py-2 px-10'>
                 View All

                </button>
      </div>
    </div>
  )
}

export default SixthPageMain
