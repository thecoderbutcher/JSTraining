import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { FaUserPen, FaUserXmark } from "react-icons/fa6";

const Profile = () => {
  return (
    <div className='flex flex-col gap-4 bg-gray-200  py-4 rounded-b-4xl shadow-lg'>
        <div className='flex gap-2 items-center'>
            <Link href="/admin/clients" className="text-2xl p-1 bg-gray-300 rounded-lg h-full text-center flex items-center">
                <IoIosArrowBack />
            </Link>
            <div className="bg-gray-300 p-2 rounded-md h-full flex items-center">
                <Image src="/default-user.webp" alt="clients" width={40} height={40} />
            </div>
            <div className="flex flex-col">
                <p className="font-bold">USERNAME LASTNAME</p>
                <p className="text-sm font-light">address street numbres</p>
                <p className="text-sm font-light">phone_example</p>
            </div>
        </div>
        <div className="flex items-center justify-center gap-10">
            <div className="flex gap-1 items-center bg-white px-2 py-1 rounded-lg shadow-md">
                <FaUserPen className="text-blue-500 text-2xl"/>
                <p>Editar</p>
            </div>
            <div className="flex gap-1 items-center bg-white px-2 py-1 rounded-lg shadow-md">
                <FaUserXmark className="text-red-500 text-2xl"/>
                <p>Eliminar</p>
            </div>
        </div>
    </div>
  )
}

export default Profile