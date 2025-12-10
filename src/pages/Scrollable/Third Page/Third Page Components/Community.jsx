import { Users } from 'lucide-react'
import React from 'react'

const Community = () => {
  return (
    <div>
      {/*About Community Driven */}
          <div className="text-white w-[280px] h-[280px] bg-[#181818] flex items-center justify-center flex-col p-5 rounded-4xl">


            <div className="relative top-5">
              <Users size={30} color="#1EFE87" strokeWidth={3} />
            </div>
            <div className='p-4 text-center'>
              <h3 className='my-3 font-semibold'>Community Driven</h3>
              <p className='text-[10px]'>
                Our community is at the heart <br />
                of everything we do, fostering <br />
                knowledge sharing. <br />
              </p>
            </div>
          </div>
    </div>
  )
}

export default Community
