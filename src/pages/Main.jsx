import React from 'react'
import Map from '../components/Map'
import Navbar from '../components/Navbar'
import Stats from '../components/Stats'

const Main = () => {
  return (
    <div>
      <Navbar/>
      <div className='mt-5 py-44 sm: mx-5 md:mx-10 flex justify-around items-center bg-[#e8e8e8] rounded-2xl'>
        <Map/>
        <Stats/>
      </div>
    </div>
  )
}

export default Main
