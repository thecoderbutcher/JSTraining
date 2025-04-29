import Navbar from "./components/Navbar"

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
  <div className="flex w-full h-screen">
      <Navbar />
      {children}
  </div>
  )
}

export default AuthLayout