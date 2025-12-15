import React, { useRef } from "react";
import ThirdHero from "./ThirdHero";
import OpenDevelopment from "./Third Page Components/OpenDevelopment";
import Community from "./Third Page Components/Community";
import Collaboration from "./Third Page Components/Collaboration";
import PassionForFoss from "./Third Page Components/PassionForFoss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ThirdMain = () => {
  
  const thirdMainRef = useRef();
  const thirdMainRefHero = useRef();
  const thirdMainRefHero2=useRef();
  const thirdMainRefComponent=useRef();


  const thirdMainAnimation = ()=>{
    useGSAP(() => {
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: thirdMainRef.current,
        scroller: "body",
        start: "top 50%",
        end: "bottom 50%",
        scrub: 2,
      }

    });
    tl2.from(thirdMainRefHero.current.querySelector("h1"), {
      opacity: 0,
      x: -100,
      
    },"thirdHero1");
    tl2.from(thirdMainRefHero.current.querySelector("p"), {
      opacity: 0,
      x: 100,
      
    },"thirdHero1");
    tl2.from(thirdMainRefHero2.current, {
      opacity: 0,
      x:-100,
      
    },"thirdHero2");
    tl2.from(thirdMainRefComponent.current.children, {
      opacity: 0,
      y:100,
      stagger:.3
      
    },"thirdHero2");

  });
  }

  thirdMainAnimation()

  return (
    <div>
      <div
      ref={thirdMainRef}>
        {/* Hero */}
        <div
          
          className="flex flex-col items-center justify-center"
        >

          <div 
          ref={thirdMainRefHero}
          className="">
            <ThirdHero />
          </div>

          <h1 
          ref={thirdMainRefHero2}
          className="text-white font-bold   text-5xl my-12">
            Our Values
          </h1>

          <div 
          ref={thirdMainRefComponent}
          className="flex flex-row gap-9">

            {/* Components */}
            <OpenDevelopment />
            <Community />
            <Collaboration />
            <PassionForFoss />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdMain;
