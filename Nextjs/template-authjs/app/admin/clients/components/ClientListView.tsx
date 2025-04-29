import Image from "next/image"
import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";

const ClientListView = () => {
  return (
    <div className="px-2 mt-4 w-full">
      <Link href="/admin/clients/client">
        <div className="flex items-center justify-between gap-2 bg-white px-4 py-2 rounded-lg shadow-lg">
          <div className="flex gap-2 items-center">
            <div className="bg-gray-300 p-1 rounded-md">
              <Image src="/default-user.webp" alt="clients" width={30} height={30}/>
            </div>
            <div className="flex flex-col ">
              <p>USERNAME LASTNAME</p>
              <p className="text-sm font-light">$TOTAL_PRESTAMO</p>
            </div>
          </div>
          <div className="flex justify-end">
            <ul className="flex gap-2 items-center justify-end text-xl"> 
              <li className="">
                  <FaRegCheckCircle className="text-green-500"/> 
              </li>
              <li className="">
                  <IoWarningOutline className="text-orange-500"/> 
              </li>
              <li className="">
                  <IoIosArrowForward className="text-gray-500"/> 
              </li>
            </ul> 
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ClientListView