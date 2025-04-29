import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex items-center rounded-lg justify-between gap-4 p-4 bg-gray-300">
        <div>
            Detailling
        </div>
        <div className="flex items-center gap-4 font-semibold">
          <Link href="/">Home</Link>
          <Link href="/#services">Servicios</Link>
          <Link href="/#about">Sobre nosotros</Link>
          <Link href="/#contact">Contacto</Link>
        </div>
        <div className="flex items-center gap-4">
            <Link href="/auth/login">Login</Link>
            <Link href="/auth/register">Register</Link>
        </div>
    </div>
  )
}

export default Navbar