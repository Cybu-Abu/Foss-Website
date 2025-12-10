import { Heart } from 'lucide-react'
import React from 'react'

const PassionForFoss = () => {
  return (
    <div>
      {/*Passion For Foss */}
          <div className="text-white w-[280px] h-[280px] bg-[#181818] flex items-center justify-center flex-col p-5 rounded-4xl">


            <div className="relative top-5">
              <Heart size={32} color="#E4ccff" strokeWidth={3} />
            </div>
            <div className='p-4 text-center'>
              <h3 className='my-3 font-semibold'>Passion for FOSS</h3>
              <p className='text-[10px]'>
                Dedicated to spreading <br />
                awareness and adoption of <br />
                Free and Open Source <br />
                Software 
              </p>
            </div>
          </div>
    </div>
  )
}

export default PassionForFoss
