import Header from "./components/Header"
import Dashboard from "./dashboard/Dashboard"

const page = async() => { 
  return (
    <div className="flex flex-col w-full"> 
      <Header title="Dashboard"/>
      <Dashboard />
    </div>

  )
}

export default page