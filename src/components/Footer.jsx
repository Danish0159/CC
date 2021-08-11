import React from 'react'
import card from '../assets/images/vactor/card.png'

const Footer = () => {
    return (
        <footer class="footer_area">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="footer_social">
                                <p>Follow Us</p>
                                <ul>
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i class="fab fa-yelp"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="footer_copyright">
                                <p>Copyright © 2021 SmartHomeSafe - All Rights Reserved.</p>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="footer_we_accept">
                                <p>We Accept</p>
                                <img src={card} alt="Welcome Vactor" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer
