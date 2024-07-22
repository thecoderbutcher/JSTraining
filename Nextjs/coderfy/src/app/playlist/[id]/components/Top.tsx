'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation'

interface Props {
    name?: string,
    srcImg: string,
    artists: string
}
const Top = ({name, srcImg, artists}:Props) => {
    const alt = `Playlist of ${name}`
    return (
        <div className="flex gap-4 relative z-10  pt-8">
            <Image
              src={srcImg}
              alt={alt}
              width={100}
              height={100}
              className='w-[150px] h-full shadow-lg'
            />
            <div className='flex flex-col justify-center text-emerald-50 gap-2 px-4'>
              <span className='text-sm'>Playlist</span>
              <h1 className="text-4xl font-bold">{name}</h1>
              <span className='text-sm'>{artists}</span>
            </div>
        </div>
    )
}

export default Top