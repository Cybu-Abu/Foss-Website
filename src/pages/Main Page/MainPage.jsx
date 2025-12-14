import React, { useRef } from "react";
import MainButton from "./MainButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MainPage = () => {

{/*Animation */}
const tlRef = useRef(gsap.timeline())
const mainPageAnimation=()=>{
  const tl = tlRef.current;
  
  
  useGSAP(() => {
    tl.from("h1 span",{
      y:-100,
      opacity:0,
      delay:.5,
      duration:1,
      stagger:0.3

    },"but")

    tl.from("p",{
      x:-100,
      opacity:0,
      duration:.3

    },"<0.6")
  });
}


mainPageAnimation()


  return (
    <div>
      <div className=" w-screen absolute top-1/2 left-1/2 text-white  items-center text-center transform -translate-x-1/2 -translate-y-1/2 gap-5">
        <h1 
        className="w-full font-extrabold text-6xl my-9">
          <span>FREE SOFTWARE COMMUNITY</span> <br />
          <span>of GEC BARTON HILL</span>
        </h1>
        <p>
          FOSS Cell is a Technical Society That Promotes And Strengthens The
          Free And Open Source Software Ecosystem in GECBH. <br /> Join Us To
          Learn,Build And Share
        </p>
        <MainButton tlRef={tlRef} />
      </div>
    </div>
  );
};

export default MainPage;
