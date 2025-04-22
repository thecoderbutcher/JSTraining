'use client'
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver }from "@hookform/resolvers/zod"
import { LoginSchema } from "@/schemas"
import { useSearchParams } from "next/navigation"
import { useState, useTransition } from "react"

import AuthCardWrapper from "../components/AuthCardWrapper" 
import FormError from "../components/FormError"
import FormSuccess from "../components/FormSuccess"
import { login } from "../actions/login"

const LoginForm = () => {
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
      login(values)
      .then((data) => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AuthCardWrapper headerLabel="Welcome back" backButtonLabel="Dont have an account" backButtonLink="/auth/register" showSocial={true} >
        <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              {...register("email")}
              name="email"
              disabled={isSubmitting}
              placeholder="example@mail.com" />
              {errors.email && ( <p className="text-sm text-red-500">{errors.email.message}</p> )}
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              {...register("password")}
              disabled={isSubmitting}
              name="password" 
              placeholder="********" />
              {errors.password && ( <p className="text-sm text-red-500">{errors.password.message}</p> )}
        </div> 
        <div className="flex w-auto">
            <button 
              type="submit" 
              className="bg-black text-white w-full py-2 rounded-md"
              disabled={isSubmitting}
            >
              Login
            </button>
        </div>
        <FormError message={error || urlError} />  
        <FormSuccess message={success} />
      </AuthCardWrapper>
    </form>
  )
}

export default LoginForm