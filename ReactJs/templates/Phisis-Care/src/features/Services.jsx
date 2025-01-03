import ServiceCard from "../components/ServiceCard"
import { services } from "../data"
import { BsCalendarCheck } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
const Services = () => {
    return (
        <section className="flex flex-col p-8 bg-softly text-textcolor lg:justify-center lg:items-center">
            <h2 className="text-5xl font-semibold md:text-4xl"><span className="text-accent">Brindamos</span> los mejores servicios</h2>
            <div className="flex flex-col items-center content-center gap-8 mt-8 justify-items-center md:grid md:grid-cols-2 lg:w-4/5 xl:grid-cols-3 2xl:grid-cols-4">
                {services.map((service) => (
                    <ServiceCard key={service.name} title={service.name} description={service.description}/> 
                ))}
                <article className="w-full h-full flex flex-col gap-4 p-8 transition-all duration-300 border-2 rounded-lg group border-unstressed hover:bg-accent hover:text-unstressed group-hover:text-unstressed hover:border-accent md:col-span-2 xl:col-span-3 2xl:col-span-2">
                    <span className="flex items-center justify-center text-2xl p-2 rounded-full bg-unstressed group-hover:bg-softly group-hover:text-accent w-9 h-9"><BsCalendarCheck/></span>
                    <h3 className="text-2xl">¿Listo para comenzar su viaje hacia el bienestar mental?</h3>
                    <p className="text-lg font-light opacity-80">Entendemos que las crisis emocionales pueden surgir inesperadamente. Nuestra atención psiquiátrica de emergencia está aquí para ayudar.</p>
                    <button className="mx-auto bg-accent text-unstressed border border-accent/80 rounded-full flex flex-row justify-center items-center content-center p-2 group-[&:hover]:border-unstressed mt-8 hover:bg-unstressed hover:text-accent">
                        <span className="px-2">Solicita turno</span> 
                        <FaArrowRight/>
                    </button>
                </article>
            </div>
            
        </section>
    )
}

export default Services