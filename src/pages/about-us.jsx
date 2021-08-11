import React, {useEffect} from 'react'
import Layout from '../components/Layout'
import hero from '../assets/images/vactor/about-hero.png'
import welcome from '../assets/images/vactor/welcome-ligh.png'
import contact_vector from '../assets/images/vactor/contact-vactor.png'
import AOS from 'aos';
// import "../assets/css/bootstrap.min.css"
// import "../assets/css/normalize.css"
// import "../assets/css/style.css"
// import "../assets/css/responsive.css"

const About = () => {
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
        <section className="full-waypper-area-about">   
                <Layout>
          {/*===============================================
        					Start Hero Content Area Design
                ================================================ */}
          <section className="hero_content_area">
            <div className="container">
              <div className="row">
                {/* Hero Content */}
                <div className="col-lg-5">
                  <div className="hero_content_text" data-aos="fade-up"> 
                    <div className="hero_content">
                      <h1>About Us</h1>
                      <p>Smart Home Safe is a boutique cybersecurity firm with a mission to help people and households protect and defend their Smart Homes against Cybersecurity Attacks.</p>
                      <p>We provide cost-effective cybersecurity solutions for your Home through service subscriptions.</p>
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
          <section className="welcome_seaction_area">
            <div className="container">
              <div className="row">
                {/* Hero Image */}
                <div className="col-lg-6">
                  <div className="welcome_image" data-aos="fade-right">
                    <img src={welcome} alt="Welcome Vactor" />
                  </div>
                </div>
                {/* Hero Image */}
                {/* Hero Content */}
                <div className="col-lg-6">
                  <div className="hero_content" data-aos="fade-left">
                    <small>Welcome</small>
                    <h2>We make your <br />Smart Home Safe</h2>
                    <p>We prevent and protect your Home Network and Devices from Cybersecurity Attacks. Our solutions are designed to protect and secure your Home Network and valuable Digital Information Assets.</p>
                    <p>We can customize Cybersecurity solutions to meet your individual need and the level of protection you desire.</p>
                    <div className="button">
                      <a href="#">Book a Consultation</a>
                    </div>
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
                            Start Our MissionArea Design
                ================================================ */}
          <section className="our_mission_area">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="our_mission_item" data-aos="fade-up-right">
                    <h3>Our Mission</h3>
                    <p>SmartHomeSafe is a boutique firm with a mission to help you protect and defend your Home Network and valuable Digital Information Assets against Cybersecurity Attacks through Subscription Services.</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="our_mission_item" data-aos="fade-up-left">
                    <h3>Our Promise to Customers</h3>
                    <p>SmartHomeSafe promises to provide custom Cybersecurity Solutions based on the level of protection you desire for your Home Network. </p>
                    <p>We promise to advise, guide, educate and provide you with Cybersecurity Solutions for your specific needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*===============================================
                            End Our Mission Area Design
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
        </Layout>
        </section>
      </div>
    )
}

export default About
