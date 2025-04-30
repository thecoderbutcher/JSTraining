
import ClientListView from "./components/ClientListView"
import FilterStatus from "./components/FilterStatus"
import Header from "../components/Header" 
import Topbar from "./components/Topbar"

const page = () => {
  return (
    <div className="flex flex-col w-full">
      <Header title="Clientes" url="/admin"/>
      <Topbar />
      <FilterStatus />
      <ClientListView /> 
    </div>
  )
}

export default page