import React from 'react'

const Card = ({object}) => {
  return (
    <div className='flex flex-col gap-6 px-11  py-10   border border-gray-400 rounded-lg hover:cursor-pointer hover:bg-green-200 transition'>
        <div className='flex items-center gap-4'>
            <img src={object.image}/>
            <p className='font-semibold text-2xl'>{object.title}</p>
        </div>

        <div className='font-light text-lg'>{object.desc}</div>

        < button className=' border border-violet-500 w-1/4 rounded-lg font-semibold text-sm py-2 text-violet-600'>{object.button}</button>
    </div>
  )
}

export default Card