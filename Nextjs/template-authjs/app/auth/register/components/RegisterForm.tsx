'use client'
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver }from "@hookform/resolvers/zod"
import { LoginSchema } from "@/schemas"
import { useSearchParams } from "next/navigation"
import { useState, useTransition } from "react"

 
import FormError from "../components/FormError"
import FormSuccess from "../components/FormSuccess" 
import AuthCardWrapper from "../../components/AuthCardWrapper"


const RegisterForm = () => {
  const searchParams = useSearchParams()
    const urlError = searchParams.get("error") === 'OAuthAccountNotLinked' ? "Email already in use" : ""
    
    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')
    const [isPending, startTransition] = useTransition()
  
    const {register, handleSubmit, formState:{errors, isSubmitting}} = useForm<z.infer<typeof LoginSchema>>({
      resolver: zodResolver(LoginSchema),
      defaultValues: {
        email: "",
        password: ""
      }
    })
  
    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
      setError('')
      setSuccess('')
  
      startTransition(() => {
         
      })
    }
  return (
    <AuthCardWrapper headerLabel="Create an account" backButtonLabel="Already have an account" backButtonLink="/auth/login">
        <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              {...register("name")}
              name="name"
              disabled={isSubmitting}
              placeholder="John Doe" />
              {errors.email && (<p className="text-sm text-red-500">{errors.email.message}</p>
        )}
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              {...register("email")}
              name="email"
              disabled={isSubmitting}
              placeholder="example@mail.com" />
              {errors.email && (<p className="text-sm text-red-500">{errors.email.message}</p>
        )}
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              {...register("password")}
              disabled={isSubmitting}
              name="password" 
              placeholder="********" />
              {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>)}
        </div> 
        <div className="flex w-auto">
            <button 
              type="submit" 
              className="bg-black text-white w-full py-2 rounded-md"
              disabled={isSubmitting}
            >
              Create an account
            </button>
        </div>
    </AuthCardWrapper>
  )
}

export default RegisterForm