import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div className="flex justify-center gap-4">
        <button className="bg-white  p-2 rounded-lg flex items-center justify-center ">
          <FcGoogle className="h-5 w-5" />  
        </button>
        <button className="bg-white  p-2 rounded-lg flex items-center justify-center ">
          <FaGithub className="h-5 w-5"/>
        </button>
      </div>
  )
}

export default SocialLogin