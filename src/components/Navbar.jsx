import { Link } from 'gatsby'
import React from 'react'
import logo from '../assets/images/logo/logo.png'
import {login, getProfile} from '../utils/auth'

const Navbar = () => {
  
    const onLogin = (e) => {
        console.log('env', process.env.GATSBY_AUTH0_DOMAIN)
        e.preventDefault();
        login()
    }
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
                       {/* <!-- Top Social Icon --> */}
                                <div class="social_top_icons">
                                    <ul>
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i class="fab fa-yelp"></i></a></li>
                                    </ul>
                                </div>
                                {/* <!-- Top Social Icon --> */}
                    {/* -- Main Menu -- */}
                    <div class="menu_area">
                        <ul>
                            <li><Link activeClassName="active" to="/">Home</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/product-services">Products & Services</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                            <li className="actionLink"><a href='#' onClick={onLogin} >Login/Sign Up</a></li> 
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Navbar
