import React from 'react'
import quote from '../assets/quote.png'
import Audio from '../assets/Audio.png'
import Dancepic from '../assets/Dancepic.png'
const Testimonials = () => {
  return (
    <div className='max-w-6xl mx-auto px-16 py-16  '>
        <div className='flex flex-col  justify-center gap-8 bg-purple-50 px-10 py-8 '>
              
              <div className='flex items-center gap-2'>
                     <img src={quote} height={40} width={40}/>
                     <div className='font-semibold text-2xl'>Testimonials</div>
              </div>

              <p className='text-gray-600 font-light text-lg'>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
             
              <div className='lg:flex justify-between xs:flex-col'>
                <img src={Audio} width={600}/>
                <div className='flex  items-center gap-4'>
                    <img src={Dancepic} className='h-16 w-16'/>
                    <div >
                        <p className='font-semibold text-violet-600'>Shubha Nagarajan</p>
                        <p className='font-normal text-sky-500 text-sm'>Classical Dancer</p>
                    </div>
                </div>
              </div>



        </div>
       
    </div>
  )
}

export default Testimonials