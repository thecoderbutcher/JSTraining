import Image from "next/image"; 
import Link from "next/link";
import { FaMoneyBillTransfer } from "react-icons/fa6"; 
import { MdModeEdit, MdBlock } from "react-icons/md";


const Profile = () => {
  return (
    <div className='flex flex-col gap-4 bg-white p-4 rounded-b-4xl shadow-lg'>
        <div className='flex gap-2 items-start justify-between'> 
            <div className="flex items-center  gap-2 h-full w-full">
                <div className="bg-gray-300 px-4 rounded-md h-full flex items-center">
                    <Image src="/default-user.webp" alt="clients" width={40} height={40} />
                </div>
                <div className="flex flex-col">
                    <p className="font-bold">USERNAME LASTNAME</p>
                    <p className="text-sm font-light">address street numbres</p>
                    <p className="text-sm font-light">phone number</p>
                    <p className="text-sm font-light">address street numbers</p>
                </div>
            </div>
            <div className="flex gap-4 flex-col text-2xl">
                <div className="bg-neutral border border-primary p-1 rounded-md shadow-md">
                    <MdModeEdit className="text-primary/80"/>
                </div>
                <div className="bg-neutral border border-primary p-1 rounded-md shadow-md">
                    <MdBlock className="text-error/80"/>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center gap-10">
            <Link href={'/admin/loans/add'} className="flex items-center bg-primary/80 gap-1 text-neutral border border-primary px-2 py-1 rounded-lg shadow-md">
                <FaMoneyBillTransfer className="text-2xl"/>
                <p>Agregar prestamo</p>
            </Link>
        </div>
    </div>
  )
}

export default Profile