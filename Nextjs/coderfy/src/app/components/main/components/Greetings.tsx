'use client';

import { usePathname } from 'next/navigation'

interface GreetingsProps {
    name?: string
}
const Greetings = ({name}:GreetingsProps) => {
    const path = usePathname()
    const init = path === '/' ? 'Bienvenido ' : ''
    return (
        <div className="relative z-10  pt-8">
            <h1 className="text-3xl font-bold text-emerald-50">{init} {name}</h1>
        </div>
    )
}

export default Greetings