import React from "react";

import MobileMenus from "./MobileMenus";

const OffCanvas = ({ setOffCanvas, isOffCanvas }) => {
  return (
    <>
      <div
        className={`offcanvas__area off-canvas-bg ${
          isOffCanvas ? "opened" : ""
        }`}
       
      >
        <div className="offcanvas_area-logo">
          <span className="offcanvas__close-btn">
            <button onClick={() => setOffCanvas(false)}>
              <i className="fal fa-times" />
            </button>
          </span>
        </div>
        <div className="offcanvas-content">
          <div className="offcanvas-logo pb-30 pt-30">
            <img src="assets/img/logo/logo.png" alt="" />
          </div>
          
        </div>

        <div className="tp-mobile-menu mean-container d-block d-xl-none">
          <div className="mean-bar">
            <MobileMenus />
          </div>
        </div>

        <div className="tp-footer__widget pb-30 offcanvas-ct-info">
         {/*  <h3 className="tp-footer__widget-title">Quick Links</h3>
          <ul>
            <li>
              <Link to="#">27 Division St, New York, NY 10002, USA</Link>
            </li>
            <li>
              <Link to="tel:+88015569569365">(+880)52462545632</Link>
            </li>
            <li>
              <Link to="mailto:support@example.com">support@example.com</Link>
            </li>
            <li>
              <span> Office Hours: 9AM - 4PM</span>
            </li>
            <li>
              <span> Friday - Wekend Day</span>
            </li>
          </ul> */}
        </div>
      </div>
      <div
        onClick={() => setOffCanvas(false)}
        className={`body-overlay ${isOffCanvas ? "opened" : ""}`}
      ></div>
    </>
  );
};

export default OffCanvas;
