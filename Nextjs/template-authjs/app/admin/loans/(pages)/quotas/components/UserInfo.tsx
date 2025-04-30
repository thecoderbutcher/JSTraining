import Image from "next/image"

const UserInfo = () => {
  return (
    <div className="flex items-center gap-2">
        <Image src="/default-user.webp" alt="user" width={10} height={10} className=" w-5 h-5"/>
        <p className="text-sm font-bold">USERNAME LASTNAME</p>
    </div>
  )
}

export default UserInfo