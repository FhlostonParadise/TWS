import React from "react";
import { Link } from "react-router-dom";

const Menus = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#service">Service</a>
      </li>
      <li>
        <a href="#faq">FAQ</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default Menus;
