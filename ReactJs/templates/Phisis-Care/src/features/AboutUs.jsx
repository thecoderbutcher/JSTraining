import { FaBowlRice, FaChildReaching, FaHandHoldingHeart,FaLightbulb, FaArrowRight } from "react-icons/fa6";

const AboutUs = () => {
    return (
        <section className="flex flex-col text-textcolor bg-softly p-8 lg:justify-center lg:items-center">
            <div className="lg:flex lg:flex-row lg:w-4/5 lg:gap-4"> 
                <div className="flex flex-col w-full gap-4 h-full justify-center items-center lg:w-1/2 lg:h-full lg:justify-center ">
                    <img src="./aboutus.jpg" alt=""  className="rounded-3xl shadow-xl"/>
                </div>
                <div className="flex flex-col text-textcolor w-full gap-4 mt-8 lg:w-1/2">
                    <p className="bg-unstressed p-2 rounded-xl w-36 font-semibold text-accent text-center">Sobre Nosotros</p>
                    <h2 className="text-5xl font-semibold py-2 md:text-4xl lg:py-0">Somos los mejores en cuidado <span className="text-accent">psiquiátrico.</span></h2>
                    <p className="text-lg font-light text-textcolor/70">
                        Entendemos que los problemas de salud mental pueden surgir inesperadamente. 
                        Nuestros servicios de atención psiquiátrica de emergencia están diseñados para brindar apoyo rápido y eficaz, 
                        ayudándole a manejar la crisis, prevenir complicaciones adicionales y comenzar su proceso de recuperación lo antes posible.
                    </p>
                    <div className="flex flex-col justify-center gap-4 p-4 md:grid md:grid-cols-2 lg:p-2">
                        <div className="flex gap-2 items-center">
                            <span className="text-2xl lg:text-xl"><FaBowlRice/></span>
                            <p className="text-lg font-light text-textcolor/70">Planes Nutricionales</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="text-2xl lg:text-xl"><FaLightbulb/></span>
                            <p className="text-lg font-light text-textcolor/70">Enfoque Proactivo</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="text-2xl lg:text-xl"><FaChildReaching/></span>
                            <p className="text-lg font-light text-textcolor/70">Actividad Física</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="text-2xl lg:text-xl"><FaHandHoldingHeart/></span>
                            <p className="text-lg font-light text-textcolor/70">Soporte Emocional</p>
                        </div>
                    </div>
                    <div className="py-2">
                        <button className="flex items-center gap-2 bg-accent text-unstressed py-2 px-4 rounded-full group hover:bg-textcolor hover:text-unstressed transition-all duration-300">
                            Solicitar Turno
                            <span className="mx-auto bg-textcolor rounded-full p-2 group-hover:bg-accent"><FaArrowRight/></span>
                        </button>
                    </div>
                </div>
            </div>  
        </section>
    )
}

export default AboutUs