import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import hero from "../assets/images/vactor/book.webp";
import { InlineWidget } from "react-calendly";
import { Helmet } from "react-helmet";

const Book = () => {
  return (
    <div className="full-waypper">
       <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Smart Home Safe | Book a Consultant</title>
        <meta name="description" content="Smart Home Safe | Talk to a Cybersecurity Consultant for help and advice security advice." />
        <meta name="keywords" content="security help, cybersecurity advice, cybersecurity help, Smart Home Security, safe smart home security, smart home security services, smart home security, home security solutions, home security smart home, home security software, best smart home security, Home Security." />
      </Helmet>
      <section className="new_about_v_t full-waypper-area-about book-onsultation">
        <Layout>
          {/* ===============================================
        					Start Hero Content Area Design
                 ================================================  */}
          <section className="hero_content_area hero_content_area_about_f">
            <div className="container-fluid">
              <div className="row">
                {/* Hero Content  */}
                <div className="col-lg-6">
                  <div
                    className="hero_content_text hero_content_text_book"
                    data-aos="fade-up"
                  >
                    <div className="hero_content">
                      <h1>Book a Consultation</h1>
                      <p>Improve the security of your Home/Office Network.</p>
                      <p>
                        Avoid or reduce Cybersecurity Attacks and Theft of your
                        valuable information assets.{" "}
                      </p>
                      <p>
                        Have Concerns with actual and potential Data Breaches of
                        your Information Assets?
                      </p>
                      <p>
                        Have concerns about outside and intrusion attacks on
                        your Home Network?
                      </p>
                      <p>
                        Has your Home Network been recently compromised and
                        disrupted?
                      </p>
                      <p>We are here to help you !!</p>
                    </div>
                  </div>
                </div>
                {/* Hero Content  */}
                {/* Hero Image  */}
                <div className="col-lg-6">
                  <div className="hero_image" data-aos="fade-up">
                    <img src={hero} alt="SmartHomeSafe" />
                  </div>
                </div>
                {/* Hero Image  */}
              </div>
            </div>
          </section>

          {/* =============================================== 
        					End Hero Content Area Design
                ================================================ */}

          {/* =============================================== 
                            Start Calander Area Design
                ================================================*/}
          <section className="calander_secion_area" data-aos="fade-up">
            <div className="calander_widget_area">
              <InlineWidget url="https://calendly.com/smarthomesafe/30min?primary_color=551598" />
            </div>
          </section>

          {/* =============================================== 
                            End Calander Area Design
                ================================================ */}
        </Layout>
      </section>
    </div>
  );
};

export default Book;
