"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import s1 from "../public/Effect.png";
import s2 from "../public/Error.svg";
import s3 from "../public/Opps.svg";
import s4 from "../public/Robot.svg";
import s5 from "../public/Gears.svg";
import s6 from "../public/wbg.svg";

const Posherror = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // Detect if device is mobile or tablet
  useEffect(() => {
    const checkDevice = () => {
      if (window.innerWidth < 1024) {
        setIsMobileOrTablet(true);
      } else {
        setIsMobileOrTablet(false);
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // ✅ Typed event
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobileOrTablet) return; // disable animation on mobile/tablet

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 20 - 10;
    const y = ((e.clientY - top) / height) * 20 - 10;
    setOffset({ x, y });
  };

  // ✅ Typed event
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobileOrTablet) return;
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <Image src={s1} alt="Background" fill className="object-cover" priority />

      {/* Parallax container */}
      <div
        className="absolute inset-0"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Error SVG */}
        <Image
          src={s2}
          alt="Error"
          className="absolute transition-transform duration-500 ease-out
          top-[25%] left-[5%] w-[120px]
          sm:top-[17%] sm:left-[34%] sm:w-[160px]
          md:top-[18%] md:left-[32%] md:w-[200px]
          lg:w-[250px]"
          style={{
            transform: isMobileOrTablet
              ? "none"
              : `translate(${offset.x * 0.3}px, ${offset.y * 0.3}px)`,
          }}
        />

        {/* Opps SVG */}
        <Image
          src={s3}
          alt="Opps"
          className="absolute transition-transform duration-500 ease-out
          top-[25%] left-[73%] w-[70px]
          sm:top-[22%] sm:left-[58%] sm:w-[120px]
          md:top-[23%] md:left-[60%] md:w-[140px]
          lg:w-[160px]"
          style={{
            transform: isMobileOrTablet
              ? "none"
              : `translate(${offset.x * 0.3}px, ${offset.y * 0.3}px)`,
          }}
        />

        {/* Robot */}
        <Image
          src={s4}
          alt="Robot"
          className="absolute z-[10] transition-transform duration-500 ease-out
          top-[28%] left-[57%] md:left-[53px] md:top-[28px] -translate-x-1/2 
          w-[160px]
          sm:w-[200px]
          md:w-[250px]
          lg:w-[300px]"
          style={{
            transform: isMobileOrTablet
              ? "none"
              : `translate(${offset.x}px, ${offset.y}px)`,
          }}
        />

        {/* Gears */}
        <Image
          src={s5}
          alt="Gears"
          className="absolute z-[10] transition-transform duration-500 ease-out
          top-[57%] left-[16%] w-[100px]
          sm:top-[62%] sm:left-[34%] sm:w-[130px]
          md:top-[66%] md:left-[36%] md:w-[150px]
          lg:w-[170px]"
          style={{
            transform: isMobileOrTablet
              ? "none"
              : `translate(${offset.x * 0.3}px, ${offset.y * 0.3}px)`,
          }}
        />
      </div>

      {/* Static background shape */}
      <Image
        src={s6}
        alt="Background Shape"
        className="absolute transition-transform duration-500 ease-out top-[42%]
        md:top-[45%] left-1/2 -translate-x-1/2
        w-[320px] h-[250px]
        sm:w-[380px] sm:h-[300px]
        md:w-[470px] md:h-[350px]
        lg:w-[600px] lg:h-[450px]"
      />
      <button className="absolute top-[76%] md:top-[90%] left-[34%] md:left-[48%] text-[14px] font-medium bg-gradient-to-r to-[#F1622A] from-[#EC1577]  text-white rounded px-[16px] py-[10px] ">
        Back To Home 
      </button>
    </div>
  );
};

export default Posherror;
