import { MdOutlineMonetizationOn, MdOutlineHistory } from "react-icons/md";

const ButtonDetails = () => {
  return (
    <ul className="flex gap-2 justify-around  bg-neutral/50 py-2 rounded-b-lg shadow-md">
       <li className="flex gap-1 items-center bg-primary/80 text-neutral px-2 py-1 shadow-md border border-primary/40 rounded-md">
            <MdOutlineMonetizationOn className="text-2xl"/>
            Plan de pago
       </li>
       <li className="flex gap-1 items-center bg-neutral text-text/90 px-2 py-1 shadow-md border border-primary/40 rounded-md">
            <MdOutlineHistory className="text-2xl"/>
            Historial
       </li>
    </ul>
  )
}

export default ButtonDetails