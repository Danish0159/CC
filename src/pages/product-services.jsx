import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import contact_vector from "../assets/images/vactor/contact-vactor.webp";
import hero_lock from "../assets/images/product/hero-lock.webp";
import lock_2 from "../assets/images/product/lock-2.webp";
import monitor from "../assets/images/product/monitor.webp";
import solutions_2 from "../assets/images/icon/solutions_2.webp";
import solutions_3 from "../assets/images/icon/solutions_3.webp";
import solutions_4 from "../assets/images/icon/solutions_4.webp";
import solutions_5 from "../assets/images/icon/solutions_5.webp";
import solutions_6 from "../assets/images/icon/solutions_6.webp";
import solutions_7 from "../assets/images/icon/solutions_7.webp";
import solutions_8 from "../assets/images/icon/solutions_8.webp";
import solutions_9 from "../assets/images/icon/solutions_9.webp";
import network from "../assets/images/product/network.webp";
import email from "../assets/images/product/email.webp";
import browser_security from "../assets/images/product/browser-security.webp";
import internet_access from "../assets/images/product/internet-access.webp";
import file from "../assets/images/product/file.webp";
import social from "../assets/images/product/social.webp";
import security from "../assets/images/product/security.webp";
import recovery from "../assets/images/product/recovery.webp";
import Layout from "../components/Layout";
import AOS from "aos";
import Recaptcha from "react-recaptcha";
import { Helmet } from "react-helmet";

