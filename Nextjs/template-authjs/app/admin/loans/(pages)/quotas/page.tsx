import Header from "@/app/admin/components/Header"
import TopInfo from "./components/TopInfo"
import ButtonDetails from "./components/ButtonDetails" 
import ListsQuotas from "./components/ListsQuotas"

const page = () => {
  return (
    <div className="flex flex-col w-full">
      <Header title="Cuotas: client_id" url="/admin/clients/client" />
      <TopInfo />
      <ButtonDetails />
      <ListsQuotas />
    </div>
  )
}

export default page