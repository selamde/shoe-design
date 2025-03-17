import React from 'react'
import { BsCart3 } from "react-icons/bs";
import {motion} from 'framer-motion';

const Hero = () => {
  return (
    <div className='flex overflow-hidden'>
        <motion.div
         initial={{ y: "-100vw" }}  // Start off-screen to the left
         animate={{ y: 0 }}         // Move to the normal position
         transition={{ duration: 1, ease: "easeOut" }}
        className='flex-1 mt-5 relative z-50'>
            <div>
                <div className='flex gap-2'>
                    <div >
                        <p className='text-red-500 text-4xl leading font-secondary '>Air </p>
                        <p className='text-8xl font-primary'>Low</p>
                    </div>
                    <div>
                    <p className='text-red-500 text-4xl font-secondary'>Force</p>
                    <p className='text-8xl font-primary'>Retro</p>
                    </div>
                </div>
                
                <p className='text-wrap w-md mt-2 '>
                    step into the future with the new Air Force 1 Low Retro, a classic
                    design with a modern twist. The design is inspired by the original  
                    Air Force 1, a shoe that revolutionized the sneaker industry when it
                    was first released in 1982. 
                </p>
            </div>
            <div className='flex relative z-[100]  justify-center '>
            
            <button className='absolute z-[100] bg-gray-600 border hover:border-gray-600 hover:bg-white hover:text-black p-3 flex-start rounded-md left-0 top-30 flex items-center gap-2 text-white'> <BsCart3  /> <span>Add To cart</span></button>
            <div className='w-full flex justify-center '>
            <img src="air1.png" alt="" className='top-30 -rotate-20  flex-end' />
            </div>
            
        </div>
        <div className=' text-[200px] '>
            <p className='absolute right-0 top-0 z-[-10] text-blue-100'>01</p>
        </div>
       
        </motion.div>
       

        <div className='flex-1 flex  realtive'>
            <motion.div
             initial={{ y: "-100vw" }}  // Start off-screen to the left
             animate={{ y: 0 }}         // Move to the normal position
             transition={{ duration: 1, ease: "easeOut" }}
            className='flex flex-1 flex-col -rotate-45 mt-[100px] '>            
                    <h2 className='font-bold font-primary text-4xl'>Sustainable stylish and simply irresistible</h2>
                <p className=''>There are serveral reasons to consider <br /> buying a pouf for you home</p>
            </motion.div>
            <motion.div 
             initial={{ y: "100vw" }}  // Start off-screen to the left
             animate={{ y: 0 }}         // Move to the normal position
             transition={{ duration: 2, ease: "easeOut" }}
            className='flex-1 bg-gray-100 w-[400px] p-5 rounded-2xl mt-5 absolute right-0 -z-[10] top-0 h-[500px] flex flex-col justify-center items-center'>
                <ul className='flex flex-col gap-7 uppercase'>
                    <li>Shoes</li>
                    <li>Bags</li>
                    <li>Accessoreis</li>
                    <li>Support</li>
                </ul>

            </motion.div>

        </div>
        
    </div>
  )
}

export default Hero