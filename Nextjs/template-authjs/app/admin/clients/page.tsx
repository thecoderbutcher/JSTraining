import ClientListView from "./components/ClientListView"
import FilterStatus from "./components/FilterStatus"
import Header from "./components/Header"

const page = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <FilterStatus />
      <ClientListView />
    </div>
  )
}

export default page