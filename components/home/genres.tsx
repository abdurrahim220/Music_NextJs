import React from 'react'
import HeaderTitle from '../shared/headerTitle'
import { genres } from '@/utils'

const Genres = () => {
  return (
    <div className='bg-[#282826] rounded-xl'>
      <div className='flex flex-col p-4 md:p-8 rounded-xl space-y-6 md:space-y-8'>


        <HeaderTitle title="Genres" button='See All' />


        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {
            genres.map((genre) => (
              <div key={genre.id}
                className='flex items-center justify-center text-white p-8 rounded-xl text-center hover:scale-105 transition-transform cursor-pointer'
                style={{ background: genre.color }}
              >
                <span className='font-bold'>{genre.genre}</span>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Genres