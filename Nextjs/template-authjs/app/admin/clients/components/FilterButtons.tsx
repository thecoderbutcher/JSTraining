'use client'
import Link from "next/link";
import Search from "./Search";

import { FaUserPlus } from "react-icons/fa6";
import { LuCalendarArrowUp, LuCalendarArrowDown } from "react-icons/lu";
import { LiaSortAlphaDownSolid, LiaSortAlphaDownAltSolid } from "react-icons/lia";
import { useState } from "react";

const FilterButtons = () => {
  const [isDateFilter, setIsDateFilter] = useState(false);
  const [isAlphaFilter, setIsAlphaFilter] = useState(false);

  return (
    <ul className="flex items-center justify-center gap-2 text-2xl mt-4 px-4 text-gray-700">
        <li className="bg-neutral border border-primary/50 shadow-md px-2 py-2 rounded-md">
          <Link href="/admin/clients/addclient">
            <FaUserPlus />
          </Link>
        </li>
        <li>
          <Search />
        </li>
        <li 
          className="bg-neutral border border-primary/50 shadow-md px-2 py-2 rounded-md"
          onClick={() => setIsAlphaFilter(!isAlphaFilter)}
        >

          { !isAlphaFilter 
            ? <LiaSortAlphaDownSolid /> 
            : <LiaSortAlphaDownAltSolid />
          }
          
        </li>
        <li 
          className="bg-neutral border border-primary/50 shadow-md px-2 py-2 rounded-md"
          onClick={() => setIsDateFilter(!isDateFilter)}
        >
          { !isDateFilter 
            ? <LuCalendarArrowDown/> 
            : <LuCalendarArrowUp/>
          }
        </li>
    </ul>
  )
}

export default FilterButtons