import { useState } from 'react'
import { LOGO_URL } from "../utils/config"

const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login")

    return (
        <div className="header">
            <div className="logo">
                <img src= {LOGO_URL}/>
            </div>
            <div className="nav-bar">
                <h4>Home</h4>
                <h4>About Us</h4>
                <h4>Contact Us</h4>
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