import React from "react";
import Navbar from "../Main Page/Navbar";
import SecondHero from "./Second Page/SecondHero";
import ThirdMain from "./Third Page/ThirdMain";
import SecondPage from "./Second Page/SecondPage";
import { Calendar, Clock, Github, Instagram, Linkedin, MapPin, Twitter } from "lucide-react";
import FourthMain from "./Fourth Page/FourthMain";
import FifthPageMain from "./Fifth page/FifthPageMain";
import FifthPageCard from "./Fifth page/FifthPageCard";
import FifthPageButton from "./Fifth page/FifthPageButton";
import SixthPageMain from "./Sixth Page/SixthPageMain";
import LastPageMain from "./Last Page/LastPageMain";
import { Link } from "react-router-dom";

const Scrollable = () => {
  return (
    <div>
      <Navbar />
      <div className="w-screen h-screen"
      style={{
                  background: 'linear-gradient(to bottom, #1e3a5f, #0f2847)', // EDIT: Card gradient
                }}
      >
        <SecondPage />
      </div>
      <div className="bg-black h-screen w-screen ">
        <ThirdMain />
      </div>

      <div className="bg-black w-screen h-fit ">
        <FourthMain />
      </div>

      <div className="flex flex-col  bg-black h-fit  ">
        <FifthPageMain />
      </div>

      <div className="bg-black w-screen h-screen">
        <SixthPageMain />
      </div>

      <div className="bg-black w-screen h-fit">
        <LastPageMain/>

        <div className="bg-[#153885] w-full">
          <div className="flex flex-row  justify-between px-30 py-15 my-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-sm font-medium">Foss Cell GECBH</h1>
              <p className="text-[10px] text-white font-light">At FOSS Cell GECBH, we empower <br />
                aspiring developers through <br />
                learning, collaboration, and  <br />
                open-source contributions. </p>
                <div className='text-white flex flex-row gap-2'>
                  <Twitter size={15}/>
                  <Linkedin size={15}/>
                  <Github size={15}/>
                  <Instagram size={15}/>
                </div>
            </div>
            <div className="flex flex-col gap-2 relative">
              <h1 className="text-white text-sm font-medium"> Quick Links</h1>
              <Link className="text-[10px] text-white font-light"> About</Link>
              <Link className="text-[10px] text-white font-light"> Projects</Link>
              <Link className="text-[10px] text-white font-light"> Events</Link>
              <Link className="text-[10px] text-white font-light"> Join</Link>
              <Link className="text-[10px] text-white font-light"> Contact</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-sm font-medium"> Resources</h1>
              <p className="text-[10px] text-white font-light">Getting Started</p>
              <p className="text-[10px] text-white font-light">Documentation</p>
              <p className="text-[10px] text-white font-light">Guidlines</p>
              <p className="text-[10px] text-white font-light">Code of Conduct</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-sm font-medium"> Contact Info</h1>
              <p className="text-[10px] text-white font-light">Government Engineering College, 
                Barton Hill, Barton Hill Colony, <br />
                Kunnukuzhy, Thiruvananthapuram, <br />
                Kerala 695035
              </p>

              <p className="text-[10px] text-white font-light">
                Phone: +91 00000 00000
              </p>

              <p className="text-[10px] text-white font-light">
                Email: fosscellgecbh@gmail.com
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Scrollable;
