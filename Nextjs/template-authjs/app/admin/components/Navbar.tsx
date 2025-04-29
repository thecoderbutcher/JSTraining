import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { IoPeopleSharp, IoSettingsSharp, IoMenu } from "react-icons/io5";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 p-4 bg-gray-300 rounded-t-xl w-full text-3xl">
      <ul className="flex gap-12 w-full justify-center">
        <li>
          <Link href="/admin">
            <MdDashboard />
          </Link>
        </li>
        <li>
          <Link href="/admin/clients">
            <IoPeopleSharp />
          </Link>
        </li>
        <li>
          <Link href="/menu">
            <FaMoneyCheckDollar />
          </Link>
        </li>
        <li>
          <Link href="/admin/profile">
            <IoSettingsSharp />
          </Link>
        </li>
        <li>
          <Link href="/menu">
            <IoMenu />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar