import React from 'react'
import Heroes from '../assets/Heroes.png'
const Hero = () => {
  return (
    <div className='flex flex-col gap-10 max-w-6xl mx-auto bg-sky-50 pl-10 pr-10 pt-10 pb-7'>
      <div className='flex flex-col gap-8'>
      <p className='italic font-medium text-4xl'>Your <span className='text-violet-500'>Hobby</span>, Your <span className='text-sky-500'>Community...</span></p>
         <button className='border rounded-lg bg-violet-600 text-white  font-semibold lg:text-xl md:text-sm w-1/6'>Get Started</button>
     </div>
        
         <img src={Heroes} width={1100}/>
    </div>
  )
}

export default Hero