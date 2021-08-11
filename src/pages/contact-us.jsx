import React, {useEffect} from 'react'
import hero from '../assets/images/vactor/about-hero.png'
import contact_v from '../assets/images/vactor/contact-v.png'
import call from '../assets/images/icon/call.png'
import mail from '../assets/images/icon/mail.png'
import contact_vector from '../assets/images/vactor/contact-vactor.png'
import solutions_1 from '../assets/images/icon/solutions_1.png'
import solutions_2 from '../assets/images/icon/solutions_2.png'
import solutions_3 from '../assets/images/icon/solutions_3.png'
import solutions_4 from '../assets/images/icon/solutions_4.png'
import solutions_5 from '../assets/images/icon/solutions_5.png'
import solutions_6 from '../assets/images/icon/solutions_6.png'
import solutions_7 from '../assets/images/icon/solutions_7.png'
import solutions_8 from '../assets/images/icon/solutions_8.png'
import solutions_9 from '../assets/images/icon/solutions_9.png'
import Layout from '../components/Layout'
import AOS from 'aos';

const ContactUs = () => {
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
        <section className="full-waypper-area-about full-waypper-area-contact"> 
        <Layout>  
          {/*===============================================
        					Start Hero Content Area Design
                ================================================ */}
          <section className="hero_content_area hero_content_area_contact">
            <div className="container">
              <div className="row">
                {/* Hero Content */}
                <div className="col-lg-5">
                  <div className="hero_content_text" data-aos="fade-up"> 
                    <div className="hero_content hero_content_contact">
                      <h1>Contact Us</h1>
                      <p>We provide the right Security Solutions and Services to protect your valuable information assets and your Home Network from Cyber Adversaries and Criminals. We have a mission to make your Smart Home Safe !!</p>
                    </div>
                  </div>
                </div>
                {/* Hero Content */}
                {/* Hero Image */}
                <div className="col-lg-7">
                  <div className="hero_image" data-aos="fade-up">
                    <img src={hero} alt="Hero Vactor" />
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
                            Start We make Area Design
                ================================================ */}
          <section className="contact_make_secion_area">
            <div className="container">
              <div className="row">
                {/* Hero Image */}
                <div className="col-lg-6">
                  <div className="welcome_image" data-aos="fade-right">
                    <img src={contact_v} alt="Welcome Vactor" />
                  </div>
                </div>
                {/* Hero Image */}
                {/* Hero Content */}
                <div className="col-lg-6">
                  <div className="hero_content make_contact_c" data-aos="fade-left">
                    <h1>Make Your Smart Home Safe and Secure</h1>
                    <p>Protect your valuable Digital Assets; defend against Cybersecurity Threats and Attacks.</p>
                    <p>Make your Smart Home Safe and feel rest assured in the Digital Economy.</p>
                    <p>Smart Home Safe Solutions and Services are designed to protect your Home Network and Digital Information Assets.</p>
                  </div>
                </div>
                {/* Hero Content */}
              </div>
            </div>
          </section>
          {/*===============================================
                            End We make Area Design
                ================================================ */}
          {/*===============================================
                            Start Send Us a Message Area Design
                ================================================ */}
          <section className="contact_area">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="c_info" data-aos="fade-down-right">
                    <div className="icon_c">
                      <img src={call} alt="call Icon" />
                    </div>
                    <div className="icon_c_text">
                      <h5>Phone</h5>
                      <a href="callto:(647) 800 2590">(647) 800 2590</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="c_info c_info_mail" data-aos="fade-down-left">
                    <div className="icon_c">
                      <img src={mail} alt="call Icon" />
                    </div>
                    <div className="icon_c_text">
                      <h5>Email</h5>
                      <a href="mailto:info@smarthomesafe.com">info@smarthomesafe.com</a>
                    </div>
                  </div>
                </div>
              </div>
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
          {/*===============================================
                     Start Cybersecurity Solutions Area Design
                ================================================ */}
          <section className="cybersecurity_contact_item_area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="title_hero text-center" data-aos="fade-up">
                    <h3>Cybersecurity Solutions to keep your Smart Home Safe</h3>
                  </div>
                </div>
              </div>
              <div className="row cyber_security_c__area">
                {/* Single Items */}
                <div className="col-lg-4 col-md-6">
                  <div className="cyber_security_c_items" data-aos="fade-up">
                    <img src={solutions_1} alt="protect" />
                    <h4>Endpoint Security</h4>
                  </div>
                </div>
                {/* Single Items */}
                {/* Single Items */}
                <div className="col-lg-4 col-md-6"> 
                  <div className="cyber_security_c_items" data-aos="fade-up">
                    <img src={solutions_2} alt="protect" />
                    <h4>Network Security</h4>
                  </div>
                </div>
                {/* Single Items */}
                {/* Single Items */}
                <div className="col-lg-4 col-md-6">
                  <div className="cyber_security_c_items" data-aos="fade-up">
                    <img src={solutions_3} alt="protect" />
                    <h4>Email Security</h4>
                  </div>
                </div>
                {/* Single Items */}
                {/* Single Items */}
                <div className="col-lg-4 col-md-6">
                  <div className="cyber_security_c_items" data-aos="fade-right">
                    <img src={solutions_4} alt="protect" />
                    <h4>Browser/Internet Security</h4>
                  </div>
                </div>
                {/* Single Items */}
                {/* Single Items */}
                <div className="col-lg-4 col-md-6">
                  <div className="cyber_security_c_items" data-aos="fade-up">
                    <img src={solutions_5} alt="protect" />
                    <h4>Identity &amp; Access Security</h4>
                  </div>
                </div>
                {/* Single Items */}
                {/* Single Items */}
                <div className="col-lg-4 col-md-6">
                  <div className="cyber_security_c_items" data-aos="fade-left">
                    <img src={solutions_6} alt="protect" />
                    <h4>Storage, Files &amp; Folders</h4>
                  </div>
                </div>
                {/* Single Items */}
                {/* Single Items */}
                <div className="col-lg-4 col-md-6">
                  <div className="cyber_security_c_items" data-aos="fade-right">
                    <img src={solutions_7} alt="protect" />
                    <h4>Social Engineering</h4>
                  </div>
                </div>
                {/* Single Items */}
                {/* Single Items */}
                <div className="col-lg-4 col-md-6">
                  <div className="cyber_security_c_items" data-aos="fade-up">
                    <img src={solutions_8} alt="protect" />
                    <h4>24/7 Security Monitoring</h4>
                  </div>
                </div>
                {/* Single Items */}
                {/* Single Items */}
                <div className="col-lg-4 col-md-6">
                  <div className="cyber_security_c_items" data-aos="fade-left">
                    <img src={solutions_9} alt="protect" />
                    <h4>Incident Response &amp; Recovery</h4>
                  </div>
                </div>
                {/* Single Items */}
              </div>
            </div>
          </section>
          {/*===============================================
                      End Cybersecurity Solutions Area Design
                ================================================ */}
                </Layout>
        </section>
      </div>
    )
}

export default ContactUs
