import { FaUserNurse, FaPhoneVolume, FaMessage } from "react-icons/fa6";
import { motion } from "framer-motion"
import { benefits } from "../data"
const Benefits = () => {
    return (
        <section className="flex flex-col gap-4 justify-center items-center text-unstressed bg-textcolor p-4 -mt-8 lg:flex-row lg:justify-center lg:px-8 xl:px-10">
            {benefits.map((benefit) => (
                <motion.div 
                    initial={{y: 50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 1.2}}
                    key={benefit.name} 
                    className="flex items-center gap-4 w-4/5 lg:w-2/5 lg:p-4 xl:w-1/5"
                > 
                    {benefit.name === 'Servicio de emergencia' && <span className="text-3xl"><FaPhoneVolume/></span>}
                    {benefit.name === 'Consultas gratis' && <span className="text-3xl"><FaMessage/></span>}
                    {benefit.name === 'Terapeutas expertos' && <span className="text-3xl"><FaUserNurse/></span>}
                    <div className="flex flex-col p-2">
                        <h3 className="text-xl font-semibold lg:text-lg">{benefit.name}</h3>
                        <p className="text-lg font-light lg:text-sm">{benefit.description}</p>
                    </div>
                    
                </motion.div>
            ))}
        </section>
    )
}

export default Benefits