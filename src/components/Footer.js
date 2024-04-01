import React from 'react'
import { FaPinterest } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
const Footer = () => {
  return (
    <div className=' Footer flex  justify-evenly py-14 '>
            {/* Hobbycue */}
            <div className='flex flex-col  gap-4'>
                  <p className='font-bold text-sm'>Hobbycue</p>
                  <div className='flex flex-col gap-1'>
                    <p >About Us</p>
                    <p>Our Services</p>
                    <p>Work with Us</p>
                    <p>FAQ</p>
                    <p>Contact US</p>
                  </div>
            </div>


            {/* How Do I */}
            <div className='flex flex-col  gap-4'>
                  <p className='font-bold text-sm'>How Do I</p>
                  <div className='flex flex-col gap-1'>
                    <p>Sign Up</p>
                    <p>Add a Listing</p>
                    <p>Claim Listing</p>
                    <p>Post a Query</p>
                    <p>Add a Blog Post</p>
                    <p>Other Queries</p>
                  </div>
            </div>


            {/* Quick Links */}
            <div className='flex flex-col  gap-4'>
                  <p className='font-bold text-sm'>Quick Links</p>
                  <div className='flex flex-col gap-1'>
                    <p>Listings</p>
                    <p>Blog Posts</p>
                    <p>Shop/Store</p>
                    <p>Community</p>
                  </div>
            </div>



            {/* Social */}
            <div className='flex flex-col gap-4'>
                
                <p className='font-bold text-sm' >Social Media</p>
                <div className='flex gap-6'>
                    < FaFacebook/>
                    <AiFillTwitterCircle/>
                    <FaInstagramSquare/>
                    <FaPinterest/>
                    <FaGooglePlusG/>
                    <FaYoutube/>
                    <FaTelegram/>
                    <CgMail/>
                </div>

                
                






                     
                    <p className='font-bold text-sm mt-12'>Invite Friends</p>

                  <div className='flex '>
   
                 <input type="email"
                  placeholder='Email ID' className='hidden md:block bg-gray-100 h-6 border border-violet-600 rounded-md  pl-2 pr-8 focus:outline-'/>
            <div className=' bg-violet-600 text-white  font-semibold text-xs border px-1 py-1 rounded-md '>Invite</div></div>
               
            </div>




    </div>
  )
}

export default Footer