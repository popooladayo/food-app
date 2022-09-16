import React from 'react'
import cof from '../images/chef.jpg'

function Hero() {
  return (
    <div className='py-20 bg-zinc-100  md:py-8 '>
      
      <div className='flex  items-center'>
        
        <div className='max-w-[1200px] mx-auto ml-20'>
          <h1 className='font-bold text-4xl'>Fresh Flavours</h1>
          <h1 className='font-bold text-4xl'>Creative Catering</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam explicabo officia debitis. Quaerat asperiores adipisci quae velit nihil perferendis eaque?</p>
          <button className='bg-orange-600 py-2 px-4 mt-8 text-white'>View Our Menus</button>
        </div>
        
      <div>
        <img className='w-screen  h-full  object-cover  ' src={cof} alt="cof" />
      </div>

        
      </div>
    </div>
  )
}

export default Hero
