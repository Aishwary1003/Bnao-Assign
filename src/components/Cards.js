import React from 'react'
import data from '../data'

import Card from './Card'
const Cards = () => {
  return (
    <div className='max-w-6xl mx-auto grid  lg:grid-cols-2 md:grid-cols-1 gap-6 px-7 mt-20'>
    {data.map((object)=>{return <Card object={object}/>})}
    </div>
  
  )
}

export default Cards;