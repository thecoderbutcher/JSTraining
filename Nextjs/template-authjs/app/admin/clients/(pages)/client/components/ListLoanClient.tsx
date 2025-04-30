import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const ListLoanClient = () => {
  return (
    <div className='flex flex-col gap-4 mt-2'>
        <Link href={'/admin/loans/quotas'} className='flex items-center justify-between px-4 py-2 bg-white mx-2 rounded-lg shadow-md'>
            <div className='flex flex-col'>
                <p className='text-lg font-semibold'>$TOTAL_LAON</p>
                <p className='font-light text-sm'>Coutas: 1/TOTAL | Intereses: TOTAL%</p>
                <p className='font-light text-sm'>DD/MM/YYYY</p>
            </div>
            <div>
            <div className="text-xl">
                <IoIosArrowForward className="text-gray-500"/> 
            </div>
            </div>
        </Link>
        
    </div>
  )
}

export default ListLoanClient