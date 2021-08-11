import * as React from "react"
import home_hero from '../assets/images/vactor/home-hero-vactor.png'
import protect from '../assets/images/icon/protect.png'
import email from '../assets/images/icon/email.png'
import internet from '../assets/images/icon/internet.png'
import cyberscurity from '../assets/images/vactor/cyberscurity.png'
import solutions_1 from '../assets/images/icon/solutions_1.png'
import solutions_2 from '../assets/images/icon/solutions_2.png'
import solutions_3 from '../assets/images/icon/solutions_3.png'
import solutions_4 from '../assets/images/icon/solutions_4.png'
import solutions_5 from '../assets/images/icon/solutions_5.png'
import solutions_6 from '../assets/images/icon/solutions_6.png'
import solutions_7 from '../assets/images/icon/solutions_7.png'
import solutions_8 from '../assets/images/icon/solutions_8.png'
import solutions_9 from '../assets/images/icon/solutions_9.png'
import contact_vactor from '../assets/images/vactor/contact-vactor.png'
// import "../assets/css/bootstrap.min.css"
// import "../assets/css/normalize.css"
// import "../assets/css/style.css"
// import "../assets/css/responsive.css"
import Layout from "../components/Layout"
import AOS from 'aos';
// import "aos/dist/aos.css";

// markup
const IndexPage = () => {

  const [formState, setFormState] = React.useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "home", ...formState })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  }

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
      once: true
    });
    AOS.refresh();
  }, [])
  return (
    <div className="full-waypper">
      <section className="full-waypper-area-about full-waypper-area-home">
        <Layout>
          {/*===============================================
        					Start Hero Content Area Design
                ================================================ */}
          <section className="hero_content_area">
            <div className="container">
              <div className="row">
                {/* Hero Content */}
                <div className="col-lg-5">
                  <div className="hero_content_home" data-aos="fade-up">
                    <h1>Your Smarthome is <br />Secure with us</h1>
                    <div className="button_home">
                      <a href="#">Book a Consultation</a>
                    </div>
                  </div>
                </div>
                {/* Hero Content */}
                {/* Hero Image */}
                <div className="col-lg-7">
                  <div className="hero_image hero_image_home" data-aos="fade-up">
                    <img src={home_hero} alt="Hero Vactor" />
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
          <section className="welcome_seaction_area home_Cybersecurity_identify">
            <div className="container">
              <div className="row">
                <div className="offset-lg-2 col-lg-8">
                  {/* Content */}
                  <div className="title_hero text-center" data-aos="fade-up">
                    <p>We identify, detect, protect and defend against Cybersecurity Attacks.</p>
                    <h3>Let Us Protect and Defend your Smart Home from Cybersecurity Attacks</h3>
                  </div>
                  {/* Content */}
                  <div className="servier_hero_item">
                    {/* Item */}
                    <div className="single_item" data-aos="fade-right">
                      <img src={protect} alt="protect" />
                      <p>Endpoint Security</p>
                    </div>
                    {/* Item */}
                    {/* Item */}
                    <div className="single_item" data-aos="fade-up">
                      <img src={email} alt="email" />
                      <p>Email Security</p>
                    </div>
                    {/* Item */}
                    {/* Item */}
                    <div className="single_item" data-aos="fade-left">
                      <img src={internet} alt="internet" />
                      <p>Internet Security</p>
                    </div>
                    {/* Item */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*===============================================
                            End We identify Area Design
                ================================================ */}
          {/*===============================================
                        Start Cybersecurity Solutions Area Design
            ================================================ */}
          <section className="welcome_seaction_area home_Cybersecurity">
            <div className="container">
              <div className="row">
                {/* Hero Image */}
                <div className="col-lg-6">
                  <div className="welcome_image" data-aos="fade-right">
                    <img src={cyberscurity} alt="cyberscurity Vactor" />
                  </div>
                </div>
                {/* Hero Image */}
                {/* Hero Content */}
                <div className="col-lg-6">
                  <div className="hero_home_content" data-aos="fade-left">
                    <h3>Cybersecurity Solutions for your Smart Home</h3>
                    <p>We provide cost-effective solutions to secure entry points of end-user Devices such
                      as desktops, laptops, and mobile devices from being exploited by malicious actors
                      and cybersecurity adversaries.</p>
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
                    End Cybersecurity Solutions Area Design
                ================================================ */}
          {/*===============================================
                        Start We identify Area Design
                 ================================================ */}
          <section className="Solutions_home_secion">
            <div className="container">
              <div className="row">
                <div className="offset-lg-2 col-lg-8">
                  {/* Content */}
                  <div className="title_hero text-center" data-aos="fade-up">
                    <p>Our Solutions</p>
                    <h3>Choose and Subscribe to Cybersecurity Solutions for your Smart Home</h3>
                  </div>
                </div>
              </div>
              <div className="row solutions_single_item_f_area">
                {/* Single solutions */}
                <div className="col-lg-4 col-md-6">
                  <div className="solutions_single_item" data-aos="fade-up">
                    <img src={solutions_1} alt="protect" />
                    <h4>Endpoint &amp; Device Security</h4>
                    <p>We provide cost-effective Endpoint Security to secure entry points of end-user
                      devices such as desktops, laptops, and mobile devices from being exploited by
                      malicious actors and cybersecurity adversaries.</p>
                  </div>
                </div>
                {/* Single solutions */}
                {/* Single solutions */}
                <div className="col-lg-4 col-md-6">
                  <div className="solutions_single_item" data-aos="fade-up">
                    <img src={solutions_2} alt="protect" />
                    <h4>Network Security</h4>
                    <p>Our Network Security solutions and services protect your home network and data from
                      breaches, intrusions, and other threats. Our solutions involve vulnerability
                      scanning and patch management of your home network, devices, and software.</p>
                  </div>
                </div>
                {/* Single solutions */}
                {/* Single solutions */}
                <div className="col-lg-4 col-md-6">
                  <div className="solutions_single_item" data-aos="fade-up">
                    <img src={solutions_3} alt="protect" />
                    <h4>Email Security</h4>
                    <p>Our Email Security solutions will protect your email content and accounts against
                      unauthorized access. This includes login security, spam filtering, user security,
                      user education, and email encryption.</p>
                  </div>
                </div>
                {/* Single solutions */}
                {/* Single solutions */}
                <div className="col-lg-4 col-md-6">
                  <div className="solutions_single_item" data-aos="fade-right">
                    <img src={solutions_4} alt="protect" />
                    <h4>Browser/Internet Security</h4>
                    <p>Our solutions will provide you with Safe Browsers and ensure secure Browser
                      configuration to help prevent attacks and stop third-party tools and unwanted
                      cookies from collecting private information.</p>
                  </div>
                </div>
                {/* Single solutions */}
                {/* Single solutions */}
                <div className="col-lg-4 col-md-6">
                  <div className="solutions_single_item" data-aos="fade-up">
                    <img src={solutions_5} alt="protect" />
                    <h4>Identity &amp; Access Security</h4>
                    <p>Our Identity and Access Security solutions will be is an essential part to protect
                      your identity and access to your passwords and secrets. Our solutions will protect
                      your digital identities and unauthorized access to your data, applications, and
                      resources within your home network.</p>
                  </div>
                </div>
                {/* Single solutions */}
                {/* Single solutions */}
                <div className="col-lg-4 col-md-6">
                  <div className="solutions_single_item" data-aos="fade-left">
                    <img src={solutions_6} alt="protect" />
                    <h4>Storage, Files &amp; Folders</h4>
                    <p>We provide File integrity monitoring (FIM) solutions that will test and check your
                      files and folders, storage drives, and application software files to determine
                      whether or not they have been tampered with or corrupted.</p>
                  </div>
                </div>
                {/* Single solutions */}
                {/* Single solutions */}
                <div className="col-lg-4 col-md-6">
                  <div className="solutions_single_item" data-aos="fade-right">
                    <img src={solutions_7} alt="protect" />
                    <h4>Social Engineering</h4>
                    <p>We protect you against Cybercriminals who try to steal your valuable information
                      assets through Phishing attacks.</p>
                  </div>
                </div>
                {/* Single solutions */}
                {/* Single solutions */}
                <div className="col-lg-4 col-md-6">
                  <div className="solutions_single_item" data-aos="fade-up">
                    <img src={solutions_8} alt="protect" />
                    <h4>24/7 Security Monitoring</h4>
                    <p>We provide 24/7 Security Monitoring For your Home Network to ensure that your Smart
                      Home is protected from Cyber Threats.</p>
                  </div>
                </div>
                {/* Single solutions */}
                {/* Single solutions */}
                <div className="col-lg-4 col-md-6">
                  <div className="solutions_single_item" data-aos="fade-left">
                    <img src={solutions_9} alt="protect" />
                    <h4>Incident Response &amp; Recovery</h4>
                    <p>Our services ensure that you are prepared and able to respond and recover quickly in
                      the event of a Cybsercurity attack.</p>
                  </div>
                </div>
                {/* Single solutions */}
              </div>
            </div>
          </section>
          {/*===============================================
                            End We identify Area Design
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
                      <form onSubmit={handleSubmit} name="home" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="home" />
                        <div className="row">
                          {/* Single input */}
                          <div className="col-12">
                            <div className="single_input">
                              <input
                                id="name"
                                name="name"
                                type="text"
                                onChange={handleChange}
                                value={formState.name}
                                placeholder="Full Name" />
                            </div>
                          </div>
                          {/* Single input */}
                          {/* Single input */}
                          <div className="col-lg-6">
                            <div className="single_input">
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                onChange={handleChange}
                                value={formState.phone}
                                placeholder="Phone" />
                            </div>
                          </div>
                          {/* Single input */}
                          {/* Single input */}
                          <div className="col-lg-6">
                            <div className="single_input">
                              <input
                                id="email"
                                name="email"
                                onChange={handleChange}
                                value={formState.email}
                                type="email"
                                placeholder="Email" />
                            </div>
                          </div>
                          {/* Single input */}
                          {/* Single input */}
                          <div className="col-12">
                            <div className="single_input">
                              <textarea
                                id="message"
                                name="message"
                                type="text"
                                onChange={handleChange}
                                value={formState.message}
                                defaultValue={""}
                                placeholder="Message" />
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
                    <img src={contact_vactor} alt="Welcome Vactor" />
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

export default IndexPage
