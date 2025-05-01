import Header from "@/app/admin/components/Header" 
import FormAddLoan from "./components/FormAddLoan"


const page = () => {
  return (
    <div className="flex flex-col w-full bg-neutral">
      <Header title="Agregar prestamos" url="/admin/loans" />
      <FormAddLoan />
    </div>
  )
}

export default page