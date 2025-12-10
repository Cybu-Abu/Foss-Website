import { CodeXml } from 'lucide-react'
import React from 'react'

const OpenDevelopment = () => {
  return (
    <div>
      <div className="text-white w-[280px] h-[280px] bg-[#181818] flex items-center justify-center flex-col p-5 rounded-4xl">
            <div className="relative top-5">
              <CodeXml size={30} color="#0EC3d4" strokeWidth={3} />
            </div>
            <div className='p-4 text-center'>
              <h3 className='my-3 font-semibold'>Open Development</h3>
              <p className='text-[10px]'>
                We believe in transparent, <br /> 
              collaborative development <br />
              that benefits everyone <br />
              </p>
            </div>
          </div>
    </div>
  )
}

export default OpenDevelopment
