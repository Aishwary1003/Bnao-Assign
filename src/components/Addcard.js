import React from 'react'
import Add from "../assets/Add.png"
const Addcard = () => {
  return (
    <div className='max-w-6xl mx-auto px-16 py-16 bg-sky-50 mt-20'>
        <div className='flex flex-col gap-8 bg-white px-10 py-8 hover:bg-green-200  transition'>
            <div className='flex items-center gap-2'>
                     <img src={Add} height={40} width={40}/>
                     <div className='font-semibold text-2xl'>Add your own</div>
            </div>

            <p className='font-light text-lg'>Are you a teacher or  expert?   Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should <br/> be on hobbycue?  Go ahead and Add your Own page</p>
             <button className=' border border-violet-500 w-fit rounded-lg font-semibold text-sm py-2 px-7 text-violet-600'>Add new</button>
        </div>
    </div>
  )
}

export default Addcard