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
              <a href="#about">About</a>
              </li>
              <li>
              <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
