

const LoanInfo = () => {
  return (
    <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between px-4 mt-2 gap-2">
            <div className="flex flex-col">
                <p className="font-bold text-4xl">$000</p>
                <p className="text-sm font-light text-center">$000</p>   
            </div>
            <p className="font-light text-2xl">000%</p>
        </div>
        <div className="flex items-center justify-between px-4">
            <div className="flex flex-col">
                <p className="font-light text-sm">Tipo de interes</p>
                <p className="text-sm">Interes al capital inicial</p>
            </div>
            <div className="flex flex-col">
                <p className="font-light text-sm">Frecuencia de pagos</p>
                <p className="text-sm">Dia especifico del mes</p> 
            </div>
        </div>
        <div className="flex items-center justify-between px-4">
            <div className="flex flex-col">
                <p className="font-light text-sm">Fecha de prestamo</p>
                <p className="text-sm">00/00/0000</p>
            </div>
            <div className="flex flex-col">
                <p className="font-light text-sm">Fecha de vencimiento</p>
                <p className="text-sm">00/00/0000</p> 
            </div>
        </div>
    </div>
  )
}

export default LoanInfo