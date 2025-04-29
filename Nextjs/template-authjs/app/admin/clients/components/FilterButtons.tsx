import { IoFilter } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const FilterButtons = () => {
  return (
    <ul className="flex gap-4 text-2xl">
        <li><IoIosSearch /></li>
        <li><IoFilter /></li>
    </ul>
  )
}

export default FilterButtons