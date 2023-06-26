import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    const menu = document.getElementById('mobile-menu');
    
    return (
        <div className='nav-container'>
            <nav className='navbar'>
                <h1 id='navbar-logo'>Notes</h1>
                <div className="menu-toggle" id="mobile-menu">
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
                <ul className="nav-menu">
                    {/* <li><a href="#" className="nav-links">Home</a></li> */}
                    {/* <li><a href="#" className="nav-links">About Us</a></li> */}
                    <li><a href="#" className="nav-links nav-links-btn">Login</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar