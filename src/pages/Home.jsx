import React from 'react'
import Hero from '../components/Hero'
import Sutain from '../components/Sutain'
import Community from '../components/Community'
import Featured from '../components/Featured'

const Home = () => {
  return (
    <div className='container'>
        <Hero />
        <Sutain />
        <Community />
        <Featured />
    </div>
  )
}

export default Home