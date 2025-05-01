import Link from "next/link" 

interface AuthCardWrapperProps {
    children: React.ReactNode,
    headerLabel: string,
    backButtonLabel: string,
    backButtonLink: string,
    showSocial?: boolean
}
const AuthCardWrapper = ({children, headerLabel, backButtonLabel, backButtonLink}: AuthCardWrapperProps) => {
  return (
    <div className="flex flex-col gap-4 space-y-4 p-4 w-[400px] shadow-md rounded-md bg-white ">
        <header className="text-sm text-gray-400 text-center pt-2">
            <h2 className="text-gray-700 font-bold text-2xl py-2 ">🔐 App Name</h2>
            <p>{headerLabel}</p>
        </header>
        <main className="flex flex-col space-y-6">
            {children}
        </main> 
        <footer className="text-sm text-gray-600 text-center">
            <Link href={backButtonLink}>{backButtonLabel}</Link>
        </footer>
    </div>
  )
}

export default AuthCardWrapper