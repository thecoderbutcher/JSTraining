import SocialLogin from "./SocialLogin"

const LoginForm = () => {
  return (
    <form action="" className=" flex flex-col w-[400px] space-y-6 bg-blue-200 p-8 rounded-xl">
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
      <SocialLogin />
      <div>no have</div>
    </form>
  )
}

export default LoginForm