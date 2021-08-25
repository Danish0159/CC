import React from 'react'
import card from '../assets/images/vactor/card.webp'
import '../assets/css/fontawesome-all.min.css'
import { Link } from 'gatsby'

{/* <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/20509803.js"></script> */}
// import 'https://use.fontawesome.com/releases/v5.6.3/css/all.css'


const Footer = () => {

    return (
        <footer class="footer_area">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="footer_social">
                                <p>Follow Us</p>
                                <ul>
                                    <li><a href="https://www.facebook.com/Smarthomesafe-102220405497953" target="_blank" rel="noopener"><i class="fab fa-facebook-f" aria-label="Read more about SafeSmartHome on facebook"></i></a></li>
                                    <li><a href="https://twitter.com/mysmarthomesafe" target="_blank" rel="noopener"><i class="fab fa-twitter" aria-label="Read more about SafeSmartHome on twitter"></i></a></li>
                                    <li><a href="https://www.instagram.com/mysmarthomesafe" target="_blank" rel="noopener"><i class="fab fa-instagram" aria-label="Read more about SafeSmartHome on instagram"></i></a></li>
                                    <li><a href="https://biz.yelp.com/home/zd4t8YpeVaWw1jscbJoFBA" target="_blank" rel="noopener"><i class="fab fa-yelp" aria-label="Read more about SafeSmartHome on yelp"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="footer_copyright">
                                <p>Copyright © 2021 SmartHomeSafe - All Rights Reserved.</p>
                                 <Link className="footer__button" to="/our-privacy-policy">Privacy Policy.</Link>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="footer_we_accept">
                                <p>We Accept</p>
                                <img src={card} alt="SmartHomeSafe" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer
