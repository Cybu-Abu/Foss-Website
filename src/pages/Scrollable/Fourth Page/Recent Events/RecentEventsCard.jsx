import { Calendar, Users } from 'lucide-react'
import React from 'react'

const RecentEventsCard = (props) => {
    const eventData = props.event

  return (
    <div>
       <div className=" flex flex-row justify-evenly items-center">
          <div className="mx-5 my-5">
            <div className="bg-[#1E1E1E] w-70 min-h-[372px] h-fit rounded-3xl overflow-hidden ">
              <div className="object-cover max-h-[40%] w-full relative overflow-hidden">
                <div className="absolute top-0 left-0 z-10 p-2">
                  <p className="bg-[#155DFC] px-3 py-1 rounded-full text-center text-white text-xs font-semibold">
                   {eventData.top}
                  </p>
                </div>

                <img
                  className="w-full h-full object-cover"
                  src={eventData.img}
                  alt="AI generated image"
                />
              </div>

              <div className="text-white px-3 flex flex-col gap-y-4">
                <div className="flex flex-col items-center content-center gap-y-7 ">
                  <h4 className="py-2 relative top-5">{eventData.Heading}</h4>
                </div>

                <div className="flex flex-col justify-start gap-y-5 py-3 mx-5 my-2">
                  <div className="flex flex-row gap-1 content-center items-center ">
                    <Calendar size={10} />
                    <p className="text-[10px]">{eventData.Date}</p>
                  </div>
                  <div className="flex flex-row gap-1 content-center items-center ">
                    <Users size={10} />
                    <p className="text-[10px]">{eventData.Attended}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RecentEventsCard
