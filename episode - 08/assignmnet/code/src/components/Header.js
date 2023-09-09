import { useState } from 'react'
import { LOGO_URL } from "../utils/config"
import { Link } from 'react-router-dom'

const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login")

    return (
        <div className="header">
            <div className="logo">
                <img src= {LOGO_URL}/>
            </div>
            <div className="nav-bar">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <h4>Cart</h4>
            </div>
            <div className="login">
                <button className="login-btn" onClick={() => {
                    loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
                }}>{loginBtn}</button>
            </div> 
        </div>
    )
}
export default Header