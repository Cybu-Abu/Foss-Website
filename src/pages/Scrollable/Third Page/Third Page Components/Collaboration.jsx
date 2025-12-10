import { Globe } from 'lucide-react'
import React from 'react'

const Collaboration = () => {
  return (
    <div>
      {/*Collaboration */}

          <div className="text-white w-[280px] h-[280px] bg-[#181818] flex items-center justify-center flex-col p-5 rounded-4xl">


            <div className="relative top-5">
              <Globe size={32} color="#EB4621" strokeWidth={3} />
            </div>
            <div className='p-4 text-center'>
              <h3 className='my-3 font-semibold'>Collaboration</h3>
              <p className='text-[10px]'>
                We thrive on teamwork, sharing ideas, and <br />
                growing together by contributing <br />
                to open-source projects.
              </p>
            </div>
          </div>
    </div>
  )
}

export default Collaboration
