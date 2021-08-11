import React, {useEffect} from 'react'
import contact_vector from '../assets/images/vactor/contact-vactor.png'
import hero_lock from '../assets/images/product/hero-lock.png'
import lock_2 from '../assets/images/product/lock-2.png'
import monitor from '../assets/images/product/monitor.png'
import solutions_2 from '../assets/images/icon/solutions_2.png'
import solutions_3 from '../assets/images/icon/solutions_3.png'
import solutions_4 from '../assets/images/icon/solutions_4.png'
import solutions_5 from '../assets/images/icon/solutions_5.png'
import solutions_6 from '../assets/images/icon/solutions_6.png'
import solutions_7 from '../assets/images/icon/solutions_7.png'
import solutions_8 from '../assets/images/icon/solutions_8.png'
import solutions_9 from '../assets/images/icon/solutions_9.png'
import network from '../assets/images/product/network.png'
import email from '../assets/images/product/email.png'
import browser_security from '../assets/images/product/browser-security.png'
import internet_access from '../assets/images/product/internet-access.png'
import file from '../assets/images/product/file.png'
import social from '../assets/images/product/social.png'
import security from '../assets/images/product/security.png'
import recovery from '../assets/images/product/recovery.png'

import Layout from '../components/Layout'
import AOS from 'aos';

