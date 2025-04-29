import FilterButtons from "./FilterButtons"

const Header = () => {
    return (
        <div className="flex items-center gap-4 w-full justify-between px-6 py-4 bg-gray-300/50 shadow-md">
            <h1 className="text-2xl">Clientes</h1> 
            <FilterButtons />
        </div>
    )
    }

export default Header