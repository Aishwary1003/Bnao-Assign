import React from 'react'
import Image from "../assets/Image.png"
const Text = () => {
  return (
    <div className='max-w-xl '>
        <h1 className='font-semibold italic text-3xl'>Explore your <span className='text-sky-500'>hobby</span> or <span className='text-violet-500'>passion</span></h1>
        <p className='font-light text-sm pt-8'>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>
        <p className='font-light text-sm pt-4 '>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
        <img src={Image} className='pt-16' />
   
    </div>
  )
}

export default Text