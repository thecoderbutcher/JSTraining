
import React from 'react'
import { Link } from 'next-view-transitions'

interface ItemProps {
    text:string,
    href?:string,
    children: React.ReactNode
}

const AsideMenuItem = ({href, text, children}:ItemProps) => {
    return (
        <li>
            <Link href={href || '#'} className='flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-2 px-4 font-medium transition duration-300'>
                {children}
                {text}
            </Link>
        </li>
    )
}

export default AsideMenuItem
