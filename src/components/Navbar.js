import React from 'react'
import logo from '../assets/logo.png'
import Search from '../assets/Search.png'
import Explore from '../assets/Explore.png'
import Hobbies from '../assets/Hobbies.png'
import tag from'../assets/tag.png'
import bell from '../assets/bell.png'
import cart from '../assets/cart.png'
const Navbar = () => {
  return (
    <nav>
                <div className='flex    justify-evenly py-2 '>
            {/* logo and field */}
               <div className='flex gap-8'>

                   <img src={logo} height={50} width={200} />
                 <div  className='flex items-center '>
                      <input type="text"
                       placeholder='Search here...' className='hidden md:block bg-gray-100 h-6 border border-gray-200 rounded-md  pl-2 focus:outline-'/>
                     <button>
                          <img src={Search} height={24} width={24}/>
                     </button>
                 </div>

                 </div>


                             

                             {/* 2nd Half div */}
           <div className='flex gap-4 '>
                       {/*  explore dropdown */}

                  <div className='flex items-center'>
                <img src={Explore} height={24} width={24}/>
                <select className='h-6 font-semibold hidden text-sm sm:block' >
                    <option >Explore</option>
                    <option>People - Community</option>
                    <option>Places-Venues</option>
                    <option>Programs-Events</option>
                    <option>Products-Store</option>
                    <option>Blogs</option>
                      
                </select>


               

                  </div>


                  {/*  hobbies dropdown */}

                <div className='flex items-center'>
                <img src={Hobbies} height={24} width={24}/>
                <select className='h-6  font-semibold text-sm hidden sm:block ' >
                    <option>Hobbies</option>
                    <option>Coding</option>
                    <option>Cricket</option>
                    <option>Chess</option>
                    <option>Gym</option>
                    <option>Travel</option>
                      
                </select>

                </div>



                {/* icons and button */}
              <div className='flex items-center gap-4'>
                <img src={tag} height={24} width={24}  className='hidden md:block'/>
                <img src={bell} height={24} width={24} className='hidden md:block'/>
                <img src={cart} height={24} width={24} className='hidden md:block'/>
                <button  className='hidden sm:block border-2 rounded-lg border-violet-400 font-semibold text-sm px-8 py-2 text-purple-500 hover:bg-purple-200'>Sign In</button>
              </div>
              
                
               
               
                
             
             





            </div>
       





        
        </div>

    </nav>
  )
}

export default Navbar