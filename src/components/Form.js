import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
const Form = () => {

    const[form,setForm]=useState(true);

  
  return (
    <div>
      <div className='flex gap-3'>
        <button onClick={()=>{setForm(!form)}} className={`${form === true
            ?
              "text-violet-500 border-b-2 border-violet-500"
            :" text-gray-500"} font-semibold text-xl`}>Sign In</button>


        <button  onClick={()=>{setForm(!form)}} className={`${form === false 
            ?
              "text-violet-500 border-b-2 border-violet-500"
            :" text-gray-500"}    font-semibold text-xl `}>Join In</button>
      </div>

      <button className='flex w-full gap-10 items-center border-2 rounded-lg py-2 pl-8 pr-28 font-semibold border-violet-400 mt-4 mb-2 hover:bg-purple-200'>
      <FcGoogle />
      <p >Continue with Google</p>
      </button>


      <button className='flex w-full gap-10 items-center border-2 rounded-lg py-2 pl-8 pr-24 font-semibold border-violet-400 hover:bg-purple-200'>
      <FaFacebook />
      <p>Continue with Facebook</p>
      </button>



      <div className='flex items-center justify-center gap-2 my-4'>
          <div className='h-[2px] w-28 bg-slate-300'></div>
          <p className='font-semibold '>Or connect with</p>
          <div className='h-[2px] w-28 bg-slate-300'></div>
      </div>
       
      <div className='flex flex-col gap-2'>
      <input type="email"  placeholder="Email" className='w-full border rounded-lg pl-3 py-1'/>
       <input type="password" placeholder='Password' className='w-full border rounded-lg pl-3 py-1'/>
      </div>

      { form ? (<div className='mt-4 flex flex-col gap-y-4'>
        <div className='flex justify-between'>
        <div>
        <input type="checkbox" id="remember"/>
        <label htmlFor='remember'>Remember Me</label>
        </div>

        <div className='flex items-center'>
            <IoMdLock />
            <p>Forgot Password</p>
        </div>
       

      </div>

      <button className='border-2 border-black py-2 w-full rounded-lg font-semibold hover:bg-gray-700 hover:border-white hover:text-white'>Continue</button>

      </div>
     ):(<div className='flex flex-col gap-4 mt-2'>
             <div className='flex justify-between items-center '>
                <div className='flex gap-1 '>
                    <div className='h-1 w-12 border bg-white'></div>
                    <div  className='h-1 w-12 border bg-white'></div>
                    <div  className='h-1 w-12  border bg-white'></div>
                </div>

                 <p className='font-semibold text-xs text-gray-400'>Password strength</p>   
             </div>

             <p className='font-normal text-xs text-gray-400'>By continuing, you agree to our <span className='text-black'>Terms of Service</span> and <span className='text-black'>Privacy Policy</span>.</p>
            <button className='bg-violet-500  py-2 w-full rounded-lg font-semibold text-white' >Agree and Continue</button>
     </div>) }
      


       
    </div>
  )
}

export default Form