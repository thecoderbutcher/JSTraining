import Link from "next/link"
import { IoIosArrowBack } from "react-icons/io"

interface HeaderProps {
    title: string
    url?: string 
}
const Header = ({title, url}: HeaderProps) => {
    return (
        <div className="flex items-center w-full justify-between px-4 py-4 bg-secondary text-neutral shadow-md">
            <h1 className="flex gap-1 items-center text-xl font-bold">
                {url && 
                    <Link href={url || "/admin"} className="text-2xl"><IoIosArrowBack /></Link>
                }
                {title}
            </h1>  
        </div>
    )
}

export default Header