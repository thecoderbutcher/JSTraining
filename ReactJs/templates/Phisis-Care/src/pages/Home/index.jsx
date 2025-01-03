import {motion} from "framer-motion";
import AboutUs from "../../features/AboutUs";
import  Benefits from "../../features/Benefits"
import { FaArrowRight } from "react-icons/fa6";
import Services from "../../features/Services";

const Home = () => {
    return (
        <section className="flex flex-col">
            <article className="flex flex-col gap-4 bg-bgcolor text-textcolor h-full p-8 lg:flex-row lg:justify-center">
                <motion.div 
                    initial={{opacity: 0}} 
                    animate={{opacity:1}}
                    transition={{duration: 1.2}}
                    className="lg:flex lg:flex-col lg:gap-8 lg:w-2/5 lg:justify-center"
                >
                    <h2 className="text-5xl font-semibold mt-10 md:text-5xl">
                        <span className="text-accent">Destino </span> 
                        para la calma y el equilibrio emocional
                    </h2>
                    <p className="text-lg font-light">
                        Nos dedicamos a proporcionar un ambiente seguro y acogedor donde puedes encontrar la calma y el equilibrio emocional que busca.
                    </p>
                    <div className="flex flex-col gap-4 items-start md:flex-row">
                        <button className="flex items-center gap-2 bg-accent text-unstressed py-2 px-4 rounded-full group hover:bg-textcolor hover:text-unstressed transition-all duration-300">
                            Ver Servicios 
                            <span className="mx-auto bg-textcolor rounded-full p-2 group-hover:bg-accent"><FaArrowRight/></span>
                        </button>
                        <button className="flex items-center gap-2 bg-softly text-textcolor py-2 px-4 rounded-full group hover:bg-accent hover:text-unstressed transition-all duration-300">
                            Solicitar Turno
                            <span className="mx-auto bg-textcolor text-softly rounded-full p-2 group-hover:bg-softly group-hover:text-accent"><FaArrowRight/></span>
                        </button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-8 border-t py-8 text-textcolor">
                        <div className="flex flex-col items-center gap-2">
                            <p className="text-3xl font-semibold lg:text-4xl">24/7</p>
                            <p className="font-light lg:text-lg">Emergencias</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <p className="text-3xl font-semibold lg:text-4xl">+10</p>
                            <p className="font-light lg:text-lg">Doctores</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <p className="text-3xl font-semibold lg:text-4xl">+100</p>
                            <p className="font-light lg:text-lg">Pacientes</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1.2}}
                    className="flex justify-center content-center items-center"
                >
                    <img src="./doctora.png" alt="" className="w-4/5 md:w-2/5 lg:w-full"/>
                </motion.div>
            </article>
            <Benefits/>
            <AboutUs/>
            <Services/>
        </section>
    )
}

export default Home