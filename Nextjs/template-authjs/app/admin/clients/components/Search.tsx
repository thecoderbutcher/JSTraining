
import { IoIosSearch } from "react-icons/io";
const Search = () => {
  return (
    <form>
      <div className="bg-neutral rounded-md flex items-center px-2 border border-primary/50 shadow-md">
        <input type="text" placeholder="Buscar cliente" className="bg-neutral border-none rounded-lg" />
        <IoIosSearch className="text-2xl text-gray-400" />
      </div>  
    </form>
  )
}

export default Search