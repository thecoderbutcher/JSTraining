import { FaRegCheckCircle } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";

const FilterStatus = () => {
  return (
    <ul className="flex gap-4 mt-4 ml-2"> 
        <li className="flex gap-1 items-center justify-center border border-gray-300 bg-white px-2 py-1 rounded-lg shadow-md">
            <FaRegCheckCircle className="text-green-500"/>
            Pagaron hoy
        </li>
        <li className="flex gap-1 items-center justify-center border border-gray-300 bg-white px-2 py-1 rounded-lg shadow-md">
            <IoWarningOutline className="text-orange-500"/>
            Pendientes para hoy
        </li>
    </ul>
        
    
  )
}

export default FilterStatus