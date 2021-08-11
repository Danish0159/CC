import { Link } from 'gatsby'
import React from 'react'
import logo from '../assets/images/logo/logo.png'

const Navbar = () => {
    return (
        <header class="header_area">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-3">
                    <div class="logo">
                        <Link to="/"><img src={logo} /></Link>
                        <a class="nav-bars" href="#"><i class="fas fa-bars"></i></a>
                    </div>
                </div>
                <div class="col-lg-9">
                    {/* -- Main Menu -- */}
                    <div class="menu_area">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/product-services">Products & Services</Link></li>
                            <li><Link to="/contact-us">Contact us</Link></li>
                            <li><Link to="/login">Login/Sign Up</Link></li> 
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Navbar
