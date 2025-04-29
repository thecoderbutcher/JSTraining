import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AddClientForm = () => {
  return (
    <form className='flex flex-col gap-4 bg-white p-4 mx-auto items-center justify-center '>
        <div className='flex items-center justify-center'>
            <Image src={'/default-user.webp'} width={40} height={40} alt='userphoto'/>
            <input type="file" name="" id="" />
        </div>
        <div className='flex flex-col gap-2 mx-auto w-full'> 
            <input type="text" placeholder='Nombres' />
        </div>
        <div className='flex flex-col gap-2 mx-auto w-full'> 
            <input type="text" placeholder='Apellido' />
        </div>
        <div className='flex flex-col gap-2 mx-auto w-full'> 
            <input type="text" placeholder='Dirección' />
        </div>
        <div className='flex flex-col gap-2 mx-auto w-full'> 
            <input type="text" placeholder='Telefono' />
        </div>
        <div className='flex flex-col gap-2 mx-auto w-full'> 
            <input type="text" placeholder='Notas' />
        </div>
        <div className='flex gap-8 items-center '>
            <button  className='bg-black text-white px-2 py-1 rounded-lg'>
                Guardar
            </button>
            <Link href={'/admin/clients'} className='bg-gray-400 text-white px-2 py-1 rounded-lg'>
                Cancelar
            </Link>
        </div>
    </form>
  )
}

export default AddClientForm