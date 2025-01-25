import React from 'react'
import HeaderTitle from '../shared/headerTitle'
import { topCharts } from '@/utils'
import Image from 'next/image'
import { PlaySquareIcon, PlusSquareIcon } from 'lucide-react'

const TopCharts = () => {
    return (
        <div className='bg-[#282826] p-4 md:p-6 rounded-xl'>
            <HeaderTitle title='Top Charts' button='See All' />

            <div className="flex flex-col gap-3 md:gap-5 my-4 md:my-8">
                {
                    topCharts.map((song) => (
                        <div key={song.id}
                            className='flex items-center justify-between gap-5 hover:bg-gray-400/80 p-2 cursor-pointer rounded-xl transition-colors'
                        >
                            <span className="text-sm md:text-base text-muted-foreground font-bold">{song.id}

                            </span>

                            <div className="flex items-center w-2/3 gap-4">
                                <Image
                                    src={song.image}
                                    alt={song.title}
                                    width={640}
                                    height={640}
                                    className="rounded-xl object-cover h-12 w-12 md:h-16 md:w-16"
                                />
                                <div>
                                    <h4 className='text-sm md:text-lg font-bold text-white
                                 '>
                                        {song.title}
                                    </h4>
                                    <p className='text-xs md:text-sm text-muted-foreground'>
                                        {song.artist}
                                    </p>
                                </div>
                            </div>
                            <p className='text-sm md:text-base text-muted-foreground font-bold'>
                                {song.duration}
                            </p>
                            <PlaySquareIcon className='size-6 text-blue-500 hover:text-white transition-colors'/>
                            < PlusSquareIcon className='size-6 text-blue-500 hover:text-white transition-colors'/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TopCharts