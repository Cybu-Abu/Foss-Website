import React from "react";
import Navbar from "../Main Page/Navbar";
import SecondHero from "./Second Page/SecondHero";
import ThirdMain from "./Third Page/ThirdMain";
import SecondPage from "./Second Page/SecondPage";
import { Calendar, Clock, MapPin } from "lucide-react";
import FourthMain from "./Fourth Page/FourthMain";
import FifthPageMain from "./Fifth page/FifthPageMain";

const Scrollable = () => {
  return (
    <div>
      <Navbar />
      <div className=" bg-[#101C41] w-screen h-screen">
        <SecondPage />
      </div>
      <div className="bg-black h-screen w-screen ">
        <ThirdMain />
      </div>

      <div className="bg-black w-screen h-fit ">
        <FourthMain/>
        
      </div>

      <div className=" bg-black w-screen h-fit flex justify-center  ">
        <FifthPageMain/>
      </div>


    </div>
  );
};

export default Scrollable;
