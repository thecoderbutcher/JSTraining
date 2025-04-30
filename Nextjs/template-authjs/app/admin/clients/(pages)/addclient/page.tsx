import Header from "@/app/admin/components/Header"
import AddClientForm from "./components/AddClientForm"


const page = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <Header title="Agregar Cliente" url="/admin/clients" /> 
      <AddClientForm />
    </div>
  )
}

export default page