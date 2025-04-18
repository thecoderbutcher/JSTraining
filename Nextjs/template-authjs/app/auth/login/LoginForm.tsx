import AuthCardWrapper from "../components/AuthCardWrapper" 

 

const LoginForm = () => {
  return (
    <form action="" className="">
      <AuthCardWrapper headerLabel="Login" backButtonLabel="Back" backButtonLink="/" showSocial={true} >
        <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="example@mail.com" />
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="********" />
        </div>
        <div>errores</div>
        <div className="flex w-auto">
            <button type="submit" className="bg-blue-500 w-full py-2 rounded-xl">Login</button>
        </div>
      </AuthCardWrapper>
    </form>
  )
}

export default LoginForm