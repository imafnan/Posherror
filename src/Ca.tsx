import React from 'react'
import CardSwap, { Card } from '@/components/CardSwap'
import Image from 'next/image'
import amam from '../public/blog3.png'


const Ca = () => {
  return (
    <div className=' container'>
      <div style={{ height: '600px', position: 'relative' }}>
  <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={5000}
    pauseOnHover={false}
  >
    <Card>
      <h3 className='p-2'>Card 1</h3>
      <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis delectus, quia et error cumque molestias reiciendis at earum, autem totam inventore voluptates fuga eveniet deleniti? Perferendis veniam eum impedit nisi vero illo incidunt temporibus fuga laudantium, nesciunt quasi laboriosam voluptatibus, harum maiores ut dolorem dolore, accusamus cum esse qui explicabo iusto? Iure provident, deleniti vel inventore nisi autem. Labore neque asperiores beatae recusandae. Facilis placeat aliquid porro sed minima consequatur harum, nesciunt obcaecati temporibus cum nulla vitae nihil nisi accusantium repellendus eligendi tempora odio praesentium eveniet autem. Modi dignissimos qui, quod, quas consectetur delectus ea exercitationem unde, amet harum voluptatibus.</p>
    </Card>
    <Card>
      <Image alt='Sample Image' src={amam} width={450} height={400} className='rounded-md m-2'/>
    </Card>
    <Card>
      <h3>Card 3</h3>
      <p>Your content here</p>
    </Card>
  </CardSwap>
</div>
    </div>
  )
}

export default Ca
