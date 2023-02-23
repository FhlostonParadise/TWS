import React from "react";

import Footer from "../../common/Footer/Footer";
import Menu from "../../common/Menu/Menu";

import OurService from "./OurService";

import ServiceBanner from "./ServiceBanner";

const Service = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <ServiceBanner />
      <OurService />
      <Footer />
    </>
  );
};

export default Service;
