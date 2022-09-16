import React from 'react'

function Navbar() {
  return (
      <div className=' items-center h-[60px] bg-zinc-100 drop-shadow-lg fixed w-full'>
      <div className=' w-full  justify-between flex'>
              <div>
              <h1 className='font-bold text-2xl ml-6 p-4'>Food Catering</h1>
        </div>
        
        <nav>
        <ul className='hidden md:flex'>
          <li>Contact</li>
          <li>About</li>
          <li>Service</li>
          <li>Home</li>
          <li>Blog</li>
          </ul>
        </nav>
          
          </div>
      
    </div>
  )
}

export default Navbar
