import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between bg-[#2D3748] text-white'>
        <h1 className='text-3xl'>Vyapar</h1>
        <button onClick={()=>setToken('')} className='bg-white text-black bold px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-red-400 transition-all duration-400'>Logout</button>
    </div>
  )
}

export default Navbar