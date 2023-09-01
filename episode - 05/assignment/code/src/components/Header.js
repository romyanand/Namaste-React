import { LOGO_URL } from '../utils/config'

const Header = () => {
    return(
        <div className='header'>
            <div className='logo'>
                <img src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <h4>Home</h4>
                <h4>About Us</h4>
                <h4>Contact Us</h4>
                <h4>Cart</h4>
            </div>
        </div>
    )       
}

export default Header;