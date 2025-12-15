import React from "react";
import Python from "../../../components/Python";
import Linux from "../../../components/linux";
import Blender from "../../../components/Blender";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SecondComponents = () => {
    const pyRandomRot=gsap.utils.random(-8,4,2)
    const linRandomRot=gsap.utils.random(-8,2,2)
    const blenRandomRot=gsap.utils.random(-8,0,2)

    const blenRandomY=gsap.utils.random(-150,-160,2)
    const linRandomY=gsap.utils.random(-80,-90,2)
    const pyRandomY=gsap.utils.random(0,-10,2)
    
    const pyRandomX=gsap.utils.random(100,300,2)
    const linRandomX=gsap.utils.random(500,700,2)
    const blenRandomX=gsap.utils.random(1000,1200,2)


    const componentAnimation=()=>{
          useGSAP(()=>{
        gsap.to(".python",{
            rotate:pyRandomRot,
            x:pyRandomX,
            y:pyRandomY,
            delay:1,
            duration:1,
        })
        gsap.to(".linux",{
            rotate:linRandomRot,
            x:linRandomX,
            y:linRandomY,
            delay:1,
            duration:1,
        })
        gsap.to(".blender",{
            rotate:blenRandomRot,
            x:blenRandomX,
            y:blenRandomY,
            delay:1,
            duration:1,
        })

        gsap.from(".python",{
          opacity:0,
          delay:1,
          duration:.8
        })
        gsap.from(".linux",{
          opacity:0,
          delay:1,
          duration:.8
        })
        gsap.from(".blender",{
          opacity:0,
          delay:1,
          duration:.8
        })
    })
    }

    componentAnimation()
  return (
    <div>
      <div className="python">
        <Python />
      </div>
      <div className="linux">
        <Linux />
      </div>
      <div className="blender">
        <Blender />
      </div>
    </div>
  );
};

export default SecondComponents;
