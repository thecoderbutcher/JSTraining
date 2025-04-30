import { MdOutlineWarningAmber, MdOutlineCheckCircle, MdOutlineCancel} from "react-icons/md";


const FilterButtons = () => {
  return (
    <ul className="flex gap-2 items-center justify-around">
        <li className="flex items-center gap-1 px-2 py-1 bg-accent text-text/90 shadow-md border border-primary/40 rounded-md">
            <MdOutlineWarningAmber  className="text-xl"/>
            Pendientes
        </li>
        <li className="flex items-center gap-1 px-2 py-1 bg-secondary text-text/90 shadow-md border border-primary/40 rounded-md">
            <MdOutlineCheckCircle  className="text-xl"/>
            Pagadas
        </li>
        <li className="flex items-center gap-1 px-2 py-1 bg-error text-text/90 shadow-md border border-primary/40 rounded-md">
            <MdOutlineCancel  className="text-xl"/>
            Vencidas
        </li>
    </ul>
  )
}

export default FilterButtons