import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className='bg-gray-300 mt-[200px] '>
      <div className='container flex justify-between items-center'>
      <div className='py-10'>
            <h1 className='text-2xl mt-5'><span className='font-bold'>ET</span>-SHOES</h1>
            <p className='py-7'>
                Men can not live by exchanging <br /> articles, but producing them.
                 They <br/> live by work not trade.
            </p>
            <div className='flex items-center gap-5'>
                <div className='bg-gray-200 rounded-full p-2'>
                <FaFacebookF className=' text-2xl' />
                </div>
                <div className='bg-gray-200 rounded-full p-2'>
                <FaInstagram className='text-2xl'  />

                </div>
                <div className='bg-gray-200 rounded-full p-2'>
                <FiGithub className='text-2xl'  />

                </div>
                <div className='bg-gray-200 rounded-full p-2'>
                <FaLinkedinIn className='text-2xl' />

                </div>
       
            </div>
        </div>
        <div  className='flex flex-col justify-center '>
            <h1 className='text-xl font-bold '>About</h1>
            <ul className='text-gray-500 gap-5'>
                <li>About Us</li>
                <li>Features</li>
                <li>Career</li>
                <li>News</li>
            </ul>

        </div>
        <div  className='flex flex-col justify-center '>
            <h1 className='text-xl font-bold '>Company</h1>
            <ul className='text-gray-500 gap-5' >
                <li>Our Team</li>
                <li>Partner with us</li>
                <li>FAQs</li>
                <li>Blogs</li>
            </ul>

        </div>
        <div className='flex flex-col justify-center '>
            <h1 className='text-xl font-bold '>Support</h1>
            <ul className='text-gray-500 gap-5' >
                <li>Account</li>
                <li>Support Center</li>
                <li>Feedback</li>
                <li>Contact Us</li>

            </ul>

        </div>
      </div>
    </div>
    <div className='bg-gray-300 text-center'>
        <p>Selam 2025@copyright</p>
    </div>
    </>
  )
}

export default Footer