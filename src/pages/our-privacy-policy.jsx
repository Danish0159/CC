import React from "react";
import privacy from "../assets/images/vactor/privacy-vactor.png";
import man from "../assets/images/vactor/man-book.png";
import police from "../assets/images/vactor/police.png";
import Layout from "../components/Layout";

const Privacy = () => {
  return (
    <div className="full-waypper">
      <section className="full-waypper-area-about our-privacy-policy">
        <Layout>
          {/*===============================================
        					Start Hero Content Area Design
                ================================================ */}

          <section className="hero_content_area hero_content_area_contact">
            <div className="container">
              <div className="row">
                {/* <!-- Hero Content --> */}
                <div className="col-lg-5">
                  <div className="hero_content_text" data-aos="fade-up">
                    <div className="hero_content hero_content_contact">
                      <h1>Our Privacy Policy</h1>
                      <p>
                        Things you should know as our clients when you access
                        our website
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Hero Content --> */}
                {/* <!-- Hero Image --> */}
                <div className="col-lg-7">
                  <div className="hero_image" data-aos="fade-up">
                    <img src={privacy} alt="Hero Vactor" />
                  </div>
                </div>
                {/* <!-- Hero Image --> */}
              </div>
            </div>
          </section>
          {/* =============================================== 
        					End Hero Content Area Design
                ================================================ */}

          {/* <!--=============================================== 
                            Start We make Area Design
                ================================================*/}
          <section className="privacy_section_area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="p_text " data-aos="fade-up">
                    <p>
                      Our Privacy Policy sets out how Smart Home Safe uses and
                      protects any information you give to Smart Home Safe via
                      the website’s online forms. Smart Home Safe is committed
                      to ensuring that your privacy is protected and preserved.
                    </p>
                    <p>
                      When you are asked to provide certain information by which
                      you can be identified, rest assured that such information
                      will only be used in accordance with this privacy
                      statement. Smart Home Safe may change this policy from
                      time to time by updating this webpage. It is your
                      responsibility to check this page from time to time to
                      ensure that you are happy with any changes. This policy is
                      effective as of November 20, 2020.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div
                    className="pricacy_title_content p_text pt_t_privacy "
                    data-aos="fade-up"
                  >
                    <h3>
                      What Information do we collect from visitors of our
                      Website?
                    </h3>
                    <p>
                      We collect information by fair and lawful means, with your
                      knowledge and consent. We only process your data when we
                      have a lawful reason for doing so. We also let you know
                      why we’re collecting it and how it will be used. You are
                      free to refuse our request for this information, with the
                      understanding that we may be unable to provide you with
                      some of your desired services without it.
                    </p>
                    <p>
                      On our online forms, we may collect the following
                      information:
                    </p>
                    <div
                      className="list_privacy hero_content make_contact_c"
                      data-aos="fade-up"
                    >
                      <p>name or name of your client</p>
                      <p>mailing/delivery address</p>
                      <p>contact information</p>
                      <p>email address</p>
                      <p>telephone number</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="privacy_Image pt_pb_r" data-aos="fade-up">
                    <img src={man} alt="Privacy Image" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="p_text" data-aos="fade-up">
                    <p>
                      The information collected will help Smart Home Safe
                      fulfill the services that are due to you. We also collect
                      information through the Website for the following
                      purposes:
                    </p>
                  </div>
                  <div
                    className="list_privacy hero_content make_contact_c"
                    data-aos="fade-up"
                  >
                    <p>Internal Record Keeping</p>
                    <p>
                      Client/Customer Feedback to improve services and/or
                      products
                    </p>
                    <p>
                      Promotional emails about our services, special offers or
                      other information which you may find interesting using the
                      email address that you have provided to us
                    </p>
                    <p>To contact you for market research purposes.</p>
                  </div>
                  <div
                    className="pricacy_title_content p_text pt_t_privacy"
                    data-aos="fade-up"
                  >
                    <h3>How do we use the Information we collect?</h3>
                    <p>
                      We may use a combination of identifying and
                      non-identifying information to understand who our visitors
                      are, how they use our services, and how we may improve
                      their experience of our website in future. We do not
                      disclose the specifics of this information publicly but
                      may share aggregated and anonymized versions of this
                      information, for example, in website and customer usage
                      trend reports.
                    </p>
                    <p>
                      We may use your personal details to contact you with
                      updates about our website and services, along with
                      promotional content that we believe may be of interest to
                      you. We may contact you via phone, email, social media, or
                      conventional mail. If you wish to opt out of receiving
                      promotional content, you can follow the “unsubscribe”
                      instructions provided alongside any promotional
                      correspondence from us.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <div
                    className="privacy_Image pt_t_privacy"
                    data-aos="fade-up"
                  >
                    <img src={police} alt="police Image" />
                  </div>
                </div>
                <div className="col-md-7">
                  <div
                    className="pricacy_title_content p_text pt_t_privacy"
                    data-aos="fade-up"
                  >
                    <h3>Where do we store the Information we collect?</h3>
                    <p>
                      The personal information we collect is stored and
                      processed in, or where we or our partners, affiliates and
                      third-party providers maintain facilities. We do not
                      transfer data outside of Canada.
                    </p>
                    <p>
                      We only retain personal information for as long as
                      necessary to provide a service, or to improve our services
                      in future. In most cases, we delete personal information
                      after a period of 2 years if we have not received any
                      communication, opt-in notification, or other form of
                      consent from the contact. While we retain this data, we
                      will protect it within commercially acceptable means to
                      prevent loss and theft, as well as unauthorized access,
                      disclosure, copying, use or modification.
                    </p>
                    <p>
                      If you request your personal information be deleted, or
                      where your personal information becomes no longer relevant
                      to our operations, we will erase it from our system within
                      a reasonable timeframe.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div
                    className="pricacy_title_content p_text "
                    data-aos="fade-up"
                  >
                    <h3>How do we protect your Information?</h3>
                    <p>
                      We are committed to ensuring that the information you
                      submitted to Smart Home Safe is secure. To prevent
                      unauthorized access or disclosure, we have put in place
                      suitable safeguards such as encryption to ensure the
                      security of the information we collect online.
                    </p>
                    <h3>Do we use Cookies?</h3>
                    <p>
                      We use “cookies” to collect information about you and your
                      activity across our website.
                    </p>
                    <p>
                      A cookie is a small file which asks permission to be
                      placed on your computer’s hard drive. With your permission
                      on our browser settings, the file is added and the cookie
                      helps analyze web traffic or lets you know when you visit
                      a particular site. Cookies allow web applications to
                      respond to you as an individual. The web application can
                      tailor its operations to your needs, likes, and dislikes
                      by gathering and remembering information about your
                      preferences.
                    </p>
                    <p>
                      We use traffic log cookies to identify which pages are
                      being used as this helps Smart Home Safe analyze data
                      about web page traffic which will be used to improve our
                      website in fulfilling customer needs. We only use this
                      information for statistical analysis purposes and then the
                      data is subsequently removed from the system.
                    </p>
                    <p>
                      Please note that a cookie will NOT give us access to your
                      computer or any information about you, other than the data
                      you choose to share with us through the Smart Home Safe
                      website.
                    </p>
                    <p>
                      You can choose to accept or decline cookies. Most web
                      browsers automatically accept cookies, but you can modify
                      your browser settings to decline cookies once you access
                      certain websites. Be advised that when you do decline
                      cookies, it may prevent you from taking full advantage of
                      the website features.
                    </p>
                    <h3>
                      Which Third Parties have access to your Information?
                    </h3>
                    <p>
                      Through the Smart Home Safe website, you can link to other
                      websites which are not under the control of Smart Home
                      Safe. We have no control over the nature, content, and
                      availability of outbound third-party web sites. The
                      inclusion of any links does not necessarily imply a
                      recommendation or endorsement of the views expressed
                      within them.Smart Home Safe remains independent from third
                      party website links.
                    </p>
                    <p>We use third-party services for:</p>
                  </div>

                  <div
                    className="list_privacy hero_content make_contact_c"
                    data-aos="fade-up"
                  >
                    <p>Analytics tracking</p>
                    <p>Advertising and promotion</p>
                    <p>Content marketing</p>
                    <p>Email marketing</p>
                  </div>
                  <div className="p_text" data-aos="fade-up">
                    <p>
                      These third-party service providers may only access your
                      data for the sole purpose of performing specific tasks
                      behalf of Smart Home Safe. We do not share any personally
                      identifying information with them without your explicit
                      consent. We do not give them permission to disclose or use
                      any of your data for any other purpose.
                    </p>
                    <p>
                      We may, from time to time, allow limited access to our
                      data by external consultants and agencies for the purpose
                      of analysis and service improvement. This access is only
                      permitted for as long as necessary to perform a specific
                      function.
                    </p>
                    <p>
                      We will refuse government and law enforcement requests for
                      data if we believe a request is too broad or unrelated to
                      its stated purpose. However, we may cooperate if we
                      believe the requested information is necessary and
                      appropriate to comply with legal process, to protect our
                      own rights and property, to protect the safety of the
                      public and any person, to prevent a crime, or to prevent
                      what we reasonably believe to be illegal, legally
                      actionable, or unethical activity.
                    </p>
                    <p>
                      We do not otherwise share or supply personal information
                      to third parties. We do not sell or rent your personal
                      information to marketers or third parties. Smart Home Safe
                      will not sell, distribute or forward your personal
                      information to third parties unless we have your express
                      and written permission or are required by law to disclose
                      your information.
                    </p>
                    <h3>Compliance with Privacy Laws</h3>
                    <p>
                      At Smart Home Safe, we are committed to ensuring the
                      security of your information by complying with Privacy
                      Laws & Regulations. Our approach has been anchored with a
                      strong commitment to privacy, security, compliance and
                      transparency. This approach includes supporting our
                      customers’ compliance with various regulatory frameworks,
                      including EU data protection requirements set out in the
                      General Data Protection Regulation (“GDPR”), which became
                      enforceable on May 25, 2018, and the California Consumer
                      Privacy Act (“CCPA”) which came into effect January 01,
                      2020.
                    </p>
                    <p>
                      Where a company collects, transmits, hosts or analyzes
                      personal information of EU data subjects, GDPR requires
                      the company to process such data only in a way which
                      guarantees the technical and organizational safeguards
                      mandated by the GDPR.
                    </p>
                    <h3>Your Rights and Responsibilities</h3>
                    <p>
                      As our user, you have the right to be informed about how
                      your data is collected and used. You are entitled to know
                      what data we collect about you, and how it is processed.
                      You are entitled to correct and update any personal
                      information about you, and to request this information be
                      deleted. You are entitled to restrict or object to our use
                      of your data, while retaining the right to use your
                      personal information for your own purposes. You have the
                      right to opt out of data about you being used in decisions
                      based solely on automated processing.
                    </p>
                    <p>
                      You may request details of personal information which we
                      currently hold. Requesting this information will require a
                      small fee. If you would like a copy of the information we
                      have on you, please contact us. If you find that any
                      information we are currently holding on you is incorrect
                      or incomplete, please advise us of the corrections
                      accordingly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* =============================================== 
                            End We make Area Design
                ================================================ */}
        </Layout>
      </section>
    </div>
  );
};

export default Privacy;
