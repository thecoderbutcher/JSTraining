import Navbar from "./components/Navbar"

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
  <div className="flex w-full bg-secondary/10 h-screen text-text/90">
      <Navbar />
      {children}
  </div>
  )
}

export default AuthLayout