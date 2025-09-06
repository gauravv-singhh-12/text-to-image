import React from 'react'

const Navbar = () => {
  return (

    <div className='flex items-center justify-between p-3 bg-gray-900 shadow-xl sticky top-0 z-50 '>
        <div className='font-bold text-2xl hover:text-[#7C3AED] cursor-pointer'>🚀 AI StoryBook Generator</div>
        <div className='flex items-center justify-between'>
            <button className='m-4 text-xl font-semibold'>Login</button>
            <button className='m-4 p-2 font-semibold outline-none rounded-xl bg-[#7C3AED] hover:bg-white hover:text-[#7C3AED] '>Create Account</button>
        </div>
    </div>
  )
}

export default Navbar