const ProductServices = () => {
  // All the state variables.
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [acceptsConsentCheckbox, setAcceptsConsentCheckbox] =
    React.useState(false);
  const [isVerified, setIsVerified] = React.useState(false);

  // create a variable to store the component instance
  let recaptchaInstance;

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

  function verifyCallback(responce) {
    if (responce) {
      setIsVerified(true);
    }
  }

  var callback = function () {
    console.log("Done!!!!");
  };

  // Handle submit
  const handleSubmit = (e) => {
    if (isVerified) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "product",
          ...formState,
          acceptsconsentcheckbox: acceptsConsentCheckbox,
          reCaptcha:isVerified,
        }),
      })
        .catch((error) => alert(error));

      setFormState({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      // recaptchaInstance.reset();
      // e.preventDefault();
    } else {
      alert("Please verify that you are a human!");
      e.preventDefault();
    }
  };

  useEffect(() => {
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
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Smart Home Safe | Cybersecurity Solutions & Product Subscriptions</title>
        <meta name="description" content="We Protect and Defend your Smart Home from Cybersecurity Attacks. We provide Cybersecurity Solutions for your Smart Home." />
        <meta name="keywords" content="are smart homes safe, Endpoint Security, Internet Security, Identity & Access Security, File Integrity Monitoring, safe secure browser, secure email, emailsecurity, how to send secure email, security monitoring, network security, network and security, what is network security, network firewall security, social engineering, social engineering security, what is social engineering, Phishing Attacks" />
      </Helmet>
      <section className="new_about_v_t full-waypper-area-about full-waypper-area-product-services">
        <Layout>
          {/*===============================================
        					Start Hero Content Area Design
                ================================================ */}
          <section className="hero_content_product hero_content_area_about_f">
            <div className="container-fluid">
              <div className="row">
                {/* Hero Content */}
                <div className="col-lg-6">
                  <div className="hero_content_home" data-aos="fade-up">
                    <h1>Products &amp; Services</h1>
                    <p>
                      Cybersecurity Solutions made simple for your Home Network.
                      Keep your Smart Home Safe.
                    </p>
                  </div>
                </div>
                {/* Hero Content */}
                {/* Hero Image */}
                <div className="col-lg-6">
                  <div
                    className="hero_image hero_image_home"
                    data-aos="fade-up"
                  >
                    <img src={hero_lock} alt="SmartHomeSafe" />
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
                  <div
                    className="product_singel_image mb_40"
                    data-aos="fade-up"
                  >
                    <img src={lock_2} alt="SmartHomeSafe" />
                  </div>
                </div>
                {/* Hero Image */}
                {/* Hero Image */}
                {/* Single solutions */}
                <div className="col-lg-6">
                  <div className="product_singel_item" data-aos="fade-up">
                    <img src={monitor} alt="SmartHomeSafe" />
                    <h4>Endpoint &amp; Device Security</h4>
                    <p>
                      We provide cost-effective Endpoint Security to secure
                      entry points of end-user devices such as desktops,
                      laptops, and mobile devices from being exploited by
                      malicious actors and cybersecurity adversaries. Our
                      Endpoint security services protect your endpoints on your
                      home network and while you roam.
                    </p>
                    <div className="button">
                      <Link to="/book-consultation">Subscribe</Link>
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
                    <img src={solutions_2} alt="SmartHomeSafe" />
                    <h4>Network Security</h4>
                    <p>
                      Our Network Security solutions and services protects your
                      home network and data from breaches, intrusions and other
                      threats. Our solutions and services involve vulnerability
                      scanning of your home network, devices and software,
                      remote access to other networks and providing network
                      analytics to pro-actively identify cybersecurity threats
                      to your home and personal information.
                    </p>
                    <div className="button">
                      <Link to="/book-consultation">Subscribe</Link>
                    </div>
                  </div>
                </div>
                {/* Single product */}
                {/* Hero Image */}
                <div className="col-lg-6">
                  <div className="product_singel_image" data-aos="fade-up">
                    <img src={network} alt="SmartHomeSafe" />
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
                  <div
                    className="product_singel_image mb_40"
                    data-aos="fade-up"
                  >
                    <img src={email} alt="SmartHomeSafe" />
                  </div>
                </div>
                {/* Hero Image */}
                {/* Hero Image */}
                {/* Single solutions */}
                <div className="col-lg-6">
                  <div className="product_singel_item" data-aos="fade-up">
                    <img src={solutions_3} alt="SmartHomeSafe" />
                    <h4>Email Security</h4>
                    <p>
                      Our Email Security solutions and services will protect
                      email content and accounts against unauthorized access.
                      This includes login security, spam filtering, user
                      security, user education, and email encryption. Email
                      attacks are more prevalent and sophisticated than ever
                      before. We are here to protect you.
                    </p>
                    <div className="button">
                      <Link to="/book-consultation">Subscribe</Link>
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
                    <img src={solutions_4} alt="SmartHomeSafe" />
                    <h4>Browser/Internet Security</h4>
                    <p>
                      Our solutions will provide you with Safe Browsers and
                      ensure secure Browser configuration to help prevent
                      attacks and stop third-party tools, like cookies. Cookies
                      collect your private information, like the websites you've
                      visited, usernames and passwords, and other tracking data.
                    </p>
                    <div className="button">
                      <Link to="/book-consultation">Subscribe</Link>
                    </div>
                  </div>
                </div>
                {/* Single product */}
                {/* Hero Image */}
                <div className="col-lg-6">
                  <div className="product_singel_image" data-aos="fade-up">
                    <img src={browser_security} alt="SmartHomeSafe" />
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
                  <div
                    className="product_singel_image mb_40"
                    data-aos="fade-up"
                  >
                    <img src={internet_access} alt="SmartHomeSafe" />
                  </div>
                </div>
                {/* Hero Image */}
                {/* Hero Image */}
                {/* Single solutions */}
                <div className="col-lg-6">
                  <div className="product_singel_item" data-aos="fade-up">
                    <img src={solutions_5} alt="SmartHomeSafe" />
                    <h4>Identity &amp; Access Security</h4>
                    <p>
                      Our Identify and Access Security solutions is an essential
                      part to protect your Identity and access to your passwords
                      and secrets. Our solutions will protect your digital
                      identities and access to data, applications, and resources
                      within your home network and devices. Our solution will
                      ensure Multi-factor authentication and strong encryption
                      is in place for access to your personal and digital
                      assets.
                    </p>
                    <div className="button">
                      <Link to="/book-consultation">Subscribe</Link>
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
                    <img src={solutions_6} alt="SmartHomeSafe" />
                    <h4>Storage, Files &amp; Folders </h4>
                    <p>
                      We provide File integrity monitoring (FIM) solutions that
                      will test and check your files and folders, storage
                      drives, and application software files to determine
                      whether or not they have been tampered with or corrupted.
                      Our solution will verify and validate these files by
                      comparing the latest versions of them to a known, trusted
                      “baseline.” You can be assured to be alerted if there has
                      been an attempt of unauthorized access to your personal
                      and valuable information.
                    </p>
                    <div className="button">
                      <Link to="/book-consultation">Subscribe</Link>
                    </div>
                  </div>
                </div>
                {/* Single product */}
                {/* Hero Image */}
                <div className="col-lg-6">
                  <div className="product_singel_image" data-aos="fade-up">
                    <img src={file} alt="SmartHomeSafe" />
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
                  <div
                    className="product_singel_image mb_40"
                    data-aos="fade-up"
                  >
                    <img src={social} alt="SmartHomeSafe" />
                  </div>
                </div>
                {/* Hero Image */}
                {/* Hero Image */}
                {/* Single solutions */}
                <div className="col-lg-6">
                  <div className="product_singel_item" data-aos="fade-up">
                    <img src={solutions_7} alt="SmartHomeSafe" />
                    <h4>Social Engineering</h4>
                    <p>
                      We protect you against Cybercriminals who try to steal
                      your valuable information assets through Phishing attacks.
                    </p>
                    <div className="button">
                      <Link to="/book-consultation">Subscribe</Link>
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
                    <img src={solutions_8} alt="SmartHomeSafe" />
                    <h4>24/7 Security Monitoring</h4>
                    <p>
                      We provide 24/7 Security Monitoring of your Home Network
                      to ensure that your Smart Home is protected from Cyber
                      Threats.
                    </p>
                    <div className="button">
                      <Link to="/book-consultation">Subscribe</Link>
                    </div>
                  </div>
                </div>
                {/* Single product */}
                {/* Hero Image */}
                <div className="col-lg-6">
                  <div className="product_singel_image" data-aos="fade-up">
                    <img src={security} alt="SmartHomeSafe" />
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
                  <div
                    className="product_singel_image mb_40"
                    data-aos="fade-up"
                  >
                    <img src={recovery} alt="SmartHomeSafe" />
                  </div>
                </div>
                {/* Hero Image */}
                {/* Single product */}
                <div className="col-lg-6">
                  <div className="product_singel_item " data-aos="fade-up">
                    <img src={solutions_9} alt="SmartHomeSafe" />
                    <h4>Incident Response &amp; Recovery</h4>
                    <p>
                      Our services ensure that you are prepared and able to
                      respond and recover quickly in the event of a Cybsercurity
                      attack.
                    </p>
                    <div className="button">
                      <Link to="/book-consultation">Subscribe</Link>
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
                      <form
                        onSubmit={handleSubmit}
                        name="product"
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                      >
                        <input type="hidden" name="form-name" value="product" />
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
                                value="value2"
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
                          <div id="recaptcha-module">
                            <Recaptcha
                              sitekey="6LcAAyQcAAAAAKA0-WGR9vb38hmpyb8rzttm8-rA"
                              render="explicit"
                              verifyCallback={verifyCallback}
                              onloadCallback={callback}
                              ref={e => recaptchaInstance = e}
                              name="recaptcha"
                            />
                          </div>

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
                    <img src={contact_vector} alt="SmartHomeSafe" />
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

export default ProductServices;
