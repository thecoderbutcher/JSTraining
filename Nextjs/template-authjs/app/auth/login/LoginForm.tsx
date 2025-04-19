import AuthCardWrapper from "../components/AuthCardWrapper" 
import FormError from "../components/FormError"
import FormSuccess from "../components/FormSuccess"

 

const LoginForm = () => {
  return (
    <form action="">
      <AuthCardWrapper headerLabel="Welcome back" backButtonLabel="Dont have an account" backButtonLink="/auth/register" showSocial={true} >
        <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="example@mail.com" />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="********" />
        </div> 
        <div className="flex w-auto">
            <button type="submit" className="bg-black text-white w-full py-2 rounded-md">Login</button>
        </div>
        <FormSuccess message="Login successful" />  
        <FormError message="Invalid credentials" />
      </AuthCardWrapper>
    </form>
  )
}

export default LoginForm