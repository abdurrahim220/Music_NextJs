import { artists } from '@/utils'
import Image from 'next/image'
import React from 'react'
import HeaderTitle from '../shared/headerTitle'

const TopArtists = () => {
    return (
        <div className='bg-[#282826] p-4 md:p-6 rounded-xl'>

            <HeaderTitle title='Top Artists' button='See All' />

            <div className='w-full overflow-x-auto scrollbar-hide my-4 md:my-8'>
                <div className="flex gap-3 md:gap-5">

                    {
                        artists.map((artist) => (
                            <div
                                key={artist.id}
                                className='flex flex-col items-center   
                                text-center gap-4 cursor-pointer hover:scale-105 transition-transform duration-300 min-w-[150px] md:min-w-[200px]
                                p-2'
                            >
                                <Image
                                    src={artist.image}
                                    alt={artist.name}
                                    width={640}
                                    height={640}
                                    className='rounded-xl'
                                />

                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default TopArtists  