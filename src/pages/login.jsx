import React, {useEffect} from 'react'
import Layout from '../components/Layout'
import login from '../assets/images/vactor/login.png'
import appal from '../assets/images/icon/appal.png'
import google from '../assets/images/icon/google.png'
import fb from '../assets/images/icon/fb.png'
import AOS from 'aos';

const Login = () => {
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
        <section className="full-waypper-area-about login-background">
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
                      <h1>Login / Sign up</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                  </div>
                </div>
                {/* Hero Content */}
                {/* Hero Image */}
                <div className="col-lg-7">
                  <div className="hero_image" data-aos="fade-up">
                    <img src={login} alt="Hero Vactor" />
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
          <section className="login_and_signup_area">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="user_login_input" data-aos="fade-up">
                    <form action>
                      {/* Single */}
                      <div className="login_input">
                        <input type="text" placeholder="Email" />
                      </div>
                      {/* Single */}
                      {/* Single */}
                      <div className="login_input">
                        <input type="password" placeholder="Password" />
                      </div>
                      {/* Single */}
                      <div className="user_submit">
                        <input type="submit" defaultValue="SIGN UP" />
                      </div>
                      <div className="linkg_get_start">
                        <p>Don’t have an account? <a href="#">Get started</a></p>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="or_text" data-aos="fade-up">
                    <p>OR</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="link_button" data-aos="fade-up">
                    <a href="#"><img src={appal} alt="Icon" />Log in with Apple</a>
                    <a href="#"><img src={google} alt="Icon" />Log in with Google</a>
                    <a href="#"><img src={fb} alt="Icon" />Log in with Facebook</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*===============================================
                            End We make Area Design
                ================================================ */}
                </Layout>
        </section>
      </div>
    )
}

export default Login
