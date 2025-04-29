
const Hero = () => {
  return (
    <div id="hero" className="h-screen w-full mx-auto flex items-center justify-center pl-20 bg-gray-900 text-white">
        <div className="flex flex-col gap-10 w-2/3 items-start text-start">
            <h1 className="flex flex-col gap-2 text-6xl font-semibold">
                <span>EL MEJOR SERVICIO</span> 
                <span>DE LAVADO</span> 
            </h1>
            <p className="text-lg font-light">Mucha gente opta por limpiar sus coches con nosotros.</p>
            <button className="bg-black text-white px-4 py-2 rounded-md">Reservar turno</button>
        </div>
        <div className="h-screen w-full bg-cover" style={{backgroundImage: "url('/hero-bg.jpg')"}}> 
        </div>
    </div>
  )
}

export default Hero