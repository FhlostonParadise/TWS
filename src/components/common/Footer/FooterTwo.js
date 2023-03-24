import React from 'react';

const FooterTwo = () => {
  return (
    <footer>
      <div className="tp-footer__area black-bg">
        <div className="tp-footer">
         
        </div>
      </div>

      {/* <!-- footer copy right --> */}
      <div className="top-footer-copyright pt-30 black-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12">
              <div className="tp-copyrigh-text mb-30">
                <span>© {new Date().getFullYear()} Therapy With Shana</span>
              </div>
              <div className="tp-copyrigh-text mb-30">More</div>
            </div>
            <div className="col-md-4 col-12">
              <div className="tp-footer-social-icon mb-30 text-md-end">
                <ul>
                  <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer copyright end  --> */}
    </footer>
  );
};

export default FooterTwo;