import React, { useRef } from 'react'
import FifthPageHero from './FifthPageHero'
import FifthPageCard from './FifthPageCard'
import { Github } from 'lucide-react'
import project from "../../../Data/Project.json";
import FifthPageButton from './FifthPageButton';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FifthPageMain = () => {
  const fifthPageHeroRef = useRef();
  const fifthPageMainRef = useRef();
  const fifthPageCardRef = useRef();

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const totalCards = project.length;
    const scrollDistance = (totalCards - 1) * 100;

    // --- MOBILE: Automatic Loop ---
    mm.add("(max-width: 768px)", () => {
      gsap.to(fifthPageCardRef.current.children, {
        xPercent: -scrollDistance,
        duration: totalCards * 3,
        ease: "none",
        repeat: -1,
        yoyo: true,
        repeatDelay: 1,
      });
    });

    // --- DESKTOP: Scroll Animations ---
    mm.add("(min-width: 769px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: fifthPageHeroRef.current,
          start: "top 70%",
          end: "bottom 20%",
          scrub: 2,
        },
      });

      tl.from(fifthPageHeroRef.current.querySelector("h1"), {
        opacity: 0,
        x: 100,
      })
      .from(fifthPageHeroRef.current.querySelector("h4"), {
        opacity: 0,
        x: -100,
      }, "<") // "<" starts at the same time as h1 animation
      .from(fifthPageCardRef.current.children, {
        opacity: 0,
        y: 100,
        stagger: 0.2,
      });
    });

  }, { scope: fifthPageMainRef }); // Scoping prevents GSAP from selecting elements outside this component

  return (
    <div ref={fifthPageMainRef}>
      <div>
        <div ref={fifthPageHeroRef}>
          <FifthPageHero />
        </div>
        <div
          ref={fifthPageCardRef}
          className="flex flex-row items-center justify-evenly w-full overflow-x-hidden no-scrollbar"
        >
          {project.map((event) => (
            // Added w-screen lg:w-1/3 to ensure even spacing
            <div key={event.id} className="w-screen lg:w-1/3 shrink-0 flex justify-center px-4">
              <FifthPageCard project={event} />
            </div>
          ))}
        </div>
        <FifthPageButton />
      </div>
    </div>
  );
};

export default FifthPageMain
