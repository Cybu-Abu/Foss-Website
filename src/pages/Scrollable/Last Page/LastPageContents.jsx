import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const LastPageContents = () => {

  var lastPageContentsRef=useRef()
  var lastPageDivRef1=useRef()
  var lastPageDivRef2=useRef()

  useGSAP(()=>{
    var t2 = gsap.timeline({
      scrollTrigger:{
        trigger:lastPageContentsRef.current,
        scroller:"body",
        scrub:2,
        start:"top 50%",
        end:"bottom 70%"
      }
    })

    t2.from(".div1",{
      x:100,
      opacity:0,
      stagger:0.3
    },)
    t2.from(".div2",{
      x:-100,
      opacity:0,
      stagger:0.3
    })

  })


  return (
    <div ref={lastPageContentsRef}>
      <div className="w-screen">
          <div className="flex flex-col items-center">
            <h3 className="text-white font-semibold text-lg">
              Steps To Follow:
            </h3>
          </div>
          <div className="my-5">
            <div className="flex flex-row gap-3 justify-center my-2">
              <div 
              className="bg-[#1E1E1E] w-fit h-fit rounded-2xl border-2 border-[#1B3163] div1">
                <h4 className="text-white px-10 py-4 text-xl font-semibold">
                  1. Fork a Project Repo
                </h4>
              </div>
              <div 
              className="bg-[#1E1E1E] w-fit h-fit rounded-2xl border-2 border-[#1B3163] div2">
                <h4 className="text-white px-10 py-4 text-xl font-semibold">
                  2. Understand Guidlines
                </h4>
              </div>
            </div>
            <div className="flex flex-row gap-3 justify-center my-2">
              <div 
              className="bg-[#1E1E1E] w-fit h-fit rounded-2xl border-2 border-[#1B3163] div1">
                <h4 className="text-white px-10 py-4 text-xl font-semibold">
                  3. Make Your Changes
                </h4>
              </div>
              <div 
              className="bg-[#1E1E1E] w-fit h-fit rounded-2xl border-2 border-[#1B3163] div2">
                <h4 className="text-white px-10 py-4 text-xl font-semibold">
                  4. Create A Pull Request
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <button className="text-white bg-[#2563E8] font-semibold text-[12px] rounded-lg px-10 py-2 active:scale-95 my-3 w-fit">Start</button>
          <h4 className="text-[#0CEBFF] underline underline-offset-3 text-sm">Contributor Guidelines</h4>
        </div>
    </div>
  )
}

export default LastPageContents
