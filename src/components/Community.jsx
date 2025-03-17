import React from 'react'

const Community = () => {
  return (
    <div className='container'>
        <div className='flex  items-center gap-5'>
            <div className='flex-1'>
                <img src="air3.png" alt="" />
            </div>
            <div className='flex-1 flex flex-col gap-7'>
                <h1 className='text-8xl font-primary'>Community</h1>
                <p>
                    Welcome to our community! We're always looking <br/> for new members and exciting opportunities to grow.<br/>
                     Don't hesitate to reach out if you're interested in <br/>joining our community.
                </p>
                <div>
                <button className='bg-gray-800 py-4 w- px-6 hover:text-black border hover:border-gray-800 hover:bg-white text-white rounded-md mt-8'>Explore More</button>

                </div>
               
            </div>
        </div>
        <div className='flex gap-7 justify-center items-center'>
          <div className='border-r border-grary-200 mr-10 flex flex-col items-center'>
            <h2 className='text-8xl'>50+</h2>
            <p>Years of experience</p>  
          </div>
          <div className='border-r border-grary-200 mr-10 flex flex-col items-center'>
            <h2 className='text-8xl'>100+</h2>
            <p>Years of experience</p>  
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='text-8xl'>2 million+</h2>
            <p>Years of experience</p>  
          </div>
        </div>
    </div>
  )
}

export default Community