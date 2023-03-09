import React from "react";
import FooterThree from "../common/Footer/FooterThree";
import Menu from "../common/Menu/Menu";
import AboutThree from "./AboutThree";
import BlogThree from "./BlogThree";
import OurService from "../Pages/Service/OurService";
import ContactThree from "./ContactThree";
import SliderHomeThree from "./SliderHomeThree";
import FAQBanner from "../Pages/FAQ/FaqBanner";
import Accordion from "../Pages/FAQ/Accordion";
import TopCtaArea from "../Home/TopCtaArea";
import TeamBanner from "../Pages/TeamPage/TeamBanner";


const HomeThree = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <TeamBanner />
      <OurService />
      <AboutThree />
      
      {/* <TopCtaArea /> */}
      
      <FAQBanner/>
      <Accordion />
      {/* <BlogThree /> */}
      <ContactThree />
   
    </>
  );
};

export default HomeThree;
