import {links} from '../data'

const NavBar = () => {
    return (
        <nav className="flex justify-around p-4 items-center w-full bg-softly text-textcolor">
            <div>logo</div>
            <ul className='flex gap-4'>
                {links.map((link) => (
                    <li key={link.name} className='hover:text-accent text-underline'>
                        <a href={link.path}>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar