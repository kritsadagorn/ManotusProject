import React from 'react'
import Navbar from '../components/Navbar'
import Stats from '../components/Stats'
import MapBuilding from '../components/Map'
import { createContext } from 'react'

export const PositionContext = createContext();

const Main = () => {
  return (
    <div>
      <div className='mt-5 py-44 sm: mx-5 md:mx-10 flex justify-around items-center bg-gradient-to-br from-yellow-700 via-yellow-800 to-yellow-700 rounded-2xl'>
        <MapBuilding />
        <Stats />
      </div>
    </div>
  )
}

export default Main
