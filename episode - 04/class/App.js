import React from 'react'
import ReactDOM from 'react-dom'

// Bare bones of our App
// Header
//     logo
//     nav-items 
// Body 
//     search 
//     restaurant-container 
//         restaurant-card 
// Footer 
//     copyright 
//     links 
//     address 
//     contact 


const Header = () => {
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className="logo" src="https://assets.materialup.com/uploads/48bcfff3-16f2-48fb-b022-1216add0c1ca/preview.jpg" width="200px" height="200px"/>
            </div>

            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const ResCard = () => {
    return(
        <div className='res-card'>
            <h3>Meghana Foods</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='Search'>Search</div>
            <div className='res-container'>
                <ResCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
            <div className='footer'>
                <h3>&copy;some random copyright</h3>  
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)