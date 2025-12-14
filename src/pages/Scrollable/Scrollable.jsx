import React from "react";
import SecondHero from "./Second Page/SecondHero";
import ThirdMain from "./Third Page/ThirdMain";
import SecondPage from "./Second Page/SecondPage";
import {
  Calendar,
  Clock,
  Github,
  Instagram,
  Linkedin,
  MapPin,
  Twitter,
} from "lucide-react";
import FourthMain from "./Fourth Page/FourthMain";
import FifthPageMain from "./Fifth page/FifthPageMain";
import FifthPageCard from "./Fifth page/FifthPageCard";
import FifthPageButton from "./Fifth page/FifthPageButton";
import SixthPageMain from "./Sixth Page/SixthPageMain";
import LastPageMain from "./Last Page/LastPageMain";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Scrollable = () => {
  return (
    <div className="">
      <Navbar/>
      <div
        className="w-screen h-screen"
        style={{
          background: "linear-gradient(to bottom, #1e3a5f, #0f2847)", // EDIT: Card gradient
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
        <LastPageMain />

        
      </div>
    </div>
  );
};

export default Scrollable;
