import React from 'react'

const Featured = () => {
  return (
    <div className='container  '>
       <div className='mt-10'>
       <h1 className='text-center text-8xl font-primary'>
            Featured Products
        </h1>
        <div className='mt-5 flex gap-5 items-center justify-center'>
            <p className='border w-30 text-center rounded-2xl'>Lifstyles</p>
            <p className='border w-30 text-center rounded-2xl'>Air Max</p>
            <p className='border w-30 text-center rounded-2xl'>Jordan</p>
            <p className='border w-30 text-center rounded-2xl'>Air Force 1</p>
            <p className='border w-30 text-center rounded-2xl'>Men's Fashion</p>
            <p className='border w-30 text-center rounded-2xl'>Girl's Fashion</p>
        </div>
        <div className='mt-5 flex gap-5 items-center justify-center'>
            <p className='border w-30 text-center rounded-2xl'>Training</p>
            <p className='border w-30 text-center rounded-2xl'>Gym</p>
            <p className='border w-30 text-center rounded-2xl'>sports</p>
            <p className='border w-30 text-center rounded-2xl'>Running</p>
            <p className='border w-30 text-center rounded-2xl'>Basketball</p>
           
        </div>
        <div className='mt-5 flex gap-5 items-center justify-center'>
            <p className='border w-30 text-center rounded-2xl'>Nike sb</p>
            <p className='border w-30 text-center rounded-2xl'>Sandals</p>
            <p className='border w-30 text-center rounded-2xl'>Slides</p>
            <p className='border w-30 text-center rounded-2xl'>Men's Fashion</p>
        </div>
       </div>
    </div>
  )
}

export default Featured