import React, { useRef } from 'react'
import LastPageHero from './LastPageHero'
import LastPageContents from './LastPageContents'
import Footer from './Footer'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const LastPageMain = () => {

  const lastPageMainRef=useRef() 
  const lastPageHeroRef=useRef()
  const lastPageContentsRef=useRef()

  useGSAP(()=>{
    var t2 = gsap.timeline()

    t2.from(lastPageHeroRef.current.querySelector("h1"),{
      x:100,
      opacity:0,
      scrollTrigger:{
        trigger:lastPageHeroRef.current,
        scroller:"body",
        start:"top 50%",
        end:"bottom 80%",
        scrub:2
      }
    })
    t2.from(lastPageHeroRef.current.querySelector("p"),{
      x:-100,
      opacity:0,
      scrollTrigger:{
        trigger:lastPageHeroRef.current,
        scroller:"body",
        start:"top 50%",
        end:"bottom 80%",
        scrub:2
      }
    })
    t2.from(lastPageHeroRef.current,{
      x:-100,
      opacity:0,
      scrollTrigger:{
        trigger:lastPageHeroRef.current,
        scroller:"body",
        start:"top 50%",
        end:"bottom 80%",
        scrub:2
      }
    })
  })


  return (
    <div ref={lastPageMainRef}>
      <div ref={lastPageHeroRef}><LastPageHero/></div>
<div className='flex flex-col gap-8'>
        <div ref={lastPageContentsRef}><LastPageContents/></div>
      <Footer/>
</div>
    </div>
  )
}

export default LastPageMain
