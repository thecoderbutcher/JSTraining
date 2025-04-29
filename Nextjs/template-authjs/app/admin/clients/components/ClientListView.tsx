import Image from "next/image"


const ClientListView = () => {
  return (
    <div className="px-2 mt-4 w-full">
      <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-lg">
        <Image src="/default-user.webp" alt="clients" width={30} height={30} />
        <p>username lastname</p>
      </div>
    </div>
  )
}

export default ClientListView