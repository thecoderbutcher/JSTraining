import AuthCardWrapper from "../../components/AuthCardWrapper"
import { BsExclamationTriangle } from "react-icons/bs"
const ErrorCard = () => {
  return (
    <AuthCardWrapper headerLabel="Something went wrong" backButtonLabel="Go back" backButtonLink="/auth/login">
        <p className="flex gap-2 justify-center text-base text-gray-500">
            <BsExclamationTriangle className="text-2xl text-orange-300"/>
            Something went wrong, please try again
        </p>
    </AuthCardWrapper>
  )
}

export default ErrorCard