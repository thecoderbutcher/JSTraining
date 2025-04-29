import { IoFilter } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa6";
import Link from "next/link";


const FilterButtons = () => {
  return (
    <ul className="flex gap-4 text-2xl text-gray-700">
        <li><IoIosSearch /></li>
        <li><IoFilter /></li>
        <li>
          <Link href="/admin/clients/addclient">
            <FaUserPlus />
          </Link>
          </li>
    </ul>
  )
}

export default FilterButtons