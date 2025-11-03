"use client";

import { TimelineDemo } from '@/components/As';
import { WobbleCardDemo } from '@/components/Gri';
import { StickyScrollRevealDemo } from '@/components/St';
// import Anan from '@/Anan'
// import Pagess from '@/Posherror';
// import Posherror from '@/Posherror';
import React from 'react'
// import Tabs, { tabData } from '../../src/Tabs'
// import Featuredworks from '@/Caedss'
// import { ScrollVelocityContainer } from '@/components/ui/scroll-based-velocity'
// import { ScrollBasedVelocityImagesDemo } from '@/Anan'



const page = () => {
  
  return (
    <div className="">
      {/* <div className="max-w-6xl mx-auto mt-10">
      <Tabs tabs={tabData} />
    </div>
      <Featuredworks />
      <ScrollBasedVelocityImagesDemo/> */}
      {/* <Posherror/> */}
      {/* <Pagess/> */}
      <WobbleCardDemo/>
      <TimelineDemo/>
      <StickyScrollRevealDemo/>
    </div>
  )
}

export default page
