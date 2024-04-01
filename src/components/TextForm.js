import React from 'react'
import Text from './Text'
import Form from './Form'
const TextForm = () => {
  return (
    <div className='bg-violet-50'>
           <div className='textform max-w-6xl mx-auto flex px-10 justify-between pt-16 '>
                 <Text/>
                 <Form/>
           </div>
    </div>
  )
}

export default TextForm