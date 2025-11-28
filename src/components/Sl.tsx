import React from 'react'
import CircularGallery from '@/components/CircularGallery';

const Sl = () => {
  return (
    <div>
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>
    </div>
  )
}

export default Sl
