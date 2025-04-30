

const FilterDate = () => {
  return (
    <div className="flex flex-col gap-1 mt-4 ">
      <p className="px-2 font-light">Selecciona una fecha</p>
      <ul className="flex gap-2 items-center justify-around">
        <li className="bg-primary/50 text-white border border-primary/50 shadow-md px-2 py-1 rounded-md">Hoy</li>
        <li className="bg-neutral border border-primary/50 shadow-md px-2 py-1 rounded-md">Ayer</li>
        <li className="bg-neutral border border-primary/50 shadow-md px-2 py-1 rounded-md">Ultimos 7 dias</li>
        <li className="bg-neutral border border-primary/50 shadow-md px-2 py-1 rounded-md">Corriente del mes</li>
      </ul>
    </div>
  )
}

export default FilterDate