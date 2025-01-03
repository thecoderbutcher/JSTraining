import { FaArrowRight } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";
const ServiceCard = ({title, description}) => {
    return (
        <article className="group  flex flex-col gap-2 border-2 cursor-pointer border-unstressed p-8 rounded-lg text-textcolor hover:bg-accent hover:text-unstressed group-hover:text-unstressed hover:border-accent transition-all duration-300 md:h-full">
            <span className="text-2xl bg-unstressed group-hover:bg-softly group-hover:text-accent w-9 h-9 flex justify-center items-center rounded-full"><BsPatchCheck/></span>
            <h3 className="text-2xl">{title}</h3>
            <p className="font-light text-lg opacity-80 flex-1">{description}</p>
            <span className="border  border-textcolor/80 rounded-full w-8 h-8 flex justify-center items-center p-2 group-[&:hover]:border-unstressed mt-2 hover:bg-unstressed hover:text-accent">
                <FaArrowRight/>
            </span>
        </article>
    )
}

export default ServiceCard