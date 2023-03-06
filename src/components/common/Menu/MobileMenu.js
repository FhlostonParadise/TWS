import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <>
      <div className=" col-lg-7 col-md-4 d-none d-md-block">
        <div className="main-menu text-center">
          <nav id="mobile-menu mobile-menu-area">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/team-details">About Me</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/service">Services</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
