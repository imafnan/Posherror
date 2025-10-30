// components/Featuredworks.jsx
"use client";

import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
// import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// Update these paths to your actual images
import w1 from "../public/cc.png";
import w2 from "../public/cc.png";
import w3 from "../public/cc.png";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";


const projects = [
  {
    title: "Support the startup in 360 approach",
    paragraph: "Get your money moving internationally. Save up to 5x when you send with Wise. Get your money moving internationally.",
    image: w1,
    problemsHeading: "Problems we solve for them",
    problemsText: "Get your money moving internationally. Save up to 5x when you send with Wise.",
    skillsHeading: "Skills needed to complete this project",
    skillsText: "Get your money moving internationally. Save up to 5x when you send with Wise.",
    industriesHeading: "What are the industries they served!",
    industriesText: "Get your money moving internationally. Save up to 5x when you send with Wise.",
  },
  {
    title: "Support the startup in 360 approach",
    paragraph: "Get your money moving internationally. Save up to 5x when you send with Wise. Get your money moving internationally.",
    image: w2,
    problemsHeading: "Problems we solve for them",
    problemsText: "Get your money moving internationally. Save up to 5x when you send with Wise.",
    skillsHeading: "Skills needed to complete this project",
    skillsText: "Get your money moving internationally. Save up to 5x when you send with Wise.",
    industriesHeading: "What are the industries they served!",
    industriesText: "Get your money moving internationally. Save up to 5x when you send with Wise.",
  },
  {
    title: "Support the startup in 360 approach",
    paragraph: "Get your money moving internationally. Save up to 5x when you send with Wise. Get your money moving internationally.",
    image: w3,
    problemsHeading: "Problems we solve for them",
    problemsText: "Get your money moving internationally. Save up to 5x when you send with Wise.",
    skillsHeading: "Skills needed to complete this project",
    skillsText: "Get your money moving internationally. Save up to 5x when you send with Wise.",
    industriesHeading: "What are the industries they served!",
    industriesText: "Get your money moving internationally. Save up to 5x when you send with Wise.",
  },
];

const Featuredworks = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative z-10 w-full ">
      {/* Title */}
       <h2 className="font-noto font-bold text-[35px] sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#434343] leading-snug md:leading-[48px] lg:leading-[58px] mb-[10px] ">
        OUR SERVICES
      </h2>
      <p className="text-center font-noto text-[14px] font-normal text-[#434343] max-md:px-2">
        Get your money moving internationally. Save up to 5x when you send with Wise.
      </p>

      <div className="flex flex-col items-center">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.08;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              project={project}
              progress={scrollYProgress}
              range={[i / (projects.length + 1), 1]} 
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
};

interface CardProps {
  i: number;
  project: {
    paragraph: string;
    image: StaticImageData;
    problemsHeading: string;
    problemsText: string;
    skillsHeading: string;
    skillsText: string;
    industriesHeading: string;
    industriesText: string;
  };
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({
  i,
  project,
  progress,
  range,
  targetScale,
}) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  return (
    <div ref={cardRef} className="h-[100vh] container flex items-center justify-center sticky top-0 w-full px-4 sm:px-6 md:px-8 " >
        
      <motion.div
        style={{ scale, top: `calc(${i * 25}px)` }}
        className="w-full py-[52px]    rounded-[10px] bg-[#ffffff] relative origin-top shadow-xl "
      >
        

        <div className="flex flex-col lg:flex-row gap-7 lg:gap-[80px]  ">
          {/* Image Section */}
          <div className="w-[70%] h-[700px] relative rounded-t-[8px] overflow-hidden shadow-lg">
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <Image
                src={project.image}
                alt="Project Showcase"
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>
          </div>

          {/* Text Section */}
          <div className=" w-[30%] text-[#353535] text-sm leading-relaxed ">
              <div className="bg-[#DDD9FD] w-fit px-[24px] py-[10px] rounded-full font-semibold text-[12px] text-black ">
                Professional Design & Development Agency
              </div>
              <h1 className="font-semibold text-black text-[34px] mt-[12px] ">
                Content Manager
              </h1>
               <div className="flex flex-wrap gap-2 sm:gap-3 mt-[12px]">
                      {[
                        "Brand Identity",
                        "UI/UX Design",
                        "Design Systems",
                        "Design Audit",
                      ].map((btn, idx) => (
                        <button
                          key={idx}
                          className="px-[10px] py-[5px] text-[12px] sm:text-[13px] text-[#585858] border border-[#585858] rounded-full hover:bg-gray-100 transition"
                        >
                          {btn}
                        </button>
                      ))}
                </div>
                <h3 className="mt-[295px] text-[26px] font-normal leading-[33px] text-black  w-[88%] ">
                  Handle dynamic data with
                  the built-in content manager.
                  Link data dynamically to any
                  part of your website.
                </h3>
                <h4 className="mt-[26px] ">
                  <Link href="#" className="text-black font-semibold text-[16px] flex items-center gap-[9px] ">
                    View Details <GoArrowRight size={20}  />
                  </Link>
                </h4>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Featuredworks;