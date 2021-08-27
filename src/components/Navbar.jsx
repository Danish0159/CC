import { Link } from "gatsby";
import React, { useState } from "react";
import logo from "../assets/images/logo/logo.png";
import { login } from "../utils/auth";

const Navbar = () => {
  const onLogin = (e) => {
    console.log("env", process.env.GATSBY_AUTH0_DOMAIN);
    e.preventDefault();
    login();
  };
  
  const [show, setShow] = useState(false)
  return (
    <header class="header_area">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3">
            <div class="logo">
              <Link to="/">
                <img src={logo} alt="SmartHomeSafe" />
              </Link>
              {/*  */}
              <a class="nav-bars" href="#" onClick={() => setShow(!show)}>
                <i class="fas fa-bars"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-9">
            {/* <!-- Top Social Icon --> */}
            <div class="social_top_icons">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/Smarthomesafe-102220405497953"
                    target="_blank"
                    rel="noopener"
                  >
                    <i id="top_icons" class="fab fa-facebook-f" aria-label="Read more about SafeSmartHome on facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/mysmarthomesafe" target="_blank" rel="noopener">
                    <i id="top_icons" class="fab fa-twitter" aria-label="Read more about SafeSmartHome on twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/mysmarthomesafe"
                    target="_blank"
                    rel="noopener"
                  >
                    <i id="top_icons" class="fab fa-instagram" aria-label="Read more about SafeSmartHome on instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://biz.yelp.com/home/zd4t8YpeVaWw1jscbJoFBA"
                    target="_blank"
                    rel="noopener"
                  >
                    <i id="top_icons" class="fab fa-yelp" aria-label="Read more about SafeSmartHome on yelp"></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- Top Social Icon --> */}
            {/* -- Main Menu -- */}
            {/* menu_area */}
            <div className={show? "menu_area active": "menu_area"} >
              <ul>
                <li>
                  <Link activeClassName="active" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/product-services">Products & Services</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li className="actionLink">
                  <a href="#" onClick={onLogin}>
                    Login/Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
