'use client'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
const SocialLogin = () => {
  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, {
        callbackUrl: DEFAULT_LOGIN_REDIRECT,
    })
}
  return (
    <div className="flex justify-center gap-4">
        <button 
          className="bg-white  p-2 rounded-lg flex items-center justify-center border border-gray-100 shadow w-full"
          onClick={() => onClick('google')}  
        >
          <FcGoogle className="h-5 w-5" />  
        </button>
        <button 
          className="bg-white  p-2 rounded-lg flex items-center justify-center border border-gray-100 shadow w-full"
          onClick={() => onClick('github')}
        >
          <FaGithub className="h-5 w-5"/>
        </button>
      </div>
  )
}

export default SocialLogin