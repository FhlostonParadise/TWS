import React from 'react';
import { Link } from 'react-router-dom';

const FooterThree = () => {
  return (
    <footer>
      <div className="tp-footer__area black-bg">
        <div className="tp-footer">
          {/* <!-- main-footer start  --> */}
          <div className="tp-footer__main">
            <div className="container">
              <div className="tp-footer-border pt-100 pb-70">
                <div className="pb-30 pb-70">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="footer-logo mb-30">
                        <Link to="/" href="#"><img src="/assets/img/logo/logo.png" alt="" /></Link>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 text-end">
                      <div className="footer-form-2 mb-30">
                        <form>
                          <input type="email" placeholder="Enter your mail" />
                          <button type="submit">Subscribe <i
                            className="fal fa-paper-plane"></i></button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="tp-footer__widget tp-footer__2 pb-30">
                      <h3 className="tp-footer__widget-title text-white">Links </h3>
                      <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="tp-footer__widget tp-footer__2 pb-30">
                      <h3 className="tp-footer__widget-title text-white">My Services</h3>
                      <ul>
                        <li><a href="#">Service One</a></li>
                        <li><a href="#">Service Two</a></li>
                        <li><a href="#">Service Three</a></li>
                        <li><a href="#">Service Four</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 ">
                    <div className="tp-footer__widget tp-footer__2  pb-30">
                      <h3 className="tp-footer__widget-title text-white">Quick Links</h3>
                      <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Site Map</a></li>
                        <li><a href="#">Accessability</a></li>
                        <li><a href="#">Services</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="tp-footer__widget tp-footer__2  pb-30">
                      <h3 className="tp-footer__widget-title text-white">Contact</h3>
                      <ul>
                        <li><a href="#">123 Main St, Monterey, CA 93940, USA</a></li>
                        <li><a href="tel:+88015569569365">(831) 208-1234</a></li>
                        <li><a href="mailto:shana@therapywithshana.com">shana@therapywithshana.com</a></li>
                        <li><span> Office Hours: 9AM - 4PM</span></li>
                        <li><span> Friday - Wekend Day</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- main footer end  --> */}
        </div>
      </div>

      {/* <!-- footer copy right --> */}
      <div className="top-footer-copyright pt-30 pb-30 black-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-copyrigh-text text-center text-white">
                <span>© {new Date().getFullYear()} Therapy with Shana... All Rights Reserved..</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer copyright end  --> */}
    </footer>
  );
};

export default FooterThree;