const ProductServices = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        delay: 50,
        once: true
        });
        AOS.refresh();
    }, [])
    return (
        <div className="full-waypper">
        <section className="full-waypper-area-about full-waypper-area-product-services">
            <Layout>
          {/*===============================================
        					Start Hero Content Area Design
                ================================================ */}
          <section className="hero_content_product">
            <div className="container">
              <div className="row">
                {/* Hero Content */}
                <div className="col-lg-5">
                  <div className="hero_content_home" data-aos="fade-up">
                    <h1>Products &amp; Services</h1>
                    <p>Cybersecurity Solutions made simple for your Home Network. Keep your Smart Home Safe.</p>
                  </div>
                </div>
                {/* Hero Content */}
                {/* Hero Image */}
                <div className="col-lg-7">
                  <div className="hero_image hero_image_home" data-aos="fade-up">
                    <img src={hero_lock} alt="Hero Vactor" />
                  </div>
                </div>
                {/* Hero Image */}
              </div>
            </div>
          </section>
          {/*===============================================
        					End Hero Content Area Design
                ================================================ */}
          {/*===============================================
                        Start We identify Area Design
            ================================================ */}
          <section className="lock_tala_secion_area algin-item-center pt_0">
            <div className="container">
              <div className="row">
                {/* Hero Image */}
                <div className="col-lg-6">
                  <div className="product_singel_image mb_40" data-aos="fade-up">
                    <img src={lock_2} alt="lock Vactor" />
                  </div>
                </div>
                {/* Hero Image */}
                {/* Hero Image */}
                {/* Single solutions */}
                <div className="col-lg-6">
                  <div className="product_singel_item" data-aos="fade-up">
                    <img src={monitor} alt="protect" />
                    <h4>Endpoint &amp; Device Security</h4>
                    <p>We provide cost-effective Endpoint Security to secure entry points of end-user devices such as desktops, laptops, and mobile devices from being exploited by malicious actors and cybersecurity adversaries. Our Endpoint security services protect your endpoints on your home network and while you roam.</p>
                    <div className="button">
                      <a href="#">Subscribe</a>
                    </div>
                  </div>
                </div>
                {/* Single solutions */}
                {/* Hero Image */}
              </div>
            </div>
          </section>
          {/*===============================================
                            End We identify Area Design
             ================================================ */}
          {/*===============================================
                        Start product Details Design
            ================================================ */}
          <section className="lock_tala_secion_area algin-item-center bg_gray ">
            <div className="container">
              <div className="row">
                {/* Single product */}
                <div className="col-lg-6">
                  <div className="product_singel_item mb_40" data-aos="fade-up">
                    <img src={solutions_2} alt="icon" />
                    <h4>Network Security</h4>
                    <p>Our Network Security solutions and services protects your home network and data from breaches, intrusions and other threats. Our solutions and services involve vulnerability scanning of your home network, devices and software, remote access to other networks and providing network analytics to pro-actively identify cybersecurity threats to your home and personal information.</p>
                    <div className="button">
                      <a href="#">Subscribe</a>
                    </div>
                  </div>
                </div>
                {/* Single product */}
                {/* Hero Image */}
                <div className="col-lg-6">
                  <div className="product_singel_image" data-aos="fade-up">
                    <img src={network} alt="lock Vactor" />
                  </div>
                </div>
                {/* Hero Image */}
              </div>
            </div>
          </section>
          {/*===============================================
                            End product Details  Design
            ================================================ */}
          {/*===============================================
                        Start We identify Area Design
            ================================================ */}
          <section className="lock_tala_secion_area algin-item-center">
            <div className="container">
              <div className="row">
                {/* Hero Image */}
                <div className="col-lg-6">
                  <div className="product_singel_image mb_40" data-aos="fade-up">
                    <img src={email} alt="lock Vactor" />
                  </div>
                </div>
                {/* Hero Image */}
                {/* Hero Image */}
                {/* Single solutions */}
                <div className="col-lg-6">
                  <div className="product_singel_item" data-aos="fade-up">
                    <img src={solutions_3} alt="protect" />
                    <h4>Email Security</h4>
                    <p>Our Email Security solutions and services will protect email content and accounts against unauthorized access. This includes login security, spam filtering, user security, user education, and email encryption. Email attacks are more prevalent and sophisticated than ever before. We are here to protect you.</p>
                    <div className="button">
                      <a href="#">Subscribe</a>
                    </div>
                  </div>
                </div>
                {/* Single solutions */}
                {/* Hero Image */}
              </div>
            </div>
          </section>
          {/*===============================================
                            End We identify Area Design
             ================================================ */}
          {/*===============================================
                        Start product Details Design
            ================================================ */}
          <section className="lock_tala_secion_area algin-item-center bg_gray ">
            <div className="container">
              <div className="row">
                {/* Single product */}
                <div className="col-lg-6">
                  <div className="product_singel_item mb_40" data-aos="fade-up">
                    <img src={solutions_4} alt="icon" />
                    <h4>Browser/Internet Security</h4>
                    <p>Our solutions will provide you with Safe Browsers and ensure secure Browser configuration to help prevent attacks and stop third-party tools, like cookies. Cookies collect your private information, like the websites you've visited, usernames and passwords, and other tracking data.</p>
                    <div className="button">
                      <a href="#">Subscribe</a>
                    </div>
                  </div>
                </div>
                {/* Single product */}
                {/* Hero Image */}
                <div className="col-lg-6">
                  <div className="product_singel_image" data-aos="fade-up">
                    <img src={browser_security} alt="lock Vactor" />
                  </div>
                </div>
                {/* Hero Image */}
              </div>
            </div>
          </section>
          {/*===============================================
                            End product Details  Design
            ================================================ */}
          {/*===============================================
                        Start We identify Area Design
            ================================================ */}
          <section className="lock_tala_secion_area algin-item-center">
            <div className="container">
              <div className="row">
                {/* Hero Image */}
                <div className="col-lg-6">
                  <div className="product_singel_image mb_40" data-aos="fade-up">
                    <img src={internet_access} alt="lock Vactor" />
                  </div>
                </div>
                {/* Hero Image */}
                {/* Hero Image */}
                {/* Single solutions */}
                <div className="col-lg-6">
                  <div className="product_singel_item" data-aos="fade-up">
                    <img src={solutions_5} alt="protect" />
                    <h4>Identity &amp; Access Security</h4>
                    <p>Our Identify and Access Security solutions is an essential part to protect your Identity and access to your passwords and secrets. Our solutions will protect your digital identities and access to data, applications, and resources within your home network and devices. Our solution will ensure Multi-factor authentication and strong encryption is in place for access to your personal and digital assets.</p>
                    <div className="button">
                      <a href="#">Subscribe</a>
                    </div>
                  </div>
                </div>
                {/* Single solutions */}
                {/* Hero Image */}
              </div>
            </div>
          </section>
          {/*===============================================
                            End We identify Area Design
             ================================================ */}
          {/*===============================================
                        Start product Details Design
            ================================================ */}
          <section className="lock_tala_secion_area algin-item-center bg_gray ">
            <div className="container">
              <div className="row">
                {/* Single product */}
                <div className="col-lg-6">
                  <div className="product_singel_item mb_40" data-aos="fade-up">
                    <img src={solutions_6} alt="icon" />
                    <h4>Storage, Files &amp; Folders </h4>
                    <p>We provide File integrity monitoring (FIM) solutions that will test and check your files and folders, storage drives, and application software files to determine whether or not they have been tampered with or corrupted. Our solution will verify and validate these files by comparing the latest versions of them to a known, trusted “baseline.” You can be assured to be alerted if there has been an attempt of unauthorized access to your personal and valuable information.</p>
                    <div className="button">
                      <a href="#">Subscribe</a>
                    </div>
                  </div>
                </div>
                {/* Single product */}
                {/* Hero Image */}
                <div className="col-lg-6">
                  <div className="product_singel_image" data-aos="fade-up">
                    <img src={file} alt="lock Vactor" />
                  </div>
                </div>
                {/* Hero Image */}
              </div>
            </div>
          </section>
          {/*===============================================
                            End product Details  Design
            ================================================ */}
          {/*===============================================
                        Start We identify Area Design
            ================================================ */}
          <section className="lock_tala_secion_area algin-item-center">
            <div className="container">
              <div className="row">
                {/* Hero Image */}
                <div className="col-lg-6">
                  <div className="product_singel_image mb_40" data-aos="fade-up">
                    <img src={social} alt="lock Vactor" />
                  </div>
                </div>
                {/* Hero Image */}
                {/* Hero Image */}
                {/* Single solutions */}
                <div className="col-lg-6">
                  <div className="product_singel_item" data-aos="fade-up">
                    <img src={solutions_7} alt="protect" />
                    <h4>Social Engineering</h4>
                    <p>We protect you against Cybercriminals who try to steal your valuable information assets through Phishing attacks.</p>
                    <div className="button">
                      <a href="#">Subscribe</a>
                    </div>
                  </div>
                </div>
                {/* Single solutions */}
                {/* Hero Image */}
              </div>
            </div>
          </section>
          {/*===============================================
                            End We identify Area Design
             ================================================ */}
          {/*===============================================
                        Start product Details Design
            ================================================ */}
          <section className="lock_tala_secion_area algin-item-center bg_gray ">
            <div className="container">
              <div className="row">
                {/* Single product */}
                <div className="col-lg-6">
                  <div className="product_singel_item mb_40" data-aos="fade-up">
                    <img src={solutions_8} alt="icon" />
                    <h4>24/7 Security Monitoring</h4>
                    <p>We provide 24/7 Security Monitoring of your Home Network to ensure that your Smart Home is protected from Cyber Threats.</p>
                    <div className="button">
                      <a href="#">Subscribe</a>
                    </div>
                  </div>
                </div>
                {/* Single product */}
                {/* Hero Image */}
                <div className="col-lg-6">
                  <div className="product_singel_image" data-aos="fade-up">
                    <img src={security} alt="lock Vactor" />
                  </div>
                </div>
                {/* Hero Image */}
              </div>
            </div>
          </section>
          {/*===============================================
                            End product Details  Design
            ================================================ */}
          {/*===============================================
                        Start product Details Design
            ================================================ */}
          <section className="lock_tala_secion_area algin-item-center ">
            <div className="container">
              <div className="row">
                {/* Hero Image */}
                <div className="col-lg-6">
                  <div className="product_singel_image mb_40" data-aos="fade-up">
                    <img src={recovery} alt="lock Vactor" />
                  </div>
                </div>
                {/* Hero Image */}
                {/* Single product */}
                <div className="col-lg-6">
                  <div className="product_singel_item " data-aos="fade-up">
                    <img src={solutions_9} alt="icon" />
                    <h4>Incident Response &amp; Recovery</h4>
                    <p>Our services ensure that you are prepared and able to respond and recover quickly in the event of a Cybsercurity attack.</p>
                    <div className="button">
                      <a href="#">Subscribe</a>
                    </div>
                  </div>
                </div>
                {/* Single product */}
              </div>
            </div>
          </section>
          {/*===============================================
                            End product Details  Design
            ================================================ */}
          {/*===============================================
                            Start Send Us a Message Area Design
                ================================================ */}
          <section className="contact_area">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact_from_area" data-aos="fade-down-right">
                    <h3>Send Us a Message</h3>
                    <div className="contact_from_input">
                      <form action>
                        <div className="row">
                          {/* Single input */}
                          <div className="col-12">
                            <div className="single_input">
                              <input type="text" placeholder="Full Name" />
                            </div>
                          </div>
                          {/* Single input */}
                          {/* Single input */}
                          <div className="col-lg-6">
                            <div className="single_input">
                              <input type="text" placeholder="Phone" />
                            </div>
                          </div>
                          {/* Single input */}
                          {/* Single input */}
                          <div className="col-lg-6">
                            <div className="single_input">
                              <input type="email" placeholder="Email" />
                            </div>
                          </div>
                          {/* Single input */}
                          {/* Single input */}
                          <div className="col-12">
                            <div className="single_input">
                              <textarea name id placeholder="Message" defaultValue={""} />
                            </div>
                          </div>
                          {/* Single input */}
                          {/* Submit Button */}
                          <div className="col-12">
                            <div className="Submit_button">
                              <button type="submit">SEND</button>
                            </div>
                          </div>
                          {/* Submit Button */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact_image" data-aos="fade-down-left">
                    <img src={contact_vector} alt="Welcome Vactor" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*===============================================
                            End Send Us a Message Area Design
                ================================================ */}
                </Layout>
        </section>
      </div>
    )
}

export default ProductServices
