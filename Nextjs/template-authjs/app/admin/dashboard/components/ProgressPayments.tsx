
import { FaCalendarDay, FaCalendarTimes } from "react-icons/fa";


const ProgressPayments = () => {
  return (
    <div className="flex flex-col gap-4 bg-neutral px-4 py-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between ">
        <p>Progreso de cobros</p>
        <div className="flex gap-2">
          <div className="px-2 py-1 border border-primary/60 rounded-md bg-primary/60 text-white">
            <FaCalendarDay />
          </div>
          <div className="px-2 py-1 border border-primary/60 rounded-md">
            <FaCalendarTimes />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <p className="text-4xl font-semibold">$000</p>
          <p className="text-base font-light">de $000</p>
        </div> 
        <div className="w-full max-w-md">
          <div className="mb-2 text-sm text-gray-700 flex justify-between">
            <span>Cobrado: $00</span>
            <span>Total: $00</span>
          </div>
          <div className="w-full h-4 border border-primary/60 bg-neutral rounded-full overflow-hidden">
            <div
              className="h-full  transition-all duration-300" 
            />
          </div> 
        </div> 
        <div className="flex items-center justify-around gap-2 text-sm">
          <div className="flex flex-col justify-start border-l-4 border-l-accent pl-2 rounded-md">
            <p>Pendiente</p>
            <p>$000</p>
          </div>
          <div className="flex flex-col justify-start border-l-4 border-l-secondary pl-2 rounded-md">
            <p>Cobrado</p>
            <p>$000</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressPayments