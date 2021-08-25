import * as React from "react";
import home_hero from "../assets/images/vactor/home-hero-vactor.webp";
import protect from "../assets/images/icon/protect.webp";
import email from "../assets/images/icon/email.webp";
import internet from "../assets/images/icon/internet.webp";
import cyberscurity from "../assets/images/vactor/cyberscurity.webp";
import solutions_1 from "../assets/images/icon/solutions_1.webp";
import solutions_2 from "../assets/images/icon/solutions_2.webp";
import solutions_3 from "../assets/images/icon/solutions_3.webp";
import solutions_4 from "../assets/images/icon/solutions_4.webp";
import solutions_5 from "../assets/images/icon/solutions_5.webp";
import solutions_6 from "../assets/images/icon/solutions_6.webp";
import solutions_7 from "../assets/images/icon/solutions_7.webp";
import solutions_8 from "../assets/images/icon/solutions_8.webp";
import solutions_9 from "../assets/images/icon/solutions_9.webp";
import contact_vactor from "../assets/images/vactor/contact-vactor.webp";
import Layout from "../components/Layout";
import AOS from "aos";
import Recaptcha from "react-recaptcha";
import { Helmet } from "react-helmet";
import { Link } from 'gatsby'


const IndexPage = () => {
  // All the state variables.
  const [formState, setFormState] = React.useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [acceptsConsentCheckbox, setAcceptsConsentCheckbox] = React.useState(false);
  // const [isVerified, setIsVerified] = React.useState(false);

  // create a variable to store the component instance
  // let recaptchaInstance;

  // Netlify code to handle forms.
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  // Handle all the state variables.
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  function handleConsentCheckbox(e) {
    setAcceptsConsentCheckbox(e.target.checked);
  }

  // function verifyCallback(responce) {
  //   if (responce) {
  //     setIsVerified(true);
  //   }
  // }

  // var callback = function () {
  //   console.log("Done!!!!");
  // };

  // Handle submit
  const handleSubmit = (e) => {
    // if (isVerified) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "home",
        ...formState,
        acceptsconsentcheckbox: acceptsConsentCheckbox,
      }),
    })
      // .then(() => alert("Your form submission has been received.!"))
      .catch((error) => alert(error));

    setFormState({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
    // recaptchaInstance.reset();
    // e.preventDefault();
  };
  // else {
  //   alert("Please verify that you are a human!");
  //   e.preventDefault();

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="full-waypper">
      <Helmet>
        <script
          src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
          async
          defer
        ></script>
      </Helmet>

      <section class="new_about_v_t full-waypper-area-about full-waypper-area-home">
        <Layout>
          {/*===============================================
        					Start Hero Content Area Design
                ================================================ */}
          <section className="hero_content_area hero_content_area_about_f">
            <div className="container-fluid">
              <div className="row">
                {/* Hero Content */}
                <div className="col-lg-6">
                  <div className="hero_content_home" data-aos="fade-up">
                    <h1>
                      Your Smarthome is <br />
                      Secure with us
                    </h1>
                    <div className="button">
                      <Link to="/book-consultation">Book a Consultation</Link>
                    </div>
                  </div>
                </div>
                {/* Hero Content */}
                {/* Hero Image */}
                <div className="col-lg-6">
                  <div
                    className="hero_image hero_image_home"
                    data-aos="fade-up"
                  >
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
                    <p>
                      We identify, detect, protect and defend against
                      Cybersecurity Attacks.
                    </p>
                    <h3>
                      Let Us Protect and Defend your Smart Home from
                      Cybersecurity Attacks
                    </h3>
                  </div>
                  {/* Content */}
                  <div className="servier_hero_item">
                    {/* Item */}
                    <div className="single_item" data-aos="fade-right">
                      <a href="/product-services">
                        <img
                          href="/product-services"
                          src={protect}
                          alt="protect"
                        />
                        <p>Endpoint Security</p>
                      </a>
                    </div>
                    {/* Item */}
                    {/* Item */}
                    <div className="single_item" data-aos="fade-up">
                      <a href="/product-services">
                        <img src={email} alt="email" />
                        <p>Email Security</p>
                      </a>
                    </div>
                    {/* Item */}
                    {/* Item */}
                    <div className="single_item" data-aos="fade-left">
                      <a href="/product-services">
                        <img src={internet} alt="internet" />
                        <p>Internet Security</p>
                      </a>
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
                    <p>
                      We provide cost-effective solutions to secure entry points
                      of end-user Devices such as desktops, laptops, and mobile
                      devices from being exploited by malicious actors and
                      cybersecurity adversaries.
                    </p>
                    <div className="button">
                      <Link to="/book-consultation">Book a Consultation</Link>
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
                    <h3>
                      Choose and Subscribe to Cybersecurity Solutions for your
                      Smart Home
                    </h3>
                  </div>
                </div>
              </div>
              <div className="row solutions_single_item_f_area">
                {/* Single solutions */}
                <div className="col-lg-4 col-md-6">
                  <div className="solutions_single_item" data-aos="fade-up">
                    <a href="/product-services">
                      <img src={solutions_1} alt="protect" />
                      <h4>Endpoint &amp; Device Security</h4>
                    </a>
                    <p>
                      We provide cost-effective Endpoint Security to secure
                      entry points of end-user devices such as desktops,
                      laptops, and mobile devices from being exploited by
                      malicious actors and cybersecurity adversaries.
                    </p>
                  </div>
                </div>
                {/* Single solutions */}
                {/* Single solutions */}
                <div className="col-lg-4 col-md-6">
                  <div className="solutions_single_item" data-aos="fade-up">
                    <a href="/product-services">
                      <img src={solutions_2} alt="protect" />
                      <h4>Network Security</h4>
                    </a>
                    <p>
                      Our Network Security solutions and services protect your
                      home network and data from breaches, intrusions, and other
                      threats. Our solutions involve vulnerability scanning and
                      patch management of your home network, devices, and
                      software.
                    </p>
                  </div>
                </div>
                {/* Single solutions */}
                {/* Single solutions */}
                <div className="col-lg-4 col-md-6">
                  <div className="solutions_single_item" data-aos="fade-up">
                    <a href="/product-services">
                      <img src={solutions_3} alt="protect" />
                      <h4>Email Security</h4>
                    </a>
                    <p>
                      Our Email Security solutions will protect your email
                      content and accounts against unauthorized access. This
                      includes login security, spam filtering, user security,
                      user education, and email encryption.
                    </p>
                  </div>
                </div>
                {/* Single solutions */}
                {/* Single solutions */}
                <div className="col-lg-4 col-md-6">
                  <div className="solutions_single_item" data-aos="fade-right">
                    <a href="/product-services">
                      <img src={solutions_4} alt="protect" />
                      <h4>Browser/Internet Security</h4>
                    </a>
                    <p>
                      Our solutions will provide you with Safe Browsers and
                      ensure secure Browser configuration to help prevent
                      attacks and stop third-party tools and unwanted cookies
                      from collecting private information.
                    </p>
                  </div>
                </div>
                {/* Single solutions */}
                {/* Single solutions */}
                <div className="col-lg-4 col-md-6">
                  <div className="solutions_single_item" data-aos="fade-up">
                    <a href="/product-services">
                      <img src={solutions_5} alt="protect" />
                      <h4>Identity &amp; Access Security</h4>
                    </a>
                    <p>
                      Our Identity and Access Security solutions will be is an
                      essential part to protect your identity and access to your
                      passwords and secrets. Our solutions will protect your
                      digital identities and unauthorized access to your data,
                      applications, and resources within your home network.
                    </p>
                  </div>
                </div>
                {/* Single solutions */}
                {/* Single solutions */}
                <div className="col-lg-4 col-md-6">
                  <div className="solutions_single_item" data-aos="fade-left">
                    <a href="/product-services">
                      <img src={solutions_6} alt="protect" />
                      <h4>Storage, Files &amp; Folders</h4>
                    </a>
                    <p>
                      We provide File integrity monitoring (FIM) solutions that
                      will test and check your files and folders, storage
                      drives, and application software files to determine
                      whether or not they have been tampered with or corrupted.
                    </p>
                  </div>
                </div>
                {/* Single solutions */}
                {/* Single solutions */}
                <div className="col-lg-4 col-md-6">
                  <div className="solutions_single_item" data-aos="fade-right">
                    <a href="/product-services">
                      <img src={solutions_7} alt="protect" />
                      <h4>Social Engineering</h4>
                    </a>
                    <p>
                      We protect you against Cybercriminals who try to steal
                      your valuable information assets through Phishing attacks.
                    </p>
                  </div>
                </div>
                {/* Single solutions */}
                {/* Single solutions */}
                <div className="col-lg-4 col-md-6">
                  <div className="solutions_single_item" data-aos="fade-up">
                    <a href="/product-services">
                      <img src={solutions_8} alt="protect" />
                      <h4>24/7 Security Monitoring</h4>
                    </a>
                    <p>
                      We provide 24/7 Security Monitoring For your Home Network
                      to ensure that your Smart Home is protected from Cyber
                      Threats.
                    </p>
                  </div>
                </div>
                {/* Single solutions */}
                {/* Single solutions */}
                <div className="col-lg-4 col-md-6">
                  <div className="solutions_single_item" data-aos="fade-left">
                    <a href="/product-services">
                      <img src={solutions_9} alt="protect" />
                      <h4>Incident Response &amp; Recovery</h4>
                    </a>
                    <p>
                      Our services ensure that you are prepared and able to
                      respond and recover quickly in the event of a Cybsercurity
                      attack.
                    </p>
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
                      <form
                        onSubmit={handleSubmit}
                        name="home"
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                      >
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
                                placeholder="Full Name"
                              />
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
                                placeholder="Phone"
                              />
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
                                placeholder="Email"
                              />
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
                                placeholder="Message"
                              />
                            </div>
                          </div>
                          {/* Single input */}
                          {/* CheckBox  */}
                          {/* Single input */}
                          <div className="col-12">
                            <label>
                              <input
                                type="checkbox"
                                name="acceptsconsentcheckbox"
                                value="value"
                                onChange={handleConsentCheckbox}
                                className="input-checkbox"
                                required
                              />{" "}
                              I agree that my submitted data is being collected
                              and stored.
                            </label>
                          </div>
                          {/* Single input */}

                          {/*  Recaptha */}
                          {/* <div id="recaptcha-module">
                            <Recaptcha
                              sitekey="6LfR3fQbAAAAAIPAULAl0Jy8IJDmD7agbICsU3Y8"
                              render="explicit"
                              verifyCallback={verifyCallback}
                              onloadCallback={callback}
                              ref={e => recaptchaInstance = e}
                            />
                          </div> */}

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
  );
};

export default IndexPage;
