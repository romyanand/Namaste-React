import { useState } from "react"
import { Link } from "react-router-dom"
const Header = () => {
    const [signedInState, setSignedInState] = useState(false)
    return (
        <div className='header'>
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJ20wR15KtbLojQPuRwW363nu2DJck7h9Mw&usqp=CAU" />
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/cart">Cart</Link>
            <div className="login" onClick={() => {
            setSignedInState(!signedInState)}}>
                <img className="user-profile" src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"/>
                <p>{signedInState ? "Sign Out" : "Sign In"}</p>
            </div>
        </nav>
    </div>
    )
}
export default Header