import Image from "next/image"

const Header = () => {
  return (
    <div>
        <div>
            <Image src={'/default-user.webp'} alt="user defaul" width={20} height={20}/>
            <p>USERNAME LASTNAME</p>
        </div>
        <div>
            <p>TOTAL_LOAN</p>
            <p>TOTAL_INTERES</p>
        </div>
    </div>
  )
}

export default Header