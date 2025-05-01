import Link from "next/link";
import { FaMoneyBillAlt,FaPercent, FaCalendarDay } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";


const FormAddLoan = () => {
  return (
    <form className="flex flex-col gap-6 px-8 py-4 mt-4">
        <div className="flex relative items-center px-2 py-1 bg-neutral text-text/90 shadow-md border border-primary/40 rounded-md">
            <label htmlFor="typeinteres" className="absolute left-2 -top-3 bg-neutral px-1 text-sm">Tipo de interes</label>
            <select name="typeinteres" className="w-full outline-none focus:outline-none active:outline-none border-none py-2" id="typeinteres"> 
                <option value="">Interes al capital incial</option>
                <option value="">Interes a cada cuota</option>
                <option value="">Interes compuesto bancario</option>
            </select>
        </div>    
        <div className="flex relative items-center px-2 py-1 bg-neutral text-text/90 shadow-md border border-primary/40 rounded-md group">
            <label htmlFor="laonvalue" className="absolute left-2 -top-3 bg-neutral px-1 text-sm">Valor</label>
            <input type="text" name="laonvalue" id="laonvalue" placeholder="Valor del prestamo" className=" w-full outline-none focus:outline-none active:outline-none border-none" />
            <FaMoneyBillAlt className="text-4xl" />
        </div>    
        <div className="flex relative items-center px-2 py-1 bg-neutral text-text/90 shadow-md border border-primary/40 rounded-md group">
            <label htmlFor=""  className="absolute left-2 -top-3 bg-neutral px-1 text-sm">Intereses</label>
            <input type="text" placeholder="" className=" w-full outline-none focus:outline-none active:outline-none border-none" />
            <FaPercent className="text-2xl" />
        </div>    
        <div className="flex relative items-center px-2 py-1 bg-neutral text-text/90 shadow-md border border-primary/40 rounded-md group">
            <label htmlFor="" className="absolute left-2 -top-3 bg-neutral px-1 text-sm">Cuotas</label>
            <input type="text" placeholder="Numero de coutas" className=" w-full outline-none focus:outline-none active:outline-none border-none" />
            <GiReceiveMoney className="text-4xl" />
        </div>    
        <div className="flex relative items-center px-2 py-1 bg-neutral text-text/90 shadow-md border border-primary/40 rounded-md group">
            <label htmlFor="" className="absolute left-2 -top-3 bg-neutral px-1 text-sm">Frecuencia del pago</label> 
            <select name="typeinteres" className="w-full outline-none focus:outline-none active:outline-none border-none py-2" id="typeinteres"> 
                <option value="">Diario</option>
                <option value="">Semanal</option>
                <option value="">Quincenal</option>
                <option value="">Mensual</option>
            </select>
        </div>    
        <div className="flex relative items-center px-2 py-1 bg-neutral text-text/90 shadow-md border border-primary/40 rounded-md group">
            <label htmlFor="" className="absolute left-2 -top-3 bg-neutral px-1 text-sm">Fecha del pago</label>
            <input type="date"  className="w-full outline-none focus:outline-none active:outline-none border-none py-2" />
            <FaCalendarDay className="text-2xl" />
        </div>    
        <div className="flex relative items-center px-2 py-1 bg-neutral text-text/90 shadow-md border border-primary/40 rounded-md group">
            <label htmlFor="" className="absolute left-2 -top-3 bg-neutral px-1 text-sm">Notas</label>
            <input type="text" placeholder="Notas" className=" w-full outline-none focus:outline-none active:outline-none border-none"/>
        </div>
        <div className="flex gap-8 justify-center items-center mt-4">
            <Link href="/auth/login" className="px-4 py-2 bg-primary/80 text-neutral border border-primary rounded-md shadow-md">Guardar</Link>
            <Link href="/admin/clients/client" className="px-4 py-2 bg-neutral border border-primary/50 rounded-md shadow-md">Cancelar</Link>
        </div>
    
    </form>
  )
}

export default FormAddLoan