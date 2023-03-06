import React from "react";
import { Link } from "react-router-dom";

const Menus = () => {
  return (
    <ul>
      <li className="has-dropdown">
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
  );
};

export default Menus;
