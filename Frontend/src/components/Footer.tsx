import logo9 from "./../assets/fb.jpeg";
import logo10 from "./../assets/xt.jpeg";
import logo11 from "./../assets/yt.jpeg";
import logo12 from "./../assets/insta.jpeg";
import { Row, Col } from "react-bootstrap";
export default function Footer() {
  return (
    // Footer part 1 Style
    <div className="sl-footer">
      <div style={{paddingBottom:"-10px"}}>
        <Row lg={12} style={{ padding: "100px", marginLeft: "75px" }}>
          <Col lg={2}>
            <h5 className="h5-topic">
              <b>Participate</b>
            </h5>
            <ul className="sl-list-1">
              <li className="sl-li">
                <a href="/events">
                  Events
                  <br /><a href="/ContentViews">Public Consultation</a> 
                </a>
              </li>
              {/* <li className="sl-li">
                <a href="">
                  Directory of SL government
                  <br /> agencies and departments
                </a>
              </li> */}
              {/* <li className="sl-li">
                <a href="">
                  Branches of government
                </a>
              </li> */}
            </ul>
          </Col>
          <Col lg={2}>
            <h5 className="h5-topic">
              <b>About us</b>
            </h5>
            <ul className="sl-list">
              <li className="sl-li">
                <a href="/about"> About ConnectSL </a>
              </li>
              <li className="sl-li">
                <a href="/gfeedback">General Feedback</a>
              </li>
              {/* <li className="sl-li">
                <a href="">Accessibility policy</a>
              </li>
              <li className="sl-li">
                <a href="">Report a website issue</a>
              </li>
              <li className="sl-li">
                <a href="">Website usage data</a>
              </li> */}
            </ul>
          </Col>
          <Col lg={2}>
            <h5 className="h5-topic">
              <b>User Policies</b>
            </h5>
            <ul className="sl-list-1">
              <li className="sl-li">
                <a href="/termsofuse">Terms of Use</a>
              </li>
              <li className="sl-li">
                <a href="/termsofparticipation"> Terms of Participation </a>
              </li>
            </ul>
          </Col>
          <Col lg={2}>
            <h5 className="h5-topic">
              <b>For Media</b>
            </h5>
            <ul className="sl-list">
              <li className="sl-li">
                <a href="/newspress">News & Press Releases</a>
              </li>
              {/* <li className="sl-li">
                <a href="">Feature articles</a>
              </li> */}
            </ul>
          </Col>
          <Col lg={3}>
            <div className="tablet:grid-col-4">
              <div className="">
                <h5 className="">
                  <b>
                    Sign up to receive email
                    <br /> updates
                  </b>
                </h5>
               
                  {/* <label className="sl-label" htmlFor="footer-email">
                    Enter your email
                  </label>
                  <br /> */}
                  {/* <input
                    className="sl-input"
                    id="footer-email"
                    name="email"
                    type="email"
                  /> */}
                  <div className="footer-button-container">
             <a href="/newsletter">    <button className="btn-blue-submit" type="submit">
                      Sign up
                    </button></a>
                  </div>
               
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <footer className="">
        <div>
          <div className="grid-container">
            <div
              className="grid-row grid-gap"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div className="tablet:grid-col-8">
                <nav className="" aria-label="Footer navigation">
                  <div className="grid-row grid-gap-4">
                    <div className="mobile-lg:grid-col-6 desktop:grid-col-3">
                      <section></section> 
                      
                    </div>
                    <div className="mobile-lg:grid-col-6 desktop:grid-col-3">
                      <section></section>
                    </div>
                    <div className="mobile-lg:grid-col-6 desktop:grid-col-3">
                      <section></section>
                    </div>
                    <div className="mobile-lg:grid-col-6 desktop:grid-col-3">
                      <section></section>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <script src="./Making government services easier to find _ Gov_files/newFooter.js.download"></script>

        <div className="sl-footer__secondary-section">
          <div className="grid-container">
            <div
              className="grid-row grid-gap"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div style={{ marginLeft: "-24%" }}></div>
              <div className=" grid-row mobile-lg:grid-col-6">
                <span id="footer-phone">
                 {/* Footer part 2 Style*/}
                  <div className="contact-style">
                    <h5 className="">
                      <b style={{marginLeft:"0"}}>eParticipation Portal | Government of Sri Lanka</b>
                    </h5>
                  </div>

                  <div className="mobile-lg:grid-col-auto">
                    {/* <p className="footer-question">Ask SL.gov a question at</p> */}

                    <address className="">
                      <div className="">
                        <a href="">+94 112 369 099 </a>
                      </div>
                    </address>
                  </div>
                </span>
              </div>

              <div className="sl-footer__contact-links mobile-lg:grid-col-6">
                <div className="footer-social-block">
                  <h5 className="">
                    <b>Find us on social media</b>
                  </h5>

                  <div className="sl-footer__social-links en-links grid-row grid-gap-1">
                    <div className="grid-col-auto">
                      <a href="https://www.facebook.com/ictasrilanka"
                        className="sl-social-link"
                        
                      >
                        <img
                          className="image-svg-test"
                          src={logo9}
                          alt="Facebook SLGov"
                        />
                      </a>
                    </div>

                    <div className="grid-col-auto">
                      <a href="https://twitter.com/icta_srilanka"
                        className="sl-social-link"
                        
                      >
                        <img
                          className="image-svg-test"
                          src={logo10}
                          alt="X Twitter SLGov"
                        />

                        {/* <span>Twitter</span> */}
                      </a>
                    </div>
                    
                    <div className="grid-col-auto">
                      <a href="https://www.youtube.com/@ICTASriLankaOfficial"
                        className="sl-social-link"
                        
                      >
                        <img
                          className="image-svg-test"
                          src={logo11}
                          alt="Youtube SLGov"
                        />

                        {/* <span>YouTube</span> */}
                      </a>
                    </div>

                    <div className="grid-col-auto">
                      <a href="https://www.instagram.com/icta_srilanka/"
                        className="sl-social-link"
                       
                      >
                        <img
                          className="image-svg-test"
                          src={logo12}
                          alt="Instagram SLGov"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
           {/* Footer part 3 Style*/}
        <div className="sl-identifier">
          <section
            className="sl-identifier__section sl-identifier__section--slgov"
            aria-label="SLGov is the official guide to government information and services"
          >
            <div className="footer-content">
              <div className="sl-identifier__slgov-description" style={{marginTop:"0",paddingTop:"20px"}}>
                {/* SLGov is the official guide to government information and
                services. */}
                eParticipation Protal - Government of Sri Lanka | 2023
              </div>
              <div className="last-update-css"><p>© 2023 ICTA | Last Updated 27 Nov 2023</p></div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}
