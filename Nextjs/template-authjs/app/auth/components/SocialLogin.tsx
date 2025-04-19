import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div className="flex justify-center gap-4">
        <button className="bg-white  p-2 rounded-lg flex items-center justify-center border border-gray-100 shadow w-full">
          <FcGoogle className="h-5 w-5" />  
        </button>
        <button className="bg-white  p-2 rounded-lg flex items-center justify-center border border-gray-100 shadow w-full">
          <FaGithub className="h-5 w-5"/>
        </button>
      </div>
  )
}

export default SocialLogin