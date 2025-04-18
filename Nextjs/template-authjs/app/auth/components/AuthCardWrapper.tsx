import Link from "next/link"
import SocialLogin from "./SocialLogin"

interface AuthCardWrapperProps {
    children: React.ReactNode,
    headerLabel: string,
    backButtonLabel: string,
    backButtonLink: string,
    showSocial?: boolean
}
const AuthCardWrapper = ({children, headerLabel, backButtonLabel, backButtonLink, showSocial}: AuthCardWrapperProps) => {
  return (
    <div className="w-[400px] shadow-md">
        <header>
            {headerLabel}
        </header>
        <main>
            {children}
        </main>
        {showSocial && <SocialLogin />}
        <footer>
            <Link href={backButtonLink}>{backButtonLabel}</Link>
        </footer>
    </div>
  )
}

export default AuthCardWrapper