import { MdOutlineMonetizationOn, MdOutlineHistory } from "react-icons/md";

const ButtonDetails = () => {
  return (
    <ul className="flex gap-2 justify-around">
       <li className="flex gap-1 items-center">
            <MdOutlineMonetizationOn className="text-2xl"/>
            Plan de pago
       </li>
       <li className="flex gap-1 items-center">
            <MdOutlineHistory className="text-2xl"/>
            Historial
       </li>
    </ul>
  )
}

export default ButtonDetails