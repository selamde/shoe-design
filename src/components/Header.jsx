import React from 'react'
import { RiShoppingBasketLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import {motion} from 'framer-motion';

const navigation=[
    {id:1 ,name:'Home', href:'#'},
    {id:2,name:'products', href:'#'},
    {id:3,name:'aboutus', href:'#'},
    {id:4,name:'Store', href:'#'},
    {id:5,name:'Blog', href:'#'},


];

const Header = () => {
  return (
    <div className='container'>
        <nav className='flex justify-between items-center py-4'>
            {/* logo */}
            <motion.div  initial={{ x: "-100vw" }}  // Start off-screen to the left
            animate={{ x: 0 }}         // Move to the normal position
            transition={{ duration: 1, ease: "easeOut" }} className='text-2xl'><span className='font-bold'>ET</span>-SHOES</motion.div>
            <motion.div 
            initial={{ y: "-100vw" }}  // Start off-screen to the left
            animate={{ y: 0 }}         // Move to the normal position
            transition={{ duration: 2, ease: "easeOut" }}
            >
                <ul className='flex items-center gap-3 uppercase'>
                    {
                        navigation.map((links)=>(
                            <li key={links.id}>
                                {links.name}
                            </li>
                        ))
                    }
                </ul>

            </motion.div>
            <motion.div
             initial={{ y: "-100vw" }}  // Start off-screen to the left
             animate={{ y: 0 }}         // Move to the normal position
             transition={{ duration: 2, ease: "easeOut" }}
            className='flex gap-2 text-2xl'>
            <CiSearch />
            <RiShoppingBasketLine />
            <RxPerson />
            </motion.div>
        </nav>

    </div>
  )
}

export default Header