import AddClientForm from "./components/AddClientForm"
import Header from "./components/Header"


const page = () => {
  return (
    <div className="w-full">
      <Header /> 
      <AddClientForm />
    </div>
  )
}

export default page