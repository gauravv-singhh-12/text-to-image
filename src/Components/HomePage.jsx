import React, { useState } from 'react'

const HomePage = () => {
  const [genre, setGenre] = useState('')
  const [tone, setTone] = useState('')
  const [artStyle, setArtStyle] = useState('')
  const [audience, setAudience] = useState('')

  return (
    <div className='flex items-center justify-center'>
      <div className='mt-16 shadod-gray-900 shadow-2xl flex flex-col items-center max-w-4xl w-full p-6'>
        <h1 className='font-extrabold text-white text-5xl mb-3 text-center'>
          Generate Your AI Storybook
        </h1>
        <h3 className='text-xl font-semibold text-center mb-6'>
          Bring your imagination to life. Describe your idea, and let our AI craft a unique story with beautiful illustrations.
        </h3>
        <textarea
          className='bg-gray-700 w-full h-64 p-4 text-white rounded-lg resize-none'
          placeholder='Enter your story idea... e.g., A brave knight who is afraid of the dark.'
        ></textarea>

        
        <div className='flex justify-between gap-10 w-full mt-5'>
          <div className='flex flex-col items-center'>
            <h3 className='font-semibold cursor-pointer'>Genre</h3>
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className='mt-2 bg-gray-700 text-white p-2 rounded-md w-40 cursor-pointer'
            >
              <option value="">Select</option>
              <option value="fantasy">Fantasy</option>
              <option value="sci-fi">Sci-Fi</option>
              <option value="mystery">Mystery</option>
              <option value="adventure">Adventure</option>
            </select>
          </div>

          <div className='flex flex-col items-center'>
            <h3 className='font-semibold cursor-pointer'>Tone</h3>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className='mt-2 bg-gray-700 text-white p-2 rounded-md w-40 cursor-pointer'
            >
              <option value="">Select</option>
              <option value="funny">Funny</option>
              <option value="serious">Serious</option>
              <option value="dark">Dark</option>
              <option value="lighthearted">Lighthearted</option>
            </select>
          </div>

          <div className='flex flex-col items-center'>
            <h3 className='font-semibold cursor-pointer'>Art Style</h3>
            <select
              value={artStyle}
              onChange={(e) => setArtStyle(e.target.value)}
              className='mt-2 bg-gray-700 text-white p-2 rounded-md w-40 cursor-pointer'
            >
              <option value="">Select</option>
              <option value="cartoon">Cartoon</option>
              <option value="realistic">Realistic</option>
              <option value="anime">Anime</option>
              <option value="watercolor">Watercolor</option>
            </select>
          </div>

          <div className='flex flex-col items-center'>
            <h3 className='font-semibold cursor-pointer'>Target Audience</h3>
            <select
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className='mt-2 bg-gray-700 text-white p-2 rounded-md w-40 cursor-pointer'
            >
              <option value="">Select</option>
              <option value="kids">Kids</option>
              <option value="teens">Teens</option>
              <option value="adults">Adults</option>
              <option value="all">All Ages</option>
            </select>
          </div>
        </div>

        <button className='w-full bg-[#7C3AED] p-2 rounded-md mt-10 shadow-2xl hover:bg-white hover:text-[#7C3AED] font-bold text-xl'>
          Generate Story
        </button>
      </div>
    </div>
  )
}

export default HomePage
