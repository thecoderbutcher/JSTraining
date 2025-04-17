import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-4 p-4">
        <div>
            logo
        </div>
        <div className="flex items-center gap-4">
            <Link href="/auth/login">Login</Link>
            <Link href="/register">Register</Link>
        </div>
    </div>
  )
}

export default Navbar