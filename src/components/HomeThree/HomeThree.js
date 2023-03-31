import React from "react";
import Menu from "../common/Menu/Menu";
import AboutThree from "./AboutThree";
import OurService from "../Pages/Service/OurService";
import ContactThree from "./ContactThree";
import SliderHomeThree from "./SliderHomeThree";
import FAQBanner from "../Pages/FAQ/FaqBanner";
import Accordion from "../Pages/FAQ/Accordion";
import FooterTwo from "../common/Footer/FooterTwo";
import ReactGA from 'react-ga';
ReactGA.initialize("G-2C81Y8CLGR");
ReactGA.pageview(window.location.pathname + window.location.search);
const HomeThree = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <SliderHomeThree />
      <AboutThree />
      <OurService />
      <FAQBanner />
      <Accordion />
      <ContactThree />
      <FooterTwo />
    </>
  );
};

export default HomeThree;
