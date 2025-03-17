import React from 'react'
import {motion} from 'framer-motion';

const Sutain = () => {
  return (
    <div className='container'>
        <div className='flex flex-row-reverse items-center gap-5'>
            <div
           
            
            className='flex-1'>
                <img src="air2.png" alt="" />
            </div>
            <div
            
            className='flex-1 flex flex-col gap-7'>
                <h1 className='text-8xl font-primary'>Sustainability</h1>
               <p>
                There are several reasons to consider buying a pouf for your home.
                Poufs are versatile pieces of furniture that can be used in a variety of ways.
               </p>
                <div>
                <button className='bg-gray-800 py-4 w- px-6 hover:text-black border hover:border-gray-800 hover:bg-white text-white rounded-md mt-8'>Explore More</button>

                </div>
               
            </div>
        </div>
        
    </div>
  )
}

export default Sutain


/**
 *  <div className=' gap-5'>
            <div>
            <h1 className='text-8xl font-bold font-primary '>Sustainability</h1>
            <p className='w-100 '>
                There are several reasons to consider buying a pouf for your home.
                Poufs are versatile pieces of furniture that can be used in a variety of ways.

            </p>
            </div>
            <div>
            <button className='bg-gray-800 py-4 px-6 hover:text-black border hover:border-gray-800 hover:bg-white text-white rounded-md '>Explore More</button>

            </div>
           
        </div>
        
        <div className=''>
        <img src="air2.jpg" className='w-[500px] ' alt="" />
        </div>
 * 
 * 
 * 
 */